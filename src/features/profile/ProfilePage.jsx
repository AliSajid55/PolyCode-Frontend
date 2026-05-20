import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/context/AuthContext";
import { ALL_LESSONS, TOTAL_XP } from "../learn/oops-cpp/data/oopsCurriculum";
import useOopsProgress from "../learn/oops-cpp/hooks/useOopsProgress";
import {
  POINTER_LESSONS,
  POINTER_TOTAL_XP,
} from "../learn/pointers-cpp/data/pointersCurriculum";
import usePointersProgress from "../learn/pointers-cpp/hooks/usePointersProgress";
import {
  NUMPY_LESSONS,
  NUMPY_TOTAL_XP,
} from "../learn/numpy-py/data/numpyCurriculum";
import useNumpyProgress from "../learn/numpy-py/hooks/useNumpyProgress";

const DAY_MS = 24 * 60 * 60 * 1000;
const MIN_ACTIVITY_DAYS = 30;

function toDateKey(value) {
  const date = value ? new Date(value) : null;
  if (!date || Number.isNaN(date.getTime())) return null;
  return date.toISOString().slice(0, 10);
}

function getResponsiveActivityDays(width = 0) {
  if (width < 560) return 30;
  if (width < 860) return 60;
  const columns = Math.max(9, Math.floor((width - 4) / 17));
  return Math.min(365, Math.max(MIN_ACTIVITY_DAYS, columns * 7));
}

function buildActivityDays(dayCount, ...progressMaps) {
  const counts = new Map();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayKey = today.toISOString().slice(0, 10);
  const start = new Date(today.getTime() - (dayCount - 1) * DAY_MS);
  const startKey = start.toISOString().slice(0, 10);

  progressMaps.forEach((progress) => {
    Object.values(progress).forEach((item) => {
      let key = toDateKey(item?.at || item?.completedAt || item);
      if (!key || key < startKey || key > todayKey) {
        key = todayKey;
      }
      counts.set(key, (counts.get(key) || 0) + 1);
    });
  });

  return Array.from({ length: dayCount }, (_, index) => {
    const date = new Date(start.getTime() + index * DAY_MS);
    const key = date.toISOString().slice(0, 10);
    const count = counts.get(key) || 0;
    return {
      key,
      count,
      label: date.toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
      }),
    };
  });
}

function levelForCount(count) {
  if (count >= 4) return 4;
  if (count >= 3) return 3;
  if (count >= 2) return 2;
  if (count >= 1) return 1;
  return 0;
}

function ActivityGraph({ days }) {
  const activeDays = days.filter((day) => day.count > 0).length;
  const totalCompletions = days.reduce((sum, day) => sum + day.count, 0);
  const [tooltip, setTooltip] = React.useState(null);

  const showTooltip = (event, day) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltip({
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
      text: `${day.label}: ${day.count} lesson${day.count === 1 ? "" : "s"} done`,
    });
  };

  return (
    <section className="profile-activity-card">
      <div className="profile-activity-head">
        <div>
          <span>Progress Graph</span>
          <h2>Learning activity</h2>
        </div>
        <strong>
          {totalCompletions} completion{totalCompletions === 1 ? "" : "s"}
        </strong>
      </div>
      <div className="profile-activity-grid" aria-label="Learning activity graph">
        {days.map((day) => (
          <span
            key={day.key}
            className="profile-activity-cell"
            data-level={levelForCount(day.count)}
            aria-label={`${day.label}: ${day.count} lesson${day.count === 1 ? "" : "s"} done`}
            tabIndex={0}
            onMouseEnter={(event) => showTooltip(event, day)}
            onMouseLeave={() => setTooltip(null)}
            onFocus={(event) => showTooltip(event, day)}
            onBlur={() => setTooltip(null)}
          />
        ))}
      </div>
      {tooltip && (
        <div
          className="profile-activity-tooltip"
          style={{
            left: tooltip.x,
            top: tooltip.y,
          }}
        >
          {tooltip.text}
        </div>
      )}
      <div className="profile-activity-footer">
        <span>{activeDays} active days in the last {days.length} days</span>
        <div className="profile-activity-legend" aria-hidden="true">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <i key={level} data-level={level} />
          ))}
          <span>More</span>
        </div>
      </div>
    </section>
  );
}

