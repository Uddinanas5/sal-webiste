import type { Metadata } from "next";
import "./globals.css";

// SEO-optimized metadata with local keywords (Dubai, salon, spa, AI)
export const metadata: Metadata = {
  metadataBase: new URL("https://meetsal.ai"),
  title: "SAL - AI Operations Partner for Salons & Spas in Dubai | WhatsApp Business Automation",
  description: "SAL is an autonomous AI operations partner for salons, spas, and barbershops in Dubai. Run your entire business through WhatsApp: team communication, task management, business intelligence, proactive monitoring. Setup in 1-3 days. Built by salon owners, for salon owners.",
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
    url: "https://meetsal.ai",
    siteName: "SAL - AI Operations Partner",
    title: "SAL - AI Operations Partner for Salons & Spas in Dubai",
    description: "Run your entire salon, spa, or barbershop through one WhatsApp chat. AI-powered operations partner built by a salon owner, for salon owners. Setup in 1-3 days.",
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
    description: "Run your entire business through WhatsApp. AI-powered operations for salons, spas & barbershops. Built by a salon owner, for salon owners.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://meetsal.ai",
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
    "@type": "Offer",
    "priceCurrency": "AED",
    "price": "1500",
    "description": "Starting from 1,500 AED/month. Setup fees from 15,000 AED. Priced by team size."
  },
  "provider": {
    "@type": "Organization",
    "name": "SAL",
    "url": "https://meetsal.ai",
    "logo": "https://meetsal.ai/owl-logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+9715643333073",
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
        "text": "SAL is an autonomous AI operations partner that helps salons, spas, and barbershops manage their entire business through WhatsApp. It handles bookings, team communication, customer inquiries, proactive alerts, and more. It doesn't wait to be asked."
      }
    },
    {
      "@type": "Question",
      "name": "How long does SAL setup take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most salons are up and running within 1-3 days. We handle the technical setup, customize SAL for your business, connect your Fresha account, and train SAL on your operations."
      }
    },
    {
      "@type": "Question",
      "name": "How much does SAL cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SAL is priced by team size. Small salons (5-10 staff): 15,000 AED setup + 1,500 AED/month. Medium (10-20 staff): 20,000 AED setup + 2,000 AED/month. Large (20+ staff): 25,000 AED setup + 2,500 AED/month. All plans include every feature, 24/7 support, and no long-term contracts."
      }
    },
    {
      "@type": "Question",
      "name": "Does SAL work with Fresha?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. SAL integrates directly with Fresha to pull your booking data, client history, service analytics, and more. No manual data entry. Everything syncs automatically."
      }
    },
    {
      "@type": "Question",
      "name": "What does autonomous actually mean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SAL doesn't wait for you to ask questions. It monitors your Fresha data 24/7 and proactively alerts you to booking declines, dormant VIP clients, staff patterns, and revenue opportunities. You approve actions with one tap."
      }
    },
    {
      "@type": "Question",
      "name": "What makes SAL different from other salon software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SAL isn't a dashboard you log into. It's an autonomous AI partner you message on WhatsApp, the app your team already uses. No training, no learning curve. It doesn't just respond. It thinks ahead."
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
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Sora:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
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
