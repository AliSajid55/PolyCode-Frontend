import { getApiBase } from "../../../config/apiBase";

function authHeaders(token) {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

function parseErrorBody(text, status) {
  if (!text) return `Request failed (${status})`;
  try {
    const data = JSON.parse(text);
    return data.error || data.message || `Request failed (${status})`;
  } catch {
    const preMatch = text.match(/<pre[^>]*>([\s\S]*?)<\/pre>/i);
    if (preMatch) return preMatch[1].trim();
    if (/<!DOCTYPE|<html/i.test(text)) {
      return `Request failed (${status})`;
    }
    return text.length > 160 ? `${text.slice(0, 160)}…` : text;
  }
}

async function readResponse(res, fallbackMessage) {
  const text = await res.text();
  if (!res.ok) {
    throw new Error(parseErrorBody(text, res.status) || fallbackMessage);
  }
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch {
    throw new Error(fallbackMessage);
  }
}

export async function fetchPlaygroundFiles(token, language) {
  const url = `${getApiBase()}/playground/files?language=${encodeURIComponent(language)}`;
  const res = await fetch(url, { headers: authHeaders(token) });
  return readResponse(res, "Could not load playground files");
}

export async function createPlaygroundFile(token, { language, name, content }) {
  const res = await fetch(`${getApiBase()}/playground/files`, {
    method: "POST",
    headers: authHeaders(token),
    body: JSON.stringify({ language, name, content }),
  });
  return readResponse(res, "Could not create file");
}

export async function updatePlaygroundFile(token, fileId, { name, content }) {
  const res = await fetch(`${getApiBase()}/playground/files/${encodeURIComponent(fileId)}`, {
    method: "PUT",
    headers: authHeaders(token),
    body: JSON.stringify({ name, content }),
  });
  return readResponse(res, "Could not save file");
}

export async function deletePlaygroundFile(token, fileId) {
  const res = await fetch(`${getApiBase()}/playground/files/${encodeURIComponent(fileId)}`, {
    method: "DELETE",
    headers: authHeaders(token),
  });
  return readResponse(res, "Could not delete file");
}

export async function fetchPlaygroundRecentFiles(token, { limit = 40 } = {}) {
  const url = `${getApiBase()}/playground/recent/files?limit=${encodeURIComponent(limit)}`;
  const res = await fetch(url, { headers: authHeaders(token) });
  if (res.status === 404) {
    return { files: null, unavailable: true };
  }
  return readResponse(res, "Could not load recent code");
}

export async function fetchPlaygroundRuns(token, { language, fileId, limit = 20 } = {}) {
  const params = new URLSearchParams();
  if (language) params.set("language", language);
  if (fileId) params.set("fileId", fileId);
  params.set("limit", String(limit));
  const res = await fetch(`${getApiBase()}/playground/runs?${params}`, {
    headers: authHeaders(token),
  });
  return readResponse(res, "Could not load run history");
}

export async function savePlaygroundRun(token, payload) {
  const res = await fetch(`${getApiBase()}/playground/runs`, {
    method: "POST",
    headers: authHeaders(token),
    body: JSON.stringify(payload),
  });
  return readResponse(res, "Could not save run output");
}

export async function deletePlaygroundRun(token, runId) {
  const res = await fetch(
    `${getApiBase()}/playground/runs/${encodeURIComponent(runId)}`,
    {
      method: "DELETE",
      headers: authHeaders(token),
    },
  );
  return readResponse(res, "Could not delete run");
}

export async function clearPlaygroundRuns(token, { language, fileId } = {}) {
  const params = new URLSearchParams();
  if (language) params.set("language", language);
  if (fileId) params.set("fileId", fileId);
  const query = params.toString();
  const res = await fetch(
    `${getApiBase()}/playground/runs${query ? `?${query}` : ""}`,
    {
      method: "DELETE",
      headers: authHeaders(token),
    },
  );
  return readResponse(res, "Could not clear run history");
}

export async function savePlaygroundWorkspace(token, payload) {
  const res = await fetch(`${getApiBase()}/playground/workspace`, {
    method: "PUT",
    headers: authHeaders(token),
    body: JSON.stringify(payload),
  });
  return readResponse(res, "Could not save workspace");
}

export async function importPlaygroundWorkspace(token, payload) {
  const res = await fetch(`${getApiBase()}/playground/workspace/import`, {
    method: "POST",
    headers: authHeaders(token),
    body: JSON.stringify(payload),
  });
  return readResponse(res, "Could not import workspace");
}
