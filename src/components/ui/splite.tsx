import { Suspense, lazy, useRef } from "react"
import { useIntersection } from "@/hooks/use-intersection"

const Spline = lazy(() => import("@splinetool/react-spline"))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isVisible = useIntersection(containerRef)

  return (
    <div ref={containerRef} className={className} style={{ minHeight: 200, width: "100%", height: "100%" }}>
      {isVisible && (
        <Suspense
          fallback={
            <div className="flex h-full w-full items-center justify-center">
              <span className="loader" />
            </div>
          }
        >
          <Spline scene={scene} className="h-full w-full" />
        </Suspense>
      )}
    </div>
  )
}
