import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface RollingNumberProps {
  value: string;
  suffix?: string;
  color?: string;
  delay?: number;
}

export function RollingNumber({ value, suffix = '+', color = '#d4a853' }: RollingNumberProps) {
  const chars = value.split('');

  return (
    <span className="inline-flex items-center font-['Syne'] font-extrabold text-sm sm:text-base leading-none select-none">
      {chars.map((char, i) => {
        const isNum = !isNaN(Number(char));
        const num = isNum ? Number(char) : 0;
        // Build reel sequence: 0,1,2,3,4,5,6,7,8,9,target
        const sequence = isNum 
          ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, num]
          : [char];
        const targetIndex = isNum ? 10 : 0;

        return (
          <span 
            key={i} 
            className="relative inline-block h-[1.15em] overflow-hidden leading-[1.15em] align-baseline"
          >
            <span 
              className="reel-col flex flex-col will-change-transform" 
              data-target={targetIndex}
            >
              {sequence.map((n, idx) => (
                <span 
                  key={idx} 
                  className="reel-digit block h-[1.15em] leading-[1.15em] text-center"
                  style={{ color }}
                >
                  {n}
                </span>
              ))}
            </span>
          </span>
        );
      })}
      {suffix && (
        <span className="ml-0.5" style={{ color }}>
          {suffix}
        </span>
      )}
    </span>
  );
}

interface AnimatedStatsStripProps {
  className?: string;
}

export default function AnimatedStatsStrip({ className = '' }: AnimatedStatsStripProps) {
  const stripRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef<boolean>(false);

  const rollAll = (duration = 1.6) => {
    if (!stripRef.current) return;
    const cols = stripRef.current.querySelectorAll<HTMLDivElement>('.reel-col');
    cols.forEach((col, idx) => {
      const target = Number(col.dataset.target || 0);
      const items = col.querySelectorAll('.reel-digit');
      const itemHeight = items[0]?.clientHeight || 22;
      const targetY = -(target * itemHeight);

      gsap.fromTo(
        col,
        { y: 0 },
        {
          y: targetY,
          duration: duration + idx * 0.15,
          ease: 'power4.out',
          overwrite: true,
        }
      );
    });
  };

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;

    // IntersectionObserver triggers automatically on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            // Short delay to ensure DOM dimensions are ready
            setTimeout(() => {
              rollAll(1.8);
            }, 100);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(el);

    // Also trigger on window scroll as fallback
    const handleScroll = () => {
      if (hasAnimatedRef.current || !el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
        hasAnimatedRef.current = true;
        rollAll(1.8);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={stripRef}
      onMouseEnter={() => rollAll(1.2)}
      onClick={() => rollAll(1.4)}
      className={`group relative overflow-hidden rounded-xl border border-white/10 bg-[#0c0c0c]/85 p-2.5 backdrop-blur-md transition-all duration-300 hover:border-[#d4a853]/40 hover:shadow-[0_8px_24px_-8px_rgba(212,168,83,0.3)] cursor-pointer ${className}`}
    >
      {/* Top Gold Shimmer Line on Hover */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4a853]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="flex items-center justify-between divide-x divide-white/10 text-center font-mono">
        {/* Metric 1 */}
        <div className="flex-1 px-1 flex flex-col items-center">
          <div className="flex items-center justify-center gap-0.5">
            <RollingNumber value="1" suffix="+" color="#d4a853" />
            <span className="text-[0.62rem] font-bold text-[#9a958c] ml-0.5">YR</span>
          </div>
          <div className="text-[0.58rem] uppercase tracking-wider text-[#9a958c] mt-0.5">
            Hard Exp
          </div>
        </div>

        {/* Metric 2 */}
        <div className="flex-1 px-1 flex flex-col items-center">
          <div className="flex items-center justify-center">
            <RollingNumber value="20" suffix="+" color="#38bdf8" />
          </div>
          <div className="text-[0.58rem] uppercase tracking-wider text-[#9a958c] mt-0.5">
            Clients Work
          </div>
        </div>

        {/* Metric 3 */}
        <div className="flex-1 px-1 flex flex-col items-center">
          <div className="flex items-center justify-center">
            <RollingNumber value="15" suffix="+" color="#25D366" />
          </div>
          <div className="text-[0.58rem] uppercase tracking-wider text-[#9a958c] mt-0.5">
            Shipped
          </div>
        </div>
      </div>
    </div>
  );
}
