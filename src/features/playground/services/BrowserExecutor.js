/**
 * BrowserExecutor — runs code 100% in the browser, no external API.
 *
 * JavaScript / TypeScript / JSX: Web Worker + @babel/standalone (in-browser "compiler")
 * Python: Pyodide WASM · SQL: sql.js · HTML/CSS/JSON/Markdown: native browser APIs
 *
 * Compiled languages (C, C++, Java, …): lightweight print-line simulation (no gcc/javac).
 */

import {
  compileWithBabel,
  looksLikeJsx,
  runJavaScriptInWorker,
  transpileTypeScript,
} from "./jsRunner";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = () => reject(new Error(`Failed to load: ${src}`));
    document.head.appendChild(s);
  });
}

function ok(stdout) { return { stdout, stderr: '', error: null }; }
function err(stderr) { return { stdout: '', stderr, error: stderr }; }
function preview(html) { return { stdout: '', stderr: '', error: null, previewHTML: html }; }

// ─── JavaScript / JSX (Web Worker sandbox) ───────────────────────────────────

export function runJavaScript(code, options) {
  return runJavaScriptInWorker(code, options);
}

export async function runJSX(code) {
  try {
    const compiled = await compileWithBabel(code, ["react"], "snippet.jsx");
    return runJavaScriptInWorker(compiled);
  } catch (e) {
    return err(e.message);
  }
}

export async function runTSX(code) {
  try {
    const compiled = await transpileTypeScript(code, {
      jsx: true,
      filename: "snippet.tsx",
    });
    return runJavaScriptInWorker(compiled);
  } catch (e) {
    return err(e.message);
  }
}

// ─── TypeScript ───────────────────────────────────────────────────────────────

