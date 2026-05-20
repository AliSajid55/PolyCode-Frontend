import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Navbar from "./features/navigation/components/Navbar";
import Sidebar from "./features/navigation/components/Sidebar";
import { PlaygroundProvider } from "./features/playground/context/PlaygroundContext";
import { AuthProvider } from "./features/auth/context/AuthContext";
import SelectionPins from "./shared/components/SelectionPins";
import "./App.css";
import "./styles/theme-light.css";
import "./styles/stack-picker-dark.css";
import "./styles/responsive.css";

const LanguageSelectPage = lazy(
  () => import("./features/language/pages/LanguageSelectPage"),
);
const LanguageLandingPage = lazy(
  () => import("./features/language/pages/LanguageLandingPage"),
);
const HomePage = lazy(() => import("./features/docs/pages/Home/HomePage"));
const DocumentPage = lazy(() => import("./features/docs/pages/DocumentPage"));
const CategoryPage = lazy(() => import("./features/docs/pages/CategoryPage"));
const SearchPage = lazy(() => import("./features/docs/pages/SearchPage"));
const PlaygroundPage = lazy(
  () => import("./features/playground/pages/PlaygroundPage"),
);
const LoginPage = lazy(() => import("./features/auth/pages/LoginPage"));
const SignupPage = lazy(() => import("./features/auth/pages/SignupPage"));
const DailyChallenge = lazy(() => import("./pages/DailyChallenges"));
const ProfilePage = lazy(() => import("./features/profile/ProfilePage"));

// Learn — OOP C++ pages
const OopsHub = lazy(() => import("./features/learn/oops-cpp/pages/OopsHub"));
const LessonPage = lazy(
  () => import("./features/learn/oops-cpp/pages/LessonPage"),
);
const PointersHub = lazy(
  () => import("./features/learn/pointers-cpp/pages/PointersHub"),
);
const PointersLessonPage = lazy(
  () => import("./features/learn/pointers-cpp/pages/PointersLessonPage"),
);

const PageFallback = () => (
  <div className="loading">
    <div className="spinner-container">
      <div className="spinner" />
    </div>
  </div>
);

function ScrollToTop() {
  const { pathname, search } = useLocation();

  React.useLayoutEffect(() => {
    const html = document.documentElement;
    const previousScrollBehavior = html.style.scrollBehavior;

    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    document.querySelectorAll(".main-content, .learn-content").forEach((node) => {
      node.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });

    return () => {
      html.style.scrollBehavior = previousScrollBehavior;
    };
  }, [pathname, search]);

  return null;
}

function MainApp({
  selectedLanguage,
  onLanguageSelect,
  onGoToStackPicker,
  theme,
  onToggleTheme,
}) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const toggleSidebar = () => setIsSidebarOpen((o) => !o);
  const closeSidebar = () => setIsSidebarOpen(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const lock = isSidebarOpen && mq.matches;
    document.body.classList.toggle("sidebar-open", lock);
    document.body.style.overflow = lock ? "hidden" : "";
    return () => {
      document.body.classList.remove("sidebar-open");
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  return (
    <>
      <Navbar
        toggleSidebar={toggleSidebar}
        theme={theme}
        onToggleTheme={onToggleTheme}
        onGoToStackPicker={onGoToStackPicker}
      />
      <div className="layout">
        {isSidebarOpen && <div className="backdrop" onClick={closeSidebar} />}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
          selectedLanguage={selectedLanguage}
          onLanguageSelect={onLanguageSelect}
          onGoToStackPicker={onGoToStackPicker}
        />
        <main className="main-content">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Navigate to="/hub" replace />} />
              <Route
                path="/hub"
                element={<HomePage selectedLanguage={selectedLanguage} />}
              />
              <Route
                path="/doc/*"
                element={
                  <DocumentPage
                    selectedLanguage={selectedLanguage}
                    theme={theme}
                  />
                }
              />
              <Route
                path="/category/*"
                element={<CategoryPage selectedLanguage={selectedLanguage} />}
              />
              <Route
                path="/search"
                element={<SearchPage selectedLanguage={selectedLanguage} />}
              />
              <Route
                path="/playground"
                element={
                  <PlaygroundPage
                    theme={theme}
                    onToggleSidebar={toggleSidebar}
                    sidebarOpen={isSidebarOpen}
                  />
                }
              />
              <Route
                path="/daily-challenge"
                element={<DailyChallenge theme={theme} />}
              />
              <Route path="*" element={<Navigate to="/hub" replace />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </>
  );
}

function LearnShell({ theme, onToggleTheme, onGoToStackPicker, children }) {
  const location = useLocation();

  React.useEffect(() => {
    if (!location.pathname.startsWith("/learn/")) return;

    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.querySelector(".main-content.learn-content")?.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    });
  }, [location.pathname]);

  return (
    <>
      <Navbar
        toggleSidebar={() => {}}
        theme={theme}
        onToggleTheme={onToggleTheme}
        onGoToStackPicker={onGoToStackPicker}
      />
      <main className="main-content learn-content">{children}</main>
    </>
  );
}

function ThemedShell({ theme, children }) {
  return (
    <div className={`app ${theme === "light" ? "theme-light" : ""}`}>
      {children}
    </div>
  );
}

/** Language picker is always dark — overrides global light theme on html/body */
function StackPickerShell({ children, savedTheme }) {
  React.useLayoutEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    html.setAttribute("data-theme", "dark");
    body.classList.remove("light-theme");
    html.style.backgroundColor = "#03050a";
    body.style.backgroundColor = "#03050a";

    return () => {
      html.style.backgroundColor = "";
      body.style.backgroundColor = "";
      // Restore the real theme when leaving the stack picker
      html.setAttribute("data-theme", savedTheme);
      body.classList.toggle("light-theme", savedTheme === "light");
    };
  }, [savedTheme]);

  return <div className="app stack-picker-dark">{children}</div>;
}

