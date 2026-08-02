"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface TextRollerItem {
  text: string;
  color?: string;
}

export interface AnimatedTextRollerProps {
  prefix?: string;
  items?: TextRollerItem[];
  intervalMs?: number;
  className?: string;
}

const defaultItems: TextRollerItem[] = [
  { text: "AI BOTS.", color: "text-[var(--accent-gold)]" },
  { text: "MOBILE APPS.", color: "text-sky-400" },
  { text: "3D WEBSITES.", color: "text-amber-300" },
  { text: "OFFLINE AI.", color: "text-emerald-400" },
  { text: "AUTOMATION.", color: "text-orange-400" },
];

const AnimatedTextRoller = ({
  prefix,
  items = defaultItems,
  intervalMs = 2200,
  className,
}: AnimatedTextRollerProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [items.length, intervalMs]);

  return (
    <div className={cn("flex items-center gap-2 flex-wrap my-1", className)}>
      {prefix && (
        <span className="text-xl sm:text-3xl md:text-5xl font-black text-white tracking-tight leading-none">
          {prefix}
        </span>
      )}
      <div className="overflow-hidden h-[1.3em] relative flex items-center max-w-full text-left font-mono text-[clamp(1.8rem,5vw,4.2rem)] leading-none">
        <div
          className="transition-all duration-700 ease-in-out flex flex-col justify-start w-full"
          style={{ transform: `translateY(-${index * 100}%)` }}
        >
          {items.map((g, i) => (
            <div
              key={i}
              className="h-[1.3em] flex items-center justify-start whitespace-nowrap shrink-0"
            >
              <span
                className={cn(
                  "font-black uppercase tracking-tight leading-none transition-opacity duration-500",
                  g.color || "text-[var(--accent-gold)]",
                  index === i ? "opacity-100 scale-100" : "opacity-20 scale-95"
                )}
              >
                {g.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedTextRoller;
