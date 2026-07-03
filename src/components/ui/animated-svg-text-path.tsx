import React, { useEffect, useId, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

type AnimatedTextPathProps = {
  text?: string;
  duration?: number;
  reversed?: boolean;
  fontSize?: string;
  letterSpacing?: string;
  svgPath?: string;
  viewBox?: string;
  rotation?: number;
  className?: string;
};

const AnimatedTextPath: React.FC<AnimatedTextPathProps> = ({
  text = "looping SVG text path",
  duration = 21,
  reversed = false,
  fontSize = "17px",
  letterSpacing = "0px",
  svgPath = "M227 120C227 142.091 178.871 160 119.5 160C60.1294 160 12 142.091 12 120C12 97.9086 60.1294 80 119.5 80C178.871 80 227 97.9086 227 120Z",
  viewBox = "0 0 240 240",
  rotation = -40,
  className = "",
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);
  const pathId = useId().replace(/:/g, "");

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return undefined;

    animationRef.current?.kill();
    const textPaths = svg.querySelectorAll("textPath");
    gsap.set(textPaths, {
      fontSize: /iPhone/.test(navigator.userAgent) ? "19px" : fontSize,
      letterSpacing,
      fill: "currentColor",
    });

    const props = { duration, ease: "none", repeat: -1 };
    const tl = gsap.timeline();
    animationRef.current = tl;

    tl.fromTo(
      textPaths[0],
      { attr: { startOffset: "0%" } },
      { attr: { startOffset: reversed ? "-100%" : "100%" }, ...props },
      0,
    );
    tl.fromTo(
      textPaths[1],
      { attr: { startOffset: reversed ? "100%" : "-100%" } },
      { attr: { startOffset: "0%" }, ...props },
      0,
    );

    return () => {
      animationRef.current?.kill();
    };
  }, [duration, fontSize, letterSpacing, pathId, reversed, text]);

  return (
    <div className={cn("animated-text-path", className)}>
      <svg
        ref={svgRef}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <path id={pathId} d={svgPath} fill="none" stroke="none" />
        <text>
          <textPath href={`#${pathId}`} startOffset="0%">
            {text}
          </textPath>
          <textPath href={`#${pathId}`} startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export { AnimatedTextPath };
