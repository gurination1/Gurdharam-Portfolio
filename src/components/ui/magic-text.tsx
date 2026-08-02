"use client" 

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export interface MagicTextProps {
  text: string
  highlightWords?: string[]
  className?: string
}

interface WordProps {
  children: string
  progress: any
  range: number[]
  isHighlighted?: boolean
}

const Word: React.FC<WordProps> = ({ children, progress, range, isHighlighted }) => {
  const opacity = useTransform(progress, range, [0.2, 1])

  return (
    <span className="relative mr-2 mb-1 inline-block text-xl md:text-2xl lg:text-3xl leading-relaxed">
      <span className="absolute select-none opacity-20 text-slate-500">{children}</span>
      <motion.span
        style={{ opacity }}
        className={isHighlighted ? "copy-mark" : "text-white font-medium"}
      >
        {children}
      </motion.span>
    </span>
  )
}

export const MagicText: React.FC<MagicTextProps> = ({
  text,
  highlightWords = ["things", "that", "think", "think:"],
  className,
}) => {
  const container = useRef<HTMLParagraphElement>(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.85", "start 0.25"],
  })

  const words = text.split(" ")

  return (
    <p ref={container} className={`flex flex-wrap items-baseline leading-relaxed py-2 ${className || ""}`}>
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length
        const cleanWord = word.toLowerCase()
        const isHighlighted = highlightWords.some((h) => cleanWord.includes(h.toLowerCase()))

        return (
          <Word key={`${word}-${i}`} progress={scrollYProgress} range={[start, end]} isHighlighted={isHighlighted}>
            {word}
          </Word>
        )
      })}
    </p>
  )
}

export default MagicText
