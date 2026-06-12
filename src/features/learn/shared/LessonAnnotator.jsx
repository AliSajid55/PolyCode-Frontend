import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Eraser, MousePointer2, Pencil, Trash2, Type, Zap } from "lucide-react";
import {
  DEFAULT_LASER_COLOR,
  DEFAULT_PENCIL_COLOR,
  getPencilCursor,
  loadAnnotationPrefs,
  MAIN_COLOR_PRESETS,
  saveAnnotationPrefs,
  TOOL_CURSORS,
} from "./annotationCursors";

const TOOLS = {
  POINTER: "pointer",
  PENCIL: "pencil",
  LASER: "laser",
  TEXT: "text",
  ERASER: "eraser",
};

const STROKE_WIDTH = 3;
const ERASER_RADIUS = 14;

function loadAnnotations(storageKey) {
  if (!storageKey) return { strokes: [], labels: [] };
  try {
    const raw = localStorage.getItem(`polycode_annotations_${storageKey}`);
    if (!raw) return { strokes: [], labels: [] };
    const parsed = JSON.parse(raw);
    return {
      strokes: Array.isArray(parsed.strokes) ? parsed.strokes : [],
      labels: Array.isArray(parsed.labels) ? parsed.labels : [],
    };
  } catch {
    return { strokes: [], labels: [] };
  }
}

function saveAnnotations(storageKey, data) {
  if (!storageKey) return;
  localStorage.setItem(
    `polycode_annotations_${storageKey}`,
    JSON.stringify(data),
  );
}

function getPoint(event, stage) {
  const rect = stage.getBoundingClientRect();
  const clientX = event.touches?.[0]?.clientX ?? event.clientX;
  const clientY = event.touches?.[0]?.clientY ?? event.clientY;
  return {
    x: clientX - rect.left + stage.scrollLeft,
    y: clientY - rect.top + stage.scrollTop,
  };
}

function drawStroke(ctx, stroke) {
  if (!stroke.points?.length) return;
  ctx.strokeStyle = stroke.color || DEFAULT_PENCIL_COLOR;
  ctx.lineWidth = stroke.width || STROKE_WIDTH;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(stroke.points[0][0], stroke.points[0][1]);
  stroke.points.slice(1).forEach(([x, y]) => ctx.lineTo(x, y));
  ctx.stroke();
}

function distanceToSegment(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  if (dx === 0 && dy === 0) {
    return Math.hypot(px - x1, py - y1);
  }
  const t = Math.max(
    0,
    Math.min(1, ((px - x1) * dx + (py - y1) * dy) / (dx * dx + dy * dy)),
  );
  return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
}

function strokeNearPoint(stroke, point, radius) {
  const points = stroke.points || [];
  for (let i = 1; i < points.length; i += 1) {
    const [x1, y1] = points[i - 1];
    const [x2, y2] = points[i];
    if (distanceToSegment(point.x, point.y, x1, y1, x2, y2) <= radius) {
      return true;
    }
  }
  return false;
}

function normalizeHex(color = "") {
  return color.trim().toLowerCase();
}

function ColorPicker({ label, value, onChange }) {
  const paletteInputRef = useRef(null);
  const isCustomColor = !MAIN_COLOR_PRESETS.some(
    (preset) => normalizeHex(preset) === normalizeHex(value),
  );

  return (
    <div className="lesson-annotator-color-picker" aria-label={`${label} color`}>
      {MAIN_COLOR_PRESETS.map((color) => (
        <button
          key={color}
          type="button"
          className={`lesson-annotator-swatch${
            normalizeHex(value) === normalizeHex(color) ? " active" : ""
          }`}
          style={{ "--swatch": color }}
          onClick={() => onChange(color)}
          title={`${label}: ${color}`}
          aria-label={`${label} color ${color}`}
        />
      ))}
      <button
        type="button"
        className={`lesson-annotator-palette-btn${isCustomColor ? " active" : ""}`}
        style={isCustomColor ? { "--picked-color": value } : undefined}
        onClick={() => paletteInputRef.current?.click()}
        title="Choose any color"
        aria-label={`${label} custom color palette`}
      />
      <input
        ref={paletteInputRef}
        type="color"
        className="lesson-annotator-palette-input"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        tabIndex={-1}
        aria-hidden
      />
    </div>
  );
}

