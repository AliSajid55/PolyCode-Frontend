import React from "react";
import { Github, Mail, BookOpen, Shield, Bot } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer-pro">
      <div className="footer-main">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-gradient">Poly</span>Code
          </div>

          <p className="footer-description">
            AI-powered programming education platform with interactive courses,
            coding challenges, personal mentorship, and security analysis.
          </p>

          <div className="footer-socials">
            <a
              href="https://github.com/QuantumLogicsLabs/PolyCode"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
            </a>

            <a href="mailto:support@quantumlogicslimited.com">
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Platform */}
        <div className="footer-links">
          <h4>Platform</h4>

          <a href="#modules">
            <Bot size={16} />
            PolyMentor
          </a>

          <a href="#modules">
            <BookOpen size={16} />
            Courses
          </a>

          <a href="#modules">
            <Shield size={16} />
            PolyGuard
          </a>
        </div>

        {/* Resources */}
        <div className="footer-links">
          <h4>Resources</h4>

          <a href="https://code.quantumlogicslimited.com/hub">Documentation</a>

          <a href="#get-started">Learning Paths</a>

          <a href="#modules">Challenges</a>
        </div>

        {/* Pages */}
        <div className="footer-links">
          <h4>Pages</h4>

          <a href="#top">About</a>

          <a href="mailto:support@quantumlogicslimited.com">Contact</a>

          <a href="/privacy">Privacy Policy</a>

          <a href="/terms">Terms of Service</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} PolyCode. All rights reserved.</p>

        <span>Learn • Build • Secure</span>
      </div>
    </footer>
  );
}
