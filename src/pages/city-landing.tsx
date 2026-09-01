import React, { useEffect } from 'react';
import { ArrowLeft, MapPin, Globe, Code2, Layers, Sparkles, CheckCircle, PhoneCall, ArrowRight, MessageCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import citiesData from '@/data/cities.json';

export default function CityLanding({ cityId }: { cityId?: string }) {
  const { slug } = useParams<{ slug: string }>();
  useEffect(() => { window.scrollTo(0, 0); }, [slug, cityId]);

  const city = citiesData.find(c => c.id === cityId || c.slug === slug) || citiesData[0];
  const mainWaUrl = `https://api.whatsapp.com/send?phone=${city.waPhone}&text=Hi%20Gurdharam,%20I'm%20looking%20for%20a%20web%20developer%20%26%20AI%20consultant%20in%20${encodeURIComponent(city.name)}!`;

  // LocalBusiness Schema with areaServed Wikidata entity links
  const schemaObj = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `https://www.gurdharam.com/services/${city.slug}#service`,
    "name": `Gurdharam Jeet Singh — Web Developer & AI Consultant in ${city.name}`,
    "url": `https://www.gurdharam.com/services/${city.slug}`,
    "image": "https://www.gurdharam.com/og-card.png",
    "telephone": city.phone,
    "priceRange": "₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sri Muktsar Sahib",
      "addressRegion": "Punjab",
      "addressCountry": "IN"
    },
    "areaServed": citiesData.map(c => ({
      "@type": "City",
      "name": c.name,
      "@id": c.wikiData
    })),
    "knowsAbout": [
      "Web Development",
      "3D WebGL Web Design",
      "WhatsApp AI Agents",
      "Flutter Mobile Apps",
      "Indic Voice AI Telephony",
      "Local Search Engine Optimization"
    ],
    "provider": {
      "@type": "Person",
      "name": "Gurdharam Jeet Singh",
      "url": "https://www.gurdharam.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
      />
      <main className="min-h-screen bg-void text-primary pt-24 px-6 md:px-16 pb-20">
        <div className="max-w-4xl mx-auto">
          <Link to="/services/web-development" className="inline-flex items-center text-accent-cold hover:opacity-80 transition-opacity mb-12 font-mono text-sm tracking-widest uppercase">
            <ArrowLeft className="mr-2" size={16} /> Back to Web Services
          </Link>

          <header className="mb-16">
            <span className="font-mono text-xs text-accent-gold uppercase tracking-widest flex items-center gap-2 mb-3">
              <MapPin size={14} className="text-accent-gold" /> [ REGIONAL CITY HUBS · {city.name.toUpperCase()}, PUNJAB ]
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight mb-6 text-white">
              {city.h1}
            </h1>
            <p className="text-lg md:text-xl text-secondary max-w-[66ch] leading-relaxed mb-6">
              {city.distanceHook} Gurdharam Jeet Singh delivers custom 3D WebGL platforms, offline Flutter mobile apps, and 24/7 Meta WhatsApp AI agents for businesses in <strong>{city.name}</strong> and surrounding commercial hubs.
            </p>

            {/* Local Landmarks Pill Box */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-8">
              <span className="text-xs text-slate-300 font-mono font-bold flex items-center gap-2 mb-2 uppercase">
                <MapPin size={13} className="text-accent-cold" /> Key Service Areas in {city.name}:
              </span>
              <div className="flex flex-wrap gap-2">
                {city.landmarks.map((lm) => (
                  <span key={lm} className="text-xs px-2.5 py-1 rounded-full bg-accent-cold/10 text-accent-cold border border-accent-cold/20 font-mono">
                    {lm}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={mainWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-black font-bold text-sm hover:bg-[#1da851] transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                <MessageCircle size={16} /> Chat Direct on WhatsApp
              </a>
              <a
                href={`tel:${city.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-sm hover:bg-white/20 transition-all cursor-pointer"
              >
                <PhoneCall size={16} /> Call {city.phone}
              </a>
            </div>
          </header>

          {/* Capabilities Grid */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 font-display text-white">Engineering Capabilities for {city.name} Businesses</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-white/5 p-8 rounded-3xl">
                <Layers className="text-accent-cold mb-4" size={28} />
                <h3 className="font-bold text-white mb-2 text-lg">Interactive 3D WebGL Web Apps</h3>
                <p className="text-secondary text-sm leading-relaxed">Immersive, 60 FPS hardware-accelerated websites for {city.name} brands, jewelry showrooms, and retail stores with zero mobile lag.</p>
              </div>
              <div className="bg-card border border-white/5 p-8 rounded-3xl">
                <Sparkles className="text-accent-gold mb-4" size={28} />
                <h3 className="font-bold text-white mb-2 text-lg">WhatsApp AI Booking Bots</h3>
                <p className="text-secondary text-sm leading-relaxed">Automated 24/7 lead qualification, OPD token booking, and digital PDF catalog delivery via official Meta Cloud API with ₹0 SaaS markups.</p>
              </div>
              <div className="bg-card border border-white/5 p-8 rounded-3xl">
                <Code2 className="text-accent-cold mb-4" size={28} />
                <h3 className="font-bold text-white mb-2 text-lg">Offline Flutter & Agritech Mobile Apps</h3>
                <p className="text-secondary text-sm leading-relaxed">Offline-first mobile applications with local SQLite databases and edge computer vision AI models running without internet.</p>
              </div>
              <div className="bg-card border border-white/5 p-8 rounded-3xl">
                <Globe className="text-accent-cold mb-4" size={28} />
                <h3 className="font-bold text-white mb-2 text-lg">Local GEO & NEO Search SEO</h3>
                <p className="text-secondary text-sm leading-relaxed">Static pre-rendered HTML architecture guaranteeing 98+ Lighthouse speed scores and top Google Maps & search rankings in {city.name}.</p>
              </div>
            </div>
          </section>

          {/* Local FAQ Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 font-display text-white">Frequently Asked Questions in {city.name}</h2>
            <div className="space-y-4">
              {city.faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-card border border-white/5">
                  <h3 className="text-white font-bold text-base mb-2">{faq.question}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Regional Feeder Links Matrix */}
          <section className="mb-16 p-8 rounded-3xl bg-white/5 border border-white/10">
            <h2 className="text-xl font-bold mb-4 font-display text-white">Regional Punjab Service Network</h2>
            <p className="text-secondary text-xs mb-6">Explore dedicated regional development hubs across neighboring districts:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-xs font-mono">
              {citiesData.map((c) => (
                <Link
                  key={c.id}
                  to={`/services/${c.slug}`}
                  className={`p-2.5 rounded-xl border transition-all truncate flex items-center gap-1.5 ${c.id === city.id ? 'bg-accent-cold text-black font-bold border-accent-cold' : 'bg-white/5 text-slate-300 border-white/10 hover:border-accent-cold/50 hover:text-white'}`}
                >
                  <MapPin size={12} /> {c.name}
                </Link>
              ))}
            </div>
          </section>

          {/* CTA Box */}
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 border border-white/15 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Ready to Scale Your Business in {city.name}?</h2>
            <p className="text-secondary text-sm max-w-xl mx-auto mb-6">Get a custom 3D WebGL website, Flutter app, or WhatsApp bot built by Gurdharam Jeet Singh.</p>
            <a
              href={mainWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-black font-bold text-base hover:bg-[#1da851] transition-all shadow-xl cursor-pointer"
            >
              Start Direct Consultation on WhatsApp <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
