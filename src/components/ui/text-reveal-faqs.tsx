'use client'

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { motion } from "framer-motion"

export default function TextRevealFAQs() {
  const faqItems = [
    {
      id: 'item-1',
      question: 'How do your Meta Cloud API WhatsApp AI Agents operate with zero monthly SaaS fees?',
      answer: 'Unlike third-party resellers (Wati, Interakt, AiSensy) that charge per-user SaaS subscriptions and markup fees, I build directly on Meta Cloud API infrastructure. Your business pays zero SaaS fees and gets full control over custom webhooks, instant lead booking, and automated CRM sync.',
    },
    {
      id: 'item-2',
      question: 'What makes your Voice AI Calling Agents different from standard IVR systems?',
      answer: 'Standard IVR uses rigid keypress menus ("Press 1 for Sales"). Our Voice AI Agents use Sarvam AI speech models for natural Hindi, Punjabi, and English voice synthesis with <500ms latency. They handle complex customer questions, schedule appointments, and update databases in real time.',
    },
    {
      id: 'item-3',
      question: 'Why do you pre-render websites (SSG) instead of using WordPress or Wix?',
      answer: 'Custom pre-rendered code (Vite SSG with pre-baked HTML) loads in under 0.8 seconds and scores 98+ on Google Lighthouse. Search crawlers read static HTML instantly without waiting for JS execution, boosting your Google SEO and AI Search (ChatGPT / Perplexity) rankings.',
    },
    {
      id: 'item-4',
      question: 'Can your mobile applications run AI models and databases completely offline?',
      answer: 'Yes. In rural or low-connectivity areas, cloud-reliant apps crash. I engineer Flutter mobile apps backed by local SQLite databases and embedded TensorFlow Lite models so image scanning, inventory, and ledger calculations execute 100% offline on the device.',
    },
    {
      id: 'item-5',
      question: 'What is your typical project delivery timeline and build process?',
      answer: 'Standalone WhatsApp bots and automation pipelines ship in 5 to 7 days. Full 3D websites, AI voice agents, and custom mobile apps deliver in 2 to 3 weeks with daily progress links and continuous testing.',
    },
    {
      id: 'item-6',
      question: 'How do we get started on a project or system audit?',
      answer: 'Click "Talk" or message gurination1@gmail.com. We schedule a 15-minute call to map your business bottleneck, define exact deliverables, and deliver a fixed-price scope.',
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
              Everything you need to know about our AI agents, custom apps, 3D web systems, and delivery timelines.
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
                  <AccordionTrigger className="cursor-pointer text-base md:text-lg font-bold hover:no-underline py-4">
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
