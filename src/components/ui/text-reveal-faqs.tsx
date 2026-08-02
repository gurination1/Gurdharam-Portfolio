'use client'

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { motion } from "framer-motion"

export default function TextRevealFAQs() {
  const faqItems = [
    {
      id: 'item-1',
      question: 'What is SEO WITH GEO & NEO and how does it make my website rank inside ChatGPT & Perplexity?',
      answer: 'Generative Engine Optimization (GEO) & Next-Gen Engine Optimization (NEO) structure your site\'s data using JSON-LD entity graphs, factual direct-answer blocks, and standardized /llms.txt endpoints. This ensures AI Search engines (ChatGPT Search, Perplexity, Claude, Google AI Overviews) parse, cite, and recommend your business as the #1 answer.',
    },
    {
      id: 'item-2',
      question: 'How do your WhatsApp AI Agents operate with zero monthly SaaS markup fees?',
      answer: 'Unlike reseller SaaS platforms (Wati, Interakt, ManyChat) that charge $100–$1,000+/mo in platform subscriptions, we build directly on Meta\'s official Cloud Graph API. You pay Meta directly for raw conversation costs, retaining 100% data control and custom webhook flexibility.',
    },
    {
      id: 'item-3',
      question: 'What makes your Voice AI Calling Agents different from standard IVR systems?',
      answer: 'Standard IVR relies on rigid keypress menus. Our Voice AI Callers use Sarvam AI speech synthesis in Hindi, Punjabi, and English at <500ms latency. They converse naturally, execute live database lookups during calls, and update CRMs live without holding customers.',
    },
    {
      id: 'item-4',
      question: 'Can your mobile applications run AI models and databases completely offline?',
      answer: 'Yes. We build Flutter mobile apps backed by local SQLite databases and embedded TensorFlow Lite models. Image scanning, diagnostic classification, and route ledgers run 100% on-device in zero-4G environments with sub-10ms inference and zero cloud server bills.',
    },
    {
      id: 'item-5',
      question: 'How does your Full CS Professional Team handle security & code audits?',
      answer: 'Every project undergoes rigorous penetration testing, vulnerability analysis, and OWASP code hardening before delivery, guaranteeing 100% security audit compliance for enterprise deployment.',
    },
    {
      id: 'item-6',
      question: 'What is your typical project delivery timeline and build process?',
      answer: 'Standalone WhatsApp bots and video engines ship in 5 to 7 days. Full 3D WebGL platforms, Indic voice callers, and offline mobile apps deliver in 2 to 3 weeks with daily progress links and continuous testing.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-black/60 border-t border-white/5" id="faq">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-8 md:grid-cols-5 md:gap-12 items-start">
          <div className="md:col-span-2">
            <span className="text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase block mb-2">
              [ FREQUENTLY ASKED QUESTIONS ]
            </span>
            <h2 className="text-white text-3xl md:text-5xl font-extrabold tracking-tight">
              HAVE<br />QUESTIONS?
            </h2>
            <p className="text-slate-400 mt-4 text-balance text-base leading-relaxed">
              Everything you need to know about our Indic Voice AI callers, zero-fee Meta WhatsApp agents, 3D WebGL platforms, and SEO WITH GEO & NEO search rankings.
            </p>
            <p className="text-slate-400 mt-6 hidden md:block text-sm">
              Have a custom requirement? Reach out directly via{' '}
              <a
                href="mailto:gurination1@gmail.com"
                className="text-[var(--accent-gold)] font-semibold hover:underline"
              >
                Direct Support
              </a>.
            </p>
          </div>

          <div className="md:col-span-3">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-white/10"
                >
                  <AccordionTrigger className="cursor-pointer text-base md:text-lg font-bold hover:no-underline py-4 text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <BlurredStagger text={item.answer} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export const BlurredStagger = ({
  text,
}: {
  text: string;
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.008,
      },
    },
  };

  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(8px)",
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  return (
    <div className="w-full pt-1">
      <motion.p
        variants={container}
        initial="hidden"
        animate="show"
        className="text-sm md:text-base leading-relaxed text-slate-300 break-words whitespace-normal"
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letterAnimation}
            transition={{ duration: 0.25 }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};
