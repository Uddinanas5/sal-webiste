import type { Metadata } from "next";
import "./globals.css";

// SEO-optimized metadata with local keywords (Dubai, salon, spa, AI)
export const metadata: Metadata = {
  title: "SAL - AI Operations Partner for Salons & Spas in Dubai | WhatsApp Business Automation",
  description: "SAL is the #1 AI operations partner for salons, spas, and barbershops in Dubai. Run your entire business through WhatsApp - bookings, team management, customer support. Setup in 24 hours. Trusted by 30+ salons across UAE.",
  keywords: [
    "AI salon management Dubai",
    "WhatsApp business automation UAE",
    "salon booking system Dubai",
    "spa management software",
    "barbershop AI assistant",
    "salon operations Dubai",
    "WhatsApp salon booking",
    "AI receptionist salon",
    "beauty salon automation",
    "salon near me Dubai",
    "best salon management software UAE",
    "AI business partner",
    "salon scheduling Dubai",
    "spa booking Dubai",
    "beauty business automation"
  ],
  authors: [{ name: "SAL - AI Operations Partner" }],
  creator: "SAL",
  publisher: "SAL",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://website-v2-opal.vercel.app",
    siteName: "SAL - AI Operations Partner",
    title: "SAL - AI Operations Partner for Salons & Spas in Dubai",
    description: "Run your entire salon, spa, or barbershop through one WhatsApp chat. AI-powered operations partner trusted by 30+ businesses in Dubai. Setup in 24 hours.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SAL - AI Operations Partner for Salons in Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAL - AI Operations Partner for Salons & Spas in Dubai",
    description: "Run your entire business through WhatsApp. AI-powered operations for salons, spas & barbershops. Trusted by 30+ Dubai businesses.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://website-v2-opal.vercel.app",
  },
  category: "Business Software",
  classification: "Salon Management Software",
};

// LocalBusiness Schema for SEO (JSON-LD)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "SAL - AI Operations Partner",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, WhatsApp",
  "description": "AI-powered operations partner for salons, spas, and barbershops. Manage your entire business through WhatsApp.",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "AED",
    "lowPrice": "1500",
    "highPrice": "2500",
    "offerCount": "3"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "30",
    "bestRating": "5",
    "worstRating": "1"
  },
  "provider": {
    "@type": "Organization",
    "name": "SAL",
    "url": "https://website-v2-opal.vercel.app",
    "logo": "https://website-v2-opal.vercel.app/owl-logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971523228314",
      "contactType": "sales",
      "availableLanguage": ["English", "Arabic"]
    }
  },
  "areaServed": {
    "@type": "Place",
    "name": "Dubai, UAE"
  }
};

// FAQ Schema for rich snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is SAL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SAL is an AI operations partner that helps salons, spas, and barbershops manage their entire business through WhatsApp. It handles bookings, team communication, customer inquiries, and more."
      }
    },
    {
      "@type": "Question",
      "name": "How long does SAL setup take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SAL is fully configured and ready to use within 24 hours. We customize it to know your business, services, team, pricing, and voice."
      }
    },
    {
      "@type": "Question",
      "name": "How much does SAL cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SAL offers three pricing tiers: Small (5-10 employees) at 1,500 AED/month, Medium (10-20 employees) at 2,000 AED/month, and Large (20+ employees) at 2,500 AED/month. Setup fees range from 15,000-25,000 AED."
      }
    },
    {
      "@type": "Question",
      "name": "Is SAL available in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! SAL is trusted by 30+ salons across Dubai and the UAE. We specialize in helping local beauty businesses automate their operations."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* SEO Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        
        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />
        
        {/* Additional SEO meta */}
        <meta name="theme-color" content="#059669" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="font-sans antialiased bg-cream text-gray-900">
        {children}
      </body>
    </html>
  );
}
