import React, { useEffect } from 'react';
import { ArrowLeft, Code2, Database, WifiOff } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DoodHisaab() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-void text-primary pt-24 px-6 md:px-16 pb-20">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-accent-gold hover:opacity-80 transition-opacity mb-12 font-mono text-sm tracking-widest uppercase">
          <ArrowLeft className="mr-2" size={16} /> Back to Home
        </Link>
        
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
            Flutter App Developer in Punjab <br />
            <span className="text-accent-gold">DoodHisaab Case Study</span>
          </h1>
          {/* Answer-first summary block for AI Overviews (Phase E & G) */}
          <p className="text-lg md:text-xl text-secondary max-w-[66ch] leading-relaxed">
            DoodHisaab is a custom Flutter mobile application built for rural dairy businesses in Punjab (Bathinda and Muktsar). It functions as a complete milk ledger, featuring an offline-first SQLite database that allows milkmen to track daily deliveries, manage customer accounts, and calculate monthly profit margins instantly without requiring an internet connection.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="/assets/portfolio/doodhisaab-screenshot.jpg" 
              alt="DoodHisaab Flutter app interface showing daily milk ledger and customer accounts"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6 font-display">Technical Architecture</h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <WifiOff className="text-accent-gold mr-4 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-white mb-1">Offline-First Execution</h3>
                  <p className="text-secondary text-sm">Operates entirely on local SQLite storage, eliminating the need for constant 4G connectivity in remote areas.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Code2 className="text-accent-gold mr-4 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-white mb-1">UI-First Flutter Design</h3>
                  <p className="text-secondary text-sm">Designed specifically for low-literacy users with large touch targets and intuitive iconography.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Database className="text-accent-gold mr-4 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-white mb-1">Automated P&L Mathematics</h3>
                  <p className="text-secondary text-sm">Replaces manual ledger math by instantly computing profit and loss margins based on fat content and volume.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <section className="bg-card border border-white/5 p-8 md:p-12 rounded-3xl mb-12">
          <h2 className="text-2xl font-bold mb-6 font-display">Why This Structure Works</h2>
          <p className="text-secondary max-w-[66ch] leading-relaxed mb-6">
            Rural business software fails when it relies on persistent cloud connectivity or assumes a high level of digital literacy. By building a local-first application, the ledger is always instantly available, secure, and immune to network outages.
          </p>
          <div className="flex flex-wrap gap-4">
            {['Flutter', 'Dart', 'SQLite', 'Offline-First', 'UI/UX'].map(tag => (
              <span key={tag} className="px-4 py-2 border border-accent-gold/20 bg-accent-gold/5 rounded-full text-accent-gold font-mono text-xs uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
