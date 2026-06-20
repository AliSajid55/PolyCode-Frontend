import React from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LanguagePickerSection from "../components/LanguagePickerSection";
import Navbar from "../components/Navbar";
import StatsSection from "../components/StatsSection";
import CourseSlider from "../components/CourseSlider";
import TryPythonSection from "../components/PythonCompiler";
import { isLightTheme } from "../../../shared/theme/themes";

import "../landing.css";

export default function LandingPage({
  onLanguageSelect,
  continueLanguage,
  theme = "dark",
  onThemeChange,
}) {
  const isLight = isLightTheme(theme);

  return (
    <div
      className={`polycode-landing${isLight ? " polycode-landing--light" : ""}`}
    >
      <AnimatedBackground theme={theme} />
      <div
        className="polycode-grid"
        style={{ position: "relative", minHeight: "100vh" }}
      >
        <Navbar theme={theme} onThemeChange={onThemeChange} />
        <main>
          <Hero />

          <CourseSlider />

          <TryPythonSection />
          <StatsSection />
          <LanguagePickerSection
            onLanguageSelect={onLanguageSelect}
            continueLanguage={continueLanguage}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}
