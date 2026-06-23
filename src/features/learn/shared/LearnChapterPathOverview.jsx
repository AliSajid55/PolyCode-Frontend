import React from "react";
import LearnChapterIcon from "./LearnChapterIcon";

export default function LearnChapterPathOverview({
  chapters,
  progress,
  onChapterSelect,
}) {
  return (
    <div className="oops-path-overview oops-path-overview--visual">
      {chapters.map((chapter, index) => {
        const done = chapter.lessons.filter((lesson) => progress[lesson.id]).length;
        const total = chapter.lessons.length;
        const pct = Math.round((done / total) * 100) || 0;
        const active = done > 0 && done < total;
        const complete = done === total;

        return (
          <button
            key={chapter.id}
            type="button"
            className={`oops-path-step ${active ? "active" : ""} ${complete ? "done" : ""}`}
            onClick={() => onChapterSelect(chapter)}
          >
            <span className="oops-path-step-icon" aria-hidden>
              <LearnChapterIcon icon={chapter.icon} size={20} />
            </span>
            <span className="oops-path-step-body">
              <span className="oops-path-step-num">Chapter {index + 1}</span>
              <strong>{chapter.title}</strong>
            </span>
            <span
              className="oops-path-step-progress"
              aria-label={`${pct}% complete`}
              title={`${done}/${total} lessons`}
            >
              <span style={{ width: `${pct}%` }} />
            </span>
          </button>
        );
      })}
    </div>
  );
}
