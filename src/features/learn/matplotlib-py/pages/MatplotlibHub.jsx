import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MATPLOTLIB_CHAPTERS,
  MATPLOTLIB_LESSONS,
  MATPLOTLIB_TOTAL_XP,
} from "../data/matplotlibCurriculum";
import useMatplotlibProgress from "../hooks/usematplotlibProgress";
import CourseCertificate from "../../shared/CourseCertificate";
const BASE_PATH = "/learn/matplotlib-py";

const LEARNING_PATH = [
  {
    level: "Beginner",
    chapters: ["foundations", "core-chart-types"],
    color: "#2563eb",
    summary: "Imports, first plots, chart types, and when to use each one.",
  },
  {
    level: "Intermediate",
    chapters: ["readable-charts", "layouts-composition", "real-world-data"],
    color: "#7c3aed",
    summary: "Labels, styling, subplots, and plotting NumPy/Pandas data.",
  },
  {
    level: "Advanced",
    chapters: ["advanced-visuals", "pro-workflows"],
    color: "#dc2626",
    summary: "Annotations, colormaps, exports, Seaborn, and batch workflows.",
  },
  {
    level: "Pro",
    chapters: ["publication-mastery"],
    color: "#9333ea",
    summary: "Publication checklist, capstone dashboard, and cheat sheet reference.",
  },
];

