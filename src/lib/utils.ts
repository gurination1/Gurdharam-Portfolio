import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const cardData = [
  {
    id: 1,
    title: 'VideoGen — Local Prompt-to-MP4 Video Engine ($0 API Cost)',
    description: 'Self-hosted AI video generation pipeline: automated script generation, local SD rendering, voice narration, and MP4 assembly with zero cloud API subscriptions.',
    color: 'rgba(212, 168, 83, 0.85)',
    cardType: 'videogen',
    metrics: ['⚡ $0 Cloud Cost', '🔒 100% Offline', '🎬 SD Render Engine', '4.2x Render Speed'],
  },
  {
    id: 2,
    title: 'Fasal Doctor & DoodhiSaab — Offline AI Rural Tech Apps',
    description: 'Field-ready Flutter apps engineered for rural India: MobileNetV2 crop disease scanner (<2s inference on 2GB RAM) and a phone-first milk delivery ledger.',
    color: 'rgba(56, 189, 248, 0.85)',
    cardType: 'cow-apps',
    metrics: ['⚡ <2s On-Device AI', '📱 2GB RAM Spec', '📦 100% Offline Ledger', '<12ms SQLite Commit'],
  },
  {
    id: 3,
    title: 'TakeMyInterview & Neovrit — Indic Voice AI & 3D WebGL',
    description: 'Real-time conversational voice interview agent (<500ms latency) alongside photorealistic 3D WebGL digital twin platforms built in Three.js and GSAP.',
    color: 'rgba(212, 168, 83, 0.85)',
    cardType: 'dashboard',
    metrics: ['🎙️ <500ms Latency', '🗣️ Indic Voice AI', '🎮 60 FPS WebGL', 'Sarvam AI Speech'],
  },
  {
    id: 4,
    title: 'SEO WITH GEO & NEO — Google #1 + ChatGPT & Perplexity Ranking',
    description: 'Static pre-rendered web platforms structured with JSON-LD entity graphs, factual direct-answer blocks, and /llms.txt endpoints to rank #1 in AI Search.',
    color: 'rgba(56, 189, 248, 0.85)',
    cardType: 'manymore',
    metrics: ['🏆 #1 Google Rank', '🤖 ChatGPT / Perplexity', '🕸️ JSON-LD Graph', 'Vite SSG Static'],
  },
];

