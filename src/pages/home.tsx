// @ts-nocheck
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertTriangle, ArrowUpRight, Bot, BrainCircuit, Code2, Cpu, HeartPulse, Mail, MessageCircle, MoveRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Lenis from 'lenis';
import VanillaTilt from 'vanilla-tilt';
import { SplineScene } from '@/components/ui/splite';
import { Spotlight } from '@/components/ui/spotlight';
import FlowArt, { FlowSection } from '@/components/ui/story-scroll';
import { PointsChart } from '@/components/ui/points-chart';
import { LiquidGlassMagneticButton } from '@/components/ui/liquidglassmagneticbutton';
import { DynamicIslandTOC } from '@/components/ui/dynamic-island-toc';
import { FluidTextMorph } from '@/components/ui/fluid-text-morph';
import FlipTextReveal from '@/components/ui/next-reveal';
import SendButton from '@/components/ui/send-button';
import ImageParticleField from '@/components/ui/image-particle-field';
import ParticleAnimation from '@/components/ui/particle-animation';
import { Cursor as InvertedCursor } from '@/components/ui/inverted-cursor';
import { StackedCards } from '@/components/ui/glass-cards';
import { VelocityText, VelocityTextProvider } from '@/components/ui/parallax-scrolling-text-effect';
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

const portfolioAssets = import.meta.glob('/public/assets/portfolio/*', {
  eager: true,
  query: '?url',
  import: 'default',
});

const assetList = Object.values(portfolioAssets);

function pickAsset(...needles) {
  const lowered = needles.map((needle) => needle.toLowerCase());
  const found = assetList.find((asset) => {
    const normalizedAsset = decodeURIComponent(String(asset)).toLowerCase();
    return lowered.some((needle) => normalizedAsset.includes(needle));
  });
  if (found && typeof found === 'string') {
    return found.replace(/^\/public/, '');
  }
  return found;
}

const personImage = pickAsset('styling', 'person', 'me', 'gurdharam', 'jeet', 'singh', 'profile', 'photo');
const secondPageImage = pickAsset('2nd page', 'second page');
const quoteParticleImage = pickAsset('quote-particle-source');
const fallbackSecondPageImage = 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80';

const projects = [
  {
    id: 'videogen',
    no: '01',
    titleA: 'VIDEO',
    titleB: 'GEN',
    year: '2024-2025',
    type: 'AI / PYTHON / LOCAL',
    desc: <>Local AI video generation from one prompt: script, visuals, narration, and MP4 output. <strong className="charming-word">Zero cloud</strong>.</>,
    tags: ['Python', 'ComfyUI', 'FFmpeg', 'LLM'],
    image: pickAsset('videogen', 'video', 'gen'),
    href: 'https://github.com/gurination1/Videogen',
    icon: <Bot size={28} />,
    deck: ['QWEN', 'COMFY', 'PIPER'],
    telemetry: ['LOCAL GPU', 'NO API KEYS', 'MP4 OUTPUT'],
    color: 'rgba(91, 143, 212, 0.82)',
  },
  {
    id: 'doodhisaab',
    no: '02',
    titleA: 'DOODH',
    titleB: 'ISAAB',
    year: '2024',
    type: 'FLUTTER / MOBILE APP / BUSINESS',
    desc: <>A <strong className="charming-word">phone-first</strong> milk business ledger for deliveries, customer accounts, and monthly profit. Crafted specifically for the vibrant Indian market.</>,
    tags: ['Flutter', 'Dart', 'SQLite', 'Offline-first'],
    image: pickAsset('doodhisaab', 'doodhi'),
    status: 'IN DEVELOPMENT - PLAY STORE SOON',
    icon: <Code2 size={28} />,
    deck: ['LEDGER', 'ROUTES', 'PROFIT'],
    telemetry: ['OFFLINE DB', 'LOW-LITERACY UI', 'PLAY STORE'],
    color: 'rgba(212, 168, 83, 0.82)',
  },
  {
    id: 'fasaldoctor',
    no: '03',
    titleA: 'FASAL',
    titleB: 'DOCTOR',
    year: '2024-2025',
    type: 'FLUTTER / OFFLINE AI / COMPUTER VISION',
    desc: <>Point your camera at a sick crop and get an <strong className="charming-word">instant offline diagnosis</strong>. Built for remote fields where 4G is just a myth.</>,
    tags: ['Flutter', 'TFLite', 'Offline AI', 'Computer Vision'],
    image: pickAsset('fasal', 'doctor'),
    icon: <BrainCircuit size={28} />,
    deck: ['CAMERA', 'TFLITE', 'ACTION'],
    telemetry: ['13 CLASSES', 'NO 4G', 'PUNJAB FIELD'],
    color: 'rgba(74, 222, 128, 0.72)',
  },
  {
    id: 'aiinterviewer',
    no: '04',
    titleA: 'AI',
    titleB: 'INTERVIEWER',
    year: '2026',
    type: 'LOCAL AI / VOICE / PYTHON',
    desc: <>A <strong className="charming-word">hyper-local</strong> voice interview agent that asks, listens, transcribes, speaks, and neatly saves structured transcripts.</>,
    tags: ['Python', 'Qwen2.5', 'Whisper', 'Piper TTS', 'Voice AI'],
    image: pickAsset('aiinterviewer', 'interviewer'),
    href: 'https://github.com/gurination1/TakeMyInterview-Ai',
    icon: <Mail size={28} />,
    deck: ['VOICE', 'QWEN', 'VAD'],
    telemetry: ['LOCAL GPU', 'NO INTERNET', 'JSON TRANSCRIPTS'],
    color: 'rgba(232, 192, 112, 0.82)',
  },
  {
    id: 'manymore',
    no: '05',
    titleA: 'MANY',
    titleB: 'MORE',
    year: 'ONGOING',
    type: 'WEB / AI / DASHBOARDS / DOCS',
    desc: <>Exquisite websites, dynamic dashboards, and <strong className="charming-word">client-ready</strong> product systems powered by robust AI training workflows.</>,
    tags: ['Website', 'Web Design', 'Dashboard', 'Documentation', 'AI Training', 'AI Optimisation'],
    image: pickAsset('last 2nd slide', 'slide'),
    status: 'MANY MORE REAL WORLD PROJECTS',
    icon: <Sparkles size={28} />,
    deck: ['WEB', 'DOCS', 'AI OPS'],
    telemetry: ['CLIENT WORK', 'DASHBOARDS', 'REAL SYSTEMS'],
    color: 'rgba(240, 237, 230, 0.66)',
  },
];

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

