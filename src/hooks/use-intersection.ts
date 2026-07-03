import { RefObject, useEffect, useState } from "react";

export function useIntersection(
  ref: RefObject<HTMLElement | null>,
  options?: IntersectionObserverInit
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: "200px",
        ...options,
      }
    );

    observer.observe(el);
    return () => {
      observer.unobserve(el);
    };
  }, [ref, options?.root, options?.rootMargin, options?.threshold]);

  return isIntersecting;
}
