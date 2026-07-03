import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useIntersection } from "@/hooks/use-intersection";

type ImageParticleFieldProps = {
  src?: string;
  className?: string;
  density?: number;
  opacity?: number;
};

type Particle = {
  x: number;
  y: number;
  tx: number;
  ty: number;
  color: string;
  size: number;
  drift: number;
};

export default function ImageParticleField({
  src,
  className,
  density = 7,
  opacity = 0.44,
}: ImageParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const frameRef = useRef<number | null>(null);
  const isIntersecting = useIntersection(canvasRef);
  const isIntersectingRef = useRef(isIntersecting);
  const renderRef = useRef<() => void>(null);

  useEffect(() => {
    isIntersectingRef.current = isIntersecting;
    if (isIntersecting && renderRef.current) {
      renderRef.current();
    }
  }, [isIntersecting]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !src) return undefined;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return undefined;

    const image = new Image();
    image.src = src;
    image.crossOrigin = "anonymous";

    let disposed = false;
    let dpr = 1;
    let canvasWidth = 0;
    let canvasHeight = 0;
    let running = false;
    let canvasRect: DOMRect | null = null;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const buildParticles = () => {
      if (!image.naturalWidth || !image.naturalHeight) return;

      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvasWidth = Math.max(1, Math.floor(rect.width));
      canvasHeight = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(canvasWidth * dpr);
      canvas.height = Math.floor(canvasHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const sample = document.createElement("canvas");
      const sampleCtx = sample.getContext("2d", { willReadFrequently: true });
      if (!sampleCtx) return;

      sample.width = canvasWidth;
      sample.height = canvasHeight;

      const scale = Math.max(canvasWidth / image.naturalWidth, canvasHeight / image.naturalHeight);
      const drawWidth = image.naturalWidth * scale;
      const drawHeight = image.naturalHeight * scale;
      const dx = (canvasWidth - drawWidth) / 2;
      const dy = (canvasHeight - drawHeight) / 2;

      sampleCtx.drawImage(image, dx, dy, drawWidth, drawHeight);
      const data = sampleCtx.getImageData(0, 0, canvasWidth, canvasHeight).data;
      const step = Math.max(density, Math.round(canvasWidth < 700 ? density + 4 : density));
      const next: Particle[] = [];

      for (let y = step / 2; y < canvasHeight; y += step) {
        for (let x = step / 2; x < canvasWidth; x += step) {
          const index = (Math.floor(y) * canvasWidth + Math.floor(x)) * 4;
          const r = data[index];
          const g = data[index + 1];
          const b = data[index + 2];
          const brightness = (r + g + b) / 3;
          if (brightness < 15) continue;
          if (Math.random() > (canvasWidth < 700 ? 0.48 : 0.68)) continue;

          next.push({
            x: x + (Math.random() - 0.5) * 24,
            y: y + (Math.random() - 0.5) * 24,
            tx: x,
            ty: y,
            color: `rgba(${r}, ${g}, ${b}, ${opacity})`,
            size: Math.max(1.05, Math.min(2.8, (255 - brightness) / 82 + Math.random() * 0.9)),
            drift: Math.random() * Math.PI * 2,
          });
        }
      }

      particlesRef.current = next;
    };

    const render = (time = 0) => {
      if (disposed) return;
      if (!isIntersectingRef.current) {
        running = false;
        return;
      }
      running = true;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.globalCompositeOperation = "lighter";

      const mouse = mouseRef.current;
      for (const particle of particlesRef.current) {
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        const force = mouse.active && dist < 150 ? (150 - dist) / 150 : 0;
        const angle = Math.atan2(dy, dx);
        const wave = reduce ? 0 : Math.sin(time * 0.001 + particle.drift) * 1.8;
        const targetX = particle.tx + Math.cos(particle.drift) * wave + Math.cos(angle) * force * 42;
        const targetY = particle.ty + Math.sin(particle.drift) * wave + Math.sin(angle) * force * 42;

        particle.x += (targetX - particle.x) * (reduce ? 1 : 0.075);
        particle.y += (targetY - particle.y) * (reduce ? 1 : 0.075);

        ctx.beginPath();
        ctx.fillStyle = particle.color;
        ctx.arc(particle.x, particle.y, particle.size * (1 + force * 0.9), 0, Math.PI * 2);
        ctx.fill();
      }

      frameRef.current = requestAnimationFrame(render);
    };

    const startLoop = () => {
      if (!running) {
        render();
      }
    };
    renderRef.current = startLoop;

    const onPointerMove = (event: PointerEvent) => {
      if (!canvasRect) {
        canvasRect = canvas.getBoundingClientRect();
      }
      mouseRef.current.x = event.clientX - canvasRect.left;
      mouseRef.current.y = event.clientY - canvasRect.top;
      mouseRef.current.active = true;
    };

    const onPointerLeave = () => {
      mouseRef.current.active = false;
      canvasRect = null;
    };

    const onResize = () => {
      canvasRect = null;
      buildParticles();
    };

    image.onload = () => {
      if (disposed) return;
      buildParticles();
      startLoop();
    };

    window.addEventListener("resize", onResize);
    canvas.addEventListener("pointermove", onPointerMove, { passive: true });
    canvas.addEventListener("pointerleave", onPointerLeave, { passive: true });

    return () => {
      disposed = true;
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      renderRef.current = null;
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [density, opacity, src]);

  if (!src) return null;

  return <canvas ref={canvasRef} className={cn("image-particle-field", className)} aria-hidden="true" />;
}
