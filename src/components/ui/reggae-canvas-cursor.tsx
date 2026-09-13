import React, { useEffect } from 'react';
import gsap from 'gsap';

/**
 * 1:1 Implementation of ReGGae Canvas Cursor (Dream Heights)
 * High-DPI hardware-accelerated difference canvas cursor
 * Features:
 * - 0 ghost dot on initial load (starts scale: 0, off-screen)
 * - Organic GSAP blooming reveal (scale 0 -> 1) under pointer on first interaction
 * - Framerate-independent exponential decay dampening (14.0 decay constant)
 * - Sub-pixel resting snap (< 0.04px) to eliminate antialiasing jitter
 * - Fluid hover expansion (radius 10 -> 30, diameter 20px -> 60px) via power3.out
 * - Tactile physical squish on mousedown (scale: 0.74) and spring back on mouseup
 * - Seamless exit/re-entry blooming on window mouseleave/mouseenter
 * - Scroll-aware hover detection via rAF-throttled elementFromPoint
 * - Automatic high-contrast inversion via mix-blend-mode: difference
 */
export const ReggaeCanvasCursor: React.FC = () => {
  useEffect(() => {
    // Only run in client browser
    if (typeof window === 'undefined' || !window.document) return undefined;

    let canvas = document.getElementById('cursor-canvas') as HTMLCanvasElement;
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'cursor-canvas';
      canvas.className = 'reggae-cursor-canvas js-canvas';
      document.body.appendChild(canvas);
    }

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return undefined;

    let dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;

    function resize() {
      if (!canvas) return;
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Initial state: off-screen and scale 0 until first user interaction
    let mouseX = -200;
    let mouseY = -200;
    let isVisible = false;
    let isHovering = false;
    let lastTime = performance.now();
    let animId: number | null = null;

    const circle = {
      x: -200,
      y: -200,
      radius: 10,
      baseRadius: 10,
      hoverRadius: 30,
      scale: 0,
    };

    function onFirstPointer(x: number, y: number) {
      if (!isVisible) {
        isVisible = true;
        circle.x = x;
        circle.y = y;
        circle.scale = 0;
        document.documentElement.classList.add('has-custom-cursor');
        gsap.to(circle, {
          scale: 1,
          duration: 0.36,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      }
    }

    function onPointerMove(x: number, y: number) {
      mouseX = x;
      mouseY = y;
      if (!isVisible) {
        onFirstPointer(x, y);
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      onPointerMove(e.clientX, e.clientY);
    };

    const handlePointerMove = (e: PointerEvent) => {
      onPointerMove(e.clientX, e.clientY);
    };

    // Smooth exit & re-entry when mouse leaves / re-enters browser viewport
    const handleMouseLeave = () => {
      if (isVisible) {
        gsap.to(circle, {
          scale: 0,
          duration: 0.24,
          ease: 'power2.in',
          overwrite: 'auto',
        });
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      if (e.clientX !== undefined && e.clientY !== undefined) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (isVisible) {
          circle.x = mouseX;
          circle.y = mouseY;
          gsap.to(circle, {
            scale: 1,
            duration: 0.32,
            ease: 'power3.out',
            overwrite: 'auto',
          });
        }
      }
    };

    // Tactile physical squish on click
    const handleMouseDown = () => {
      if (!isVisible) return;
      gsap.to(circle, {
        scale: 0.74,
        duration: 0.14,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    const handleMouseUp = () => {
      if (!isVisible) return;
      gsap.to(circle, {
        scale: 1,
        duration: 0.34,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    };

    // Interactive element hover selectors matching Dream Heights + Portfolio
    const interactiveSelector = [
      'a', 'button', '[role="button"]', 'input', 'textarea', 'select', 'label',
      '.btn-circle', '.btn-circle_link', '[hover-nav-item]', '[data-hover]',
      '.nav-item', '.tab_link', '.accordion-item', '.cursor-hover',
      '[data-modal-cta-btn]', '[data-modal-menu-btn]', '[data-tab-trigger]',
      '[data-filter-trigger]', '.card_preview', '.swiper-button-prev',
      '.swiper-button-next', '.lightbox-link', '.menu_btn', '.brand',
      '.footer_link', '[data-scroll-reveal]', '.loc-path-s_title',
      '[data-cookies="accept"]', '[data-cookies="decline"]',
      '.btn-menu', '.apart-card_link', '[data-cursor]', '.cursor-pointer',
      'summary', '.project-card', '.hero-card', '.glass-card', '.tag',
      '.service-card', '.tier-card', '.pricing-card', '.faq-item', '.badge',
      '.contact-talk-button', '.cta-pill', '.nav-pill', '.magnetic-wrap'
    ].join(', ');

    function setHover(hover: boolean) {
      if (isHovering === hover) return;
      isHovering = hover;
      gsap.to(circle, {
        radius: hover ? circle.hoverRadius : circle.baseRadius,
        duration: hover ? 0.36 : 0.28,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target && (e.target as Element).closest ? (e.target as Element).closest(interactiveSelector) : null;
      if (target) {
        setHover(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target && (e.target as Element).closest ? (e.target as Element).closest(interactiveSelector) : null;
      if (target) {
        const related = e.relatedTarget && (e.relatedTarget as Element).closest ? (e.relatedTarget as Element).closest(interactiveSelector) : null;
        if (!related) {
          setHover(false);
        }
      }
    };

    // Scroll-aware hover detection (throttled via rAF)
    let scrollCheckScheduled = false;
    const handleScroll = () => {
      if (!isVisible || scrollCheckScheduled) return;
      scrollCheckScheduled = true;
      requestAnimationFrame(() => {
        scrollCheckScheduled = false;
        if (mouseX > 0 && mouseY > 0 && mouseX < width && mouseY < height) {
          const el = document.elementFromPoint(mouseX, mouseY);
          const target = el && el.closest ? el.closest(interactiveSelector) : null;
          setHover(Boolean(target));
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseout', handleMouseOut, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // High-refresh continuous render loop with framerate-independent exponential dampening
    function render(now: number) {
      if (!ctx) return;
      if (!isVisible) {
        lastTime = now;
        animId = requestAnimationFrame(render);
        return;
      }
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      // Silky exponential decay dampening
      // 14.0 factor creates signature fluid trailing glide without micro-jitters
      const factor = 1 - Math.exp(-14.0 * dt);

      const dx = mouseX - circle.x;
      const dy = mouseY - circle.y;

      // Sub-pixel snapping when resting to eliminate antialiasing shimmer
      if (Math.abs(dx) < 0.04 && Math.abs(dy) < 0.04) {
        circle.x = mouseX;
        circle.y = mouseY;
      } else {
        circle.x += dx * factor;
        circle.y += dy * factor;
      }

      const curRadius = circle.radius * circle.scale;
      if (curRadius > 0.2) {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, curRadius, 0, Math.PI * 2, false);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.closePath();
      }

      animId = requestAnimationFrame(render);
    }

    animId = requestAnimationFrame(render);
    (window as any).__reggaeCursor = { circle, render, isVisible: () => isVisible, setHover };

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.classList.remove('has-custom-cursor');
      delete (window as any).__reggaeCursor;
    };
  }, []);

  return null;
};

export default ReggaeCanvasCursor;
