import { Suspense, useRef, useCallback, useState, useEffect } from "react"
import { useIntersection } from "@/hooks/use-intersection"
import { safeLazy, LazyErrorBoundary } from "@/lib/safe-lazy"

const Spline = safeLazy(() => import("@splinetool/react-spline"))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isVisible = useIntersection(containerRef)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    if (!isVisible) return
    const id = (window as any).requestIdleCallback
      ? (window as any).requestIdleCallback(() => setShouldLoad(true), { timeout: 2000 })
      : setTimeout(() => setShouldLoad(true), 1000)
    return () => {
      if ((window as any).cancelIdleCallback) {
        (window as any).cancelIdleCallback(id)
      } else {
        clearTimeout(id)
      }
    }
  }, [isVisible])

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
      {isVisible && shouldLoad && (
        <LazyErrorBoundary fallback={<div className="flex h-full w-full items-center justify-center bg-[#020c18] text-[#5b8fd4] font-mono text-xs">Loading 3D Canvas...</div>}>
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
        </LazyErrorBoundary>
      )}
    </div>
  )
}
