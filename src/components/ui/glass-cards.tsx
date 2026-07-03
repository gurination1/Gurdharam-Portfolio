import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cardData } from '../../lib/utils';
import { Leaf, Milk, GitBranch, ExternalLink, Sparkles, Globe, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Floating, { FloatingElement } from './parallax-floating';
import { FlipCard, FlipCardFront, FlipCardBack } from './flip-card';
const VRDashboard = React.lazy(() => import('./vr-dashboard'));

gsap.registerPlugin(ScrollTrigger);

interface CardProps {
  id: number; title: string; description: string;
  index: number; totalCards: number; color: string; cardType?: string;
}

/* ━━━ CARD 1 — VideoGen: Full-bleed parallax + centered title ━━━ */
const vgImgs = [
  '/assets/portfolio/videogen-demo-1.jpg',
  '/assets/portfolio/videogen-demo-2.jpg',
  '/assets/portfolio/videogen-demo-3.jpg',
  '/assets/portfolio/videogen-demo-4.jpg',
  '/assets/portfolio/videogen-demo-5.jpg',
];

function VideoGenFullCard() {
  return (
    <div style={{ position: 'absolute', inset: 0, borderRadius: '24px', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(145deg, #080e1a, #0a0f1e, #060a14)' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        <Floating sensitivity={-0.7} easingFactor={0.05} className="overflow-hidden rounded-3xl">
          <FloatingElement depth={0.5} className="top-[2%] left-[3%]">
            <img src={vgImgs[0]} alt="VideoGen offline video generation dashboard showing video frames" style={{ width: 180, height: 130, objectFit: 'cover', borderRadius: 14, boxShadow: '0 12px 40px rgba(0,0,0,0.6)', border: '1px solid rgba(91,143,212,0.15)', opacity: 0.9 }} />
          </FloatingElement>
          <FloatingElement depth={1.8} className="top-[5%] left-[58%]">
            <img src={vgImgs[1]} alt="VideoGen AI image model generation settings screen" style={{ width: 200, height: 140, objectFit: 'cover', borderRadius: 14, boxShadow: '0 16px 48px rgba(0,0,0,0.65)', border: '1px solid rgba(91,143,212,0.12)', opacity: 0.92 }} />
          </FloatingElement>
          <FloatingElement depth={2.2} className="top-[42%] left-[2%]">
            <img src={vgImgs[2]} alt="VideoGen batch video editing pipeline configuration" style={{ width: 170, height: 125, objectFit: 'cover', borderRadius: 14, boxShadow: '0 16px 48px rgba(0,0,0,0.65)', border: '1px solid rgba(91,143,212,0.18)', opacity: 0.88 }} />
          </FloatingElement>
          <FloatingElement depth={0.9} className="top-[58%] left-[62%]">
            <img src={vgImgs[3]} alt="VideoGen autonomous video scripting editor" style={{ width: 160, height: 115, objectFit: 'cover', borderRadius: 12, boxShadow: '0 12px 36px rgba(0,0,0,0.55)', opacity: 0.85 }} />
          </FloatingElement>
          <FloatingElement depth={1.4} className="top-[76%] left-[22%]">
            <img src={vgImgs[4]} alt="VideoGen real-time rendering statistics panel" style={{ width: 190, height: 135, objectFit: 'cover', borderRadius: 14, boxShadow: '0 14px 42px rgba(0,0,0,0.6)', opacity: 0.9 }} />
          </FloatingElement>
        </Floating>
      </div>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 350, height: 350, background: 'radial-gradient(circle, rgba(91,143,212,0.12), transparent 65%)', pointerEvents: 'none', zIndex: 1 }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 3, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem', pointerEvents: 'none' }}>
        <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', letterSpacing: '0.25em',
          color: 'rgba(91,143,212,0.7)', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 12 }}>Project 01</span>
        <h2 style={{ fontSize: '2.6rem', fontWeight: 900, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.03em',
          maxWidth: 500, textShadow: '0 4px 30px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.6)' }}>
          Video<span style={{ color: 'rgba(91,143,212,0.95)' }}>Gen</span>
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginTop: 10, maxWidth: 360, lineHeight: 1.5,
          textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>
          <span style={{ color: 'rgba(91,143,212,0.9)', fontWeight: 700 }}>Offline</span> video & image generation.{' '}
          <span style={{ color: 'rgba(91,143,212,0.9)', fontWeight: 700 }}>Built from scratch</span>.
        </p>
        <a href="https://github.com/gdharam94" target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 18px', borderRadius: 10, marginTop: 16,
            background: 'rgba(91,143,212,0.1)', border: '1px solid rgba(91,143,212,0.25)', backdropFilter: 'blur(12px)',
            color: '#5b8fd4', fontSize: '0.78rem', fontWeight: 600, textDecoration: 'none', pointerEvents: 'auto' }}>
          <GitBranch size={13} /> GitHub <ExternalLink size={11} />
        </a>
      </div>
    </div>
  );
}

