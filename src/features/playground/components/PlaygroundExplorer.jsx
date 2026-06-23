import React from "react";
import { basename } from "../lib/playgroundFileTree";

function TreeNode({
  node,
  depth,
  expandedFolders,
  activeFileId,
  selectedFolder,
  onToggleFolder,
  onSelectFolder,
  onSelectFile,
  onDeleteFile,
}) {
  const paddingLeft = 8 + depth * 14;

  if (node.type === "file") {
    const isActive = node.fileId === activeFileId;
    return (
      <div
        className={`pg-tree-file-row${isActive ? " pg-tree-file-row--active" : ""}`}
      >
        <button
          type="button"
          className={`pg-tree-file${isActive ? " pg-tree-file--active" : ""}`}
          style={{ paddingLeft }}
          onClick={() => onSelectFile(node.fileId)}
          title={node.path}
        >
          <span className="pg-tree-icon" aria-hidden>
            📄
          </span>
          <span className="pg-tree-label">{node.name}</span>
          {node.dirty ? <span className="pg-tree-dirty">•</span> : null}
        </button>
        <button
          type="button"
          className="pg-tree-delete"
          onClick={() => onDeleteFile?.(node.fileId)}
          title={`Delete ${node.name}`}
          aria-label={`Delete ${node.name}`}
        >
          ×
        </button>
      </div>
    );
  }

  const isExpanded = expandedFolders[node.path] !== false;
  const isSelected = selectedFolder === node.path;

  return (
    <div className="pg-tree-folder-wrap">
      <button
        type="button"
        className={`pg-tree-folder${isSelected ? " pg-tree-folder--selected" : ""}`}
        style={{ paddingLeft }}
        onClick={() => {
          onSelectFolder(node.path);
          onToggleFolder(node.path);
        }}
        title={node.path || "Workspace root"}
      >
        <span className={`pg-tree-chevron${isExpanded ? " open" : ""}`} aria-hidden>
          ▸
        </span>
        <span className="pg-tree-icon" aria-hidden>
          {isExpanded ? "📂" : "📁"}
        </span>
        <span className="pg-tree-label">
          {node.path ? node.name : "WORKSPACE"}
        </span>
      </button>
      {isExpanded
        ? node.children.map((child) => (
            <TreeNode
              key={child.type === "file" ? child.fileId : child.path}
              node={child}
              depth={depth + 1}
              expandedFolders={expandedFolders}
              activeFileId={activeFileId}
              selectedFolder={selectedFolder}
              onToggleFolder={onToggleFolder}
              onSelectFolder={onSelectFolder}
              onSelectFile={onSelectFile}
              onDeleteFile={onDeleteFile}
            />
          ))
        : null}
    </div>
  );
}

export default function PlaygroundExplorer({
  tree,
  expandedFolders,
  activeFileId,
  selectedFolder,
  explorerOpen,
  signedIn = false,
  fileCount = 0,
  onToggleExplorer,
  onToggleFolder,
  onSelectFolder,
  onSelectFile,
  onNewFile,
  onNewFolder,
  onDeleteFile,
}) {
  if (!explorerOpen) {
    return (
      <aside className="pg-explorer pg-explorer--collapsed">
        <button
          type="button"
          className="pg-explorer-expand-btn"
          onClick={onToggleExplorer}
          title="Show Explorer"
          aria-label="Show Explorer"
        >
          ›
        </button>
      </aside>
    );
  }

  return (
    <aside className="pg-explorer" aria-label="Explorer">
      <div className="pg-explorer-head">
        <span>Explorer</span>
        <div className="pg-explorer-actions">
          <button
            type="button"
            className="pg-explorer-icon-btn"
            onClick={() => onNewFile(selectedFolder)}
            title="New File"
            aria-label="New File"
          >
            +
          </button>
          <button
            type="button"
            className="pg-explorer-icon-btn"
            onClick={() => onNewFolder(selectedFolder)}
            title="New Folder"
            aria-label="New Folder"
          >
            📁
          </button>
          <button
            type="button"
            className="pg-explorer-icon-btn"
            onClick={onToggleExplorer}
            title="Hide Explorer"
            aria-label="Hide Explorer"
          >
            ‹
          </button>
        </div>
      </div>

      {selectedFolder ? (
        <p className="pg-explorer-context" title={selectedFolder}>
          New files in <strong>{basename(selectedFolder) || "root"}</strong>
        </p>
      ) : null}

      <div className="pg-explorer-tree">
        {tree.children.length === 0 ? (
          <p className="pg-explorer-empty">
            No files yet. Click <strong>+</strong> to create a file.
            {signedIn
              ? " Files save to your PolyCode account automatically."
              : " Files save in this browser."}
          </p>
        ) : (
          tree.children.map((child) => (
            <TreeNode
              key={child.type === "file" ? child.fileId : child.path}
              node={child}
              depth={0}
              expandedFolders={expandedFolders}
              activeFileId={activeFileId}
              selectedFolder={selectedFolder}
              onToggleFolder={onToggleFolder}
              onSelectFolder={onSelectFolder}
              onSelectFile={onSelectFile}
              onDeleteFile={onDeleteFile}
            />
          ))
        )}
      </div>

      <p className="pg-explorer-foot">
        {fileCount} file{fileCount === 1 ? "" : "s"}
        {signedIn ? " · synced to account" : " · saved locally"}
      </p>
    </aside>
  );
}
