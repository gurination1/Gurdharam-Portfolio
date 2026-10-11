// @ts-nocheck
import React, { useEffect, useMemo, useRef, useState, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertTriangle, ArrowUpRight, Bot, BrainCircuit, CheckCircle2, Code2, Cpu, HeartPulse, Mail, MessageCircle, MoveRight, ShieldCheck, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { SplineScene } from '@/components/ui/splite';
import { Spotlight } from '@/components/ui/spotlight';
import FlowArt, { FlowSection } from '@/components/ui/story-scroll';
const PointsChart = lazy(() => import('@/components/ui/points-chart').then((m) => ({ default: m.PointsChart })));
import { LiquidGlassMagneticButton } from '@/components/ui/liquidglassmagneticbutton';
import { DynamicIslandTOC } from '@/components/ui/dynamic-island-toc';
import { FluidTextMorph } from '@/components/ui/fluid-text-morph';
import EditorialTextReveal from '@/components/ui/editorial-text-reveal';
import SendButton from '@/components/ui/send-button';
import ImageParticleField from '@/components/ui/image-particle-field';
import ParticleAnimation from '@/components/ui/particle-animation';
import Footer from '@/components/ui/footer';
import LogoMarquee from '@/components/ui/logo-marquee';
import TextRevealFAQs from '@/components/ui/text-reveal-faqs';
import { MagicText } from '@/components/ui/magic-text';
import AnimatedTextRoller from '@/components/ui/animated-text-04';
import { StackedCards } from '@/components/ui/glass-cards';
import { VelocityText, VelocityTextProvider } from '@/components/ui/parallax-scrolling-text-effect';
import CodropsEmergingImage from '@/components/ui/codrops-emerging-image';
import TextArcEffect from '@/components/ui/text-arc-effect';
import AnimatedStatsStrip from '@/components/ui/gsap-rolling-counter';
import ThemeToggle from '@/components/ui/theme-toggle';
import HeroMeteor from '@/components/ui/hero-meteor';

const techLogos = [
  { src: "https://svgl.app/library/openai_wordmark_light.svg", alt: "OpenAI" },
  { src: "https://cdn.simpleicons.org/nvidia/white", alt: "Nvidia" },
  { src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg", alt: "Claude AI" },
  { src: "https://cdn.simpleicons.org/googlegemini/white", alt: "Google Gemini" },
  { src: "https://svgl.app/library/meta.svg", alt: "Meta" },
  { src: "https://cdn.simpleicons.org/react/white", alt: "React" },
  { src: "https://svgl.app/library/supabase_wordmark_light.svg", alt: "Supabase" },
  { src: "https://cdn.simpleicons.org/flutter/white", alt: "Flutter" },
  { src: "https://svgl.app/library/vercel_wordmark.svg", alt: "Vercel" },
  { src: "https://cdn.simpleicons.org/tensorflow/white", alt: "TensorFlow" },
  { src: "https://svgl.app/library/github_wordmark_light.svg", alt: "GitHub" },
  { src: "https://cdn.simpleicons.org/python/white", alt: "Python" },
];
import { ContainerScroll as PerspectiveContainerScroll } from '@/components/ui/container-scroll-animation';
import {
  ContainerAnimated,
  ContainerInset,
  ContainerScroll,
  ContainerSticky,
  HeroButton,
  HeroVideo,
} from '@/components/ui/animated-video-on-scroll';
import { AnimatedTextPath } from '@/components/ui/animated-svg-text-path';
import { useIntersection } from '@/hooks/use-intersection';
import "../styles.css";

gsap.registerPlugin(ScrollTrigger);

const personImage = '/assets/gurdharam-portrait-bg.webp';
const secondPageImage = '/assets/portfolio/second-page.jpg';
const quoteParticleImage = '/assets/portfolio/second-page.jpg';
const fallbackSecondPageImage = '/assets/portfolio/second-page.jpg';



const skills = [
  ['Prompt Engineering', 92],
  ['LLM Pipeline Architecture', 85],
  ['Autonomous AI Bots', 80],
  ['Website / Web Design', 78],
  ['Dashboard Interfaces', 74],
  ['Visual Documentation', 72],
  ['AI Fine Tuning & Training', 70],
  ['AI Optimisation', 69],
  ['Python', 70],
  ['Flutter / Dart', 68],
  ['JavaScript', 52],
];

const skillChartData = skills.map(([name, pct], index) => ({
  date: String(name).split(' ')[0],
  total: Number(pct),
  change: index === 0 ? 0 : Number(pct) - Number(skills[index - 1][1]),
}));

function Mark({ children }) {
  return <strong className="copy-mark">{children}</strong>;
}

function navigateTo(target) {
  if (target.startsWith('#')) {
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    return;
  }
  window.location.href = target;
}

function usePortfolioMotion(onPreloaderComplete?: () => void) {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.documentElement.classList.toggle('reduce-motion', reduce);

    let lenis: any = null;
    const updateRaf = (time: number) => {
      if (lenis) {
        lenis.raf(time * 1000);
      }
    };

    const startLenis = () => {
      if (reduce || lenis) return;
      lenis = new Lenis({
        duration: 1.05,
        easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
        smoothWheel: true,
      });
      (window as any).lenis = lenis;
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(updateRaf);
      gsap.ticker.lagSmoothing(500, 33);
    };

    const ctx = gsap.context(() => {
      const isBotOrCrawler = typeof navigator !== 'undefined' && (
        Boolean(navigator.webdriver) ||
        /bot|googlebot|bingbot|crawler|spider|robot|crawling|lighthouse|headless|prerender|bytespider/i.test(navigator.userAgent)
      );
      const isSlowConnection = typeof navigator !== 'undefined' && (
        Boolean((navigator as any).connection?.saveData) ||
        /(2g|slow-2g)/i.test(String((navigator as any).connection?.effectiveType || ''))
      );

      const shouldBypass = reduce || isBotOrCrawler || isSlowConnection;

      if (shouldBypass) {
        gsap.set('.ldr', { display: 'none' });
        gsap.set('.hero-line, .hero-word', { y: 0, yPercent: 0, opacity: 1 });
        gsap.set('.hero-meta, .signal-strip, .hero-sub, .hero-actions, .hero-card, .site-nav', { y: 0, opacity: 1 });
        startLenis();
        onPreloaderComplete?.();
      } else {
        let initialized = false;
        const runPreloader = () => {
          if (initialized) return;
          initialized = true;

          const preloaderEl = document.querySelector('.ldr') as HTMLElement | null;
          if (!preloaderEl) {
            startLenis();
            onPreloaderComplete?.();
            return;
          }

          const tl = gsap.timeline({
            defaults: { ease: 'power3.inOut' },
            onComplete: () => {
              if (preloaderEl) {
                preloaderEl.style.display = 'none';
              }
              startLenis();
              requestAnimationFrame(() => {
                onPreloaderComplete?.();
              });
            },
          });

          // 1. Entrance: Corner tags glide up from mask
          tl.fromTo(
            '.ldr_nm_el span',
            { yPercent: 110 },
            { yPercent: 0, duration: 0.45, stagger: 0.05, ease: 'power3.out' },
            0.05
          );

          // 2. Entrance: Pristine GURDHARAM letters reveal cleanly with zero splits
          tl.fromTo(
            '.ldr_char',
            { yPercent: 115, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.45, stagger: 0.018, ease: 'power3.out' },
            0.12
          );

          // 3. Entrance: Enterprise Studio badge reveals
          tl.fromTo(
            '.ldr_logo_badge span',
            { yPercent: 110, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.38, ease: 'power3.out' },
            0.25
          );

          // 4. Entrance: Sleek loading bar reveals
          tl.fromTo(
            '.ldr_progress',
            { opacity: 0, y: 8 },
            { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' },
            0.28
          );

          // 5. Dynamic loading bar fill & numeric counter (00% -> 100%)
          const progressObj = { val: 0 };
          const numEl = document.querySelector('.ldr_progress_num') as HTMLElement | null;
          tl.to(
            '.ldr_bar_fill',
            { scaleX: 1, duration: 0.75, ease: 'power2.inOut' },
            0.35
          );
          tl.to(
            progressObj,
            {
              val: 100,
              duration: 0.75,
              ease: 'power2.inOut',
              onUpdate: () => {
                if (numEl) {
                  const rounded = Math.round(progressObj.val);
                  numEl.textContent = `${rounded < 10 ? '0' : ''}${rounded}%`;
                }
              },
            },
            0.35
          );

          // Hold logo in full view with 100% complete (0.2s hold)

          // 6. Exit: Corner tags slide down through masks
          tl.to(
            '.ldr_nm_el span',
            { yPercent: 140, duration: 0.35, stagger: 0.03, ease: 'power3.in' },
            '+=0.2'
          );

          // 7. Exit: Pristine center logo & progress bar clear cleanly
          tl.to(
            '.ldr_logo',
            { opacity: 0, scale: 0.98, duration: 0.28, ease: 'power2.in' },
            '<0.05'
          );

          // 6. Signature 120 FPS Dual-Split Curtain Sweep (pure GPU compositor thread)
          tl.to(
            '.ldr_curtain_top',
            { yPercent: -105, duration: 1.05, ease: 'power3.inOut', force3D: true },
            '-=0.08'
          );
          tl.to(
            '.ldr_curtain_bottom',
            { yPercent: 105, duration: 1.05, ease: 'power3.inOut', force3D: true },
            '<'
          );
        };

        requestAnimationFrame(() => {
          runPreloader();
        });
      }
    });

    return () => {
      ctx.revert();
      if (lenis) {
        try {
          lenis.off('scroll', ScrollTrigger.update);
          gsap.ticker.remove(updateRaf);
          lenis.destroy();
        } catch (e) {
          console.error('Error cleaning up Lenis:', e);
        }
      }
      delete (window as any).lenis;
      try {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      } catch (e) {
        console.error('Error killing ScrollTriggers:', e);
      }
    };
  }, []);
}

function useGlobalPointerVars() {
  useEffect(() => {
    // Disabled pointer move CSS variable injection to prevent root layout thrashing
  }, []);
}

function useCardSpotlight(active: boolean = true) {
  useEffect(() => {
    if (!active) return undefined;
    const cards = [...document.querySelectorAll('.hero, .project-card, .hero-card')];
    const cleanups = cards.map((card) => {
      let rect = null;
      const updateRect = () => {
        rect = card.getBoundingClientRect();
      };
      const move = (event) => {
        if (!rect) {
          rect = card.getBoundingClientRect();
        }
        card.style.setProperty('--px', `${event.clientX - rect.left}px`);
        card.style.setProperty('--py', `${event.clientY - rect.top}px`);
      };
      const leave = () => {
        rect = null;
      };
      card.addEventListener('mouseenter', updateRect, { passive: true });
      card.addEventListener('pointermove', move, { passive: true });
      card.addEventListener('mouseleave', leave, { passive: true });
      return () => {
        card.removeEventListener('mouseenter', updateRect);
        card.removeEventListener('pointermove', move);
        card.removeEventListener('mouseleave', leave);
      };
    });
    return () => cleanups.forEach((cleanup) => cleanup());
  }, [active]);
}

function useMagnetic(active: boolean = true) {
  useEffect(() => {
    if (!active || !window.matchMedia('(pointer: fine)').matches) return undefined;
    const els = [...document.querySelectorAll('[data-magnetic]')];
    const cleanups = els.map((el) => {
      let rect = null;
      const updateRect = () => {
        rect = el.getBoundingClientRect();
      };
      const move = (event) => {
        if (!rect) {
          rect = el.getBoundingClientRect();
        }
        const x = (event.clientX - rect.left - rect.width / 2) * 0.28;
        const y = (event.clientY - rect.top - rect.height / 2) * 0.28;
        gsap.to(el, { x, y, duration: 0.32, ease: 'power3.out' });
      };
      const leave = () => {
        rect = null;
        gsap.to(el, { x: 0, y: 0, duration: 0.65, ease: 'elastic.out(1, 0.45)' });
      };
      el.addEventListener('mouseenter', updateRect, { passive: true });
      el.addEventListener('mousemove', move, { passive: true });
      el.addEventListener('mouseleave', leave, { passive: true });
      return () => {
        el.removeEventListener('mouseenter', updateRect);
        el.removeEventListener('mousemove', move);
        el.removeEventListener('mouseleave', leave);
      };
    });
    return () => cleanups.forEach((cleanup) => cleanup());
  }, [active]);
}

function SignalCanvas({ active = true }: { active?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isIntersecting = useIntersection(canvasRef);
  const isIntersectingRef = useRef(isIntersecting);
  const drawRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    isIntersectingRef.current = isIntersecting;
    if (isIntersecting && active && drawRef.current) {
      drawRef.current();
    }
  }, [isIntersecting, active]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;
    let raf = 0;
    let running = false;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const pointer = { x: -9999, y: -9999 };
    const particleCount = width < 768 ? 24 : 46;
    const particles = Array.from({ length: particleCount }, (_, index) => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00035,
      vy: (Math.random() - 0.5) * 0.00035,
      r: 0.7 + Math.random() * 1.6,
      phase: index * 0.17,
    }));

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const move = (event: MouseEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };

    const draw = () => {
      if (!isIntersectingRef.current || !active) {
        running = false;
        return;
      }
      running = true;
      frame += 0.01;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(8,8,8,0.18)';
      ctx.fillRect(0, 0, width, height);

      // Batch line strokes into single path
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(212,168,83,0.08)';
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx + Math.sin(frame + p.phase) * 0.00003;
        p.y += p.vy + Math.cos(frame + p.phase) * 0.00003;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
        p.x = Math.max(0, Math.min(1, p.x));
        p.y = Math.max(0, Math.min(1, p.y));

        const x = p.x * width;
        const y = p.y * height;
        const dxp = pointer.x - x;
        const dyp = pointer.y - y;
        const pdSq = dxp * dxp + dyp * dyp;
        if (pdSq < 19600) {
          p.x -= (dxp / 140) * 0.0012;
          p.y -= (dyp / 140) * 0.0012;
        }

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const qx = q.x * width;
          const qy = q.y * height;
          const dx = qx - x;
          const dy = qy - y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 15876) {
            ctx.moveTo(x, y);
            ctx.lineTo(qx, qy);
          }
        }
      }
      ctx.stroke();

      // Draw particle dots
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const x = p.x * width;
        const y = p.y * height;
        const dxp = pointer.x - x;
        const dyp = pointer.y - y;
        const isNear = (dxp * dxp + dyp * dyp) < 14400;

        ctx.fillStyle = isNear ? 'rgba(232,192,112,0.92)' : 'rgba(212,168,83,0.42)';
        ctx.beginPath();
        ctx.arc(x, y, isNear ? p.r * 1.8 : p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    const startLoop = () => {
      if (!running && active) {
        draw();
      }
    };
    drawRef.current = startLoop;

    resize();
    if (active) {
      startLoop();
    }
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', move, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', move);
      drawRef.current = null;
    };
  }, [active]);

  return <canvas className="signal-canvas" ref={canvasRef} aria-hidden="true" />;
}

