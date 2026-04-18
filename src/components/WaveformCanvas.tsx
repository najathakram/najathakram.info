"use client";

import { useEffect, useRef } from "react";

export function WaveformCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let dpr = Math.max(1, window.devicePixelRatio || 1);
    let width = 0;
    let height = 0;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.max(1, window.devicePixelRatio || 1);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Three superposed sinusoids — a quiet nod to multi-tone DSP.
    const carriers = [
      { freq: 0.0042, amp: 0.34, phase: 0, speed: 0.00045, weight: 1.0 },
      { freq: 0.0098, amp: 0.18, phase: 1.7, speed: 0.00075, weight: 0.7 },
      { freq: 0.022, amp: 0.07, phase: 3.1, speed: 0.0011, weight: 0.45 },
    ];

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);

      const midY = height * 0.5;
      const baseAmp = Math.min(height * 0.42, 220);

      // Faint reference axis.
      ctx.strokeStyle = "rgba(244, 241, 234, 0.05)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, midY);
      ctx.lineTo(width, midY);
      ctx.stroke();

      // Composite waveform pass.
      const passes = [
        { offset: 0, alpha: 0.85, lineWidth: 1.4, color: "rgba(201, 168, 118, 1)" },
        { offset: 6, alpha: 0.22, lineWidth: 1.1, color: "rgba(201, 168, 118, 0.55)" },
        { offset: -6, alpha: 0.18, lineWidth: 1.1, color: "rgba(120, 160, 220, 0.5)" },
      ];

      passes.forEach((pass) => {
        ctx.beginPath();
        ctx.globalAlpha = pass.alpha;
        ctx.strokeStyle = pass.color;
        ctx.lineWidth = pass.lineWidth;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";

        for (let x = 0; x <= width; x += 2) {
          let y = 0;
          for (const c of carriers) {
            const phase = c.phase + (reduceMotion ? 0 : t * c.speed);
            y += Math.sin(x * c.freq + phase) * c.amp * c.weight;
          }
          // Envelope — taper toward edges for an editorial feel.
          const norm = x / width;
          const env = Math.sin(Math.PI * norm) ** 1.4;
          const yPx = midY + y * baseAmp * env + pass.offset;
          if (x === 0) ctx.moveTo(x, yPx);
          else ctx.lineTo(x, yPx);
        }
        ctx.stroke();
      });

      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-90"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--background)_0%,transparent_18%,transparent_82%,var(--background)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--background)_0%,transparent_8%,transparent_92%,var(--background)_100%)]" />
    </div>
  );
}