function TrackProgressCard({
  title,
  subtitle,
  lessons,
  totalXP,
  progress,
  bookmarks,
  href,
  accent,
  streak = 0,
}) {
  const completedCount = Object.keys(progress).length;
  const pct = Math.round((completedCount / lessons.length) * 100) || 0;
  const earnedXP = lessons
    .filter((lesson) => progress[lesson.id])
    .reduce((sum, lesson) => sum + lesson.xp, 0);
  const nextLesson = lessons.find((lesson) => !progress[lesson.id]) || lessons[0];

  return (
    <section className="profile-track-card" style={{ "--profile-accent": accent }}>
      <div className="profile-track-head">
        <div>
          <span>{subtitle}</span>
          <h2>{title}</h2>
        </div>
        <strong>{pct}%</strong>
      </div>

      <div className="profile-track-meter">
        <div style={{ width: `${pct}%` }} />
      </div>

      <div className="profile-track-stats">
        <div>
          <span>Lessons</span>
          <strong>
            {completedCount}/{lessons.length}
          </strong>
        </div>
        <div>
          <span>XP</span>
          <strong>
            {earnedXP}/{totalXP}
          </strong>
        </div>
        <div>
          <span>Streak</span>
          <strong>{streak} days</strong>
        </div>
        <div>
          <span>Saved</span>
          <strong>{bookmarks.length}</strong>
        </div>
      </div>

      <div className="profile-next-row">
        <div>
          <span>Next lesson</span>
          <strong>{nextLesson.title}</strong>
        </div>
        <Link to={`${href}/lesson/${nextLesson.id}`}>Continue</Link>
      </div>
    </section>
  );
}

export default function ProfilePage() {
  const { user } = useAuth();
  const oops = useOopsProgress();
  const pointers = usePointersProgress();
  const numpy = useNumpyProgress();
  const initials = user
    ? (user.firstName?.[0] || user.username?.[0] || "U").toUpperCase()
    : "G";
  const totalCompleted =
    Object.keys(oops.completedMap).length +
    Object.keys(pointers.completedMap).length +
    Object.keys(numpy.completedMap).length;
  const totalLessons =
    ALL_LESSONS.length + POINTER_LESSONS.length + NUMPY_LESSONS.length;
  const totalPct = Math.round((totalCompleted / totalLessons) * 100) || 0;
  const totalStreak = oops.remoteProgress?.currentStreak || 0;
  const [activityWidth, setActivityWidth] = React.useState(0);
  const activityWrapRef = React.useRef(null);
  const activityDayCount = getResponsiveActivityDays(activityWidth);
  const activityDays = React.useMemo(
    () =>
      buildActivityDays(
        activityDayCount,
        oops.completedMap,
        pointers.completedMap,
        numpy.completedMap,
      ),
    [
      activityDayCount,
      oops.completedMap,
      pointers.completedMap,
      numpy.completedMap,
    ],
  );

  React.useEffect(() => {
    const node = activityWrapRef.current;
    if (!node) return undefined;

    let animationFrame = 0;
    const updateWidth = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        const nextWidth = Math.round(node.getBoundingClientRect().width);
        setActivityWidth((currentWidth) =>
          currentWidth === nextWidth ? currentWidth : nextWidth,
        );
      });
    };
    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(node);
    return () => {
      window.cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, []);

  return (
    <main className="profile-page">
      <section className="profile-hero">
        <div className="profile-hero-avatar">{initials}</div>
        <div>
          <span className="profile-kicker">Learner Profile</span>
          <h1>{user?.username || "Guest learner"}</h1>
          <p>{user?.email || "Progress is saved locally on this device."}</p>
        </div>
        <div className="profile-total-progress">
          <span>Current Streak</span>
          <strong>{totalStreak} days</strong>
        </div>
      </section>

      <section className="profile-overview-grid">
        <div>
          <span>Total Lessons</span>
          <strong>
            {totalCompleted}/{totalLessons}
          </strong>
        </div>
        <div>
          <span>OOPs Bookmarks</span>
          <strong>{oops.bookmarks.length}</strong>
        </div>
        <div>
          <span>Pointers Bookmarks</span>
          <strong>{pointers.bookmarks.length}</strong>
        </div>
        <div>
          <span>Total Progress</span>
          <strong>{totalPct}%</strong>
        </div>
      </section>

      <div ref={activityWrapRef}>
        <ActivityGraph days={activityDays} />
      </div>

      <div className="profile-track-grid">
        <TrackProgressCard
          title="OOPs C++"
          subtitle={oops.syncState === "synced" ? "Synced track" : "Learning track"}
          lessons={ALL_LESSONS}
          totalXP={TOTAL_XP}
          progress={oops.completedMap}
          bookmarks={oops.bookmarks}
          href="/learn/oops-cpp"
          accent="#b8ff00"
          streak={oops.remoteProgress?.currentStreak || 0}
        />
        <TrackProgressCard
          title="Pointers C++"
          subtitle="Memory track"
          lessons={POINTER_LESSONS}
          totalXP={POINTER_TOTAL_XP}
          progress={pointers.completedMap}
          bookmarks={pointers.bookmarks}
          href="/learn/pointers-cpp"
          accent="#00d4ff"
        />
        <TrackProgressCard
          title="NumPy · py"
          subtitle="Python data track"
          lessons={NUMPY_LESSONS}
          totalXP={NUMPY_TOTAL_XP}
          progress={numpy.completedMap}
          bookmarks={numpy.bookmarks}
          href="/learn/numpy-py"
          accent="#4dabcf"
        />
      </div>
    </main>
  );
}
