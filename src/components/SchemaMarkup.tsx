import React from 'react';
import { useLocation } from 'react-router-dom';

export default function SchemaMarkup() {
  const location = useLocation();
  const currentPath = location.pathname;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Gurdharam AI Engineering",
    "url": "https://www.gurdharam.com",
    "logo": "https://www.gurdharam.com/assets/portfolio/person-a8f8d951.webp",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9876543210",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi", "pa"]
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Gurdharam AI & Web Developer",
    "image": "https://www.gurdharam.com/assets/portfolio/person-a8f8d951.webp",
    "url": "https://www.gurdharam.com",
    "telephone": "+91-9876543210",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Muktsar",
      "addressRegion": "Punjab",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 30.4735,
      "longitude": 74.5168
    }
  };

  const breadcrumbListSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.gurdharam.com"
      }
    ]
  };

  // Dynamically add to Breadcrumb based on path
  const paths = currentPath.split('/').filter(p => p !== '');
  let currentUrl = 'https://www.gurdharam.com';
  paths.forEach((path, index) => {
    currentUrl += `/${path}`;
    breadcrumbListSchema.itemListElement.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": path.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      "item": currentUrl
    });
  });

  const schemas: any[] = [organizationSchema, localBusinessSchema, breadcrumbListSchema];

  // Specific page schemas
  if (currentPath.includes('whatsapp-bot')) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "WhatsApp AI Bot Development",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Gurdharam AI Developer"
      }
    });
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What businesses can use WhatsApp booking bots?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Any business that handles appointments, including dental clinics, hospitals, spas, salons, gyms, factories, and law firms."
          }
        },
        {
          "@type": "Question",
          "name": "Does the WhatsApp bot require an official Meta API account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, I integrate directly with the official Meta WhatsApp Cloud API for maximum reliability and scalable automation."
          }
        }
      ]
    });
    schemas.push({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Automate WhatsApp Bookings",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Analyze workflows",
          "text": "Review your daily appointment management process and qualify lead questions."
        },
        {
          "@type": "HowToStep",
          "name": "Set up WhatsApp API",
          "text": "Register for the official WhatsApp Cloud API through Meta Business Suite."
        },
        {
          "@type": "HowToStep",
          "name": "Deploy LLM Agent",
          "text": "Connect a secure conversational bot to a database for reading and writing booking states."
        }
      ]
    });
  }

  if (currentPath.includes('crop-disease-detection')) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Offline AI Crop Disease Detection App Development",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Gurdharam Agritech AI Developer"
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
            "text": "Fine-tuned to identify dozens of regional plant diseases including wheat rust and cotton blight, even offline."
          }
        },
        {
          "@type": "Question",
          "name": "How do you update agricultural advisories if the app runs completely offline?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The app triggers silent sync webhooks when connected to Wi-Fi, updating the local SQLite database."
          }
        }
      ]
    });
  }

  if (currentPath.includes('ai-automation')) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "AI Automation Services India",
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

  if (currentPath.includes('dairy-management-app')) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Dairy Management App Developer Flutter",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Gurdharam App Developer"
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}