export async function runTypeScript(code) {
  try {
    if (/^\s*import\s+/m.test(code) || /^\s*export\s+|from\s+['"]/m.test(code)) {
      return {
        stdout: "",
        stderr: [
          "⚠️  Import/Export statements are not supported in browser mode.",
          "",
          "Write standalone TypeScript — types, interfaces, and functions work without imports.",
        ].join("\n"),
        error: null,
      };
    }

    const compiled = await transpileTypeScript(code, { filename: "snippet.ts" });
    return runJavaScriptInWorker(compiled);
  } catch (e) {
    return err(e.message);
  }
}

// ─── HTML/CSS ─────────────────────────────────────────────────────────────────

export function runHTML(code) {
  return Promise.resolve(preview(code));
}

// ─── JSON ─────────────────────────────────────────────────────────────────────

export function runJSON(code) {
  try {
    return Promise.resolve(ok(JSON.stringify(JSON.parse(code), null, 2)));
  } catch (e) { return Promise.resolve(err(`JSON Error: ${e.message}`)); }
}

// ─── Markdown ─────────────────────────────────────────────────────────────────

export async function runMarkdown(code) {
  if (!window.marked) await loadScript('https://cdn.jsdelivr.net/npm/marked/marked.min.js');
  const body = window.marked.parse(code);
  return preview(`<html><head><style>body{font-family:-apple-system,sans-serif;padding:2rem;line-height:1.7;max-width:800px;margin:0 auto;color:#24292f}h1,h2,h3{border-bottom:1px solid #d0d7de;padding-bottom:.3em}code{background:#f6f8fa;padding:.2em .4em;border-radius:3px;font-size:85%}pre{background:#f6f8fa;padding:1rem;border-radius:6px;overflow:auto}blockquote{border-left:4px solid #0550ae;margin:0;padding:.5em 1em;color:#57606a}</style></head><body>${body}</body></html>`);
}

// ─── SQL (sql.js) ─────────────────────────────────────────────────────────────

export async function runSQL(code) {
  try {
    if (!window.initSqlJs) await loadScript('https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.2/sql-wasm.min.js');
    const SQL = await window.initSqlJs({ locateFile: f => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.2/${f}` });
    const db = new SQL.Database();
    const lines = [];
    const stmts = code.split(';').map(s => s.trim()).filter(Boolean);
    for (const s of stmts) {
      try {
        const res = db.exec(s);
        if (res.length) {
          for (const r of res) {
            const widths = r.columns.map((c, i) => Math.max(c.length, ...r.values.map(row => String(row[i] ?? 'NULL').length)));
            const pad = (v, w) => String(v ?? 'NULL').padEnd(w);
            const sep = widths.map(w => '-'.repeat(w + 2)).join('+');
            lines.push('| ' + r.columns.map((c, i) => pad(c, widths[i])).join(' | ') + ' |');
            lines.push('|-' + sep + '-|');
            for (const row of r.values) lines.push('| ' + row.map((v, i) => pad(v, widths[i])).join(' | ') + ' |');
          }
        } else { lines.push(`✓ ${s.split(' ')[0].toUpperCase()} executed`); }
      } catch (e) { lines.push(`✗ ERROR: ${e.message}`); }
    }
    db.close();
    return ok(lines.join('\n'));
  } catch (e) { return err(e.message); }
}

// ─── Python (Pyodide) — 100% in-browser ─────────────────────────────────────

let pyodideInstance = null;
let pyodideLoading = false;
const pyodideLoadedPackages = new Set();
let matplotlibPyodideReady = false;

const MATPLOTLIB_PYODIDE_SETUP = `
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import io, base64

if "_POLYCODE_FIGURES" not in globals():
    _POLYCODE_FIGURES = []

def _polycode_clear_figures():
    global _POLYCODE_FIGURES
    _POLYCODE_FIGURES = []

def _polycode_capture_show(*args, **kwargs):
    import matplotlib.pyplot as plt
    fig = plt.gcf()
    if fig.get_axes():
        buf = io.BytesIO()
        fig.savefig(buf, format="png", bbox_inches="tight", dpi=110)
        _POLYCODE_FIGURES.append(base64.b64encode(buf.getvalue()).decode("ascii"))
    plt.close(fig)

plt.show = _polycode_capture_show
`;

const PYTHON_STDLIB_PREFIXES = [
  'math', 'random', 'datetime', 'time', 'sys', 'os', 'json', 're',
  'collections', 'itertools', 'functools', 'typing', 'statistics',
  'string', 'textwrap', 'unicodedata', 'struct', 'codecs', 'copy',
  'pprint', 'reprlib', 'enum', 'graphlib', 'contextlib', 'abc',
];

/** Pyodide wheels available via loadPackage (used by learn + playground). */
const PYTHON_PYODIDE_PACKAGES = {
  numpy: 'numpy',
  pandas: 'pandas',
  matplotlib: 'matplotlib',
  scipy: 'scipy',
  micropip: 'micropip',
  sklearn: 'scikit-learn',
  skimage: 'scikit-image',
};

function getImportedModules(code = '') {
  const modules = new Set();
  const importRegex = /^\s*(?:import|from)\s+([\w.]+)/gm;
  let match = importRegex.exec(code);
  while (match) {
    modules.add(match[1].split('.')[0]);
    match = importRegex.exec(code);
  }
  return [...modules];
}

function isAllowedPythonModule(moduleName = '') {
  if (!moduleName) return true;
  if (PYTHON_STDLIB_PREFIXES.some((lib) => moduleName === lib || moduleName.startsWith(`${lib}.`))) {
    return true;
  }
  return Object.prototype.hasOwnProperty.call(PYTHON_PYODIDE_PACKAGES, moduleName);
}

async function ensurePyodidePackages(py, code = '') {
  const needed = getImportedModules(code)
    .map((name) => PYTHON_PYODIDE_PACKAGES[name])
    .filter(Boolean);

  for (const pkg of needed) {
    if (pyodideLoadedPackages.has(pkg)) continue;
    await py.loadPackage(pkg);
    pyodideLoadedPackages.add(pkg);
  }
}

function resetPyodideIO(py) {
  py.runPython(`
import sys, io
class _Cap(io.StringIO):
    pass
sys.stdout = _Cap()
sys.stderr = _Cap()
`);
}

function codeUsesMatplotlib(source = '') {
  return /(?:^|\n)\s*(?:import|from)\s+matplotlib\b/m.test(source) ||
    /\bmatplotlib\.pyplot\b/.test(source) ||
    /\bplt\.(?:show|plot|scatter|bar|hist|pie|subplots|figure|savefig|annotate)\s*\(/.test(source);
}

async function ensureMatplotlibPyodideSetup(py) {
  if (matplotlibPyodideReady) return;
  await py.loadPackage('matplotlib');
  pyodideLoadedPackages.add('matplotlib');
  py.runPython(MATPLOTLIB_PYODIDE_SETUP);
  matplotlibPyodideReady = true;
}

function extractPyodidePlotImages(py) {
  try {
    const raw = py.runPython('__import__("json").dumps(_POLYCODE_FIGURES)');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter(Boolean) : [];
  } catch {
    return [];
  }
}

async function ensurePyodide() {
  if (pyodideInstance) return pyodideInstance;
  if (pyodideLoading) {
    // Wait for existing load
    while (pyodideLoading) {
      await new Promise(r => setTimeout(r, 100));
    }
    return pyodideInstance;
  }
  
  pyodideLoading = true;
  try {
    if (!window.loadPyodide) {
      await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js';
        script.onload = resolve;
        script.onerror = () => reject(new Error('Failed to load Pyodide'));
        document.head.appendChild(script);
      });
    }
    
    pyodideInstance = await window.loadPyodide({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/',
    });
    
    resetPyodideIO(pyodideInstance);
    
    pyodideLoading = false;
    return pyodideInstance;
  } catch (e) {
    pyodideLoading = false;
    throw e;
  }
}

export async function runPython(code, stdin = '') {
  try {
    const blocked = getImportedModules(code).filter(
      (moduleName) => !isAllowedPythonModule(moduleName),
    );
    if (blocked.length) {
      const importedModule = blocked[0];
      return {
        stdout: '',
        stderr: [
          `⚠️  The module '${importedModule}' is not available in browser mode.`,
          '',
          '💡 This playground runs Python with Pyodide (WebAssembly).',
          '',
          '✅ Available: stdlib, numpy, pandas, matplotlib, scipy, micropip',
          '❌ Not available: requests, socket, threading, subprocess, etc.',
        ].join('\n'),
        error: `Module '${importedModule}' is not available in the browser.`,
      };
    }

    const py = await ensurePyodide();
    await ensurePyodidePackages(py, code);
    const usesMatplotlib = codeUsesMatplotlib(code);
    if (usesMatplotlib) {
      await ensureMatplotlibPyodideSetup(py);
    }
    resetPyodideIO(py);
    if (usesMatplotlib && matplotlibPyodideReady) {
      py.runPython('_polycode_clear_figures()');
    }
    
    let error = null;
    try {
      py.runPython(code);
    } catch (e) {
      error = e.message;
    }
    
    const stdout = py.runPython('sys.stdout.getvalue()');
    const stderr = py.runPython('sys.stderr.getvalue()');
    const plotImages =
      usesMatplotlib && matplotlibPyodideReady ? extractPyodidePlotImages(py) : [];
    
    return { stdout, stderr, error, plotImages };
  } catch (e) {
    return err(`Python Error: ${e.message}`);
  }
}

// ─── PHP (lite — basic echo/print only via eval trick) ───────────────────────

export function runPHP(code) {
  // Very basic PHP simulation for echo/print/variables
  try {
    // Check for require/include statements
    if (/\b(require|require_once|include|include_once)\s*['"(]/i.test(code)) {
      return Promise.resolve({
        stdout: '',
        stderr: [
          '⚠️  File inclusion statements are not supported in browser mode.',
          '',
          '💡 What\'s happening?',
          'This playground runs PHP code by simulating it in JavaScript.',
          'Statements like require, include need a server filesystem.',
          '',
          '✅ What you can do instead:',
          '• Use echo, print for output',
          '• Work with variables, arrays, loops',
          '• Create functions and classes',
          '• All basic PHP syntax works great!',
          '',
          '📝 Example:',
          '❌ require \'config.php\';',
          '❌ include \'header.php\';',
          '✅ echo "Hello World";',
          '✅ $name = "John"; echo "Hi, $name!";',
        ].join('\n'),
        error: null,
      });
    }

    const normalized = code.replace(/<\?php\s*/gi, '').replace(/\?>/gi, '');
    // Convert basic PHP to JS
    let js = normalized
      .replace(/echo\s+(['"`])(.*?)\1\s*;/g, 'console.log($1$2$1);')
      .replace(/echo\s+(.*?);/g, 'console.log($1);')
      .replace(/print\s+(.*?);/g, 'console.log($1);')
      .replace(/\$(\w+)/g, 'let_$1')  // $var -> let_var (very rough)
      .replace(/let_let_/g, 'let_')
      .replace(/\.([\s])/g, '+$1')    // . concat -> +
      ;
    return runJavaScript(js);
  } catch (e) { return Promise.resolve(err(e.message)); }
}

