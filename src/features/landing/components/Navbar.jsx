import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { getLanguages } from "../../docs/services/api";
import { COURSE_GROUPS } from "../../learn/shared/allCourses";
import ThemeSettingsMenu from "../../../shared/theme/ThemeSettingsMenu";

const NAV_LINKS = [
  { href: "#modules", label: "Features" },
  { href: "/playground", label: "Playground" },
];

export default function Navbar({ theme = "dark", onThemeChange }) {
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileExpandedGroup, setMobileExpandedGroup] = useState(null);
  const [activeCourseGroup, setActiveCourseGroup] = useState(
    COURSE_GROUPS[0]?.id ?? null,
  );
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const [languages, setLanguages] = useState([]);
  const coursesRef = useRef(null);
  const langRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const nav = document.querySelector(".landing-navbar");
    const onScroll = () =>
      nav?.classList.toggle("landing-navbar--scrolled", window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    getLanguages()
      .then(({ data }) => {
        setLanguages(Array.isArray(data.languages) ? data.languages : []);
      })
      .catch(() => setLanguages([]));
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (!coursesRef.current?.contains(e.target)) setCoursesOpen(false);
      if (!langRef.current?.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileCoursesOpen(false);
    setMobileLangOpen(false);
    setMobileExpandedGroup(null);
  };

  const activeGroup =
    COURSE_GROUPS.find((group) => group.id === activeCourseGroup) ||
    COURSE_GROUPS[0] ||
    null;

  useEffect(() => {
    if (coursesOpen && COURSE_GROUPS[0] && !activeCourseGroup) {
      setActiveCourseGroup(COURSE_GROUPS[0].id);
    }
  }, [coursesOpen, activeCourseGroup]);

  const handleNav = (href) => {
    setCoursesOpen(false);
    setLangOpen(false);
    closeMobile();
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(href);
    }
  };

  return (
    <>
      <header className="landing-navbar">
        <div className="landing-container">
          <div className="landing-navbar-inner">
            <button
              type="button"
              className="landing-mobile-menu-btn"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <a href="#top" className="landing-brand">
              <div className="landing-brand-mark">
                <img
                  src="/images/polycode-logo.png"
                  alt="PolyCode Logo"
                  className="landing-logo"
                />
              </div>
              <div className="landing-brand-text">
                <span className="landing-logo-text">PolyCode</span>
                <span className="landing-logo-sub">AI Learning Platform</span>
              </div>
            </a>

            <nav className="landing-nav-links">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  className="landing-nav-link"
                  onClick={() => handleNav(link.href)}
                >
                  {link.label}
                </button>
              ))}

              <div className="ln-dropdown-wrap" ref={coursesRef}>
                <button
                  className={`landing-nav-link ln-dropdown-trigger${coursesOpen ? " ln-dropdown-trigger--open" : ""}`}
                  onClick={() => {
                    setCoursesOpen((o) => !o);
                    setLangOpen(false);
                  }}
                  aria-expanded={coursesOpen}
                >
                  Courses
                  <ChevronDown size={13} className="ln-chevron" />
                </button>

                {coursesOpen && (
                  <div className="ln-dropdown ln-dropdown--grouped">
                    <p className="ln-dropdown-label">Browse by stack</p>
                    <div className="ln-course-groups">
                      <div
                        className="ln-course-groups-nav"
                        role="tablist"
                        aria-label="Course stacks"
                      >
                        {COURSE_GROUPS.map((group) => (
                          <button
                            key={group.id}
                            type="button"
                            role="tab"
                            aria-selected={activeGroup?.id === group.id}
                            className={`ln-course-group-tab${
                              activeGroup?.id === group.id
                                ? " ln-course-group-tab--active"
                                : ""
                            }`}
                            style={{ "--stack-accent": group.accent }}
                            onMouseEnter={() => setActiveCourseGroup(group.id)}
                            onFocus={() => setActiveCourseGroup(group.id)}
                            onClick={() => setActiveCourseGroup(group.id)}
                          >
                            <span className="ln-course-group-tab-label">
                              {group.label}
                            </span>
                            <span className="ln-course-group-tab-count">
                              {group.courses.length}
                            </span>
                          </button>
                        ))}
                      </div>

                      {activeGroup ? (
                        <div
                          className="ln-course-groups-panel"
                          role="tabpanel"
                          aria-label={`${activeGroup.label} courses`}
                        >
                          <p className="ln-course-groups-panel-title">
                            {activeGroup.label} courses
                          </p>
                          {activeGroup.courses.map((course) => {
                            const Icon = course.icon;
                            return (
                              <button
                                key={course.href}
                                type="button"
                                className="ln-dropdown-item ln-dropdown-item--sub"
                                style={{ "--lang-accent": course.accent }}
                                onClick={() => handleNav(course.href)}
                              >
                                <div className="ln-dropdown-icon">
                                  <Icon size={15} />
                                </div>
                                <div className="ln-dropdown-text">
                                  <span className="ln-dropdown-name">
                                    {course.title}
                                  </span>
                                  <span className="ln-dropdown-sub">
                                    {course.tag}
                                  </span>
                                </div>
                                <ArrowRight
                                  size={13}
                                  className="ln-dropdown-arrow"
                                />
                              </button>
                            );
                          })}
                          <button
                            type="button"
                            className="ln-course-group-all"
                            style={{ "--stack-accent": activeGroup.accent }}
                            onClick={() => handleNav(activeGroup.languagePath)}
                          >
                            All {activeGroup.label} courses
                            <ArrowRight size={13} />
                          </button>
                        </div>
                      ) : null}
                    </div>
                  </div>
                )}
              </div>

              <div className="ln-dropdown-wrap" ref={langRef}>
                <button
                  className={`landing-nav-link ln-dropdown-trigger${langOpen ? " ln-dropdown-trigger--open" : ""}`}
                  onClick={() => {
                    setLangOpen((o) => !o);
                    setCoursesOpen(false);
                  }}
                  aria-expanded={langOpen}
                >
                  Languages
                  <ChevronDown size={13} className="ln-chevron" />
                </button>

                {langOpen && (
                  <div className="ln-dropdown ln-dropdown--languages">
                    <p className="ln-dropdown-label">Pick a Language</p>
                    {languages.length === 0 ? (
                      <p className="ln-dropdown-empty">Loading…</p>
                    ) : (
                      <div className="ln-lang-grid">
                        {languages.map((lang) => (
                          <button
                            key={lang}
                            className="ln-lang-item"
                            onClick={() =>
                              handleNav(`/language/${encodeURIComponent(lang)}`)
                            }
                          >
                            <span className="ln-lang-name">{lang}</span>
                            <ArrowRight size={11} className="ln-lang-arrow" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </nav>

            <div className="landing-navbar-actions">
              <ThemeSettingsMenu
                theme={theme}
                onThemeChange={onThemeChange}
                buttonClassName="landing-theme-settings-btn"
                panelClassName="landing-theme-settings-panel"
              />
              <a href="#get-started" className="landing-btn-primary">
                Start Learning
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {mobileOpen ? (
        <button
          type="button"
          className="landing-mobile-backdrop"
          aria-label="Close menu"
          onClick={closeMobile}
        />
      ) : null}

      <aside
        className={`landing-mobile-drawer${mobileOpen ? " landing-mobile-drawer--open" : ""}`}
        aria-hidden={!mobileOpen}
      >
        <div className="landing-mobile-drawer-head">
          <span className="landing-mobile-drawer-title">Menu</span>
          <button
            type="button"
            className="landing-mobile-drawer-close"
            aria-label="Close menu"
            onClick={closeMobile}
          >
            <X size={18} />
          </button>
        </div>

        <nav className="landing-mobile-nav">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              type="button"
              className="landing-mobile-nav-link"
              onClick={() => handleNav(link.href)}
            >
              {link.label}
            </button>
          ))}

          <button
            type="button"
            className="landing-mobile-nav-link landing-mobile-nav-link--accordion"
            aria-expanded={mobileCoursesOpen}
            onClick={() => setMobileCoursesOpen((o) => !o)}
          >
            Courses
            <ChevronDown
              size={16}
              className={`landing-mobile-chevron${mobileCoursesOpen ? " landing-mobile-chevron--open" : ""}`}
            />
          </button>
          {mobileCoursesOpen ? (
            <div className="landing-mobile-subnav landing-mobile-subnav--grouped">
              {COURSE_GROUPS.map((group) => {
                const expanded = mobileExpandedGroup === group.id;
                return (
                  <div key={group.id} className="landing-mobile-course-group">
                    <button
                      type="button"
                      className="landing-mobile-course-group-trigger"
                      style={{ "--stack-accent": group.accent }}
                      aria-expanded={expanded}
                      onClick={() =>
                        setMobileExpandedGroup(expanded ? null : group.id)
                      }
                    >
                      <span>{group.label}</span>
                      <span className="landing-mobile-course-group-meta">
                        {group.courses.length} courses
                        <ChevronDown
                          size={14}
                          className={`landing-mobile-chevron${
                            expanded ? " landing-mobile-chevron--open" : ""
                          }`}
                        />
                      </span>
                    </button>
                    {expanded ? (
                      <div className="landing-mobile-course-group-items">
                        {group.courses.map((course) => {
                          const Icon = course.icon;
                          return (
                            <button
                              key={course.href}
                              type="button"
                              className="landing-mobile-subnav-link"
                              style={{ "--lang-accent": course.accent }}
                              onClick={() => handleNav(course.href)}
                            >
                              <Icon size={15} />
                              {course.title}
                            </button>
                          );
                        })}
                        <button
                          type="button"
                          className="landing-mobile-course-group-all"
                          onClick={() => handleNav(group.languagePath)}
                        >
                          All {group.label} courses →
                        </button>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          ) : null}

          <button
            type="button"
            className="landing-mobile-nav-link landing-mobile-nav-link--accordion"
            aria-expanded={mobileLangOpen}
            onClick={() => setMobileLangOpen((o) => !o)}
          >
            Languages
            <ChevronDown
              size={16}
              className={`landing-mobile-chevron${mobileLangOpen ? " landing-mobile-chevron--open" : ""}`}
            />
          </button>
          {mobileLangOpen ? (
            <div className="landing-mobile-subnav landing-mobile-subnav--grid">
              {languages.length === 0 ? (
                <p className="ln-dropdown-empty">Loading…</p>
              ) : (
                languages.map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    className="landing-mobile-subnav-link"
                    onClick={() =>
                      handleNav(`/language/${encodeURIComponent(lang)}`)
                    }
                  >
                    {lang}
                  </button>
                ))
              )}
            </div>
          ) : null}

          <button
            type="button"
            className="landing-mobile-cta"
            onClick={() => handleNav("#get-started")}
          >
            Start Learning
            <ArrowRight size={16} />
          </button>
        </nav>
      </aside>
    </>
  );
}