function AppRoutes() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedLanguage, setSelectedLanguage] = React.useState(
    () => localStorage.getItem("selectedLanguage") || null,
  );
  const [theme, setTheme] = React.useState(
    () => localStorage.getItem("theme") || "dark",
  );

  const handleLanguageSelect = React.useCallback(
    (language, options = {}) => {
      setSelectedLanguage(language);
      localStorage.setItem("selectedLanguage", language);
      if (!options.stay) {
        navigate(`/language/${encodeURIComponent(language)}`, { replace: true });
      }
    },
    [navigate],
  );

  const goToStackPicker = React.useCallback(() => {
    navigate("/select-language");
  }, [navigate]);

  const toggleTheme = React.useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  React.useEffect(() => {
    localStorage.setItem("theme", theme);
    // Bug fix: always apply the theme attribute, even on /select-language.
    // StackPickerShell forces "dark" via its own useLayoutEffect and restores
    // the real theme on unmount, so we don't need to skip this update.
    document.documentElement.setAttribute("data-theme", theme);
    document.body.classList.toggle("light-theme", theme === "light");
  }, [theme, location.pathname]);

  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route
          path="/login"
          element={
            <ThemedShell theme={theme}>
              <LoginPage />
            </ThemedShell>
          }
        />
        <Route
          path="/signup"
          element={
            <ThemedShell theme={theme}>
              <SignupPage />
            </ThemedShell>
          }
        />
        <Route
          path="/select-language"
          element={
            <StackPickerShell savedTheme={theme}>
              <LanguageSelectPage
                onLanguageSelect={handleLanguageSelect}
                continueLanguage={selectedLanguage}
              />
            </StackPickerShell>
          }
        />
        <Route
          path="/language/:language"
          element={
            <ThemedShell theme={theme}>
              <LearnShell
                theme={theme}
                onToggleTheme={toggleTheme}
                onGoToStackPicker={goToStackPicker}
              >
                <LanguageLandingPage
                  selectedLanguage={selectedLanguage}
                  onLanguageSelect={handleLanguageSelect}
                />
              </LearnShell>
            </ThemedShell>
          }
        />
        <Route
          path="/learn/oops-cpp"
          element={
            <ThemedShell theme={theme}>
              <LearnShell
                theme={theme}
                onToggleTheme={toggleTheme}
                onGoToStackPicker={goToStackPicker}
              >
                <OopsHub />
              </LearnShell>
            </ThemedShell>
          }
        />
        <Route
          path="/learn/oops-cpp/lesson/:lessonId"
          element={
            <ThemedShell theme={theme}>
              <LearnShell
                theme={theme}
                onToggleTheme={toggleTheme}
                onGoToStackPicker={goToStackPicker}
              >
                <LessonPage />
              </LearnShell>
            </ThemedShell>
          }
        />
        <Route
          path="/learn/oops-cpp/:lessonId"
          element={
            <ThemedShell theme={theme}>
              <LearnShell
                theme={theme}
                onToggleTheme={toggleTheme}
                onGoToStackPicker={goToStackPicker}
              >
                <LessonPage />
              </LearnShell>
            </ThemedShell>
          }
        />
        <Route
          path="/learn/pointers-cpp"
          element={
            <ThemedShell theme={theme}>
              <LearnShell
                theme={theme}
                onToggleTheme={toggleTheme}
                onGoToStackPicker={goToStackPicker}
              >
                <PointersHub />
              </LearnShell>
            </ThemedShell>
          }
        />
        <Route
          path="/learn/pointers-cpp/lesson/:lessonId"
          element={
            <ThemedShell theme={theme}>
              <LearnShell
                theme={theme}
                onToggleTheme={toggleTheme}
                onGoToStackPicker={goToStackPicker}
              >
                <PointersLessonPage />
              </LearnShell>
            </ThemedShell>
          }
        />
        <Route
          path="/learn/pointers-cpp/:lessonId"
          element={
            <ThemedShell theme={theme}>
              <LearnShell
                theme={theme}
                onToggleTheme={toggleTheme}
                onGoToStackPicker={goToStackPicker}
              >
                <PointersLessonPage />
              </LearnShell>
            </ThemedShell>
          }
        />
        <Route
          path="/profile"
          element={
            <ThemedShell theme={theme}>
              <LearnShell
                theme={theme}
                onToggleTheme={toggleTheme}
                onGoToStackPicker={goToStackPicker}
              >
                <ProfilePage />
              </LearnShell>
            </ThemedShell>
          }
        />
        <Route
          path="/*"
          element={
            <ThemedShell theme={theme}>
              {selectedLanguage ? (
                <MainApp
                  selectedLanguage={selectedLanguage}
                  onLanguageSelect={handleLanguageSelect}
                  onGoToStackPicker={goToStackPicker}
                  theme={theme}
                  onToggleTheme={toggleTheme}
                />
              ) : (
                <Navigate to="/select-language" replace />
              )}
            </ThemedShell>
          }
        />
      </Routes>
    </Suspense>
  );
}

function App() {
  return (
    <AuthProvider>
      <PlaygroundProvider>
        <Router>
          <SelectionPins />
          <ScrollToTop />
          <AppRoutes />
        </Router>
      </PlaygroundProvider>
    </AuthProvider>
  );
}

export default App;
