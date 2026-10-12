"use client";

import { useEffect, useRef } from "react";

type Ember = {
  x: number;
  y: number;
  vy: number;
  sway: number;
  swaySpeed: number;
  size: number;
  alpha: number;
  color: string;
};

const COLORS = ["#FF5C1A", "#FF8A00", "#FFB020", "#FFC53D"];

export function Embers() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let embers: Ember[] = [];
    let w = 0;
    let h = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      const count = w < 640 ? 18 : 36;
      embers = Array.from({ length: count }, () => spawn(true));
    };

    const spawn = (anywhere: boolean): Ember => ({
      x: Math.random() * w,
      y: anywhere ? Math.random() * h : h + 10,
      vy: 0.25 + Math.random() * 0.6,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: 0.008 + Math.random() * 0.02,
      size: 1 + Math.random() * 2.4,
      alpha: 0.15 + Math.random() * 0.45,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    });

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < embers.length; i++) {
        const e = embers[i];
        e.y -= e.vy;
        e.sway += e.swaySpeed;
        const dx = Math.sin(e.sway) * 0.4;
        ctx.globalAlpha = e.alpha;
        ctx.fillStyle = e.color;
        ctx.fillRect(e.x + dx, e.y, e.size, e.size);
        if (e.y < -10) embers[i] = spawn(false);
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1]"
    />
  );
}