function lessonPlainText(lesson) {
  return lesson.theory
    .filter((block) => block.type === "text" || block.type === "callout")
    .map((block) => block.content.replace(/\*\*/g, "").replace(/`/g, ""))
    .join(" ");
}

export default function MatplotlibHub() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const {
    isAuthenticated,
    completedMap: progress,
    bookmarks,
    lastLessonId,
  } = useMatplotlibProgress();

  const completedCount = Object.keys(progress).length;
  const earnedXP = MATPLOTLIB_LESSONS.filter(
    (lesson) => progress[lesson.id],
  ).reduce((sum, lesson) => sum + lesson.xp, 0);
  const pct =
    Math.round((completedCount / MATPLOTLIB_LESSONS.length) * 100) || 0;
  const nextLesson =
    MATPLOTLIB_LESSONS.find((lesson) => !progress[lesson.id]) ||
    MATPLOTLIB_LESSONS[0];
  const resumeLesson =
    MATPLOTLIB_LESSONS.find((lesson) => lesson.id === lastLessonId) ||
    nextLesson;
  const completedChapters = MATPLOTLIB_CHAPTERS.filter((chapter) =>
    chapter.lessons.every((lesson) => progress[lesson.id]),
  ).length;
  const bookmarkedLessons = bookmarks
    .map((id) => MATPLOTLIB_LESSONS.find((lesson) => lesson.id === id))
    .filter(Boolean);

  const filteredLessons = useMemo(() => {
    const query = search.trim().toLowerCase();
    return MATPLOTLIB_LESSONS.filter((lesson) => {
      const matchesQuery =
        !query ||
        lesson.title.toLowerCase().includes(query) ||
        lesson.chapterTitle.toLowerCase().includes(query) ||
        lessonPlainText(lesson).toLowerCase().includes(query);
      const matchesFilter =
        filter === "all" ||
        (filter === "todo" && !progress[lesson.id]) ||
        (filter === "done" && progress[lesson.id]) ||
        (filter === "bookmarked" && bookmarks.includes(lesson.id));
      return matchesQuery && matchesFilter;
    });
  }, [bookmarks, filter, progress, search]);

  return (
    <div className="oops-hub matplotlib-hub">
      <div className="oops-hero matplotlib-hero">
        <Link
          to="/language/Python"
          className="oops-back-btn"
          style={{ marginBottom: "0.75rem", display: "inline-flex" }}
        >
          ← Python courses
        </Link>
        <div className="oops-hero-badge">MATPLOTLIB · BEGINNER → PRO</div>
        <h1 className="oops-hero-title">
          Matplotlib
          <br />
          <span className="oops-hero-accent">for Python</span>
        </h1>
        <p className="oops-hero-sub">
          A structured path from your first line plot to publication-ready
          dashboards — 8 chapters, 25 lessons, and hands-on challenges that
          teach what to plot, why it matters, and how to make it clear.
        </p>

        <div className="oops-hero-grid">
          <div className="oops-xp-bar-wrap">
            <div className="oops-xp-meta">
              <span>
                {isAuthenticated
                  ? `${completedCount}/${MATPLOTLIB_LESSONS.length} lessons · ${earnedXP}/${MATPLOTLIB_TOTAL_XP} XP`
                  : `Sign in to track progress · ${MATPLOTLIB_LESSONS.length} lessons`}
              </span>
              <span>{isAuthenticated ? `${pct}%` : "—"}</span>
            </div>
            <div className="oops-xp-track">
              <div
                className="oops-xp-fill"
                style={{ width: isAuthenticated ? `${pct}%` : "0%" }}
              />
            </div>
          </div>

          {!isAuthenticated && (
            <div className="oops-auth-gate oops-auth-gate-hub">
              <p>
                Create a free account to run challenges, earn XP, and save your
                place in the course.
              </p>
              <div className="oops-auth-gate-actions">
                <Link to="/login" className="oops-auth-gate-btn">
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="oops-auth-gate-btn oops-auth-gate-btn-primary"
                >
                  Sign up
                </Link>
              </div>
            </div>
          )}

          <div className="oops-resume-panel">
            <span className="oops-sync-pill">
              {isAuthenticated
                ? "Progress saved to your account"
                : "Browse lessons — sign in to save progress"}
            </span>
            <h2>{resumeLesson.title}</h2>
            <p>
              {resumeLesson.chapterTitle} · {resumeLesson.xp} XP
            </p>
            <button
              type="button"
              onClick={() => navigate(`${BASE_PATH}/lesson/${resumeLesson.id}`)}
            >
              {completedCount > 0 ? "Resume Matplotlib" : "Start Matplotlib"}
            </button>
          </div>
        </div>
      </div>

      <section className="matplotlib-prerequisites" aria-label="Before you start">
        <div className="matplotlib-prerequisites-head">
          <span>Before you start</span>
          <small>Recommended background · not required for lesson 1</small>
        </div>
        <div className="matplotlib-prerequisites-grid">
          <Link to="/language/Python" className="matplotlib-prereq-card">
            <strong>Python basics</strong>
            <p>Variables, lists, and functions — enough to read lesson code.</p>
          </Link>
          <Link to="/learn/numpy-py" className="matplotlib-prereq-card">
            <strong>NumPy</strong>
            <p>Arrays and vector math — used in real-world plotting lessons.</p>
          </Link>
          <Link to="/learn/pandas-py" className="matplotlib-prereq-card">
            <strong>Pandas</strong>
            <p>DataFrames and time series — helpful from chapter 5 onward.</p>
          </Link>
          <Link
            to={`${BASE_PATH}/lesson/plt-13`}
            className="matplotlib-prereq-card matplotlib-prereq-cheat"
          >
            <strong>Cheat sheet</strong>
            <p>Chart picker + API reference — bookmark lesson 25 anytime.</p>
          </Link>
        </div>
        <p className="matplotlib-runtime-note">
          Plot examples run in your browser (Pyodide). The first run loads
          Matplotlib and may take a few seconds — charts appear in the Output
          panel after <code>plt.show()</code>, not in the text console.
        </p>
      </section>

      <div className="oops-guide-tools">
        <div className="oops-tool-panel oops-tool-panel-main">
          <span className="oops-interactive-label">
            Find a Matplotlib topic
          </span>
          <div className="oops-search-row">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search subplots, styles, annotate..."
              aria-label="Search Matplotlib lessons"
            />
            <div
              className="oops-filter-tabs"
              aria-label="Filter Matplotlib lessons"
            >
              {[
                ["all", "All"],
                ["todo", "To do"],
                ["done", "Done"],
                ["bookmarked", "Saved"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  className={filter === value ? "active" : ""}
                  onClick={() => setFilter(value)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="oops-search-results">
            {filteredLessons.slice(0, 6).map((lesson) => (
              <button
                key={lesson.id}
                type="button"
                className="oops-search-result"
                style={{ "--ch-color": lesson.chapterColor }}
                onClick={() => navigate(`${BASE_PATH}/lesson/${lesson.id}`)}
              >
                <span>{progress[lesson.id] ? "✓" : "○"}</span>
                <strong>{lesson.title}</strong>
                <small>{lesson.chapterTitle}</small>
              </button>
            ))}
            {filteredLessons.length === 0 && (
              <p className="oops-empty-copy">No lessons match that search.</p>
            )}
          </div>
        </div>

        <div className="oops-tool-panel">
          <span className="oops-interactive-label">Recommended</span>
          <h2>{nextLesson.title}</h2>
          <p>
            Next in {nextLesson.chapterTitle}. Earn {nextLesson.xp} XP.
          </p>
          <button
            type="button"
            onClick={() => navigate(`${BASE_PATH}/lesson/${nextLesson.id}`)}
          >
            Open next lesson
          </button>
        </div>

        <div className="oops-tool-panel">
          <span className="oops-interactive-label">Bookmarks</span>
          {bookmarkedLessons.length > 0 ? (
            <div className="oops-bookmark-list">
              {bookmarkedLessons.slice(0, 3).map((lesson) => (
                <button
                  key={lesson.id}
                  type="button"
                  onClick={() => navigate(`${BASE_PATH}/lesson/${lesson.id}`)}
                >
                  <strong>{lesson.title}</strong>
                  <small>{lesson.chapterTitle}</small>
                </button>
              ))}
            </div>
          ) : (
            <p>Bookmark lessons to review them here.</p>
          )}
        </div>
      </div>

      <div className="oops-dashboard-strip">
        <div className="oops-stat-tile">
          <span>Lessons</span>
          <strong>
            {completedCount}/{MATPLOTLIB_LESSONS.length}
          </strong>
        </div>
        <div className="oops-stat-tile">
          <span>Chapters</span>
          <strong>
            {completedChapters}/{MATPLOTLIB_CHAPTERS.length}
          </strong>
        </div>
        <div className="oops-stat-tile">
          <span>XP</span>
          <strong>
            {earnedXP}/{MATPLOTLIB_TOTAL_XP}
          </strong>
        </div>
        <div className="oops-stat-tile">
          <span>Bookmarks</span>
          <strong>{bookmarks.length}</strong>
        </div>
      </div>

      <section className="matplotlib-learn-path" aria-label="Learning path">
        <div className="matplotlib-path-label">
          <span>Your path · Beginner to Pro</span>
          <small>{MATPLOTLIB_CHAPTERS.length} chapters · {MATPLOTLIB_LESSONS.length} lessons</small>
        </div>
        <div className="matplotlib-path-grid">
          {LEARNING_PATH.map((stage) => {
            const stageChapters = MATPLOTLIB_CHAPTERS.filter((ch) =>
              stage.chapters.includes(ch.id),
            );
            const stageLessons = stageChapters.flatMap((ch) => ch.lessons);
            const stageDone = stageLessons.filter((l) => progress[l.id]).length;
            const stagePct =
              stageLessons.length > 0
                ? Math.round((stageDone / stageLessons.length) * 100)
                : 0;

            return (
              <article
                key={stage.level}
                className="matplotlib-path-card"
                style={{ "--stage-color": stage.color }}
              >
                <header className="matplotlib-path-card-head">
                  <span className="matplotlib-path-level">{stage.level}</span>
                  <span className="matplotlib-path-pct">{stagePct}%</span>
                </header>
                <p className="matplotlib-path-summary">{stage.summary}</p>
                <ul className="matplotlib-path-chapters">
                  {stageChapters.map((ch) => (
                    <li key={ch.id}>
                      <span aria-hidden>{ch.icon}</span>
                      {ch.title}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="matplotlib-path-cta"
                  onClick={() => {
                    const firstOpen =
                      stageLessons.find((l) => !progress[l.id]) ||
                      stageLessons[0];
                    if (firstOpen) {
                      navigate(`${BASE_PATH}/lesson/${firstOpen.id}`);
                    }
                  }}
                >
                  {stageDone === stageLessons.length && stageLessons.length > 0
                    ? "Review stage →"
                    : stageDone > 0
                      ? "Continue stage →"
                      : "Start stage →"}
                </button>
              </article>
            );
          })}
        </div>
      </section>

      <div className="oops-path-overview">
        {MATPLOTLIB_CHAPTERS.map((chapter, index) => {
          const done = chapter.lessons.filter((l) => progress[l.id]).length;
          const active = done > 0 && done < chapter.lessons.length;
          return (
            <button
              key={chapter.id}
              type="button"
              className={`oops-path-step ${active ? "active" : ""} ${
                done === chapter.lessons.length ? "done" : ""
              }`}
              style={{ "--ch-color": chapter.color }}
              onClick={() =>
                navigate(`${BASE_PATH}/lesson/${chapter.lessons[0].id}`)
              }
            >
              <span>{index + 1}</span>
              <strong>{chapter.title}</strong>
              <small>
                {done}/{chapter.lessons.length}
              </small>
            </button>
          );
        })}
      </div>

      <div className="oops-chapters">
        {MATPLOTLIB_CHAPTERS.map((chapter, index) => {
          const done = chapter.lessons.filter((l) => progress[l.id]).length;
          const chapterPct =
            Math.round((done / chapter.lessons.length) * 100) || 0;
          const firstUnfinished = chapter.lessons.find((l) => !progress[l.id]);
          const allDone = done === chapter.lessons.length;

          return (
            <div
              key={chapter.id}
              className={`oops-chapter-card ${allDone ? "oops-chapter-done" : ""}`}
              style={{ "--ch-color": chapter.color }}
            >
              <div className="oops-chapter-header">
                <span className="oops-chapter-icon">{chapter.icon}</span>
                <div>
                  <div className="oops-chapter-num">Chapter {index + 1}</div>
                  <div className="oops-chapter-title">{chapter.title}</div>
                </div>
                {allDone && <span className="oops-done-badge">✓ Done</span>}
              </div>
              <div className="oops-chapter-progress-track">
                <div
                  className="oops-chapter-progress-fill"
                  style={{ width: `${chapterPct}%` }}
                />
              </div>
              <div className="oops-chapter-meta">
                {done}/{chapter.lessons.length} lessons · {chapterPct}%
              </div>
              <ul className="oops-lesson-list">
                {chapter.lessons.map((lesson) => (
                  <li
                    key={lesson.id}
                    className={`oops-lesson-item ${progress[lesson.id] ? "done" : ""}`}
                    onClick={() => navigate(`${BASE_PATH}/lesson/${lesson.id}`)}
                  >
                    <span className="oops-lesson-status">
                      {progress[lesson.id] ? "✓" : "○"}
                    </span>
                    <span className="oops-lesson-name">{lesson.title}</span>
                    <span className="oops-lesson-xp">+{lesson.xp} XP</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="oops-chapter-cta"
                onClick={() =>
                  navigate(
                    `${BASE_PATH}/lesson/${
                      firstUnfinished
                        ? firstUnfinished.id
                        : chapter.lessons[0].id
                    }`,
                  )
                }
              >
                {allDone
                  ? "Review Chapter →"
                  : done > 0
                    ? "Continue →"
                    : "Start →"}
              </button>
            </div>
          );
        })}
      </div>
      <CourseCertificate
        courseName="Matplotlib for Python"
        totalLessons={MATPLOTLIB_LESSONS.length}
        completedCount={completedCount}
        earnedXP={earnedXP}
        totalXP={MATPLOTLIB_TOTAL_XP}
      />
    </div>
  );
}
