"use client";

import React, { useEffect, useRef, useState } from "react";

interface CursorProps {
  size?: number;
  excludeSelector?: string;
}

export const Cursor: React.FC<CursorProps> = ({ size = 60, excludeSelector }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const previousPos = useRef({ x: -size, y: -size }); // start off-screen
  const targetPos = useRef({ x: -size, y: -size });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const shouldExclude = (target: EventTarget | null) => {
      if (!excludeSelector || !(target instanceof Element)) return false;
      return Boolean(target.closest(excludeSelector));
    };

    const isLooping = { current: true };

    const animate = () => {
      if (!cursorRef.current) return;

      const currentX = previousPos.current.x;
      const currentY = previousPos.current.y;
      const targetX = targetPos.current.x - size / 2;
      const targetY = targetPos.current.y - size / 2;
      const deltaX = (targetX - currentX) * 0.2;
      const deltaY = (targetY - currentY) * 0.2;

      const newX = currentX + deltaX;
      const newY = currentY + deltaY;

      previousPos.current = { x: newX, y: newY };
      cursorRef.current.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;

      if (Math.abs(deltaX) < 0.05 && Math.abs(deltaY) < 0.05) {
        isLooping.current = false;
        return;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    let isVisible = false;
    let isNativeActive = false;

    const showCursor = () => {
      if (isVisible) return;
      isVisible = true;
      setVisible(true);
      document.body.classList.add("inverted-cursor-active");
      document.body.classList.remove("native-cursor-active");
      isNativeActive = false;
      document.body.style.cursor = "none";
      document.documentElement.style.cursor = "none";
    };

    const hideCursor = () => {
      if (!isVisible) return;
      isVisible = false;
      setVisible(false);
      document.body.classList.remove("inverted-cursor-active");
      document.body.style.cursor = "";
      document.documentElement.style.cursor = "";
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (shouldExclude(e.target)) {
        hideCursor();
        if (!isNativeActive) {
          isNativeActive = true;
          document.body.classList.add("native-cursor-active");
        }
        return;
      }

      targetPos.current = { x: e.clientX, y: e.clientY };
      showCursor();

      if (!isLooping.current) {
        isLooping.current = true;
        requestRef.current = requestAnimationFrame(animate);
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      if (shouldExclude(e.target)) return;
      showCursor();
    };

    const handleMouseLeave = () => {
      hideCursor();
      if (isNativeActive) {
        isNativeActive = false;
        document.body.classList.remove("native-cursor-active");
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.body.classList.remove("inverted-cursor-active");
      document.body.classList.remove("native-cursor-active");
      document.body.style.cursor = "";
      document.documentElement.style.cursor = "";
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [excludeSelector, size]);

  return (
    <div
      ref={cursorRef}
      className="inverted-cursor fixed left-0 top-0 pointer-events-none rounded-full bg-white mix-blend-difference transition-opacity duration-300 will-change-transform"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: size,
        height: size,
        zIndex: 2147483647,
        backgroundColor: "#ffffff",
        borderRadius: "9999px",
        mixBlendMode: "difference",
        opacity: visible ? 1 : 0,
        pointerEvents: "none",
        transform: `translate3d(${-size}px, ${-size}px, 0)`,
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
      aria-hidden="true"
    />
  );
};

export default Cursor;