/* ━━━ CARD 2 — Cow Video + Glassmorphic FlipCards ━━━ */

/* Glass styles go on INNER divs, NOT on FlipCardFront/FlipCardBack props.
   The FlipCard component spreads {...props} AFTER style, so passing style={}
   to Front/Back overwrites backfaceVisibility and breaks the flip. */
const GLASS: React.CSSProperties = {
  background: 'rgba(255,255,255,0.07)',
  backdropFilter: 'blur(20px) saturate(150%)',
  WebkitBackdropFilter: 'blur(20px) saturate(150%)',
  border: '1px solid rgba(255,255,255,0.14)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.18)',
  borderRadius: 16,
  width: '100%', height: '100%',
  overflow: 'hidden',
};

function CowAppsFullCard() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => { setHovered(true); videoRef.current?.play(); }}
      onMouseLeave={() => { setHovered(false); videoRef.current?.pause(); }}
      style={{ position: 'absolute', inset: 0, borderRadius: '24px', overflow: 'hidden' }}
    >
      <video ref={videoRef} src="/assets/portfolio/cow-video.mp4" muted loop playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
          filter: hovered ? 'brightness(0.8)' : 'grayscale(1) brightness(0.4)', transition: 'filter 0.6s ease' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.35), rgba(0,0,0,0.15))', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 2, width: '100%', height: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 2rem', gap: '1.5rem',
        flexWrap: 'wrap', overflow: 'hidden', boxSizing: 'border-box' }}>

        {/* Left: title */}
        <div style={{ flex: '1 1 180px', maxWidth: 280, minWidth: 140, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span style={{ fontFamily: 'monospace', fontSize: '0.8rem', letterSpacing: '0.2em',
            color: 'rgba(74,222,128,0.85)', fontWeight: 'bold', textTransform: 'uppercase' }}>Project 02</span>
          <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#fff', lineHeight: 1.1,
            textShadow: '0 3px 20px rgba(0,0,0,0.7)' }}>
            <span style={{ color: 'rgba(74,222,128,0.9)' }}>Rural</span> Tech Apps
          </h2>
          <p style={{ fontSize: '0.85rem', opacity: 0.8, lineHeight: 1.5, color: '#f0ede6',
            textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
            Two field-ready apps. Hover each card ↻
          </p>
        </div>

        {/* Right: Two FlipCards */}
        <div style={{ flex: '1 1 300px', display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'center', flexShrink: 1 }}>

          {/* ── DoodHisaab ── */}
          {/* NO style prop on FlipCard faces — glass on inner div */}
          <FlipCard className="relative w-[160px] h-[240px]">
            <FlipCardFront className="rounded-2xl">
              <div style={GLASS}>
                <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center', gap: 14, padding: 20 }}>
                  <img src="/assets/portfolio/doodhisaab-logo.png" alt="DoodHisaab"
                    style={{ width: 68, height: 68, objectFit: 'contain', borderRadius: 16, boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }} />
                  <h3 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 700 }}>DoodHisaab</h3>
                  <span style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    ↻ Hover to explore
                  </span>
                </div>
              </div>
            </FlipCardFront>
            <FlipCardBack className="rounded-2xl">
              <div style={GLASS}>
                <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ flex: '1 1 58%', overflow: 'hidden', borderRadius: '16px 16px 0 0' }}>
                    <img src="/assets/portfolio/doodhisaab-screenshot.jpg" alt="DoodHisaab App"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                  </div>
                  <div style={{ flex: '0 0 auto', padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <Milk size={13} color="#d4a853" />
                      <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 700 }}>DoodHisaab</span>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.62rem', lineHeight: 1.4 }}>
                      <span style={{ color: '#d4a853', fontWeight: 600 }}>Milk ledger</span> — deliveries, accounts & profit.
                    </p>
                    <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                      {['Flutter', 'SQLite', 'Offline'].map(t => (
                        <span key={t} style={{ fontSize: '0.5rem', padding: '1px 6px', borderRadius: 4,
                          background: 'rgba(212,168,83,0.12)', color: '#d4a853', border: '1px solid rgba(212,168,83,0.2)' }}>{t}</span>
                      ))}
                    </div>
                    <Link to="/case-studies/doodhisaab" style={{ marginTop: 8, fontSize: '0.65rem', color: '#d4a853', display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none' }}>
                      Read Case Study <ArrowRight size={10} />
                    </Link>
                  </div>
                </div>
              </div>
            </FlipCardBack>
          </FlipCard>

          {/* ── Fasal Doctor ── */}
          <FlipCard className="relative w-[160px] h-[240px]">
            <FlipCardFront className="rounded-2xl">
              <div style={GLASS}>
                <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center', gap: 14, padding: 20 }}>
                  <img src="/assets/portfolio/fasal-doctor-logo.png" alt="Fasal Doctor"
                    style={{ width: 68, height: 68, objectFit: 'contain', borderRadius: 16, boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }} />
                  <h3 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 700 }}>Fasal Doctor</h3>
                  <span style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    ↻ Hover to explore
                  </span>
                </div>
              </div>
            </FlipCardFront>
            <FlipCardBack className="rounded-2xl">
              <div style={GLASS}>
                <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ flex: '1 1 58%', overflow: 'hidden', borderRadius: '16px 16px 0 0' }}>
                    <img src="/assets/portfolio/fasal-doctor-screenshot.png" alt="Fasal Doctor App"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                  </div>
                  <div style={{ flex: '0 0 auto', padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <Leaf size={13} color="#4ade80" />
                      <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 700 }}>Fasal Doctor</span>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.62rem', lineHeight: 1.4 }}>
                      <span style={{ color: '#4ade80', fontWeight: 600 }}>Offline AI</span> crop scan — point, diagnose, treat.
                    </p>
                    <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                      {['TFLite', 'Camera', 'Offline AI'].map(t => (
                        <span key={t} style={{ fontSize: '0.5rem', padding: '1px 6px', borderRadius: 4,
                          background: 'rgba(74,222,128,0.12)', color: '#4ade80', border: '1px solid rgba(74,222,128,0.2)' }}>{t}</span>
                      ))}
                    </div>
                    <Link to="/case-studies/fasal-doctor" style={{ marginTop: 8, fontSize: '0.65rem', color: '#4ade80', display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none' }}>
                      Read Case Study <ArrowRight size={10} />
                    </Link>
                  </div>
                </div>
              </div>
            </FlipCardBack>
          </FlipCard>

        </div>
      </div>
    </div>
  );
}