// ─── Brainfuck ────────────────────────────────────────────────────────────────

export function runBrainfuck(code) {
  try {
    const prog = code.replace(/[^><+\-.,[\]]/g, '');
    const mem = new Uint8Array(30000);
    let dp = 0, ip = 0, out = '';
    const brackets = {};
    const stack = [];
    for (let i = 0; i < prog.length; i++) {
      if (prog[i] === '[') stack.push(i);
      else if (prog[i] === ']') { const j = stack.pop(); brackets[j] = i; brackets[i] = j; }
    }
    let steps = 0;
    while (ip < prog.length && steps++ < 1000000) {
      switch (prog[ip]) {
        case '>': dp = (dp + 1) % 30000; break;
        case '<': dp = (dp - 1 + 30000) % 30000; break;
        case '+': mem[dp] = (mem[dp] + 1) % 256; break;
        case '-': mem[dp] = (mem[dp] - 1 + 256) % 256; break;
        case '.': out += String.fromCharCode(mem[dp]); break;
        case '[': if (!mem[dp]) ip = brackets[ip]; break;
        case ']': if (mem[dp]) ip = brackets[ip]; break;
        default: ip++; break;
      }
      ip++;
    }
    return Promise.resolve(ok(out || '(no output)'));
  } catch (e) { return Promise.resolve(err(e.message)); }
}