function usePortfolioMotion() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.documentElement.classList.toggle('reduce-motion', reduce);

    const lenis = reduce
      ? null
      : new Lenis({
          duration: 1.05,
          easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
          smoothWheel: true,
        });

    if (lenis) {
      (window as any).lenis = lenis;
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }

    const ctx = gsap.context(() => {
      if (!reduce) {
        const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
        tl.to('.loader-count', {
          textContent: 100,
          duration: 1.1,
          snap: { textContent: 1 },
          onUpdate() {
            const el = document.querySelector('.loader-count');
            el.textContent = String(Math.round(Number(el.textContent))).padStart(3, '0');
          },
        })
          .from('.loader-mark path', { strokeDashoffset: 260, duration: 0.7, stagger: 0.1 }, '-=0.35')
          .from('.loader-name span', { yPercent: 110, duration: 0.55, stagger: 0.03 }, '-=0.3')
          .to('.preloader', { yPercent: -100, duration: 0.85, ease: 'expo.inOut' });

        gsap.from('.hero-word', {
          yPercent: 112,
          duration: 1,
          stagger: 0.1,
          ease: 'expo.out',
          delay: 2.0,
        });
        gsap.from('.hero-meta, .hero-copy, .hero-actions', {
          y: 24,
          opacity: 0,
          stagger: 0.08,
          duration: 0.75,
          delay: 2.2,
        });
      } else {
        gsap.set('.preloader', { display: 'none' });
      }

      document.querySelectorAll('[data-split]').forEach((el) => {
        const split = new SplitType(el, { types: 'words' });
        gsap.from(split.words, {
          scrollTrigger: { trigger: el, start: 'top 78%' },
          y: 16,
          opacity: 0,
          stagger: 0.025,
          duration: reduce ? 0.01 : 0.55,
          ease: 'power3.out',
        });
      });

      gsap.utils.toArray('.stat-number').forEach((el) => {
        const target = Number(el.dataset.target);
        gsap.to(el, {
          scrollTrigger: { trigger: el, start: 'top 82%', once: true },
          textContent: target,
          snap: { textContent: 1 },
          duration: reduce ? 0.01 : 1.4,
          ease: 'power2.out',
        });
      });

      gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.from(card.querySelectorAll('.mask-tile'), {
          scrollTrigger: { trigger: card, start: 'top 82%', once: true },
          opacity: 0,
          scale: 0.84,
          stagger: { amount: reduce ? 0 : 0.42, from: 'random' },
          duration: reduce ? 0.01 : 0.35,
          ease: 'expo.out',
        });
        if (!reduce && window.matchMedia('(pointer: fine)').matches) {
          VanillaTilt.init(card, { max: 5, speed: 500, glare: true, 'max-glare': 0.12 });
        }
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 16%',
            end: 'bottom top',
            scrub: reduce ? false : 0.8,
          },
          scale: 0.97 - index * 0.006,
          opacity: 0.92,
        });
      });

      gsap.utils.toArray('.skill-row').forEach((row, index) => {
        const pct = row.dataset.pct;
        const fill = row.querySelector('.skill-fill');
        gsap.fromTo(
          fill,
          { scaleX: 0 },
          {
            scaleX: pct / 100,
            transformOrigin: 'left',
            scrollTrigger: { trigger: row, start: 'top 85%', once: true },
            duration: reduce ? 0.01 : 1.15,
            delay: index * 0.05,
            ease: 'expo.out',
          },
        );
      });

      gsap.from('.contact-word > span', {
        scrollTrigger: { trigger: '.contact', start: 'top 70%', once: true },
        yPercent: 110,
        stagger: 0.04,
        duration: reduce ? 0.01 : 0.8,
        ease: 'expo.out',
      });
    });

    return () => {
      ctx.revert();
      lenis?.destroy();
      delete (window as any).lenis;
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}

