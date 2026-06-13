import React from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LanguagePickerSection from "../components/LanguagePickerSection";
import Navbar from "../components/Navbar";
import StatsSection from "../components/StatsSection";
import ModulesSection from "../components/ModulesSection";

import "../landing.css";

export default function LandingPage({ onLanguageSelect, continueLanguage }) {
  return (
    <div className="polycode-landing">
      <AnimatedBackground />
      <div
        className="polycode-grid"
        style={{ position: "relative", minHeight: "100vh" }}
      >
        <Navbar />
        <main>
          <Hero />

          <ModulesSection />
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