/* ━━━ CARD 3 — VR Dashboard: Full card, uses the EXACT user-provided component ━━━ */
function VRDashboardFullCard() {
  return (
    <div style={{
      position: 'absolute', inset: 0, borderRadius: '24px', overflow: 'hidden',
      transform: 'scale(1)', /* containment */
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        transform: 'scale(0.42)',
        transformOrigin: 'top left',
        width: '238%', height: '238%',
        overflow: 'hidden',
        borderRadius: '24px',
      }}>
        <React.Suspense fallback={<div style={{ width: '100%', height: '100%', background: '#020c18' }} />}>
          <VRDashboard />
        </React.Suspense>
      </div>
      {/* Gradient overlay at bottom so the edge fades nicely */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 60,
        background: 'linear-gradient(transparent, rgba(2,12,24,0.9))',
        pointerEvents: 'none', zIndex: 5,
      }} />
    </div>
  );
}

/* ━━━ CARD 4 — Many More ━━━ */
function ManyMoreVisual() {
  const items = [
    { label: 'Websites', icon: <Globe size={20} color="rgba(240,237,230,0.7)" /> },
    { label: 'Dashboards', icon: <BarChart3 size={20} color="rgba(240,237,230,0.7)" /> },
    { label: 'AI Systems', icon: <Sparkles size={20} color="rgba(240,237,230,0.7)" /> },
  ];
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: 18, borderRadius: 16,
      background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ display: 'flex', gap: 24 }}>
        {items.map(item => (
          <div key={item.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(240,237,230,0.06)',
              border: '1px solid rgba(240,237,230,0.1)', display: 'grid', placeItems: 'center' }}>{item.icon}</div>
            <span style={{ fontSize: '0.65rem', color: 'rgba(240,237,230,0.5)', letterSpacing: '0.08em' }}>{item.label}</span>
          </div>
        ))}
      </div>
      <span style={{ fontSize: '0.7rem', color: 'rgba(240,237,230,0.3)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
        + more real-world projects
      </span>
    </div>
  );
}

