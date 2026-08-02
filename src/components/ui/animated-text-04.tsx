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
  { text: "3D WEBSITES.", color: "text-[var(--accent-gold)]" },
  { text: "AI BOTS.", color: "text-sky-400" },
  { text: "MOBILE APPS.", color: "text-amber-300" },
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

  const stepPercent = items.length > 0 ? 100 / items.length : 0;

  return (
    <div className={cn("w-full max-w-full overflow-hidden my-2", className)}>
      <div className="flex items-center gap-2 flex-wrap w-full max-w-full">
        {prefix && (
          <span className="text-lg sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-none shrink-0">
            {prefix}
          </span>
        )}
        <div className="overflow-hidden h-[1.3em] relative w-full max-w-full text-left font-mono text-[clamp(1.4rem,3.8vw,3.2rem)] leading-none">
          <div
            className="transition-transform duration-600 ease-out flex flex-col justify-start w-full"
            style={{ transform: `translateY(-${index * stepPercent}%)` }}
          >
            {items.map((g, i) => (
              <div
                key={i}
                className="h-[1.3em] flex items-center justify-start whitespace-nowrap shrink-0 overflow-hidden"
              >
                <span
                  className={cn(
                    "font-black uppercase tracking-tight leading-none transition-opacity duration-300",
                    g.color || "text-[var(--accent-gold)]",
                    index === i ? "opacity-100" : "opacity-20"
                  )}
                >
                  {g.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTextRoller;
