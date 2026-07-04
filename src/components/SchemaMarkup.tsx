import React from 'react';
import { useLocation } from 'react-router-dom';
import verticalsData from '../data/verticals.json';

interface VerticalData {
  id: string;
  type: string;
  name: string;
  title: string;
  metaDescription: string;
  painPoint: string;
  example: string;
  parentPath: string;
  parentName: string;
}

export default function SchemaMarkup() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Site-wide Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Gurdharam AI Engineering",
    "url": "https://www.gurdharam.com",
    "logo": "https://www.gurdharam.com/assets/portfolio/person-a8f8d951.webp",
    "sameAs": [
      "https://github.com/gdharam94",
      "https://www.linkedin.com/in/gurdharam-singh-a4a350201/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9876543210",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi", "pa"]
    }
  };

  // Site-wide WebSite schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Gurdharam Jeet Singh | AI & Web Developer",
    "url": "https://www.gurdharam.com"
  };

  const schemas: any[] = [organizationSchema, websiteSchema];

  // Homepage/About -> Person schema + FAQPage schema
  if (currentPath === '/') {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Gurdharam Jeet Singh",
      "jobTitle": "AI Engineer & Full-Stack Developer",
      "url": "https://www.gurdharam.com",
      "sameAs": [
        "https://github.com/gdharam94",
        "https://www.linkedin.com/in/gurdharam-singh-a4a350201/"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Muktsar",
        "addressRegion": "Punjab",
        "addressCountry": "IN"
      }
    });

    // Homepage FAQ
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What specialized services does Gurdharam Jeet Singh offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "I build production-ready systems: custom WhatsApp Business automation bots (official Meta Cloud API), automated YouTube/Instagram content generation pipelines, high-end 3D/2D React websites (Three.js/GSAP), and offline-first mobile apps (Flutter + TFLite machine learning)."
          }
        },
        {
          "@type": "Question",
          "name": "Why should my business choose a custom WhatsApp bot over monthly SaaS platforms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard SaaS subscriptions (like WATI or AiSensy) charge heavy monthly platform fees (₹3,000–₹12,000/mo) and lock your phone number. I build custom, direct integrations to the official Meta Cloud API. You pay zero reseller markups, retain 100% of your customer data on your own servers, and utilize custom NLP trained for English, Hindi, and Punjabi."
          }
        },
        {
          "@type": "Question",
          "name": "How do your websites load so quickly and rank on Google?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No slow WordPress templates or rigid builders. I write custom, lightweight React code compiled via Vite. We pre-render every page statically (SSG) so search engine crawlers can read the text without executing JS. We include JSON-LD schemas and push routes instantly to IndexNow (Bing/Yandex) and GSC Indexing APIs."
          }
        },
        {
          "@type": "Question",
          "name": "Can your mobile applications run AI models and databases completely offline?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. In rural or weak signal areas of Punjab, cloud-reliant apps fail. I design offline-first mobile apps using Flutter. Your SQLite database is fully local, and machine learning models (like TensorFlow Lite image classifiers) run directly in the phone's processor. Zero cloud database latency and zero server costs."
          }
        }
      ]
    });
  }

  // Case Studies -> SoftwareApplication schema + FAQPage schema
  if (currentPath === '/case-studies/doodhisaab') {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "DoodHisaab",
      "operatingSystem": "Android, iOS",
      "applicationCategory": "BusinessApplication",
      "offers": {
        "@type": "Offer",
        "price": "0.00",
        "priceCurrency": "INR"
      }
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can the app share monthly milk receipts with farmers over WhatsApp?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The application runs a local rendering engine that securely converts monthly collection tables into a professional PDF receipt shareable via WhatsApp."
          }
        },
        {
          "@type": "Question",
          "name": "Does the app handle both morning and evening milk collection shifts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the tracking system is built explicitly to support the standard Indian dairy collection cycle, logging both morning and evening shifts."
          }
        }
      ]
    });
  }

  if (currentPath === '/case-studies/fasal-doctor') {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Fasal Doctor",
      "operatingSystem": "Android",
      "applicationCategory": "AgricultureApplication",
      "offers": {
        "@type": "Offer",
        "price": "0.00",
        "priceCurrency": "INR"
      }
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which crops and diseases can your mobile AI models detect?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The offline MobileNetV2 model is fine-tuned to identify dozens of regional plant diseases including wheat rust and cotton blight, even offline."
          }
        },
        {
          "@type": "Question",
          "name": "How do you update agricultural advisories if the app runs completely offline?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The app triggers silent sync webhooks when connected to Wi-Fi, updating the local SQLite database with fresh PAU (Punjab Agricultural University) advisory guidelines."
          }
        }
      ]
    });
  }

  // Blog posts -> Article schema
  if (currentPath.startsWith('/blog/')) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": currentPath.includes('whatsapp') ? "Why Healthcare Practices in India are Automating Bookings with WhatsApp AI Agents" : "Designing an Offline Crop Disease Scanner with Flutter, SQLite and TFLite",
      "author": {
        "@type": "Person",
        "name": "Gurdharam Jeet Singh"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Gurdharam AI Engineering"
      }
    });
  }

  // Hub Service Pages -> Service schema + FAQPage schema
  if (currentPath === '/services/whatsapp-business-bot') {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "WhatsApp Business Bot Development",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Gurdharam AI Engineering"
      }
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I use my existing company phone number for the WhatsApp automation bot?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You can register your existing landline or mobile business number onto the official WhatsApp Business Cloud API. Once registered on the API, the number handles thousands of concurrent chats, but it can no longer be used on the standard mobile app interface. I guide you through the migration steps smoothly."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to pay monthly subscription fees for my WhatsApp bot?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Unlike generic SaaS providers, I deploy custom webhooks on pay-as-you-go server setups. You connect directly to Meta's Business portal. Meta provides 1,000 free service-initiated conversations per month, and additional customer chats cost only direct rates (~₹0.30 to ₹0.72 per chat), saving you heavy platform markups."
          }
        }
      ]
    });
  }

  if (currentPath === '/services/ai-automation') {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "AI Automation & Media Pipelines",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Gurdharam AI Engineering"
      }
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What types of businesses can utilize your WhatsApp AI booking bots?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "My AI automation systems are universally adaptable, perfect for law firms, wellness hospitals, beauty salons, fitness gyms, car dealerships, cleaning services, manufacturing factories, and consultancy agencies."
          }
        },
        {
          "@type": "Question",
          "name": "Is organic video automation cheaper than paid social ads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Automated organic video pipelines are a one-time build that publish compounding content assets which stay on search engines and platform feeds forever."
          }
        }
      ]
    });
  }

  if (currentPath === '/services/web-development') {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Web Development Services",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Gurdharam AI Engineering"
      }
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between WordPress and a custom React website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "WordPress loads dozens of PHP scripts, database queries, and third-party plugins for every page request — often resulting in 3–8 second load times and security vulnerabilities. A custom React site compiled by Vite delivers pre-built, static HTML in under 500ms. Faster load time means better user experience and higher Google rankings."
          }
        },
        {
          "@type": "Question",
          "name": "How do you ensure my website ranks on Google from day one?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Every site I build uses static pre-rendering to generate plain HTML for each route, canonical link tags, JSON-LD schema markup (LocalBusiness, Service, FAQ, BreadcrumbList), and IndexNow submission at launch. Google's crawler can read your full content without executing JavaScript — this dramatically speeds up indexing."
          }
        }
      ]
    });
  }

  if (currentPath === '/services/offline-ai-app-development') {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Offline AI Mobile App Development",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Gurdharam AI Engineering"
      }
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can Flutter apps run AI models without internet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Flutter apps can run TensorFlow Lite (.tflite), ONNX, and CoreML models entirely on the device processor. There is no network request during inference. The model file is bundled inside the app at install time. Internet is only required for optional background model updates."
          }
        },
        {
          "@type": "Question",
          "name": "What is TensorFlow Lite and why is it ideal for farm apps in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "TensorFlow Lite (TFLite) is Google's mobile-optimized version of TensorFlow designed to run on devices with limited RAM and processing power. It is ideal for Indian farm apps because farmers often use ₹6,000–₹10,000 Android phones with weak processors and unreliable 4G — TFLite delivers AI inference in under 2 seconds even on these low-spec devices."
          }
        }
      ]
    });
  }

  // Dynamic Vertical Service Pages -> Service Schema
  const isVerticalPath = currentPath.startsWith('/services/') && 
    (currentPath.includes('-bot-') || currentPath.includes('-automation-') || currentPath.includes('-design-'));

  if (isVerticalPath) {
    // Extract parameters manually from path
    const parts = currentPath.replace('/services/', '').split('-');
    let type = '';
    let id = '';

    if (currentPath.includes('whatsapp-bot-')) {
      type = 'whatsapp-bot';
      id = currentPath.replace('/services/whatsapp-bot-', '');
    } else if (currentPath.includes('social-media-automation-')) {
      type = 'social-media-automation';
      id = currentPath.replace('/services/social-media-automation-', '');
    } else if (currentPath.includes('website-design-')) {
      type = 'website-design';
      id = currentPath.replace('/services/website-design-', '');
    }

    const vertical = (verticalsData as VerticalData[]).find(v => v.id === id && v.type === type);
    if (vertical) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": `${vertical.parentName} - ${vertical.name}`,
        "description": vertical.metaDescription,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Gurdharam AI Engineering"
        }
      });
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}
