import React, { useEffect, useRef } from 'react';

/**
 * Zainab-Inspired Night Shooting Star (Meteor).
 * Deliberately NOT an infinite continuous animation — runs ~1.5s every 5-11s
 * when night mode is active and user is near the hero, leaving the GPU compositor
 * completely parked between passes. Also fires immediately upon switching from Day to Night.
 */
export const HeroMeteor: React.FC = () => {
  const meteorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const star = meteorRef.current;
    if (!star) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let timer: any = 0;
    let flying = false;

    function rnd(min: number, max: number) {
      return min + Math.random() * (max - min);
    }

    function schedule(ms: number) {
      clearTimeout(timer);
      timer = setTimeout(fire, ms);
    }

    function onHero() {
      const y = window.pageYOffset || document.documentElement.scrollTop || 0;
      const vh = window.innerHeight;
      return y < vh * 1.25;
    }

    function fire() {
      const isNight = !document.documentElement.classList.contains('day');
      if (!isNight || !onHero()) {
        schedule(4000);
        return;
      }

      const h = window.innerHeight;
      const w = window.innerWidth;

      star.style.setProperty('--m-top', Math.round(rnd(0.06, 0.35) * h) + 'px');
      star.style.setProperty('--m-len', Math.round(rnd(140, 280)) + 'px');
      star.style.setProperty('--m-angle', rnd(8, 14).toFixed(1) + 'deg');
      star.style.setProperty('--m-travel', Math.round(w * 1.15 + 300) + 'px');
      star.style.animation = 'none';
      void star.offsetWidth; // force reflow
      star.style.animation = `hero-meteor-fly ${rnd(1.15, 1.75).toFixed(2)}s linear`;
    }

    const onAnimStart = () => {
      flying = true;
    };

    const onAnimEnd = () => {
      flying = false;
      if (star) star.style.animation = 'none';
      schedule(rnd(5000, 11000));
    };

    star.addEventListener('animationstart', onAnimStart);
    star.addEventListener('animationend', onAnimEnd);

    const onThemeChange = (e: any) => {
      const theme = e?.detail?.theme;
      if (theme === 'night' && !flying) {
        schedule(500); // Trigger immediate shooting star upon night mode activation!
      }
    };

    window.addEventListener('themechange', onThemeChange);

    // Initial check: if night mode, schedule first meteor
    if (!document.documentElement.classList.contains('day')) {
      schedule(1800);
    }

    return () => {
      clearTimeout(timer);
      star.removeEventListener('animationstart', onAnimStart);
      star.removeEventListener('animationend', onAnimEnd);
      window.removeEventListener('themechange', onThemeChange);
    };
  }, []);

  return <div className="hero-meteor" ref={meteorRef} aria-hidden="true" />;
};

export default HeroMeteor;
