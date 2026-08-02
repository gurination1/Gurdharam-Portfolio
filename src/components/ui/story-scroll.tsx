"use client"

import React, { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

function cx(...parts: Array<string | undefined | false | null>): string {
  return parts.filter(Boolean).join(" ")
}

export interface FlowSectionProps {
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
  "aria-label"?: string
}

export const FlowSection: React.FC<FlowSectionProps> = ({ className, style = {}, children, "aria-label": ariaLabel }) => (
  <section 
    data-flow-section 
    aria-label={ariaLabel} 
    className={cx("sticky top-0 min-h-screen w-full overflow-hidden flex flex-col justify-center", className)}
  >
    <div
      data-flow-inner
      className={cx(
        "flow-art-container relative flex min-h-screen w-full flex-col justify-between gap-6 px-[5vw] pb-[6vw] pt-[clamp(3rem,8vw,5vw)] will-change-transform translate-z-0",
      )}
      style={{ transformOrigin: "center center", ...style }}
    >
      {children}
    </div>
  </section>
)

export interface FlowArtProps {
  children: React.ReactNode
  className?: string
  "aria-label"?: string
}

const childCount = (children: React.ReactNode) => React.Children.count(children)

const FlowArt: React.FC<FlowArtProps> = ({ children, className, "aria-label": ariaLabel = "Story scroll" }) => {
  const containerRef = useRef<HTMLElement>(null)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReducedMotion(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  useGSAP(
    () => {
      if (!containerRef.current || reducedMotion) return

      const sections = Array.from(containerRef.current.querySelectorAll<HTMLElement>("[data-flow-section]"))
      if (sections.length === 0) return

      const isMobile = window.matchMedia("(max-width: 768px)").matches
      const triggers: ScrollTrigger[] = []

      sections.forEach((section, i) => {
        gsap.set(section, { zIndex: (i + 1) * 10 })
        const inner = section.querySelector<HTMLElement>(".flow-art-container")
        const heading = section.querySelector<HTMLElement>("h2")
        const eyebrow = section.querySelector<HTMLElement>("p:first-child")

        if (!inner) return

        // Scale down previous section as next section covers it
        if (i < sections.length - 1) {
          const nextSection = sections[i + 1]
          const scaleTween = gsap.to(inner, {
            scale: isMobile ? 0.96 : 0.92,
            opacity: 0.35,
            filter: isMobile ? "none" : "blur(4px)",
            ease: "none",
            scrollTrigger: {
              trigger: nextSection,
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          })
          if (scaleTween.scrollTrigger) triggers.push(scaleTween.scrollTrigger)
        }

        // Headline entrance
        if (heading) {
          const headingTween = gsap.fromTo(
            heading,
            { y: 30, opacity: 0.8 },
            {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "top 30%",
                scrub: 0.5,
              },
            }
          )
          if (headingTween.scrollTrigger) triggers.push(headingTween.scrollTrigger)
        }

        // Eyebrow parallax
        if (eyebrow) {
          const eyebrowTween = gsap.fromTo(
            eyebrow,
            { x: -15 },
            {
              x: 15,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          )
          if (eyebrowTween.scrollTrigger) triggers.push(eyebrowTween.scrollTrigger)
        }
      })

      ScrollTrigger.refresh()
      return () => {
        triggers.forEach((t) => t.kill())
      }
    },
    { scope: containerRef, dependencies: [childCount(children), reducedMotion] },
  )

  return (
    <main ref={containerRef} aria-label={ariaLabel} className={cx("relative w-full overflow-x-hidden", className)}>
      {children}
    </main>
  )
}

export default FlowArt
