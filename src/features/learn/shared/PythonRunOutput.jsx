import React from "react";

export default function PythonRunOutput({ stdout, plotImages = [], emptyHint }) {
  const hasPlots = plotImages.length > 0;
  const hasText = Boolean(stdout?.trim());

  if (!hasPlots && !hasText) {
    return (
      <pre className="oops-output-body">
        {emptyHint || "Output will appear here after you run the code."}
      </pre>
    );
  }

  return (
    <div className="oops-output-stack">
      {hasText ? <pre className="oops-output-body">{stdout}</pre> : null}
      {hasPlots ? (
        <div className="oops-plot-gallery" aria-label="Chart output">
          {plotImages.map((image, index) => (
            <figure className="oops-plot-frame" key={`plot-${index}`}>
              <img
                src={`data:image/png;base64,${image}`}
                alt={`Matplotlib chart ${index + 1}`}
              />
            </figure>
          ))}
        </div>
      ) : null}
    </div>
  );
}
