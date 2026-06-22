export const DEFAULT_THEME_ID = "dark";

export const THEMES = [
  {
    id: "dark",
    label: "Dark",
    description: "Lemon yellow + cyan",
    icon: "🌙",
    swatch: "#ffe566",
    bg: "#03050a",
    bgLanding: "#07090f",
    appClass: "",
  },
  {
    id: "light",
    label: "Light",
    description: "Clean and bright",
    icon: "☀️",
    swatch: "#f4f6fa",
    bg: "#f8f9fb",
    bgLanding: "#f4f6fa",
    appClass: "theme-light",
  },
  {
    id: "classic",
    label: "Classic",
    description: "Amber terminal + green",
    icon: "📟",
    swatch: "#ffb000",
    bg: "#0c0a06",
    bgLanding: "#0c0a06",
    appClass: "theme-classic",
  },
  {
    id: "midnight",
    label: "Midnight",
    description: "Deep indigo glow",
    icon: "🌌",
    swatch: "#1a2240",
    bg: "#0a0e1a",
    bgLanding: "#0a0e1a",
    appClass: "theme-midnight",
  },
  {
    id: "ocean",
    label: "Ocean",
    description: "Teal aqua depths",
    icon: "🌊",
    swatch: "#14b8a6",
    bg: "#041016",
    bgLanding: "#041016",
    appClass: "theme-ocean",
  },
  {
    id: "slate",
    label: "Slate",
    description: "Cool steel gray",
    icon: "🪨",
    swatch: "#64748b",
    bg: "#111318",
    bgLanding: "#111318",
    appClass: "theme-slate",
  },
];

const THEME_MAP = Object.fromEntries(THEMES.map((theme) => [theme.id, theme]));

export function getThemeById(themeId) {
  return THEME_MAP[themeId] || THEME_MAP[DEFAULT_THEME_ID];
}

export function normalizeThemeId(themeId) {
  return THEME_MAP[themeId] ? themeId : DEFAULT_THEME_ID;
}

export function isLightTheme(themeId) {
  return themeId === "light";
}

export function getAppThemeClass(themeId) {
  return getThemeById(themeId).appClass || "";
}

export function applyDocumentTheme(themeId, { landing = false } = {}) {
  const theme = getThemeById(normalizeThemeId(themeId));
  const html = document.documentElement;
  const body = document.body;

  html.setAttribute("data-theme", theme.id);
  body.classList.toggle("light-theme", isLightTheme(theme.id));

  const bg = landing ? theme.bgLanding : theme.bg;
  html.style.backgroundColor = bg;
  body.style.backgroundColor = bg;
}

export function clearDocumentThemeInlineStyles() {
  document.documentElement.style.backgroundColor = "";
  document.body.style.backgroundColor = "";
}
