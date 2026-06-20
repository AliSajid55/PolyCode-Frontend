import { useCallback, useMemo, useState } from "react";
import { Sparkles } from "lucide-react";
import {
  runPythonCode,
  formatPythonOutput,
  getPythonRuntimeError,
} from "../../learn/shared/runPython.js";
import {
  runJavaScriptCode,
  formatJavaScriptOutput,
  getJavaScriptRuntimeError,
} from "../../learn/shared/runJavaScript.js";
import {
  runCppCode,
  formatCppOutput,
  getCppRuntimeError,
} from "../../learn/shared/runCpp.js";
import {
  runCsharpCode,
  formatCsharpOutput,
  getCsharpRuntimeError,
} from "../../learn/shared/runCsharp.js";

const LANGUAGES = [
  {
    id: "python",
    label: "Python",
    accent: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    desc: "Versatile and beginner-friendly — great for AI, data science, and automation.",
    code: `# Python Example\nname = "PolyCode"\nprint(f"Welcome to {name}!")`,
  },
  {
    id: "javascript",
    label: "JavaScript",
    accent: "#d97706",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    desc: "The language of the web — build interactive UIs, APIs, and full-stack apps.",
    code: `// JavaScript Example\nconst name = "PolyCode";\nconsole.log(\`Welcome to \${name}!\`);`,
  },
  {
    id: "cpp",
    label: "C++",
    accent: "#f34b7d",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    desc: "High-performance systems language for games, OS internals, and embedded software.",
    code: `// C++ Example\n#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << "Welcome to PolyCode!" << endl;\n  return 0;\n}`,
  },
  {
    id: "csharp",
    label: "C#",
    accent: "#9b4f96",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    desc: "Modern OOP from Microsoft — apps, games, and enterprise backends.",
    code: `// C# Example\nstring name = "PolyCode";\nConsole.WriteLine("Welcome to " + name + "!");`,
  },
];

const OUTPUT_HINT = "Run your code to see output here";

const COMMENT_PREFIXES = ["#", "//"];

function isCommentLine(line) {
  const trimmed = line.trimStart();
  return COMMENT_PREFIXES.some((prefix) => trimmed.startsWith(prefix));
}