function useGlobalPointerVars() {
  useEffect(() => {
    // Disabled pointer move CSS variable injection to prevent root layout thrashing
  }, []);
}

function useCustomCursor() {
  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (!finePointer) return undefined;
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    if (!dot || !ring) return undefined;
    let prevX = 0;
    // quickTo reuses the same tween instead of creating new ones per mousemove
    const dotX = gsap.quickTo(dot, 'x', { duration: 0.06 });
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.06 });
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'expo.out' });
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'expo.out' });
    const ringSkew = gsap.quickTo(ring, 'skewX', { duration: 0.35, ease: 'expo.out' });
    const move = (event) => {
      if (event.target instanceof Element && event.target.closest('#contact')) {
        document.body.classList.add('native-cursor-active');
        return;
      }
      document.body.classList.remove('native-cursor-active');
      const { clientX: x, clientY: y } = event;
      const skew = Math.max(-18, Math.min(18, (x - prevX) * 0.1));
      dotX(x);
      dotY(y);
      ringX(x);
      ringY(y);
      ringSkew(skew);
      prevX = x;
    };
    const enter = (event) => {
      const state = event.currentTarget.dataset.cursor || 'hover';
      ring.dataset.state = state;
      gsap.to(ring, { scale: state === 'project' ? 3.2 : 1.8, duration: 0.25 });
    };
    const leave = () => {
      ring.dataset.state = '';
      gsap.to(ring, { scale: 1, skewX: 0, duration: 0.35 });
    };
    window.addEventListener('mousemove', move, { passive: true });
    document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', enter, { passive: true });
      el.addEventListener('mouseleave', leave, { passive: true });
    });
    return () => {
      window.removeEventListener('mousemove', move);
      document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, []);
}

function useCardSpotlight() {
  useEffect(() => {
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
  }, []);
}

function useMagnetic() {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return undefined;
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
  }, []);
}

