import React, { useEffect } from 'react';
import { ArrowLeft, Globe, Search, Layers, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WebDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-void text-primary pt-24 px-6 md:px-16 pb-20">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-accent-cold hover:opacity-80 transition-opacity mb-12 font-mono text-sm tracking-widest uppercase">
          <ArrowLeft className="mr-2" size={16} /> Back to Home
        </Link>
        
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
            Website Developer in Chandigarh <br />
            <span className="text-accent-cold">High-End 2D & 3D Web Platforms</span>
          </h1>
          {/* Answer-first summary block for AI Overviews (Phase E & G) */}
          <p className="text-lg md:text-xl text-secondary max-w-[66ch] leading-relaxed">
            I am a full-stack website developer serving businesses across Chandigarh, Ludhiana, Bathinda, and international markets. I build high-end 2D and 3D dynamic websites optimized for SEO from day one—managing everything from domain registration to interactive WebGL experiences for hospitals, travel agencies, restaurants, and corporate clients.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display">Development Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Layers className="text-accent-cold mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Interactive 3D Websites</h3>
              <p className="text-secondary text-sm mb-4 leading-relaxed">
                Go beyond flat templates. I build immersive, GPU-accelerated 3D web experiences using Three.js and Spline that instantly establish brand authority and captivate visitors.
              </p>
            </div>

            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Search className="text-accent-cold mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">SEO Architecture</h3>
              <p className="text-secondary text-sm mb-4 leading-relaxed">
                A beautiful site is useless if it ranks poorly. I implement strict technical SEO, semantic HTML, schema markups, and core web vitals optimization directly into the codebase.
              </p>
            </div>

            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Globe className="text-accent-cold mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Full-Stack Business Solutions</h3>
              <p className="text-secondary text-sm mb-4 leading-relaxed">
                Complete commercial infrastructure from domain purchase to database setup. Tailored for specialized niches like dental clinics, hostels, travel agencies, and eCommerce.
              </p>
            </div>

            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Zap className="text-accent-cold mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Dynamic Portfolios</h3>
              <p className="text-secondary text-sm mb-4 leading-relaxed">
                High-performance portfolio sites for agencies and professionals featuring smooth GSAP scrolling, custom cursors, and fluid animations.
              </p>
            </div>

          </div>
        </section>

        <section className="border border-white/10 p-8 rounded-3xl bg-black/40">
          <h2 className="text-2xl font-bold mb-6 font-display">Target Industries & Locations</h2>
          <p className="text-secondary leading-relaxed mb-4">
            Successfully delivered web platforms for diverse sectors including:
          </p>
          <ul className="list-disc list-inside text-secondary space-y-2 mb-8">
            <li>Hospitals and Dental Clinics</li>
            <li>Travel Agencies and Hostels</li>
            <li>Restaurants and Retail</li>
            <li>International Corporate Clients</li>
          </ul>
          <p className="text-secondary font-mono text-sm tracking-wider uppercase">
            Primary Service Areas: Chandigarh, Ludhiana, Bathinda, Punjab, Worldwide.
          </p>
        </section>
      </div>
    </main>
  );
}
