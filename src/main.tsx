import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import './styles.css';

import AiAutomation from './pages/ai-automation';
import WebDevelopment from './pages/web-development';
import DoodHisaab from './pages/doodhisaab';
import FasalDoctor from './pages/fasaldoctor';
import CropDiseaseDetection from './pages/crop-disease-detection';
import DairyManagementApp from './pages/dairy-management-app';
import WhatsAppBotClinic from './pages/whatsapp-bot-clinic';
import WebDeveloperMuktsar from './pages/web-developer-muktsar';
import OfflineAiApp from './pages/offline-ai-app';

import Blog from './pages/blog';
import BlogPostFasalDoctor from './pages/blog-post-fasal-doctor';
import BlogPostWhatsAppHealth from './pages/blog-post-whatsapp-health';

import { useLocation } from 'react-router-dom';

function CanonicalUpdater() {
  const location = useLocation();
  React.useEffect(() => {
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    let ogUrl = document.querySelector("meta[property='og:url']");
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    const path = location.pathname === '/' ? '' : location.pathname;
    const url = `https://www.gurdharam.com${path}`;
    canonical.setAttribute('href', url);
    ogUrl.setAttribute('content', url);
  }, [location]);
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

function Main() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CanonicalUpdater />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/ai-automation" element={<AiAutomation />} />
        <Route path="/services/crop-disease-detection-app" element={<CropDiseaseDetection />} />
        <Route path="/services/dairy-management-app-flutter" element={<DairyManagementApp />} />
        <Route path="/services/whatsapp-bot-dental-clinic" element={<WhatsAppBotClinic />} />
        <Route path="/services/web-developer-muktsar-punjab" element={<WebDeveloperMuktsar />} />
        <Route path="/services/offline-ai-app-development" element={<OfflineAiApp />} />
        <Route path="/case-studies/doodhisaab" element={<DoodHisaab />} />
        <Route path="/case-studies/fasal-doctor" element={<FasalDoctor />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/offline-ai-crop-disease-scanner-flutter" element={<BlogPostFasalDoctor />} />
        <Route path="/blog/whatsapp-ai-agents-healthcare-india" element={<BlogPostWhatsAppHealth />} />
        <Route path="*" element={<div style={{ padding: '50px', color: '#fff', fontFamily: 'monospace', fontSize: '14px' }}>Route Mismatch: {window.location.pathname}</div>} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')!).render(<Main />);
