/** Marker printed by server-side Python when matplotlib figures are captured. */
export const PLOT_STDOUT_MARKER = "__POLYCODE_PLOTS__";

export function codeUsesMatplotlib(source = "") {
  return /(?:^|\n)\s*(?:import|from)\s+matplotlib\b/m.test(source) ||
    /\bmatplotlib\.pyplot\b/.test(source) ||
    /\bplt\.(?:show|plot|scatter|bar|hist|pie|subplots|figure|savefig|annotate)\s*\(/.test(
      source,
    );
}

export function parsePlotMarkerFromStdout(stdout = "") {
  const markerIdx = stdout.indexOf(PLOT_STDOUT_MARKER);
  if (markerIdx === -1) {
    return { stdout, plotImages: [] };
  }

  const afterMarker = stdout.slice(markerIdx + PLOT_STDOUT_MARKER.length);
  const endIdx = afterMarker.indexOf("\n__");
  const jsonChunk =
    endIdx === -1 ? afterMarker.trim() : afterMarker.slice(0, endIdx).trim();

  let plotImages = [];
  try {
    const parsed = JSON.parse(jsonChunk);
    if (Array.isArray(parsed)) {
      plotImages = parsed.filter((item) => typeof item === "string" && item.length);
    }
  } catch {
    plotImages = [];
  }

  const cleanStdout = stdout.slice(0, markerIdx).trimEnd();
  return { stdout: cleanStdout, plotImages };
}

export function mergePythonRunResult(result = {}) {
  const plotImages = Array.isArray(result.plotImages) ? result.plotImages : [];
  const parsed = parsePlotMarkerFromStdout(result.stdout || "");
  const mergedPlots = plotImages.length ? plotImages : parsed.plotImages;

  return {
    ...result,
    stdout: parsed.stdout,
    plotImages: mergedPlots,
  };
}

export function buildPlotPreviewHtml(plotImages = []) {
  if (!plotImages.length) return null;

  const imgs = plotImages
    .map(
      (b64, index) =>
        `<figure class="polycode-plot-figure"><img src="data:image/png;base64,${b64}" alt="Matplotlib chart ${index + 1}" /></figure>`,
    )
    .join("");

  return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
    body { margin: 0; padding: 12px; background: #0d1117; display: flex; flex-direction: column; gap: 12px; align-items: center; }
    .polycode-plot-figure { margin: 0; max-width: 100%; }
    img { max-width: 100%; height: auto; border-radius: 8px; background: #fff; }
  </style></head><body>${imgs}</body></html>`;
}
