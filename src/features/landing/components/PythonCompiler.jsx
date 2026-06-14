import { useState } from "react";
import {
  runPythonCode,
  formatPythonOutput,
} from "../../learn/shared/runPython.js";

const LANGUAGES = [
  {
    id: "python",
    label: "Python",
    accent: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    desc: "A versatile, beginner-friendly language used in AI, data science, and web development.",
    code: `# Python Example\nname = "PolyCode"\nprint(f"Welcome to {name}!")`,
  },
  {
    id: "javascript",
    label: "JavaScript",
    accent: "#f7df1e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    desc: "The language of the web. Power interactive UIs, servers, and everything in between.",
    code: `// JavaScript Example\nconst name = "PolyCode";\nconsole.log(\`Welcome to \${name}!\`);`,
  },
  {
    id: "cpp",
    label: "C++",
    accent: "#f34b7d",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    desc: "High-performance systems language used in games, operating systems, and embedded software.",
    code: `// C++ Example\n#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << "Welcome to PolyCode!" << endl;\n  return 0;\n}`,
  },
];

export default function TryItSection() {
  const [activeLang, setActiveLang] = useState(LANGUAGES[0]);
  const [code, setCode] = useState(LANGUAGES[0].code);
  const [output, setOutput] = useState("");
  const [running, setRunning] = useState(false);

  const switchLang = (lang) => {
    setActiveLang(lang);
    setCode(lang.code);
    setOutput("");
  };

  const run = async () => {
    if (activeLang.id !== "python") {
      setOutput("// This language runner is coming soon!");
      return;
    }
    setRunning(true);
    setOutput("");
    try {
      const { result } = await runPythonCode(code);
      setOutput(formatPythonOutput(result) || "(no output)");
    } catch (e) {
      setOutput("Error: " + e.message);
    } finally {
      setRunning(false);
    }
  };

  return (
    <section className="tryit-section">
      <div className="landing-container">
        <p className="landing-sec-label">Live Playground</p>
        <h2 className="landing-sec-title">Code Without Leaving the Page</h2>
        <p className="landing-sec-sub">
          Pick a language, edit the code, and run it instantly.
        </p>

        {/* Language tabs */}
        <div className="tryit-tabs">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.id}
              className={`tryit-tab ${activeLang.id === lang.id ? "tryit-tab--active" : ""}`}
              style={{ "--tab-accent": lang.accent }}
              onClick={() => switchLang(lang)}
            >
              <img
                src={lang.icon}
                alt={lang.label}
                className="tryit-tab-icon"
              />
              {lang.label}
            </button>
          ))}
        </div>

        {/* Main panel */}
        <div className="tryit-panel">
          {/* Left */}
          <div
            className="tryit-left"
            style={{ "--lang-accent": activeLang.accent }}
          >
            <img
              src={activeLang.icon}
              alt={activeLang.label}
              className="tryit-lang-logo"
            />
            <h3 className="tryit-lang-name">{activeLang.label}</h3>
            <p className="tryit-lang-desc">{activeLang.desc}</p>
            <button className="tryit-run-btn" onClick={run} disabled={running}>
              {running ? "▶ Running…" : "▶ Run Code"}
            </button>
            <a href={`/language/${activeLang.id}`} className="tryit-learn-btn">
              Learn {activeLang.label} →
            </a>
          </div>

          {/* Right */}
          <div className="tryit-right">
            {/* Terminal header */}
            <div className="tryit-terminal-head">
              <span className="landing-dot landing-dot-r" />
              <span className="landing-dot landing-dot-y" />
              <span className="landing-dot landing-dot-g" />
              <span className="tryit-terminal-title">
                {activeLang.label.toLowerCase()}_playground.py
              </span>
            </div>

            {/* Editor */}
            <textarea
              className="tryit-editor"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck={false}
            />

            {/* Output */}
            <div className="tryit-output">
              <span className="tryit-output-label">▸ Output</span>
              <pre className="tryit-output-pre">
                {output || '// Click "Run Code" to see output here'}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
