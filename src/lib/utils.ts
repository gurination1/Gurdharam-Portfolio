import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Portfolio project cards data for the StackedCards component. */
export const cardData = [
  {
    id: 1,
    title: 'VideoGen — Local Prompt-to-MP4 Video Engine ($0 API Cost)',
    description: 'Self-hosted AI video generation pipeline: automated script generation, local SD rendering, voice narration, and MP4 assembly with zero cloud API subscriptions.',
    color: 'rgba(212, 168, 83, 0.85)',
    cardType: 'videogen',
  },
  {
    id: 2,
    title: 'Fasal Doctor & DoodhiSaab — Offline AI Rural Tech Apps',
    description: 'Field-ready Flutter apps engineered for rural India: MobileNetV2 crop disease scanner (<2s inference on 2GB RAM) and a phone-first milk delivery ledger.',
    color: 'rgba(56, 189, 248, 0.85)',
    cardType: 'cow-apps',
  },
  {
    id: 3,
    title: 'TakeMyInterview & Neovrit — Indic Voice AI & 3D WebGL',
    description: 'Real-time conversational voice interview agent (<500ms latency) alongside photorealistic 3D WebGL digital twin platforms built in Three.js and GSAP.',
    color: 'rgba(212, 168, 83, 0.85)',
    cardType: 'dashboard',
  },
  {
    id: 4,
    title: 'SEO WITH GEO & NEO — Google #1 + ChatGPT & Perplexity Ranking',
    description: 'Static pre-rendered web platforms structured with JSON-LD entity graphs, factual direct-answer blocks, and /llms.txt endpoints to rank #1 in AI Search.',
    color: 'rgba(56, 189, 248, 0.85)',
    cardType: 'manymore',
  },
];
