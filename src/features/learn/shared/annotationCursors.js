export const DEFAULT_PENCIL_COLOR = "#ffe566";
export const DEFAULT_LASER_COLOR = "#ff3344";

function svgCursor(svg, hotspotX, hotspotY, fallback = "crosshair") {
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}") ${hotspotX} ${hotspotY}, ${fallback}`;
}

export function getPencilCursor(color = DEFAULT_PENCIL_COLOR) {
  return svgCursor(
    `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
      <g transform="translate(11 11) rotate(-42) translate(-11 -11)">
        <rect x="9.6" y="7.8" width="2.8" height="5.6" rx="0.35" fill="#eccc68" stroke="#8a6528" stroke-width="0.45"/>
        <path fill="${color}" stroke="#1c1c24" stroke-width="0.4" d="M9.6 13.4h2.8l-1.4 3.6z"/>
        <path fill="#181820" d="M10.3 15.4h1.4l-.7 1.6z"/>
      </g>
    </svg>`,
    3,
    19,
  );
}

export const PENCIL_CURSOR = getPencilCursor();

export const ERASER_CURSOR = svgCursor(
  `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
    <g transform="translate(11 12) rotate(-22) translate(-11 -12)">
      <rect x="8.2" y="9.8" width="8.8" height="4.2" rx="0.7" fill="#f2b8c6" stroke="#7a4554" stroke-width="0.55"/>
      <rect x="8.2" y="9.8" width="2.2" height="4.2" rx="0.4" fill="#d890a0" opacity="0.55"/>
      <rect x="8.2" y="13.4" width="8.8" height="1.1" rx="0.35" fill="#6a94c8" stroke="#3d5f88" stroke-width="0.4"/>
    </g>
  </svg>`,
  12,
  13,
);

export function getLaserCursor(color = DEFAULT_LASER_COLOR) {
  return svgCursor(
    `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="3" fill="${color}" opacity="0.9"/>
      <circle cx="10" cy="10" r="5.5" fill="none" stroke="${color}" stroke-width="0.8" opacity="0.35"/>
    </svg>`,
    10,
    10,
  );
}

export const LASER_CURSOR = getLaserCursor();

export const TEXT_CURSOR = "text";

export const TOOL_CURSORS = {
  pencil: PENCIL_CURSOR,
  eraser: ERASER_CURSOR,
  laser: LASER_CURSOR,
  text: TEXT_CURSOR,
};

/** Quick-pick colors shown as circles in the toolbar. */
export const MAIN_COLOR_PRESETS = [
  "#ffe566",
  "#ff4757",
  "#3794ff",
  "#4ade80",
];

const PREFS_KEY = "polycode_annotation_prefs";

export function loadAnnotationPrefs() {
  try {
    const raw = localStorage.getItem(PREFS_KEY);
    if (!raw) {
      return {
        pencilColor: DEFAULT_PENCIL_COLOR,
        laserColor: DEFAULT_LASER_COLOR,
      };
    }
    const parsed = JSON.parse(raw);
    return {
      pencilColor: parsed.pencilColor || DEFAULT_PENCIL_COLOR,
      laserColor: parsed.laserColor || DEFAULT_LASER_COLOR,
    };
  } catch {
    return {
      pencilColor: DEFAULT_PENCIL_COLOR,
      laserColor: DEFAULT_LASER_COLOR,
    };
  }
}

export function saveAnnotationPrefs(prefs) {
  localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
}