function highlightDemoLine(line) {
  if (isCommentLine(line)) {
    return <span className="tryit-tok-comment">{line || " "}</span>;
  }

  const parts = [];
  const stringPattern = /("[^"]*"|'[^']*'|`[^`]*`)/g;
  let lastIndex = 0;
  let match;

  while ((match = stringPattern.exec(line)) !== null) {
    if (match.index > lastIndex) {
      parts.push(
        <span key={`t-${lastIndex}`}>{line.slice(lastIndex, match.index)}</span>,
      );
    }
    parts.push(
      <span className="tryit-tok-string" key={`s-${match.index}`}>
        {match[0]}
      </span>,
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < line.length) {
    parts.push(<span key={`t-${lastIndex}`}>{line.slice(lastIndex)}</span>);
  }

  if (parts.length === 0) {
    return line || " ";
  }

  return parts;
}

function DemoCodePanel({ code }) {
  const lines = useMemo(() => code.split("\n"), [code]);

  return (
    <div className="tryit-code-panel" aria-label="Sample code">
      <div className="tryit-code-gutter" aria-hidden="true">
        {lines.map((_, index) => (
          <span key={index}>{index + 1}</span>
        ))}
      </div>
      <pre className="tryit-code-pre">
        <code>
          {lines.map((line, index) => (
            <span className="tryit-code-line" key={index}>
              {highlightDemoLine(line)}
              {index < lines.length - 1 ? "\n" : null}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}

async function runForLanguage(langId, code) {
  if (langId === "python") {
    const { result } = await runPythonCode(code);
    const err = getPythonRuntimeError(result);
    if (err) throw new Error(err);
    return formatPythonOutput(result) || "(no output)";
  }
  if (langId === "javascript") {
    const { result } = await runJavaScriptCode(code);
    const err = getJavaScriptRuntimeError(result);
    if (err) throw new Error(err);
    return formatJavaScriptOutput(result) || "(no output)";
  }
  if (langId === "cpp") {
    const { result } = await runCppCode(code);
    const err = getCppRuntimeError(result);
    if (err) throw new Error(err);
    return formatCppOutput(result) || "(no output)";
  }
  if (langId === "csharp") {
    const { result } = await runCsharpCode(code);
    const err = getCsharpRuntimeError(result);
    if (err) throw new Error(err);
    return formatCsharpOutput(result) || "(no output)";
  }
  throw new Error("Unsupported language");
}

export default function TryItSection() {
  const [activeLang, setActiveLang] = useState(LANGUAGES[0]);
  const [output, setOutput] = useState("");
  const [running, setRunning] = useState(false);

  const hasOutput = Boolean(output);
  const isError = output.startsWith("Error:");
  const demoCode = activeLang.code;

  const switchLang = (lang) => {
    setActiveLang(lang);
    setOutput("");
  };

  const run = useCallback(async () => {
    if (running) return;
    setRunning(true);
    setOutput("");
    try {
      const out = await runForLanguage(activeLang.id, demoCode);
      setOutput(out);
    } catch (e) {
      setOutput("Error: " + e.message);
    } finally {
      setRunning(false);
    }
  }, [activeLang.id, demoCode, running]);

  return (
    <section className="tryit-section">
      <div className="landing-container">
        <div className="tryit-header">
          <p className="landing-sec-label">Live Playground</p>
          <h2 className="landing-sec-title">Try Code Instantly</h2>
          <p className="landing-sec-sub tryit-header-sub">
            Switch languages and run the built-in sample — open the full
            playground to write your own code.
          </p>
        </div>

        <div className="tryit-tabs" role="tablist" aria-label="Languages">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.id}
              type="button"
              role="tab"
              aria-selected={activeLang.id === lang.id}
              className={`tryit-tab ${activeLang.id === lang.id ? "tryit-tab--active" : ""}`}
              style={{ "--tab-accent": lang.accent }}
              onClick={() => switchLang(lang)}
            >
              <img
                src={lang.icon}
                alt=""
                className="tryit-tab-icon"
                aria-hidden
              />
              {lang.label}
            </button>
          ))}
        </div>

        <div className="tryit-shell">
          <div className="tryit-panel">
            <div className="tryit-body">
              <aside
                className="tryit-left"
                style={{ "--lang-accent": activeLang.accent }}
              >
                <div className="tryit-lang-badge">
                  <img
                    src={activeLang.icon}
                    alt=""
                    className="tryit-lang-logo"
                    aria-hidden
                  />
                </div>
                <div>
                  <h3 className="tryit-lang-name">{activeLang.label}</h3>
                  <p className="tryit-lang-desc">{activeLang.desc}</p>
                </div>
                <div className="tryit-sidebar-actions">
                  <button
                    type="button"
                    className="tryit-run-btn"
                    onClick={run}
                    disabled={running}
                  >
                    {running ? "▶ Running…" : "▶ Run Code"}
                  </button>
                  <a
                    href={`/language/${activeLang.id}`}
                    className="tryit-learn-btn"
                  >
                    Learn {activeLang.label} →
                  </a>
                </div>
              </aside>

              <div className="tryit-right">
                <div className="tryit-terminal">
                  <DemoCodePanel code={demoCode} />

                  <div
                    className={[
                      "tryit-output",
                      !hasOutput && "tryit-output--empty",
                      isError && "tryit-output--error",
                      running && "tryit-output--running",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <div className="tryit-output-head">
                      <span className="tryit-output-label">
                        <Sparkles size={12} />
                        Output
                      </span>
                      {hasOutput && !isError ? (
                        <span className="tryit-output-badge tryit-output-badge--ok">
                          Success
                        </span>
                      ) : null}
                      {isError ? (
                        <span className="tryit-output-badge tryit-output-badge--err">
                          Failed
                        </span>
                      ) : null}
                    </div>
                    <pre className="tryit-output-pre">
                      {running
                        ? "Executing your code…"
                        : hasOutput
                          ? output
                          : OUTPUT_HINT}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