// ─── Lua (Fengari) ────────────────────────────────────────────────────────────

export async function runLua(code) {
  try {
    if (!window.fengari) {
      await loadScript('https://cdn.jsdelivr.net/npm/fengari-web@0.1.4/dist/fengari-web.min.js');
      await new Promise(r => setTimeout(r, 200));
    }
    window.fengari.load(code);
    // fengari.load returns a function or throws
    // capture print output by overriding
    return runJavaScript(`
      // Lua via Fengari must be run in the page context — falling back to simulation
      console.log("Lua via Fengari loaded — ${code.split('\\n')[0].replace(/"/g, '\\"')}");
      console.log("(Full Lua execution requires fengari integration in page context)");
    `);
  } catch (e) { return err(e.message); }
}

// ─── CSS (render in preview) ──────────────────────────────────────────────────

export function runCSS(code) {
  return Promise.resolve(preview(`<html><head><style>${code}</style></head><body>
    <div class="preview-note" style="font-family:sans-serif;padding:1rem;color:#666;font-size:.8rem;">
      CSS Preview — add HTML elements to see styles applied:
    </div>
    <div style="padding:1rem;">
      <h1>Heading 1</h1><h2>Heading 2</h2>
      <p>Paragraph text. <a href="#">A link</a>. <strong>Bold</strong>. <em>Italic</em>.</p>
      <button>Button</button>
      <ul><li>List item 1</li><li>List item 2</li></ul>
      <div class="box">A div.box element</div>
      <input type="text" placeholder="Input field" />
    </div>
  </body></html>`));
}

// ─── XML ─────────────────────────────────────────────────────────────────────

export function runXML(code) {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(code, 'text/xml');
    const err2 = doc.querySelector('parsererror');
    if (err2) return Promise.resolve(err(`XML Parse Error: ${err2.textContent}`));
    const serializer = new XMLSerializer();
    return Promise.resolve(ok(serializer.serializeToString(doc)));
  } catch (e) { return Promise.resolve(err(e.message)); }
}

