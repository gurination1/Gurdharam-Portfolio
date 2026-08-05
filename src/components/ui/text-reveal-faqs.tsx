'use client'

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { motion } from "framer-motion"
import { Search, MessageCircle, Mic, Smartphone, ShieldCheck, Clock, HelpCircle, ArrowRight } from 'lucide-react'
import { WHATSAPP_NUMBER, getWhatsAppUrl } from '@/lib/whatsapp'

export default function TextRevealFAQs() {
  const faqItems = [
    {
      id: 'item-1',
      icon: Search,
      question: 'What is SEO WITH GEO & NEO and how does it make my website rank inside ChatGPT & Perplexity?',
      answer: 'Generative Engine Optimization (GEO) & Next-Gen Engine Optimization (NEO) structure your site\'s data using JSON-LD entity graphs, factual direct-answer blocks, and standardized /llms.txt endpoints. This ensures AI Search engines (ChatGPT Search, Perplexity, Claude, Google AI Overviews) parse, cite, and recommend your business as the #1 answer.',
      waPrompt: 'Hi Gurdharam, I have a question about SEO WITH GEO & NEO AI search rankings.'
    },
    {
      id: 'item-2',
      icon: MessageCircle,
      question: 'How do your WhatsApp AI Agents operate with zero monthly SaaS markup fees?',
      answer: 'Unlike reseller SaaS platforms (Wati, Interakt, ManyChat) that charge $100–$1,000+/mo in platform subscriptions, we build directly on Meta\'s official Cloud Graph API. You pay Meta directly for raw conversation costs, retaining 100% data control and custom webhook flexibility.',
      waPrompt: 'Hi Gurdharam, I want to build a zero-SaaS-fee WhatsApp AI Agent on Meta Cloud API.'
    },
    {
      id: 'item-3',
      icon: Mic,
      question: 'What makes your Voice AI Calling Agents different from standard IVR systems?',
      answer: 'Standard IVR relies on rigid keypress menus. Our Voice AI Callers use Sarvam AI speech synthesis in Hindi, Punjabi, and English at <500ms latency. They converse naturally, execute live database lookups during calls, and update CRMs live without holding customers.',
      waPrompt: 'Hi Gurdharam, I\'d like to discuss Indic Voice AI Calling Agents for my business.'
    },
    {
      id: 'item-4',
      icon: Smartphone,
      question: 'Can your mobile applications run AI models and databases completely offline?',
      answer: 'Yes. We build Flutter mobile apps backed by local SQLite databases and embedded TensorFlow Lite models. Image scanning, diagnostic classification, and route ledgers run 100% on-device in zero-4G environments with sub-10ms inference and zero cloud server bills.',
      waPrompt: 'Hi Gurdharam, I\'m interested in an offline AI mobile app built with Flutter.'
    },
    {
      id: 'item-5',
      icon: ShieldCheck,
      question: 'How does your Full CS Professional Team handle security & code audits?',
      answer: 'Every project undergoes rigorous penetration testing, vulnerability analysis, and OWASP code hardening before delivery, guaranteeing 100% security audit compliance for enterprise deployment.',
      waPrompt: 'Hi Gurdharam, I want to discuss security hardening & code audit standards.'
    },
    {
      id: 'item-6',
      icon: Clock,
      question: 'What is your typical project delivery timeline and build process?',
      answer: 'Standalone WhatsApp bots and video engines ship in 5 to 7 days. Full 3D WebGL platforms, Indic voice callers, and offline mobile apps deliver in 2 to 3 weeks with daily progress links and continuous testing.',
      waPrompt: 'Hi Gurdharam, I\'d like to know project timelines for my application.'
    },
  ];

  const mainWaUrl = getWhatsAppUrl("Hi Gurdharam, I have a custom project requirement after reading your website FAQs.");

  return (
    <section className="py-16 md:py-24 bg-black/60 border-t border-white/5 relative overflow-hidden" id="faq">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <span className="text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase flex items-center gap-2 mb-3">
              <HelpCircle className="w-4 h-4" /> [ FREQUENTLY ASKED QUESTIONS ]
            </span>
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none mb-4">
              HAVE<br />QUESTIONS?
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-md">
              Everything you need to know about Indic Voice AI callers, zero-fee Meta WhatsApp agents, 3D WebGL platforms, and SEO WITH GEO & NEO search rankings.
            </p>

            {/* Direct WhatsApp Support Tile */}
            <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-3 max-w-md">
              <span className="text-xs text-slate-300 font-mono flex items-center gap-2 font-semibold">
                <MessageCircle className="w-4 h-4 text-[#25D366]" /> Direct WhatsApp Support
              </span>
              <p className="text-xs text-slate-400">
                Have a custom requirement or technical question? Ask directly via WhatsApp.
              </p>
              <a
                href={mainWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1da851] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 min-h-[44px]"
              >
                Chat Directly on WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item) => {
                const Icon = item.icon;
                const itemWaUrl = getWhatsAppUrl(item.waPrompt);
                return (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="border-b border-white/10"
                  >
                    <AccordionTrigger className="cursor-pointer text-base md:text-lg font-bold hover:no-underline py-5 text-left flex items-start gap-3 group focus-visible:ring-2 focus-visible:ring-[var(--accent-gold)] rounded-lg">
                      <span className="p-2 rounded-lg bg-white/5 text-[var(--accent-gold)] group-hover:bg-[var(--accent-gold)] group-hover:text-black transition-colors shrink-0 mt-0.5">
                        <Icon className="w-5 h-5" />
                      </span>
                      <span className="flex-1">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pt-2 pb-4 text-slate-300 text-sm md:text-base leading-relaxed space-y-3">
                        <p>{item.answer}</p>
                        <div>
                          <a
                            href={itemWaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#25D366] hover:underline py-1.5 min-h-[44px]"
                          >
                            <MessageCircle className="w-3.5 h-3.5" /> Ask about this on WhatsApp →
                          </a>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

