import type { Metadata } from "next";
import JaipurPlotInvestmentClient from "@/components/enquiry/JaipurPlotInvestmentClient";

/**
 * ============================================================
 * JAIPUR PLOT INVESTMENT LANDING PAGE — SEO CONFIGURATION
 * ============================================================
 *
 * This file intentionally remains a Server Component.
 *
 * Responsibilities:
 * - Next.js SEO metadata
 * - Canonical URL
 * - Robots directives
 * - Open Graph / social sharing
 * - Structured data / JSON-LD
 *
 * The complete interactive landing-page UI remains inside:
 * components/enquiry/JaipurPlotInvestmentClient.tsx
 */

const canonicalUrl =
  "https://rsnestates.com/jaipur-plot-investment";

const pageTitle =
  "Plots Near NIMS University Jaipur | Jaipur Plot Investment Opportunity";

const pageDescription =
  "Explore residential and commercial plots near NIMS University, Jaipur, on the developing Jaipur–Delhi corridor. View plot sizes, site photos, investment options and current availability.";

const heroImage =
  "https://rsnestates.com/images/jaipur-investment-hero.webp";

/**
 * ============================================================
 * NEXT.JS METADATA
 * ============================================================
 */

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  alternates: {
    canonical: canonicalUrl,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: pageTitle,

    description: pageDescription,

    url: canonicalUrl,

    siteName: "RSN Estates",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: heroImage,
        width: 1920,
        height: 1080,
        alt: "Plot investment opportunity near NIMS University, Jaipur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: pageTitle,

    description: pageDescription,

    images: [heroImage],
  },
};

/**
 * ============================================================
 * STRUCTURED DATA / JSON-LD
 * ============================================================
 *
 * The schema below describes information that is actually
 * represented on the landing page.
 *
 * Included:
 * 1. WebPage
 * 2. RealEstateAgent
 * 3. BreadcrumbList
 * 4. FAQPage
 */

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "WebPage",

      "@id": `${canonicalUrl}#webpage`,

      url: canonicalUrl,

      name: pageTitle,

      description: pageDescription,

      inLanguage: "en-IN",

      isPartOf: {
        "@type": "WebSite",

        "@id": "https://rsnestates.com/#website",

        url: "https://rsnestates.com/",

        name: "RSN Estates",
      },

      about: {
        "@type": "Place",

        name: "NIMS University, Jaipur",

        address: {
          "@type": "PostalAddress",

          addressLocality: "Jaipur",

          addressRegion: "Rajasthan",

          addressCountry: "IN",
        },
      },

      breadcrumb: {
        "@id": `${canonicalUrl}#breadcrumb`,
      },

      publisher: {
        "@id": "https://rsnestates.com/#real-estate-agent",
      },

      primaryImageOfPage: {
        "@type": "ImageObject",

        url: heroImage,

        width: 1920,

        height: 1080,
      },
    },

    {
      "@type": "RealEstateAgent",

      "@id": "https://rsnestates.com/#real-estate-agent",

      name: "RSN Estates",

      url: "https://rsnestates.com/",

      areaServed: [
        {
          "@type": "City",

          name: "Jaipur",
        },

        {
          "@type": "AdministrativeArea",

          name: "Rajasthan",
        },
      ],
    },

    {
      "@type": "BreadcrumbList",

      "@id": `${canonicalUrl}#breadcrumb`,

      itemListElement: [
        {
          "@type": "ListItem",

          position: 1,

          name: "Home",

          item: "https://rsnestates.com/",
        },

        {
          "@type": "ListItem",

          position: 2,

          name: "Jaipur Plot Investment",

          item: canonicalUrl,
        },
      ],
    },

    {
      "@type": "FAQPage",

      "@id": `${canonicalUrl}#faq`,

      mainEntity: [
        {
          "@type": "Question",

          name:
            "What plot sizes are available near NIMS University, Jaipur?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Available plot options include 111, 122, 147, 153, 167, 172, 189, 227 and 261 SqYd, with larger options also available subject to current inventory.",
          },
        },

        {
          "@type": "Question",

          name:
            "Are residential and commercial plots available near NIMS University Jaipur?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Both residential and commercial plot options may be available. Current plot type, pricing and inventory should be confirmed before making an investment decision.",
          },
        },

        {
          "@type": "Question",

          name:
            "What budget should I consider for plot investment near NIMS University Jaipur?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "The landing page currently indicates investment options from approximately ₹35 lakh. This is an indicative starting value and current pricing and availability should be confirmed.",
          },
        },

        {
          "@type": "Question",

          name:
            "Is this suitable for long-term property investment in Jaipur?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "The opportunity is intended for buyers evaluating land as a longer-term property investment. Investors should independently evaluate location, infrastructure, legal documentation, pricing and their own investment objectives.",
          },
        },

        {
          "@type": "Question",

          name:
            "Can I visit the plotted development before investing?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Yes. Interested buyers can enquire about available plot options and discuss a site visit before making an investment decision.",
          },
        },

        {
          "@type": "Question",

          name:
            "How can I check current plot price and availability?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Submit the investment enquiry form on this page to request current plot options, pricing and availability.",
          },
        },
      ],
    },
  ],
};

/**
 * ============================================================
 * PAGE
 * ============================================================
 *
 * Server:
 * - Metadata
 * - Canonical
 * - Robots
 * - Open Graph
 * - JSON-LD
 *
 * Client:
 * - Complete landing-page UI
 * - Theme switching
 * - Investment lead form
 * - Existing interactions
 */

export default function JaipurPlotInvestmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <JaipurPlotInvestmentClient />
    </>
  );
}