import { Suspense, lazy, useRef, useCallback } from "react"
import { useIntersection } from "@/hooks/use-intersection"

const Spline = lazy(() => import("@splinetool/react-spline"))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isVisible = useIntersection(containerRef)

  const handleSplineLoad = useCallback((splineApp: any) => {
    try {
      // Optimize Spline rendering performance & reduce poly/shadow computations
      if (splineApp && typeof splineApp.setQuality === "function") {
        splineApp.setQuality("medium")
      }
      // Reduce pixel ratio overhead on high-DPI retina screens to prevent GPU lag
      if (splineApp && splineApp.canvas) {
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
        if (splineApp.setPixelRatio) {
          splineApp.setPixelRatio(dpr)
        }
      }
    } catch (e) {
      // Ignore if method not exposed
    }
  }, [])

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
          <Spline 
            scene={scene} 
            className="h-full w-full" 
            onLoad={handleSplineLoad}
            renderOnDemand={true}
          />
        </Suspense>
      )}
    </div>
  )
}
