import { STARTERS } from "../constants/playgroundStarters";
import { joinPath, normalizePath } from "./playgroundFileTree";

const LOCAL_FILES_KEY = "polycode_playground_files_v1";

export const MAIN_FILE_NAMES = {
  javascript: "main.js",
  typescript: "main.ts",
  python: "main.py",
  html: "index.html",
  css: "styles.css",
  sql: "query.sql",
  json: "data.json",
  xml: "document.xml",
  markdown: "README.md",
  php: "main.php",
  c: "main.c",
  cpp: "main.cpp",
  java: "Main.java",
  go: "main.go",
  rust: "main.rs",
  ruby: "main.rb",
  bash: "script.sh",
  kotlin: "Main.kt",
  swift: "main.swift",
  csharp: "Program.cs",
  r: "main.R",
  lua: "main.lua",
  powershell: "script.ps1",
  batch: "script.bat",
  dart: "main.dart",
  perl: "main.pl",
  scala: "Main.scala",
  brainfuck: "main.bf",
  regex: "pattern.txt",
};

const MONACO_BY_EXT = {
  js: "javascript",
  jsx: "javascript",
  ts: "typescript",
  tsx: "typescript",
  py: "python",
  html: "html",
  css: "css",
  sql: "sql",
  json: "json",
  xml: "xml",
  md: "markdown",
  php: "php",
  c: "c",
  cpp: "cpp",
  java: "java",
  go: "go",
  rs: "rust",
  rb: "ruby",
  sh: "shell",
  kt: "kotlin",
  swift: "swift",
  cs: "csharp",
  r: "r",
  lua: "lua",
  ps1: "powershell",
  bat: "bat",
  dart: "dart",
  pl: "perl",
  scala: "scala",
};

export function defaultMainFileName(language) {
  return MAIN_FILE_NAMES[language] || "main.txt";
}

export function defaultStarterContent(language) {
  return STARTERS[language] || "// Start coding here\n";
}

export function createLocalFileId() {
  return `local-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

export function createFile(language, { name, content, serverId = null } = {}) {
  return {
    id: serverId || createLocalFileId(),
    serverId,
    name: name || defaultMainFileName(language),
    content: content ?? defaultStarterContent(language),
    dirty: false,
  };
}

export function createWorkspace(language, seedCode) {
  const file = createFile(language, {
    name: defaultMainFileName(language),
    content: typeof seedCode === "string" ? seedCode : undefined,
  });
  return {
    files: [file],
    folders: [],
    expandedFolders: { "": true },
    selectedFolder: "",
    activeFileId: file.id,
    output: [],
    previewHTML: null,
    activeTab: "output",
    cloudLoaded: false,
  };
}

export function getActiveFile(workspace) {
  if (!workspace?.files?.length) return null;
  return (
    workspace.files.find((file) => file.id === workspace.activeFileId) ||
    workspace.files[0]
  );
}

export function monacoLanguageForFile(fileName, fallback) {
  const ext = String(fileName || "").split(".").pop()?.toLowerCase();
  return MONACO_BY_EXT[ext] || fallback;
}

export function nextUntitledName(language, files = []) {
  const base = defaultMainFileName(language).replace(/\.\w+$/, "");
  const ext = defaultMainFileName(language).split(".").pop();
  let index = 2;
  let candidate = `${base}-${index}.${ext}`;
  const names = new Set(files.map((file) => file.name));
  while (names.has(candidate)) {
    index += 1;
    candidate = `${base}-${index}.${ext}`;
  }
  return candidate;
}

export function nextFileNameInFolder(language, files = [], folder = "") {
  const base = defaultMainFileName(language).replace(/\.\w+$/, "");
  const ext = defaultMainFileName(language).split(".").pop();
  let index = 1;
  let candidate = `${base}.${ext}`;
  const names = new Set(files.map((file) => normalizePath(file.name)));

  while (names.has(joinPath(folder, candidate))) {
    index += 1;
    candidate = `${base}-${index}.${ext}`;
  }

  return joinPath(folder, candidate);
}

export function loadLocalWorkspaces() {
  try {
    const raw = localStorage.getItem(LOCAL_FILES_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveLocalWorkspaces(workspaces) {
  try {
    const payload = {};
    Object.entries(workspaces).forEach(([lang, workspace]) => {
      payload[lang] = {
        files: workspace.files,
        folders: workspace.folders || [],
        expandedFolders: workspace.expandedFolders || { "": true },
        selectedFolder: workspace.selectedFolder || "",
        activeFileId: workspace.activeFileId,
      };
    });
    localStorage.setItem(LOCAL_FILES_KEY, JSON.stringify(payload));
  } catch {
    /* ignore */
  }
}

export function mergeLocalWorkspace(language, seedCode) {
  const stored = loadLocalWorkspaces()[language];
  if (!stored?.files?.length) {
    return createWorkspace(language, seedCode);
  }
  return {
    ...createWorkspace(language),
    files: stored.files,
    folders: stored.folders || [],
    expandedFolders: stored.expandedFolders || { "": true },
    selectedFolder: stored.selectedFolder || "",
    activeFileId: stored.activeFileId || stored.files[0]?.id,
    cloudLoaded: false,
  };
}

/** Normalize cloud/local files into sidebar “recent code” rows. */
export function entriesFromCloudFiles(language, files = []) {
  return files.map((file) => ({
    id: file.id,
    language: file.language || language,
    name: file.name,
    updatedAt: file.updatedAt || null,
  }));
}

export function entriesFromWorkspaces(workspaces = {}) {
  const rows = [];
  Object.entries(workspaces).forEach(([lang, workspace]) => {
    (workspace?.files || []).forEach((file) => {
      rows.push({
        id: file.serverId || file.id,
        language: lang,
        name: file.name,
        updatedAt: file.updatedAt || null,
      });
    });
  });
  return rows;
}

export function mergeRecentEntries(lists, limit = 40) {
  const byKey = new Map();

  lists.flat().forEach((entry) => {
    if (!entry?.id || !entry?.language || !entry?.name) return;
    const key = `${entry.language}:${entry.id}`;
    const prev = byKey.get(key);
    const prevTime = prev?.updatedAt ? new Date(prev.updatedAt).getTime() : 0;
    const nextTime = entry.updatedAt ? new Date(entry.updatedAt).getTime() : 0;
    if (!prev || nextTime >= prevTime) {
      byKey.set(key, entry);
    }
  });

  return [...byKey.values()]
    .sort((a, b) => {
      const ta = a.updatedAt ? new Date(a.updatedAt).getTime() : 0;
      const tb = b.updatedAt ? new Date(b.updatedAt).getTime() : 0;
      return tb - ta;
    })
    .slice(0, limit);
}
