const LOCAL_HISTORY_KEY = "polycode_playground_run_history";
const MAX_LOCAL_RUNS = 50;

function readAll() {
  try {
    const raw = localStorage.getItem(LOCAL_HISTORY_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeAll(runs) {
  try {
    localStorage.setItem(LOCAL_HISTORY_KEY, JSON.stringify(runs.slice(0, MAX_LOCAL_RUNS)));
  } catch {
    /* ignore quota errors */
  }
}

export function makeLocalRunId() {
  return `local-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function loadLocalRunHistory({ language, fileKey, limit = 30 } = {}) {
  let rows = readAll();
  if (language) {
    rows = rows.filter((run) => run.language === language);
  }
  if (fileKey) {
    rows = rows.filter((run) => run.fileKey === fileKey);
  }
  return rows.slice(0, limit);
}

export function appendLocalRunHistory(run) {
  const rows = readAll();
  rows.unshift(run);
  writeAll(rows);
  return run;
}

export function removeLocalRunHistory(runId) {
  writeAll(readAll().filter((run) => run.id !== runId));
}

export function clearLocalRunHistory({ language, fileKey } = {}) {
  if (!language && !fileKey) {
    writeAll([]);
    return;
  }
  writeAll(
    readAll().filter((run) => {
      if (language && run.language !== language) return true;
      if (fileKey && run.fileKey === fileKey) return false;
      if (language && !fileKey) return false;
      return true;
    }),
  );
}

export function buildRunFileKey(file) {
  if (!file) return "";
  return file.serverId || `${file.id}:${file.name || ""}`;
}
