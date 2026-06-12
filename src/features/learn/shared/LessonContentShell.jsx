import React from "react";
import LessonAnnotator from "./LessonAnnotator";
import LessonVideo from "./LessonVideo";

/**
 * Wraps theory/challenge content with optional YouTube video + markup tools.
 * storageKey should be unique per lesson (e.g. lesson id).
 */
export default function LessonContentShell({
  storageKey,
  videoUrl,
  videoTitle,
  children,
}) {
  return (
    <div className={`oops-lesson-content${videoUrl ? " has-lesson-video" : ""}`}>
      <LessonAnnotator storageKey={storageKey}>{children}</LessonAnnotator>
      {videoUrl ? (
        <LessonVideo url={videoUrl} title={videoTitle} placement="end" />
      ) : null}
    </div>
  );
}
