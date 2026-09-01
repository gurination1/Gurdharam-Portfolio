import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import verticalsData from './data/verticals.json';
import citiesData from './data/cities.json';
import SchemaMarkup from './components/SchemaMarkup';
import WhatsAppWidget from './components/ui/WhatsAppWidget';
import './styles.css';

// Route Code-Splitting for instantaneous initial page load (<150KB JS budget)
const Home = lazy(() => import('./pages/home'));
const AiAutomation = lazy(() => import('./pages/ai-automation'));
const WebDevelopment = lazy(() => import('./pages/web-development'));
const DoodHisaab = lazy(() => import('./pages/doodhisaab'));
const FasalDoctor = lazy(() => import('./pages/fasaldoctor'));
const CropDiseaseDetection = lazy(() => import('./pages/crop-disease-detection'));
const DairyManagementApp = lazy(() => import('./pages/dairy-management-app'));
const WhatsAppBusinessBot = lazy(() => import('./pages/whatsapp-business-bot'));
const WebDeveloperMuktsar = lazy(() => import('./pages/web-developer-muktsar'));
const CityLanding = lazy(() => import('./pages/city-landing'));
const OfflineAiApp = lazy(() => import('./pages/offline-ai-app'));
const VerticalServicePage = lazy(() => import('./pages/VerticalServicePage'));

const Blog = lazy(() => import('./pages/blog'));
const BlogPostFasalDoctor = lazy(() => import('./pages/blog-post-fasal-doctor'));
const BlogPostWhatsAppHealth = lazy(() => import('./pages/blog-post-whatsapp-health'));
const BlogPostVoiceAI = lazy(() => import('./pages/blog-post-voice-ai'));
const BlogPostLocalGPU = lazy(() => import('./pages/blog-post-local-gpu'));
const BlogPostVideoGen = lazy(() => import('./pages/blog-post-videogen'));
const BlogPostWebGL = lazy(() => import('./pages/blog-post-webgl'));

const AIVoiceAgents = lazy(() => import('./pages/ai-voice-agents'));
const LocalGPULLMQuantization = lazy(() => import('./pages/local-gpu-llm-quantization'));
const AutomatedVideoGeneration = lazy(() => import('./pages/automated-video-generation'));
const AICollegeAutomation = lazy(() => import('./pages/ai-college-automation'));
const BlogPostAICollege = lazy(() => import('./pages/blog-post-ai-college'));
const BlogPostDPDPLegal = lazy(() => import('./pages/blog-post-dpdp-legal'));
const MultilingualVoiceAI = lazy(() => import('./pages/multilingual-voice-ai'));
const TakeMyInterviewCaseStudy = lazy(() => import('./pages/takemyinterview'));
const ServicesHubPage = lazy(() => import('./pages/services-hub'));
const WebsiteDesignCompanyChandigarh = lazy(() => import('./pages/website-design-company-chandigarh'));
const CustomReactDeveloperIndia = lazy(() => import('./pages/custom-react-developer-india'));
const IndicAIVoiceAgentDeveloper = lazy(() => import('./pages/indic-ai-voice-agent-developer'));
const AIAutomationAgencyIndia = lazy(() => import('./pages/ai-automation-agency-india'));
const WebsitesShowcase = lazy(() => import('./pages/websites'));

function CanonicalUpdater() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    try {
      const head = document.head;
      let canonicalEl = document.querySelector("link[rel='canonical']");
      if (!canonicalEl) {
        canonicalEl = document.createElement('link');
        canonicalEl.setAttribute('rel', 'canonical');
        head.appendChild(canonicalEl);
      }
      let ogUrlEl = document.querySelector("meta[property='og:url']");
      if (!ogUrlEl) {
        ogUrlEl = document.createElement('meta');
        ogUrlEl.setAttribute('property', 'og:url');
        head.appendChild(ogUrlEl);
      }
      const rawPath = pathname === '/' ? '' : pathname;
      const cleanPath = rawPath.endsWith('/') && rawPath.length > 1 ? rawPath.slice(0, -1) : rawPath;
      const fullCanonicalUrl = `https://www.gurdharam.com${cleanPath}`;
      canonicalEl.setAttribute('href', fullCanonicalUrl);
      ogUrlEl.setAttribute('content', fullCanonicalUrl);
    } catch (err) {
      console.warn('Canonical update:', err);
    }
  }, [pathname]);
  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    if ((window as any).lenis) {
      try {
        (window as any).lenis.scrollTo(0, { immediate: true });
        (window as any).lenis.destroy();
        delete (window as any).lenis;
      } catch (e) {
        console.error(e);
      }
    }
    window.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
    document.body.classList.remove('wipe-menu-open');
    document.body.classList.remove('native-cursor-active');
    document.body.style.overflow = '';
    document.body.style.overflowY = '';
    document.documentElement.style.overflow = '';
    document.documentElement.style.overflowY = '';
  }, [pathname]);
  return null;
}

