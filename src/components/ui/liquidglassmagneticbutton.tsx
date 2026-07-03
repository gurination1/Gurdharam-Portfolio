"use client"

import React, { useRef, useState, useCallback } from "react"

const MAGNETIC_DISTANCE = 0.55
const TILT_MAX = 10
const TRANSLATE_MAX = 8

interface SpringConfig {
  damping?: number
  stiffness?: number
  mass?: number
  precision?: number
}

class Spring {
  target: number
  current: number
  velocity: number
  damping: number
  stiffness: number
  mass: number
  precision: number
  private _raf: number | null = null
  private _callback: ((value: number) => void) | null = null

  constructor(target: number, config: SpringConfig = {}) {
    this.target = target
    this.current = target
    this.velocity = 0
    this.damping = config.damping ?? 12
    this.stiffness = config.stiffness ?? 180
    this.mass = config.mass ?? 1
    this.precision = config.precision ?? 0.01
  }

  set(value: number, callback: (value: number) => void) {
    this.target = value
    this._callback = callback
    if (!this._raf) this._tick()
  }

  private _tick() {
    this._raf = requestAnimationFrame(() => {
      const dt = 1 / 60
      const spring = -this.stiffness * (this.current - this.target)
      const damper = -this.damping * this.velocity
      const accel = (spring + damper) / this.mass
      this.velocity += accel * dt
      this.current += this.velocity * dt

      if (Math.abs(this.velocity) < this.precision && Math.abs(this.current - this.target) < this.precision) {
        this.current = this.target
        this.velocity = 0
        this._raf = null
        this._callback?.(this.current)
        return
      }

      this._callback?.(this.current)
      this._tick()
    })
  }
}

type LiquidGlassVariant = "default" | "purple" | "blue" | "pink" | "talk"
type LiquidGlassSize = "sm" | "md" | "lg"

interface LiquidGlassMagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: LiquidGlassVariant
  size?: LiquidGlassSize
  magneticDistance?: number
  breathe?: boolean
}

const variantStyles: Record<LiquidGlassVariant, React.CSSProperties> = {
  default: {},
  purple: { boxShadow: "0 0 0 1px rgba(180,140,255,0.12) inset, 0 8px 32px rgba(0,0,0,0.35), 0 0 50px rgba(140,80,220,0.1)" },
  blue: { boxShadow: "0 0 0 1px rgba(100,160,255,0.12) inset, 0 8px 32px rgba(0,0,0,0.35), 0 0 50px rgba(60,120,240,0.1)" },
  pink: { boxShadow: "0 0 0 1px rgba(255,120,180,0.12) inset, 0 8px 32px rgba(0,0,0,0.35), 0 0 50px rgba(220,60,140,0.1)" },
  talk: {
    color: "#07100b",
    background: "linear-gradient(135deg, rgba(74,222,128,0.96) 0%, rgba(232,192,112,0.98) 52%, rgba(91,143,212,0.92) 100%)",
    border: "1px solid rgba(232,192,112,0.72)",
    boxShadow: "0 0 0 1px rgba(255,255,255,0.18) inset, 0 14px 42px rgba(74,222,128,0.18), 0 0 72px rgba(232,192,112,0.28)",
  },
}

const sizeStyles: Record<LiquidGlassSize, React.CSSProperties> = {
  sm: { padding: "14px 34px", fontSize: "14px" },
  md: { padding: "18px 34px", fontSize: "14px" },
  lg: { padding: "22px 52px", fontSize: "15px" },
}

const baseButtonStyle: React.CSSProperties = {
  position: "relative",
  fontWeight: 600,
  textTransform: "uppercase",
  color: "transparent",
  background: "linear-gradient(145deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.025) 45%, rgba(255,255,255,0.065) 100%)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 64,
  cursor: "pointer",
  overflow: "hidden",
  backdropFilter: "blur(24px) saturate(1.9) brightness(1.05)",
  WebkitBackdropFilter: "blur(24px) saturate(1.9) brightness(1.05)",
  boxShadow: "0 0 0 1px rgba(255,255,255,0.04) inset, 0 8px 32px rgba(0,0,0,0.35), 0 0 60px rgba(120,80,220,0.06)",
  transition: "box-shadow 0.45s ease",
  transformStyle: "preserve-3d",
  willChange: "transform",
  outline: "none",
  fontFamily: "inherit",
  userSelect: "none",
  letterSpacing: 0,
}

