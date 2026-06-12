/**
 * Attach videoUrl from a links map onto flattened lesson objects.
 * Map values can be a string URL or { videoUrl: "..." }.
 */
export function applyLessonVideoLinks(lessons, videoLinks = {}) {
  return lessons.map((lesson) => {
    const entry = videoLinks[lesson.id];
    const url = (
      typeof entry === "string" ? entry : entry?.videoUrl || ""
    ).trim();

    if (!url) return lesson;
    return { ...lesson, videoUrl: url };
  });
}
