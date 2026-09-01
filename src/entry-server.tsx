import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import AiAutomation from './pages/ai-automation';
import WebDevelopment from './pages/web-development';
import DoodHisaab from './pages/doodhisaab';
import FasalDoctor from './pages/fasaldoctor';
import CropDiseaseDetection from './pages/crop-disease-detection';
import DairyManagementApp from './pages/dairy-management-app';
import WhatsAppBusinessBot from './pages/whatsapp-business-bot';
import WebDeveloperMuktsar from './pages/web-developer-muktsar';
import OfflineAiApp from './pages/offline-ai-app';
import VerticalServicePage from './pages/VerticalServicePage';
import CityLanding from './pages/city-landing';
import verticalsData from './data/verticals.json';
import citiesData from './data/cities.json';

import Blog from './pages/blog';
import BlogPostFasalDoctor from './pages/blog-post-fasal-doctor';
import BlogPostWhatsAppHealth from './pages/blog-post-whatsapp-health';
import BlogPostVoiceAI from './pages/blog-post-voice-ai';
import BlogPostLocalGPU from './pages/blog-post-local-gpu';
import BlogPostVideoGen from './pages/blog-post-videogen';
import BlogPostWebGL from './pages/blog-post-webgl';

import AIVoiceAgents from './pages/ai-voice-agents';
import LocalGPULLMQuantization from './pages/local-gpu-llm-quantization';
import AutomatedVideoGeneration from './pages/automated-video-generation';
import AICollegeAutomation from './pages/ai-college-automation';
import BlogPostAICollege from './pages/blog-post-ai-college';
import BlogPostDPDPLegal from './pages/blog-post-dpdp-legal';
import MultilingualVoiceAI from './pages/multilingual-voice-ai';
import TakeMyInterviewCaseStudy from './pages/takemyinterview';
import ServicesHubPage from './pages/services-hub';
import WebsiteDesignCompanyChandigarh from './pages/website-design-company-chandigarh';
import CustomReactDeveloperIndia from './pages/custom-react-developer-india';
import IndicAIVoiceAgentDeveloper from './pages/indic-ai-voice-agent-developer';
import AIAutomationAgencyIndia from './pages/ai-automation-agency-india';
import WebsitesShowcase from './pages/websites';
import SchemaMarkup from './components/SchemaMarkup';

export function render(url: string) {
  try {
    return ReactDOMServer.renderToString(
      <StaticRouter location={url}>
        <SchemaMarkup />
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
        </Routes>
      </StaticRouter>
    );
  } catch (e) {
    console.error('SSR Render error for url', url, e);
    return '';
  }
}
