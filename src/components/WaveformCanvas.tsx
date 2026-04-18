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

    let visible = true;
    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    // Two low, slow carriers. A quiet line, mostly sitting still.
    const carriers = [
      { freq: 0.0036, amp: 0.55, phase: 0, speed: 0.00022 },
      { freq: 0.0091, amp: 0.28, phase: 2.1, speed: 0.00038 },
    ];

    let lastT = 0;
    const draw = (t: number) => {
      if (!visible || t - lastT < 33) {
        raf = requestAnimationFrame(draw);
        return;
      }
      lastT = t;

      ctx.clearRect(0, 0, width, height);

      const baseY = height * 0.72;
      const amplitude = Math.min(height * 0.06, 40);

      ctx.beginPath();
      ctx.strokeStyle = "rgba(201, 168, 118, 0.55)";
      ctx.lineWidth = 1;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      for (let x = 0; x <= width; x += 2) {
        let y = 0;
        for (const c of carriers) {
          const phase = c.phase + (reduceMotion ? 0 : t * c.speed);
          y += Math.sin(x * c.freq + phase) * c.amp;
        }
        const norm = x / width;
        const env = Math.sin(Math.PI * norm) ** 1.2;
        const yPx = baseY + y * amplitude * env;
        if (x === 0) ctx.moveTo(x, yPx);
        else ctx.lineTo(x, yPx);
      }
      ctx.stroke();

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        aria-hidden="true"
      />
    </div>
  );
}
