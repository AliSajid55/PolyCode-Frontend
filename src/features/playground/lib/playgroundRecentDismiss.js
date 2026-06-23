const DISMISSED_KEY = "polycode_playground_recent_dismissed";

export function recentEntryKey(entry) {
  if (!entry?.language || !entry?.id) return "";
  return `${entry.language}:${entry.id}`;
}

export function loadDismissedRecentKeys() {
  try {
    const raw = localStorage.getItem(DISMISSED_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return new Set(Array.isArray(parsed) ? parsed.filter(Boolean) : []);
  } catch {
    return new Set();
  }
}

function saveDismissedRecentKeys(keys) {
  try {
    localStorage.setItem(DISMISSED_KEY, JSON.stringify([...keys]));
  } catch {
    /* ignore */
  }
}

export function dismissRecentEntry(entry) {
  const key = recentEntryKey(entry);
  if (!key) return loadDismissedRecentKeys();
  const keys = loadDismissedRecentKeys();
  keys.add(key);
  saveDismissedRecentKeys(keys);
  return keys;
}

export function filterDismissedRecentEntries(entries, dismissedKeys) {
  const dismissed = dismissedKeys || loadDismissedRecentKeys();
  return (entries || []).filter(
    (entry) => !dismissed.has(recentEntryKey(entry)),
  );
}
