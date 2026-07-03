import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FluidTextMorphProps {
  wordPairs: [string, string][];
  className?: string;
  intervalMs?: number;
  animationProps?: {
    initialColor?: string;
    animateColor?: string;
    exitColor?: string;
  };
}

export function FluidTextMorph({
  wordPairs,
  className,
  intervalMs = 3300,
  animationProps = {},
}: FluidTextMorphProps) {
  const [index, setIndex] = useState(0);
  const [word, setWord] = useState(wordPairs[0]?.[0] ?? "");
  const reduceMotion = useMemo(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  const {
    initialColor = "var(--primary)",
    animateColor = "var(--foreground)",
    exitColor = "var(--accent-cold)",
  } = animationProps;

  useEffect(() => {
    if (wordPairs.length > 0) {
      setWord(wordPairs[index][0]);
    }
  }, [index, wordPairs]);

  useEffect(() => {
    if (reduceMotion || wordPairs.length <= 1) return undefined;
    const intervalId = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % wordPairs.length);
    }, intervalMs);
    return () => window.clearInterval(intervalId);
  }, [intervalMs, reduceMotion, wordPairs.length]);

  if (wordPairs.length === 0) return null;

  const handleHover = () => setWord(wordPairs[index][1]);
  const handleHoverEnd = () => setWord(wordPairs[index][0]);
  const handleClick = () => setIndex((prev) => (prev + 1) % wordPairs.length);

  return (
    <div
      className={cn(
        "relative flex cursor-pointer items-center justify-center text-6xl font-black sm:text-8xl",
        className,
      )}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") handleClick();
      }}
      aria-label={word}
    >
      <AnimatePresence mode="popLayout">
        {word.split("").map((letter, i) => (
          <motion.span
            key={`${word}-${letter}-${i}`}
            layoutId={`fluid-letter-${i}`}
            initial={{ opacity: 0, y: 36, scale: 0.72, rotateX: -72, filter: "blur(12px)", color: initialColor }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
              filter: "blur(0px)",
              color: animateColor,
              transition: {
                type: "spring",
                damping: 18,
                stiffness: 170,
                mass: 0.82,
                delay: i * 0.028,
              },
            }}
            exit={{
              opacity: 0,
              y: -24,
              scale: 0.76,
              rotateX: 62,
              filter: "blur(10px)",
              color: exitColor,
              transition: {
                duration: 0.28,
                ease: [0.16, 1, 0.3, 1],
                delay: (word.length - 1 - i) * 0.018,
              },
            }}
            className="relative"
          >
            {letter === " " ? "\u00a0" : letter}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
