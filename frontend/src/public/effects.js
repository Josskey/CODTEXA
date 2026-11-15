/**
 * CODTEXA — CODTEXA DIGITAL ATMOSPHERE
 * React / TSX:
 *   import { useEffect } from "react";
 *   import "./qr-effects.css";
 *   import { initQrEffects } from "./qr-effects.js";
 *   useEffect(() => initQrEffects(), []);
 */

export function initQrEffects(options = {}) {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return () => {};
  }

  document.querySelector(".qrfx-overlay")?.remove();

  const settings = {
    pixelCount: options.pixelCount ?? 34,
    maxPixelSize: options.maxPixelSize ?? 18,
    reveal: options.reveal ?? true,
    hover: options.hover ?? true,
    ...options,
  };

  const reducedMotion = window.matchMedia?.(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const overlay = document.createElement("div");
  overlay.className = "qrfx-overlay";
  overlay.setAttribute("aria-hidden", "true");

  const canvas = document.createElement("canvas");
  canvas.className = "qrfx-canvas";
  overlay.appendChild(canvas);

  const scanline = document.createElement("span");
  scanline.className = "qrfx-scanline";
  overlay.appendChild(scanline);

 
  if (!reducedMotion) {
    for (let i = 0; i < settings.pixelCount; i += 1) {
      const pixel = document.createElement("span");
      pixel.className = "qrfx-pixel";

      const x = Math.random() < 0.5
        ? Math.random() * 14
        : 86 + Math.random() * 14;

      pixel.style.setProperty("--qrfx-x", `${x}%`);
      pixel.style.setProperty("--qrfx-y", `${Math.random() * 100}%`);
      pixel.style.setProperty(
        "--qrfx-size",
        `${4 + Math.random() * settings.maxPixelSize}px`
      );
      pixel.style.setProperty(
        "--qrfx-duration",
        `${4 + Math.random() * 7}s`
      );
      pixel.style.setProperty("--qrfx-delay", `${Math.random() * 8}s`);
      pixel.style.setProperty(
        "--qrfx-opacity",
        `${0.08 + Math.random() * 0.22}`
      );
      overlay.appendChild(pixel);
    }
  }

  document.body.appendChild(overlay);
document.documentElement.classList.add(
  "qr-noise-enabled"
);



  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let rafId = 0;
  let active = true;

  function drawFinder(x, y, cell) {
    if (!ctx) return;
    ctx.strokeStyle = "rgba(235,242,255,.10)";
    ctx.lineWidth = 1;
    ctx.strokeRect(x, y, cell * 5, cell * 5);
    ctx.strokeRect(x + cell, y + cell, cell * 3, cell * 3);
    ctx.fillStyle = "rgba(235,242,255,.07)";
    ctx.fillRect(x + cell * 2, y + cell * 2, cell, cell);
  }
let rainLines = [];

function createRainLines() {
  rainLines = [];

  const count = width > 768 ? 600 : 300;

  for (let i = 0; i < count; i++) {
    rainLines.push({
      x: Math.random() * width,
      y: Math.random() * height,
      length: 40 + Math.random() * 260,
      speed: 0.03 + Math.random() * 0.15,
      alpha: 0.015 + Math.random() * 0.04,
      lineWidth: 1
    });
  }
}

  function drawDigitalRain() {
  if (!ctx) return;

  rainLines.forEach(line => {

    ctx.beginPath();

    ctx.strokeStyle =
      `rgba(255,255,255,${line.alpha})`;

    ctx.lineWidth = line.lineWidth;

    ctx.moveTo(
      line.x,
      line.y
    );

    ctx.lineTo(
      line.x,
      line.y + line.length
    );

    ctx.stroke();

    line.y += line.speed;

    if (line.y > height + line.length) {

      line.y = -line.length;

      line.x = Math.random() * width;

      line.length =
        40 + Math.random() * 260;

      line.alpha =
        0.015 + Math.random() * 0.04;

      line.speed =
        0.03 + Math.random() * 0.15;
    }
  });
}

  function drawGrid() {
    if (!ctx || !active) return;

    ctx.clearRect(0, 0, width, height);
    const cell = 9;
    const regions = [
      { x: 18, y: height * 0.18, cols: 8, rows: 10 },
      { x: width - 18 - cell * 8, y: height * 0.56, cols: 8, rows: 10 },
    ];

    regions.forEach((region, regionIndex) => {
      for (let row = 0; row < region.rows; row += 1) {
        for (let col = 0; col < region.cols; col += 1) {
          const value = (row * 13 + col * 7 + regionIndex * 11) % 5;
          if (value > 1) continue;
          ctx.fillStyle = value === 0
  ? "rgba(235,242,255,.14)"
  : "rgba(235,242,255,.08)";
          ctx.fillRect(
            region.x + col * cell,
            region.y + row * cell,
            cell - 1,
            cell - 1
          );
        }
      }
    });

    drawFinder(22, height * 0.18 + 104, 5);
drawFinder(width - 47, height * 0.56 - 58, 5);

drawDigitalRain();
}

  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
    createRainLines();
    drawGrid();
  }

  function animate() {
  if (!active || reducedMotion) {
    return;
  }

  drawGrid();

  rafId = window.requestAnimationFrame(
    animate
  );
}

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas, { passive: true });

  if (!reducedMotion) {
    rafId = window.requestAnimationFrame(animate);
    requestAnimationFrame(() => overlay.classList.add("qrfx-active"));
  } else {
    overlay.classList.add("qrfx-active");
  }

  const revealTargets = [];

if (settings.reveal) {

  const selectors = [
    "section h1",
    "section h2",
    "section h3",

    ".block-content",

    ".card-box",

    ".feature",

    ".audience-card",

    ".cta"
  ];

    document.querySelectorAll(selectors.join(",")).forEach((el) => {
      if (el.dataset.qrfxReveal === "true") return;
      el.dataset.qrfxReveal = "true";
      el.classList.add("qrfx-reveal");
      revealTargets.push(el);
    });
  }

  let observer;
  if ("IntersectionObserver" in window && revealTargets.length) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("qrfx-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach((el) => observer.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("qrfx-visible"));
  }

  const hoverTargets = [];
  if (settings.hover && !reducedMotion) {
    document.querySelectorAll(
  "a, button, [class*='card'], [class*='step'], .feature, .audience-card"
).forEach((el) => {
      if (el.closest(".qrfx-overlay")) return;
      el.classList.add("qrfx-hover-target");
      if (el.matches("a, button")) el.classList.add("qrfx-button");
      hoverTargets.push(el);
    });
  }

  return function cleanupQrEffects() {
    active = false;
    if (rafId) window.cancelAnimationFrame(rafId);
    window.removeEventListener("resize", resizeCanvas);
    observer?.disconnect();

    revealTargets.forEach((el) => {
      el.classList.remove("qrfx-reveal", "qrfx-visible");
      delete el.dataset.qrfxReveal;
    });

    hoverTargets.forEach((el) => {
      el.classList.remove("qrfx-hover-target", "qrfx-button");
    });

    overlay.remove();
    document.documentElement.classList.remove(
  "qr-noise-enabled"
);
  };
}
