import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, ShieldCheck, Globe, Cpu, Layers, Zap, MessageCircle, ArrowRight, CheckCircle2, Code2, Box } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import AuthorBioCard from '@/components/ui/AuthorBioCard';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function BlogPostThreeJSOptimization() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Three.js WebGL Mobile Optimization | Gurdharam";
  }, []);

  const waUrl = getWhatsAppUrl("Hi Gurdharam, I read your Three.js WebGL Mobile Optimization guide.");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": "https://www.gurdharam.com/blog/threejs-webgl-performance-mobile-optimization#article",
        "headline": "Three.js WebGL Mobile Performance Optimization: Achieving Locked 60–120 FPS",
        "description": "Deep engineering guide to achieving 60-120 FPS Three.js WebGL on mobile devices. DRACO mesh compression, shader render loops, and Lenis scroll sync.",
        "image": "https://www.gurdharam.com/og-card.png",
        "author": {
          "@type": "Person",
          "@id": "https://www.gurdharam.com/#person",
          "name": "Gurdharam Jeet Singh",
          "url": "https://www.gurdharam.com"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://www.gurdharam.com/#organization",
          "name": "Gurdharam AI Engineering",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.gurdharam.com/og-card.png"
          }
        },
        "mainEntityOfPage": "https://www.gurdharam.com/blog/threejs-webgl-performance-mobile-optimization",
        "datePublished": "2026-09-13",
        "dateModified": "2026-09-13"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do you prevent mobile device overheating when running Three.js in browsers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "By capping renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75)), throttling the render loop when canvas is offscreen using IntersectionObserver, and disabling expensive post-processing bloom passes on mobile."
            }
          },
          {
            "@type": "Question",
            "name": "How does Google DRACO compression shrink 3D GLTF assets for mobile web?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "DRACO compresses vertex attributes, normals, and indices through quantization and entropy coding, reducing raw 20MB–50MB 3D meshes down to 1MB–3MB for rapid mobile 4G streaming."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#080808] text-[#f0ede6] pt-24 px-6 md:px-16 pb-20 selection:bg-[#38bdf8]/30 selection:text-white font-sans antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="max-w-4xl mx-auto">
        <Link to="/blog" className="inline-flex items-center text-[#38bdf8] hover:opacity-80 transition-opacity mb-8 font-mono text-xs tracking-wider uppercase">
          <ArrowLeft className="mr-2 h-4 w-4" /> [ RETURN TO BLOG HUB ]
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#9a958c] mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-2.5 py-1 text-[#38bdf8]">
              GPU GRAPHICS ENGINEERING
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" /> September 13, 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> 8 min read
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-['Syne'] font-extrabold text-white leading-tight mb-6">
            Three.js WebGL Mobile Optimization: <br />
            <span className="text-[#38bdf8]">Achieving Locked 60–120 FPS on Mobile Devices</span>
          </h1>

          <p className="text-base md:text-lg text-[#9a958c] leading-relaxed max-w-[68ch]">
            An exhaustive engineering deep-dive into running hardware-accelerated 3D WebGL scenes on mobile smartphones. Covers dynamic pixel ratio throttling, IntersectionObserver canvas pausing, Google DRACO mesh compression, and Lenis smooth scroll synchronization.
          </p>
        </header>

        {/* Technical Highlights Card */}
        <div className="rounded-2xl border border-white/10 bg-[#0f0f0f] p-6 mb-12">
          <h2 className="font-['Syne'] text-lg font-bold text-white mb-3">Core Performance Rules for Production WebGL:</h2>
          <ul className="space-y-2 font-mono text-xs text-[#f0ede6]">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#38bdf8] shrink-0 mt-0.5" />
              <span><strong>DPR Clamping:</strong> Never use unrestricted window.devicePixelRatio on high-DPI screens (clamp to 1.5–1.75).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#38bdf8] shrink-0 mt-0.5" />
              <span><strong>Offscreen Throttling:</strong> Pause requestAnimationFrame when canvas scrolls out of viewport.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#38bdf8] shrink-0 mt-0.5" />
              <span><strong>DRACO &amp; KTX2:</strong> Compress geometry by 85%+ and use GPU-native texture compression.</span>
            </li>
          </ul>
        </div>

        {/* Section 1 */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-['Syne'] font-bold text-white">
            1. The High-DPI Mobile Bottleneck: Device Pixel Ratio Clamping
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-[#9a958c]">
            Modern flagship smartphones (iPhones and high-end Androids) feature Super Retina displays with physical device pixel ratios (DPR) of 3.0 or higher. If a developer naively calls `renderer.setPixelRatio(window.devicePixelRatio)`, the GPU is forced to shade 9x the number of pixels compared to standard 1080p, resulting in thermal throttling, battery drain, and dropped frames.
          </p>
          <div className="rounded-xl border border-white/10 bg-[#141414] p-4 font-mono text-xs text-[#38bdf8] overflow-x-auto">
            <code>
              {`// Production DPR Clamping Algorithm\nconst isMobile = window.innerWidth < 768;\nconst maxDPR = isMobile ? 1.5 : 2.0;\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio, maxDPR));`}
            </code>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-['Syne'] font-bold text-white">
            2. Geometry &amp; Texture Streaming: DRACO Compression
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-[#9a958c]">
            Raw GLTF models exported from Blender or Maya frequently contain redundant vertex normal floats, high-poly bevels, and uncompressed 4K PNG textures that total 30MB–80MB. Over a 4G mobile network in India, downloading an uncompressed model introduces a 10-second blocking delay.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-[#9a958c]">
            By integrating Google DRACO decompression in Three.js (`DRACOLoader`), mesh vertex positions and normals are quantized into compact integer representations. A 24MB raw architectural model compiles down to 1.8MB, streaming over mobile connections in under 600ms.
          </p>
        </section>

        {/* Section 3: Case Study Applications */}
        <section className="space-y-4 mb-14">
          <h2 className="text-2xl font-['Syne'] font-bold text-white">
            3. Battle-Tested in Production: BioPrac &amp; NEOVRIT
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-[#9a958c]">
            We deployed these exact WebGL optimization techniques across our client flagships:
          </p>
          <ul className="space-y-2 text-xs text-[#f0ede6]">
            <li>
              • <a href="https://gurination1.github.io/bioprac/" target="_blank" rel="noopener noreferrer" className="text-[#38bdf8] hover:underline font-bold">BioPrac</a>: Features procedural GPU fog shaders and circular arc kinematics maintaining locked 60 FPS on iOS and Android viewports. Read the <Link to="/case-studies/bioprac" className="underline">BioPrac Three.js Case Study</Link>.
            </li>
            <li>
              • <a href="https://dreamheights-source.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#d4a853] hover:underline font-bold">Dream Heights</a>: Renders an entire gated luxury residential community in 3D with Day/Night lighting and floorplan hotspots. Read the <Link to="/case-studies/dreamheights" className="underline">Dream Heights 3D Case Study</Link>.
            </li>
          </ul>
        </section>

        {/* Author Bio Card */}
        <AuthorBioCard />

        {/* CTA Card */}
        <div className="mt-12 rounded-2xl border border-[#38bdf8]/40 bg-[#0b161b] p-8 text-center">
          <h3 className="text-2xl font-bold font-['Syne'] text-white">
            Commission a 3D WebGL Platform for Your Brand
          </h3>
          <p className="mt-2 text-xs md:text-sm text-[#9a958c] max-w-lg mx-auto">
            From interactive Three.js product viewports (₹12,000) to full architectural digital twins (₹20,000). Delivered in 5 to 14 days.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/services/3d-webgl-website-development"
              className="rounded-xl bg-[#38bdf8] px-6 py-3 font-mono text-xs font-bold text-[#080808] hover:bg-white transition-colors"
            >
              EXPLORE 3D WEBGL PACKAGE (₹12,000)
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-mono text-xs font-semibold text-white hover:border-[#38bdf8] hover:text-[#38bdf8] transition-colors"
            >
              CHAT ON WHATSAPP
            </a>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
