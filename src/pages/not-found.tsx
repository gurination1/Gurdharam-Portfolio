import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Sparkles, Layers, Terminal } from 'lucide-react';
import Footer from '../components/ui/footer';

export default function NotFoundPage() {
  React.useEffect(() => {
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'noindex, nofollow');
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col justify-between">
      <main className="max-w-3xl mx-auto pt-32 pb-20 px-6 text-center flex-1 flex flex-col items-center justify-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-[var(--accent-gold)] mb-6">
          <Terminal className="w-3.5 h-3.5" /> Error Code: 404 · Route Not Found
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white mb-6">
          Page Not Found
        </h1>

        <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
          The page or system resource you requested does not exist or has been relocated to an updated architectural path. Gurdharam Jeet Singh and Manveer Singh engineer high-performance software systems, on-premise AI automation pipelines, and spatial 3D web applications. You can easily navigate to our core services, case studies, or developer directories below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md mb-10 text-left">
          <Link
            to="/"
            className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--accent-gold)] transition-colors flex items-center gap-3 text-sm font-medium"
          >
            <Home className="w-5 h-5 text-[var(--accent-gold)]" />
            <div>
              <div className="text-white font-bold">Return Home</div>
              <div className="text-xs text-slate-400">Explore portfolio & hero overview</div>
            </div>
          </Link>

          <Link
            to="/websites"
            className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--accent-gold)] transition-colors flex items-center gap-3 text-sm font-medium"
          >
            <Sparkles className="w-5 h-5 text-[var(--accent-gold)]" />
            <div>
              <div className="text-white font-bold">Live Showcase</div>
              <div className="text-xs text-slate-400">Production web platforms & 3D</div>
            </div>
          </Link>

          <Link
            to="/services"
            className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--accent-gold)] transition-colors flex items-center gap-3 text-sm font-medium"
          >
            <Layers className="w-5 h-5 text-[var(--accent-gold)]" />
            <div>
              <div className="text-white font-bold">Services Hub</div>
              <div className="text-xs text-slate-400">AI bots, local LLMs & web design</div>
            </div>
          </Link>

          <Link
            to="/about"
            className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--accent-gold)] transition-colors flex items-center gap-3 text-sm font-medium"
          >
            <ArrowLeft className="w-5 h-5 text-[var(--accent-gold)]" />
            <div>
              <div className="text-white font-bold">About Us</div>
              <div className="text-xs text-slate-400">Meet the engineering team</div>
            </div>
          </Link>
        </div>

        <p className="text-xs text-slate-500 font-mono">
          Looking for a custom project? Reach out directly via <a href="https://wa.me/916280333252" className="text-[var(--accent-gold)] underline">WhatsApp (+91 62803 33252)</a> or explore our technical <Link to="/blog" className="text-[var(--accent-gold)] underline">engineering articles</Link>.
        </p>
      </main>
      <Footer />
    </div>
  );
}
