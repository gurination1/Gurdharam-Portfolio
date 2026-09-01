import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cardData } from '../../lib/utils';
import { Leaf, Milk, GitBranch, ExternalLink, ArrowRight, ArrowLeft, PhoneCall, Mic, Bot, Play, X, Sparkles, Shield, Cpu, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Floating, { FloatingElement } from './parallax-floating';
import { FlipCard, FlipCardFront, FlipCardBack } from './flip-card';
import { GlassEffect } from './liquid-glass';

gsap.registerPlugin(ScrollTrigger);

interface CardProps {
  id: number;
  title: string;
  description: string;
  index: number;
  totalCards: number;
  color: string;
  cardType?: string;
}

/* ━━━ CARD 1 — Voice AI Calling Agent ━━━ */
function CallingAgentFullCard() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleMouseEnter = () => {
    setHovered(true);
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    setHovered(false);
    videoRef.current?.pause();
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full rounded-[22px] overflow-hidden flex flex-col md:flex-row items-center justify-between p-3.5 sm:p-5 md:p-7 gap-3 sm:gap-4 md:gap-6 box-border"
    >
      <video
        ref={videoRef}
        src="/assets/portfolio/calling-agent-video.mp4"
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{
          filter: hovered ? 'brightness(0.95) saturate(1.08)' : 'brightness(0.78) contrast(1.02)',
          willChange: 'filter',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#080c16]/60 via-[#080c16]/30 to-[#080c16]/65 pointer-events-none" />

      {/* Left Column on Desktop / Top Section on Mobile */}
      <div className="relative z-10 w-full md:max-w-[340px] flex flex-col items-center md:items-start text-center md:text-left gap-1 sm:gap-1.5 flex-shrink-0">
        <span className="font-mono text-[0.66rem] sm:text-[0.76rem] tracking-[0.2em] text-[#f59e0b] font-bold uppercase flex items-center gap-1.5">
          <PhoneCall size={12} className="text-[#f59e0b]" />
          Project 01 · Voice AI
        </span>
        <h2 className="text-[1.25rem] sm:text-[1.75rem] md:text-[2.1rem] font-extrabold text-white leading-[1.12] tracking-tight drop-shadow-md">
          <span className="text-[#f59e0b]">Voice AI</span> Calling Agent
        </h2>
        <p className="text-[0.72rem] sm:text-[0.8rem] md:text-[0.85rem] text-[#f0ede6]/90 leading-snug sm:leading-relaxed max-w-[360px]">
          Sub-300ms turn-taking on real SIP trunks in Punjabi, Hindi & English.
        </p>

        {/* Architecture Specs Pill */}
        <div className="flex flex-wrap justify-center md:justify-start gap-1.5 mt-0.5 sm:mt-1">
          <span className="text-[0.6rem] sm:text-[0.64rem] px-2 py-0.5 rounded-full bg-[#f59e0b]/20 text-[#f59e0b] border border-[#f59e0b]/35 font-mono flex items-center gap-1">
            <Zap size={9} /> &lt;290ms Latency
          </span>
          <span className="text-[0.6rem] sm:text-[0.64rem] px-2 py-0.5 rounded-full bg-white/12 text-white/95 border border-white/25 font-mono flex items-center gap-1">
            <Shield size={9} /> DPDP Safe
          </span>
        </div>

        <div className="flex items-center gap-2 mt-1 sm:mt-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg bg-[#f59e0b] text-[#080808] text-[0.68rem] sm:text-[0.76rem] font-bold shadow-md hover:scale-105 transition-transform cursor-pointer"
          >
            <Play size={10} fill="#080808" /> Play Video
          </button>
          <Link
            to="/services/ai-voice-agents"
            className="inline-flex items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-white/12 border border-white/25 text-white text-[0.68rem] sm:text-[0.76rem] font-semibold hover:bg-white/25 transition-colors"
          >
            Services <ArrowRight size={10} />
          </Link>
        </div>
      </div>

      {/* Right Column on Desktop / Bottom Section on Mobile: Liquid Glass Dual FlipCards */}
      <div className="relative z-10 w-full md:w-auto flex flex-row gap-2.5 sm:gap-3.5 items-center justify-center flex-shrink-0">

        {/* ── FlipCard A: Live SIP Trunks ── */}
        <FlipCard className="relative w-[145px] sm:w-[155px] md:w-[165px] h-[195px] sm:h-[215px] md:h-[235px]">
          <FlipCardFront className="rounded-2xl">
            <GlassEffect className="w-full h-full rounded-2xl">
              <div className="w-full h-full flex flex-col items-center justify-between p-3 text-center">
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-[#f59e0b]/20 border border-[#f59e0b]/35 grid place-items-center shadow-md">
                  <PhoneCall className="w-6 h-6 text-[#f59e0b] drop-shadow-[0_2px_8px_rgba(245,158,11,0.5)]" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-white text-[0.82rem] sm:text-[0.92rem] font-bold leading-tight drop-shadow">Live SIP Trunks</h3>
                  <p className="text-white/80 text-[0.6rem] sm:text-[0.66rem] leading-tight">
                    Real PBX trunks & 8kHz audio
                  </p>
                </div>
                <span className="text-[0.5rem] sm:text-[0.56rem] text-[#f59e0b] tracking-wider uppercase font-mono font-semibold">
                  ↻ Tap to Flip
                </span>
              </div>
            </GlassEffect>
          </FlipCardFront>
          <FlipCardBack className="rounded-2xl">
            <GlassEffect className="w-full h-full rounded-2xl">
              <div className="w-full h-full flex flex-col justify-between p-3 text-left">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <PhoneCall size={11} className="text-[#f59e0b]" />
                    <span className="text-white text-[0.72rem] sm:text-[0.78rem] font-bold truncate">SIP & WebSockets</span>
                  </div>
                  <p className="text-white/85 text-[0.58rem] sm:text-[0.64rem] leading-tight">
                    <span className="text-[#f59e0b] font-semibold">&lt;290ms latency</span> on real PBX lines. Zero jitter.
                  </p>
                  <div className="flex gap-1 flex-wrap mt-0.5">
                    {['SIP', 'VAD', '8kHz'].map(t => (
                      <span key={t} className="text-[0.45rem] sm:text-[0.5rem] px-1.5 py-0.5 rounded bg-[#f59e0b]/20 text-[#f59e0b] border border-[#f59e0b]/25 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to="/services/multilingual-voice-ai-telephony"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[0.6rem] sm:text-[0.66rem] text-[#f59e0b] flex items-center gap-1 font-semibold hover:underline"
                >
                  Specs <ArrowRight size={9} />
                </Link>
              </div>
            </GlassEffect>
          </FlipCardBack>
        </FlipCard>

        {/* ── FlipCard B: Sarvam Indic AI ── */}
        <FlipCard className="relative w-[145px] sm:w-[155px] md:w-[165px] h-[195px] sm:h-[215px] md:h-[235px]">
          <FlipCardFront className="rounded-2xl">
            <GlassEffect className="w-full h-full rounded-2xl">
              <div className="w-full h-full flex flex-col items-center justify-between p-3 text-center">
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-[#f59e0b]/20 border border-[#f59e0b]/35 grid place-items-center shadow-md">
                  <Mic className="w-6 h-6 text-[#f59e0b] drop-shadow-[0_2px_8px_rgba(245,158,11,0.5)]" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-white text-[0.82rem] sm:text-[0.92rem] font-bold leading-tight drop-shadow">Indic Voice AI</h3>
                  <p className="text-white/80 text-[0.6rem] sm:text-[0.66rem] leading-tight">
                    Punjabi & Hindi neural pipeline
                  </p>
                </div>
                <span className="text-[0.5rem] sm:text-[0.56rem] text-[#f59e0b] tracking-wider uppercase font-mono font-semibold">
                  ↻ Tap to Flip
                </span>
              </div>
            </GlassEffect>
          </FlipCardFront>
          <FlipCardBack className="rounded-2xl">
            <GlassEffect className="w-full h-full rounded-2xl">
              <div className="w-full h-full flex flex-col justify-between p-3 text-left">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <Mic size={11} className="text-[#f59e0b]" />
                    <span className="text-white text-[0.72rem] sm:text-[0.78rem] font-bold truncate">Sarvam + Llama</span>
                  </div>
                  <p className="text-white/85 text-[0.58rem] sm:text-[0.64rem] leading-tight">
                    <span className="text-[#f59e0b] font-semibold">Punjabi & Hindi</span> neural recognition. 50ms interruption.
                  </p>
                  <div className="flex gap-1 flex-wrap mt-0.5">
                    {['Saarika', 'Bulbul', 'DPDP'].map(t => (
                      <span key={t} className="text-[0.45rem] sm:text-[0.5rem] px-1.5 py-0.5 rounded bg-[#f59e0b]/20 text-[#f59e0b] border border-[#f59e0b]/25 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to="/case-studies/takemyinterview-ai"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[0.6rem] sm:text-[0.66rem] text-[#f59e0b] flex items-center gap-1 font-semibold hover:underline"
                >
                  Case Study <ArrowRight size={9} />
                </Link>
              </div>
            </GlassEffect>
          </FlipCardBack>
        </FlipCard>

      </div>

      {/* Full-Screen Modal Player */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black/95 backdrop-blur-2xl p-3 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl flex items-center justify-between mb-3"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-white/15 border border-white/30 text-white text-xs sm:text-sm font-bold backdrop-blur-md hover:bg-white/25 transition-colors cursor-pointer"
            >
              <ArrowLeft size={15} /> Back to Overview
            </button>
            <span className="text-[0.72rem] sm:text-xs text-[#f59e0b] font-bold tracking-wider uppercase font-mono truncate max-w-[180px] sm:max-w-none">
              Voice AI Calling Agent Demo
            </span>
            <button
              onClick={() => setIsModalOpen(false)}
              className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/15 border border-white/30 text-white hover:bg-white/25 transition-colors cursor-pointer"
              aria-label="Close video player"
            >
              <X size={18} />
            </button>
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-[#f59e0b]/40 shadow-2xl bg-black"
          >
            <video src="/assets/portfolio/calling-agent-video.mp4" controls autoPlay playsInline className="w-full h-full object-contain" />
          </div>

          <button
            onClick={() => setIsModalOpen(false)}
            className="inline-flex items-center gap-1.5 text-white/70 text-xs mt-3 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft size={13} /> Close video & return to cards (Esc)
          </button>
        </div>
      )}
    </div>
  );
}

/* ━━━ CARD 2 — WhatsApp Business Bot ━━━ */
function WhatsAppBotFullCard() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleMouseEnter = () => {
    setHovered(true);
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    setHovered(false);
    videoRef.current?.pause();
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full rounded-[22px] overflow-hidden flex flex-col md:flex-row items-center justify-between p-3.5 sm:p-5 md:p-7 gap-3 sm:gap-4 md:gap-6 box-border"
    >
      <video
        ref={videoRef}
        src="/assets/portfolio/whatsapp-bot-video.mp4"
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{
          filter: hovered ? 'brightness(0.95) saturate(1.08)' : 'brightness(0.78) contrast(1.02)',
          willChange: 'filter',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#06140c]/60 via-[#06140c]/30 to-[#06140c]/65 pointer-events-none" />

      {/* Left Column on Desktop / Top Section on Mobile */}
      <div className="relative z-10 w-full md:max-w-[340px] flex flex-col items-center md:items-start text-center md:text-left gap-1 sm:gap-1.5 flex-shrink-0">
        <span className="font-mono text-[0.66rem] sm:text-[0.76rem] tracking-[0.2em] text-[#22c55e] font-bold uppercase flex items-center gap-1.5">
          <img src="/assets/portfolio/whatsapp-icon.svg" alt="WhatsApp" className="w-3.5 h-3.5 object-contain" />
          Project 02 · Meta API
        </span>
        <h2 className="text-[1.25rem] sm:text-[1.75rem] md:text-[2.1rem] font-extrabold text-white leading-[1.12] tracking-tight drop-shadow-md">
          <span className="text-[#22c55e]">WhatsApp</span> Business Bot
        </h2>
        <p className="text-[0.72rem] sm:text-[0.8rem] md:text-[0.85rem] text-[#f0ede6]/90 leading-snug sm:leading-relaxed max-w-[360px]">
          Official Meta Cloud API. Zero SaaS markups. Auto-qualifies leads 24/7.
        </p>

        {/* Architecture Specs Pill */}
        <div className="flex flex-wrap justify-center md:justify-start gap-1.5 mt-0.5 sm:mt-1">
          <span className="text-[0.6rem] sm:text-[0.64rem] px-2 py-0.5 rounded-full bg-[#22c55e]/20 text-[#22c55e] border border-[#22c55e]/35 font-mono flex items-center gap-1">
            <Zap size={9} /> ₹0 SaaS Markups
          </span>
          <span className="text-[0.6rem] sm:text-[0.64rem] px-2 py-0.5 rounded-full bg-white/12 text-white/95 border border-white/25 font-mono flex items-center gap-1">
            <Bot size={9} /> 24/7 Lead Qual
          </span>
        </div>

        <div className="flex items-center gap-2 mt-1 sm:mt-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg bg-[#22c55e] text-[#080808] text-[0.68rem] sm:text-[0.76rem] font-bold shadow-md hover:scale-105 transition-transform cursor-pointer"
          >
            <Play size={10} fill="#080808" /> Play Video
          </button>
          <Link
            to="/services/whatsapp-business-bot"
            className="inline-flex items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-white/12 border border-white/25 text-white text-[0.68rem] sm:text-[0.76rem] font-semibold hover:bg-white/25 transition-colors"
          >
            Services <ArrowRight size={10} />
          </Link>
        </div>
      </div>

      {/* Right Column on Desktop / Bottom Section on Mobile: Liquid Glass Dual FlipCards */}
      <div className="relative z-10 w-full md:w-auto flex flex-row gap-2.5 sm:gap-3.5 items-center justify-center flex-shrink-0">

        {/* ── FlipCard A: Real WhatsApp Icon + Direct Meta API ── */}
        <FlipCard className="relative w-[145px] sm:w-[155px] md:w-[165px] h-[195px] sm:h-[215px] md:h-[235px]">
          <FlipCardFront className="rounded-2xl">
            <GlassEffect className="w-full h-full rounded-2xl">
              <div className="w-full h-full flex flex-col items-center justify-between p-3 text-center">
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-[#22c55e]/20 border border-[#22c55e]/35 grid place-items-center shadow-md">
                  <img src="/assets/portfolio/whatsapp-icon.svg" alt="Real WhatsApp" className="w-6 h-6 object-contain drop-shadow-[0_2px_8px_rgba(34,197,94,0.5)]" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-white text-[0.82rem] sm:text-[0.92rem] font-bold leading-tight drop-shadow">Official Meta API</h3>
                  <p className="text-white/80 text-[0.6rem] sm:text-[0.66rem] leading-tight">
                    Direct Cloud API, ₹0 SaaS fees
                  </p>
                </div>
                <span className="text-[0.5rem] sm:text-[0.56rem] text-[#22c55e] tracking-wider uppercase font-mono font-semibold">
                  ↻ Tap to Flip
                </span>
              </div>
            </GlassEffect>
          </FlipCardFront>
          <FlipCardBack className="rounded-2xl">
            <GlassEffect className="w-full h-full rounded-2xl">
              <div className="w-full h-full flex flex-col justify-between p-3 text-left">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <img src="/assets/portfolio/whatsapp-icon.svg" alt="WhatsApp" className="w-3.5 h-3.5 object-contain" />
                    <span className="text-white text-[0.72rem] sm:text-[0.78rem] font-bold truncate">₹0 SaaS Markups</span>
                  </div>
                  <p className="text-white/85 text-[0.58rem] sm:text-[0.64rem] leading-tight">
                    <span className="text-[#22c55e] font-semibold">Save ₹12,000/mo</span>. 1,000 free chats on Cloud API.
                  </p>
                  <div className="flex gap-1 flex-wrap mt-0.5">
                    {['Cloud API', 'Webhooks', 'No SaaS'].map(t => (
                      <span key={t} className="text-[0.45rem] sm:text-[0.5rem] px-1.5 py-0.5 rounded bg-[#22c55e]/20 text-[#22c55e] border border-[#22c55e]/25 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to="/services/whatsapp-business-bot"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[0.6rem] sm:text-[0.66rem] text-[#22c55e] flex items-center gap-1 font-semibold hover:underline"
                >
                  Features <ArrowRight size={9} />
                </Link>
              </div>
            </GlassEffect>
          </FlipCardBack>
        </FlipCard>

        {/* ── FlipCard B: Auto Lead Triage ── */}
        <FlipCard className="relative w-[145px] sm:w-[155px] md:w-[165px] h-[195px] sm:h-[215px] md:h-[235px]">
          <FlipCardFront className="rounded-2xl">
            <GlassEffect className="w-full h-full rounded-2xl">
              <div className="w-full h-full flex flex-col items-center justify-between p-3 text-center">
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-[#22c55e]/20 border border-[#22c55e]/35 grid place-items-center shadow-md">
                  <Bot className="w-6 h-6 text-[#22c55e] drop-shadow-[0_2px_8px_rgba(34,197,94,0.5)]" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-white text-[0.82rem] sm:text-[0.92rem] font-bold leading-tight drop-shadow">Auto Lead Flow</h3>
                  <p className="text-white/80 text-[0.6rem] sm:text-[0.66rem] leading-tight">
                    Booking & instant PDF catalogs
                  </p>
                </div>
                <span className="text-[0.5rem] sm:text-[0.56rem] text-[#22c55e] tracking-wider uppercase font-mono font-semibold">
                  ↻ Tap to Flip
                </span>
              </div>
            </GlassEffect>
          </FlipCardFront>
          <FlipCardBack className="rounded-2xl">
            <GlassEffect className="w-full h-full rounded-2xl">
              <div className="w-full h-full flex flex-col justify-between p-3 text-left">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <Bot size={11} className="text-[#22c55e]" />
                    <span className="text-white text-[0.72rem] sm:text-[0.78rem] font-bold truncate">24/7 Lead Qual</span>
                  </div>
                  <p className="text-white/85 text-[0.58rem] sm:text-[0.64rem] leading-tight">
                    <span className="text-[#22c55e] font-semibold">Dynamic PDF catalogs</span>, live booking & triage.
                  </p>
                  <div className="flex gap-1 flex-wrap mt-0.5">
                    {['12 Verticals', 'Auto PDF', 'Triage'].map(t => (
                      <span key={t} className="text-[0.45rem] sm:text-[0.5rem] px-1.5 py-0.5 rounded bg-[#22c55e]/20 text-[#22c55e] border border-[#22c55e]/25 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to="/services"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[0.6rem] sm:text-[0.66rem] text-[#22c55e] flex items-center gap-1 font-semibold hover:underline"
                >
                  Verticals <ArrowRight size={9} />
                </Link>
              </div>
            </GlassEffect>
          </FlipCardBack>
        </FlipCard>

      </div>

      {/* Full-Screen Modal Player */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black/95 backdrop-blur-2xl p-3 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl flex items-center justify-between mb-3"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-white/15 border border-white/30 text-white text-xs sm:text-sm font-bold backdrop-blur-md hover:bg-white/25 transition-colors cursor-pointer"
            >
              <ArrowLeft size={15} /> Back to Overview
            </button>
            <span className="text-[0.72rem] sm:text-xs text-[#22c55e] font-bold tracking-wider uppercase font-mono flex items-center gap-1.5 truncate max-w-[180px] sm:max-w-none">
              <img src="/assets/portfolio/whatsapp-icon.svg" alt="WhatsApp" className="w-3.5 h-3.5 object-contain" />
              WhatsApp Business Bot Demo
            </span>
            <button
              onClick={() => setIsModalOpen(false)}
              className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/15 border border-white/30 text-white hover:bg-white/25 transition-colors cursor-pointer"
              aria-label="Close video player"
            >
              <X size={18} />
            </button>
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-[#22c55e]/40 shadow-2xl bg-black"
          >
            <video src="/assets/portfolio/whatsapp-bot-video.mp4" controls autoPlay playsInline className="w-full h-full object-contain" />
          </div>

          <button
            onClick={() => setIsModalOpen(false)}
            className="inline-flex items-center gap-1.5 text-white/70 text-xs mt-3 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft size={13} /> Close video & return to cards (Esc)
          </button>
        </div>
      )}
    </div>
  );
}

/* ━━━ CARD 3 — Rural Tech Apps ━━━ */
function CowAppsFullCard() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    setHovered(false);
    videoRef.current?.pause();
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full rounded-[22px] overflow-hidden flex flex-col md:flex-row items-center justify-between p-3.5 sm:p-5 md:p-7 gap-2.5 sm:gap-4 md:gap-6 box-border"
    >
      <video
        ref={videoRef}
        src="/assets/portfolio/cow-video.mp4"
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{
          filter: hovered ? 'brightness(0.95) saturate(1.08)' : 'brightness(0.78) contrast(1.02)',
          willChange: 'filter',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-[#000]/60 via-[#000]/30 to-[#000]/65 pointer-events-none" />

      {/* Left Column on Desktop / Top Section on Mobile */}
      <div className="relative z-10 w-full md:max-w-[340px] flex flex-col items-center md:items-start text-center md:text-left gap-1 sm:gap-1.5 flex-shrink-0">
        <span className="font-mono text-[0.66rem] sm:text-[0.76rem] tracking-[0.2em] text-[#38bdf8] font-bold uppercase flex items-center gap-1.5">
          <Sparkles size={12} className="text-[#38bdf8]" />
          Project 03 · Rural Tech
        </span>
        <h2 className="text-[1.25rem] sm:text-[1.75rem] md:text-[2.1rem] font-extrabold text-white leading-[1.12] tracking-tight drop-shadow-md">
          <span className="text-[#38bdf8]">Offline AI</span> Apps
        </h2>
        <p className="text-[0.72rem] sm:text-[0.8rem] md:text-[0.85rem] text-[#f0ede6]/90 leading-snug sm:leading-relaxed max-w-[360px]">
          Two field-ready Flutter apps engineered for rural Punjab with zero internet.
        </p>

        {/* Architecture Specs Pill */}
        <div className="flex flex-wrap justify-center md:justify-start gap-1.5 mt-0.5 sm:mt-1">
          <span className="text-[0.6rem] sm:text-[0.64rem] px-2 py-0.5 rounded-full bg-[#38bdf8]/20 text-[#38bdf8] border border-[#38bdf8]/35 font-mono flex items-center gap-1">
            <Zap size={9} /> &lt;2s On-Device ML
          </span>
          <span className="text-[0.6rem] sm:text-[0.64rem] px-2 py-0.5 rounded-full bg-white/12 text-white/95 border border-white/25 font-mono flex items-center gap-1">
            <Cpu size={9} /> 100% Offline SQLite
          </span>
        </div>

        <div className="flex items-center gap-2 mt-1 sm:mt-2">
          <Link
            to="/case-studies/doodhisaab"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg bg-[#38bdf8] text-[#080808] text-[0.68rem] sm:text-[0.76rem] font-bold shadow-md hover:scale-105 transition-transform"
          >
            Case Studies <ArrowRight size={10} />
          </Link>
        </div>
      </div>

      {/* Right Column on Desktop / Bottom Section on Mobile: Liquid Glass Dual FlipCards */}
      <div className="relative z-10 w-full md:w-auto flex flex-row gap-2.5 sm:gap-3.5 items-center justify-center flex-shrink-0">

        {/* ── DoodHisaab ── */}
        <FlipCard className="relative w-[145px] sm:w-[155px] md:w-[165px] h-[195px] sm:h-[215px] md:h-[235px]">
          <FlipCardFront className="rounded-2xl">
            <GlassEffect className="w-full h-full rounded-2xl">
              <div className="w-full h-full flex flex-col items-center justify-between p-3 text-center">
                <img src="/assets/portfolio/doodhisaab-logo.png" alt="DoodHisaab"
                  loading="lazy"
                  decoding="async"
                  width={52}
                  height={52}
                  className="w-11 h-11 sm:w-13 sm:h-13 object-contain rounded-xl shadow-md" />
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-white text-[0.82rem] sm:text-[0.92rem] font-bold leading-tight drop-shadow">DoodHisaab</h3>
                  <p className="text-white/80 text-[0.6rem] sm:text-[0.66rem] leading-tight">
                    Dairy ledger & receipts
                  </p>
                </div>
                <span className="text-[0.5rem] sm:text-[0.56rem] text-[#38bdf8] tracking-wider uppercase font-mono font-semibold">
                  ↻ Tap to Flip
                </span>
              </div>
            </GlassEffect>
          </FlipCardFront>
          <FlipCardBack className="rounded-2xl">
            <GlassEffect className="w-full h-full rounded-2xl">
              <div className="w-full h-full flex flex-col justify-between p-2.5 sm:p-3 text-left">
                <div className="h-[70px] sm:h-[85px] overflow-hidden rounded-lg flex-shrink-0">
                  <img src="/assets/portfolio/doodhisaab-screenshot.jpg" alt="DoodHisaab App"
                    loading="lazy"
                    decoding="async"
                    width={165}
                    height={85}
                    className="w-full h-full object-cover object-top" />
                </div>
                <div className="flex flex-col gap-0.5 mt-0.5">
                  <div className="flex items-center gap-1">
                    <Milk size={10} className="text-[#d4a853]" />
                    <span className="text-white text-[0.7rem] sm:text-[0.76rem] font-bold truncate">DoodHisaab</span>
                  </div>
                  <p className="text-white/85 text-[0.54rem] sm:text-[0.6rem] leading-tight">
                    <span className="text-[#d4a853] font-semibold">Milk ledger</span> — deliveries & profit.
                  </p>
                  <Link
                    to="/case-studies/doodhisaab"
                    onClick={(e) => e.stopPropagation()}
                    className="text-[0.58rem] sm:text-[0.64rem] text-[#d4a853] flex items-center gap-1 font-semibold hover:underline mt-0.5"
                  >
                    Case Study <ArrowRight size={8} />
                  </Link>
                </div>
              </div>
            </GlassEffect>
          </FlipCardBack>
        </FlipCard>

        {/* ── Fasal Doctor ── */}
        <FlipCard className="relative w-[145px] sm:w-[155px] md:w-[165px] h-[195px] sm:h-[215px] md:h-[235px]">
          <FlipCardFront className="rounded-2xl">
            <GlassEffect className="w-full h-full rounded-2xl">
              <div className="w-full h-full flex flex-col items-center justify-between p-3 text-center">
                <img src="/assets/portfolio/fasal-doctor-logo.png" alt="Fasal Doctor"
                  loading="lazy"
                  decoding="async"
                  width={52}
                  height={52}
                  className="w-11 h-11 sm:w-13 sm:h-13 object-contain rounded-xl shadow-md" />
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-white text-[0.82rem] sm:text-[0.92rem] font-bold leading-tight drop-shadow">Fasal Doctor</h3>
                  <p className="text-white/80 text-[0.6rem] sm:text-[0.66rem] leading-tight">
                    On-device crop disease AI
                  </p>
                </div>
                <span className="text-[0.5rem] sm:text-[0.56rem] text-[#38bdf8] tracking-wider uppercase font-mono font-semibold">
                  ↻ Tap to Flip
                </span>
              </div>
            </GlassEffect>
          </FlipCardFront>
          <FlipCardBack className="rounded-2xl">
            <GlassEffect className="w-full h-full rounded-2xl">
              <div className="w-full h-full flex flex-col justify-between p-2.5 sm:p-3 text-left">
                <div className="h-[70px] sm:h-[85px] overflow-hidden rounded-lg flex-shrink-0">
                  <img src="/assets/portfolio/fasal-doctor-screenshot.png" alt="Fasal Doctor App"
                    loading="lazy"
                    decoding="async"
                    width={165}
                    height={85}
                    className="w-full h-full object-cover object-top" />
                </div>
                <div className="flex flex-col gap-0.5 mt-0.5">
                  <div className="flex items-center gap-1">
                    <Leaf size={10} className="text-[#4ade80]" />
                    <span className="text-white text-[0.7rem] sm:text-[0.76rem] font-bold truncate">Fasal Doctor</span>
                  </div>
                  <p className="text-white/85 text-[0.54rem] sm:text-[0.6rem] leading-tight">
                    <span className="text-[#4ade80] font-semibold">Offline AI</span> crop scan & cure.
                  </p>
                  <Link
                    to="/case-studies/fasal-doctor"
                    onClick={(e) => e.stopPropagation()}
                    className="text-[0.58rem] sm:text-[0.64rem] text-[#4ade80] flex items-center gap-1 font-semibold hover:underline mt-0.5"
                  >
                    Case Study <ArrowRight size={8} />
                  </Link>
                </div>
              </div>
            </GlassEffect>
          </FlipCardBack>
        </FlipCard>

      </div>
    </div>
  );
}

/* ━━━ CARD 4 — 21 GitHub Projects ━━━ */
const vgImgs = [
  '/assets/portfolio/videogen-demo-1.jpg',
  '/assets/portfolio/videogen-demo-2.jpg',
  '/assets/portfolio/videogen-demo-3.jpg',
  '/assets/portfolio/videogen-demo-4.jpg',
  '/assets/portfolio/videogen-demo-5.jpg',
];

function VideoGenFullCard() {
  return (
    <div className="relative w-full rounded-[22px] overflow-hidden p-3.5 sm:p-5 md:p-7 text-center box-border flex flex-col items-center justify-between">
      <div className="absolute inset-0 bg-gradient-to-br from-[#080e1a] via-[#0a0f1e] to-[#060a14]" />

      {/* Floating Parallax Layers */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-45 sm:opacity-75">
        <Floating sensitivity={-0.7} easingFactor={0.05} className="overflow-hidden rounded-3xl w-full h-full">
          <FloatingElement depth={0.5} className="top-[3%] left-[3%]">
            <img src={vgImgs[0]} alt="VideoGen dashboard" className="w-[125px] sm:w-[170px] h-[85px] sm:h-[120px] object-cover rounded-xl shadow-2xl border border-[#5b8fd4]/20" />
          </FloatingElement>
          <FloatingElement depth={1.8} className="top-[5%] left-[62%]">
            <img src={vgImgs[1]} alt="VideoGen settings" className="w-[135px] sm:w-[185px] h-[90px] sm:h-[125px] object-cover rounded-xl shadow-2xl border border-[#5b8fd4]/20" />
          </FloatingElement>
          <FloatingElement depth={2.2} className="top-[48%] left-[2%]">
            <img src={vgImgs[2]} alt="VideoGen batch" className="w-[120px] sm:w-[160px] h-[80px] sm:h-[115px] object-cover rounded-xl shadow-2xl border border-[#5b8fd4]/20" />
          </FloatingElement>
          <FloatingElement depth={0.9} className="top-[52%] left-[65%]">
            <img src={vgImgs[3]} alt="VideoGen editor" className="w-[115px] sm:w-[150px] h-[75px] sm:h-[105px] object-cover rounded-xl shadow-2xl border border-[#5b8fd4]/20" />
          </FloatingElement>
        </Floating>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-[radial-gradient(circle,rgba(91,143,212,0.16),transparent_65%)] pointer-events-none z-[1]" />

      {/* Top Header */}
      <div className="relative z-10 flex flex-col items-center gap-1">
        <span className="font-mono text-[0.66rem] sm:text-[0.76rem] tracking-[0.22em] text-[#5b8fd4] font-bold uppercase">
          Project 04 · 21 Open Repositories
        </span>
        <h2 className="text-[1.25rem] sm:text-[1.85rem] md:text-[2.2rem] font-extrabold text-white leading-tight tracking-tight drop-shadow-md">
          21 GitHub <span className="text-[#5b8fd4]">Projects</span>
        </h2>
      </div>

      {/* Center Bento Highlights */}
      <div className="relative z-10 w-full max-w-[640px] grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 text-left my-2 sm:my-3">
        <div className="bg-[#080e1a]/85 backdrop-blur-md border border-[#5b8fd4]/25 p-2.5 rounded-xl">
          <div className="text-[0.68rem] sm:text-[0.76rem] font-bold text-[#5b8fd4] flex items-center gap-1">
            <GitBranch size={11} /> Videogen-Max & yt-auto
          </div>
          <p className="text-[0.58rem] sm:text-[0.64rem] text-white/85 leading-tight mt-0.5">
            Automated 1080p60 programmatic video engine ($0 cloud bill).
          </p>
        </div>

        <div className="bg-[#080e1a]/85 backdrop-blur-md border border-[#5b8fd4]/25 p-2.5 rounded-xl">
          <div className="text-[0.68rem] sm:text-[0.76rem] font-bold text-[#5b8fd4] flex items-center gap-1">
            <Mic size={11} /> TakeMyInterview-Ai
          </div>
          <p className="text-[0.58rem] sm:text-[0.64rem] text-white/85 leading-tight mt-0.5">
            Real-time voice-to-voice local AI interview coach.
          </p>
        </div>

        <div className="bg-[#080e1a]/85 backdrop-blur-md border border-[#5b8fd4]/25 p-2.5 rounded-xl">
          <div className="text-[0.68rem] sm:text-[0.76rem] font-bold text-[#5b8fd4] flex items-center gap-1">
            <Bot size={11} /> Neo Assistant & MCP
          </div>
          <p className="text-[0.58rem] sm:text-[0.64rem] text-white/85 leading-tight mt-0.5">
            Air-gapped local GPU voice assistant & legal servers.
          </p>
        </div>

        <div className="bg-[#080e1a]/85 backdrop-blur-md border border-[#5b8fd4]/25 p-2.5 rounded-xl">
          <div className="text-[0.68rem] sm:text-[0.76rem] font-bold text-[#5b8fd4] flex items-center gap-1">
            <Leaf size={11} /> DoodHisaab & Fasal Doctor
          </div>
          <p className="text-[0.58rem] sm:text-[0.64rem] text-white/85 leading-tight mt-0.5">
            Offline dairy ledger & on-device crop disease scanner.
          </p>
        </div>
      </div>

      {/* Bottom CTA Row */}
      <div className="relative z-10 flex items-center gap-2 sm:gap-3 flex-wrap justify-center mt-1">
        <a
          href="https://github.com/gurination1"
          target="_blank"
          rel="me noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-[#5b8fd4]/20 border border-[#5b8fd4]/40 backdrop-blur-md text-[#5b8fd4] text-[0.7rem] sm:text-[0.78rem] font-bold hover:bg-[#5b8fd4]/30 transition-colors"
        >
          <GitBranch size={11} /> 21 Repos on GitHub <ExternalLink size={9} />
        </a>
        <Link
          to="/services/automated-video-generation-engine"
          className="inline-flex items-center gap-1 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg bg-white/10 border border-white/20 text-white text-[0.7rem] sm:text-[0.78rem] font-semibold hover:bg-white/20 transition-colors"
        >
          Explore VideoGen <ArrowRight size={10} />
        </Link>
      </div>
    </div>
  );
}

/* ━━━ CARD COMPONENT — Optimized High-Performance Shine Border ━━━ */
const Card: React.FC<CardProps> = ({ id, title, description, index, totalCards, color, cardType = 'calling-agent' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const container = containerRef.current;
    if (!card || !container) return;

    const targetScale = 1 - (totalCards - index) * 0.02;
    gsap.set(card, { scale: 1, transformOrigin: 'center top', willChange: 'transform', force3D: true });
    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top center',
      end: 'bottom center',
      scrub: 0.6,
      fastScrollEnd: 2500,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const scale = gsap.utils.interpolate(1, targetScale, self.progress);
        gsap.set(card, { scale: Math.max(scale, targetScale), transformOrigin: 'center top', force3D: true });
      },
    });
    return () => { trigger.kill(); };
  }, [index, totalCards]);

  return (
    <div
      ref={containerRef}
      style={{
        height: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'sticky',
        top: 0,
        boxSizing: 'border-box',
      }}
    >
      <div
        ref={cardRef}
        style={{
          position: 'relative',
          width: 'min(94vw, 1040px)',
          height: 'auto',
          minHeight: 'auto',
          borderRadius: 24,
          isolation: 'isolate',
          top: `calc(-3vh + ${index * 14}px)`,
          transformOrigin: 'top',
        }}
        className="card-content"
      >
        {/* ── High-Performance GPU-Accelerated Sweeping Shine Border ── */}
        <div
          style={{
            position: 'absolute',
            inset: -2.5,
            borderRadius: 26.5,
            overflow: 'hidden',
            zIndex: -1,
            pointerEvents: 'none',
            boxShadow: `0 0 16px -2px ${color}66`,
            transform: 'translateZ(0)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: '-150%',
              background: `conic-gradient(from 0deg, transparent 0deg, ${color} 45deg, #ffffff 85deg, ${color} 125deg, transparent 180deg, transparent 360deg)`,
              animation: 'shine-spin 5.5s linear infinite',
              willChange: 'transform',
              transform: 'translateZ(0)',
            }}
          />
        </div>

        {cardType === 'calling-agent' ? <CallingAgentFullCard /> :
         cardType === 'whatsapp-bot' ? <WhatsAppBotFullCard /> :
         cardType === 'cow-apps' ? <CowAppsFullCard /> :
         <VideoGenFullCard />}
      </div>
    </div>
  );
};

/* ━━━ STACKED CARDS CONTAINER ━━━ */
export const StackedCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;
    gsap.fromTo(c, { opacity: 0 }, { opacity: 1, duration: 1.2, ease: 'power2.out' });
  }, []);

  return (
    <div ref={containerRef} style={{ background: '#0a0a0a', width: '100%' }}>
      <section style={{ color: '#fff', width: '100%', position: 'relative' }}>
        {cardData.map((card, index) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            index={index}
            totalCards={cardData.length}
            color={card.color}
            cardType={card.cardType}
          />
        ))}
      </section>
    </div>
  );
};
