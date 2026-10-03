import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, TrendingUp, Search, MessageSquare, Zap, ExternalLink, ArrowUpRight, Award, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function CaseStudyKiratInterior() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Kirat Interior Case Study | Gurdharam";
  }, []);

  return (
    <main className="min-h-screen bg-[#080808] text-[#f0ede6] pt-24 px-6 md:px-16 pb-20 selection:bg-[#d4a853]/30 selection:text-white font-sans antialiased">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/websites" 
          className="inline-flex items-center text-[#d4a853] hover:opacity-80 transition-opacity mb-10 font-mono text-xs tracking-wider uppercase"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> [ RETURN TO ALL WEBSITES &amp; SHOWCASE ]
        </Link>
        
        <header className="mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4a853]/30 bg-[#d4a853]/10 px-3.5 py-1 font-mono text-xs text-[#d4a853]">
            <Award className="h-3.5 w-3.5" />
            <span>CASE STUDY // #1 RANKED LOCAL SEARCH DOMINANCE</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-['Syne'] font-extrabold leading-tight text-white mb-6">
            Kirat Interior // Bespoke Modular Furniture Studio <br />
            <span className="text-[#d4a853]">Achieving #1 Google Local SEO Dominance</span>
          </h1>
          <p className="text-base md:text-lg text-[#9a958c] max-w-[68ch] leading-relaxed">
            How Handeep Singh&apos;s luxury interior and modular furniture studio in Bathinda, Punjab scaled from word-of-mouth reliance to #1 Google Search dominance, driving a 240% surge in high-ticket consultation bookings with sub-second page loads and zero recurring monthly SaaS fees.
          </p>
        </header>

        {/* Hero Visual Mockup */}
        <div className="mb-16 overflow-hidden rounded-2xl border border-white/15 bg-[#050505] shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 bg-[#141414] px-4 py-2.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]/80" />
            </div>
            <div className="flex items-center gap-1.5 rounded-md border border-white/10 bg-black/60 px-3 py-0.5 font-mono text-[0.68rem] text-[#9a958c]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
              <span>https://kiratinterior.com</span>
            </div>
            <a 
              href="https://www.kiratinterior.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#9a958c] hover:text-[#d4a853] transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
          <img 
            src="/assets/showcase/kirat-interior-pc.webp" 
            alt="Kirat Interior bespoke furniture website desktop view"
            className="w-full aspect-[16/10] object-cover object-top"
          />
        </div>

        {/* Quantified Executive Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="rounded-xl border border-[#d4a853]/30 bg-[#d4a853]/5 p-5">
            <span className="font-mono text-[0.68rem] text-[#d4a853] block mb-1">GOOGLE RANK</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">#1 Rank</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">Bespoke Furniture Bathinda</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-5">
            <span className="font-mono text-[0.68rem] text-[#25D366] block mb-1">INQUIRY GROWTH</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">+240%</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">WhatsApp Bookings</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-5">
            <span className="font-mono text-[0.68rem] text-[#38bdf8] block mb-1">LIGHTHOUSE SCORE</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">99/100</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">0.00 CLS / Mobile 4G</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-5">
            <span className="font-mono text-[0.68rem] text-[#f0ede6] block mb-1">MONTHLY HOSTING</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">₹0 / mo</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">Vercel Edge Global CDN</p>
          </div>
        </div>

        {/* Project Challenge */}
        <section className="mb-14 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#d4a853]">
            // 01. THE BUSINESS CHALLENGE
          </span>
          <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-white">
            High-Ticket Offline Craftsmanship Trapped Behind Word-of-Mouth
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-[#9a958c]">
            Kirat Interior, directed by master craftsman Handeep Singh in Bathinda, manufactures premium acrylic modular kitchens, walk-in wardrobes, and luxury bespoke living spaces for high-net-worth homeowners across the Malwa region of Punjab. While their physical craftsmanship was exceptional, their digital presence was virtually non-existent.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-[#9a958c]">
            Prospective clients looking for modern home interiors in Bathinda and surrounding hubs (Muktsar, Malout, Faridkot) were searching Google, only to find slow corporate directories or aggressive interior aggregators that subcontracted jobs to third parties. Handeep Singh needed an authoritative flagship digital portfolio that reflected luxury craftsmanship and converted Google searches directly into confirmed home measurement visits.
          </p>
        </section>

        {/* Architectural Solution */}
        <section className="mb-14 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#d4a853]">
            // 02. THE ENGINEERING ARCHITECTURE
          </span>
          <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-white">
            Pre-Rendered React, Local Schema &amp; Direct WhatsApp Routing
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-[#9a958c]">
            Rather than deploying a generic WordPress installation loaded with 20+ bloated plugins that slow page loads past 4 seconds on mobile, we engineered Kirat Interior using custom React and TailwindCSS, statically pre-rendered to pure HTML at build time:
          </p>
          <div className="grid md:grid-cols-3 gap-4 my-6">
            <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-4">
              <Search className="h-5 w-5 text-[#d4a853] mb-2" />
              <h3 className="font-bold text-white text-sm mb-1">GSC API Fast-Indexing</h3>
              <p className="text-xs text-[#9a958c] leading-relaxed">
                Pushed URLs directly to Google Indexing API and resubmitted sitemaps, triggering Googlebot crawl within hours of domain connection.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-4">
              <ShieldCheck className="h-5 w-5 text-[#d4a853] mb-2" />
              <h3 className="font-bold text-white text-sm mb-1">LocalBusiness Schema</h3>
              <p className="text-xs text-[#9a958c] leading-relaxed">
                Integrated rich JSON-LD markup with exact geo-coordinates, telephone, priceRange, and service area mappings for Google rich results.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-4">
              <MessageSquare className="h-5 w-5 text-[#d4a853] mb-2" />
              <h3 className="font-bold text-white text-sm mb-1">Direct WhatsApp CTA</h3>
              <p className="text-xs text-[#9a958c] leading-relaxed">
                Homeowners tap 1 click to send room dimensions and finish preferences directly into Handeep Singh&apos;s verified WhatsApp.
              </p>
            </div>
          </div>
        </section>

        {/* Quantified Business Results */}
        <section className="mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#d4a853]">
            // 03. QUANTIFIED RESULTS &amp; ROI
          </span>
          <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-white">
            Search Dominance &amp; Real Client Revenue
          </h2>
          <ul className="space-y-3 font-mono text-xs text-[#f0ede6]">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-[#25D366] shrink-0 mt-0.5" />
              <span><strong>#1 Organic Ranking:</strong> Holds position #1 in Bathinda for luxury modular furniture and custom interior design.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-[#25D366] shrink-0 mt-0.5" />
              <span><strong>+240% Inquiries:</strong> Weekly consultation bookings increased from 2-3 word-of-mouth calls to 10+ direct WhatsApp inquiries.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-[#25D366] shrink-0 mt-0.5" />
              <span><strong>₹0 Recurring Bills:</strong> Global edge CDN eliminates AWS/cPanel hosting expenses, saving ₹15,000+ annually.</span>
            </li>
          </ul>
        </section>

        {/* Reverse-Silo CTA Card */}
        <div className="rounded-2xl border border-[#d4a853]/40 bg-[#12100c] p-8 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-[#d4a853]">
            // WANT SIMILAR RESULTS FOR YOUR BUSINESS?
          </span>
          <h3 className="mt-2 text-2xl font-bold font-['Syne'] text-white">
            Build Your High-Ranking Website for ₹5,000 to ₹7,000
          </h3>
          <p className="mt-2 text-xs md:text-sm text-[#9a958c] max-w-lg mx-auto">
            Get the exact same architecture that powered Kirat Interior to #1 in Bathinda. Turnaround in 3 to 5 business days.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/services/website-design-under-10000"
              className="rounded-xl bg-[#d4a853] px-6 py-3 font-mono text-xs font-bold text-[#080808] hover:bg-white transition-colors"
            >
              EXPLORE ₹7,000 SEO PACKAGE
            </Link>
            <a
              href={getWhatsAppUrl("Hi Gurdharam, I read the Kirat Interior case study. I want a similar high-ranking website for my showroom.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-mono text-xs font-semibold text-white hover:border-[#d4a853] hover:text-[#d4a853] transition-colors"
            >
              CHAT ON WHATSAPP
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