export default function LessonAnnotator({ storageKey, children }) {
  const stageRef = useRef(null);
  const contentRef = useRef(null);
  const canvasRef = useRef(null);
  const drawingRef = useRef(false);
  const currentStrokeRef = useRef(null);
  const prefsRef = useRef(loadAnnotationPrefs());

  const [tool, setTool] = useState(TOOLS.POINTER);
  const [pencilColor, setPencilColor] = useState(prefsRef.current.pencilColor);
  const [laserColor, setLaserColor] = useState(prefsRef.current.laserColor);
  const [strokes, setStrokes] = useState([]);
  const [labels, setLabels] = useState([]);
  const [textDraft, setTextDraft] = useState("");
  const [pendingTextPoint, setPendingTextPoint] = useState(null);
  const [laserPoint, setLaserPoint] = useState(null);

  const redrawCanvas = useCallback((nextStrokes) => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    if (!canvas || !stage) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    nextStrokes.forEach((stroke) => drawStroke(ctx, stroke));
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    const content = contentRef.current;
    if (!canvas || !stage || !content) return;

    const width = stage.clientWidth;
    const height = content.offsetHeight;
    const ratio = window.devicePixelRatio || 1;

    canvas.width = Math.max(1, Math.floor(width * ratio));
    canvas.height = Math.max(1, Math.floor(height * ratio));
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext("2d");
    if (ctx) ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    redrawCanvas(strokes);
  }, [redrawCanvas, strokes]);

  useEffect(() => {
    const saved = loadAnnotations(storageKey);
    setStrokes(saved.strokes);
    setLabels(saved.labels);
  }, [storageKey]);

  useEffect(() => {
    saveAnnotations(storageKey, { strokes, labels });
  }, [storageKey, strokes, labels]);

  useEffect(() => {
    saveAnnotationPrefs({ pencilColor, laserColor });
  }, [pencilColor, laserColor]);

  useEffect(() => {
    redrawCanvas(strokes);
  }, [strokes, redrawCanvas]);

  useEffect(() => {
    const stage = stageRef.current;
    const content = contentRef.current;
    if (!stage || !content) return undefined;

    resizeCanvas();
    const observer = new ResizeObserver(resizeCanvas);
    observer.observe(content);
    observer.observe(stage);

    return () => {
      observer.disconnect();
    };
  }, [resizeCanvas]);

  useEffect(() => {
    setPendingTextPoint(null);
    setTextDraft("");
    setLaserPoint(null);
  }, [tool, storageKey]);

  const eraseAt = useCallback((point) => {
    setStrokes((prev) =>
      prev.filter((stroke) => !strokeNearPoint(stroke, point, ERASER_RADIUS)),
    );
    setLabels((prev) =>
      prev.filter((label) => Math.hypot(label.x - point.x, label.y - point.y) > 24),
    );
  }, []);

  const isMarkupTool = tool !== TOOLS.POINTER;

  const stageCursor = useMemo(() => {
    if (tool === TOOLS.PENCIL) return getPencilCursor(pencilColor);
    if (tool === TOOLS.LASER) return undefined;
    if (tool === TOOLS.ERASER || tool === TOOLS.TEXT) return TOOL_CURSORS[tool];
    return undefined;
  }, [tool, pencilColor]);

  const handleStageMove = (event) => {
    if (event.target.closest(".lesson-annotator-text-input")) return;

    const stage = stageRef.current;
    if (!stage) return;

    if (tool === TOOLS.LASER) {
      setLaserPoint(getPoint(event, stage));
    }
  };

  const handleStageLeave = () => {
    setLaserPoint(null);
    handlePointerUp();
  };

  const handlePointerDown = (event) => {
    if (tool === TOOLS.POINTER) return;
    if (event.target.closest(".lesson-annotator-toolbar, .lesson-annotator-text-input")) {
      return;
    }

    const stage = stageRef.current;
    if (!stage) return;

    event.preventDefault();
    const point = getPoint(event, stage);

    if (tool === TOOLS.LASER) {
      setLaserPoint(point);
      return;
    }

    if (tool === TOOLS.PENCIL) {
      drawingRef.current = true;
      currentStrokeRef.current = {
        color: pencilColor,
        width: STROKE_WIDTH,
        points: [[point.x, point.y]],
      };
      return;
    }

    if (tool === TOOLS.ERASER) {
      eraseAt(point);
      drawingRef.current = true;
      return;
    }

    if (tool === TOOLS.TEXT) {
      setPendingTextPoint(point);
      setTextDraft("");
    }
  };

  const handlePointerMove = (event) => {
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    if (!stage) return;

    if (tool === TOOLS.LASER) {
      setLaserPoint(getPoint(event, stage));
      return;
    }

    if (!canvas || !drawingRef.current) return;

    event.preventDefault();
    const point = getPoint(event, stage);

    if (tool === TOOLS.PENCIL && currentStrokeRef.current) {
      currentStrokeRef.current.points.push([point.x, point.y]);
      const ctx = canvas.getContext("2d");
      const pts = currentStrokeRef.current.points;
      const [x1, y1] = pts[pts.length - 2];
      const [x2, y2] = pts[pts.length - 1];
      drawStroke(ctx, {
        color: pencilColor,
        width: STROKE_WIDTH,
        points: [
          [x1, y1],
          [x2, y2],
        ],
      });
      return;
    }

    if (tool === TOOLS.ERASER) {
      eraseAt(point);
    }
  };

  const handlePointerUp = () => {
    if (tool === TOOLS.PENCIL && currentStrokeRef.current) {
      const finished = currentStrokeRef.current;
      if (finished.points.length > 1) {
        setStrokes((prev) => [...prev, finished]);
      }
    }
    drawingRef.current = false;
    currentStrokeRef.current = null;
  };

  const handleAddLabel = () => {
    const text = textDraft.trim();
    if (!text || !pendingTextPoint) return;

    setLabels((prev) => [
      ...prev,
      {
        id: `${Date.now()}`,
        x: pendingTextPoint.x,
        y: pendingTextPoint.y,
        text,
      },
    ]);
    setPendingTextPoint(null);
    setTextDraft("");
  };

  const handleClearAll = () => {
    setStrokes([]);
    setLabels([]);
    setPendingTextPoint(null);
    setTextDraft("");
    setLaserPoint(null);
  };

  return (
    <div
      className={`lesson-annotator lesson-annotator--tool-${tool}${
        isMarkupTool ? " lesson-annotator--active" : ""
      }`}
    >
      <div className="lesson-annotator-toolbar" role="toolbar" aria-label="Lesson markup tools">
        <button
          type="button"
          className={tool === TOOLS.POINTER ? "active" : ""}
          onClick={() => setTool(TOOLS.POINTER)}
          title="Read and scroll normally"
        >
          <MousePointer2 size={16} aria-hidden />
          <span>Pointer</span>
        </button>
        <button
          type="button"
          className={tool === TOOLS.PENCIL ? "active" : ""}
          onClick={() => setTool(TOOLS.PENCIL)}
          title="Draw on the lesson"
        >
          <Pencil size={16} aria-hidden />
          <span>Pencil</span>
        </button>
        <button
          type="button"
          className={tool === TOOLS.LASER ? "active" : ""}
          onClick={() => setTool(TOOLS.LASER)}
          title="Laser pointer — highlight while presenting"
        >
          <Zap size={16} aria-hidden />
          <span>Laser</span>
        </button>
        <button
          type="button"
          className={tool === TOOLS.TEXT ? "active" : ""}
          onClick={() => setTool(TOOLS.TEXT)}
          title="Click to add a text note"
        >
          <Type size={16} aria-hidden />
          <span>Text</span>
        </button>
        <button
          type="button"
          className={tool === TOOLS.ERASER ? "active" : ""}
          onClick={() => setTool(TOOLS.ERASER)}
          title="Erase drawings and text notes"
        >
          <Eraser size={16} aria-hidden />
          <span>Eraser</span>
        </button>
        <button
          type="button"
          className="lesson-annotator-clear"
          onClick={handleClearAll}
          title="Clear all markup on this lesson"
        >
          <Trash2 size={16} aria-hidden />
          <span>Clear</span>
        </button>

        {tool === TOOLS.PENCIL ? (
          <ColorPicker
            label="Pencil"
            value={pencilColor}
            onChange={setPencilColor}
          />
        ) : null}

        {tool === TOOLS.LASER ? (
          <ColorPicker
            label="Laser"
            value={laserColor}
            onChange={setLaserColor}
          />
        ) : null}
      </div>

      <div
        ref={stageRef}
        className="lesson-annotator-stage"
        style={stageCursor ? { cursor: stageCursor } : undefined}
        onMouseDown={handlePointerDown}
        onMouseMove={(event) => {
          handleStageMove(event);
          handlePointerMove(event);
        }}
        onMouseUp={handlePointerUp}
        onMouseLeave={handleStageLeave}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
      >
        <div ref={contentRef} className="lesson-annotator-content">
          {children}
        </div>

        <canvas
          ref={canvasRef}
          className={`lesson-annotator-canvas${isMarkupTool && tool !== TOOLS.LASER ? " is-active" : ""}`}
          style={stageCursor ? { cursor: stageCursor } : undefined}
          aria-hidden
        />

        {tool === TOOLS.LASER && laserPoint ? (
          <div
            className="lesson-annotator-laser-dot"
            style={{
              left: laserPoint.x,
              top: laserPoint.y,
              "--laser-color": laserColor,
            }}
            aria-hidden
          />
        ) : null}

        <div className="lesson-annotator-labels" aria-hidden={!labels.length}>
          {labels.map((label) => (
            <div
              key={label.id}
              className="lesson-annotator-label"
              style={{ left: label.x, top: label.y }}
            >
              {label.text}
            </div>
          ))}
        </div>

        {pendingTextPoint ? (
          <div
            className="lesson-annotator-text-input"
            style={{ left: pendingTextPoint.x, top: pendingTextPoint.y }}
          >
            <input
              type="text"
              value={textDraft}
              onChange={(event) => setTextDraft(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") handleAddLabel();
                if (event.key === "Escape") setPendingTextPoint(null);
              }}
              placeholder="Type a note..."
              autoFocus
            />
            <button type="button" onClick={handleAddLabel}>
              Add
            </button>
            <button type="button" onClick={() => setPendingTextPoint(null)}>
              Cancel
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
