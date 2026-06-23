/**
 * Browser-only JavaScript execution (Web Worker sandbox).
 * TypeScript via typescript.js CDN; JSX/TSX via @babel/standalone.
 */

export const JS_EXECUTION_TIMEOUT_MS = 30000;

const BABEL_URL =
  "https://cdn.jsdelivr.net/npm/@babel/standalone@7.26.9/babel.min.js";
const TYPESCRIPT_URL =
  "https://cdn.jsdelivr.net/npm/typescript@5.8.3/lib/typescript.min.js";

let babelLoadPromise = null;
let typescriptLoadPromise = null;

function formatConsoleArgs(args) {
  return args
    .map((value) => {
      try {
        if (value === undefined) return "undefined";
        if (value === null) return "null";
        if (typeof value === "object") return JSON.stringify(value, null, 2);
        return String(value);
      } catch {
        return String(value);
      }
    })
    .join(" ");
}

const IMPORT_EXPORT_MESSAGE = [
  "Import/Export statements are not supported in browser mode.",
  "",
  "Write standalone scripts — functions, classes, and types work without imports.",
  "For modules, use HTML with <script type=\"module\"> or stick to plain JS/TS.",
].join("\n");

function getBabelGlobal() {
  const babel = window.Babel;
  return babel && typeof babel.transform === "function" ? babel : null;
}

function getTypeScriptGlobal() {
  const ts = window.ts;
  return ts && typeof ts.transpileModule === "function" ? ts : null;
}

function loadExternalScript({ src, datasetKey, getGlobal, onReset }) {
  const existing = getGlobal();
  if (existing) return Promise.resolve(existing);

  const prior = document.querySelector(`script[data-${datasetKey}]`);
  if (prior?.dataset.loaded === "true") {
    const loaded = getGlobal();
    if (loaded) return Promise.resolve(loaded);
  }

  return new Promise((resolve, reject) => {
    const finish = () => {
      const loaded = getGlobal();
      if (loaded) {
        resolve(loaded);
        return;
      }
      onReset?.();
      reject(new Error("Script loaded but runtime is unavailable."));
    };

    if (prior) {
      prior.addEventListener("load", () => {
        prior.dataset.loaded = "true";
        finish();
      });
      prior.addEventListener("error", () => {
        onReset?.();
        reject(new Error(`Failed to load ${datasetKey}`));
      });
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.dataset[datasetKey] = "true";
    script.onload = () => {
      script.dataset.loaded = "true";
      finish();
    };
    script.onerror = () => {
      onReset?.();
      reject(new Error(`Failed to load ${datasetKey}`));
    };
    document.head.appendChild(script);
  });
}

export function loadBabel() {
  if (!babelLoadPromise) {
    babelLoadPromise = loadExternalScript({
      src: BABEL_URL,
      datasetKey: "polycodeBabel",
      getGlobal: getBabelGlobal,
      onReset: () => {
        babelLoadPromise = null;
      },
    });
  }
  return babelLoadPromise;
}

export function loadTypeScript() {
  if (!typescriptLoadPromise) {
    typescriptLoadPromise = loadExternalScript({
      src: TYPESCRIPT_URL,
      datasetKey: "polycodeTypescript",
      getGlobal: getTypeScriptGlobal,
      onReset: () => {
        typescriptLoadPromise = null;
      },
    });
  }
  return typescriptLoadPromise;
}

export async function compileWithBabel(code, presets, filename = "snippet.js") {
  const babel = await loadBabel();
  const result = babel.transform(code, { presets, filename });
  if (!result?.code) {
    throw new Error("Babel produced no output.");
  }
  return result.code;
}

export async function transpileTypeScript(code, options = {}) {
  const ts = await loadTypeScript();
  const { jsx = false, filename = jsx ? "snippet.tsx" : "snippet.ts" } =
    options;

  const result = ts.transpileModule(code, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2020,
      jsx: jsx ? ts.JsxEmit.React : ts.JsxEmit.None,
      removeComments: false,
    },
    fileName: filename,
    reportDiagnostics: true,
  });

  const diagnostic = result.diagnostics?.[0];
  if (diagnostic) {
    const message = ts.flattenDiagnosticMessageText(
      diagnostic.messageText,
      "\n",
    );
    throw new Error(message);
  }

  if (!result.outputText?.trim()) {
    throw new Error("TypeScript produced no output.");
  }

  return result.outputText;
}

export function looksLikeJsx(code = "") {
  return (
    /return\s*\(\s*</.test(code) ||
    /<\s*[A-Za-z][\w.-]*[\s/>]/.test(code) ||
    /<\/[A-Za-z]/.test(code)
  );
}

/**
 * Run user JavaScript in an isolated worker with a generous timeout.
 */
export function runJavaScriptInWorker(code, options = {}) {
  const timeoutMs = options.timeoutMs ?? JS_EXECUTION_TIMEOUT_MS;

  return new Promise((resolve) => {
    if (/^\s*import\s+/m.test(code) || /^\s*export\s+/m.test(code)) {
      resolve({
        stdout: "",
        stderr: IMPORT_EXPORT_MESSAGE,
        error: null,
      });
      return;
    }

    if (!code.trim()) {
      resolve({ stdout: "(no output)", stderr: "", error: null });
      return;
    }

    const workerSource = `
      const formatArgs = ${formatConsoleArgs.toString()};
      self.onmessage = async (event) => {
        const logs = [];
        const errors = [];
        const console = {
          log: (...args) => logs.push(formatArgs(args)),
          info: (...args) => logs.push(formatArgs(args)),
          warn: (...args) => logs.push("⚠ " + formatArgs(args)),
          error: (...args) => errors.push(formatArgs(args)),
          debug: (...args) => logs.push(formatArgs(args)),
          table: (...args) => logs.push(formatArgs(args)),
        };

        try {
          const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
          const runner = new AsyncFunction("console", event.data);
          const result = await runner(console);
          if (result !== undefined) {
            logs.push(formatArgs([result]));
          }
        } catch (error) {
          errors.push(error?.message || String(error));
        }

        self.postMessage({ done: true, logs, errors });
      };
    `;

    let settled = false;
    const blob = new Blob([workerSource], { type: "application/javascript" });
    const workerUrl = URL.createObjectURL(blob);
    const worker = new Worker(workerUrl);

    const finish = (result) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      worker.terminate();
      URL.revokeObjectURL(workerUrl);
      resolve(result);
    };

    const timer = setTimeout(() => {
      finish({
        stdout: "",
        stderr: [
          `Timed out (${Math.round(timeoutMs / 1000)}s).`,
          "",
          "Tips:",
          "• Check for infinite loops (while(true), heavy recursion)",
          "• Large Pyodide loads can take longer on first run",
          "• Break long work into smaller steps",
        ].join("\n"),
        error: `Timed out (${Math.round(timeoutMs / 1000)}s)`,
      });
    }, timeoutMs);

    worker.onmessage = (event) => {
      const { done, logs, errors } = event.data || {};
      if (!done) return;
      const stderr = (errors || []).join("\n");
      finish({
        stdout: (logs || []).join("\n"),
        stderr,
        error: stderr || null,
      });
    };

    worker.onerror = (event) => {
      finish({
        stdout: "",
        stderr: event.message || "JavaScript worker error",
        error: event.message || "JavaScript worker error",
      });
    };

    worker.postMessage(`"use strict";\n${code}`);
  });
}
