import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Portfolio project cards data for the StackedCards component. */
export const cardData = [
  {
    id: 1,
    title: 'AI Voice Calling Agent — Sub-300ms Real-Time Indic Telephony',
    description: 'Full-duplex conversational voice AI on real phone lines. Streams Sarvam Indic ASR, local Llama 3, and neural TTS in Punjabi, Hindi & English with 50ms interruption handling.',
    color: 'rgba(245, 158, 11, 0.9)',
    cardType: 'calling-agent',
    metrics: ['⚡ <290ms Latency', '🎙️ SIP Trunks + PBX', '🗣️ Punjabi & Hindi AI', '🛡️ DPDP Compliant'],
  },
  {
    id: 2,
    title: 'WhatsApp Business Bot — Official Meta Cloud API (Zero SaaS Fees)',
    description: 'Direct Meta Cloud API webhook automation with ₹0 monthly platform subscription markups. Auto-qualifies leads, books appointments, and delivers dynamic catalog PDFs.',
    color: 'rgba(34, 197, 94, 0.9)',
    cardType: 'whatsapp-bot',
    metrics: ['⚡ ₹0 SaaS Markups', '📱 Meta Cloud API v20', '💬 1,000 Free Chats', '📄 Instant PDF Dispatch'],
  },
  {
    id: 3,
    title: 'Fasal Doctor & DoodhiSaab — Offline AI Rural Tech Apps',
    description: 'Field-ready Flutter apps engineered for rural Punjab: MobileNetV2 crop disease scanner (<2s inference on 2GB RAM) and an on-device milk collection ledger with WhatsApp receipts.',
    color: 'rgba(56, 189, 248, 0.9)',
    cardType: 'cow-apps',
    metrics: ['⚡ <2s On-Device AI', '📱 2GB RAM Spec', '📦 100% Offline Ledger', '<12ms SQLite Commit'],
  },
  {
    id: 4,
    title: '21 GitHub Projects — Open Source Pipelines & Offline Engines',
    description: '21 public repositories spanning automated 1080p60 video generation (yt-auto / Videogen-Max), local voice interviewers (TakeMyInterview-Ai), GPU assistant engines (Neo Assistant), and agritech mobile apps.',
    color: 'rgba(91, 143, 212, 0.95)',
    cardType: 'videogen',
    metrics: ['⚡ 21 Public Repos', '🎬 yt-auto & Videogen', '🎤 TakeMyInterview-Ai', '🤖 Neo Assistant & MCP'],
  },
];