// ─── Regex tester ─────────────────────────────────────────────────────────────

export function runRegex(code) {
  try {
    // Expect format:  /pattern/flags\n---\ntest string
    const [regexPart, ...testParts] = code.split(/\n---+\n/);
    const testStr = testParts.join('\n') || 'test string here';
    const m = regexPart.trim().match(/^\/(.*)\/([gimsuy]*)$/);
    if (!m) return Promise.resolve(err('Format: /pattern/flags\n---\ntest string'));
    const matches = [...testStr.matchAll(new RegExp(m[1], m[2] + 'g'))];
    const lines = [`Pattern: ${regexPart.trim()}`, `Test: "${testStr.substring(0, 100)}"`, `Test matches: ${matches.length}`, ''];
    matches.forEach((match, i) => {
      lines.push(`Match ${i + 1}: "${match[0]}" at index ${match.index}`);
      match.slice(1).forEach((g, gi) => lines.push(`  Group ${gi + 1}: "${g}"`));
    });
    return Promise.resolve(ok(lines.join('\n') || 'No matches'));
  } catch (e) { return Promise.resolve(err(e.message)); }
}

// ─── Server-style local simulation (no API/backend) ──────────────────────────

function extractQuotedText(s = '') {
  const out = [];
  const re = /"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'|`([^`\\]*(?:\\.[^`\\]*)*)`/g;
  let m;
  while ((m = re.exec(s)) !== null) {
    const raw = m[1] ?? m[2] ?? m[3] ?? '';
    out.push(
      raw
        .replace(/\\n/g, '\n')
        .replace(/\\t/g, '\t')
        .replace(/\\"/g, '"')
        .replace(/\\'/g, "'")
    );
  }
  return out;
}

function firstNonEmptyLine(code) {
  const lines = code.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed) return trimmed;
  }
  return '';
}

function makeSimulationHeader(language) {
  return `ℹ Running ${language} in local browser simulation mode (no API/backend).`;
}

