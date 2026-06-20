import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const ORBS = [
  { size: 420, x: "8%", y: "12%", color: "rgba(99,102,241,0.09)", duration: 22, delay: 0 },
  { size: 320, x: "78%", y: "8%", color: "rgba(56,189,248,0.06)", duration: 18, delay: 2 },
  { size: 280, x: "65%", y: "62%", color: "rgba(124,58,237,0.05)", duration: 26, delay: 1 },
  { size: 200, x: "12%", y: "72%", color: "rgba(56,189,248,0.05)", duration: 20, delay: 3 },
];

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${8 + ((i * 17) % 84)}%`,
  top: `${6 + ((i * 23) % 88)}%`,
  size: 2 + (i % 3),
  duration: 12 + (i % 8),
  delay: i * 0.4,
}));

export default function AnimatedBackground({ theme = "dark" }) {
  const reduceMotion = useReducedMotion();

  if (theme === "light") {
    return null;
  }

  if (reduceMotion) {
    return <div className="landing-bg-wrap" />;
  }

  return (
    <div className="landing-bg-wrap">
      {ORBS.map((orb) => (
        <motion.div
          key={`${orb.x}-${orb.y}`}
          className="landing-bg-orb"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
          }}
          animate={{
            x: [0, 40, -20, 30, 0],
            y: [0, -30, 20, -10, 0],
            scale: [1, 1.08, 0.95, 1.05, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}

      {PARTICLES.map((p) => (
        <motion.span
          key={p.id}
          className="landing-bg-particle"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{
            y: [0, -28, 0],
            opacity: [0.15, 0.7, 0.15],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      <div className="landing-bg-grid-drift" />
    </div>
  );
}
