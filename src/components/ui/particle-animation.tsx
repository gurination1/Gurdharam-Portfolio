import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import { useIntersection } from "@/hooks/use-intersection";

interface Mouse {
  x: number;
  y: number;
  smoothX: number;
  smoothY: number;
  diff: number;
}

class Particle {
  size: number;
  x: number;
  y: number;
  color: string;
  el: SVGCircleElement;

  constructor(x: number, y: number, size: number, particles: Particle[], color: string) {
    this.size = size;
    this.x = x;
    this.y = y;
    this.color = color;
    this.el = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    this.el.setAttribute("cx", this.x.toString());
    this.el.setAttribute("cy", this.y.toString());
    this.el.setAttribute("r", this.size.toString());
    this.el.setAttribute("fill", this.color);

    const tl = gsap.timeline();
    tl.to(this, { size: this.size * 2, ease: "power1.inOut", duration: 1.2 });
    tl.to(this, { size: 0, ease: "power4.in", duration: 2.6 }, 1.1);
    tl.call(() => this.kill(particles));
  }

  kill(particles: Particle[]) {
    const index = particles.indexOf(this);
    if (index > -1) particles.splice(index, 1);
    this.el.remove();
  }

  render() {
    this.el.setAttribute("cy", this.y.toString());
    this.el.setAttribute("cx", this.x.toString());
    this.el.setAttribute("r", this.size.toString());
  }
}

interface ParticleAnimationProps {
  className?: string;
  color?: string;
}

export default function ParticleAnimation({
  className,
  color = "rgba(212,168,83,0.82)",
}: ParticleAnimationProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const wrapperRef = useRef<SVGGElement>(null);
  const mouseRef = useRef<Mouse>({ x: 0, y: 0, smoothX: 0, smoothY: 0, diff: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animationIdRef = useRef<number | null>(null);
  const isIntersecting = useIntersection(svgRef);
  const isIntersectingRef = useRef(isIntersecting);
  const renderRef = useRef<() => void>(null);

  useEffect(() => {
    isIntersectingRef.current = isIntersecting;
    if (isIntersecting && renderRef.current) {
      renderRef.current();
    }
  }, [isIntersecting]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;

    const mouse = mouseRef.current;
    const particles = particlesRef.current;
    let running = false;

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onResize = () => {
      if (!svgRef.current) return;
      svgRef.current.style.width = `${window.innerWidth}px`;
      svgRef.current.style.height = `${window.innerHeight}px`;
    };

    const emitParticle = () => {
      if (mouse.diff <= 0.01) return;
      const particle = new Particle(mouse.smoothX, mouse.smoothY, Math.max(1, mouse.diff * 0.16), particles, color);
      particles.push(particle);
      wrapperRef.current?.prepend(particle.el);
    };

    const render = () => {
      if (!isIntersectingRef.current) {
        running = false;
        return;
      }
      running = true;

      mouse.smoothX += (mouse.x - mouse.smoothX) * 0.1;
      mouse.smoothY += (mouse.y - mouse.smoothY) * 0.1;
      mouse.diff = Math.hypot(mouse.x - mouse.smoothX, mouse.y - mouse.smoothY);
      emitParticle();
      particles.forEach((particle) => particle.render());
      animationIdRef.current = requestAnimationFrame(render);
    };

    const startLoop = () => {
      if (!running) {
        render();
      }
    };
    renderRef.current = startLoop;

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("resize", onResize);
    onResize();
    startLoop();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderRef.current = null;
      if (animationIdRef.current !== null) cancelAnimationFrame(animationIdRef.current);
      particles.splice(0).forEach((particle) => particle.el.remove());
    };
  }, [color]);

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      width="100"
      height="100"
      className={cn("particle-svg", className)}
      aria-hidden="true"
    >
      <filter id="gooey-particles">
        <feGaussianBlur in="SourceGraphic" stdDeviation="18" />
        <feColorMatrix
          type="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -7"
          result="goo"
        />
      </filter>
      <g ref={wrapperRef} filter="url(#gooey-particles)" />
    </svg>
  );
}
