import { useState, useEffect, ReactNode, useMemo } from "react"
import { motion, AnimatePresence, Transition } from "framer-motion"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

type HeadingData = {
  id: string
  text: string
  level: number
  element: HTMLElement
}

const islandTransition: Transition = {
  type: "tween",
  ease: [0.22, 1, 0.36, 1],
  duration: 0.5,
}

function CircleProgress({ percentage }: { percentage: number }) {
  const size = 24
  const strokeWidth = 2.5
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference

  return (
    <svg width={size} height={size} className="shrink-0 -rotate-90">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="var(--muted)" strokeWidth={strokeWidth} />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="var(--foreground)"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        strokeLinecap="round"
      />
    </svg>
  )
}

type DynamicIslandTOCProps = {
  children?: ReactNode
  selector?: string
}

export function DynamicIslandTOC({
  children,
  selector = "article h1, article h2, article h3, article h4, .prose h1, .prose h2, .prose h3, .prose h4, [data-toc]",
}: DynamicIslandTOCProps) {
  const [headings, setHeadings] = useState<HeadingData[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isCompact, setIsCompact] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 520px)")
    const update = () => setIsCompact(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    const getHeadings = () => {
      const elements = Array.from(document.querySelectorAll(selector)) as HTMLElement[]
      const validHeadings = elements
        .filter((el) => !el.hasAttribute("data-toc-ignore"))
        .map((el, index) => {
          if (!el.id) {
            const generatedId = el.textContent?.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "") || `toc-heading-${index}`
            el.id = generatedId
          }

          const depthAttr = el.getAttribute("data-toc-depth")
          let level = 2
          if (depthAttr) {
            level = parseInt(depthAttr, 10)
          } else {
            const tagName = el.tagName.toUpperCase()
            if (tagName.startsWith("H") && tagName.length === 2) level = parseInt(tagName[1], 10)
          }

          const text = el.getAttribute("data-toc-title") || el.textContent || "Section"
          return { id: el.id, text, level, element: el }
        })

      validHeadings.sort((a, b) => (a.element.compareDocumentPosition(b.element) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1))
      setHeadings(validHeadings)
    }

    const timer = setTimeout(getHeadings, 100)
    return () => clearTimeout(timer)
  }, [selector])

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? Math.min(100, Math.max(0, (window.scrollY / total) * 100)) : 0)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (headings.length === 0) return undefined

    const visibleHeadings = new Set<string>()

    const observerOptions = {
      rootMargin: "-120px 0px -80% 0px",
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleHeadings.add(entry.target.id)
        } else {
          visibleHeadings.delete(entry.target.id)
        }
      })

      let currentActiveId: string | null = null
      for (const h of headings) {
        if (visibleHeadings.has(h.id)) {
          currentActiveId = h.id
        }
      }

      if (currentActiveId) {
        setActiveId(currentActiveId)
      } else if (headings.length > 0) {
        setActiveId(headings[0].id)
      }
    }, observerOptions)

    headings.forEach((h) => {
      observer.observe(h.element)
    })

    return () => {
      observer.disconnect()
    }
  }, [headings])

  const activeHeading = headings.find((h) => h.id === activeId)
  const minLevel = useMemo(() => (headings.length === 0 ? 1 : Math.min(...headings.map((h) => h.level))), [headings])
  const collapsedWidth = isCompact ? "min(320px, calc(100vw - 48px))" : 280
  const expandedWidth = isCompact ? "calc(100vw - 28px)" : 340

  return (
    <>
      {children}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={islandTransition}
            className="fixed inset-0 z-[9998] bg-black/20 backdrop-blur-[4px]"
            onClick={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="dynamic-island-toc fixed bottom-[30px] left-1/2 z-[9999] flex -translate-x-1/2 flex-col items-center"
      >
        <motion.div
          onClick={() => {
            if (!isExpanded) setIsExpanded(true)
          }}
          initial={false}
          animate={{
            width: isExpanded ? expandedWidth : collapsedWidth,
            height: isExpanded ? (isCompact ? 360 : 400) : isCompact ? 48 : 52,
            borderRadius: isExpanded ? 24 : 26,
          }}
          transition={islandTransition}
          style={{ cursor: isExpanded ? "default" : "pointer" }}
          className="relative overflow-hidden border border-foreground/10 bg-background text-foreground shadow-2xl"
        >
          <motion.div
            initial={false}
            animate={{
              opacity: isExpanded ? 0 : 1,
              scale: isExpanded ? 0.95 : 1,
              filter: isExpanded ? "blur(4px)" : "blur(0px)",
            }}
            transition={{ ...islandTransition, delay: isExpanded ? 0 : 0.1 }}
            className={cn("absolute inset-0 flex items-center gap-3 px-4 sm:gap-4 sm:px-5", isExpanded && "pointer-events-none")}
          >
            <div className="h-2 w-2 shrink-0 rounded-full bg-foreground" />
            <div className="relative flex h-full flex-1 items-center overflow-hidden text-left">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={activeId || "empty"}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="block w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium text-foreground"
                >
                  {activeHeading?.text || "Contents"}
                </motion.span>
              </AnimatePresence>
            </div>
            <CircleProgress percentage={progress} />
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: isExpanded ? 1 : 0, scale: isExpanded ? 1 : 1.05 }}
            transition={{ ...islandTransition, delay: isExpanded ? 0.1 : 0 }}
            className={cn("absolute inset-0 flex flex-col", !isExpanded && "pointer-events-none")}
          >
            <div className="flex shrink-0 items-center justify-between px-6 pb-3 pt-5">
              <span className="text-[11px] font-semibold tracking-[0.08em] text-muted-foreground">TABLE OF CONTENTS</span>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsExpanded(false)
                }}
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Close table of contents"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto overscroll-contain px-3 pb-4" data-lenis-prevent="true">
              <div className="flex flex-col gap-0.5">
                {headings.map((h) => {
                  const isActive = activeId === h.id
                  const isHovered = hoveredId === h.id
                  const indentLevel = Math.max(0, h.level - minLevel)
                  const paddingLeft = indentLevel * 14 + 12

                  return (
                    <button
                      key={h.id}
                      onMouseEnter={() => setHoveredId(h.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onClick={(e) => {
                        e.stopPropagation()
                        const yOffset = -80
                        const y = h.element.getBoundingClientRect().top + window.scrollY + yOffset
                        window.scrollTo({ top: y, behavior: "smooth" })
                        setIsExpanded(false)
                      }}
                      style={{ paddingLeft: `${paddingLeft}px` }}
                      className={cn(
                        "group flex w-full shrink-0 cursor-pointer items-center rounded-lg border-none py-2 pr-3 text-left text-sm transition-all duration-300 ease-out",
                        isActive && "bg-foreground/10 font-medium text-foreground",
                        !isActive && isHovered && "bg-foreground/5 text-foreground/85",
                        !isActive && !isHovered && "bg-transparent text-foreground/45",
                      )}
                    >
                      <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap transition-transform duration-300 group-hover:translate-x-1">
                        {h.text}
                      </span>
                      <motion.div
                        initial={false}
                        animate={{ scale: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="ml-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground"
                      />
                    </button>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}
