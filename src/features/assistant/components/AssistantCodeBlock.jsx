import React, { lazy, Suspense, useState } from "react";
import { Check, Copy } from "lucide-react";

const SyntaxHighlighter = lazy(() =>
  import("react-syntax-highlighter").then((m) => ({ default: m.Prism })),
);

let themesPromise = null;
function loadThemes() {
  if (!themesPromise) {
    themesPromise = Promise.all([
      import("react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus"),
      import("react-syntax-highlighter/dist/esm/styles/prism/one-light"),
    ]).then(([dark, light]) => ({ dark: dark.default, light: light.default }));
  }
  return themesPromise;
}

const LANGUAGE_LABELS = {
  python: "Python",
  javascript: "JavaScript",
  js: "JavaScript",
  typescript: "TypeScript",
  ts: "TypeScript",
  cpp: "C++",
  "c++": "C++",
  csharp: "C#",
  "c#": "C#",
  java: "Java",
  go: "Go",
  rust: "Rust",
  sql: "SQL",
  bash: "Bash",
  shell: "Shell",
  json: "JSON",
  html: "HTML",
  css: "CSS",
};

function normalizeLanguage(language = "") {
  return language.trim().toLowerCase();
}

function languageLabel(language) {
  const key = normalizeLanguage(language);
  if (!key || key === "code" || key === "text") return "Code";
  return LANGUAGE_LABELS[key] || key.charAt(0).toUpperCase() + key.slice(1);
}

function prismLanguage(language) {
  const key = normalizeLanguage(language);
  if (key === "c++") return "cpp";
  if (key === "c#") return "csharp";
  if (key === "js") return "javascript";
  if (key === "ts") return "typescript";
  return key || "text";
}

function CodeSkeleton({ code }) {
  return (
    <pre className="assistant-code-pre assistant-code-pre--loading">{code}</pre>
  );
}

function HighlightedCode({ language, code, isLight }) {
  const [themes, setThemes] = React.useState(null);

  React.useEffect(() => {
    let active = true;
    loadThemes().then((loaded) => {
      if (active) setThemes(loaded);
    });
    return () => {
      active = false;
    };
  }, []);

  if (!themes) return <CodeSkeleton code={code} />;

  const baseStyle = isLight ? themes.light : themes.dark;

  return (
    <SyntaxHighlighter
      language={prismLanguage(language)}
      style={baseStyle}
      customStyle={{
        margin: 0,
        padding: "14px 16px",
        background: "transparent",
        fontSize: "0.8125rem",
        lineHeight: 1.65,
      }}
      codeTagProps={{
        style: {
          fontFamily: "var(--font-mono, ui-monospace, 'Cascadia Code', monospace)",
        },
      }}
      showLineNumbers={code.split("\n").length > 1}
      lineNumberStyle={{
        minWidth: "2.2em",
        paddingRight: "1em",
        color: "#9ca3af",
        userSelect: "none",
      }}
      wrapLongLines
    >
      {code}
    </SyntaxHighlighter>
  );
}

function useIsLightTheme() {
  const [isLight, setIsLight] = useState(() => {
    if (typeof document === "undefined") return false;
    return (
      document.documentElement.getAttribute("data-theme") === "light" ||
      document.body.classList.contains("light-theme") ||
      document.body.classList.contains("theme-light")
    );
  });

  React.useEffect(() => {
    const sync = () => {
      setIsLight(
        document.documentElement.getAttribute("data-theme") === "light" ||
          document.body.classList.contains("light-theme") ||
          document.body.classList.contains("theme-light"),
      );
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return isLight;
}

export default function AssistantCodeBlock({ language = "code", code }) {
  const [copied, setCopied] = useState(false);
  const isLight = useIsLightTheme();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="assistant-code-block">
      <div className="assistant-code-header">
        <div className="assistant-code-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="assistant-code-lang">{languageLabel(language)}</span>
        <button
          type="button"
          className="assistant-code-copy"
          onClick={handleCopy}
          aria-label={copied ? "Copied" : "Copy code"}
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
      <div className="assistant-code-body">
        <Suspense fallback={<CodeSkeleton code={code} />}>
          <HighlightedCode language={language} code={code} isLight={isLight} />
        </Suspense>
      </div>
    </div>
  );
}