/* ━━━ CARD COMPONENT — stacking behavior UNCHANGED ━━━ */
const Card: React.FC<CardProps> = ({ id, title, description, index, totalCards, color, cardType }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const container = containerRef.current;
    if (!card || !container) return;
    const targetScale = 1 - (totalCards - index) * 0.05;
    gsap.set(card, { scale: 1, transformOrigin: 'center top' });
    const trigger = ScrollTrigger.create({
      trigger: container, start: 'top center', end: 'bottom center', scrub: 1,
      onUpdate: (self) => {
        const scale = gsap.utils.interpolate(1, targetScale, self.progress);
        gsap.set(card, { scale: Math.max(scale, targetScale), transformOrigin: 'center top' });
      },
    });
    return () => { trigger.kill(); };
  }, [index, totalCards]);

  const isFullBleed = cardType === 'cow-apps' || cardType === 'videogen' || cardType === 'dashboard';

  return (
    <div ref={containerRef} style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'sticky', top: 0 }}>
      <div ref={cardRef} style={{
        position: 'relative', width: '70%', maxWidth: 1000, height: 450,
        borderRadius: 24, isolation: 'isolate',
        top: `calc(-5vh + ${index * 25}px)`, transformOrigin: 'top',
      }} className="card-content">

        {/* Electric border */}
        <div style={{
          position: 'absolute', inset: -3, borderRadius: 27, padding: 3,
          background: `conic-gradient(from 0deg, transparent 0deg, ${color} 60deg, ${color.replace('0.8','0.6').replace('0.66','0.45')} 120deg, transparent 180deg, ${color.replace('0.8','0.4').replace('0.66','0.3')} 240deg, transparent 360deg)`,
          zIndex: -1,
        }} />

        {isFullBleed ? (
          cardType === 'videogen' ? <VideoGenFullCard /> :
          cardType === 'cow-apps' ? <CowAppsFullCard /> :
          <VRDashboardFullCard />
        ) : (
          <div style={{
            position: 'relative', width: '100%', height: '100%',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '2.5rem 3.5rem', borderRadius: 24,
            background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
            backdropFilter: 'blur(25px) saturate(180%)',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '60%',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1) 50%, transparent)',
              pointerEvents: 'none', borderRadius: '24px 24px 0 0' }} />
            <div style={{ flex: 1.1, display: 'flex', flexDirection: 'column', gap: '1.2rem', zIndex: 2, marginRight: '2rem' }}>
              <span style={{ fontFamily: 'monospace', fontSize: '0.85rem', letterSpacing: '0.2em', color, fontWeight: 'bold', textTransform: 'uppercase' }}>
                Project 0{id}
              </span>
              <h2 style={{ fontSize: '2.8rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#fff', lineHeight: 1.1 }}>{title}</h2>
              <p style={{ fontSize: '1.05rem', opacity: 0.82, lineHeight: 1.6, color: '#f0ede6' }}>{description}</p>
            </div>
            <div style={{ flex: 0.9, height: '100%', zIndex: 2, position: 'relative' }}>
              <ManyMoreVisual />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* ━━━ STACKED CARDS CONTAINER — unchanged ━━━ */
export const StackedCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;
    gsap.fromTo(c, { opacity: 0 }, { opacity: 1, duration: 1.2, ease: 'power2.out' });
  }, []);

  return (
    <div ref={containerRef} style={{ background: '#0a0a0a', width: '100%' }}>
      <section style={{ color: '#fff', width: '100%' }}>
        {cardData.map((card, index) => (
          <Card key={card.id} id={card.id} title={card.title} description={card.description}
            index={index} totalCards={cardData.length} color={card.color} cardType={card.cardType} />
        ))}
      </section>
    </div>
  );
};
