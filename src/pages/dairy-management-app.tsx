import React, { useEffect } from 'react';
import { ArrowLeft, Milk, Calculator, WifiOff, Smartphone, ShieldCheck, Database, RefreshCw, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';

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
            Dairy Management App Developer <br />
            <span className="text-accent-gold">Flutter Offline Milk Ledger</span>
          </h1>
          {/* Answer-first summary block for AI Overviews */}
          <p className="text-lg md:text-xl text-secondary max-w-[66ch] leading-relaxed font-semibold">
            I build custom, 100% offline dairy management applications in Flutter designed for rural milk businesses and cooperatives. My software replaces manual ledger books, instantly calculates daily FAT/SNF pricing, computes monthly profit-and-loss margins without errors, and securely stores all data locally, saving dairy owners hours of manual math and eliminating payment disputes.
          </p>
          <div className="mt-8 flex gap-4">
             <Link to="/#contact" className="bg-accent-gold text-void font-bold py-3 px-8 rounded-full hover:bg-white transition-colors duration-300">
                Digitize Your Dairy
             </Link>
          </div>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-display text-white">Core Features of the Dairy Management App</h2>
          <p className="text-secondary leading-relaxed max-w-[66ch] mb-8">
            India's massive dairy industry relies heavily on complex, daily micro-transactions. Standard accounting apps do not work because they lack industry-specific logic (like FAT-based pricing) and require constant internet connectivity. My custom applications solve these precise problems.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Milk className="text-accent-gold mb-4" size={28} />
              <h3 className="font-bold text-white mb-2 text-lg">Daily Collection Tracking</h3>
              <p className="text-secondary text-sm leading-relaxed">Record morning and evening milk collections per customer effortlessly. Input fat content, volume, and automatic rates. The system supports multiple rate slabs based on fat percentage, perfectly matching how actual dairy cooperatives operate in India.</p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Calculator className="text-accent-gold mb-4" size={28} />
              <h3 className="font-bold text-white mb-2 text-lg">Automated P&L Computation</h3>
              <p className="text-secondary text-sm leading-relaxed">Replaces manual ledger math entirely. Get instant monthly profit/loss calculations per customer and for the overall business, featuring granular daily, weekly, and monthly breakdowns with zero human calculation errors.</p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <WifiOff className="text-accent-gold mb-4" size={28} />
              <h3 className="font-bold text-white mb-2 text-lg">100% Offline Operation</h3>
              <p className="text-secondary text-sm leading-relaxed">Operates on a local SQLite database directly on the device. No cloud dependency, no monthly subscription fees, and no data uploaded to external servers. It works flawlessly in rural areas with zero internet connectivity.</p>
            </div>
            <div className="bg-card border border-white/5 p-8 rounded-3xl">
              <Smartphone className="text-accent-gold mb-4" size={28} />
              <h3 className="font-bold text-white mb-2 text-lg">UI-First for Low Literacy</h3>
              <p className="text-secondary text-sm leading-relaxed">Designed specifically for users with minimal smartphone experience. Featuring large touch targets, icon-first navigation, voice prompts, and minimal text input — rigorously tested with actual milkmen in rural Punjab villages.</p>
            </div>
          </div>
        </section>

        {/* Detailed technical sections */}
        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-bold font-display text-white">Automated FAT and SNF Rate Slabs</h2>
          <p className="text-secondary leading-relaxed max-w-[66ch]">
            In the Indian dairy industry, milk is not sold at a flat generic rate. Cooperative collection operators calculate prices dynamically based on two critical parameters: **FAT (fat content)** and **SNF (Solids-Not-Fat)**. Recording this manually in registers requires complex mathematical formulas that invariably lead to human errors and payment disputes at the end of the month.
          </p>
          <div className="space-y-6 bg-card border border-white/5 p-8 rounded-3xl">
            <div className="flex items-start gap-4">
              <ShieldCheck className="text-accent-gold mt-1 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-white mb-1">Real-Time Milk Fat Pricing Engine</h4>
                <p className="text-secondary text-sm leading-relaxed">
                  My Flutter application runs a custom calculation engine that instantly calculates the price per liter of milk using the input FAT percentage, SNF percentage, and current dynamic base pricing matrices. This ensures milkmen can generate immediate, accurate receipts and payouts to farmers right at the collection desk.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Database className="text-accent-gold mt-1 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-white mb-1">Local SQLite Relational Schema</h4>
                <p className="text-secondary text-sm leading-relaxed">
                  To ensure 100% data integrity without an active internet connection, the app runs a powerful local, relational SQLite database on-device. Tables are heavily optimized for incredibly fast querying of historical collections, cumulative payments, monthly accounts, and total milk volume logs over years of usage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local receipt rendering details */}
        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-bold font-display text-white">Local Document Rendering & Offline Backups</h2>
          <p className="text-secondary leading-relaxed max-w-[66ch]">
            Sharing statements and billing accounts over messaging apps like WhatsApp requires optimized, lightweight document formats. My applications generate these invoices on the fly using entirely local PDF rendering templates.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-white/5 p-6 rounded-2xl">
              <FileText className="text-accent-gold mb-3" size={24} />
              <h4 className="font-bold text-white mb-2 text-base">On-Device PDF Compilation</h4>
              <p className="text-secondary text-sm leading-relaxed">
                The application compiles complex monthly invoice summaries locally into clean PDF files in under 500ms, allowing operators to send them directly to farmers over WhatsApp using native local share sheets.
              </p>
            </div>
            <div className="bg-card border border-white/5 p-6 rounded-2xl">
              <RefreshCw className="text-accent-gold mb-3" size={24} />
              <h4 className="font-bold text-white mb-2 text-base">Encrypted SQLite Backups</h4>
              <p className="text-secondary text-sm leading-relaxed">
                Encrypted SQLite backup logs can be exported directly to external memory SD cards or synced silently to Google Drive accounts when the user connects to Wi-Fi, completely preventing data loss.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 text-left">
          <h2 className="text-2xl font-bold mb-6 font-display text-white">Why the Dairy Industry Needs This Software</h2>
          <p className="text-secondary max-w-[66ch] leading-relaxed mb-6">
            India is the world's largest milk producer, with a $200+ billion dairy industry. Over 80 million rural households depend heavily on daily dairy farming. Despite this massive scale, most small dairy operators still rely on handwritten notebooks for accounting. They lose money to calculation errors, forgotten entries, and constant disputes over fat-content pricing. A dedicated offline application solves this massive infrastructure problem at a near-zero operating cost.
          </p>
        </section>

        <section className="bg-card border border-white/5 p-8 md:p-12 rounded-3xl mb-16">
          <h2 className="text-2xl font-bold mb-4 font-display text-white">Shipped Product Portfolio: DoodHisaab</h2>
          <p className="text-secondary max-w-[66ch] leading-relaxed mb-6">
            DoodHisaab is a fully functional, working dairy management application currently deployed to real milkmen in Punjab's Muktsar and Bathinda regions. It successfully replaced traditional manual ledger books and eliminated monthly accounting disputes for its users.
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

        {/* FAQs Section */}
        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-bold font-display text-white">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">
                Can the app share monthly milk receipts with farmers over WhatsApp?
              </h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[66ch]">
                Yes. The application runs a local rendering engine that securely converts monthly collection tables into a professional, easy-to-read PDF receipt. This file can be shared directly with the farmer over WhatsApp using the native mobile share sheet functionality, even when internet connectivity is extremely limited.
              </p>
            </div>

            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">
                How do we prevent data loss if the phone gets damaged or lost?
              </h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[66ch]">
                Although the application is strictly 100% offline-first to respect rural constraints, it includes a robust database backup option. Users can safely export the encrypted SQLite database file directly to a micro SD card, external drive, or upload a manual backup to their Google Drive account with just one tap when they reach an area with internet access.
              </p>
            </div>

            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">
                Is the software interface available in regional languages like Punjabi and Hindi?
              </h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[66ch]">
                Yes, localization is an absolutely core feature of the product. The application fully supports Punjabi, Hindi, and English natively. It also utilizes clear voice prompts and large numeric keypads to ensure dairy owners and operators can navigate it flawlessly without encountering typing or language difficulties.
              </p>
            </div>

            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">
                Does the app handle both morning and evening milk collection shifts?
              </h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[66ch]">
                Yes, the tracking system is built explicitly to support the standard Indian dairy collection cycle. It distinctly logs both morning and evening shifts, applying correct temporal timestamps to ensure the daily totals are calculated flawlessly without mixing up the collections.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
