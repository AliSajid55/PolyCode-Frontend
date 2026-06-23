import { useCallback, useEffect, useMemo, useState } from "react";
import { useAuth } from "../../../auth/context/AuthContext";
import {
  addOopsTime,
  completeOopsLesson,
  getOopsProgress,
  progressToMap,
  savedCodeToMap,
  saveOopsCode,
  setLastOopsLesson,
  toggleOopsBookmark,
} from "../services/oopsProgressApi";

const LOCAL_KEY = "oops_progress";
const LOCAL_CODE_KEY = "oops_saved_code";
const LOCAL_BOOKMARKS_KEY = "oops_bookmarks";
const LOCAL_LAST_KEY = "oops_last_lesson";

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
}

export default function useOopsProgress() {
  const { user, token } = useAuth();
  const [remoteProgress, setRemoteProgress] = useState(null);
  const [syncState, setSyncState] = useState("local");
  const [localVersion, setLocalVersion] = useState(0);

  const refreshLocal = useCallback(() => setLocalVersion((v) => v + 1), []);

  useEffect(() => {
    let cancelled = false;
    if (!token) {
      setRemoteProgress(null);
      setSyncState("local");
      return undefined;
    }

    setSyncState("syncing");
    getOopsProgress(token)
      .then((progress) => {
        if (cancelled) return;
        setRemoteProgress(progress);
        setSyncState("synced");
      })
      .catch(() => {
        if (cancelled) return;
        setRemoteProgress(null);
        setSyncState("error");
      });

    return () => {
      cancelled = true;
    };
  }, [token, localVersion]);

  const completedMap = useMemo(() => {
    void localVersion;
    if (remoteProgress) return progressToMap(remoteProgress);
    return readJson(LOCAL_KEY, {});
  }, [remoteProgress, localVersion]);

  const savedCodeMap = useMemo(() => {
    void localVersion;
    if (remoteProgress) return savedCodeToMap(remoteProgress);
    return readJson(LOCAL_CODE_KEY, {});
  }, [remoteProgress, localVersion]);

  const bookmarks = useMemo(() => {
    void localVersion;
    if (remoteProgress) return remoteProgress.bookmarks || [];
    return readJson(LOCAL_BOOKMARKS_KEY, []);
  }, [remoteProgress, localVersion]);

  const lastLessonId = remoteProgress
    ? remoteProgress.lastLessonId
    : localStorage.getItem(LOCAL_LAST_KEY);

  const completeLesson = useCallback(
    async (lesson) => {
      if (token) {
        const progress = await completeOopsLesson(token, {
          lessonId: lesson.id,
          title: lesson.title,
          chapterId: lesson.chapterId,
          chapterTitle: lesson.chapterTitle,
          xp: lesson.xp,
        });
        setRemoteProgress(progress);
        setSyncState("synced");
        return;
      }

      const current = readJson(LOCAL_KEY, {});
      current[lesson.id] = { xp: lesson.xp, at: Date.now() };
      localStorage.setItem(LOCAL_KEY, JSON.stringify(current));
      localStorage.setItem(LOCAL_LAST_KEY, lesson.id);
      refreshLocal();
    },
    [refreshLocal, token],
  );

  const rememberLesson = useCallback(
    async (lessonId) => {
      if (token) {
        try {
          const progress = await setLastOopsLesson(token, lessonId);
          setRemoteProgress(progress);
          setSyncState("synced");
        } catch {
          setSyncState("error");
        }
        return;
      }

      localStorage.setItem(LOCAL_LAST_KEY, lessonId);
      refreshLocal();
    },
    [refreshLocal, token],
  );

  const saveCode = useCallback(
    async (lessonId, code) => {
      if (token) {
        const progress = await saveOopsCode(token, lessonId, code);
        setRemoteProgress(progress);
        setSyncState("synced");
        return;
      }

      const current = readJson(LOCAL_CODE_KEY, {});
      current[lessonId] = code;
      localStorage.setItem(LOCAL_CODE_KEY, JSON.stringify(current));
      refreshLocal();
    },
    [refreshLocal, token],
  );

  const toggleBookmark = useCallback(
    async (lessonId) => {
      if (token) {
        const progress = await toggleOopsBookmark(token, lessonId);
        setRemoteProgress(progress);
        setSyncState("synced");
        return;
      }

      const current = readJson(LOCAL_BOOKMARKS_KEY, []);
      const next = current.includes(lessonId)
        ? current.filter((id) => id !== lessonId)
        : [...current, lessonId];
      localStorage.setItem(LOCAL_BOOKMARKS_KEY, JSON.stringify(next));
      refreshLocal();
    },
    [refreshLocal, token],
  );

  const addTime = useCallback(
    async (minutes) => {
      if (!token) return;
      try {
        const progress = await addOopsTime(token, minutes);
        setRemoteProgress(progress);
        setSyncState("synced");
      } catch {
        setSyncState("error");
      }
    },
    [token],
  );

  return {
    user,
    syncState,
    remoteProgress,
    completedMap,
    savedCodeMap,
    bookmarks,
    lastLessonId,
    completeLesson,
    rememberLesson,
    saveCode,
    toggleBookmark,
    addTime,
  };
}
