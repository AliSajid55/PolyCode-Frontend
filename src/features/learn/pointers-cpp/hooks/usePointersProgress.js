import { useCallback, useMemo, useState } from "react";
import { useAuth } from "../../../auth/context/AuthContext";

const LOCAL_KEY = "pointers_cpp_progress";
const LOCAL_CODE_KEY = "pointers_cpp_saved_code";
const LOCAL_BOOKMARKS_KEY = "pointers_cpp_bookmarks";
const LOCAL_LAST_KEY = "pointers_cpp_last_lesson";

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
}

export default function usePointersProgress() {
  const { user } = useAuth();
  const [localVersion, setLocalVersion] = useState(0);
  const refreshLocal = useCallback(() => setLocalVersion((value) => value + 1), []);

  const localSnapshot = useMemo(() => {
    void localVersion;
    return {
      completed: readJson(LOCAL_KEY, {}),
      savedCode: readJson(LOCAL_CODE_KEY, {}),
      bookmarks: readJson(LOCAL_BOOKMARKS_KEY, []),
    };
  }, [localVersion]);

  const completedMap = localSnapshot.completed;
  const savedCodeMap = localSnapshot.savedCode;
  const bookmarks = localSnapshot.bookmarks;
  const lastLessonId = localStorage.getItem(LOCAL_LAST_KEY);

  const completeLesson = useCallback(
    async (lesson) => {
      const current = readJson(LOCAL_KEY, {});
      current[lesson.id] = { xp: lesson.xp, at: Date.now() };
      localStorage.setItem(LOCAL_KEY, JSON.stringify(current));
      localStorage.setItem(LOCAL_LAST_KEY, lesson.id);
      refreshLocal();
    },
    [refreshLocal],
  );

  const rememberLesson = useCallback(
    async (lessonId) => {
      localStorage.setItem(LOCAL_LAST_KEY, lessonId);
      refreshLocal();
    },
    [refreshLocal],
  );

  const saveCode = useCallback(
    async (lessonId, code) => {
      const current = readJson(LOCAL_CODE_KEY, {});
      current[lessonId] = code;
      localStorage.setItem(LOCAL_CODE_KEY, JSON.stringify(current));
      refreshLocal();
    },
    [refreshLocal],
  );

  const toggleBookmark = useCallback(
    async (lessonId) => {
      const current = readJson(LOCAL_BOOKMARKS_KEY, []);
      const next = current.includes(lessonId)
        ? current.filter((id) => id !== lessonId)
        : [...current, lessonId];
      localStorage.setItem(LOCAL_BOOKMARKS_KEY, JSON.stringify(next));
      refreshLocal();
    },
    [refreshLocal],
  );

  const addTime = useCallback(async () => {}, []);

  return {
    user,
    syncState: "local",
    remoteProgress: null,
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
