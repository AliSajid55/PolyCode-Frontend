import React from "react";
import { basename } from "../lib/playgroundFileTree";
import { resolveEngine } from "../services/BrowserExecutor";

function formatRelativeTime(value) {
  if (!value) return "";
  const then = new Date(value).getTime();
  if (Number.isNaN(then)) return "";
  const diffSec = Math.round((Date.now() - then) / 1000);
  if (diffSec < 60) return "just now";
  if (diffSec < 3600) return `${Math.floor(diffSec / 60)}m ago`;
  if (diffSec < 86400) return `${Math.floor(diffSec / 3600)}h ago`;
  if (diffSec < 604800) return `${Math.floor(diffSec / 86400)}d ago`;
  return new Date(value).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  });
}

function RecentFileRow({
  entry,
  fileActive,
  onOpenRecentFile,
  onRemoveRecentFile,
  onDeleteRecentFile,
}) {
  const langInfo = resolveEngine(entry.language);

  return (
    <div
      className={`pg-recent-row${fileActive ? " pg-recent-row--active" : ""}`}
    >
      <button
        type="button"
        className="pg-recent-file"
        onClick={() => onOpenRecentFile?.(entry)}
        title={`Open ${entry.name} · ${langInfo.label}`}
      >
        <span className="pg-recent-lang" aria-hidden>
          {langInfo.icon}
        </span>
        <span className="pg-recent-meta">
          <span className="pg-recent-name">{entry.name}</span>
          <span className="pg-recent-sub">
            {langInfo.label}
            {formatRelativeTime(entry.updatedAt)
              ? ` · ${formatRelativeTime(entry.updatedAt)}`
              : " · saved"}
          </span>
        </span>
      </button>
      <div className="pg-recent-actions">
        <button
          type="button"
          className="pg-recent-action"
          onClick={() => onRemoveRecentFile?.(entry)}
          title="Remove from Recent Code"
          aria-label={`Remove ${entry.name} from recent`}
        >
          ×
        </button>
        <button
          type="button"
          className="pg-recent-action pg-recent-action--danger"
          onClick={() => onDeleteRecentFile?.(entry)}
          title="Delete file permanently"
          aria-label={`Delete ${entry.name}`}
        >
          ⌫
        </button>
      </div>
    </div>
  );
}

function TreeNode({
  node,
  depth,
  expandedFolders,
  activeFileId,
  selectedFolder,
  onToggleFolder,
  onSelectFolder,
  onSelectFile,
}) {
  const paddingLeft = 8 + depth * 14;

  if (node.type === "file") {
    const isActive = node.fileId === activeFileId;
    return (
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
        title={node.path || "Project root"}
      >
        <span className={`pg-tree-chevron${isExpanded ? " open" : ""}`} aria-hidden>
          ▸
        </span>
        <span className="pg-tree-icon" aria-hidden>
          {isExpanded ? "📂" : "📁"}
        </span>
        <span className="pg-tree-label">{node.path ? node.name : "EXPLORER"}</span>
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
  onToggleExplorer,
  onToggleFolder,
  onSelectFolder,
  onSelectFile,
  onNewFile,
  onNewFolder,
  signedIn = false,
  recentFiles = [],
  recentLoading = false,
  activeRecentFileId = null,
  activeLanguage = "",
  onOpenRecentFile,
  onRemoveRecentFile,
  onDeleteRecentFile,
}) {
  if (!explorerOpen) {
    return (
      <aside className="pg-explorer pg-explorer--collapsed">
        <button
          type="button"
          className="pg-explorer-expand-btn"
          onClick={onToggleExplorer}
          title="Show file explorer"
          aria-label="Show file explorer"
        >
          ›
        </button>
      </aside>
    );
  }

  return (
    <aside className="pg-explorer" aria-label="File explorer">
      <div className="pg-explorer-head">
        <span>Explorer</span>
        <div className="pg-explorer-actions">
          <button
            type="button"
            className="pg-explorer-icon-btn"
            onClick={() => onNewFile(selectedFolder)}
            title="New file"
            aria-label="New file"
          >
            +
          </button>
          <button
            type="button"
            className="pg-explorer-icon-btn"
            onClick={() => onNewFolder(selectedFolder)}
            title="New folder"
            aria-label="New folder"
          >
            📁
          </button>
          <button
            type="button"
            className="pg-explorer-icon-btn"
            onClick={onToggleExplorer}
            title="Hide explorer"
            aria-label="Hide explorer"
          >
            ‹
          </button>
        </div>
      </div>

      {selectedFolder ? (
        <p className="pg-explorer-context" title={selectedFolder}>
          in <strong>{basename(selectedFolder) || "root"}</strong>
        </p>
      ) : null}

      <div className="pg-explorer-tree">
        {tree.children.length === 0 ? (
          <p className="pg-explorer-empty">
            No files yet. Use + to add a file or 📁 for a folder.
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
            />
          ))
        )}
      </div>

      <div className="pg-explorer-section-head">
        <span>Recent code</span>
        {recentFiles.length > 0 ? (
          <span className="pg-explorer-section-count">{recentFiles.length}</span>
        ) : null}
      </div>
      <div className="pg-explorer-recent">
        {recentLoading ? (
          <p className="pg-explorer-empty">Loading recent files…</p>
        ) : recentFiles.length === 0 ? (
          <p className="pg-explorer-empty">
            {signedIn
              ? "Run or edit files — they appear here. Remove any entry with ×."
              : "Your edited files appear here. Remove any entry with ×."}
          </p>
        ) : (
          recentFiles.map((entry) => {
                const fileActive =
                  entry.id === activeRecentFileId &&
                  entry.language === activeLanguage;

                return (
                  <RecentFileRow
                    key={`${entry.language}-${entry.id}`}
                    entry={entry}
                    fileActive={fileActive}
                    onOpenRecentFile={onOpenRecentFile}
                    onRemoveRecentFile={onRemoveRecentFile}
                    onDeleteRecentFile={onDeleteRecentFile}
                  />
                );
              })
            )}
      </div>
    </aside>
  );
}
