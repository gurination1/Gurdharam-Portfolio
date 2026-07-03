"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface FlipTextProps {
  word?: string;
  className?: string;
  showReplay?: boolean;
}

export default function FlipTextReveal({
  word = "DIGITAL REALITY",
  className = "",
  showReplay = true,
}: FlipTextProps) {
  const [key, setKey] = useState(0);
  const words = word.split(" ");
  let charIndex = 0;

  return (
    <div className={cn("flip-container", className)}>
      <div key={key} className="text-wrapper">
        <h2 className="title" aria-label={word}>
          {words.map((part, wordIndex) => (
            <span className="word-chunk" key={`${key}-${part}-${wordIndex}`}>
              {part.split("").map((char) => {
                const currentIndex = charIndex;
                charIndex += 1;
                return (
                  <span
                    key={`${key}-${part}-${wordIndex}-${currentIndex}`}
                    className="char"
                    style={{ "--index": currentIndex } as React.CSSProperties}
                  >
                    {char}
                  </span>
                );
              })}
            </span>
          ))}
        </h2>
      </div>

      {showReplay ? (
        <button className="replay-button" onClick={() => setKey((prev) => prev + 1)}>
          <span className="btn-text">Replay Action</span>
        </button>
      ) : null}

      <style>{`
        .flip-container {
          --bg-color: #09090b;
          --text-color: #ffffff;
          --btn-bg: #27272a;
          --btn-text: #ffffff;
          --btn-border: #3f3f46;
          --btn-hover: #52525b;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: clamp(2rem, 7vw, 4rem) clamp(1rem, 4vw, 2rem);
          background-color: var(--bg-color);
          color: var(--text-color);
          border-radius: 16px;
          overflow: hidden;
          min-height: 320px;
          width: 100%;
          transition: background-color 0.4s ease, color 0.4s ease;
          perspective: 800px;
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.22);
        }

        .flip-container .title {
          font-size: clamp(2.6rem, 8.5vw, 6.7rem);
          font-weight: 900;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          column-gap: 0.22em;
          row-gap: 0.08em;
          justify-content: center;
          line-height: 0.9;
          text-transform: uppercase;
          letter-spacing: 0;
          transform-style: preserve-3d;
          text-align: center;
        }

        .flip-container .word-chunk {
          display: inline-flex;
          white-space: nowrap;
        }

        .flip-container .char {
          display: inline-block;
          color: var(--text-color);
          transform-origin: bottom center;
          opacity: 0;
          transform: rotateX(-90deg) translateY(20px);
          animation: flip-up 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          animation-delay: calc(0.055s * var(--index));
          will-change: transform, opacity;
        }

        .flip-container .replay-button {
          margin-top: 2.5rem;
          padding: 0.8rem 2rem;
          background-color: var(--btn-bg);
          color: var(--btn-text);
          border: 1px solid var(--btn-border);
          border-radius: 99px;
          font-weight: 600;
          font-size: 0.78rem;
          cursor: pointer;
          transition: all 0.2s ease;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .flip-container .replay-button:hover {
          background-color: var(--btn-hover);
          transform: scale(1.05);
        }

        .flip-container .replay-button:active {
          transform: scale(0.95);
        }

        @keyframes flip-up {
          0% { opacity: 0; transform: rotateX(-90deg) translateY(40px); }
          100% { opacity: 1; transform: rotateX(0deg) translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .flip-container .char {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
