import React, { useEffect } from 'react';
import { ArrowLeft, Globe, Search, Layers, Zap, Code, ShieldCheck, Milestone, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Star, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function WebsiteDesignCompanyChandigarh() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Website Design Company Chandigarh | Gurdharam";
  }, []);

  const waUrl = getWhatsAppUrl("Hi Gurdharam, I'd like to discuss custom website design & web development for our business in Chandigarh/Tricity.");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.gurdharam.com/services/website-design-company-chandigarh#service",
        "name": "Website Design Company in Chandigarh — Gurdharam Jeet Singh",
        "url": "https://www.gurdharam.com/services/website-design-company-chandigarh",
        "image": "https://www.gurdharam.com/og-card.png",
        "telephone": "+916280333252",
        "priceRange": "₹₹₹",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chandigarh",
          "addressRegion": "Punjab",
          "addressCountry": "IN"
        },
        "areaServed": [
          { "@type": "City", "name": "Chandigarh", "sameAs": "https://www.wikidata.org/wiki/Q43433" },
          { "@type": "City", "name": "Mohali", "sameAs": "https://www.wikidata.org/wiki/Q2378875" },
          { "@type": "City", "name": "Panchkula", "sameAs": "https://www.wikidata.org/wiki/Q2288924" }
        ],
        "knowsAbout": ["Website Design", "Custom React Web Development", "3D WebGL Web Apps", "Local SEO Chandigarh"],
        "provider": { "@id": "https://www.gurdharam.com/#organization" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why choose custom React web development over WordPress in Chandigarh?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Custom React and Next.js websites load under 1 second, pass 98+ Lighthouse Core Web Vitals audits, and eliminate WordPress plugin bloat, security vulnerabilities, and slow page loads."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to design and launch a custom business website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "High-converting 2D landing pages take 5–7 days. Complete custom 3D WebGL corporate platforms take 2–3 weeks from wireframe to pre-rendered SEO deployment."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-void text-primary pt-24 px-6 md:px-16 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-[var(--accent-gold)] hover:opacity-80 transition-opacity mb-12 font-mono text-sm tracking-widest uppercase">
          <ArrowLeft className="mr-2" size={16} /> Back to Portfolio
        </Link>
        
        <header className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="px-3 py-1 bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/30 rounded-full text-[var(--accent-gold)] font-mono text-xs uppercase tracking-wider">Chandigarh · Mohali · Tricity · Global</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
            Website Design Company in Chandigarh <br />
            <span className="text-[var(--accent-gold)]">High-Converting Custom Web Platforms</span>
          </h1>
          <div className="bg-card border border-[var(--accent-gold)]/20 rounded-2xl p-6 mb-8">
            <p className="text-lg md:text-xl text-primary leading-relaxed font-medium">
              Gurdharam Jeet Singh builds ultra-fast, 3D interactive, and SEO-dominated websites for brands, clinics, coaching institutes, real estate firms, and enterprises in Chandigarh (Sector 17, 35, IT Park), Mohali, and Panchkula. Zero WordPress bloat. 100% custom React code.
            </p>
          </div>
        </header>

        <section className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { stat: '<1s', label: 'Page load speed on mobile & desktop', icon: <Zap size={20} /> },
            { stat: '98+', label: 'Lighthouse Core Web Vitals target', icon: <TrendingUp size={20} /> },
            { stat: '3D WebGL', label: 'Immersive spatial WebGL canvases', icon: <Layers size={20} /> },
            { stat: '#1 SEO', label: 'Pre-rendered SSG for instant indexation', icon: <Search size={20} /> }
          ].map(({ stat, label, icon }) => (
            <div key={stat} className="bg-card border border-white/5 p-5 rounded-2xl text-center">
              <div className="text-[var(--accent-gold)] mb-2 flex justify-center">{icon}</div>
              <div className="text-2xl font-display font-bold text-white mb-1">{stat}</div>
              <div className="text-secondary text-xs leading-tight">{label}</div>
            </div>
          ))}
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display text-white">Full-Stack Web Design Capabilities in Chandigarh</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Layers className="text-[var(--accent-gold)] mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3 text-white">3D WebGL & Interactive Websites</h3>
              <p className="text-secondary text-sm leading-relaxed">Hardware-accelerated 60 FPS 3D product visualizers and spatial WebGL websites using Three.js and Spline. Engineered to captivate high-ticket buyers without slowing down mobile performance.</p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Code className="text-[var(--accent-gold)] mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3 text-white">Custom React & Next.js Engineering</h3>
              <p className="text-secondary text-sm leading-relaxed">Bespoke frontend architectures built with React, TypeScript, and TailwindCSS. Complete static site pre-rendering guaranteeing instant crawler indexing and zero layout shifts.</p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Search className="text-[var(--accent-gold)] mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3 text-white">Local SEO & GEO Optimization</h3>
              <p className="text-secondary text-sm leading-relaxed">Built-in Schema.org JSON-LD structured data, Wikidata geographic entity links, and local landing pages targeting Chandigarh, Mohali, Zirakpur, and Panchkula search traffic.</p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Zap className="text-[var(--accent-gold)] mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3 text-white">WhatsApp & CRM Lead Conversion</h3>
              <p className="text-secondary text-sm leading-relaxed">Native 1-click WhatsApp API chat triggers, automated lead qualification webhooks, and direct integration with Google Sheets, PostgreSQL, and CRM dashboards.</p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-card border border-[var(--accent-gold)]/20 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4 text-white">Ready to Build a High-Converting Website in Chandigarh?</h2>
          <p className="text-secondary mb-6 leading-relaxed">Get a custom 3D design demo and technical SEO blueprint tailored for your business in Chandigarh or Tricity.</p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--accent-gold)] text-black font-bold rounded-xl hover:opacity-90 transition-opacity">
            <MessageSquare size={20} /> Discuss Project on WhatsApp
          </a>
        </section>
      </div>

      <Footer />
    </main>
  );
}