function SignalCanvas() {
  const canvasRef = useRef(null);
  const isIntersecting = useIntersection(canvasRef);
  const isIntersectingRef = useRef(isIntersecting);
  const drawRef = useRef<() => void>(null);

  useEffect(() => {
    isIntersectingRef.current = isIntersecting;
    if (isIntersecting && drawRef.current) {
      drawRef.current();
    }
  }, [isIntersecting]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let frame = 0;
    let raf = 0;
    let running = false;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const pointer = { x: -9999, y: -9999 };
    const particles = Array.from({ length: width < 768 ? 36 : 92 }, (_, index) => ({
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
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const move = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };

    const draw = () => {
      if (!isIntersectingRef.current) {
        running = false;
        return;
      }
      running = true;
      frame += 0.01;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(8,8,8,0.18)';
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p, index) => {
        p.x += p.vx + Math.sin(frame + p.phase) * 0.00003;
        p.y += p.vy + Math.cos(frame + p.phase) * 0.00003;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
        p.x = Math.max(0, Math.min(1, p.x));
        p.y = Math.max(0, Math.min(1, p.y));

        const x = p.x * width;
        const y = p.y * height;
        const pd = Math.hypot(pointer.x - x, pointer.y - y);
        if (pd < 140) {
          p.x -= ((pointer.x - x) / 140) * 0.0012;
          p.y -= ((pointer.y - y) / 140) * 0.0012;
        }

        for (let j = index + 1; j < particles.length; j += 1) {
          const q = particles[j];
          const qx = q.x * width;
          const qy = q.y * height;
          const d = Math.hypot(qx - x, qy - y);
          if (d < 126) {
            ctx.strokeStyle = `rgba(212,168,83,${(1 - d / 126) * 0.13})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(qx, qy);
            ctx.stroke();
          }
        }

        ctx.fillStyle = pd < 120 ? 'rgba(232,192,112,0.92)' : 'rgba(212,168,83,0.42)';
        ctx.beginPath();
        ctx.arc(x, y, pd < 120 ? p.r * 1.8 : p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };

    const startLoop = () => {
      if (!running) {
        draw();
      }
    };
    drawRef.current = startLoop;

    resize();
    startLoop();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', move, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', move);
      drawRef.current = null;
    };
  }, []);

  return <canvas className="signal-canvas" ref={canvasRef} aria-hidden="true" />;
}

function HeroThreeScene() {
  const mountRef = useRef(null);
  const isIntersecting = useIntersection(mountRef);
  const isIntersectingRef = useRef(isIntersecting);
  const animateRef = useRef<() => void>(null);

  useEffect(() => {
    isIntersectingRef.current = isIntersecting;
    if (isIntersecting && animateRef.current) {
      animateRef.current();
    }
  }, [isIntersecting]);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    if (reduce || coarse || !mountRef.current) return undefined;

    const mount = mountRef.current;
    let renderer;
    let starGeometry;
    let core;
    let halo;
    let blueOrbit;
    let stars;
    let raf = 0;
    let disposed = false;
    let running = false;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    const onPointer = (event) => {
      target.x = (event.clientX / width - 0.5) * 0.55;
      target.y = (event.clientY / height - 0.5) * 0.35;
    };
    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      if (!renderer) return;
      renderer.__camera.aspect = width / height;
      renderer.__camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    import('three').then((THREE) => {
      if (disposed || !mount.isConnected) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 100);
      camera.position.set(0, 0, 8);

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
      renderer.__camera = camera;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
      renderer.setSize(width, height);
      mount.appendChild(renderer.domElement);

      const group = new THREE.Group();
      scene.add(group);

      core = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.75, 1),
        new THREE.MeshBasicMaterial({ color: 0xd4a853, wireframe: true, transparent: true, opacity: 0.22 }),
      );
      group.add(core);

      halo = new THREE.Mesh(
        new THREE.TorusGeometry(2.55, 0.012, 12, 160),
        new THREE.MeshBasicMaterial({ color: 0xe8c070, transparent: true, opacity: 0.28 }),
      );
      halo.rotation.x = Math.PI * 0.62;
      group.add(halo);

      blueOrbit = new THREE.Mesh(
        new THREE.TorusGeometry(3.15, 0.008, 12, 160),
        new THREE.MeshBasicMaterial({ color: 0x5b8fd4, transparent: true, opacity: 0.18 }),
      );
      blueOrbit.rotation.y = Math.PI * 0.36;
      group.add(blueOrbit);

      starGeometry = new THREE.BufferGeometry();
      const positions = [];
      for (let i = 0; i < 420; i += 1) {
        positions.push((Math.random() - 0.5) * 16, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10);
      }
      starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      stars = new THREE.Points(
        starGeometry,
        new THREE.PointsMaterial({ color: 0xd4a853, size: 0.018, transparent: true, opacity: 0.42 }),
      );
      scene.add(stars);

      const animate = () => {
        if (disposed) return;
        if (!isIntersectingRef.current) {
          running = false;
          return;
        }
        running = true;
        pointer.x += (target.x - pointer.x) * 0.045;
        pointer.y += (target.y - pointer.y) * 0.045;
        group.rotation.x += 0.0025;
        group.rotation.y += 0.004;
        halo.rotation.z += 0.003;
        blueOrbit.rotation.z -= 0.002;
        stars.rotation.y += 0.0008;
        group.position.x = pointer.x;
        group.position.y = -pointer.y;
        renderer.render(scene, camera);
        raf = requestAnimationFrame(animate);
      };

      const startLoop = () => {
        if (!running) {
          animate();
        }
      };
      animateRef.current = startLoop;

      startLoop();
    });

    window.addEventListener('pointermove', onPointer, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('resize', onResize);
      if (renderer?.domElement?.parentNode === mount) mount.removeChild(renderer.domElement);
      starGeometry?.dispose();
      core?.geometry?.dispose();
      halo?.geometry?.dispose();
      blueOrbit?.geometry?.dispose();
      core?.material?.dispose();
      halo?.material?.dispose();
      blueOrbit?.material?.dispose();
      stars?.material?.dispose();
      renderer?.dispose();
      animateRef.current = null;
    };
  }, []);

  return <div className="hero-three" ref={mountRef} aria-hidden="true" />;
}

const menuLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'AI Bots', href: '#ai-bots' },
  { label: 'Contact', href: '#contact' },
  { label: 'Engineering Blog', href: '/blog' },
  { label: 'Web Developer Punjab', href: '/services/web-developer-muktsar-punjab' },
  { label: 'Offline AI App Dev', href: '/services/offline-ai-app-development' },
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
      gsap.globalTimeline.clear();

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
        <a href="#top" className="site-nav-logo">GJS</a>
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
                  <span className="wipe-menu-link-wrap">
                    <span className="wipe-menu-link-text">{link.label}</span>
                  </span>
                </button>
              </li>
            ))}
            <li><div className="wipe-menu-line" /></li>
          </ul>
          <div className="wipe-menu-footer">
            <span>GURDHARAM JEET SINGH</span>
            <span>AI ENGINEER × DEVELOPER</span>
            <a href="mailto:gurination1@gmail.com">gurination1@gmail.com</a>
          </div>
        </div>
      </div>
    </>
  );
}

function Preloader() {
  return (
    <div className="preloader" aria-hidden="true">
      <div className="loader-grid" />
      <div className="loader-count">000</div>
      <svg className="loader-mark" viewBox="0 0 220 120">
        <path d="M55 35 C32 35 20 53 20 72 C20 95 38 108 62 108 C83 108 98 95 98 74 L98 63 L63 63" />
        <path d="M112 20 L112 105 C112 115 105 119 96 119" />
        <path d="M145 91 C153 103 168 109 184 109 C202 109 213 99 213 85 C213 66 197 62 179 56 C162 50 150 44 150 30 C150 17 162 9 180 9 C193 9 204 14 211 24" />
      </svg>
      <div className="loader-name">
        {'GURDHARAM JEET SINGH'.split('').map((char, index) => (
          <span key={`${char}-${index}`}>{char === ' ' ? '\u00a0' : char}</span>
        ))}
      </div>
      <p className="loader-copy">SIGNAL / SILENCE / SYSTEM ONLINE</p>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <HeroThreeScene />
      <SignalCanvas />
      <div className="hero-meta">
        <span>[ AVAILABLE FOR WORK ]</span>
        <span>INDIA / FREELANCE / WORLDWIDE</span>
      </div>
      <div className="hero-grid">
        <div>
          <h1 className="hero-title" aria-label="Gurdharam Jeet Singh | AI & Web Developer in Punjab">
            <span className="sr-only">Professional Web Developer and AI Engineer in Muktsar & Bathinda, Punjab</span>
            {['GURDHARAM', 'JEET', 'SINGH'].map((word) => (
              <span className="hero-line" key={word}>
                <span className={`hero-word ${word === 'JEET' ? 'gold' : ''}`}>{word}</span>
              </span>
            ))}
          </h1>
          <div className="signal-strip">
            <span>LOCAL AI</span>
            <span>OFFLINE-FIRST APPS</span>
            <span>VIDEO PIPELINES</span>
            <span>CLIENT SYSTEMS</span>
          </div>
          <p className="hero-sub">
            <span>AI ENGINEER</span>
            <b>x</b>
            <span>APP DEVELOPER</span>
            <b>x</b>
            <span>PROMPT ARCHITECT</span>
          </p>
          <FluidTextMorph
            wordPairs={[
              ['WEBSITES', 'LAUNCH'],
              ['AI BOTS', 'AUTOMATE'],
              ['MOBILE APPS', 'SHIP'],
              ['OFFLINE AI', 'DEPLOY'],
            ]}
            className="hero-fluid-text"
            intervalMs={3300}
          />
        </div>
        <aside className="hero-card" data-cursor="hover">
          <div className="hero-spline-shell">
            <Spotlight className="-top-40 left-0 md:left-20 md:-top-24" fill="white" />
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="hero-spline"
            />
          </div>
          <p className="hero-copy">
            I build <Mark>private intelligence</Mark>, websites, offline apps, and client-ready automation that keeps working after the demo.
          </p>
          <div className="hero-actions">
            <LiquidGlassMagneticButton variant="blue" size="sm" onClick={() => navigateTo('#work')}>
              View Work <ArrowUpRight size={15} />
            </LiquidGlassMagneticButton>
            <LiquidGlassMagneticButton variant="talk" size="sm" onClick={() => navigateTo('mailto:gurination1@gmail.com')}>
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
    <section id="story" data-toc data-toc-title="Story" data-toc-depth="2">
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

function Marquee() {
  const row1 = ['COMFYUI', 'TFLITE', 'ON-DEVICE ML', 'PYTHON', 'FLUTTER', 'GSAP', 'REACT', 'LLM PIPELINES', 'AUTONOMOUS AI BOTS', 'FFMPEG', 'COMFYUI', 'TFLITE', 'ON-DEVICE ML'];
  const row2 = ['AVAILABLE GLOBALLY', '1 YR / REAL RESULTS', 'INDIA + INTERNATIONAL CLIENTS', 'OFFLINE AI', 'VIDEO GENERATION', 'CHROME EXTENSIONS', 'CROP DISEASE DETECTION'];
  return (
    <VelocityTextProvider>
      <section className="marquee" aria-label="Capabilities ticker">
        {[row1, row2].map((row, rowIndex) => (
          <div className={`marquee-track ${rowIndex ? 'reverse' : ''}`} key={row.join('-')}>
            {[...row, ...row].map((item, index) => (
              <span className={item.includes('AVAILABLE') ? 'gold' : ''} key={`${item}-${index}`}>
                <VelocityText text={item} />
                <b>/</b>
              </span>
            ))}
          </div>
        ))}
      </section>
    </VelocityTextProvider>
  );
}

function About() {
  const aboutShowcaseImage = secondPageImage || fallbackSecondPageImage;

  return (
    <section
      className="section about has-about-visual"
      id="about"
      style={{ '--about-image': `url("${aboutShowcaseImage}")` }}
    >
      <h2 className="section-label">[ 01 - ABOUT ]</h2>
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
          />
        </PerspectiveContainerScroll>
      </div>
      <div className="about-grid">
        <div className="stats-col">
          {[
            ['1', 'YR', 'HARD EXPERIENCE'],
            ['12', '+', 'PROJECTS SHIPPED'],
            ['8', '+', 'CLIENTS WORLDWIDE'],
          ].map(([target, unit, label]) => (
            <div className="stat" key={label}>
              <strong><span className="stat-number" data-target={target}>0</span><em>{unit}</em></strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="about-copy">
          <p data-split>
            Gurdharam Jeet Singh is an AI Engineer and Web Developer in Punjab specializing in custom web platforms and offline apps. I build <Mark>things that think</Mark>: autonomous AI bots, local video pipelines, and practical apps for real client work.
          </p>
          <div className="chips">
            {['LLM Engineering', 'Prompt Architecture', 'Autonomous AI Bots', 'Website', 'Web Design', 'Dashboard', 'Visual Documentation', 'AI Fine Tuning', 'AI Training', 'AI Optimisation', 'Flutter / Dart', 'Python', 'FFmpeg Pipelines', 'ComfyUI', 'On-Device ML', 'REST APIs'].map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/services/ai-automation" className="btn-primary" style={{ padding: '0.8rem 1.5rem', border: '1px solid var(--accent-gold)', borderRadius: '99px', color: 'var(--accent-gold)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
              AI Automation Services
            </Link>
            <Link to="/services/web-development" className="btn-primary" style={{ padding: '0.8rem 1.5rem', border: '1px solid var(--accent-cold)', borderRadius: '99px', color: 'var(--accent-cold)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
              Web Development Services
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
    <section className="section projects" id="work">
      <h2 className="section-label">[ 02 - WORK ]</h2>
      <StackedCards />
    </section>
  );
}

function Skills() {
  return (
    <section className="section skills">
      <h2 className="section-label">[ 03 - CAPABILITIES ]</h2>
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
        <PointsChart
          title="Capability curve"
          data={skillChartData}
          height={280}
          levels={[{ value: 80, color: 'var(--accent-gold)' }]}
          className="capability-chart"
        />
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
    <section className="ai-bot-section" id="ai-bots" data-toc data-toc-title="AI Bots" data-toc-depth="2">
      <ContainerScroll className="ai-scroll">
        <ContainerSticky
          className="ai-sticky"
          style={{
            background:
              'radial-gradient(42% 42% at 50% 16%, rgba(91, 143, 212, 0.3) 0%, rgba(8, 15, 39, 0.86) 48%, #050505 100%)',
          }}
        >
          <AnimatedTextPath
            className="ai-orbit"
            text="AUTONOMOUS AI BOTS - LOCAL LLM PIPELINES - TOOL CALLS - VIDEO AGENTS - "
            duration={20}
            fontSize="8px"
            rotation={28}
          />
          <ContainerAnimated className="ai-intro">
            <h2 className="section-label">[ 04 - AI & BOTS ]</h2>
            <FlipTextReveal word="AI BOT SYSTEMS" className="ai-flip" showReplay={false} />
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
                <div key={no} style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.08)', paddingLeft: '1rem' }}>
                  <span style={{ display: 'block', color: 'var(--accent-gold)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{no}</span>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', lineHeight: '1.4', margin: 0 }}>{body}</p>
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

function Quote() {
  return (
    <section className="quote-panel">
      <ImageParticleField src={quoteParticleImage} density={8} opacity={0.36} />
      <Sparkles size={34} />
      <blockquote data-split>He engineers <span>intelligence</span> clients can use.</blockquote>
      <cite>- CLIENT, INTERNATIONAL PROJECT</cite>
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
    <section className="contact" id="contact">
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
      <footer>
        <div className="footer-links" style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', marginBottom: '2.5rem', width: '100%', textAlign: 'left' }}>
          <div>
            <h4 style={{ color: 'var(--accent-gold)', marginBottom: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>Specialized AI Solutions</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8rem' }}>
              <li><Link to="/services/whatsapp-bot-dental-clinic" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }} className="hover:text-accent-gold transition-colors">WhatsApp Clinic & Hospital Bot</Link></li>
              <li><Link to="/services/crop-disease-detection-app" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }} className="hover:text-accent-gold transition-colors">Crop Disease Detection AI Developer</Link></li>
              <li><Link to="/services/dairy-management-app-flutter" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }} className="hover:text-accent-gold transition-colors">Dairy Management App (Flutter)</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'var(--accent-cold)', marginBottom: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>Core Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8rem' }}>
              <li><Link to="/services/offline-ai-app-development" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }} className="hover:text-accent-cold transition-colors">Offline AI App Development</Link></li>
              <li><Link to="/services/web-developer-muktsar-punjab" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }} className="hover:text-accent-cold transition-colors">Web Developer Muktsar Punjab</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>Resources</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8rem' }}>
              <li><Link to="/blog" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }} className="hover:text-white transition-colors">Engineering Blog</Link></li>
              <li><Link to="/case-studies/doodhisaab" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }} className="hover:text-white transition-colors">DoodHisaab Case Study</Link></li>
              <li><Link to="/case-studies/fasal-doctor" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }} className="hover:text-white transition-colors">Fasal Doctor Case Study</Link></li>
            </ul>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem', flexWrap: 'wrap', gap: '1rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>
          <span>GURDHARAM JEET SINGH © 2026</span>
          <span>DESIGNED & BUILT BY GJS</span>
        </div>
      </footer>
    </section>
  );
}

function App() {
  usePortfolioMotion();
  useGlobalPointerVars();
  useCardSpotlight();
  useMagnetic();

  return (
    <>
      <Preloader />
      <InvertedCursor size={76} excludeSelector="#contact" />
      <div className="grain" aria-hidden="true" />
      <WipeMenu />
      <DynamicIslandTOC selector=".section-label, [data-toc]" />
      <main>
        <Hero />
        <Marquee />
        <About />
        <PortfolioStory />
        <Projects />
        <Skills />
        <AIBotShowcase />
        <Quote />
        <Contact />
      </main>
    </>
  );
}

export default App;
