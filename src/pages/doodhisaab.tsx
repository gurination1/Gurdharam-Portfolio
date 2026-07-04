import React, { useEffect } from 'react';
import { ArrowLeft, Code2, Database, WifiOff, FileText, CheckCircle2, Users, Calendar, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';

export default function DoodHisaab() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "DoodHisaab Case Study | Flutter App Punjab | Gurdharam";
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
            DoodHisaab is a custom Flutter mobile application built for rural dairy businesses and milk collection centers in Punjab (Bathinda and Muktsar). It functions as a complete milk ledger, featuring an offline-first SQLite database that allows milkmen to track daily collections, manage customer accounts, and calculate monthly profit margins instantly without requiring an internet connection.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center bg-black/40 p-12">
            <img 
              src="/assets/portfolio/doodhisaab-logo.png" 
              alt="DoodHisaab Flutter app logo"
              className="w-48 h-48 object-contain drop-shadow-2xl"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6 font-display text-white">Technical Architecture</h2>
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

        {/* In-depth project writeup */}
        <section className="mb-16 space-y-6 text-left">
          <h2 className="text-2xl font-bold font-display text-white">Project Challenge & Context in Punjab</h2>
          <p className="text-secondary leading-relaxed max-w-[66ch]">
            Dairy farming and milk collection form the economic core of rural Punjab. However, local milk collection operators and milkmen (known locally as *doodhis*) traditionally record twice-daily collections in physical paper notebooks. This manual ledger method is highly prone to mathematical errors, payment disputes, and lost data due to damaged notebooks. Because cellular connectivity is highly unstable in the outer fields of Muktsar Sahib and Bathinda, any standard cloud-hosted SaaS tool is completely unusable during active collection hours.
          </p>
          <p className="text-secondary leading-relaxed max-w-[66ch]">
            These connectivity constraints mean that milk collection centers need a solution that runs locally on simple mobile hardware while matching the operational realities of local cooperatives.
          </p>

          <h2 className="text-2xl font-bold font-display text-white">The Engineering Solution</h2>
          <p className="text-secondary leading-relaxed max-w-[66ch]">
            To resolve this connectivity gap, I architected **DoodHisaab** as an offline-first mobile database application. Built with Flutter, the app utilizes a local relational SQLite database embedded directly inside the device sandbox. This guarantees that data is written immediately, even without internet access.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-card/50 border border-white/5 p-6 rounded-2xl">
              <FileText className="text-accent-gold mb-3" size={24} />
              <h3 className="font-bold text-white mb-2 text-base">Fat/SNF Math</h3>
              <p className="text-secondary text-xs leading-relaxed">
                App applies base pricing slabs to compute milk value dynamically, depending on FAT and SNF parameters.
              </p>
            </div>

            <div className="bg-card/50 border border-white/5 p-6 rounded-2xl">
              <Users className="text-accent-gold mb-3" size={24} />
              <h3 className="font-bold text-white mb-2 text-base">Multi-Client</h3>
              <p className="text-secondary text-xs leading-relaxed">
                Supports profiles for hundreds of farmers, storing chronological transaction histories locally.
              </p>
            </div>

            <div className="bg-card/50 border border-white/5 p-6 rounded-2xl">
              <CheckCircle2 className="text-accent-gold mb-3" size={24} />
              <h3 className="font-bold text-white mb-2 text-base">PDF Receipts</h3>
              <p className="text-secondary text-xs leading-relaxed">
                Generates neat summary statements locally, which operators share over WhatsApp when network resumes.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">SQLite Database Schema and Data Integrity</h3>
          <p className="text-secondary leading-relaxed max-w-[66ch]">
            The underlying database is built using a normalized schema that links clients (farmers) to daily collections. The main collections table tracks volume, milk FAT percentage, SNF (Solids-Not-Fat) parameters, rate-per-liter, and the calculated total cost. To prevent concurrency conflicts when writing morning and evening records, the database triggers use automated transaction blocks.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Operational Outcomes & Direct Impact</h3>
          <p className="text-secondary leading-relaxed max-w-[66ch]">
            Since deployment at select collection centers in Muktsar, DoodHisaab has delivered measurable efficiency improvements:
          </p>
          <ul className="list-disc list-inside text-secondary space-y-2 max-w-[66ch] pl-4">
            <li><strong>Saved 1.5 hours daily:</strong> Collection operators no longer spend hours at night recalculating entries in physical books.</li>
            <li><strong>Zero payment disputes:</strong> Automatic calculations based on transparent fat pricing slabs eliminated customer complaints.</li>
            <li><strong>100% Data Preservation:</strong> Even when phones are dropped or changed, localized SQLite exports ensure database state remains safe.</li>
          </ul>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">UI/UX Design Tailored for Rural Mobile Operators</h3>
          <p className="text-secondary leading-relaxed max-w-[66ch]">
            Software interfaces designed for urban office users fail immediately when deployed in hot, dusty rural milk collection centers. To make DoodHisaab usable under field conditions, I designed the user interface around high-contrast themes and simplified input mechanisms. 
          </p>
          <p className="text-secondary leading-relaxed max-w-[66ch]">
            Instead of typing parameters on standard, small alphanumeric mobile keyboards, operators use customized, large numeric pads with single-tap selections. Every input (like entering fat content or quantity) triggers localized audio signals in Punjabi, confirming success and preventing keystroke errors. Visual graphs show monthly milk collections and payments per farmer, helping dairy owners communicate billing parameters clearly.
          </p>
        </section>

        <section className="bg-card border border-white/5 p-8 md:p-12 rounded-3xl mb-12">
          <h2 className="text-2xl font-bold mb-6 font-display text-white">Why This Structure Works</h2>
          <p className="text-secondary max-w-[66ch] leading-relaxed mb-6">
            Rural business software fails when it relies on persistent cloud connectivity or assumes a high level of digital literacy. By building a local-first application, the ledger is always instantly available, secure, and immune to network outages.
          </p>
          <div className="flex flex-wrap gap-4">
            {['Flutter', 'Dart', 'SQLite', 'Offline-First', 'UI/UX Design', 'Rural Agritech'].map(tag => (
              <span key={tag} className="px-4 py-2 border border-accent-gold/20 bg-accent-gold/5 rounded-full text-accent-gold font-mono text-xs uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section className="bg-card border border-white/5 p-8 rounded-3xl mb-12 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
          <div>
            <h3 className="text-white font-bold mb-1">Looking for a similar custom mobile ledger or app?</h3>
            <p className="text-secondary text-sm">Explore my design and consulting services for offline architectures.</p>
          </div>
          <div className="flex gap-4">
            <Link to="/services/dairy-management-app-flutter" className="px-4 py-2 bg-accent-gold/10 hover:bg-accent-gold/20 text-accent-gold border border-accent-gold/20 rounded-xl text-xs font-mono uppercase tracking-wider transition-colors">
              Dairy App Services
            </Link>
            <Link to="/services/offline-ai-app-development" className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl text-xs font-mono uppercase tracking-wider transition-colors">
              Offline AI Dev
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
