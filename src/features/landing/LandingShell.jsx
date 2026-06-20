import React from "react";
import LandingPage from "./pages/LandingPage";

/**
 * Landing page theme follows the global app theme and stays in sync when toggled.
 */
export default function LandingShell({
  savedTheme,
  onThemeChange,
  footer,
  onLanguageSelect,
  continueLanguage,
}) {
  const [landingTheme, setLandingTheme] = React.useState(savedTheme);

  React.useEffect(() => {
    setLandingTheme(savedTheme);
  }, [savedTheme]);

  React.useLayoutEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    html.setAttribute("data-theme", landingTheme);
    body.classList.toggle("light-theme", landingTheme === "light");

    if (landingTheme === "light") {
      html.style.backgroundColor = "#eef1f6";
      body.style.backgroundColor = "#eef1f6";
    } else {
      html.style.backgroundColor = "#03050a";
      body.style.backgroundColor = "#03050a";
    }

    return () => {
      html.style.backgroundColor = "";
      body.style.backgroundColor = "";
      html.setAttribute("data-theme", savedTheme);
      body.classList.toggle("light-theme", savedTheme === "light");
    };
  }, [landingTheme, savedTheme]);

  const toggleLandingTheme = React.useCallback(() => {
    setLandingTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      onThemeChange?.(next);
      return next;
    });
  }, [onThemeChange]);

  return (
    <div className={`app ${landingTheme === "light" ? "theme-light" : ""}`}>
      <LandingPage
        onLanguageSelect={onLanguageSelect}
        continueLanguage={continueLanguage}
        theme={landingTheme}
        onToggleTheme={toggleLandingTheme}
      />
      {footer}
    </div>
  );
}