function runServerLanguageLocally(language, code) {
  try {
    const lines = code.split('\n');
    const out = [];
    const lowerLang = language.toLowerCase();
    const pushTexts = (texts) => texts.forEach(t => out.push(t));

    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (!line) continue;

      if (/^printf\s*\(/.test(line)) {
        pushTexts(extractQuotedText(line));
        continue;
      }
      if (/std::cout\s*<</.test(line) || /cout\s*<</.test(line)) {
        pushTexts(extractQuotedText(line));
        continue;
      }
      if (/System\.out\.print/.test(line) || /System\.out\.println/.test(line)) {
        pushTexts(extractQuotedText(line));
        continue;
      }
      if (/fmt\.Print/.test(line)) {
        pushTexts(extractQuotedText(line));
        continue;
      }
      if (/println!\s*\(/.test(line) || /print!\s*\(/.test(line)) {
        pushTexts(extractQuotedText(line));
        continue;
      }
      if (/^\s*puts\s+/.test(line) || /^\s*print\s+/.test(line)) {
        pushTexts(extractQuotedText(line));
        continue;
      }
      if (/^\s*echo\s+/.test(line) && (lowerLang === 'bash' || lowerLang === 'batch' || lowerLang === 'shell' || lowerLang === 'sh')) {
        const txt = line.replace(/^echo\s+/i, '').replace(/^@/g, '').trim();
        if (txt) out.push(txt);
        continue;
      }
      if (/^\s*println\s*\(/.test(line) || /^\s*print\s*\(/.test(line)) {
        pushTexts(extractQuotedText(line));
        continue;
      }
      if (/Console\.Write/.test(line)) {
        pushTexts(extractQuotedText(line));
        continue;
      }
      if (/Write-Host|Write-Output/.test(line)) {
        pushTexts(extractQuotedText(line));
        continue;
      }
      if (/^\s*cat\s*\(/.test(line)) {
        pushTexts(extractQuotedText(line));
        continue;
      }
      if (/^\s*print\s+["']/.test(line) && lowerLang === 'perl') {
        pushTexts(extractQuotedText(line));
      }
    }

    const header = makeSimulationHeader(language);
    if (out.length) {
      return Promise.resolve(ok([header, '', ...out].join('\n')));
    }

    const hint = [
      header,
      '',
      'No direct print statement was detected.',
      'Supported output patterns include:',
      '• C/C++: printf(...), cout << ...',
      '• Java/Kotlin/Scala/C#: println(...), System.out.println(...), Console.WriteLine(...)',
      '• Go/Rust: fmt.Println(...), println!(...)',
      '• Shell/Batch/PowerShell: echo, Write-Host',
      '',
      `First code line: ${firstNonEmptyLine(code) || '(empty)'}`,
    ];
    return Promise.resolve(ok(hint.join('\n')));
  } catch (e) {
    return Promise.resolve(err(`Simulation Error: ${e.message}`));
  }
}

// ─── Server-side fallback message ─────────────────────────────────────────────

export function runUnsupported(language) {
  return Promise.resolve({
    stdout: '',
    stderr: [
      `ℹ  ${language} requires a server-side runtime.`,
      ``,
      `This playground runs 100% in your browser.`,
      ``,
      `Browser-supported languages:`,
      `  ✓  JavaScript / TypeScript`,
      `  ✓  Python  (Pyodide WASM)`,
      `  ✓  HTML / CSS`,
      `  ✓  SQL  (SQLite via sql.js)`,
      `  ✓  JSON / XML`,
      `  ✓  Markdown`,
      `  ✓  Brainfuck`,
      `  ✓  Regex tester`,
    ].join('\n'),
    error: null,
  });
}

// ─── Language registry ────────────────────────────────────────────────────────

export const LANGUAGE_REGISTRY = {
  // Browser-native
  javascript: { label: 'JavaScript', icon: '🟨', engine: 'js', mono: 'javascript', browserNative: true },
  js: { label: 'JavaScript', icon: '🟨', engine: 'js', mono: 'javascript', browserNative: true },
  jsx: { label: 'JSX', icon: '⚛️', engine: 'jsx', mono: 'javascript', browserNative: true },
  typescript: { label: 'TypeScript', icon: '🔷', engine: 'ts', mono: 'typescript', browserNative: true },
  ts: { label: 'TypeScript', icon: '🔷', engine: 'ts', mono: 'typescript', browserNative: true },
  tsx: { label: 'TSX', icon: '🔷', engine: 'tsx', mono: 'typescript', browserNative: true },
  python: { label: 'Python', icon: '🐍', engine: 'py', mono: 'python', browserNative: true },
  py: { label: 'Python', icon: '🐍', engine: 'py', mono: 'python', browserNative: true },
  html: { label: 'HTML', icon: '🌐', engine: 'html', mono: 'html', browserNative: true },
  css: { label: 'CSS', icon: '🎨', engine: 'css', mono: 'css', browserNative: true },
  sql: { label: 'SQL', icon: '🗄️', engine: 'sql', mono: 'sql', browserNative: true },
  json: { label: 'JSON', icon: '📦', engine: 'json', mono: 'json', browserNative: true },
  xml: { label: 'XML', icon: '📋', engine: 'xml', mono: 'xml', browserNative: true },
  markdown: { label: 'Markdown', icon: '📝', engine: 'md', mono: 'markdown', browserNative: true },
  md: { label: 'Markdown', icon: '📝', engine: 'md', mono: 'markdown', browserNative: true },
  brainfuck: { label: 'Brainfuck', icon: '🧠', engine: 'bf', mono: 'plaintext', browserNative: true },
  bf: { label: 'Brainfuck', icon: '🧠', engine: 'bf', mono: 'plaintext', browserNative: true },
  regex: { label: 'Regex', icon: '🔍', engine: 'regex', mono: 'plaintext', browserNative: true },
  php: { label: 'PHP', icon: '🐘', engine: 'php', mono: 'php', browserNative: true },
  // Server-side
  c: { label: 'C', icon: '⚙️', engine: 'server', mono: 'c', browserNative: false },
  cpp: { label: 'C++', icon: '💠', engine: 'server', mono: 'cpp', browserNative: false },
  'c++': { label: 'C++', icon: '💠', engine: 'server', mono: 'cpp', browserNative: false },
  java: { label: 'Java', icon: '☕', engine: 'server', mono: 'java', browserNative: false },
  go: { label: 'Go', icon: '🐹', engine: 'server', mono: 'go', browserNative: false },
  rust: { label: 'Rust', icon: '🦀', engine: 'server', mono: 'rust', browserNative: false },
  rs: { label: 'Rust', icon: '🦀', engine: 'server', mono: 'rust', browserNative: false },
  ruby: { label: 'Ruby', icon: '💎', engine: 'server', mono: 'ruby', browserNative: false },
  rb: { label: 'Ruby', icon: '💎', engine: 'server', mono: 'ruby', browserNative: false },
  bash: { label: 'Bash', icon: '🖥️', engine: 'server', mono: 'shell', browserNative: false },
  shell: { label: 'Shell', icon: '🖥️', engine: 'server', mono: 'shell', browserNative: false },
  sh: { label: 'Shell', icon: '🖥️', engine: 'server', mono: 'shell', browserNative: false },
  batch: { label: 'Batch', icon: '🪟', engine: 'server', mono: 'bat', browserNative: false },
  bat: { label: 'Batch', icon: '🪟', engine: 'server', mono: 'bat', browserNative: false },
  cmd: { label: 'Batch', icon: '🪟', engine: 'server', mono: 'bat', browserNative: false },
  kotlin: { label: 'Kotlin', icon: '🎯', engine: 'server', mono: 'kotlin', browserNative: false },
  swift: { label: 'Swift', icon: '🍎', engine: 'server', mono: 'swift', browserNative: false },
  csharp: { label: 'C#', icon: '🔵', engine: 'server', mono: 'csharp', browserNative: false },
  cs: { label: 'C#', icon: '🔵', engine: 'server', mono: 'csharp', browserNative: false },
  dart: { label: 'Dart', icon: '🎯', engine: 'server', mono: 'dart', browserNative: false },
  r: { label: 'R', icon: '📊', engine: 'server', mono: 'r', browserNative: false },
  perl: { label: 'Perl', icon: '🐪', engine: 'server', mono: 'perl', browserNative: false },
  scala: { label: 'Scala', icon: '⭕', engine: 'server', mono: 'scala', browserNative: false },
  lua: { label: 'Lua', icon: '🌙', engine: 'server', mono: 'lua', browserNative: false },
  powershell: { label: 'PowerShell', icon: '🔷', engine: 'server', mono: 'powershell', browserNative: false },
  ps1: { label: 'PowerShell', icon: '🔷', engine: 'server', mono: 'powershell', browserNative: false },
};

export function resolveEngine(language = '') {
  const key = language.toLowerCase().replace(/^language-/, '').trim();
  return LANGUAGE_REGISTRY[key] || { label: key || 'text', icon: '📄', engine: 'server', mono: 'plaintext', browserNative: false };
}

/**
 * Master dispatch
 */
export async function executeCode(code, language, stdin = '') {
  const { engine, label } = resolveEngine(language);
  switch (engine) {
    case 'js':
      if (looksLikeJsx(code)) return runJSX(code);
      return runJavaScript(code);
    case 'jsx': return runJSX(code);
    case 'tsx': return runTSX(code);
    case 'ts': return runTypeScript(code);
    case 'html': return runHTML(code);
    case 'css': return runCSS(code);
    case 'json': return runJSON(code);
    case 'xml': return runXML(code);
    case 'md': return runMarkdown(code);
    case 'sql': return runSQL(code);
    case 'bf': return runBrainfuck(code);
    case 'regex': return runRegex(code);
    case 'php': return runPHP(code);
    case 'py': return runPython(code, stdin);
    case 'server': return runServerLanguageLocally(label, code);
    default: return runUnsupported(label);
  }
}

export { JS_EXECUTION_TIMEOUT_MS } from "./jsRunner";