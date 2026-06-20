import React from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LanguagePickerSection from "../components/LanguagePickerSection";
import Navbar from "../components/Navbar";
import StatsSection from "../components/StatsSection";
import CourseSlider from "../components/CourseSlider";
import TryPythonSection from "../components/PythonCompiler";

import "../landing.css";

export default function LandingPage({
  onLanguageSelect,
  continueLanguage,
  theme = "dark",
  onToggleTheme,
}) {
  const isLight = theme === "light";

  return (
    <div
      className={`polycode-landing${isLight ? " polycode-landing--light" : ""}`}
    >
      <AnimatedBackground theme={theme} />
      <div
        className="polycode-grid"
        style={{ position: "relative", minHeight: "100vh" }}
      >
        <Navbar theme={theme} onToggleTheme={onToggleTheme} />
        <main>
          <Hero />

          <CourseSlider />

          <TryPythonSection theme={theme} />
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
