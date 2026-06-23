export function normalizePath(path = "") {
  return String(path)
    .replace(/\\/g, "/")
    .replace(/^\/+|\/+$/g, "")
    .replace(/\/+/g, "/");
}

export function dirname(path = "") {
  const normalized = normalizePath(path);
  const index = normalized.lastIndexOf("/");
  return index === -1 ? "" : normalized.slice(0, index);
}

export function basename(path = "") {
  const normalized = normalizePath(path);
  const index = normalized.lastIndexOf("/");
  return index === -1 ? normalized : normalized.slice(index + 1);
}

export function joinPath(folder = "", name = "") {
  const cleanName = normalizePath(name);
  const cleanFolder = normalizePath(folder);
  if (!cleanFolder) return cleanName;
  if (!cleanName) return cleanFolder;
  return normalizePath(`${cleanFolder}/${cleanName}`);
}

function sortTreeChildren(children = []) {
  children.sort((a, b) => {
    if (a.type !== b.type) return a.type === "folder" ? -1 : 1;
    return a.name.localeCompare(b.name, undefined, { sensitivity: "base" });
  });
}

/**
 * Build a nested folder tree from file paths (e.g. src/app.js) and empty folders.
 */
export function buildFileTree(files = [], extraFolders = []) {
  const root = { type: "folder", name: "workspace", path: "", children: [] };
  const folderMap = new Map([["", root]]);

  const ensureFolder = (folderPath) => {
    const normalized = normalizePath(folderPath);
    if (folderMap.has(normalized)) return folderMap.get(normalized);

    const parentPath = dirname(normalized);
    ensureFolder(parentPath);
    const parent = folderMap.get(parentPath);
    const node = {
      type: "folder",
      name: basename(normalized) || normalized,
      path: normalized,
      children: [],
    };
    parent.children.push(node);
    folderMap.set(normalized, node);
    sortTreeChildren(parent.children);
    return node;
  };

  extraFolders.forEach((folder) => {
    if (normalizePath(folder)) ensureFolder(folder);
  });

  files.forEach((file) => {
    const filePath = normalizePath(file.name);
    const parentPath = dirname(filePath);
    ensureFolder(parentPath);
    const parent = folderMap.get(parentPath);
    parent.children.push({
      type: "file",
      name: basename(filePath) || filePath,
      path: filePath,
      fileId: file.id,
      dirty: file.dirty,
    });
    sortTreeChildren(parent.children);
  });

  return root;
}

export function collectFolderPaths(files = [], extraFolders = []) {
  const paths = new Set(extraFolders.map(normalizePath).filter(Boolean));
  files.forEach((file) => {
    const parent = dirname(file.name);
    if (parent) paths.add(parent);
  });
  return [...paths].sort();
}
