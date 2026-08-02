"use client" 

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export interface MagicTextProps {
  text: string
  className?: string
}

interface WordProps {
  children: string
  progress: any
  range: number[]
}

const getWordStyle = (word: string) => {
  const clean = word.replace(/[^a-zA-Z]/g, "")

  // 1. Name: Gold Display Font
  if (["Gurdharam", "Jeet", "Singh"].includes(clean)) {
    return {
      wrapper: "font-display font-extrabold text-[var(--accent-gold)] tracking-tight drop-shadow-[0_0_14px_rgba(212,168,83,0.4)]",
      ghost: "text-amber-900/40",
    }
  }

  // 2. Role: Monospace Tech Blue
  if (["AI", "Engineer", "Web", "Developer", "Punjab"].includes(clean)) {
    return {
      wrapper: "font-mono font-bold text-sky-400 tracking-wide",
      ghost: "text-sky-950/40",
    }
  }

  // 3. Signature Catchphrase: Serif Italic Gold Gradient
  if (["things", "that", "think", "think:"].includes(word.toLowerCase())) {
    return {
      wrapper: "font-serif italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 pr-1",
      ghost: "text-amber-900/30",
    }
  }

  // 4. Core Stack Assets: High-contrast Glowing White
  if (["autonomous", "bots", "bots,", "local", "video", "pipelines", "pipelines,", "practical", "apps"].includes(word.toLowerCase())) {
    return {
      wrapper: "font-sans font-bold text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.45)]",
      ghost: "text-slate-700/40",
    }
  }

  // Default Word Style
  return {
    wrapper: "font-sans text-slate-200 font-medium",
    ghost: "text-slate-600/30",
  }
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.18, 1])
  const style = getWordStyle(children)

  return (
    <span className="relative mr-2 mb-2.5 inline-block text-xl md:text-2xl lg:text-3xl leading-relaxed">
      <span className={`absolute select-none opacity-20 ${style.ghost}`}>{children}</span>
      <motion.span style={{ opacity }} className={style.wrapper}>
        {children}
      </motion.span>
    </span>
  )
}

export const MagicText: React.FC<MagicTextProps> = ({ text, className }) => {
  const container = useRef<HTMLParagraphElement>(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.88", "start 0.22"],
  })

  const words = text.split(" ")

  return (
    <p ref={container} className={`flex flex-wrap items-baseline leading-relaxed py-3 ${className || ""}`}>
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length

        return (
          <Word key={`${word}-${i}`} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  )
}

export default MagicText
