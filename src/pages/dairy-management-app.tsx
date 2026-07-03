import React, { useEffect } from 'react';
import { ArrowLeft, Milk, Calculator, WifiOff, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DairyManagementApp() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="min-h-screen bg-void text-primary pt-24 px-6 md:px-16 pb-20">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-accent-gold hover:opacity-80 transition-opacity mb-12 font-mono text-sm tracking-widest uppercase">
          <ArrowLeft className="mr-2" size={16} /> Back to Home
        </Link>

        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
            Dairy Management App — Flutter <br />
            <span className="text-accent-gold">Offline Milk Ledger for Rural India</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary max-w-[66ch] leading-relaxed">
            I develop custom dairy management applications using Flutter that work entirely offline. My shipped product, DoodHisaab, is a complete milk accounting system built for rural dairy businesses in Punjab — tracking daily deliveries, managing customer accounts, and computing monthly profit-and-loss margins instantly on the device without requiring any internet connection.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display">Core Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Milk className="text-accent-gold mb-4" size={28} />
              <h3 className="font-bold text-white mb-2">Daily Collection Tracking</h3>
              <p className="text-secondary text-sm leading-relaxed">Record morning and evening milk collections per customer with fat content, volume, and rate. Supports multiple rate slabs based on fat percentage — matching how dairy cooperatives actually operate in India.</p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Calculator className="text-accent-gold mb-4" size={28} />
              <h3 className="font-bold text-white mb-2">Automated P&L Computation</h3>
              <p className="text-secondary text-sm leading-relaxed">Replaces manual ledger math entirely. Instant monthly profit/loss calculations per customer and overall business, with daily, weekly, and monthly breakdowns.</p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <WifiOff className="text-accent-gold mb-4" size={28} />
              <h3 className="font-bold text-white mb-2">100% Offline Operation</h3>
              <p className="text-secondary text-sm leading-relaxed">Local SQLite database on device. No cloud dependency, no subscription fees, no data uploaded to external servers. Works in areas with zero connectivity.</p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Smartphone className="text-accent-gold mb-4" size={28} />
              <h3 className="font-bold text-white mb-2">UI-First for Low Literacy</h3>
              <p className="text-secondary text-sm leading-relaxed">Designed specifically for users with minimal smartphone experience. Large touch targets, icon-first navigation, and minimal text input — tested with actual milkmen in Punjab villages.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display">Why India's Dairy Industry Needs This</h2>
          <p className="text-secondary max-w-[66ch] leading-relaxed mb-6">
            India is the world's largest milk producer with a $200+ billion dairy industry. Over 80 million rural households depend on dairy farming. Most small dairy operators still use handwritten notebooks for accounting — losing money to calculation errors, forgotten entries, and disputes over fat-content pricing. A dedicated offline app solves this at near-zero operating cost.
          </p>
        </section>

        <section className="bg-card border border-white/5 p-8 md:p-12 rounded-3xl mb-12">
          <h2 className="text-2xl font-bold mb-4 font-display">Shipped Product: DoodHisaab</h2>
          <p className="text-secondary max-w-[66ch] leading-relaxed mb-6">
            DoodHisaab is a working dairy management application deployed to real milkmen in Punjab's Muktsar and Bathinda regions. It replaced manual ledger books and eliminated monthly accounting disputes.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            {['Flutter', 'Dart', 'SQLite', 'Offline-First', 'UI/UX Design', 'Rural Tech', 'Dairy Industry', 'India'].map(tag => (
              <span key={tag} className="px-4 py-2 border border-accent-gold/20 bg-accent-gold/5 rounded-full text-accent-gold font-mono text-xs uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
          <Link to="/case-studies/doodhisaab" className="inline-flex items-center gap-2 text-accent-gold font-mono text-sm uppercase tracking-wider hover:opacity-80 transition-opacity">
            Read Full Case Study →
          </Link>
        </section>
      </div>
    </main>
  );
}
