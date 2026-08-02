"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface TextRollerItem {
  text: string;
  color?: string;
  label?: string;
}

export interface AnimatedTextRollerProps {
  prefix?: string;
  items?: TextRollerItem[];
  intervalMs?: number;
  className?: string;
  textClassName?: string;
}

const defaultItems: TextRollerItem[] = [
  { text: "AI BOTS.", color: "text-[var(--accent-gold)]", label: "AUTOMATE" },
  { text: "MOBILE APPS.", color: "text-sky-400", label: "SHIP" },
  { text: "3D WEBSITES.", color: "text-amber-300", label: "LAUNCH" },
  { text: "OFFLINE AI.", color: "text-emerald-400", label: "DEPLOY" },
  { text: "AUTOMATION.", color: "text-orange-400", label: "SCALE" },
];

const AnimatedTextRoller = ({
  prefix,
  items = defaultItems,
  intervalMs = 2500,
  className,
  textClassName,
}: AnimatedTextRollerProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [items.length, intervalMs]);

  return (
    <div className={cn("flex items-center gap-2 sm:gap-4 flex-wrap", className)}>
      {prefix && (
        <span className={cn("text-2xl sm:text-4xl md:text-6xl font-black text-white tracking-tight", textClassName)}>
          {prefix}
        </span>
      )}
      <div className="overflow-hidden h-10 sm:h-14 md:h-20 text-center relative flex items-center">
        <div
          className="transition-transform duration-700 ease-in-out flex flex-col justify-start"
          style={{ transform: `translateY(-${index * 100}%)` }}
        >
          {items.map((g, i) => (
            <div
              key={i}
              className="h-10 sm:h-14 md:h-20 flex items-center justify-start gap-3 whitespace-nowrap"
            >
              <span
                className={cn(
                  "text-2xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight",
                  g.color || "text-[var(--accent-gold)]",
                  textClassName
                )}
              >
                {g.text}
              </span>
              {g.label && (
                <span className="text-xs sm:text-sm font-mono tracking-widest text-slate-400 border border-white/10 rounded px-2 py-0.5 uppercase hidden sm:inline-block">
                  [{g.label}]
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedTextRoller;
