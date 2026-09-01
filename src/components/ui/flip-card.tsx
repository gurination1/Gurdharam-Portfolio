"use client"

import * as React from "react"
import { HTMLMotionProps, motion } from "motion/react"
import { cn } from "@/lib/utils"

const TRANSITION_CONFIG = {
  duration: 0.6,
  ease: [0.4, 0.2, 0.2, 1],
} as const

type FlipDirection = "horizontal" | "vertical"
interface FlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
  flipDirection?: FlipDirection
  initialFlipped?: boolean
  onFlip?: (isFlipped: boolean) => void
  disabled?: boolean
}
interface FlipCardContextValue {
  isFlipped: boolean
  flipDirection: FlipDirection
  disabled?: boolean
}

const FlipCardContext = React.createContext<FlipCardContextValue | undefined>(
  undefined
)
function useFlipCardContext() {
  const context = React.useContext(FlipCardContext)
  if (!context) {
    throw new Error("useFlipCardContext must be used within a FlipCard")
  }
  return context
}

const FlipCard = React.memo(
  React.forwardRef<HTMLDivElement, FlipCardProps>(
    (
      {
        className,
        flipDirection = "horizontal",
        initialFlipped = false,
        onFlip,
        disabled,
        ...props
      },
      ref
    ) => {
      const [isFlipped, setIsFlipped] = React.useState(initialFlipped)

      const handleMouseEnter = React.useCallback(() => {
        // Only trigger hover flip on devices with actual hover capability
        if (!disabled && window.matchMedia?.('(hover: hover)').matches) {
          setIsFlipped(true)
          onFlip?.(true)
        }
      }, [disabled, onFlip])

      const handleMouseLeave = React.useCallback(() => {
        if (!disabled && window.matchMedia?.('(hover: hover)').matches) {
          setIsFlipped(false)
          onFlip?.(false)
        }
      }, [disabled, onFlip])

      const handleClick = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!disabled) {
          setIsFlipped(prev => {
            const next = !prev
            onFlip?.(next)
            return next
          })
        }
      }, [disabled, onFlip])

      const handleKeyDown = React.useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
        if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          setIsFlipped(prev => {
            const next = !prev
            onFlip?.(next)
            return next
          })
        }
      }, [disabled, onFlip])

      const contextValue = React.useMemo(
        () => ({ isFlipped, flipDirection, disabled }),
        [isFlipped, flipDirection, disabled]
      )

      return (
        <FlipCardContext.Provider value={contextValue}>
          <div
            ref={ref}
            className={cn(
              "relative border-none bg-none shadow-none cursor-pointer select-none",
              disabled && "pointer-events-none",
              className
            )}
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
              ...props.style,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={disabled ? -1 : 0}
            aria-pressed={isFlipped}
            {...props}
          />
        </FlipCardContext.Provider>
      )
    }
  )
)
FlipCard.displayName = "FlipCard"

const FlipCardFront = React.memo(
  React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
    ({ className, ...props }, ref) => {
      const { isFlipped, flipDirection } = useFlipCardContext()

      const rotation = React.useMemo(() => {
        if (!isFlipped) return { rotateX: 0, rotateY: 0 }
        return flipDirection === "horizontal"
          ? { rotateY: -180, rotateX: 0 }
          : { rotateX: -180, rotateY: 0 }
      }, [isFlipped, flipDirection])

      return (
        <motion.div
          ref={ref}
          className={cn(
            "absolute inset-0 size-full",
            isFlipped ? "z-10 pointer-events-none" : "z-20 pointer-events-auto",
            className
          )}
          initial={false}
          animate={rotation}
          transition={TRANSITION_CONFIG}
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            ...props.style,
          }}
          {...props}
        />
      )
    }
  )
)
FlipCardFront.displayName = "FlipCardFront"

const FlipCardBack = React.memo(
  React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
    ({ className, ...props }, ref) => {
      const { isFlipped, flipDirection } = useFlipCardContext()

      const initialRotation = React.useMemo(
        () =>
          flipDirection === "horizontal"
            ? { rotateY: 180, rotateX: 0 }
            : { rotateX: 180, rotateY: 0 },
        [flipDirection]
      )

      const animateRotation = React.useMemo(() => {
        if (isFlipped) return { rotateX: 0, rotateY: 0 }
        return initialRotation
      }, [isFlipped, initialRotation])

      return (
        <motion.div
          ref={ref}
          className={cn(
            "absolute inset-0 size-full",
            isFlipped ? "z-20 pointer-events-auto" : "z-10 pointer-events-none",
            className
          )}
          initial={initialRotation}
          animate={animateRotation}
          transition={TRANSITION_CONFIG}
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            ...props.style,
          }}
          {...props}
        />
      )
    }
  )
)
FlipCardBack.displayName = "FlipCardBack"

export { FlipCard, FlipCardFront, FlipCardBack }
