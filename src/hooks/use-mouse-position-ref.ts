import { RefObject, useEffect, useRef } from "react";

export const useMousePositionRef = (
  containerRef?: RefObject<HTMLElement | SVGElement | null>
) => {
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let rect: DOMRect | null = null;

    const updateRect = () => {
      if (containerRef && containerRef.current) {
        rect = containerRef.current.getBoundingClientRect();
      }
    };

    const updatePosition = (x: number, y: number) => {
      if (containerRef && containerRef.current) {
        if (!rect) {
          rect = containerRef.current.getBoundingClientRect();
        }
        const relativeX = x - rect.left;
        const relativeY = y - rect.top;
        positionRef.current = { x: relativeX, y: relativeY };
      } else {
        positionRef.current = { x, y };
      }
    };

    const handleMouseMove = (ev: MouseEvent) => {
      updatePosition(ev.clientX, ev.clientY);
    };

    const handleTouchMove = (ev: TouchEvent) => {
      const touch = ev.touches[0];
      updatePosition(touch.clientX, touch.clientY);
    };

    const handleScrollOrResize = () => {
      rect = null;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("resize", handleScrollOrResize, { passive: true });
    window.addEventListener("scroll", handleScrollOrResize, { passive: true });

    if (containerRef && containerRef.current) {
      containerRef.current.addEventListener("mouseenter", updateRect, { passive: true });
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleScrollOrResize);
      window.removeEventListener("scroll", handleScrollOrResize);
      if (containerRef && containerRef.current) {
        containerRef.current.removeEventListener("mouseenter", updateRect);
      }
    };
  }, [containerRef]);

  return positionRef;
};
