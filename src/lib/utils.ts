import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Portfolio project cards data for the StackedCards component. */
export const cardData = [
  {
    id: 1,
    title: 'Offline Video & Image Generation from Scratch',
    description: 'Local AI video generation from one prompt: script, visuals, narration, and MP4 output. Zero cloud, zero API. Built from scratch.',
    color: 'rgba(91, 143, 212, 0.8)',
    cardType: 'videogen',
  },
  {
    id: 2,
    title: 'Rural Tech Apps',
    description: 'Two field-ready apps built for rural India — offline crop diagnosis and a milk business ledger.',
    color: 'rgba(74, 222, 128, 0.8)',
    cardType: 'cow-apps',
  },
  {
    id: 3,
    title: 'VR Experience Dashboard',
    description: 'A real-time analytics dashboard for VR lab experiences at Baba Farid Group of Institutions — 48 participant responses, live charts, immersion metrics.',
    color: 'rgba(0, 245, 255, 0.8)',
    cardType: 'dashboard',
  },
  {
    id: 4,
    title: 'Many More',
    description: 'Exquisite websites, dynamic dashboards, and client-ready product systems powered by robust AI training workflows.',
    color: 'rgba(240, 237, 230, 0.66)',
    cardType: 'manymore',
  },
];