function LiquidGlassMagneticButton({
  children,
  variant = "default",
  size = "md",
  magneticDistance = MAGNETIC_DISTANCE,
  style,
  ...props
}: LiquidGlassMagneticButtonProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)
  const springXRef = useRef(new Spring(0, { damping: 14, stiffness: 200 }))
  const springYRef = useRef(new Spring(0, { damping: 14, stiffness: 200 }))
  const [hovered, setHovered] = useState(false)
  const [hlPos, setHlPos] = useState({ x: "30%", y: "20%" })
  const [fieldPos, setFieldPos] = useState({ x: "50%", y: "50%" })
  const rectRef = useRef<DOMRect | null>(null)

  const applyTransform = useCallback(() => {
    const btn = btnRef.current
    const wrap = wrapRef.current
    if (!btn || !wrap) return
    if (!rectRef.current) {
      rectRef.current = wrap.getBoundingClientRect()
    }
    const rect = rectRef.current
    const tx = springXRef.current.current
    const ty = springYRef.current.current
    const tiltX = -(ty / ((rect.height * magneticDistance) / 2)) * TILT_MAX
    const tiltY = (tx / ((rect.width * magneticDistance) / 2)) * TILT_MAX
    const clampedTx = Math.max(-TRANSLATE_MAX, Math.min(TRANSLATE_MAX, tx * 0.6))
    const clampedTy = Math.max(-TRANSLATE_MAX, Math.min(TRANSLATE_MAX, ty * 0.6))
    btn.style.transform = `perspective(500px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translate3d(${clampedTx}px, ${clampedTy}px, 0)`
  }, [magneticDistance])

  const handleMouseEnter = useCallback(() => {
    setHovered(true)
    if (wrapRef.current) {
      rectRef.current = wrapRef.current.getBoundingClientRect()
    }
  }, [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const wrap = wrapRef.current
      if (!wrap) return
      if (!rectRef.current) {
        rectRef.current = wrap.getBoundingClientRect()
      }
      const rect = rectRef.current
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      springXRef.current.set(dx * magneticDistance, applyTransform)
      springYRef.current.set(dy * magneticDistance, applyTransform)
      const hx = ((e.clientX - rect.left) / rect.width) * 100
      const hy = ((e.clientY - rect.top) / rect.height) * 100
      setHlPos({ x: `${hx}%`, y: `${hy}%` })
      setFieldPos({ x: `${hx}%`, y: `${hy}%` })
    },
    [magneticDistance, applyTransform],
  )

  const handleMouseLeave = useCallback(() => {
    setHovered(false)
    rectRef.current = null
    springXRef.current.set(0, applyTransform)
    springYRef.current.set(0, applyTransform)
    setHlPos({ x: "30%", y: "20%" })
    setFieldPos({ x: "50%", y: "50%" })
  }, [applyTransform])

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const btn = btnRef.current
      if (!btn) return
      const ripple = document.createElement("div")
      const rect = btn.getBoundingClientRect()
      const rippleSize = Math.max(rect.width, rect.height)
      Object.assign(ripple.style, {
        position: "absolute",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(180,140,255,0.3) 0%, rgba(120,160,255,0.15) 35%, transparent 65%)",
        transform: "scale(0)",
        opacity: "0",
        pointerEvents: "none",
        width: `${rippleSize}px`,
        height: `${rippleSize}px`,
        left: `${e.clientX - rect.left - rippleSize / 2}px`,
        top: `${e.clientY - rect.top - rippleSize / 2}px`,
      })
      btn.appendChild(ripple)
      requestAnimationFrame(() => {
        ripple.style.transition = "transform 0.75s cubic-bezier(0.23,1,0.32,1), opacity 0.75s cubic-bezier(0.23,1,0.32,1)"
        ripple.style.transform = "scale(4.5)"
        ripple.style.opacity = "0"
      })
      setTimeout(() => ripple.remove(), 800)
      props.onClick?.(e)
    },
    [props],
  )

  const hoverShadow = hovered
    ? variant === "talk"
      ? "0 0 0 1px rgba(255,255,255,0.22) inset, 0 16px 48px rgba(74,222,128,0.24), 0 0 110px rgba(232,192,112,0.38)"
      : "0 0 0 1px rgba(255,255,255,0.07) inset, 0 10px 44px rgba(0,0,0,0.38), 0 0 90px rgba(140,100,255,0.14)"
    : undefined

  return (
    <div ref={wrapRef} style={{ position: "relative", zIndex: 10, display: "inline-block" }}>
      <div
        style={{
          position: "absolute",
          inset: -50,
          borderRadius: 100,
          background:
            variant === "talk"
              ? `radial-gradient(circle at ${fieldPos.x} ${fieldPos.y}, rgba(74,222,128,0.32) 0%, rgba(232,192,112,0.18) 30%, transparent 65%)`
              : `radial-gradient(circle at ${fieldPos.x} ${fieldPos.y}, rgba(140,100,255,0.25) 0%, rgba(80,140,255,0.12) 25%, transparent 65%)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.5s ease",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <button
        ref={btnRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
        style={{ ...baseButtonStyle, ...sizeStyles[size], ...variantStyles[variant], ...(hovered ? { boxShadow: hoverShadow } : {}), ...style }}
        {...props}
      >
        <div style={{ position: "absolute", inset: 0, borderRadius: "inherit", background: "linear-gradient(175deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 25%, transparent 50%, rgba(0,0,0,0.04) 100%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, borderRadius: "inherit", background: `radial-gradient(ellipse 120% 100% at ${hlPos.x} ${hlPos.y}, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 35%, transparent 65%)`, opacity: hovered ? 1 : 0.5, transition: "opacity 0.35s ease", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: "8%", right: "8%", height: 1, background: "linear-gradient(90deg, transparent, rgba(160,120,255,0.35) 30%, rgba(100,180,255,0.35) 70%, transparent)", pointerEvents: "none" }} />
        <span
          style={{
            position: "relative",
            zIndex: 2,
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: variant === "talk" ? "none" : "linear-gradient(135deg, #fff 0%, rgba(210,200,255,0.92) 100%)",
            WebkitBackgroundClip: variant === "talk" ? "initial" : "text",
            backgroundClip: variant === "talk" ? "initial" : "text",
            WebkitTextFillColor: variant === "talk" ? "#07100b" : "transparent",
            color: variant === "talk" ? "#07100b" : "#f8f6ee",
          }}
        >
          {children}
        </span>
      </button>
    </div>
  )
}

export default LiquidGlassMagneticButton
export { LiquidGlassMagneticButton }
export type { LiquidGlassMagneticButtonProps, LiquidGlassVariant, LiquidGlassSize }
