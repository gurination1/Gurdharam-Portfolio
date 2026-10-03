import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Cpu, MessageSquare, ShieldCheck, Zap, ArrowUpRight, Code2, Database, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function BlogPostMetaWebhook() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Meta WhatsApp Cloud API Webhook | Gurdharam";
  }, []);

  return (
    <main className="min-h-screen bg-[#080808] text-[#f0ede6] pt-24 px-6 md:px-16 pb-20 selection:bg-[#25D366]/30 selection:text-white font-sans antialiased">
      <div className="max-w-3xl mx-auto">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-[#25D366] hover:opacity-80 transition-opacity mb-10 font-mono text-xs tracking-wider uppercase"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> [ RETURN TO ALL ENGINEERING ARTICLES ]
        </Link>
        
        <header className="mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-3.5 py-1 font-mono text-xs text-[#25D366]">
            <MessageSquare className="h-3.5 w-3.5" />
            <span>ENGINEERING SPEC // DIRECT META CLOUD API ARCHITECTURE</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-['Syne'] font-extrabold leading-tight text-white mb-6">
            Self-Hosting Meta WhatsApp Webhooks <br />
            <span className="text-[#25D366]">HMAC-SHA256 Security, Redis Deduplication &amp; Zero SaaS Fees</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#9a958c] mb-6">
            <span>By Gurdharam Jeet Singh</span>
            <span>•</span>
            <span>Published: Sep 2026</span>
            <span>•</span>
            <span>11 Min Read</span>
            <span>•</span>
            <span className="text-[#25D366]">Production Deployed Architecture</span>
          </div>
          <p className="text-base md:text-lg text-[#9a958c] leading-relaxed">
            Why Indian businesses waste ₹36,000 to ₹1,80,000 annually on third-party WhatsApp SaaS aggregators (WATI, AiSensy, Interakt). Complete architectural guide to self-hosting a direct Node.js webhook service with cryptographic signature verification, Redis deduplication, and sub-100ms response times.
          </p>
        </header>

        {/* Quantified Financial & Tech Benchmarks */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="rounded-xl border border-[#25D366]/30 bg-[#25D366]/5 p-5">
            <span className="font-mono text-[0.68rem] text-[#25D366] block mb-1">RECURRING SAAS FEE</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">₹0 / Mo</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">Direct Meta Graph API</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-5">
            <span className="font-mono text-[0.68rem] text-[#38bdf8] block mb-1">FREE CONVERSATIONS</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">1,000 / Mo</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">Direct from Meta</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-5">
            <span className="font-mono text-[0.68rem] text-[#f0ede6] block mb-1">ACK LATENCY</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">&lt; 85 ms</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">Prevents Meta Retries</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-5">
            <span className="font-mono text-[0.68rem] text-[#d4a853] block mb-1">SECURITY STANDARD</span>
            <div className="font-['Syne'] text-3xl font-extrabold text-white">HMAC-256</div>
            <p className="font-mono text-[0.68rem] text-[#9a958c] mt-1">Timing-Safe Verified</p>
          </div>
        </div>

        {/* Section 1: The SaaS Tax */}
        <section className="mb-14 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#25D366]">
            // 01. THE WHATSAPP SAAS MARKUP TAX
          </span>
          <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-white">
            Why Intermediary Aggregators Drain Small Business Margins
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-[#9a958c]">
            Most commercial businesses in India assume connecting to the WhatsApp Business API requires signing up for expensive subscription platforms like WATI, AiSensy, or Interakt. These platforms charge ₹2,500 to ₹15,000 per month merely to host a basic webhook forwarder, plus they add a 20% to 50% markup on top of Meta's baseline carrier conversation rates.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-[#9a958c]">
            What these companies don't disclose is that Meta provides the <strong className="text-white">WhatsApp Business Cloud API v21.0</strong> directly to any verified business for free. Meta provides 1,000 free customer-initiated service conversations each month. By building and self-hosting your own webhook service on a lightweight cloud instance or serverless edge, you eliminate all intermediary SaaS subscriptions entirely.
          </p>
        </section>

        {/* Section 2: Technical Architecture */}
        <section className="mb-14 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#25D366]">
            // 02. PRODUCTION WEBHOOK ARCHITECTURE
          </span>
          <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-white">
            Cryptographic Handshakes, Webhook Verification &amp; Redis Locks
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-[#9a958c]">
            A robust Meta Cloud API integration requires four essential architectural pillars:
          </p>

          <div className="rounded-xl border border-white/10 bg-[#0a0a0a] p-5 my-6 space-y-4">
            <h3 className="text-sm font-bold font-mono text-[#25D366] flex items-center gap-2">
              <Lock className="h-4 w-4" /> 1. CRYPTOGRAPHIC SIGNATURE VERIFICATION (HMAC-SHA256)
            </h3>
            <p className="text-xs text-[#9a958c]">
              Every inbound POST request from Meta includes an <code className="text-[#25D366]">X-Hub-Signature-256</code> header containing an HMAC-SHA256 hash calculated with your Meta App Secret. We verify this using constant-time buffer comparison to prevent timing attacks and unauthorized request spoofing:
            </p>
            <pre className="bg-[#121212] p-4 rounded-lg text-xs font-mono text-[#25D366] overflow-x-auto border border-white/5">
{`const crypto = require('crypto');

function verifyMetaSignature(req, res, buf) {
  const signature = req.headers['x-hub-signature-256'];
  if (!signature) throw new Error('Missing signature header');
  
  const expectedHash = 'sha256=' + crypto
    .createHmac('sha256', process.env.META_APP_SECRET)
    .update(buf)
    .digest('hex');
    
  const signatureBuffer = Buffer.from(signature, 'utf8');
  const expectedBuffer = Buffer.from(expectedHash, 'utf8');
  
  if (signatureBuffer.length !== expectedBuffer.length || 
      !crypto.timingSafeEqual(signatureBuffer, expectedBuffer)) {
    throw new Error('Invalid HMAC-SHA256 payload signature');
  }
}`}
            </pre>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#0a0a0a] p-5 my-6 space-y-4">
            <h3 className="text-sm font-bold font-mono text-[#38bdf8] flex items-center gap-2">
              <Database className="h-4 w-4" /> 2. REDIS IDEMPOTENCY &amp; DEDUPLICATION
            </h3>
            <p className="text-xs text-[#9a958c]">
              Meta's webhook infrastructure retries delivery if your server takes longer than 5 seconds or encounters transient packet loss. Under burst traffic, duplicate deliveries can cause double appointment bookings or duplicate order confirmations. We enforce idempotency using Redis distributed locks:
            </p>
            <pre className="bg-[#121212] p-4 rounded-lg text-xs font-mono text-[#38bdf8] overflow-x-auto border border-white/5">
{`// Extract unique Meta message ID
const messageId = body.entry[0]?.changes[0]?.value?.messages[0]?.id;

// Atomic lock with 60-second TTL
const isNew = await redis.set(\`msg_lock:\${messageId}\`, '1', 'EX', 60, 'NX');
if (!isNew) {
  // Duplicate delivery from Meta retry — acknowledge immediately
  return res.status(200).send('EVENT_ALREADY_PROCESSED');
}`}
            </pre>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#0a0a0a] p-5 my-6 space-y-4">
            <h3 className="text-sm font-bold font-mono text-[#d4a853] flex items-center gap-2">
              <Zap className="h-4 w-4" /> 3. ASYNCHRONOUS BACKGROUND WORKER DISPATCH
            </h3>
            <p className="text-xs text-[#9a958c]">
              Never run heavy AI LLM inferences, database transactions, or external CRM API syncs inside the active webhook request cycle. We acknowledge Meta with an immediate HTTP 200 within 85ms and enqueue the message into a worker queue (BullMQ / RabbitMQ) for background processing.
            </p>
          </div>
        </section>

        {/* Section 3: Cost Comparison */}
        <section className="mb-14 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#25D366]">
            // 03. ANNUAL FINANCIAL ADVANTAGE
          </span>
          <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-white">
            Direct Cloud API vs. SaaS Aggregators (Annual TCO)
          </h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-left text-xs font-mono border border-white/10 rounded-xl overflow-hidden">
              <thead className="bg-[#141414] text-[#f0ede6]">
                <tr>
                  <th className="p-3 border-b border-white/10">Feature / Cost Metric</th>
                  <th className="p-3 border-b border-white/10 text-[#ff5f56]">Third-Party SaaS Wrappers</th>
                  <th className="p-3 border-b border-white/10 text-[#25D366]">Gurdharam Direct Architecture</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-[#9a958c]">
                <tr>
                  <td className="p-3 font-medium text-white">Monthly Platform Subscription</td>
                  <td className="p-3 text-[#ff5f56]">₹3,000 – ₹15,000 / mo</td>
                  <td className="p-3 text-[#25D366]">₹0 / mo (Lifetime)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-white">Free Monthly Conversations</td>
                  <td className="p-3 text-[#ff5f56]">Often withheld / limited</td>
                  <td className="p-3 text-[#25D366]">Full 1,000 Meta Free Tier</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-white">Data Privacy &amp; Customer Telemetry</td>
                  <td className="p-3 text-[#ff5f56]">Stored on third-party SaaS servers</td>
                  <td className="p-3 text-[#25D366]">100% Private Self-Hosted Database</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-white">Custom Multi-Agent AI Integrations</td>
                  <td className="p-3 text-[#ff5f56]">Restricted to basic rule builders</td>
                  <td className="p-3 text-[#25D366]">Full Python / Node.js AI LLM freedom</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Reverse Silo Links */}
        <section className="mb-14 rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 md:p-8">
          <h3 className="text-lg font-bold font-['Syne'] text-white mb-4">
            Explore 12 Specialized WhatsApp Vertical Solutions
          </h3>
          <p className="text-xs md:text-sm text-[#9a958c] mb-6">
            We build pre-engineered, industry-compliant WhatsApp automation solutions for high-ticket Indian businesses:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link 
              to="/services/whatsapp-bot-jewelry-stores"
              className="flex items-center justify-between p-3 rounded-lg border border-[#25D366]/20 bg-[#25D366]/5 hover:bg-[#25D366]/10 text-xs font-mono text-[#25D366] transition-colors"
            >
              <span>Jewelry Stores (Live MCX Gold Rates)</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <Link 
              to="/services/whatsapp-bot-coaching-institutes"
              className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono text-[#f0ede6] transition-colors"
            >
              <span>Coaching Centers (Demo Class Booking)</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <Link 
              to="/services/whatsapp-bot-clinics-hospitals"
              className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono text-[#f0ede6] transition-colors"
            >
              <span>Clinics &amp; Hospitals (OPD Triage)</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <Link 
              to="/services/whatsapp-business-bot"
              className="flex items-center justify-between p-3 rounded-lg border border-[#25D366]/20 bg-[#25D366]/5 hover:bg-[#25D366]/10 text-xs font-mono text-[#25D366] transition-colors"
            >
              <span>All 12 WhatsApp Vertical Architectures</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <div className="p-8 rounded-2xl border border-[#25D366]/30 bg-gradient-to-br from-[#25D366]/10 via-[#0a0a0a] to-[#0a0a0a] text-center space-y-4">
          <h2 className="text-xl md:text-2xl font-bold font-['Syne'] text-white">
            Ready to Cut Out WhatsApp SaaS Fees Permanently?
          </h2>
          <p className="text-xs md:text-sm text-[#9a958c] max-w-lg mx-auto">
            We deploy direct Meta Cloud API webhook systems tailored to your business, giving you lifetime zero-subscription ownership.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppUrl("Hello Gurdharam, I read your Meta WhatsApp Cloud API guide and want to build a self-hosted WhatsApp bot for my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-mono text-xs font-bold text-black hover:bg-[#20bd5a] transition-colors"
            >
              <span>DEPLOY DIRECT META CLOUD API</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </main>
  );
}
