import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CopyLinkButton from "@/components/blog/CopyLinkButton";

export const metadata: Metadata = {
  title: "How to Buy Property in Jaipur (Complete 2026 Guide) | RSN Estates",
  description:
    "Complete 2026 guide to buying property in Jaipur. Learn the buying process, legal verification, financing, best locations, investment tips, and common mistakes to avoid.",
  keywords: [
    "How to Buy Property in Jaipur",
    "Jaipur Property Guide",
    "Buy Property Jaipur",
    "Jaipur Real Estate",
    "Property Investment Jaipur",
    "RSN Estates",
  ],
  openGraph: {
    title: "How to Buy Property in Jaipur (Complete 2026 Guide)",
    description:
      "Everything you need to know before buying property in Jaipur.",
    type: "article",
    url: "https://rsnestates.com/blogs/how-to-buy-property-in-jaipur-complete-2026-guide",
    images: [
      {
        url: "/images/blogs/how-to-buy-property-in-jaipur-complete-2026-guide.webp",
        width: 1200,
        height: 630,
        alt: "How to Buy Property in Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Buy Property in Jaipur (Complete 2026 Guide)",
    description:
      "Complete property buying guide for Jaipur in 2026.",
    images: [
      "/images/blogs/how-to-buy-property-in-jaipur-complete-2026-guide.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://rsnestates.com/blogs/how-to-buy-property-in-jaipur-complete-2026-guide",
  },
};

export default function BlogPage() {
  const slug = "how-to-buy-property-in-jaipur-complete-2026-guide";
  const blogUrl = `https://rsnestates.com/blogs/${slug}`;
  const imageBase = `https://rsnestates.com/images/blogs`;

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${blogUrl}#blogposting`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": blogUrl,
    },
    headline: "How to Buy Property in Jaipur (Complete 2026 Guide)",
    alternativeHeadline:
      "Complete 2026 Home Buyer's Guide for Jaipur Real Estate",
    description:
      "Learn everything about buying property in Jaipur in 2026 including legal verification, home loans, documentation, registration, investment tips, best localities, and common mistakes to avoid.",
    image: [
      `${imageBase}/${slug}.webp`,
      `${imageBase}/${slug}-1.webp`,
      `${imageBase}/${slug}-2.webp`,
      `${imageBase}/${slug}-3.webp`,
    ],
    author: {
      "@type": "Organization",
      name: "RSN Estates Editorial Team",
      url: "https://rsnestates.com",
      logo: {
        "@type": "ImageObject",
        url: "https://rsnestates.com/images/logo-black.png",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "RSN Estates",
      url: "https://rsnestates.com",
      logo: {
        "@type": "ImageObject",
        url: "https://rsnestates.com/images/logo-black.png",
      },
    },
    datePublished: "2026-07-02",
    dateModified: "2026-07-02",
    inLanguage: "en-IN",
    articleSection: "Real Estate",
    articleBody:
      "This guide explains how to buy property in Jaipur safely, verify documents, compare localities, arrange financing, complete registration, and make informed investment decisions in 2026.",
    keywords: [
      "How to Buy Property in Jaipur",
      "Jaipur Property Guide",
      "Property Investment Jaipur",
      "Buy Flat in Jaipur",
      "Buy Plot in Jaipur",
      "Jaipur Real Estate",
      "Home Loan Jaipur",
      "Property Registration Jaipur",
      "Residential Property Jaipur",
      "RSN Estates",
    ],
    wordCount: 1450,
    timeRequired: "PT12M",
    isAccessibleForFree: true,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://rsnestates.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: "https://rsnestates.com/blogs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "How to Buy Property in Jaipur (Complete 2026 Guide)",
        item: blogUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is Jaipur a good city for property investment in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Jaipur continues to be one of India's fastest-growing real estate markets due to expanding infrastructure, metro connectivity, industrial growth, tourism, and increasing demand for residential housing.",
        },
      },
      {
        "@type": "Question",
        name: "What documents should I verify before buying property?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Verify the title deed, sale deed, approved layout plan, encumbrance certificate, RERA registration (if applicable), tax receipts, occupancy certificate, and identity documents of the seller.",
        },
      },
      {
        "@type": "Question",
        name: "How much down payment is usually required?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most banks finance 75% to 90% of the property's value. Buyers generally arrange the remaining amount as the down payment along with registration and other charges.",
        },
      },
      {
        "@type": "Question",
        name: "Should I buy a ready-to-move or under-construction property?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ready-to-move properties offer immediate possession, while under-construction projects may provide lower prices and better appreciation potential if purchased from a reputed developer.",
        },
      },
      {
        "@type": "Question",
        name: "Is RERA registration mandatory?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most qualifying residential projects are required to be registered under RERA. Buyers should verify project registration details before making any payment.",
        },
      },
      {
        "@type": "Question",
        name: "Which areas in Jaipur have high investment potential?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Jagatpura, Vaishali Nagar, Ajmer Road, Mansarovar Extension, Tonk Road, Mahindra SEZ, and Sirsi Road are among the popular investment destinations depending on your budget and goals.",
        },
      },
      {
        "@type": "Question",
        name: "What additional costs should buyers consider?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Apart from the property price, buyers should budget for stamp duty, registration charges, legal fees, loan processing charges, maintenance deposits, GST where applicable, and interior costs.",
        },
      },
      {
        "@type": "Question",
        name: "How can RSN Estates help?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RSN Estates assists buyers in shortlisting properties, arranging site visits, verifying documents, coordinating with banks, negotiating prices, and completing the purchase process smoothly.",
        },
      },
    ],
  };

  const tableOfContents = [
    {
      id: "why-buy-jaipur",
      title: "Why Buy Property in Jaipur",
    },
    {
      id: "buying-process",
      title: "Step-by-Step Buying Process",
    },
    {
      id: "documents-required",
      title: "Documents Required",
    },
    {
      id: "legal-verification",
      title: "Legal Verification Checklist",
    },
    {
      id: "home-loan-guide",
      title: "Home Loan Guide",
    },
    {
      id: "best-areas",
      title: "Best Areas to Buy Property in Jaipur",
    },
    {
      id: "common-mistakes",
      title: "Common Mistakes Buyers Make",
    },
    {
      id: "final-thoughts",
      title: "Final Thoughts",
    },
  ];

  const relatedBlogs = [
    {
      title: "Best Localities to Buy Property in Jaipur",
      href: "/blogs/best-localities-to-buy-property-in-jaipur",
      image: "/images/blogs/best-localities-to-buy-property-in-jaipur.webp",
      category: "Buying Guide",
      readingTime: "10 min read",
    },
    {
      title: "Top Emerging Investment Areas in Jaipur",
      href: "/blogs/top-emerging-investment-areas-in-jaipur",
      image: "/images/blogs/top-emerging-investment-areas-in-jaipur.webp",
      category: "Investment",
      readingTime: "9 min read",
    },
    {
      title: "Apartment vs Plot: Which is Better in Jaipur?",
      href: "/blogs/apartment-vs-plot-which-is-better-in-jaipur",
      image: "/images/blogs/apartment-vs-plot-which-is-better-in-jaipur.webp",
      category: "Comparison",
      readingTime: "8 min read",
    },
  ];

  const faqs = [
    {
      question: "Is Jaipur a good city for property investment in 2026?",
      answer:
        "Yes. Jaipur continues to attract homebuyers and investors due to its improving infrastructure, expanding road network, employment opportunities, and comparatively affordable property prices.",
    },
    {
      question: "How much down payment is required?",
      answer:
        "Most banks finance 75%–90% of the property's value. Buyers typically arrange the remaining amount along with registration and incidental expenses.",
    },
    {
      question: "Should I verify property documents before paying?",
      answer:
        "Absolutely. Always verify ownership, approvals, RERA registration, tax receipts, encumbrance status, and identity of the seller before making any payment.",
    },
    {
      question: "Is RERA verification important?",
      answer:
        "Yes. RERA registration improves transparency and helps buyers verify project details and developer credentials.",
    },
    {
      question: "What are the hidden costs while buying property?",
      answer:
        "Common additional expenses include stamp duty, registration charges, GST (where applicable), legal fees, loan processing charges, maintenance deposits, and interior work.",
    },
    {
      question: "Which locality is best for long-term appreciation?",
      answer:
        "Areas such as Jagatpura, Vaishali Nagar, Ajmer Road, Sirsi Road, Tonk Road, and Mahindra SEZ continue to attract long-term investors.",
    },
    {
      question: "Should I buy from a builder or an individual seller?",
      answer:
        "Both options have advantages. Evaluate legal documentation, pricing, reputation, construction quality, and future growth potential before making a decision.",
    },
    {
      question: "Can RSN Estates help throughout the buying process?",
      answer:
        "Yes. RSN Estates assists buyers with property search, site visits, negotiations, legal guidance, financing coordination, and end-to-end transaction support.",
    },
  ];

  return (
    <>
      {/* ============================================================
          JSON-LD
      ============================================================ */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* ============================================================
          Reading Progress Bar
      ============================================================ */}

      <div className="sticky top-0 z-50 h-1 w-full bg-slate-200 dark:bg-slate-800">
        <div className="h-full w-2/5 bg-gradient-to-r from-blue-600 to-cyan-500" />
      </div>

      <main className="bg-white text-slate-900 dark:bg-slate-900 dark:text-white">
        {/* ============================================================
            Breadcrumb
        ============================================================ */}

        <section className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-4 text-sm text-slate-600 dark:text-slate-400 md:px-8">
            <Link
              href="/"
              className="transition hover:text-blue-600 dark:hover:text-blue-400"
            >
              Home
            </Link>

            <span>›</span>

            <Link
              href="/blogs"
              className="transition hover:text-blue-600 dark:hover:text-blue-400"
            >
              Blogs
            </Link>

            <span>›</span>

            <span className="font-medium text-slate-900 dark:text-white">
              How to Buy Property in Jaipur (Complete 2026 Guide)
            </span>
          </div>
        </section>

        {/* ============================================================
            Hero Section
        ============================================================ */}

        <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-blue-50 via-white to-white dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
          <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:py-20">

            {/* Category Badge */}

            <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/40 dark:text-blue-300">
              Real Estate Buying Guide
            </div>

            {/* Heading */}

            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
              How to Buy Property in Jaipur (Complete 2026 Guide)
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Buying a property is one of the biggest financial decisions you'll
              ever make. This comprehensive guide explains every step of buying
              property in Jaipur—from selecting the right locality and verifying
              legal documents to securing a home loan and completing property
              registration confidently.
            </p>

            {/* Meta Information */}

            <div className="mt-8 flex flex-wrap items-center gap-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">

              {/* Author */}

              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">

                  <Image
                    src="/images/logo-black.png"
                    alt="RSN Estates"
                    width={48}
                    height={48}
                    className="block p-2 dark:hidden"
                  />

                  <Image
                    src="/images/logo-white.png"
                    alt="RSN Estates"
                    width={48}
                    height={48}
                    className="hidden p-2 dark:block"
                  />

                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Author
                  </p>
                  <p className="font-semibold">
                    RSN Estates Editorial Team
                  </p>
                </div>
              </div>

              <div className="hidden h-10 w-px bg-slate-300 dark:bg-slate-700 md:block" />

              {/* Published */}

              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Published
                </p>
                <p className="font-medium">2 July 2026</p>
              </div>

              <div className="hidden h-10 w-px bg-slate-300 dark:bg-slate-700 md:block" />

              {/* Updated */}

              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Updated
                </p>
                <p className="font-medium">2 July 2026</p>
              </div>

              <div className="hidden h-10 w-px bg-slate-300 dark:bg-slate-700 md:block" />

              {/* Reading Time */}

              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Reading Time
                </p>
                <p className="font-medium">12 min read</p>
              </div>

            </div>

            {/* Featured Image */}

            <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 shadow-2xl dark:border-slate-700">
              <Image
                src="/images/blogs/how-to-buy-property-in-jaipur-complete-2026-guide.webp"
                alt="How to Buy Property in Jaipur"
                width={1600}
                height={900}
                priority
                className="aspect-video w-full object-cover"
              />
            </div>

          </div>
        </section>

        {/* ============================================================
            Main Layout
        ============================================================ */}

        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-8 lg:grid-cols-12">

          {/* ============================================================
              Sticky Sidebar
          ============================================================ */}

          <aside className="lg:col-span-4 xl:col-span-3">

            <div className="sticky top-24 space-y-6">

              {/* ================================================
                  Table of Contents
              ================================================ */}

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                <h2 className="mb-5 text-lg font-bold text-slate-900 dark:text-white">
                  Table of Contents
                </h2>

                <nav>
                  <ul className="space-y-3">

                    {tableOfContents.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="group flex items-start gap-3 rounded-xl px-3 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                        >
                          <span className="mt-1 h-2 w-2 rounded-full bg-blue-600 transition group-hover:scale-125" />

                          <span>{item.title}</span>
                        </a>
                      </li>
                    ))}

                  </ul>
                </nav>
              </div>

              {/* ================================================
                  Quick Facts Card
              ================================================ */}

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
                  Quick Facts
                </h3>

                <div className="space-y-4">

                  <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-3 dark:border-slate-700">
                    <span className="text-slate-600 dark:text-slate-300">
                      Category
                    </span>

                    <span className="font-semibold">
                      Buying Guide
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-3 dark:border-slate-700">
                    <span className="text-slate-600 dark:text-slate-300">
                      Reading Time
                    </span>

                    <span className="font-semibold">
                      12 Minutes
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-3 dark:border-slate-700">
                    <span className="text-slate-600 dark:text-slate-300">
                      Last Updated
                    </span>

                    <span className="font-semibold">
                      July 2026
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-3 dark:border-slate-700">
                    <span className="text-slate-600 dark:text-slate-300">
                      Difficulty
                    </span>

                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-950/40 dark:text-green-300">
                      Beginner Friendly
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <span className="text-slate-600 dark:text-slate-300">
                      Suitable For
                    </span>

                    <span className="text-right font-semibold">
                      Home Buyers &
                      <br />
                      Investors
                    </span>
                  </div>

                </div>
              </div>

              {/* ================================================
                  Need Help Card
              ================================================ */}

              <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-600 p-6 text-white shadow-xl">

                <h3 className="text-xl font-bold">
                  Need Expert Guidance?
                </h3>

                <p className="mt-3 text-sm leading-7 text-blue-100">
                  Our property consultants can help you shortlist verified
                  properties, compare localities, negotiate prices, and complete
                  your purchase with confidence.
                </p>

                <div className="mt-6 space-y-3">

                  <Link
                    href="/properties"
                    className="flex justify-center rounded-xl bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-slate-100"
                  >
                    Browse Properties
                  </Link>

                  <Link
                    href="/contact"
                    className="flex justify-center rounded-xl border border-white/40 px-5 py-3 font-semibold transition hover:bg-white/10"
                  >
                    Contact Expert
                  </Link>

                </div>

              </div>

            </div>

          </aside>

          {/* ============================================================
              Article
          ============================================================ */}

          <article className="lg:col-span-8 xl:col-span-9">

            {/* ================================================
                Quick Summary Box
            ================================================ */}

            <section className="mb-12 rounded-3xl border border-blue-200 bg-blue-50 p-8 shadow-sm dark:border-blue-900 dark:bg-blue-950/30">

              <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-200">
                Quick Summary
              </h2>

              <p className="mt-3 text-slate-700 dark:text-slate-300">
                If you're planning to purchase a home, apartment, villa, or
                plot in Jaipur, these are the most important things to remember.
              </p>

              <ul className="mt-6 space-y-4">

                <li className="flex gap-3">
                  <span className="text-xl">✅</span>
                  <span>
                    Always verify ownership documents and legal approvals before
                    making any payment.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-xl">✅</span>
                  <span>
                    Choose a locality based on your long-term lifestyle,
                    investment goals, and budget.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-xl">✅</span>
                  <span>
                    Compare multiple projects instead of booking the first
                    property you visit.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-xl">✅</span>
                  <span>
                    Keep additional expenses such as stamp duty, registration,
                    interiors, GST, and maintenance in your budget.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-xl">✅</span>
                  <span>
                    Consult experienced real estate professionals before making
                    a final investment decision.
                  </span>
                </li>

              </ul>

            </section>

            {/* ================================================
                H2 #1
                Why Buy Property in Jaipur
            ================================================ */}

            <section
              id="why-buy-jaipur"
              className="scroll-mt-28"
            >

              <h2 className="mb-6 text-4xl font-black tracking-tight">
                Why Buy Property in Jaipur?
              </h2>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                Jaipur has transformed from a heritage city into one of India's
                fastest-growing real estate destinations. Continuous
                infrastructure development, better road connectivity, metro
                expansion, IT parks, educational institutions, healthcare
                facilities, and industrial corridors have significantly
                increased residential demand across the city.
              </p>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                Compared to metropolitan cities, Jaipur still offers relatively
                affordable property prices while providing excellent growth
                potential. Whether you're purchasing your first home or building
                a long-term investment portfolio, the city provides diverse
                options across different budgets.
              </p>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                Areas such as Jagatpura, Vaishali Nagar, Ajmer Road,
                Mansarovar Extension, Sirsi Road, Tonk Road, and Mahindra SEZ
                continue attracting both end-users and investors due to strong
                infrastructure and improving connectivity.
              </p>

              <div className="my-10 rounded-3xl border border-green-200 bg-green-50 p-8 dark:border-green-900 dark:bg-green-950/30">

                <h3 className="text-xl font-bold text-green-800 dark:text-green-300">
                  Investment Insight
                </h3>

                <p className="mt-3 leading-8 text-slate-700 dark:text-slate-300">
                  Buyers who focus on infrastructure growth rather than current
                  popularity often achieve better long-term appreciation.
                  Upcoming roads, metro connectivity, employment hubs, and
                  commercial developments can significantly influence future
                  property values.
                </p>

              </div>

            </section>

            {/* ================================================
                Image Section
            ================================================ */}

            <section className="my-14">

              <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl dark:border-slate-700">

                <Image
                  src="/images/blogs/how-to-buy-property-in-jaipur-complete-2026-guide-1.webp"
                  alt="Property investment in Jaipur"
                  width={1600}
                  height={900}
                  className="aspect-video w-full object-cover"
                />

              </div>

              <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
                Jaipur offers a healthy mix of affordable housing, premium
                residential projects, plotted developments, and investment
                opportunities across rapidly developing localities.
              </p>

            </section>

            {/* ================================================
                H2 #2
                Step-by-Step Buying Process
            ================================================ */}

            <section
              id="buying-process"
              className="scroll-mt-28"
            >

              <h2 className="mb-8 text-4xl font-black tracking-tight">
                Step-by-Step Property Buying Process
              </h2>

              <p className="mb-8 leading-8 text-slate-700 dark:text-slate-300">
                Purchasing property becomes much easier when approached in a
                systematic manner. Following a structured process reduces risks,
                prevents costly mistakes, and ensures a smoother buying
                experience.
              </p>

              <div className="space-y-8">

                <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-700">

                  <h3 className="text-2xl font-bold">
                    1. Define Your Budget & Goals
                  </h3>

                  <p className="mt-3 leading-8 text-slate-700 dark:text-slate-300">
                    Determine how much you can comfortably invest, evaluate your
                    loan eligibility, estimate monthly EMIs, and account for
                    registration charges, taxes, maintenance, and furnishing
                    expenses before beginning your property search.
                  </p>

                </div>

                <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-700">

                  <h3 className="text-2xl font-bold">
                    2. Shortlist Suitable Localities
                  </h3>

                  <p className="mt-3 leading-8 text-slate-700 dark:text-slate-300">
                    Compare infrastructure, schools, hospitals, workplaces,
                    public transport, future development plans, and rental
                    demand. Visiting shortlisted locations personally provides
                    valuable insights that online listings cannot offer.
                  </p>

                </div>

                <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-700">

                  <h3 className="text-2xl font-bold">
                    3. Verify Property & Complete the Transaction
                  </h3>

                  <p className="mt-3 leading-8 text-slate-700 dark:text-slate-300">
                    Carefully verify legal documents, negotiate the final price,
                    arrange financing, sign the sale agreement, register the
                    property, and complete ownership transfer only after every
                    document has been reviewed properly.
                  </p>

                </div>

              </div>

            </section>

            {/* ================================================
                Comparison Table
            ================================================ */}

            <section className="my-14 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">

              <div className="overflow-x-auto">

                <table className="min-w-full text-left">

                  <thead className="bg-slate-100 dark:bg-slate-800">
                    <tr>
                      <th className="px-6 py-4 font-bold">Buying Stage</th>
                      <th className="px-6 py-4 font-bold">What You Should Do</th>
                      <th className="px-6 py-4 font-bold">Why It Matters</th>
                    </tr>
                  </thead>

                  <tbody>

                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-6 py-4 font-medium">
                        Budget Planning
                      </td>
                      <td className="px-6 py-4">
                        Calculate affordability and loan eligibility.
                      </td>
                      <td className="px-6 py-4">
                        Prevents financial stress later.
                      </td>
                    </tr>

                    <tr className="bg-slate-50 dark:bg-slate-800">
                      <td className="px-6 py-4 font-medium">
                        Locality Selection
                      </td>
                      <td className="px-6 py-4">
                        Compare infrastructure, connectivity and future growth.
                      </td>
                      <td className="px-6 py-4">
                        Improves appreciation potential.
                      </td>
                    </tr>

                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-6 py-4 font-medium">
                        Document Verification
                      </td>
                      <td className="px-6 py-4">
                        Verify ownership and approvals.
                      </td>
                      <td className="px-6 py-4">
                        Reduces legal risk.
                      </td>
                    </tr>

                    <tr className="bg-slate-50 dark:bg-slate-800">
                      <td className="px-6 py-4 font-medium">
                        Registration
                      </td>
                      <td className="px-6 py-4">
                        Complete registration and ownership transfer.
                      </td>
                      <td className="px-6 py-4">
                        Legally secures your investment.
                      </td>
                    </tr>

                  </tbody>

                </table>

              </div>

            </section>

            {/* ================================================
                Expert Tip Box
            ================================================ */}

            <div className="my-14 rounded-3xl border border-green-200 bg-green-50 p-8 dark:border-green-900 dark:bg-green-950/30">

              <h3 className="text-2xl font-bold text-green-800 dark:text-green-300">
                Expert Tip
              </h3>

              <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
                Never book a property during your first visit. Compare multiple
                projects, understand market pricing, negotiate confidently, and
                verify every legal document before paying any booking amount.
              </p>

            </div>

            {/* ================================================
                H2 #3
                Documents Required
            ================================================ */}

            <section
              id="documents-required"
              className="scroll-mt-28"
            >

              <h2 className="mb-8 text-4xl font-black tracking-tight">
                Documents Required Before Buying Property
              </h2>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                Document verification is one of the most critical stages of any
                property transaction. Missing or incorrect paperwork can lead to
                ownership disputes, delayed possession, financial losses, and
                future legal complications.
              </p>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                Before signing any agreement or paying an advance, carefully
                review every important document. If necessary, seek legal advice
                from a qualified property lawyer.
              </p>

              <div className="my-10 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden">

                <div className="overflow-x-auto">

                  <table className="min-w-full">

                    <thead className="bg-slate-100 dark:bg-slate-800">
                      <tr>
                        <th className="px-6 py-4 text-left font-bold">
                          Document
                        </th>
                        <th className="px-6 py-4 text-left font-bold">
                          Purpose
                        </th>
                      </tr>
                    </thead>

                    <tbody>

                      <tr className="bg-white dark:bg-slate-900">
                        <td className="px-6 py-4">
                          Title Deed
                        </td>
                        <td className="px-6 py-4">
                          Confirms legal ownership.
                        </td>
                      </tr>

                      <tr className="bg-slate-50 dark:bg-slate-800">
                        <td className="px-6 py-4">
                          Sale Deed
                        </td>
                        <td className="px-6 py-4">
                          Proof of ownership transfer.
                        </td>
                      </tr>

                      <tr className="bg-white dark:bg-slate-900">
                        <td className="px-6 py-4">
                          Approved Building Plan
                        </td>
                        <td className="px-6 py-4">
                          Ensures legal construction.
                        </td>
                      </tr>

                      <tr className="bg-slate-50 dark:bg-slate-800">
                        <td className="px-6 py-4">
                          Encumbrance Certificate
                        </td>
                        <td className="px-6 py-4">
                          Checks loans and liabilities.
                        </td>
                      </tr>

                      <tr className="bg-white dark:bg-slate-900">
                        <td className="px-6 py-4">
                          Property Tax Receipts
                        </td>
                        <td className="px-6 py-4">
                          Confirms tax payments.
                        </td>
                      </tr>

                      <tr className="bg-slate-50 dark:bg-slate-800">
                        <td className="px-6 py-4">
                          RERA Registration
                        </td>
                        <td className="px-6 py-4">
                          Validates approved projects.
                        </td>
                      </tr>

                    </tbody>

                  </table>

                </div>

              </div>

            </section>

            {/* ================================================
                Image
            ================================================ */}

            <section className="my-14">

              <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl dark:border-slate-700">

                <Image
                  src="/images/blogs/how-to-buy-property-in-jaipur-complete-2026-guide-2.webp"
                  alt="Property document verification"
                  width={1600}
                  height={900}
                  className="aspect-video w-full object-cover"
                />

              </div>

            </section>

            {/* ================================================
                H2 #4
                Legal Verification Checklist
            ================================================ */}

            <section
              id="legal-verification"
              className="scroll-mt-28"
            >

              <h2 className="mb-8 text-4xl font-black tracking-tight">
                Legal Verification Checklist
              </h2>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                Even an attractive property should never be purchased without
                proper legal due diligence. A careful legal review protects your
                investment and minimizes the possibility of future disputes.
              </p>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                Ensure the seller has clear ownership rights, verify that all
                government approvals are available, and confirm there are no
                outstanding loans, litigation, or unauthorized construction on
                the property.
              </p>

              <ul className="mb-10 space-y-4">

                <li>✔ Verify the original title deed.</li>

                <li>✔ Match seller identity with ownership records.</li>

                <li>✔ Confirm RERA registration where applicable.</li>

                <li>✔ Verify approved building plans.</li>

                <li>✔ Check property tax clearance.</li>

                <li>✔ Obtain an Encumbrance Certificate.</li>

                <li>✔ Verify possession and occupancy certificates.</li>

              </ul>

              {/* Warning Box */}

              <div className="rounded-3xl border border-amber-300 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-950/30">

                <h3 className="text-2xl font-bold text-amber-800 dark:text-amber-300">
                  Important Warning
                </h3>

                <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
                  Never rely solely on verbal assurances from brokers or
                  sellers. Every legal claim should be supported by official
                  documents. Spending a little on legal verification today can
                  save years of litigation and significant financial loss in the
                  future.
                </p>

              </div>

            </section>

            {/* ================================================
                H2 #5
                Home Loan Guide
            ================================================ */}

            <section
              id="home-loan-guide"
              className="scroll-mt-28 mt-16"
            >

              <h2 className="mb-8 text-4xl font-black tracking-tight">
                Home Loan Guide
              </h2>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                A home loan allows buyers to purchase their dream property
                without paying the complete amount upfront. Choosing the right
                lender, understanding EMI obligations, and comparing loan
                options can save several lakhs over the loan tenure.
              </p>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                Before applying, check your credit score, compare interest
                rates, understand processing fees, and ensure that your monthly
                EMI comfortably fits within your financial planning.
              </p>

              <p className="mb-10 leading-8 text-slate-700 dark:text-slate-300">
                Most financial institutions finance 75% to 90% of the property
                value depending on eligibility, income, repayment capacity, and
                the property's valuation.
              </p>

              {/* Investment Table */}

              <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">

                <div className="overflow-x-auto">

                  <table className="min-w-full">

                    <thead className="bg-slate-100 dark:bg-slate-800">
                      <tr>
                        <th className="px-6 py-4 text-left font-bold">
                          Factor
                        </th>
                        <th className="px-6 py-4 text-left font-bold">
                          Recommendation
                        </th>
                      </tr>
                    </thead>

                    <tbody>

                      <tr className="bg-white dark:bg-slate-900">
                        <td className="px-6 py-4">Credit Score</td>
                        <td className="px-6 py-4">
                          Preferably 750+
                        </td>
                      </tr>

                      <tr className="bg-slate-50 dark:bg-slate-800">
                        <td className="px-6 py-4">Down Payment</td>
                        <td className="px-6 py-4">
                          10%–25% of property value
                        </td>
                      </tr>

                      <tr className="bg-white dark:bg-slate-900">
                        <td className="px-6 py-4">Loan Tenure</td>
                        <td className="px-6 py-4">
                          Choose a comfortable repayment period
                        </td>
                      </tr>

                      <tr className="bg-slate-50 dark:bg-slate-800">
                        <td className="px-6 py-4">EMI</td>
                        <td className="px-6 py-4">
                          Keep within your monthly budget
                        </td>
                      </tr>

                      <tr className="bg-white dark:bg-slate-900">
                        <td className="px-6 py-4">Interest Rate</td>
                        <td className="px-6 py-4">
                          Compare multiple lenders before finalizing
                        </td>
                      </tr>

                    </tbody>

                  </table>

                </div>

              </div>

            </section>

            {/* ================================================
                Mid Article CTA
            ================================================ */}

            <section className="my-16 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 p-10 text-white shadow-2xl">

              <h2 className="text-4xl font-black">
                Looking for the Right Property in Jaipur?
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
                Our experienced real estate consultants help buyers discover
                verified properties, compare projects, negotiate better prices,
                and complete transactions with confidence.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <Link
                  href="/properties"
                  className="rounded-xl bg-white px-7 py-4 font-bold text-blue-700 transition hover:bg-slate-100"
                >
                  Browse Properties
                </Link>

                <Link
                  href="/contact"
                  className="rounded-xl border border-white/40 px-7 py-4 font-bold transition hover:bg-white/10"
                >
                  Contact Expert
                </Link>

              </div>

            </section>

            {/* ================================================
                H2 #6
                Best Areas in Jaipur
            ================================================ */}

            <section
              id="best-areas"
              className="scroll-mt-28"
            >

              <h2 className="mb-8 text-4xl font-black tracking-tight">
                Best Areas to Buy Property in Jaipur
              </h2>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                Jaipur offers residential options for every type of buyer. Some
                localities are ideal for self-use, while others provide better
                rental income or long-term appreciation.
              </p>

              <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">

                <div className="overflow-x-auto">

                  <table className="min-w-full">

                    <thead className="bg-slate-100 dark:bg-slate-800">

                      <tr>
                        <th className="px-6 py-4 text-left font-bold">
                          Locality
                        </th>
                        <th className="px-6 py-4 text-left font-bold">
                          Best For
                        </th>
                        <th className="px-6 py-4 text-left font-bold">
                          Investment Potential
                        </th>
                      </tr>

                    </thead>

                    <tbody>

                      <tr className="bg-white dark:bg-slate-900">
                        <td className="px-6 py-4">Jagatpura</td>
                        <td className="px-6 py-4">
                          Families & Professionals
                        </td>
                        <td className="px-6 py-4">★★★★★</td>
                      </tr>

                      <tr className="bg-slate-50 dark:bg-slate-800">
                        <td className="px-6 py-4">Vaishali Nagar</td>
                        <td className="px-6 py-4">
                          Premium Living
                        </td>
                        <td className="px-6 py-4">★★★★★</td>
                      </tr>

                      <tr className="bg-white dark:bg-slate-900">
                        <td className="px-6 py-4">Ajmer Road</td>
                        <td className="px-6 py-4">
                          Long-Term Investment
                        </td>
                        <td className="px-6 py-4">★★★★☆</td>
                      </tr>

                      <tr className="bg-slate-50 dark:bg-slate-800">
                        <td className="px-6 py-4">
                          Mansarovar Extension
                        </td>
                        <td className="px-6 py-4">
                          Affordable Housing
                        </td>
                        <td className="px-6 py-4">★★★★☆</td>
                      </tr>

                      <tr className="bg-white dark:bg-slate-900">
                        <td className="px-6 py-4">Sirsi Road</td>
                        <td className="px-6 py-4">
                          First-Time Buyers
                        </td>
                        <td className="px-6 py-4">★★★★☆</td>
                      </tr>

                    </tbody>

                  </table>

                </div>

              </div>

            </section>

            {/* ================================================
                H2 #7
                Common Mistakes
            ================================================ */}

            <section
              id="common-mistakes"
              className="scroll-mt-28 mt-16"
            >

              <h2 className="mb-8 text-4xl font-black tracking-tight">
                Common Mistakes Buyers Should Avoid
              </h2>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                Even experienced investors occasionally overlook important
                details during a property purchase. Avoiding these mistakes can
                protect your investment and reduce unnecessary stress.
              </p>

              <ul className="space-y-4 text-slate-700 dark:text-slate-300">

                <li>❌ Buying without legal verification.</li>

                <li>❌ Ignoring hidden costs.</li>

                <li>❌ Not comparing multiple projects.</li>

                <li>❌ Choosing location based only on price.</li>

                <li>❌ Skipping home loan comparison.</li>

                <li>❌ Paying large advances without documentation.</li>

              </ul>

              <div className="mt-10 rounded-3xl border border-red-300 bg-red-50 p-8 dark:border-red-900 dark:bg-red-950/30">

                <h3 className="text-2xl font-bold text-red-700 dark:text-red-300">
                  Warning
                </h3>

                <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
                  Never make investment decisions under pressure from sales
                  representatives or limited-time offers. Always verify every
                  claim independently and review all documents carefully before
                  signing any agreement.
                </p>

              </div>

            </section>

            {/* ================================================
                H2 #8
                Final Thoughts
            ================================================ */}

            <section
              id="final-thoughts"
              className="scroll-mt-28 mt-16"
            >

              <h2 className="mb-8 text-4xl font-black tracking-tight">
                Final Thoughts
              </h2>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                Buying property in Jaipur is a rewarding long-term investment
                when approached with proper planning, legal verification, and
                realistic financial expectations. The city's growing
                infrastructure, expanding employment opportunities, and rising
                residential demand continue to create attractive opportunities
                for both homebuyers and investors.
              </p>

              <p className="leading-8 text-slate-700 dark:text-slate-300">
                Research thoroughly, compare multiple options, verify every
                document, and seek professional guidance whenever required. A
                well-informed decision today can provide lasting financial
                security and long-term appreciation.
              </p>

            </section>

            {/* ================================================
                Key Takeaways
            ================================================ */}

            <section className="my-16 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-950/30">

              <h2 className="text-3xl font-black text-blue-900 dark:text-blue-200">
                Key Takeaways
              </h2>

              <div className="mt-8 grid gap-5 md:grid-cols-2">

                <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900">
                  ✔ Always verify legal documents before making any payment.
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900">
                  ✔ Select localities based on future growth and connectivity.
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900">
                  ✔ Compare multiple properties before making a decision.
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900">
                  ✔ Budget for registration, taxes, interiors, and maintenance.
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900">
                  ✔ Home loan comparison can save substantial money over time.
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900">
                  ✔ Professional guidance helps avoid expensive mistakes.
                </div>

              </div>

            </section>

            {/* ================================================
                FAQ Section
            ================================================ */}

            <section className="mt-20">

              <h2 className="mb-10 text-4xl font-black tracking-tight">
                Frequently Asked Questions
              </h2>

              <div className="space-y-5">

                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition dark:border-slate-700 dark:bg-slate-900"
                  >
                    <summary className="cursor-pointer list-none text-lg font-semibold">
                      {faq.question}
                    </summary>

                    <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
                      {faq.answer}
                    </p>
                  </details>
                ))}

              </div>

            </section>

            {/* ================================================
                Share Section
            ================================================ */}

            <section className="mt-20 rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-700 dark:bg-slate-950">

              <h2 className="text-2xl font-bold">
                Share this Article
              </h2>

              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Found this guide useful? Share it with your friends and family.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <button
                  type="button"
                  className="rounded-xl bg-[#1877F2] px-6 py-3 font-semibold text-white transition hover:opacity-90"
                >
                  Facebook
                </button>

                <button
                  type="button"
                  className="rounded-xl bg-[#0A66C2] px-6 py-3 font-semibold text-white transition hover:opacity-90"
                >
                  LinkedIn
                </button>

                <button
                  type="button"
                  className="rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:opacity-90"
                >
                  WhatsApp
                </button>

                <CopyLinkButton url={blogUrl} />

              </div>

            </section>

            {/* ================================================
                Author Section
            ================================================ */}

            <section className="mt-20 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">

              <div className="flex flex-col items-start gap-6 md:flex-row">

                {/* Light Logo */}

                <Image
                  src="/images/logo-black.png"
                  alt="RSN Estates"
                  width={90}
                  height={90}
                  className="block rounded-full border border-slate-200 bg-white p-3 dark:hidden"
                />

                {/* Dark Logo */}

                <Image
                  src="/images/logo-white.png"
                  alt="RSN Estates"
                  width={90}
                  height={90}
                  className="hidden rounded-full border border-slate-700 bg-slate-800 p-3 dark:block"
                />

                <div>

                  <h2 className="text-2xl font-black">
                    RSN Estates Editorial Team
                  </h2>

                  <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
                    The RSN Estates Editorial Team publishes in-depth real
                    estate guides, investment insights, locality reviews,
                    buying tips, market trends, and practical advice to help
                    homebuyers and investors make informed property decisions
                    across Jaipur.
                  </p>

                </div>

              </div>

            <Image
              src="/images/logo-black.png"
              alt="RSN Estates"
              width={80}
              height={80}
              className="block dark:hidden"
            />

            {/* Dark Logo */}

            <Image
              src="/images/logo-white.png"
              alt="RSN Estates"
              width={80}
              height={80}
              className="hidden dark:block"
            />

              {/* RSN Estates Editorial Team */}

              <div className="mt-6 flex flex-wrap items-center gap-3">

                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
                  Jaipur Real Estate
                </span>

                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-950/40 dark:text-green-300">
                  Home Buying Guide
                </span>

                <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700 dark:bg-amber-950/40 dark:text-amber-300">
                  Investment Tips
                </span>

                <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700 dark:bg-purple-950/40 dark:text-purple-300">
                  Verified Content
                </span>

              </div>

            </section>

            {/* ================================================
                Related Blogs
            ================================================ */}

            <section className="mt-20">

              <div className="mb-10 flex items-center justify-between">

                <div>
                  <h2 className="text-4xl font-black tracking-tight">
                    Related Articles
                  </h2>

                  <p className="mt-2 text-slate-600 dark:text-slate-300">
                    Continue exploring Jaipur's real estate market with these
                    helpful guides.
                  </p>
                </div>

              </div>

              <div className="grid gap-8 lg:grid-cols-3">

                {relatedBlogs.map((blog) => (
                  <article
                    key={blog.href}
                    className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
                  >
                    <Link href={blog.href}>

                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={800}
                        height={450}
                        className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                    </Link>

                    <div className="p-6">

                      <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
                        {blog.category}
                      </span>

                      <h3 className="mt-4 text-xl font-bold leading-snug">
                        <Link
                          href={blog.href}
                          className="transition hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          {blog.title}
                        </Link>
                      </h3>

                      <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                        {blog.readingTime}
                      </p>

                    </div>

                  </article>
                ))}

              </div>

            </section>

            {/* ================================================
                Final CTA
            ================================================ */}

            <section className="mt-20 overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-700 p-10 text-white shadow-2xl md:p-16">

              <div className="mx-auto max-w-4xl text-center">

                <h2 className="text-4xl font-black leading-tight md:text-5xl">
                  Ready to Buy Your Dream Property in Jaipur?
                </h2>

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
                  Whether you're searching for your first home, a luxury villa,
                  a residential plot, or an investment property, RSN Estates
                  can help you discover verified opportunities across Jaipur
                  with complete transparency and expert guidance.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-5">

                  <Link
                    href="/properties"
                    className="rounded-2xl bg-white px-8 py-4 text-lg font-bold text-blue-700 transition hover:scale-105 hover:bg-slate-100"
                  >
                    Browse Properties
                  </Link>

                  <Link
                    href="/contact"
                    className="rounded-2xl border border-white/40 px-8 py-4 text-lg font-bold transition hover:bg-white/10"
                  >
                    Contact Expert
                  </Link>
                </div>
              </div>
        </section>

          </article>

        </section>
      </main>
    </>
  );
}