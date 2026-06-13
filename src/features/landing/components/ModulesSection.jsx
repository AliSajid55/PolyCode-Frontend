import React, { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { BookOpen, Bot, Shield } from "lucide-react";

const MODULES = [
  {
    id: "polym_mentor",
    icon: Bot,
    image: "/images/assistnat2.png",
    name: "PolyMentor",
    tagline: "Your Personal AI Mentor",
    description:
      "Get instant explanations, debugging help, coding guidance, and personalized learning support whenever you need it.",
    features: [
      "AI coding guidance",
      "Error explanations",
      "Code optimization",
      "Personalized learning",
    ],
    cardClass: "landing-module-card--indigo",
    iconClass: "landing-module-icon--indigo",
    action: "assistant",
  },
  {
    id: "polycode-website",
    icon: BookOpen,
    image: "images/courses.png",
    name: "Interactive Learning",
    tagline: "Courses & Challenges",
    description:
      "Master programming through structured courses, hands-on exercises, coding challenges, and progress tracking.",
    features: [
      "Interactive courses",
      "Coding exercises",
      "Progress tracking",
      "Video tutorials",
    ],
    cardClass: "landing-module-card--violet",
    iconClass: "landing-module-icon--violet",
    action: "get-started",
  },
  {
    id: "polyguard",
    icon: Shield,
    image: "/images/polyguard.png",
    name: "PolyGuard",
    tagline: "AI Security Review",
    description:
      "Analyze code for vulnerabilities, receive security insights, and improve software quality before deployment.",
    features: [
      "Vulnerability detection",
      "Security scoring",
      "Risk analysis",
      "Improvement suggestions",
    ],
    cardClass: "landing-module-card--cyan",
    iconClass: "landing-module-icon--cyan",
    action: null,
  },
];

export default function ModulesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <section id="modules" ref={ref} className="landing-section">
      <div className="landing-container">
        <motion.div
          className="landing-modules-header"
          initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="landing-sec-label">Complete Learning Ecosystem</p>

          <h2 className="landing-sec-title">
            Everything You Need To Become A Better Developer
          </h2>

          <p className="landing-sec-sub">
            Learn programming through interactive courses, AI-powered mentoring,
            coding challenges, and built-in security analysis.
          </p>
        </motion.div>
        <div className="landing-modules-grid">
          {MODULES.map((module, index) => {
            const Icon = module.icon;

            const cardContent = (
              <>
                <div className="landing-module-image-wrap">
                  <img
                    src={module.image}
                    alt={module.name}
                    className="landing-module-image"
                  />
                </div>

                <div className={`landing-module-icon ${module.iconClass}`}>
                  <Icon size={24} aria-hidden />
                </div>

                <p className="landing-module-tagline">{module.tagline}</p>

                <h3>{module.name}</h3>

                <p>{module.description}</p>

                <ul className="landing-module-features">
                  {module.features.map((feature) => (
                    <li key={feature} className="landing-feature-pill">
                      {feature}
                    </li>
                  ))}
                </ul>
              </>
            );

            if (module.action === "assistant") {
              return (
                <motion.article
                  key={module.id}
                  className={`landing-module-card ${module.cardClass}`}
                  initial={reduceMotion ? {} : { opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.15,
                  }}
                >
                  {cardContent}

                  <div style={{ marginTop: "1.25rem" }}>
                    <div className="landing-module-action"></div>
                  </div>
                </motion.article>
              );
            }

            if (module.action === "get-started") {
              return (
                <motion.a
                  key={module.id}
                  href="#get-started"
                  className={`landing-module-card landing-module-card--clickable ${module.cardClass}`}
                  initial={reduceMotion ? {} : { opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.15,
                  }}
                >
                  {cardContent}
                </motion.a>
              );
            }

            return (
              <motion.article
                key={module.id}
                className={`landing-module-card ${module.cardClass}`}
                initial={reduceMotion ? {} : { opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: index * 0.15,
                }}
              >
                {cardContent}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
