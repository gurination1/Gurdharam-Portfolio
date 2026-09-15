import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Scale, 
  FileText, 
  Briefcase, 
  DollarSign, 
  Users, 
  Award, 
  AlertCircle, 
  CheckCircle2, 
  ChevronRight, 
  ArrowLeft, 
  ExternalLink, 
  Printer, 
  Copy, 
  Check, 
  MessageCircle, 
  Lock, 
  Globe 
} from 'lucide-react';
import Footer from '../components/ui/footer';
import { getWhatsAppUrl } from '../lib/whatsapp';

export default function TermsPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'client' | 'contractor' | 'commission' | 'legal'>('all');
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyPageUrl = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const printDocument = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const legalWaUrl = getWhatsAppUrl("Hi Gurdharam, I have a legal / contractual inquiry regarding your Terms of Service and Independent Contractor Agreement.");

  return (
    <div className="min-h-screen bg-[#080808] text-[#f0ede6] selection:bg-[#d4a853] selection:text-[#080808]">
      {/* Background Decorative Ambient Glows */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-gradient-to-b from-[#d4a853]/10 via-[#38bdf8]/5 to-transparent blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] h-[400px] w-[500px] rounded-full bg-[#d4a853]/5 blur-[100px]" />
      </div>

      {/* Top Sticky Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#080808]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link 
            to="/" 
            className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#9a958c] hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>HQ Home</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={copyPageUrl}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-[#9a958c] hover:border-[#d4a853] hover:text-white transition-all"
              title="Copy link to send to prospective dev or client"
            >
              {copiedLink ? <Check className="h-3.5 w-3.5 text-[#25D366]" /> : <Copy className="h-3.5 w-3.5 text-[#d4a853]" />}
              <span>{copiedLink ? 'Link Copied' : 'Share Legal Link'}</span>
            </button>

            <button
              onClick={printDocument}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-[#9a958c] hover:border-white/30 hover:text-white transition-all"
              title="Print or Save as PDF"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print / PDF</span>
            </button>

            <a
              href={legalWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#25D366] px-3.5 py-1.5 font-mono text-xs font-bold text-black hover:bg-[#1da851] transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>Legal Desk</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="relative z-10 mx-auto max-w-5xl px-6 py-12 lg:py-16">
        {/* Document Metadata & Title Banner */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 font-mono text-xs text-[#d4a853] mb-4">
            <Scale className="h-3.5 w-3.5" />
            <span>COMMERCIAL LEGAL STANDARD • US &amp; INDIA COMPLIANT</span>
          </div>

          <h1 className="font-['Syne'] text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Terms of Service, Master Services Agreement &amp; Recruitment Policy
          </h1>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#9a958c] max-w-3xl">
            Legally binding terms governing software development engagements, client deliverables, independent contractor commissioning, product-wise sales commissions, and strict 24-month non-circumvention covenants.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 border-y border-white/10 py-3">
            <div>
              <strong className="text-white">Effective Date:</strong> September 15, 2026
            </div>
            <span>•</span>
            <div>
              <strong className="text-white">Govt MSME Reg:</strong> UDYAM-PB-03-0079744
            </div>
            <span>•</span>
            <div>
              <strong className="text-white">Jurisdiction:</strong> State of Delaware (US) / Punjab (IN)
            </div>
            <span>•</span>
            <div>
              <strong className="text-white">Version:</strong> 2026.4 Production Standard
            </div>
          </div>
        </div>

        {/* Interactive Filter Pills */}
        <div className="mb-10 sticky top-[69px] z-30 bg-[#080808]/95 backdrop-blur-md py-3 -mx-2 px-2 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <button
              onClick={() => setActiveTab('all')}
              className={`cursor-pointer rounded-lg px-3 py-1.5 transition-all ${
                activeTab === 'all'
                  ? 'border border-[#d4a853] bg-[#d4a853]/15 font-semibold text-[#d4a853]'
                  : 'border border-white/10 bg-white/5 text-[#9a958c] hover:border-white/20 hover:text-white'
              }`}
            >
              Unified Agreement (All)
            </button>
            <button
              onClick={() => setActiveTab('client')}
              className={`cursor-pointer rounded-lg px-3 py-1.5 transition-all ${
                activeTab === 'client'
                  ? 'border border-[#d4a853] bg-[#d4a853]/15 font-semibold text-[#d4a853]'
                  : 'border border-white/10 bg-white/5 text-[#9a958c] hover:border-white/20 hover:text-white'
              }`}
            >
              1. Client Terms &amp; MSA
            </button>
            <button
              onClick={() => setActiveTab('contractor')}
              className={`cursor-pointer rounded-lg px-3 py-1.5 transition-all ${
                activeTab === 'contractor'
                  ? 'border border-[#d4a853] bg-[#d4a853]/15 font-semibold text-[#d4a853]'
                  : 'border border-white/10 bg-white/5 text-[#9a958c] hover:border-white/20 hover:text-white'
              }`}
            >
              2. Developer &amp; Contractor
            </button>
            <button
              onClick={() => setActiveTab('commission')}
              className={`cursor-pointer rounded-lg px-3 py-1.5 transition-all ${
                activeTab === 'commission'
                  ? 'border border-[#d4a853] bg-[#d4a853]/15 font-semibold text-[#d4a853]'
                  : 'border border-white/10 bg-white/5 text-[#9a958c] hover:border-white/20 hover:text-white'
              }`}
            >
              3. Sales &amp; Commissions
            </button>
            <button
              onClick={() => setActiveTab('legal')}
              className={`cursor-pointer rounded-lg px-3 py-1.5 transition-all ${
                activeTab === 'legal'
                  ? 'border border-[#d4a853] bg-[#d4a853]/15 font-semibold text-[#d4a853]'
                  : 'border border-white/10 bg-white/5 text-[#9a958c] hover:border-white/20 hover:text-white'
              }`}
            >
              4. IP, NDA &amp; Liabilities
            </button>
          </div>
        </div>

        {/* Executive Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="flex items-center gap-2 text-[#d4a853] font-mono text-xs font-bold mb-2">
              <ShieldCheck className="h-4 w-4" />
              <span>CLIENT ASSURANCE</span>
            </div>
            <p className="text-xs text-[#9a958c] leading-relaxed">
              100% full intellectual property &amp; source code assignment upon final payment. Zero hidden monthly fees. Hand-coded, performance-hardened architecture.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="flex items-center gap-2 text-[#38bdf8] font-mono text-xs font-bold mb-2">
              <DollarSign className="h-4 w-4" />
              <span>TRANSPARENT COMMISSIONS</span>
            </div>
            <p className="text-xs text-[#9a958c] leading-relaxed">
              Clear product-wise payouts (₹1,000 to ₹4,000 / $20 to $100 USD flat per website deal; 15–20% on AI enterprise bots) disbursed within 5–7 business days of cleared client funds.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="flex items-center gap-2 text-[#25D366] font-mono text-xs font-bold mb-2">
              <Lock className="h-4 w-4" />
              <span>STUDIO &amp; REPUTATION PROTECTION</span>
            </div>
            <p className="text-xs text-[#9a958c] leading-relaxed">
              Strict 24-month non-circumvention &amp; non-solicitation covenant, 100% Work Made for Hire IP assignment, and enforceable liquidated damages.
            </p>
          </div>
        </div>

        {/* SECTION 1: CLIENT MASTER SERVICES AGREEMENT (MSA) */}
        {(activeTab === 'all' || activeTab === 'client') && (
          <section id="section-client" className="mb-14 rounded-2xl border border-white/10 bg-[#0d0d0d] p-6 sm:p-8">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
              <div className="rounded-lg bg-[#d4a853]/10 p-2 text-[#d4a853]">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#d4a853]">PART 1</span>
                <h2 className="font-['Syne'] text-xl sm:text-2xl font-bold text-white">
                  Client Master Services Agreement (MSA) &amp; Engagement Terms
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-[#c7c2b8] leading-relaxed">
              <div>
                <h3 className="text-base font-bold text-white mb-2">1.1 Scope of Work &amp; Statement of Deliverables</h3>
                <p>
                  All software development, AI bot engineering, 3D WebGL spatial design, and consulting services provided by Gurdharam AI Engineering Studio (&quot;Studio&quot;) are governed by an agreed written Statement of Work (SOW), proposal, or confirmed tier purchase (e.g., Starter Business, Growth Business + SEO, 2D + 3D Interactive, Ultra 3D Spatial Flagship). Any modifications, feature additions, layout redesigns, or architectural pivots requested after sprint kickoff shall constitute out-of-scope work requiring a written Change Order with adjusted fees and delivery timelines.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">1.2 Fixed-Fee Milestone Payments &amp; Delivery Condition</h3>
                <p>
                  Engagements are structured on milestone or flat-rate billing:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-300">
                  <li><strong className="text-white">Milestone 1 (50% Upfront Deposit):</strong> Due prior to project commencement, Git repository creation, UI wireframing, or architecture allocation. This deposit is non-refundable once engineering sprints have begun.</li>
                  <li><strong className="text-white">Milestone 2 (50% Final Balance):</strong> Due immediately upon delivery of the completed staging build, live preview demonstration, and QA verification.</li>
                  <li><strong className="text-white">Condition Precedent to Handover:</strong> Production source code repositories, Git transfer of ownership, administrative credentials, and live custom domain DNS cutovers shall NOT be released or transferred until 100% of agreed fees have cleared in the Studio&apos;s bank account.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">1.3 Client Assets, Feedback &amp; Project Dormancy</h3>
                <p>
                  The client agrees to provide all necessary digital assets (brand assets, logos, high-resolution media, product data, copy) and staging feedback within seven (7) business days of request. If the client fails to provide required input, approvals, or payment for more than twenty-one (21) consecutive calendar days, the project shall be classified as &quot;Dormant&quot;. Re-activating a dormant project requires scheduling realignment and a 15% restart administrative surcharge.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">1.4 Intellectual Property &amp; Code Ownership Transfer</h3>
                <p>
                  Upon 100% receipt and clearance of all agreed payments, the client receives exclusive, irrevocable, worldwide ownership of the custom-written front-end application code, custom styling, client-supplied assets, and unique website content. Pre-existing proprietary studio toolchains, procedural shader routines, boilerplates, and open-source libraries (e.g., React, TailwindCSS, Three.js, Lucide, Framer Motion under MIT/Apache 2.0 licenses) remain licensed according to their respective open-source terms, granting the client a perpetual, royalty-free license to use them as compiled in the deliverable.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">1.5 Third-Party APIs, Cloud Services &amp; Hosting Passthrough</h3>
                <p>
                  The client is solely responsible for procuring, maintaining, and funding all third-party API accounts, server hosting, domain registrations, and cloud consumption fees (including but not limited to OpenAI API, Anthropic Claude, Meta WhatsApp Cloud API, Sarvam AI, Twilio, Vercel, Supabase, Google Cloud Console, and AWS). The Studio bears zero liability for third-party upstream service interruptions, quota exhaustion, API deprecation, price hikes, or account suspensions imposed by third-party platform vendors.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">1.6 Seven-Day Acceptance Testing Window &amp; Post-Launch Warranty</h3>
                <p>
                  The client shall have a period of seven (7) calendar days following delivery of the staging build to test deliverables against the specifications set forth in the SOW. The Studio shall rectify any reproducible technical defects or bugs reported within this 7-day period at zero additional cost. Following the 7-day window, or upon client authorization of live DNS deployment, the deliverables shall be deemed irrevocably accepted. Future feature updates, design overhauls, or third-party breaking changes shall be handled under separate hourly billing or monthly maintenance contracts.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 2: INDEPENDENT CONTRACTOR & DEVELOPER RECRUITMENT AGREEMENT */}
        {(activeTab === 'all' || activeTab === 'contractor') && (
          <section id="section-contractor" className="mb-14 rounded-2xl border border-white/10 bg-[#0d0d0d] p-6 sm:p-8">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
              <div className="rounded-lg bg-[#38bdf8]/10 p-2 text-[#38bdf8]">
                <Briefcase className="h-5 w-5" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#38bdf8]">PART 2</span>
                <h2 className="font-['Syne'] text-xl sm:text-2xl font-bold text-white">
                  Independent Contractor &amp; Developer Recruitment Agreement
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-[#c7c2b8] leading-relaxed">
              <div>
                <h3 className="text-base font-bold text-white mb-2">2.1 Independent Contractor Classification (Zero Employment Relationship)</h3>
                <p>
                  Any developer, UI/UX designer, software engineer, or technical specialist recruited, engaged, or subcontracted by the Studio (&quot;Contractor&quot;) is engaged strictly as an Independent Contractor (Form 1099-NEC standard under US law and independent service provider under the Indian Contract Act 1872). 
                </p>
                <p className="mt-2 text-slate-300">
                  Nothing contained in this agreement or in any engagement shall be construed to create an employer-employee relationship, partnership, agency, or joint venture between the Studio and the Contractor. The Contractor retains full discretion over their working hours, location, and choice of equipment. The Contractor acknowledges they are NOT entitled to employee benefits, health insurance, paid leave, worker&apos;s compensation, or severance, and bears 100% sole responsibility for all federal, state, local, self-employment, income, and GST taxes.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">2.2 Work Made for Hire &amp; Complete 100% Intellectual Property Assignment</h3>
                <p>
                  In accordance with 17 U.S.C. § 101 (United States Copyright Act) and Section 17 of the Indian Copyright Act 1957, all deliverables, computer code, software architecture, pull requests, scripts, 3D assets, shaders, visual mockups, documentation, and inventions prepared by the Contractor in connection with Studio projects shall be deemed &quot;Work Made for Hire&quot; owned exclusively by the Studio.
                </p>
                <p className="mt-2 text-slate-300">
                  To the extent any deliverable or portion thereof is not recognized as a work made for hire by operation of law, the Contractor hereby unconditionally and irrevocably assigns, transfers, and conveys to the Studio 100% of all right, title, and interest throughout the universe in perpetuity, including all copyrights, patent rights, trade secret rights, and moral rights, without any reservation of rights or future claim to royalties.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">2.3 Code Standards, Security Auditing &amp; Zero-Vendor-Leak Guarantee</h3>
                <p>
                  The Contractor covenants that all code submitted is clean, original, or derived strictly from permissively licensed open-source libraries (MIT, Apache 2.0, BSD) explicitly authorized by the Studio Lead Architect. The Contractor warrants that no proprietary code, GPL/copyleft code, or third-party trade secrets are incorporated into Studio deliverables.
                </p>
                <p className="mt-2 text-slate-300">
                  Contractors must strictly observe OWASP security benchmarks. Committing unencrypted API keys, client secrets, passwords, or personal data into any Git repository is strictly prohibited and constitutes grounds for immediate termination without remuneration, plus liability for security remediation damages.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">2.4 Milestone Verification &amp; Acceptance Gate</h3>
                <p>
                  Contractor compensation is payable strictly upon verification and acceptance of assigned sprint tasks by the Studio Lead Architect (Gurdharam Jeet Singh). If submitted work contains bugs, fails TypeScript compilation, breaks responsive layouts, or fails performance gates (&lt;90 Lighthouse / dropped frames), the Contractor must remedy the defect without additional billing prior to invoice clearance.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 3: SALES RECRUITMENT, COMMISSIONS & AFFILIATE POLICY */}
        {(activeTab === 'all' || activeTab === 'commission') && (
          <section id="section-commission" className="mb-14 rounded-2xl border border-white/10 bg-[#0d0d0d] p-6 sm:p-8">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
              <div className="rounded-lg bg-[#25D366]/10 p-2 text-[#25D366]">
                <DollarSign className="h-5 w-5" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#25D366]">PART 3</span>
                <h2 className="font-['Syne'] text-xl sm:text-2xl font-bold text-white">
                  Sales Recruitment, Deal Commissions &amp; Affiliate Payout Policy
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-[#c7c2b8] leading-relaxed">
              <div>
                <h3 className="text-base font-bold text-white mb-2">3.1 Qualifying Deals &amp; Registered Lead Protocol</h3>
                <p>
                  Sales representatives, business development contractors, and affiliates (&quot;Sales Partners&quot;) are eligible to earn product-wise commissions on qualified deals. A &quot;Qualifying Deal&quot; is strictly defined as a prospective client who:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-300">
                  <li>Was formally registered with the Studio in writing via official lead registration channel prior to contact;</li>
                  <li>Was not already in active discussion with or an existing client of the Studio;</li>
                  <li>Executes a legally binding Studio Master Services Agreement or tier contract; and</li>
                  <li>Has paid in full, and whose funds have fully cleared in the Studio&apos;s bank account.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">3.2 Product-Wise Commission Schedule (Transparent Rates)</h3>
                <p>
                  Commissions are earned per closed and cleared deal according to the following schedule:
                </p>

                <div className="mt-4 overflow-x-auto rounded-xl border border-white/10 bg-black/40">
                  <table className="w-full text-left font-mono text-xs">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/5 text-[#9a958c]">
                        <th className="p-3">PRODUCT / ARCHITECTURE PACKAGE</th>
                        <th className="p-3">CLIENT FLAT RATE</th>
                        <th className="p-3 text-[#25D366]">AFFILIATE COMMISSION</th>
                        <th className="p-3">PAYOUT CONDITION</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-slate-300">
                      <tr>
                        <td className="p-3 font-semibold text-white">Starter Business Website</td>
                        <td className="p-3">₹5,000 / $100 USD</td>
                        <td className="p-3 text-[#25D366] font-bold">₹1,000 / $20 USD flat</td>
                        <td className="p-3">Cleared 100% client payment</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-white">Growth Business + SEO Flagship</td>
                        <td className="p-3">₹7,000 / $150 USD</td>
                        <td className="p-3 text-[#25D366] font-bold">₹1,500 / $30 USD flat</td>
                        <td className="p-3">Cleared 100% client payment</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-white">2D + 3D Interactive Platform</td>
                        <td className="p-3">₹12,000 / $250 USD</td>
                        <td className="p-3 text-[#25D366] font-bold">₹2,500 / $50 USD flat</td>
                        <td className="p-3">Cleared 100% client payment</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-white">Ultra 3D Spatial Twin Flagship</td>
                        <td className="p-3">₹20,000 / $500 USD</td>
                        <td className="p-3 text-[#25D366] font-bold">₹4,000 / $100 USD flat</td>
                        <td className="p-3">Cleared 100% client payment</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-white">Enterprise AI / Voice Telephony / VideoGen</td>
                        <td className="p-3">Bespoke Contract</td>
                        <td className="p-3 text-[#25D366] font-bold">15% – 20% Net Deal Value</td>
                        <td className="p-3">Cleared 1st-month invoice</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">3.3 Payout Schedule &amp; Cleared Funds Requirement</h3>
                <p>
                  Commissions are calculated and disbursed strictly within five (5) to seven (7) business days following the date that client funds have fully cleared in the Studio&apos;s commercial bank account. No commissions shall be fronted, loaned, or advanced on uncollected receivables or pending credit card authorizations.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">3.4 Clawback &amp; Refund Chargeback Provisions</h3>
                <p>
                  If a client requests a refund, executes a bank chargeback, cancels a credit transaction, or defaults on their payment obligations, any commission paid to the Sales Partner for that transaction shall be automatically forfeited and clawed back. The Studio reserves the legal right to offset such clawback amounts against future commission payouts or demand immediate repayment within fourteen (14) days.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">3.5 Truth in Advertising &amp; Representation Ethics</h3>
                <p>
                  Sales Partners must accurately present Studio capabilities, standard turnaround times, and pricing as documented on the official platform. Sales Partners are strictly prohibited from making false technical guarantees, unauthorized price reductions, or engaging in spam or deceptive email/WhatsApp solicitations. Any violation terminates the affiliation immediately with complete forfeiture of unpaid balances.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 4: STRICT 24-MONTH NON-CIRCUMVENTION, NDA & LEGAL PROTECTIONS */}
        {(activeTab === 'all' || activeTab === 'legal') && (
          <section id="section-legal" className="mb-14 rounded-2xl border border-white/10 bg-[#0d0d0d] p-6 sm:p-8">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
              <div className="rounded-lg bg-[#d4a853]/10 p-2 text-[#d4a853]">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#d4a853]">PART 4 &amp; 5</span>
                <h2 className="font-['Syne'] text-xl sm:text-2xl font-bold text-white">
                  24-Month Strict Non-Circumvention, NDA &amp; Liability Caps
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-[#c7c2b8] leading-relaxed">
              <div className="rounded-xl border border-red-500/20 bg-red-950/20 p-4">
                <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold mb-1">
                  <AlertCircle className="h-4 w-4" />
                  <span>CRITICAL PERSISTENT COVENANT — 24 MONTH NON-CIRCUMVENTION</span>
                </div>
                <p className="text-xs text-red-200/90 leading-relaxed">
                  Every developer, contractor, sales rep, and affiliate expressly agrees that during engagement and for <strong>twenty-four (24) consecutive months</strong> following termination, they shall NOT directly or indirectly bypass or circumvent the Studio to solicit, contact, contract with, or provide software/AI services to any client, lead, or contact introduced through or worked on during their engagement with the Studio.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">4.1 Non-Circumvention &amp; Non-Solicitation Covenant</h3>
                <p>
                  The Contractor and Sales Partner recognize that the Studio has expended substantial capital, time, proprietary trade secrets, and reputation in establishing its client relationships. To protect these legitimate business interests, the Contractor and Sales Partner agree that for twenty-four (24) months post-termination, they will not:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-300">
                  <li>Directly or indirectly contract with, pitch, bill, or service any client or lead introduced by the Studio;</li>
                  <li>Solicit, induce, or encourage any client to sever or reduce their commercial relationship with the Studio;</li>
                  <li>Accept off-the-books or side compensation from any Studio client for work relating to Studio projects; or</li>
                  <li>Solicit, hire, or entice away any engineer, developer, designer, or contractor affiliated with the Studio.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">4.2 Injunctive Relief &amp; Enforceable Liquidated Damages</h3>
                <p>
                  Any breach of Section 4.1 causes irreparable injury to the Studio for which monetary damages alone would be inadequate. The Studio shall be entitled to seek immediate preliminary and permanent injunctive relief, specific performance, and temporary restraining orders in any court of competent jurisdiction without necessity of posting a bond.
                </p>
                <p className="mt-2 text-slate-300">
                  In addition to injunctive relief, the breaching party agrees to pay the Studio liquidated damages equal to <strong>100% of all gross revenues, fees, or remuneration received or receivable</strong> from the circumvented client, plus reimbursement of all attorney&apos;s fees, forensic audit fees, and court costs incurred by the Studio in enforcing this covenant.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">4.3 Non-Disclosure Agreement (NDA) &amp; Trade Secret Secrecy</h3>
                <p>
                  &quot;Confidential Information&quot; includes, without limitation: private Git source repositories, local LLM quantization scripts, proprietary prompts, audio pipeline latencies, client identities, pricing formulas, margin sheets, and operational workflows. Contractors and Sales Partners agree to hold all Confidential Information in strict confidence and shall not disclose or exploit such information for personal gain or for the benefit of any third party. This obligation survives indefinitely beyond termination.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">4.4 Limitation of Liability &amp; Consequential Damages Cap</h3>
                <p>
                  To the maximum extent permitted by applicable commercial law:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-300">
                  <li>In no event shall the Studio, its founders, or affiliates be liable to any client, contractor, or third party for indirect, incidental, special, consequential, or punitive damages (including loss of profits, data corruption, or business interruption), even if advised of the possibility thereof.</li>
                  <li>The cumulative aggregate liability of the Studio for any and all claims arising out of any engagement shall not exceed the total fees actually paid to the Studio by the client under the specific SOW in the three (3) months preceding the event giving rise to liability.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">4.5 Governing Law, Dual-Jurisdiction &amp; Mandatory Arbitration</h3>
                <p>
                  <strong className="text-white">Cross-Border &amp; US Transactions:</strong> For international clients, overseas contracts, and international independent contractors, this Agreement shall be interpreted and governed in accordance with the substantive commercial laws of the State of Delaware, United States, without giving effect to conflicts of laws principles.
                </p>
                <p className="mt-2 text-slate-300">
                  <strong className="text-white">Domestic Indian Transactions:</strong> For domestic Indian transactions and Indian entities, this Agreement shall be governed in accordance with the laws of the Republic of India, under the exclusive jurisdiction of the competent courts in Bathinda / Muktsar, Punjab.
                </p>
                <p className="mt-2 text-slate-300">
                  <strong className="text-white">Mandatory Dispute Resolution:</strong> The parties agree to attempt good-faith executive negotiation for a period of fourteen (14) days before commencing formal proceedings. Any unresolved dispute shall be resolved via final and binding arbitration (under the American Arbitration Association for international disputes, or the Indian Arbitration and Conciliation Act 1996 for domestic disputes).
                </p>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 6: CONTACT & LEGAL INQUIRIES */}
        <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#d4a853] block mb-1">
                LEGAL NOTICES &amp; CONTRACT EXECUTION
              </span>
              <h3 className="font-['Syne'] text-xl font-bold text-white">
                Have a Legal or Contractor Inquiry?
              </h3>
              <p className="mt-1 text-xs text-[#9a958c] max-w-lg leading-relaxed">
                Send prospective developer pull requests, NDA requests, or client master agreements directly to the lead engineering desk.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={legalWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 font-mono text-xs font-bold text-black hover:bg-[#1da851] transition-all shadow-lg active:scale-95"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Connect with Legal Desk</span>
              </a>

              <Link
                to="/websites"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-mono text-xs text-white hover:border-[#d4a853] hover:text-[#d4a853] transition-all"
              >
                <span>View Website Packages</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
