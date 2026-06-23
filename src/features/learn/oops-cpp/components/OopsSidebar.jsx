import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CHAPTERS } from "../data/oopsCurriculum";
import { useLearnNav } from "../../shared/LearnNavContext";
import LearnChapterIcon from "../../shared/LearnChapterIcon";
import LessonStatusIcon from "../../shared/LessonStatusIcon";

export default function OopsSidebar({
  currentLessonId,
  progress,
  chapters = CHAPTERS,
  basePath = "/learn/oops-cpp",
  title = "OOP in C++",
  brandLogo = null,
}) {
  const navigate = useNavigate();
  const { menuOpen, closeMenu } = useLearnNav();
  const [collapsed, setCollapsed] = useState(false);

  // Which chapters are expanded — default: expand current chapter
  const currentChapter = chapters.find((ch) =>
    ch.lessons.some((l) => l.id === currentLessonId),
  );
  const [expanded, setExpanded] = useState(
    () => new Set(currentChapter ? [currentChapter.id] : []),
  );

  function toggleChapter(id) {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function goToLesson(lessonId) {
    closeMenu();
    navigate(`${basePath}/lesson/${lessonId}`);
  }

  return (
    <aside
      className={`oops-sidebar ${collapsed ? "oops-sidebar-collapsed" : ""} ${
        menuOpen ? "oops-sidebar-mobile-open" : ""
      }`}
    >
      <div className="oops-sidebar-sticky">
        <div className="oops-sidebar-header">
          {!collapsed && brandLogo ? (
            <div className="oops-sidebar-brand">{brandLogo}</div>
          ) : (
            !collapsed && <span className="oops-sidebar-title">{title}</span>
          )}
          <button
            type="button"
            className="oops-sidebar-close-mobile"
            onClick={closeMenu}
            aria-label="Close lesson menu"
          >
            ×
          </button>
          <button
            type="button"
            className="oops-sidebar-toggle"
            onClick={() => setCollapsed(!collapsed)}
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? "›" : "‹"}
          </button>
        </div>

        {!collapsed && (
          <nav className="oops-sidebar-nav">
          {chapters.map((ch) => {
            const isOpen = expanded.has(ch.id);
            const doneLessons = ch.lessons.filter((l) => progress[l.id]).length;
            const allDone = doneLessons === ch.lessons.length;

            return (
              <div key={ch.id} className="oops-sidebar-chapter">
                <button
                  className={`oops-sidebar-chapter-btn ${allDone ? "done" : ""}`}
                  onClick={() => toggleChapter(ch.id)}
                >
                  <span className="oops-sb-icon">
                    <LearnChapterIcon icon={ch.icon} size={16} />
                  </span>
                  <span className="oops-sb-title">{ch.title}</span>
                  <span className="oops-sb-count">
                    {doneLessons}/{ch.lessons.length}
                  </span>
                  <span className="oops-sb-caret">{isOpen ? "▾" : "▸"}</span>
                </button>

                {isOpen && (
                  <ul className="oops-sidebar-lessons">
                    {ch.lessons.map((l) => {
                      const isDone = !!progress[l.id];
                      const isCurrent = l.id === currentLessonId;
                      return (
                        <li key={l.id}>
                          <button
                            className={`oops-sidebar-lesson-btn ${isDone ? "done" : ""} ${isCurrent ? "current" : ""}`}
                            onClick={() => goToLesson(l.id)}
                          >
                            <span className="oops-sb-check">
                              <LessonStatusIcon done={isDone} />
                            </span>
                            <span>{l.title}</span>
                            {!isDone && (
                              <span className="oops-sb-xp">+{l.xp}</span>
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
          </nav>
        )}
      </div>
    </aside>
  );
}