const menuLinks = [
  {
    label: 'Websites & 3D Spatial',
    href: '/websites',
    tagline: '₹5k–₹20k Flat Rates • Kirat Interior & Dream Heights 3D',
  },
  {
    label: 'AI Automation & Bots',
    href: '/services',
    tagline: 'Meta WhatsApp Cloud API • AI Voice Agents • 15+ Industry Hubs',
  },
  {
    label: 'Case Studies',
    href: '/case-studies/takemyinterview-ai',
    tagline: 'TakeMyInterview.ai • DoodhHisaab ERP • FasalDoctor Edge ML',
  },
  {
    label: 'Engineering Whitepapers',
    href: '/blog',
    tagline: 'Local GPU Quantization • DPDP Legal Compliance • Offline AI',
  },
  {
    label: 'About Us',
    href: '/about',
    tagline: 'Founders Gurdharam & Manveer • BFGI Bathinda Students • AgriTech × AIML',
  },
  {
    label: 'Commission Project',
    href: '#contact',
    tagline: 'Direct WhatsApp Scope Intake • Q3 Commissions Open',
  },
];

function WipeMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const tl = gsap.timeline({ paused: true, defaults: { ease: 'expo.inOut' } });

    tl.set(overlay, { visibility: 'visible' })
      .to(overlay, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 1.05,
        ease: 'expo.inOut',
      })
      .from(
        '.wipe-menu-line',
        {
          scaleX: 0,
          transformOrigin: 'left',
          duration: 0.6,
          stagger: 0.06,
          ease: 'expo.out',
        },
        '-=0.4'
      )
      .from(
        '.wipe-menu-link-text',
        {
          yPercent: 110,
          duration: 0.75,
          stagger: 0.07,
          ease: 'expo.out',
        },
        '-=0.6'
      )
      .from(
        '.wipe-menu-number',
        {
          opacity: 0,
          x: -12,
          duration: 0.5,
          stagger: 0.06,
          ease: 'expo.out',
        },
        '-=0.65'
      )
      .from(
        '.wipe-menu-footer span, .wipe-menu-footer a',
        {
          opacity: 0,
          y: 14,
          duration: 0.5,
          stagger: 0.04,
          ease: 'power3.out',
        },
        '-=0.45'
      )
      .from(
        '.wipe-menu-deco',
        {
          scale: 0,
          opacity: 0,
          duration: 0.7,
          ease: 'expo.out',
        },
        '-=0.6'
      );

    tlRef.current = tl;

    return () => {
      tl.kill();
    };
  }, []);

  const open = () => {
    setIsOpen(true);
    document.body.classList.add('wipe-menu-open');
    tlRef.current?.restart();
  };

  const close = () => {
    setIsOpen(false);
    document.body.classList.remove('wipe-menu-open');
    const overlay = overlayRef.current;
    if (!overlay) return;
    gsap.to(overlay, {
      clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
      duration: 0.75,
      ease: 'expo.inOut',
      onComplete: () => {
        gsap.set(overlay, {
          visibility: 'hidden',
          clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
        });
      },
    });
  };

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      // Same-page anchor — animate close then scroll
      close();
      setTimeout(() => {
        if (location.pathname === '/') {
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        } else {
          navigate('/' + href);
        }
      }, 600);
    } else {
      // Cross-route navigation — force-reset everything immediately
      setIsOpen(false);

      // Kill all running GSAP animations to prevent stale callbacks
      try {
        gsap.killTweensOf("*");
      } catch (_) {}

      // Destroy Lenis if active
      if ((window as any).lenis) {
        try {
          (window as any).lenis.stop();
          (window as any).lenis.destroy();
          delete (window as any).lenis;
        } catch (_) {}
      }

      // Force body/html cleanup
      document.body.classList.remove('wipe-menu-open');
      document.body.classList.remove('native-cursor-active');
      document.body.style.cssText = '';
      document.documentElement.style.cssText = '';

      // Force scroll to top on all scroll containers
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // Hide overlay immediately
      const overlay = overlayRef.current;
      if (overlay) {
        overlay.style.visibility = 'hidden';
        overlay.style.clipPath = 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)';
      }

      // Navigate immediately — no delay needed since we cleaned up synchronously
      navigate(href);
    }
  };

  return (
    <>
      {/* Top-bar (always visible) */}
      <nav className="site-nav" aria-label="Primary">
        <a href="#top" className="site-nav-logo">Gurdharam</a>
        <div className="site-nav-right">
          <ThemeToggle />
          <button
            className={`wipe-burger ${isOpen ? 'is-active' : ''}`}
            onClick={isOpen ? close : open}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <span className="wipe-burger-line wipe-burger-line--top" />
            <span className="wipe-burger-line wipe-burger-line--mid" />
            <span className="wipe-burger-line wipe-burger-line--bot" />
          </button>
        </div>
      </nav>

      {/* Full-screen wipe overlay */}
      <div
        className="wipe-menu-overlay"
        ref={overlayRef}
        aria-hidden={!isOpen}
      >
        <div className="wipe-menu-deco" aria-hidden="true" />
        <div className="wipe-menu-content">
          <ul className="wipe-menu-list">
            {menuLinks.map((link, index) => (
              <li key={link.label}>
                <div className="wipe-menu-line" />
                <button
                  className="wipe-menu-item"
                  onClick={() => handleLinkClick(link.href)}
                >
                  <span className="wipe-menu-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="wipe-menu-link-wrap">
                    <span className="wipe-menu-link-text">{link.label}</span>
                    {link.tagline && (
                      <span className="wipe-menu-tagline">{link.tagline}</span>
                    )}
                  </div>
                  <span className="wipe-menu-arrow" aria-hidden="true">→</span>
                </button>
              </li>
            ))}
            <li><div className="wipe-menu-line" /></li>
          </ul>
          <div className="wipe-menu-footer">
            <div className="wipe-menu-footer-left">
              <span className="wipe-menu-footer-dot" />
              <span>GURDHARAM &amp; MANVEER • AI SYSTEMS &amp; CREATIVE STUDIO</span>
            </div>
            <div className="wipe-menu-footer-right">
              <a
                href="https://api.whatsapp.com/send?phone=918194824204&amp;text=Hi%20Gurdharam,%20I%20want%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Direct
              </a>
              <a href="mailto:gurination1@gmail.com">gurination1@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Preloader() {
  return (
    <div className="ldr" aria-hidden="true">
      <div className="ldr_curtain ldr_curtain_top" />
      <div className="ldr_curtain ldr_curtain_bottom" />
      <div className="ldr_nm">
        <div className="ldr_nm_el">
          <span>AI SYSTEMS ARCHITECT</span>
        </div>
        <div className="ldr_nm_el">
          <span>MSME: UDYAM-PB-03-0079744</span>
        </div>
        <div className="ldr_nm_el">
          <span>GURDHARAM JEET SINGH</span>
        </div>
      </div>
      <div className="ldr_logo">
        <div className="ldr_logo_main">
          {'GURDHARAM'.split('').map((char, index) => (
            <span key={`${char}-${index}`} className="ldr_char">
              {char}
            </span>
          ))}
        </div>
        <div className="ldr_logo_badge">
          <span>ENTERPRISE AI STUDIO</span>
        </div>
        <div className="ldr_progress">
          <div className="ldr_bar_track">
            <div className="ldr_bar_fill" />
          </div>
          <div className="ldr_progress_meta">
            <span className="ldr_progress_label">INITIALIZING SYSTEM</span>
            <span className="ldr_progress_num">00%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TechLogoMarquee() {
  return (
    <section className="tech-marquee-section py-6 border-y border-white/5 bg-black/40">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-[0.7rem] font-mono tracking-widest text-white/40 uppercase mb-2">
          Powered By & Integrated With Official Stacks
        </p>
        <LogoMarquee logos={techLogos} />
      </div>
    </section>
  );
}

function Hero({ preloaderDone = false }: { preloaderDone?: boolean }) {
  return (
    <section className="hero" id="top" data-toc data-toc-title="[ 00 - TOP ]" data-toc-depth="1">
      <HeroMeteor />
      <SignalCanvas active={preloaderDone} />
      <div className="hero-meta">
        <span>[ AVAILABLE FOR WORK ]</span>
        <span>MSME ID: UDYAM-PB-03-0079744</span>
      </div>
      <div className="hero-grid">
        <div>
          <h1 className="hero-title hero-title-whatif" aria-label="BUILD WHAT IF? — Gurdharam Enterprise Studio">
            <span className="sr-only">BUILD WHAT IF? — Gurdharam: Enterprise AI & Web Developer</span>
            <span className="hero-line">
              <span className="hero-word hero-word-build" aria-hidden="true">
                <span className="hero-letter">B</span>
                <span className="hero-letter even">U</span>
                <span className="hero-letter">I</span>
                <span className="hero-letter even">L</span>
                <span className="hero-letter">D</span>
              </span>
            </span>
            <span className="hero-line">
              <span className="hero-word hero-word-whatif" aria-hidden="true">
                <span className="whatif-text">
                  <span className="hero-letter">W</span>
                  <span className="hero-letter even">H</span>
                  <span className="hero-letter">A</span>
                  <span className="hero-letter even">T</span>
                  <span className="hero-space">&nbsp;</span>
                  <span className="hero-letter">I</span>
                  <span className="hero-letter even">F</span>
                </span>
                <span className="whatif-punct hero-letter punct">?</span>
              </span>
            </span>
          </h1>
          <div className="signal-strip">
            <span>LOCAL AI</span>
            <span>WHATSAPP AGENTS</span>
            <span>VIDEO ENGINES</span>
            <span>3D WEB</span>
          </div>
          <p className="hero-sub">
            <span>AI SYSTEMS ARCHITECT</span>
            <b>x</b>
            <span>FULL-STACK ENGINEER</span>
            <b>x</b>
            <span>CREATIVE TECHNOLOGIST</span>
          </p>
          <AnimatedTextRoller
            items={[
              { text: "AI CALLING.", color: "hero-roller-gold text-[var(--accent-gold)]" },
              { text: "WHATSAPP BOTS.", color: "hero-roller-gold text-[var(--accent-gold)]" },
              { text: "3D WEBSITES.", color: "hero-roller-gold text-[var(--accent-gold)]" },
              { text: "SEO WITH GEO & NEO.", color: "hero-roller-blue text-sky-400" },
              { text: "MOBILE APPS.", color: "hero-roller-gold text-[var(--accent-gold)]" },
              { text: "MARKETING.", color: "hero-roller-blue text-sky-400" },
            ]}
            intervalMs={2200}
            className="mt-4 hero-roller"
          />
        </div>
        <aside className="hero-card" data-cursor="hover">
          <div className="hero-spline-shell">
            {preloaderDone && <Spotlight className="-top-40 left-0 md:left-20 md:-top-24" fill="white" />}
            {preloaderDone && (
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="hero-spline"
              />
            )}
          </div>
          <p className="hero-copy">
            We build <Mark>AI systems that eliminate 90% of manual work</Mark>, automate lead generation 24/7 on WhatsApp, and engineer luxury websites that convert traffic into enterprise revenue.
          </p>
          <div className="hero-actions">
            <LiquidGlassMagneticButton className="hero-btn-work" variant="blue" size="sm" onClick={() => navigateTo('#work')}>
              View Work <ArrowUpRight size={15} />
            </LiquidGlassMagneticButton>
            <LiquidGlassMagneticButton className="hero-btn-talk" variant="talk" size="sm" onClick={() => navigateTo('mailto:gurination1@gmail.com')}>
              Talk <MessageCircle size={15} />
            </LiquidGlassMagneticButton>
          </div>
        </aside>
      </div>
      <div className="scroll-cue">
        <span>SCROLL</span>
        <i />
      </div>
    </section>
  );
}

function PortfolioStory() {
  return (
    <section id="story" data-toc data-toc-title="[ 02 - STORY ]" data-toc-depth="2">
      <FlowArt aria-label="Gurdharam portfolio story" className="story-flow">
        <FlowSection aria-label="Who I am" style={{ backgroundColor: '#fd5200', color: '#fff' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em]">01 - Who I am</p>
          <hr className="my-[2vw] border-none border-t border-black opacity-100" />
          <div>
            <h2 className="text-[clamp(3.5rem,12vw,13rem)] font-bold uppercase leading-[0.85] tracking-normal">
              Build
              <br />
              What
              <br />
              Works
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-black opacity-100" />
          <p className="mt-auto max-w-[58ch] text-[clamp(1rem,2.5vw,2rem)] leading-relaxed">
            Rough AI ideas become <Mark>working systems</Mark>: local video, offline apps, field-ready automation.
          </p>
        </FlowSection>

        <FlowSection aria-label="How I work" style={{ backgroundColor: '#000', color: '#fff' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em]">02 - How I work</p>
          <hr className="my-[2vw] border-none border-t border-white/60" />
          <div>
            <h2 className="text-[clamp(3.5rem,12vw,13rem)] font-bold uppercase leading-[0.85] tracking-normal">
              Local
              <br />
              First
              <br />
              Logic
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/60" />
          <div className="flex flex-wrap gap-[3vw]">
            {[
              ['AI pipelines', 'LLM orchestration, media generation, TTS, and FFmpeg composition.'],
              ['Mobile apps', 'Flutter interfaces for low connectivity and business workflows.'],
              ['Automation', 'Bots, scripts, and internal systems that remove repeated work.'],
            ].map(([title, body]) => (
              <div className="min-w-[180px] flex-1" key={title}>
                <p className="mb-2 text-sm font-bold uppercase tracking-wider">{title}</p>
                <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">{body}</p>
              </div>
            ))}
          </div>
          <hr className="my-[2vw] border-none border-t border-white/60" />
          <p className="ml-auto max-w-[50ch] text-right text-[clamp(1rem,2.5vw,2rem)] leading-relaxed">
            The goal is simple: <Mark>systems that keep running</Mark> after the demo.
          </p>
        </FlowSection>

        <FlowSection aria-label="What I ship" style={{ backgroundColor: '#1A3DE8', color: '#fff' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em]">03 - What I ship</p>
          <hr className="my-[2vw] border-none border-t border-white/50" />
          <div>
            <h2 className="text-[clamp(3.5rem,12vw,13rem)] font-bold uppercase leading-[0.85] tracking-normal">
              Real
              <br />
              World
              <br />
              Tools
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/50" />
          <div className="flex flex-wrap gap-[3vw]">
            {[
              ['12+', 'Projects shipped across AI, apps, and automation.'],
              ['8+', 'Indian and international clients served.'],
              ['100%', 'Outcome-first builds, not presentation-only prototypes.'],
            ].map(([title, body]) => (
              <div className="min-w-[180px] flex-1" key={title}>
                <p className="mb-2 text-sm font-bold uppercase tracking-wider">{title}</p>
                <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">{body}</p>
              </div>
            ))}
          </div>
        </FlowSection>
      </FlowArt>
    </section>
  );
}

function ProjectDeck({ project }) {
  return (
    <div className="project-deck" aria-hidden="true">
      <div className="deck-stage">
        <div className="deck-back" />
        <div className="deck-tab" />
        {project.deck.map((label, index) => (
          <div className={`deck-card deck-card-${index + 1}`} key={label}>
            <span>{label}</span>
            <i />
          </div>
        ))}
        <div className="deck-front">
          <project.icon.type {...project.icon.props} />
          <strong>{project.titleA[0]}{project.titleB[0]}</strong>
        </div>
        <div className="deck-shine" />
      </div>
      <div className="deck-telemetry">
        {project.telemetry.map((item) => <span key={item}>{item}</span>)}
      </div>
    </div>
  );
}



function About() {
  const aboutShowcaseImage = secondPageImage || fallbackSecondPageImage;

  return (
    <section
      className="section about has-about-visual"
      id="about"
      data-toc
      data-toc-title="[ 01 - ABOUT ]"
      data-toc-depth="2"
      style={{ '--about-image': `url("${aboutShowcaseImage}")` } as React.CSSProperties}
    >
      <h2 className="section-label" data-toc-ignore>[ 01 - ABOUT ]</h2>
      <div className="about-scroll-stage">
        <PerspectiveContainerScroll
          titleComponent={
            <div className="about-scroll-title">
              <span>SECOND PAGE</span>
              <strong>Field-ready systems, framed like a product launch.</strong>
            </div>
          }
        >
          <img
            src={aboutShowcaseImage}
            alt="Gurdharam portfolio second page preview"
            className="h-full w-full rounded-2xl object-cover object-center"
            draggable={false}
            loading="lazy"
            decoding="async"
            width={1200}
            height={675}
          />
        </PerspectiveContainerScroll>
      </div>
      <div className="about-grid">
        <div className="stats-col">
          <CodropsEmergingImage
            src="/assets/gurdharam-portrait-bg.webp"
            cutoutSrc="/assets/gurdharam-cutout.webp"
            arcText="• GURDHARAM ENTERPRISE STUDIO • AI & WEB ARCHITECTURE •"
            fillColor="#d4a853"
          />
          <AnimatedStatsStrip className="mt-3" />
        </div>
        <div className="about-copy">
          <MagicText
            text="Gurdharam: An Enterprise and independent AI & web developer focusing on custom LLM pipeline architectures, WhatsApp AI automated chat systems using the Meta Cloud API, and on-device offline intelligence. Building systems that think, automate revenue, and scale operations worldwide."
          />
          <div className="chips">
            {[
              'WhatsApp AI',
              'Voice AI Calling',
              'Offline ML',
              '3D Websites',
              'Video Pipelines',
              'Flutter Apps',
              'LLM Fine-Tuning',
              'Local LLMs',
              'AI Agents',
              'ComfyUI',
              'Dashboards',
              'Full-Stack Web',
              'REST APIs',
              'SEO & GEO',
              'Prompt Architecture',
              'Python Automation',
            ].map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
          <div className="about-action-buttons">
            <Link to="/services/ai-automation" className="btn-pill-action btn-pill-gold">
              AI Automation Services
            </Link>
            <Link to="/services/web-development" className="btn-pill-action btn-pill-cold">
              Web Development Services
            </Link>
            <Link to="/websites" className="btn-pill-action btn-pill-websites">
              Live Websites &amp; 3D Showcase →
            </Link>
            <Link to="/about" className="btn-pill-action btn-pill-about">
              About Us / Leadership Duo →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function MaskTiles() {
  return <div className="mask-grid" aria-hidden="true">{Array.from({ length: 40 }).map((_, index) => <span className="mask-tile" key={index} />)}</div>;
}

function Projects() {
  return (
    <section className="section projects" id="work" data-toc data-toc-title="[ 03 - WORK ]" data-toc-depth="2">
      <h2 className="section-label" data-toc-ignore>[ 02 - WORK ]</h2>
      <StackedCards />
    </section>
  );
}

function Skills({ preloaderDone = false }: { preloaderDone?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersection(containerRef);

  useEffect(() => {
    if (!isVisible) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.skill-row').forEach((row: any, index: number) => {
        const pct = row.dataset.pct;
        const fill = row.querySelector('.skill-fill');
        gsap.fromTo(
          fill,
          { scaleX: 0 },
          {
            scaleX: pct / 100,
            transformOrigin: 'left',
            duration: reduce ? 0.01 : 1.15,
            delay: index * 0.04,
            ease: 'expo.out',
          },
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, [isVisible]);

  return (
    <section className="section skills" id="capabilities" data-toc data-toc-title="[ 04 - CAPABILITIES ]" data-toc-depth="2" ref={containerRef}>
      <h2 className="section-label" data-toc-ignore>[ 03 - CAPABILITIES ]</h2>
      <div className="skills-layout">
        <div className="skills-panel">
          {skills.map(([name, pct]) => (
            <div className="skill-row" data-pct={pct} key={name}>
              <span>{name}</span>
              <div className="skill-bar"><i className="skill-fill" /></div>
              <b>{pct}%</b>
            </div>
          ))}
        </div>
        {preloaderDone && isVisible ? (
          <Suspense fallback={<div className="capability-chart" style={{ height: 280 }} />}>
            <PointsChart
              title="Capability curve"
              data={skillChartData}
              height={280}
              levels={[{ value: 80, color: 'var(--accent-gold)' }]}
              className="capability-chart"
            />
          </Suspense>
        ) : (
          <div className="capability-chart" style={{ height: 280 }} />
        )}
      </div>
      <div className="tools-cloud">
        {['ComfyUI', 'FFmpeg', 'TFLite', 'Qwen / llama.cpp', 'Piper TTS', 'Git / GitHub', 'Supabase', 'NVENC GPU Encoding', 'Stable Diffusion', 'ChromaDB', 'Whisper STT'].map((tool) => <span key={tool}>{tool}</span>)}
      </div>
      <div className="skill-buttons">
        {['Prompt Systems', 'AI Video', 'Offline Apps'].map((label, index) => (
          <LiquidGlassMagneticButton key={label} variant={index === 0 ? 'purple' : index === 1 ? 'blue' : 'pink'} size="sm" onClick={() => navigateTo('#contact')}>
            {label}
          </LiquidGlassMagneticButton>
        ))}
      </div>
    </section>
  );
}

function AIBotShowcase() {
  return (
    <section className="ai-bot-section" id="ai-bots" data-toc data-toc-title="[ 05 - AI & BOTS ]" data-toc-depth="2">
      <ContainerScroll className="ai-scroll">
        <ContainerSticky className="ai-sticky">
          <AnimatedTextPath
            className="ai-orbit"
            text="AUTONOMOUS AI BOTS - LOCAL LLM PIPELINES - TOOL CALLS - VIDEO AGENTS - "
            duration={20}
            fontSize="8px"
            rotation={28}
          />
          <ContainerAnimated className="ai-intro">
            <h2 className="section-label" data-toc-ignore>[ 04 - AI & BOTS ]</h2>
            <EditorialTextReveal text="AI BOT SYSTEMS" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase mb-4" />
            <p>
              I build autonomous AI bots and WhatsApp agents for Indian businesses. These systems plan tasks, call tools, generate media, move files, and run locally when privacy matters.
            </p>
          </ContainerAnimated>

          <ContainerInset className="ai-video-frame">
            <HeroVideo
              src="https://videos.pexels.com/video-files/8566672/8566672-uhd_2560_1440_30fps.mp4"
              data-src="https://videos.pexels.com/video-files/8566672/8566672-uhd_2560_1440_30fps.mp4"
            />
          </ContainerInset>

          <ContainerAnimated
            transition={{ delay: 0.25 }}
            outputRange={[-80, 0]}
            inputRange={[0, 0.7]}
            className="ai-bottom"
          >
            <div className="ai-points" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2rem', textAlign: 'left' }}>
              {[
                ['01', 'WhatsApp Bots for All Businesses: Qualify leads, book appointments, and capture inquiries 24/7 for clinics, gyms, consultants, car sales, and cleaning services.'],
                ['02', 'Day 1 Google Indexing & Fast Ranking: Direct search engine API integrations for real-time crawler updates and structured schema injection.'],
                ['03', 'Sleek App-like Web Development: Progressive Web Apps (PWAs) with hardware-accelerated animations and offline-first database synchronization.'],
                ['04', 'Faceless Media & Marketing Automation: Automated video creation pipelines (Rumble, YouTube Shorts, Reels) using FFmpeg to scale traffic cheaper than traditional ads.'],
              ].map(([no, body]) => (
                <div key={no} className="ai-point-card">
                  <span className="ai-point-no">{no}</span>
                  <p className="ai-point-text">{body}</p>
                </div>
              ))}
            </div>
            <HeroButton className="ai-hero-button" onClick={() => navigateTo('#contact')}>
              Build an AI Bot <MoveRight size={16} />
            </HeroButton>
          </ContainerAnimated>
        </ContainerSticky>
      </ContainerScroll>
    </section>
  );
}

function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      q: "What specialized services does Gurdharam Jeet Singh offer?",
      a: "I build production-ready systems: custom WhatsApp Business automation bots (official Meta Cloud API), automated YouTube/Instagram content generation pipelines, high-end 3D/2D React websites (Three.js/GSAP), and offline-first mobile apps (Flutter + TFLite machine learning)."
    },
    {
      q: "Why should my business choose a custom WhatsApp bot over monthly SaaS platforms?",
      a: "Standard SaaS subscriptions (like WATI or AiSensy) charge heavy monthly platform fees (₹3,000–₹12,000/mo) and lock your phone number. I build custom, direct integrations to the official Meta Cloud API. You pay zero reseller markups, retain 100% of your customer data on your own servers, and utilize custom NLP trained for English, Hindi, and Punjabi."
    },
    {
      q: "How do your websites load so quickly and rank on Google?",
      a: "No slow WordPress templates or rigid builders. I write custom, lightweight React code compiled via Vite. We pre-render every page statically (SSG) so search engine crawlers can read the text without executing JS. We include JSON-LD schemas and push routes instantly to IndexNow (Bing/Yandex) and GSC Indexing APIs."
    },
    {
      q: "Can your mobile applications run AI models and databases completely offline?",
      a: "Yes. In rural or weak signal areas of Punjab, cloud-reliant apps fail. I design offline-first mobile apps using Flutter. Your SQLite database is fully local, and machine learning models (like TensorFlow Lite image classifiers) run directly in the phone's processor. Zero cloud database latency and zero server costs."
    }
  ];

  return (
    <section className="faq-panel" id="faqs" data-toc data-toc-title="[ 06 - FAQS ]" data-toc-depth="2">
      <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <span style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem', textAlign: 'center' }}>
          [ Frequently Asked Questions ]
        </span>
        <h2 className="faq-title">
          HAVE QUESTIONS?
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="faq-item-card"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  <h3 style={{ fontSize: 'clamp(0.95rem, 3.8vw, 1.1rem)', color: '#fff', margin: 0, fontWeight: 700, flexGrow: 1, textAlign: 'left' }}>{item.q}</h3>
                  <span style={{ color: 'var(--accent-gold)', fontSize: '1.25rem', fontWeight: 'bold' }}>{isOpen ? '−' : '+'}</span>
                </div>
                {isOpen && (
                  <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: '1.6', margin: '1rem 0 0 0', textAlign: 'left' }}>
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="quote-panel">
      <ImageParticleField src={quoteParticleImage} density={8} opacity={0.36} />
      <Sparkles size={34} />
      <blockquote data-split>They engineer <span>usable intelligence</span> that scales businesses.</blockquote>
      <cite>- CLIENT, INTERNATIONAL ENTERPRISE PROJECT</cite>
    </section>
  );
}

function Contact() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ['AI BOTS.', 'MOBILE APPS.', 'WEBSITES.', 'OFFLINE AI.', 'AUTOMATION.'], []);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const timeoutId = window.setTimeout(() => {
      setTitleNumber((current) => (current === titles.length - 1 ? 0 : current + 1));
    }, 3300);
    return () => window.clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="contact" id="contact" data-toc data-toc-title="[ 07 - CONTACT ]" data-toc-depth="2">
      <ParticleAnimation className="contact-particles" />
      <h2 className="contact-word" aria-label={`Let's build ${titles[titleNumber].replace('.', '').toLowerCase()}`}>
        <span>LET'S BUILD</span>
        <span className="contact-rotator" aria-hidden="true">
          {titles.map((title, index) => (
            <motion.span
              key={title}
              className="contact-rotator-item"
              initial={{ opacity: 0, y: '-100%' }}
              transition={{ type: 'spring', stiffness: 54, damping: 16 }}
              animate={
                titleNumber === index
                  ? { y: 0, opacity: 1 }
                  : { y: titleNumber > index ? '-140%' : '140%', opacity: 0 }
              }
            >
              {title}
            </motion.span>
          ))}
        </span>
      </h2>
      <div className="contact-grid">
        <p>
          Need <Mark>usable intelligence</Mark>?<br />
          Talk about an AI system, website, app, or automation.
        </p>
        <div className="contact-cta">
          <motion.div
            className="contact-cta-title"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            aria-label="Let's start a project"
          >
            {["Let's", 'start', 'a', 'project'].map((word) => (
              <motion.span
                key={word}
                variants={{
                  hidden: { y: 18, opacity: 0, filter: 'blur(8px)' },
                  show: { y: 0, opacity: 1, filter: 'blur(0px)' },
                }}
                transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
                aria-hidden="true"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
          <SendButton className="contact-talk-button" label="Talk" onClick={() => navigateTo('mailto:gurination1@gmail.com')} />
          <p className="availability"><i />AVAILABLE NOW - INDIA / WORLDWIDE</p>
        </div>
      </div>
      <Footer />
    </section>
  );
}

function useProgressiveStages(start: boolean) {
  const [stage, setStage] = useState(() => {
    if (typeof window === 'undefined') return 4;
    const isBot = /bot|googlebot|bingbot|crawler|spider|robot|crawling|lighthouse|headless|prerender|bytespider/i.test(navigator.userAgent);
    const hasHash = Boolean(window.location.hash);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return (isBot || hasHash || reduce) ? 4 : 0;
  });

  useEffect(() => {
    if (!start || stage >= 4) return;
    let cancelled = false;

    const advance = (nextStage: number) => {
      if (cancelled) return;
      React.startTransition(() => {
        setStage((curr) => Math.max(curr, nextStage));
      });
      if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => {
          try {
            ScrollTrigger.refresh();
          } catch (_) {}
        });
      } else {
        setTimeout(() => {
          try {
            ScrollTrigger.refresh();
          } catch (_) {}
        }, 120);
      }
    };

    // Paced background schedule — leaves main thread 100% idle during hero entrance
    const timers = [
      setTimeout(() => advance(1), 350),
      setTimeout(() => advance(2), 1200),
      setTimeout(() => advance(3), 2200),
      setTimeout(() => advance(4), 3200),
    ];

    // Responsive scroll promotion: if user scrolls before timers fire, mount ahead of viewport
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      if (y > 40 && stage < 1) advance(1);
      if (y > 350 && stage < 2) advance(2);
      if (y > 900 && stage < 3) advance(3);
      if (y > 1600 && stage < 4) advance(4);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      window.removeEventListener('scroll', onScroll);
    };
  }, [start, stage]);

  return stage;
}

function App() {
  const [preloaderDone, setPreloaderDone] = useState(() => {
    if (typeof window === 'undefined') return true;
    const isBot = /bot|googlebot|bingbot|crawler|spider|robot|crawling|lighthouse|headless|prerender|bytespider/i.test(navigator.userAgent);
    const hasHash = Boolean(window.location.hash);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return isBot || hasHash || reduce;
  });

  const handlePreloaderDone = React.useCallback(() => {
    setPreloaderDone(true);
  }, []);

  const stage = useProgressiveStages(preloaderDone);

  usePortfolioMotion(handlePreloaderDone);
  useGlobalPointerVars();
  useCardSpotlight(preloaderDone);
  useMagnetic(preloaderDone);

  return (
    <>
      <div className="daylight-aurora-bg" aria-hidden="true" />
      <Preloader />
      <div className="grain" aria-hidden="true" />
      <WipeMenu />
      <DynamicIslandTOC selector="[data-toc]" preloaderDone={preloaderDone} />
      <main>
        <Hero preloaderDone={preloaderDone} />
        <TechLogoMarquee />
        {stage >= 1 && <About />}
        {stage >= 2 && (
          <>
            <PortfolioStory />
            <Projects />
          </>
        )}
        {stage >= 3 && (
          <>
            <Skills preloaderDone={preloaderDone} />
            <AIBotShowcase />
          </>
        )}
        {stage >= 4 && (
          <>
            <TextRevealFAQs />
            <Quote />
            <Contact />
          </>
        )}
      </main>
    </>
  );
}

export default App;
