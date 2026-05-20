import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const resizeObserverLoopMessages = [
  "ResizeObserver loop completed with undelivered notifications.",
  "ResizeObserver loop limit exceeded",
];

window.addEventListener("error", (event) => {
  if (resizeObserverLoopMessages.includes(event.message)) {
    event.stopImmediatePropagation();
  }
});

window.addEventListener("unhandledrejection", (event) => {
  const message = event.reason?.message || String(event.reason || "");
  if (resizeObserverLoopMessages.includes(message)) {
    event.preventDefault();
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