const LoadingFallback = () => (
  <div style={{ backgroundColor: '#080808', minHeight: '100vh', width: '100%' }} />
);

function Main() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CanonicalUpdater />
      <SchemaMarkup />
      <WhatsAppWidget />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesHubPage />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/ai-automation" element={<AiAutomation />} />
          <Route path="/services/ai-voice-agents" element={<AIVoiceAgents />} />
          <Route path="/services/multilingual-voice-ai-telephony" element={<MultilingualVoiceAI />} />
          <Route path="/services/local-gpu-llm-quantization" element={<LocalGPULLMQuantization />} />
          <Route path="/services/automated-video-generation-engine" element={<AutomatedVideoGeneration />} />
          <Route path="/services/ai-college-automation" element={<AICollegeAutomation />} />
          <Route path="/services/crop-disease-detection-app" element={<CropDiseaseDetection />} />
          <Route path="/services/dairy-management-app-flutter" element={<DairyManagementApp />} />
          <Route path="/services/whatsapp-business-bot" element={<WhatsAppBusinessBot />} />
          <Route path="/services/website-design-company-chandigarh" element={<WebsiteDesignCompanyChandigarh />} />
          <Route path="/services/custom-react-developer-india" element={<CustomReactDeveloperIndia />} />
          <Route path="/services/indic-ai-voice-agent-developer" element={<IndicAIVoiceAgentDeveloper />} />
          <Route path="/services/ai-automation-agency-india" element={<AIAutomationAgencyIndia />} />
          <Route path="/websites" element={<WebsitesShowcase />} />
          <Route path="/showcase" element={<WebsitesShowcase />} />
          <Route path="/websites-portfolio" element={<WebsitesShowcase />} />
          
          {(verticalsData as any[]).map((v) => {
            const vPath = `/services/${v.type === 'whatsapp-bot' ? 'whatsapp-bot-' + v.id : v.type === 'social-media-automation' ? 'social-media-automation-' + v.id : 'website-design-' + v.id}`;
            return <Route key={v.id} path={vPath} element={<VerticalServicePage type={v.type} vertical={v} />} />;
          })}

          {(citiesData as any[]).map((c) => (
            <Route key={c.id} path={`/services/${c.slug}`} element={<CityLanding cityId={c.id} />} />
          ))}

          <Route path="/services/web-developer-muktsar-punjab" element={<WebDeveloperMuktsar />} />
          <Route path="/services/offline-ai-app-development" element={<OfflineAiApp />} />
          <Route path="/case-studies/doodhisaab" element={<DoodHisaab />} />
          <Route path="/case-studies/fasal-doctor" element={<FasalDoctor />} />
          <Route path="/case-studies/takemyinterview-ai" element={<TakeMyInterviewCaseStudy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/dpdp-act-compliant-air-gapped-llm-legal-tech" element={<BlogPostDPDPLegal />} />
          <Route path="/blog/ai-college-admission-bot-punjab" element={<BlogPostAICollege />} />
          <Route path="/blog/sarvam-indic-voice-ai-telephony-agent" element={<BlogPostVoiceAI />} />
          <Route path="/blog/local-gpu-llm-quantization-mcp-legal-server" element={<BlogPostLocalGPU />} />
          <Route path="/blog/automated-1080p60-videogen-pipeline" element={<BlogPostVideoGen />} />
          <Route path="/blog/high-ticket-webgl-3d-spatial-digital-twin" element={<BlogPostWebGL />} />
          <Route path="/blog/offline-ai-crop-disease-scanner-flutter" element={<BlogPostFasalDoctor />} />
          <Route path="/blog/whatsapp-ai-agents-healthcare-india" element={<BlogPostWhatsAppHealth />} />
          <Route path="*" element={<div style={{ padding: '50px', color: '#fff', fontFamily: 'monospace', fontSize: '14px' }}>Route Mismatch: {window.location.pathname}</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')!).render(<Main />);
