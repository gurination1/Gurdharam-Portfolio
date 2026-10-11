import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';
import { useIntersection } from '@/hooks/use-intersection';

interface EditorialTextRevealProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  stagger?: number;
  delay?: number;
  duration?: number;
  splitBy?: 'words' | 'lines';
}

/**
 * Mubien P10-Inspired Editorial Font Reveal
 * Uses masked overflow containers with pure GPU-accelerated translateY reveals.
 */
export default function EditorialTextReveal({
  text,
  className = '',
  tag: Tag = 'h2',
  stagger = 0.06,
  delay = 0,
  duration = 0.75,
  splitBy = 'words',
}: EditorialTextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const isVisible = useIntersection(containerRef, { threshold: 0.15 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const targets = el.querySelectorAll('.mubien-reveal-item');
    if (targets.length === 0) return;

    gsap.fromTo(
      targets,
      { yPercent: 115, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration,
        stagger,
        delay,
        ease: 'power3.out',
        force3D: true,
      }
    );
  }, [isVisible, delay, duration, stagger]);

  const chunks = splitBy === 'lines'
    ? text.split('\n').filter(Boolean)
    : text.split(' ').filter(Boolean);

  return (
    <Tag ref={containerRef as any} className={cn('editorial-text-reveal flex flex-wrap gap-x-[0.3em]', className)}>
      {chunks.map((chunk, idx) => (
        <span
          key={idx}
          className="mubien-line-mask inline-block overflow-hidden leading-[1.1] pb-[0.14em]"
        >
          <span
            className="mubien-reveal-item inline-block will-change-transform"
          >
            {chunk}
          </span>
        </span>
      ))}
    </Tag>
  );
}
