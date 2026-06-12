import React from "react";
import { ExternalLink, PlayCircle } from "lucide-react";
import {
  getYouTubeEmbedUrl,
  getYouTubeWatchUrl,
} from "./youtubeUtils";

export default function LessonVideo({
  url,
  title = "Lesson video",
  placement = "end",
}) {
  const embedUrl = getYouTubeEmbedUrl(url);
  const watchUrl = getYouTubeWatchUrl(url);

  if (!embedUrl) return null;

  return (
    <section
      className={`lesson-video lesson-video--compact lesson-video--${placement}`}
      aria-label="Lesson video"
    >
      <div className="lesson-video-head">
        <span className="lesson-video-kicker">
          <PlayCircle size={14} aria-hidden />
          Video lesson
        </span>
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="lesson-video-link"
        >
          Open in YouTube <ExternalLink size={14} aria-hidden />
        </a>
      </div>
      <div className="lesson-video-frame">
        <iframe
          src={embedUrl}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>
  );
}
