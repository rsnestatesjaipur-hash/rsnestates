import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "How to Verify Property Documents Before Buying in Jaipur | RSN Estates",
  description:
    "Learn how to verify property documents before buying in Jaipur. Discover the essential legal documents, ownership checks, RERA verification, approvals, and expert tips to avoid property fraud in 2026.",
  keywords: [
    "Property Document Verification Jaipur",
    "Property Documents Jaipur",
    "Property Verification Guide",
    "Title Deed Verification",
    "Sale Deed Jaipur",
    "Encumbrance Certificate",
    "Property Legal Documents",
    "RERA Verification Jaipur",
    "Property Buying Guide Jaipur",
    "Real Estate Jaipur",
    "Home Buying Jaipur",
    "Property Lawyer Jaipur",
    "Property Registration Jaipur",
    "RSN Estates",
  ],
  alternates: {
    canonical:
      "https://rsnestates.com/blogs/how-to-verify-property-documents-before-buying-in-jaipur",
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
    type: "article",
    url:
      "https://rsnestates.com/blogs/how-to-verify-property-documents-before-buying-in-jaipur",
    title:
      "How to Verify Property Documents Before Buying in Jaipur",
    description:
      "A complete guide to verifying property documents in Jaipur. Learn how to check ownership records, title deeds, sale deeds, RERA registration, approvals, and legal documents before buying a property.",
    siteName: "RSN Estates",
    locale: "en_IN",
    images: [
      {
        url:
          "https://rsnestates.com/images/blogs/how-to-verify-property-documents-before-buying-in-jaipur.webp",
        width: 1600,
        height: 900,
        alt: "How to Verify Property Documents Before Buying in Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How to Verify Property Documents Before Buying in Jaipur",
    description:
      "Learn the complete property document verification process before buying a home or plot in Jaipur. Avoid legal issues and make informed investment decisions.",
    images: [
      "https://rsnestates.com/images/blogs/how-to-verify-property-documents-before-buying-in-jaipur.webp",
    ],
  },
};

export default function BlogPage() {

  /* ============================================================
      SEO Constants
      Keep slug lowercase for SEO-friendly URLs.
  ============================================================ */

  const slug = "how-to-verify-property-documents-before-buying-in-jaipur";

  const blogTitle =
    "How to Verify Property Documents Before Buying in Jaipur";

  const blogUrl = `https://rsnestates.com/blogs/${slug}`;

  const imageBase = "https://rsnestates.com/images/blogs";

  /* ============================================================
      Structured Data
  ============================================================ */

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${blogUrl}#blogposting`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": blogUrl,
    },
    headline: blogTitle,
    alternativeHeadline:
      "Complete Guide to Verifying Property Documents Before Buying in Jaipur",
    description:
      "Learn how to verify property documents before buying a home, plot, or apartment in Jaipur. Understand title verification, sale deed, encumbrance certificate, RERA registration, approvals, and legal due diligence.",
    image: [
      `${imageBase}/${slug}.webp`,
      `${imageBase}/${slug}-1.webp`,
      `${imageBase}/${slug}-2.webp`,
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
    datePublished: "2026-07-05",
    dateModified: "2026-07-05",
    inLanguage: "en-IN",
    articleSection: "Property Buying Guide",
    articleBody:
      "This guide explains how to verify property documents before buying property in Jaipur. It covers title deeds, sale deeds, encumbrance certificates, approved building plans, RERA registration, ownership verification, legal due diligence, and practical tips to help buyers avoid fraud and make informed investment decisions.",
    keywords: [
      "Property Document Verification Jaipur",
      "Property Documents Jaipur",
      "Title Deed Verification",
      "Sale Deed Jaipur",
      "Encumbrance Certificate",
      "RERA Verification",
      "Property Lawyer Jaipur",
      "Property Buying Guide Jaipur",
      "Real Estate Jaipur",
      "RSN Estates",
    ],
    wordCount: 3300,
    timeRequired: "PT13M",
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
        name: blogTitle,
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
        name: "Which property documents should I verify before buying?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Buyers should verify the title deed, sale deed, encumbrance certificate, approved building plan, RERA registration (where applicable), ownership records, tax receipts, and other relevant legal documents before purchasing property.",
        },
      },
      {
        "@type": "Question",
        name: "Why is title deed verification important?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The title deed establishes ownership of the property and helps confirm that the seller has the legal right to transfer ownership.",
        },
      },
      {
        "@type": "Question",
        name: "What is an encumbrance certificate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An encumbrance certificate helps indicate whether a property has registered financial or legal liabilities during a specified period.",
        },
      },
      {
        "@type": "Question",
        name: "Should I verify RERA registration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. For applicable projects, buyers should verify the project's registration through the official Rajasthan RERA portal before booking.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a property lawyer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Consulting a qualified property lawyer can help identify legal issues, review documents, and reduce the risk of costly mistakes.",
        },
      },
      {
        "@type": "Question",
        name: "Can I verify documents myself?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Buyers can review many documents themselves, but professional legal advice is recommended for high-value transactions or whenever uncertainties arise.",
        },
      },
      {
        "@type": "Question",
        name: "What are the biggest warning signs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Missing ownership records, incomplete approvals, document inconsistencies, unclear property boundaries, and pressure to make immediate payments should all be investigated carefully.",
        },
      },
      {
        "@type": "Question",
        name: "Can RSN Estates help buyers verify properties?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RSN Estates helps buyers understand the verification process, compare properties, and make informed real estate decisions across Jaipur.",
        },
      },
    ],
  };

  /* ============================================================
      Sidebar
  ============================================================ */

  const tableOfContents = [
    {
      id: "why-verification-matters",
      title: "Why Property Document Verification is Important",
    },
    {
      id: "essential-documents",
      title: "Essential Property Documents Every Buyer Should Check",
    },
    {
      id: "verification-process",
      title: "Step-by-Step Property Verification Process",
    },
    {
      id: "red-flags",
      title: "Common Red Flags in Property Documents",
    },
    {
      id: "property-lawyer",
      title: "How a Property Lawyer Can Help",
    },
    {
      id: "buyer-mistakes",
      title: "Mistakes Buyers Make During Verification",
    },
    {
      id: "expert-tips",
      title: "Expert Tips Before Signing Any Agreement",
    },
    {
      id: "final-thoughts",
      title: "Final Thoughts",
    },
  ];

  /* ============================================================
      Related Blogs
  ============================================================ */

  const relatedBlogs = [
    {
      title: "RERA Approved Properties in Jaipur: Why They Matter",
      href: "/blogs/rera-approved-properties-in-jaipur-why-they-matter",
      image:
        "/images/blogs/rera-approved-properties-in-jaipur-why-they-matter.webp",
      category: "Legal Guide",
      readingTime: "13 min read",
    },
    {
      title: "10 Common Mistakes to Avoid When Buying Property in Jaipur",
      href: "/blogs/common-mistakes-to-avoid-when-buying-property-in-jaipur",
      image:
        "/images/blogs/common-mistakes-to-avoid-when-buying-property-in-jaipur.webp",
      category: "Buying Guide",
      readingTime: "11 min read",
    },
    {
      title: "How to Buy Property in Jaipur (Complete 2026 Guide)",
      href: "/blogs/how-to-buy-property-in-jaipur-complete-2026-guide",
      image:
        "/images/blogs/how-to-buy-property-in-jaipur-complete-2026-guide.webp",
      category: "Property Guide",
      readingTime: "12 min read",
    },
  ];

  /* ============================================================
      FAQs
  ============================================================ */

  const faqs = [
    {
      question: "Which property documents should I verify before buying?",
      answer:
        "Important documents include the title deed, sale deed, encumbrance certificate, approved building plan, ownership records, tax receipts, and RERA registration where applicable.",
    },
    {
      question: "Why is title deed verification important?",
      answer:
        "It confirms that the seller has legal ownership and the authority to transfer the property.",
    },
    {
      question: "What is an encumbrance certificate?",
      answer:
        "It provides information about registered financial or legal liabilities associated with the property during a specified period.",
    },
    {
      question: "Should I verify RERA registration?",
      answer:
        "Yes. Buyers should verify RERA registration for applicable projects through the official Rajasthan RERA portal.",
    },
    {
      question: "Do I need a property lawyer?",
      answer:
        "A qualified property lawyer can review legal documents and help identify potential issues before purchase.",
    },
    {
      question: "Can I verify documents myself?",
      answer:
        "You can perform preliminary checks, but professional legal advice is recommended for complete verification.",
    },
    {
      question: "What are common red flags?",
      answer:
        "Missing approvals, ownership disputes, inconsistent records, incomplete documentation, and pressure for immediate payment are common warning signs.",
    },
    {
      question: "Can RSN Estates help buyers?",
      answer:
        "Yes. RSN Estates assists buyers in understanding document verification, comparing properties, and making informed property decisions in Jaipur.",
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
        <div className="h-full w-2/5 bg-gradient-to-r from-emerald-600 via-cyan-500 to-blue-600" />
      </div>

      <main className="bg-white text-slate-900 dark:bg-slate-900 dark:text-white">

        {/* ============================================================
            Breadcrumb
        ============================================================ */}

        <section className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">

          <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-4 text-sm text-slate-600 dark:text-slate-400 md:px-8">

            <Link
              href="/"
              className="transition hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              Home
            </Link>

            <span>›</span>

            <Link
              href="/blogs"
              className="transition hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              Blogs
            </Link>

            <span>›</span>

            <span className="font-medium text-slate-900 dark:text-white">
              {blogTitle}
            </span>

          </div>

        </section>

        {/* ============================================================
            Hero Section
        ============================================================ */}

        <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-emerald-50 via-white to-white dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">

          <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:py-20">

            {/* Category Badge */}

            <div className="mb-6 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
              Property Buying Guide
            </div>

            {/* H1 */}

            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
              {blogTitle}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Learn how to verify property documents before buying a home,
              apartment, villa, or plot in Jaipur. This comprehensive guide
              explains title verification, ownership records, RERA
              registration, legal approvals, encumbrance certificates, and
              practical steps to help you avoid fraud and make informed real
              estate decisions.
            </p>

            {/* Author / Meta */}

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

                <p className="font-medium">
                  5 July 2026
                </p>

              </div>

              <div className="hidden h-10 w-px bg-slate-300 dark:bg-slate-700 md:block" />

              {/* Updated */}

              <div>

                <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Updated
                </p>

                <p className="font-medium">
                  5 July 2026
                </p>

              </div>

              <div className="hidden h-10 w-px bg-slate-300 dark:bg-slate-700 md:block" />

              {/* Reading Time */}

              <div>

                <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Reading Time
                </p>

                <p className="font-medium">
                  13 min read
                </p>

              </div>

            </div>

            {/* Featured Image */}

            <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 shadow-2xl dark:border-slate-700">

              <Image
                src="/images/blogs/how-to-verify-property-documents-before-buying-in-jaipur.webp"
                alt={blogTitle}
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
                          className="group flex items-start gap-3 rounded-xl px-3 py-2 text-sm text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
                        >

                          <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600 transition group-hover:scale-125" />

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
                      Legal Verification Guide
                    </span>

                  </div>

                  <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-3 dark:border-slate-700">

                    <span className="text-slate-600 dark:text-slate-300">
                      Reading Time
                    </span>

                    <span className="font-semibold">
                      13 Minutes
                    </span>

                  </div>

                  <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-3 dark:border-slate-700">

                    <span className="text-slate-600 dark:text-slate-300">
                      Updated
                    </span>

                    <span className="font-semibold">
                      July 2026
                    </span>

                  </div>

                  <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-3 dark:border-slate-700">

                    <span className="text-slate-600 dark:text-slate-300">
                      Suitable For
                    </span>

                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
                      Homebuyers & Investors
                    </span>

                  </div>

                  <div className="flex items-start justify-between gap-4">

                    <span className="text-slate-600 dark:text-slate-300">
                      Focus
                    </span>

                    <span className="text-right font-semibold">
                      Title Verification
                      <br />
                      Legal Documents
                      <br />
                      Safe Property Purchase
                    </span>

                  </div>

                </div>

              </div>

              {/* ================================================
                  Essential Documents
              ================================================ */}

              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm dark:border-emerald-900 dark:bg-emerald-950/30">

                <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300">
                  Verify These Documents
                </h3>

                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700 dark:text-slate-300">

                  <li>📄 Title Deed</li>

                  <li>📑 Sale Deed</li>

                  <li>🏛️ Encumbrance Certificate</li>

                  <li>🏗️ Approved Building Plan</li>

                  <li>✅ RERA Registration</li>

                </ul>

              </div>

              {/* ================================================
                  CTA Card
              ================================================ */}

              <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-700 via-cyan-700 to-blue-700 p-6 text-white shadow-xl">

                <h3 className="text-xl font-bold">
                  Looking for a Verified Property?
                </h3>

                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  RSN Estates helps you compare verified properties, understand
                  legal documentation, evaluate builders, and make confident
                  property buying decisions across Jaipur.
                </p>

                <div className="mt-6 space-y-3">

                  <Link
                    href="/properties"
                    className="flex justify-center rounded-xl bg-white px-5 py-3 font-semibold text-emerald-700 transition hover:bg-slate-100"
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

          <article className="min-w-0 lg:col-span-8 xl:col-span-9">

            {/* ================================================
                Quick Summary Box
            ================================================ */}

            <section className="mb-12 rounded-3xl border border-blue-200 bg-blue-50 p-8 shadow-sm dark:border-blue-900 dark:bg-blue-950/30">

              <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-200">
                Quick Summary
              </h2>

              <p className="mt-3 text-slate-700 dark:text-slate-300">
                Property document verification is one of the most important
                steps before buying any apartment, villa, plot, or commercial
                property in Jaipur. Proper verification helps establish
                ownership, confirms legal approvals, reduces the risk of fraud,
                and ensures that your investment is protected.
              </p>

              <ul className="mt-6 space-y-4">

                <li className="flex gap-3">
                  <span className="text-xl">📄</span>
                  <span>
                    Verify ownership and title documents before making any
                    payment.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-xl">🏛️</span>
                  <span>
                    Check government approvals, building plans, and land-use
                    permissions.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-xl">✅</span>
                  <span>
                    Confirm RERA registration for applicable residential
                    projects.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-xl">⚖️</span>
                  <span>
                    Review legal records to identify disputes, loans, or
                    encumbrances.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-xl">🏡</span>
                  <span>
                    Seek professional legal advice whenever you have doubts
                    about any property document.
                  </span>
                </li>

              </ul>

            </section>

            {/* ================================================
                H2 #1
                Why Property Document Verification is Important
            ================================================ */}

            <section
              id="why-verification-matters"
              className="scroll-mt-28"
            >

              <h2 className="mb-6 text-4xl font-black tracking-tight">
                Why Property Document Verification is Important
              </h2>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                Purchasing a property is one of the largest financial decisions
                most people make during their lifetime. Whether you are buying
                your first apartment, investing in a residential plot, or
                purchasing a luxury villa in Jaipur, verifying legal documents
                before making any payment is essential. Proper document
                verification helps establish ownership, confirms statutory
                approvals, and minimizes the risk of future legal disputes.
              </p>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                Many property-related disputes arise because buyers rely solely
                on marketing brochures, verbal assurances, or incomplete
                paperwork. Carefully reviewing title documents, sale deeds,
                government approvals, tax records, and RERA registration allows
                buyers to identify potential issues before they become expensive
                problems.
              </p>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                Document verification also provides confidence that the seller
                has the legal authority to transfer ownership and that the
                property complies with applicable regulations. This process is
                equally important for ready-to-move properties,
                under-construction projects, resale homes, and vacant plots.
              </p>

              <p className="leading-8 text-slate-700 dark:text-slate-300">
                Spending a little extra time on legal verification can protect
                buyers from fraud, hidden liabilities, ownership disputes,
                unauthorized construction, and unexpected financial losses. It
                is a small investment of time that can provide long-term peace
                of mind.
              </p>

              {/* Information Callout */}

              <div className="my-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-950/30">

                <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300">
                  Buyer Tip
                </h3>

                <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
                  Never sign any booking form, agreement, or payment document
                  until you've reviewed the property's legal paperwork. If any
                  document appears incomplete or inconsistent, seek advice from
                  a qualified property lawyer before proceeding.
                </p>

              </div>

            </section>

            {/* ================================================
                Image Section
            ================================================ */}

            <section className="my-14">

              <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl dark:border-slate-700">

                <Image
                  src="/images/blogs/how-to-verify-property-documents-before-buying-in-jaipur-1.webp"
                  alt="Property Document Verification Before Buying in Jaipur"
                  width={1600}
                  height={900}
                  className="aspect-video w-full object-cover"
                />

              </div>

              <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
                Carefully verify ownership documents, legal approvals, and
                registration records before purchasing any property in Jaipur.
              </p>

            </section>

            {/* ================================================
                H2 #2
                Essential Property Documents Every Buyer Should Check
            ================================================ */}

            <section
              id="essential-documents"
              className="scroll-mt-28"
            >

              <h2 className="mb-8 text-4xl font-black tracking-tight">
                Essential Property Documents Every Buyer Should Check
              </h2>

              <p className="mb-8 leading-8 text-slate-700 dark:text-slate-300">
                Before purchasing any apartment, villa, plot, or commercial
                property in Jaipur, buyers should carefully review every legal
                document associated with the property. Each document serves a
                specific purpose and helps establish ownership, legality, and
                compliance with applicable regulations. Missing or inconsistent
                documentation should never be ignored, regardless of the
                property's price or the builder's reputation.
              </p>

              {/* H3
                  Title Deed
              */}

              <h3 className="mt-10 text-2xl font-bold">
                Title Deed
              </h3>

              <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
                The title deed establishes legal ownership of the property and
                confirms that the seller has the right to transfer ownership.
                Buyers should verify that the title is clear, marketable, and
                free from ownership disputes or conflicting claims.
              </p>

              {/* H3
                  Sale Deed
              */}

              <h3 className="mt-10 text-2xl font-bold">
                Sale Deed
              </h3>

              <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
                A registered sale deed serves as legal evidence of property
                transfer. Buyers should carefully review the names of the
                parties, property description, consideration amount, and
                registration details to ensure everything is accurate.
              </p>

              {/* H3
                  Encumbrance Certificate
              */}

              <h3 className="mt-10 text-2xl font-bold">
                Encumbrance Certificate
              </h3>

              <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
                An encumbrance certificate helps determine whether the property
                has registered loans, mortgages, or other legal liabilities
                during a specified period. Reviewing this document can help
                buyers identify potential financial risks before purchasing.
              </p>

              {/* H3
                  Approved Building Plan
              */}

              <h3 className="mt-10 text-2xl font-bold">
                Approved Building Plan
              </h3>

              <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
                Buyers should verify that the property's construction complies
                with approved building plans and applicable municipal
                regulations. Unauthorized construction or deviations may create
                legal complications in the future.
              </p>

              {/* H3
                  RERA Registration
              */}

              <h3 className="mt-10 text-2xl font-bold">
                RERA Registration
              </h3>

              <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
                For projects covered under applicable regulations, buyers should
                verify the project's registration through the official Rajasthan
                RERA portal. RERA registration provides additional transparency
                regarding project approvals, timelines, promoter details, and
                other important information.
              </p>

            </section>

            {/* ================================================
                Comparison Table
            ================================================ */}

            <section className="my-14 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">

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

                      <th className="px-6 py-4 text-left font-bold">
                        Verify Before Purchase
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-6 py-4 font-medium">Title Deed</td>
                      <td className="px-6 py-4">
                        Confirms legal ownership.
                      </td>
                      <td className="px-6 py-4">✔ Essential</td>
                    </tr>

                    <tr className="bg-slate-50 dark:bg-slate-800">
                      <td className="px-6 py-4 font-medium">Sale Deed</td>
                      <td className="px-6 py-4">
                        Confirms ownership transfer.
                      </td>
                      <td className="px-6 py-4">✔ Essential</td>
                    </tr>

                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-6 py-4 font-medium">
                        Encumbrance Certificate
                      </td>
                      <td className="px-6 py-4">
                        Identifies registered liabilities.
                      </td>
                      <td className="px-6 py-4">✔ Recommended</td>
                    </tr>

                    <tr className="bg-slate-50 dark:bg-slate-800">
                      <td className="px-6 py-4 font-medium">
                        Approved Building Plan
                      </td>
                      <td className="px-6 py-4">
                        Confirms legal construction.
                      </td>
                      <td className="px-6 py-4">✔ Essential</td>
                    </tr>

                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-6 py-4 font-medium">
                        RERA Registration
                      </td>
                      <td className="px-6 py-4">
                        Confirms regulatory registration.
                      </td>
                      <td className="px-6 py-4">✔ For Applicable Projects</td>
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
                Never depend on photocopies or verbal assurances alone. Ask for
                original documents or certified copies wherever applicable, and
                cross-check important information through government records,
                the Rajasthan RERA portal, and qualified legal professionals
                before paying any booking amount.
              </p>

            </div>

            {/* ================================================
                H2 #3
                Step-by-Step Property Verification Process
            ================================================ */}

            <section
              id="verification-process"
              className="scroll-mt-28"
            >

              <h2 className="mb-8 text-4xl font-black tracking-tight">
                Step-by-Step Property Verification Process
              </h2>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                A systematic verification process helps buyers identify legal
                issues before making a financial commitment. Begin by collecting
                all available property documents from the builder or seller and
                organizing them for review.
              </p>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                Verify ownership records, inspect the title deed, review the
                registered sale deed, obtain an encumbrance certificate,
                examine approved building plans, and confirm RERA registration
                whenever applicable. Compare every document carefully to ensure
                that names, survey numbers, plot details, and measurements are
                consistent throughout.
              </p>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                Visit the property personally to confirm that the physical
                property matches the approved plans and legal documentation.
                Review utility connections, tax records, occupancy status, and
                any ongoing legal matters before proceeding further.
              </p>

              <p className="leading-8 text-slate-700 dark:text-slate-300">
                Finally, consult a qualified property lawyer to review the
                documentation and highlight any legal risks. Professional
                verification provides an additional layer of confidence,
                especially for high-value real estate transactions.
              </p>

            </section>

            {/* ================================================
                Image
            ================================================ */}

            <section className="my-14">

              <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl dark:border-slate-700">

                <Image
                  src="/images/blogs/how-to-verify-property-documents-before-buying-in-jaipur-2.webp"
                  alt="Property Document Verification Process in Jaipur"
                  width={1600}
                  height={900}
                  className="aspect-video w-full object-cover"
                />

              </div>

              <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
                A structured document verification process helps buyers reduce
                legal risks and make confident property investment decisions.
              </p>

            </section>

            {/* ================================================
                H2 #4
                Common Red Flags in Property Documents
            ================================================ */}

            <section
              id="red-flags"
              className="scroll-mt-28"
            >

              <h2 className="mb-8 text-4xl font-black tracking-tight">
                Common Red Flags in Property Documents
              </h2>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                Even attractive properties located in premium areas can have
                legal issues hidden within their documentation. Buyers should
                never assume that a property is legally clear simply because it
                is being sold by a reputed builder or through an agent.
                Identifying warning signs early can prevent expensive disputes
                in the future.
              </p>

              <p className="leading-8 text-slate-700 dark:text-slate-300">
                During document verification, pay close attention to ownership
                records, approvals, registration details, survey numbers, and
                consistency across every document. Any mismatch should be
                investigated before proceeding.
              </p>

              {/* Red Flag Checklist Table */}

              <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">

                <div className="overflow-x-auto">

                  <table className="min-w-full">

                    <thead className="bg-slate-100 dark:bg-slate-800">

                      <tr>

                        <th className="px-6 py-4 text-left font-bold">
                          Red Flag
                        </th>

                        <th className="px-6 py-4 text-left font-bold">
                          Possible Risk
                        </th>

                        <th className="px-6 py-4 text-left font-bold">
                          Recommended Action
                        </th>

                      </tr>

                    </thead>

                    <tbody>

                      <tr className="bg-white dark:bg-slate-900">
                        <td className="px-6 py-4 font-medium">
                          Ownership Mismatch
                        </td>
                        <td className="px-6 py-4">
                          Ownership dispute.
                        </td>
                        <td className="px-6 py-4">
                          Verify title records.
                        </td>
                      </tr>

                      <tr className="bg-slate-50 dark:bg-slate-800">
                        <td className="px-6 py-4 font-medium">
                          Missing Approvals
                        </td>
                        <td className="px-6 py-4">
                          Legal complications.
                        </td>
                        <td className="px-6 py-4">
                          Request official approvals.
                        </td>
                      </tr>

                      <tr className="bg-white dark:bg-slate-900">
                        <td className="px-6 py-4 font-medium">
                          Incomplete Registration
                        </td>
                        <td className="px-6 py-4">
                          Ownership transfer issues.
                        </td>
                        <td className="px-6 py-4">
                          Confirm registration details.
                        </td>
                      </tr>

                      <tr className="bg-slate-50 dark:bg-slate-800">
                        <td className="px-6 py-4 font-medium">
                          Different Survey Numbers
                        </td>
                        <td className="px-6 py-4">
                          Property identification errors.
                        </td>
                        <td className="px-6 py-4">
                          Cross-check all records.
                        </td>
                      </tr>

                      <tr className="bg-white dark:bg-slate-900">
                        <td className="px-6 py-4 font-medium">
                          Pressure for Immediate Payment
                        </td>
                        <td className="px-6 py-4">
                          Potential fraud.
                        </td>
                        <td className="px-6 py-4">
                          Complete verification first.
                        </td>
                      </tr>

                    </tbody>

                  </table>

                </div>

              </div>

            </section>

            {/* ================================================
                H2 #5
                How a Property Lawyer Can Help
            ================================================ */}

            <section
              id="property-lawyer"
              className="scroll-mt-28 mt-16"
            >

              <h2 className="mb-8 text-4xl font-black tracking-tight">
                How a Property Lawyer Can Help
              </h2>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                While buyers can perform many preliminary checks themselves,
                experienced property lawyers understand legal terminology,
                ownership history, registration procedures, and potential risks
                that may not be immediately obvious. Professional review can
                significantly reduce the chances of overlooking important legal
                issues.
              </p>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                A lawyer can examine ownership records, verify the title chain,
                review sale agreements, identify document inconsistencies, and
                explain legal obligations before you sign any contract. This is
                particularly valuable when purchasing high-value properties or
                resale homes.
              </p>

              {/* Lawyer vs Self Verification Table */}

              <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">

                <div className="overflow-x-auto">

                  <table className="min-w-full">

                    <thead className="bg-slate-100 dark:bg-slate-800">

                      <tr>

                        <th className="px-6 py-4 text-left font-bold">
                          Verification Task
                        </th>

                        <th className="px-6 py-4 text-left font-bold">
                          Buyer
                        </th>

                        <th className="px-6 py-4 text-left font-bold">
                          Property Lawyer
                        </th>

                      </tr>

                    </thead>

                    <tbody>

                      <tr className="bg-white dark:bg-slate-900">
                        <td className="px-6 py-4 font-medium">
                          Review Documents
                        </td>
                        <td className="px-6 py-4">
                          Basic
                        </td>
                        <td className="px-6 py-4">
                          Comprehensive
                        </td>
                      </tr>

                      <tr className="bg-slate-50 dark:bg-slate-800">
                        <td className="px-6 py-4 font-medium">
                          Legal Interpretation
                        </td>
                        <td className="px-6 py-4">
                          Limited
                        </td>
                        <td className="px-6 py-4">
                          Expert
                        </td>
                      </tr>

                      <tr className="bg-white dark:bg-slate-900">
                        <td className="px-6 py-4 font-medium">
                          Risk Identification
                        </td>
                        <td className="px-6 py-4">
                          Moderate
                        </td>
                        <td className="px-6 py-4">
                          Detailed
                        </td>
                      </tr>

                      <tr className="bg-slate-50 dark:bg-slate-800">
                        <td className="px-6 py-4 font-medium">
                          Legal Opinion
                        </td>
                        <td className="px-6 py-4">
                          Not Available
                        </td>
                        <td className="px-6 py-4">
                          Available
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

            <section className="my-16 overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-700 via-cyan-700 to-blue-700 p-10 text-white shadow-2xl">

              <h2 className="text-4xl font-black">
                Looking for Verified Properties in Jaipur?
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-emerald-100">
                RSN Estates helps buyers compare verified residential
                properties, understand legal documentation, evaluate builders,
                and purchase with greater confidence and transparency.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <Link
                  href="/properties"
                  className="rounded-xl bg-white px-7 py-4 font-bold text-emerald-700 transition hover:bg-slate-100"
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
                Mistakes Buyers Make During Verification
            ================================================ */}

            <section
              id="buyer-mistakes"
              className="scroll-mt-28"
            >

              <h2 className="mb-8 text-4xl font-black tracking-tight">
                Mistakes Buyers Make During Verification
              </h2>

              {/* Warning Box */}

              <div className="rounded-3xl border border-red-300 bg-red-50 p-8 dark:border-red-900 dark:bg-red-950/30">

                <h3 className="text-2xl font-bold text-red-700 dark:text-red-300">
                  Avoid These Common Mistakes
                </h3>

                <ul className="mt-5 space-y-3 leading-8 text-slate-700 dark:text-slate-300">

                  <li>❌ Trusting verbal assurances without written proof.</li>

                  <li>❌ Ignoring ownership history.</li>

                  <li>❌ Skipping legal verification to save time.</li>

                  <li>❌ Paying booking amounts before checking documents.</li>

                  <li>❌ Assuming every approval is automatically valid.</li>

                </ul>

              </div>

              {/* Mistake Comparison Table */}

              <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">

                <div className="overflow-x-auto">

                  <table className="min-w-full">

                    <thead className="bg-slate-100 dark:bg-slate-800">

                      <tr>

                        <th className="px-6 py-4 text-left font-bold">
                          Mistake
                        </th>

                        <th className="px-6 py-4 text-left font-bold">
                          Consequence
                        </th>

                        <th className="px-6 py-4 text-left font-bold">
                          Better Practice
                        </th>

                      </tr>

                    </thead>

                    <tbody>

                      <tr className="bg-white dark:bg-slate-900">
                        <td className="px-6 py-4 font-medium">
                          No Legal Review
                        </td>
                        <td className="px-6 py-4">
                          Hidden risks.
                        </td>
                        <td className="px-6 py-4">
                          Consult a lawyer.
                        </td>
                      </tr>

                      <tr className="bg-slate-50 dark:bg-slate-800">
                        <td className="px-6 py-4 font-medium">
                          Incomplete Document Check
                        </td>
                        <td className="px-6 py-4">
                          Ownership disputes.
                        </td>
                        <td className="px-6 py-4">
                          Verify every document.
                        </td>
                      </tr>

                      <tr className="bg-white dark:bg-slate-900">
                        <td className="px-6 py-4 font-medium">
                          Rushing the Purchase
                        </td>
                        <td className="px-6 py-4">
                          Costly mistakes.
                        </td>
                        <td className="px-6 py-4">
                          Complete due diligence.
                        </td>
                      </tr>

                    </tbody>

                  </table>

                </div>

              </div>

            </section>

            {/* ================================================
                H2 #7
                Expert Tips Before Signing Any Agreement
            ================================================ */}

            <section
              id="expert-tips"
              className="scroll-mt-28 mt-16"
            >

              <h2 className="mb-8 text-4xl font-black tracking-tight">
                Expert Tips Before Signing Any Agreement
              </h2>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                Read every clause carefully, verify the property's legal
                documents, understand the payment schedule, confirm possession
                timelines, and seek clarification whenever something appears
                unclear. Never sign an agreement under pressure.
              </p>

              <p className="leading-8 text-slate-700 dark:text-slate-300">
                Comparing multiple properties, consulting professionals, and
                conducting independent verification can significantly reduce
                legal and financial risks while helping you make a confident
                purchase decision.
              </p>

              {/* Expert Insight */}

              <div className="mt-10 rounded-3xl border border-green-200 bg-green-50 p-8 dark:border-green-900 dark:bg-green-950/30">

                <h3 className="text-2xl font-bold text-green-800 dark:text-green-300">
                  Expert Insight
                </h3>

                <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
                  Successful property buyers spend more time verifying legal
                  documents than negotiating prices. Thorough verification today
                  can save years of legal and financial complications tomorrow.
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
                Property document verification should never be treated as a
                formality. Careful legal review, independent verification, and
                professional guidance can protect buyers from fraud, ownership
                disputes, and costly financial mistakes.
              </p>

              <p className="leading-8 text-slate-700 dark:text-slate-300">
                Whether you're buying your first home or expanding your real
                estate portfolio, investing time in document verification is one
                of the smartest decisions you can make.
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
                  ✔ Verify ownership before making any payment.
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900">
                  ✔ Review all legal approvals carefully.
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900">
                  ✔ Check RERA registration where applicable.
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900">
                  ✔ Identify red flags before signing agreements.
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900">
                  ✔ Consult a qualified property lawyer whenever necessary.
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900">
                  ✔ Never rush the verification process.
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
                    className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
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
                Found this guide helpful? Share it with friends, family, or
                anyone planning to buy property in Jaipur.
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

                <button
                  type="button"
                  className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
                >
                  Copy Link
                </button>

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
                    The RSN Estates Editorial Team creates comprehensive,
                    research-driven property buying guides for homebuyers,
                    investors, and first-time purchasers across Jaipur. Our
                    articles focus on legal awareness, document verification,
                    builder evaluation, market trends, investment insights, and
                    practical real estate advice to help readers make confident
                    property decisions.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">

                    <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
                      Property Buying
                    </span>

                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
                      Legal Verification
                    </span>

                    <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700 dark:bg-purple-950/40 dark:text-purple-300">
                      Jaipur Real Estate
                    </span>

                    <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700 dark:bg-orange-950/40 dark:text-orange-300">
                      Expert Insights
                    </span>

                  </div>

                </div>

              </div>

            </section>

            {/* ================================================
                Related Blogs
            ================================================ */}

            <section className="mt-20">

              <div className="mb-10">

                <h2 className="text-4xl font-black tracking-tight">
                  Related Articles
                </h2>

                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  Continue exploring expert property buying guides from RSN
                  Estates.
                </p>

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

                      <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
                        {blog.category}
                      </span>

                      <h3 className="mt-4 text-xl font-bold leading-snug">

                        <Link
                          href={blog.href}
                          className="transition hover:text-emerald-600 dark:hover:text-emerald-400"
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

            <section className="mt-20 overflow-hidden rounded-[2rem] bg-gradient-to-r from-emerald-700 via-cyan-700 to-blue-700 p-10 text-white shadow-2xl md:p-16">

              <div className="mx-auto max-w-4xl text-center">

                <h2 className="text-4xl font-black leading-tight md:text-5xl">
                  Buy Property in Jaipur with Complete Confidence
                </h2>

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-emerald-100">
                  Whether you're purchasing your first home, investing in a
                  residential plot, or searching for a premium apartment, RSN
                  Estates helps you verify property documents, compare trusted
                  projects, evaluate builders, and make informed real estate
                  decisions backed by transparency and expert guidance.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-5">

                  <Link
                    href="/properties"
                    className="rounded-2xl bg-white px-8 py-4 text-lg font-bold text-emerald-700 transition hover:scale-105 hover:bg-slate-100"
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