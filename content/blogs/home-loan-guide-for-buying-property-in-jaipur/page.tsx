import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CopyLinkButton from "@/components/blog/CopyLinkButton";

export const metadata: Metadata = {
  title:
    "Home Loan Guide for Buying Property in Jaipur | RSN Estates",
  description:
    "Complete home loan guide for buying property in Jaipur. Learn about eligibility, required documents, interest rates, loan approval process, hidden charges, EMI planning, and expert tips for first-time homebuyers in 2026.",
  keywords: [
    "Home Loan Jaipur",
    "Home Loan Guide Jaipur",
    "Property Loan Jaipur",
    "Housing Loan Jaipur",
    "Home Loan Eligibility",
    "Home Loan Documents",
    "Home Loan Interest Rate",
    "Home Loan EMI",
    "Property Buying Guide Jaipur",
    "First Time Home Buyer Jaipur",
    "Real Estate Jaipur",
    "RSN Estates",
  ],
  alternates: {
    canonical:
      "https://rsnestates.com/blogs/home-loan-guide-for-buying-property-in-jaipur",
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
      "https://rsnestates.com/blogs/home-loan-guide-for-buying-property-in-jaipur",
    title:
      "Home Loan Guide for Buying Property in Jaipur",
    description:
      "Learn everything about home loans for buying property in Jaipur, including eligibility, documentation, loan approval process, interest rates, EMI planning, hidden costs, and expert tips.",
    siteName: "RSN Estates",
    locale: "en_IN",
    images: [
      {
        url:
          "https://rsnestates.com/images/blogs/home-loan-guide-for-buying-property-in-jaipur.webp",
        width: 1600,
        height: 900,
        alt: "Home Loan Guide for Buying Property in Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Home Loan Guide for Buying Property in Jaipur",
    description:
      "A complete guide to home loans in Jaipur covering eligibility, documents, EMI calculation, interest rates, approval process, and expert home financing tips.",
    images: [
      "https://rsnestates.com/images/blogs/home-loan-guide-for-buying-property-in-jaipur.webp",
    ],
  },
};

export default function BlogPage() {

  /* ============================================================
      SEO Constants
      Keep slug lowercase for SEO-friendly URLs.
  ============================================================ */

  const slug = "home-loan-guide-for-buying-property-in-jaipur";

  const blogTitle =
    "Home Loan Guide for Buying Property in Jaipur";

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
      "Complete Home Loan Guide for Buying Property in Jaipur (2026)",
    description:
      "Learn everything about home loans for buying property in Jaipur, including eligibility criteria, required documents, interest rates, EMI planning, loan approval process, hidden charges, and expert tips for first-time homebuyers.",
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
    articleSection: "Home Loan Guide",
    articleBody:
      "This comprehensive guide explains how home loans work for buying property in Jaipur. It covers loan eligibility, required documents, credit score, loan-to-value ratio, EMI planning, fixed and floating interest rates, hidden charges, loan approval process, and practical tips to help buyers secure the right home loan.",
    keywords: [
      "Home Loan Jaipur",
      "Housing Loan Jaipur",
      "Property Loan Jaipur",
      "Home Loan Guide",
      "Home Loan Eligibility",
      "Home Loan Documents",
      "EMI Planning",
      "Interest Rates",
      "Property Buying Jaipur",
      "RSN Estates",
    ],
    wordCount: 3400,
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
        name: "Who is eligible for a home loan in Jaipur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eligibility depends on factors such as income, age, employment or business stability, credit score, repayment capacity, and the lender's internal policies.",
        },
      },
      {
        "@type": "Question",
        name: "What documents are required for a home loan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Commonly required documents include identity proof, address proof, PAN card, income proof, bank statements, employment documents, and property-related documents. Requirements may vary between lenders.",
        },
      },
      {
        "@type": "Question",
        name: "What is a good credit score for a home loan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A higher credit score generally improves the likelihood of loan approval and may help borrowers receive better loan terms, subject to the lender's policies.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between fixed and floating interest rates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fixed interest rates generally remain unchanged for the agreed period, while floating rates may change based on market conditions and lender benchmarks.",
        },
      },
      {
        "@type": "Question",
        name: "Can I prepay my home loan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many lenders allow partial or full prepayment, though applicable terms and charges depend on the loan agreement.",
        },
      },
      {
        "@type": "Question",
        name: "What hidden charges should I consider?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Buyers should review processing fees, legal charges, technical evaluation fees, insurance, stamp duty, registration charges, and any other applicable costs.",
        },
      },
      {
        "@type": "Question",
        name: "How long does home loan approval usually take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Approval timelines vary depending on documentation, property verification, lender procedures, and applicant eligibility.",
        },
      },
      {
        "@type": "Question",
        name: "Can RSN Estates help buyers during the home buying process?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RSN Estates helps buyers compare properties, understand the home buying process, evaluate projects, and make informed property decisions in Jaipur.",
        },
      },
    ],
  };

  /* ============================================================
      Sidebar
  ============================================================ */

  const tableOfContents = [
    {
      id: "understanding-home-loans",
      title: "Understanding Home Loans for Property Buyers",
    },
    {
      id: "eligibility",
      title: "Eligibility Criteria for Home Loans",
    },
    {
      id: "loan-process",
      title: "Step-by-Step Home Loan Process",
    },
    {
      id: "interest-rates",
      title: "Types of Home Loan Interest Rates",
    },
    {
      id: "hidden-costs",
      title: "Hidden Costs & Charges You Should Know",
    },
    {
      id: "loan-mistakes",
      title: "Common Home Loan Mistakes to Avoid",
    },
    {
      id: "expert-tips",
      title: "Expert Tips to Get Your Loan Approved Faster",
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
      title: "How to Verify Property Documents Before Buying in Jaipur",
      href: "/blogs/how-to-verify-property-documents-before-buying-in-jaipur",
      image:
        "/images/blogs/how-to-verify-property-documents-before-buying-in-jaipur.webp",
      category: "Legal Guide",
      readingTime: "13 min read",
    },
    {
      title: "RERA Approved Properties in Jaipur: Why They Matter",
      href: "/blogs/rera-approved-properties-in-jaipur-why-they-matter",
      image:
        "/images/blogs/rera-approved-properties-in-jaipur-why-they-matter.webp",
      category: "Property Guide",
      readingTime: "12 min read",
    },
    {
      title: "10 Common Mistakes to Avoid When Buying Property in Jaipur",
      href: "/blogs/common-mistakes-to-avoid-when-buying-property-in-jaipur",
      image:
        "/images/blogs/common-mistakes-to-avoid-when-buying-property-in-jaipur.webp",
      category: "Buying Guide",
      readingTime: "11 min read",
    },
  ];

  /* ============================================================
      FAQs
  ============================================================ */

  const faqs = [
    {
      question: "Who is eligible for a home loan in Jaipur?",
      answer:
        "Eligibility generally depends on income, employment or business stability, age, credit score, repayment capacity, and the lender's lending criteria.",
    },
    {
      question: "What documents are required for a home loan?",
      answer:
        "Typical requirements include identity proof, address proof, PAN card, income proof, bank statements, employment documents, and property-related documents.",
    },
    {
      question: "What credit score is preferred for a home loan?",
      answer:
        "A higher credit score generally improves approval chances and may help borrowers obtain more favorable loan terms.",
    },
    {
      question: "Should I choose a fixed or floating interest rate?",
      answer:
        "The choice depends on your financial goals, market expectations, and risk preference. Each option has its own advantages.",
    },
    {
      question: "Can I prepay my home loan?",
      answer:
        "Many lenders allow partial or complete prepayment, subject to the loan agreement and applicable conditions.",
    },
    {
      question: "What additional costs should I budget for?",
      answer:
        "Apart from the property's price, consider processing fees, legal charges, technical evaluation fees, insurance, stamp duty, registration charges, and other applicable expenses.",
    },
    {
      question: "How long does the loan approval process take?",
      answer:
        "Approval timelines vary depending on documentation, property verification, applicant eligibility, and the lender's internal process.",
    },
    {
      question: "Can RSN Estates assist during the property buying process?",
      answer:
        "Yes. RSN Estates helps buyers compare properties, understand the buying process, and make informed real estate decisions across Jaipur.",
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
              Home Loan Guide
            </div>

            {/* H1 */}

            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
              {blogTitle}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Planning to buy a home in Jaipur? This complete guide explains
              home loan eligibility, required documents, EMI planning,
              fixed vs floating interest rates, hidden charges, and practical
              tips to help first-time buyers secure the right home loan with
              confidence.
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
                src="/images/blogs/home-loan-guide-for-buying-property-in-jaipur.webp"
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
                      Home Loan Guide
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
                      First-Time Buyers
                    </span>

                  </div>

                  <div className="flex items-start justify-between gap-4">

                    <span className="text-slate-600 dark:text-slate-300">
                      Covers
                    </span>

                    <span className="text-right font-semibold">
                      Eligibility
                      <br />
                      EMI Planning
                      <br />
                      Interest Rates
                    </span>

                  </div>

                </div>

              </div>

              {/* ================================================
                  Home Loan Checklist
              ================================================ */}

              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm dark:border-emerald-900 dark:bg-emerald-950/30">

                <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300">
                  Before Applying
                </h3>

                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700 dark:text-slate-300">

                  <li>🏦 Compare Multiple Lenders</li>

                  <li>📄 Prepare Required Documents</li>

                  <li>💳 Check Your Credit Score</li>

                  <li>📊 Calculate Affordable EMI</li>

                  <li>🏠 Verify Property Documents</li>

                </ul>

              </div>

              {/* ================================================
                  CTA Card
              ================================================ */}

              <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-700 via-cyan-700 to-blue-700 p-6 text-white shadow-xl">

                <h3 className="text-xl font-bold">
                  Looking for the Right Property?
                </h3>

                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  RSN Estates helps homebuyers discover verified properties,
                  compare projects, understand financing options, and make
                  confident property purchase decisions in Jaipur.
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
                Buying a property through a home loan is one of the most common
                financing options for homebuyers in Jaipur. Understanding loan
                eligibility, interest rates, EMI calculations, documentation,
                and lender requirements can help you secure better financing and
                avoid unnecessary financial stress.
              </p>

              <ul className="mt-6 space-y-4">

                <li className="flex gap-3">
                  <span className="text-xl">🏦</span>
                  <span>
                    Understand eligibility before applying for a home loan.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-xl">📄</span>
                  <span>
                    Keep all required financial and property documents ready.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-xl">💳</span>
                  <span>
                    Maintain a healthy credit score to improve approval chances.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-xl">📊</span>
                  <span>
                    Plan your EMI according to your monthly income and expenses.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-xl">🏡</span>
                  <span>
                    Compare multiple lenders before selecting a home loan.
                  </span>
                </li>

              </ul>

            </section>

            {/* ================================================
                H2 #1
                Understanding Home Loans for Property Buyers
            ================================================ */}

            <section
              id="understanding-home-loans"
              className="scroll-mt-28"
            >

              <h2 className="mb-6 text-4xl font-black tracking-tight">
                Understanding Home Loans for Property Buyers
              </h2>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                A home loan allows buyers to finance the purchase of residential
                property by borrowing money from a financial institution and
                repaying it over an agreed period through monthly installments
                (EMIs). Home loans have enabled millions of families across
                India to purchase homes without paying the full property value
                upfront.
              </p>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                Whether you are buying your first apartment, upgrading to a
                larger home, or investing in residential real estate in Jaipur,
                choosing the right loan is just as important as selecting the
                right property. Understanding loan terms, repayment capacity,
                interest rates, and lender requirements helps buyers make
                financially sound decisions.
              </p>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                Different lenders may offer varying loan amounts, repayment
                tenures, processing fees, and interest rate structures. Before
                submitting an application, compare available options carefully
                and calculate your long-term repayment obligations.
              </p>

              <p className="leading-8 text-slate-700 dark:text-slate-300">
                A well-planned home loan can make property ownership more
                affordable, while poor financial planning may result in
                unnecessary repayment pressure. Proper preparation before
                applying improves your chances of obtaining a suitable loan on
                favorable terms.
              </p>

              {/* Information Callout */}

              <div className="my-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-950/30">

                <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300">
                  Home Loan Tip
                </h3>

                <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
                  Before applying for a loan, calculate how much EMI comfortably
                  fits within your monthly budget. Borrowing only what you can
                  comfortably repay helps reduce financial stress throughout the
                  loan tenure.
                </p>

              </div>

            </section>

            {/* ================================================
                Image Section
            ================================================ */}

            <section className="my-14">

              <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl dark:border-slate-700">

                <Image
                  src="/images/blogs/home-loan-guide-for-buying-property-in-jaipur-1.webp"
                  alt="Home Loan Guide for Buying Property in Jaipur"
                  width={1600}
                  height={900}
                  className="aspect-video w-full object-cover"
                />

              </div>

              <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
                Understanding home loan eligibility and financial planning helps
                buyers make confident property purchase decisions.
              </p>

            </section>

            {/* ================================================
                H2 #2
                Eligibility Criteria for Home Loans
            ================================================ */}

            <section
              id="eligibility"
              className="scroll-mt-28"
            >

              <h2 className="mb-8 text-4xl font-black tracking-tight">
                Eligibility Criteria for Home Loans
              </h2>

              <p className="mb-8 leading-8 text-slate-700 dark:text-slate-300">
                Home loan eligibility varies between lenders, but most financial
                institutions evaluate several common factors before approving a
                loan application. Understanding these requirements in advance
                allows buyers to prepare stronger applications and improve their
                chances of approval.
              </p>

              {/* H3
                  Income Eligibility
              */}

              <h3 className="mt-10 text-2xl font-bold">
                Income Eligibility
              </h3>

              <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
                Lenders assess monthly income to determine repayment capacity.
                Higher and stable income generally supports higher loan
                eligibility, while maintaining a healthy debt-to-income ratio
                improves approval prospects.
              </p>

              {/* H3
                  Credit Score Requirements
              */}

              <h3 className="mt-10 text-2xl font-bold">
                Credit Score Requirements
              </h3>

              <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
                Your credit score reflects previous borrowing and repayment
                behavior. A strong credit history may improve loan approval
                chances and help borrowers qualify for more favorable loan
                terms, subject to the lender's policies.
              </p>

              {/* H3
                  Employment & Business Stability
              */}

              <h3 className="mt-10 text-2xl font-bold">
                Employment & Business Stability
              </h3>

              <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
                Salaried applicants generally benefit from stable employment,
                while self-employed individuals may need to demonstrate
                consistent business income and financial records over a period
                specified by the lender.
              </p>

              {/* H3
                  Loan-to-Value (LTV) Ratio
              */}

              <h3 className="mt-10 text-2xl font-bold">
                Loan-to-Value (LTV) Ratio
              </h3>

              <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
                The loan-to-value ratio represents the percentage of the
                property's value financed by the lender. Buyers typically need
                to contribute the remaining amount as their own investment,
                along with applicable taxes and registration costs.
              </p>

              {/* H3
                  Required Documents
              */}

              <h3 className="mt-10 text-2xl font-bold">
                Required Documents
              </h3>

              <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
                Applicants are commonly required to submit identity proof,
                address proof, PAN card, income proof, salary slips or business
                records, bank statements, photographs, and property-related
                documents. Exact requirements may differ depending on the
                lender and loan product.
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
                        Eligibility Factor
                      </th>

                      <th className="px-6 py-4 text-left font-bold">
                        Why It Matters
                      </th>

                      <th className="px-6 py-4 text-left font-bold">
                        Buyer Checklist
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-6 py-4 font-medium">
                        Monthly Income
                      </td>
                      <td className="px-6 py-4">
                        Determines repayment capacity.
                      </td>
                      <td className="px-6 py-4">
                        ✔ Stable Income
                      </td>
                    </tr>

                    <tr className="bg-slate-50 dark:bg-slate-800">
                      <td className="px-6 py-4 font-medium">
                        Credit Score
                      </td>
                      <td className="px-6 py-4">
                        Impacts loan approval and terms.
                      </td>
                      <td className="px-6 py-4">
                        ✔ Healthy Credit History
                      </td>
                    </tr>

                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-6 py-4 font-medium">
                        Employment Stability
                      </td>
                      <td className="px-6 py-4">
                        Shows regular earning capacity.
                      </td>
                      <td className="px-6 py-4">
                        ✔ Consistent Employment
                      </td>
                    </tr>

                    <tr className="bg-slate-50 dark:bg-slate-800">
                      <td className="px-6 py-4 font-medium">
                        Loan-to-Value Ratio
                      </td>
                      <td className="px-6 py-4">
                        Determines down payment amount.
                      </td>
                      <td className="px-6 py-4">
                        ✔ Arrange Own Contribution
                      </td>
                    </tr>

                    <tr className="bg-white dark:bg-slate-900">
                      <td className="px-6 py-4 font-medium">
                        Documentation
                      </td>
                      <td className="px-6 py-4">
                        Supports verification process.
                      </td>
                      <td className="px-6 py-4">
                        ✔ Keep Documents Ready
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
                Before applying for a home loan, calculate your maximum
                affordable EMI instead of focusing only on the maximum loan
                amount. A comfortable EMI leaves room for emergency savings,
                insurance, maintenance costs, and other household expenses,
                making long-term repayment significantly easier.
              </p>

            </div>

            {/* ================================================
                H2 #3
                Step-by-Step Home Loan Process
            ================================================ */}

            <section
              id="loan-process"
              className="scroll-mt-28"
            >

              <h2 className="mb-8 text-4xl font-black tracking-tight">
                Step-by-Step Home Loan Process
              </h2>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                Applying for a home loan becomes much easier when you understand
                each stage of the approval process. While exact procedures may
                vary between lenders, the overall journey remains largely
                similar.
              </p>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                Start by evaluating your budget and comparing different lenders.
                Gather all required financial documents, verify the property's
                legal paperwork, and submit your loan application. The lender
                will assess your eligibility, verify your documents, evaluate
                the property, and issue a sanction if the application meets
                their lending criteria.
              </p>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                After loan approval, carefully review the sanction letter,
                understand the applicable terms and conditions, complete the
                legal formalities, and proceed with loan disbursement according
                to the property's payment schedule.
              </p>

              <p className="leading-8 text-slate-700 dark:text-slate-300">
                Maintaining clear communication with both the lender and the
                property seller throughout the process helps avoid unnecessary
                delays and ensures a smoother home-buying experience.
              </p>

            </section>

            {/* ================================================
                Image
            ================================================ */}

            <section className="my-14">

              <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl dark:border-slate-700">

                <Image
                  src="/images/blogs/home-loan-guide-for-buying-property-in-jaipur-2.webp"
                  alt="Home Loan Process for Buying Property in Jaipur"
                  width={1600}
                  height={900}
                  className="aspect-video w-full object-cover"
                />

              </div>

              <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
                Understanding every stage of the home loan process helps buyers
                prepare documents, reduce delays, and improve approval chances.
              </p>

            </section>

            {/* ================================================
                H2 #4
                Types of Home Loan Interest Rates
            ================================================ */}

            <section
              id="interest-rates"
              className="scroll-mt-28"
            >

              <h2 className="mb-8 text-4xl font-black tracking-tight">
                Types of Home Loan Interest Rates
              </h2>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                Home loans generally offer two broad interest rate structures:
                fixed and floating. Choosing the appropriate option depends on
                your financial goals, repayment strategy, and comfort with
                changing market conditions.
              </p>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                Fixed interest rates provide greater certainty because EMIs are
                generally more predictable for the agreed period. Floating
                interest rates, on the other hand, may increase or decrease
                depending on market conditions and the lender's benchmark rate.
              </p>

              <p className="leading-8 text-slate-700 dark:text-slate-300">
                Buyers should understand how interest rate changes affect their
                long-term repayment obligations before selecting a loan product.
                Comparing offers from multiple lenders can help identify the
                most suitable financing option.
              </p>

              {/* Fixed vs Floating Interest Rate Table */}

              <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">

                <div className="overflow-x-auto">

                  <table className="min-w-full">

                    <thead className="bg-slate-100 dark:bg-slate-800">

                      <tr>

                        <th className="px-6 py-4 text-left font-bold">
                          Feature
                        </th>

                        <th className="px-6 py-4 text-left font-bold">
                          Fixed Rate
                        </th>

                        <th className="px-6 py-4 text-left font-bold">
                          Floating Rate
                        </th>

                      </tr>

                    </thead>

                    <tbody>

                      <tr className="bg-white dark:bg-slate-900">
                        <td className="px-6 py-4 font-medium">
                          EMI Stability
                        </td>
                        <td className="px-6 py-4">
                          More Predictable
                        </td>
                        <td className="px-6 py-4">
                          May Change
                        </td>
                      </tr>

                      <tr className="bg-slate-50 dark:bg-slate-800">
                        <td className="px-6 py-4 font-medium">
                          Market Impact
                        </td>
                        <td className="px-6 py-4">
                          Limited
                        </td>
                        <td className="px-6 py-4">
                          Linked to Market
                        </td>
                      </tr>

                      <tr className="bg-white dark:bg-slate-900">
                        <td className="px-6 py-4 font-medium">
                          Suitable For
                        </td>
                        <td className="px-6 py-4">
                          Predictable Budgeting
                        </td>
                        <td className="px-6 py-4">
                          Long-Term Flexibility
                        </td>
                      </tr>

                    </tbody>

                  </table>

                </div>

              </div>

            </section>

            {/* ================================================
                H2 #5
                Hidden Costs & Charges You Should Know
            ================================================ */}

            <section
              id="hidden-costs"
              className="scroll-mt-28 mt-16"
            >

              <h2 className="mb-8 text-4xl font-black tracking-tight">
                Hidden Costs & Charges You Should Know
              </h2>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                Many buyers focus only on the property's purchase price and EMI,
                overlooking additional expenses that arise during the home loan
                process. These costs can significantly increase the total amount
                required to complete the purchase.
              </p>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                Depending on the lender and property, buyers may encounter
                processing fees, legal verification charges, technical
                evaluation fees, insurance premiums, stamp duty, registration
                charges, and other applicable expenses. Understanding these
                costs in advance helps create a realistic budget.
              </p>

              <p className="leading-8 text-slate-700 dark:text-slate-300">
                Always request a detailed cost breakdown before signing loan
                documents so that you clearly understand your financial
                commitment throughout the home-buying process.
              </p>

              {/* Cost Breakdown Table */}

              <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">

                <div className="overflow-x-auto">

                  <table className="min-w-full">

                    <thead className="bg-slate-100 dark:bg-slate-800">

                      <tr>

                        <th className="px-6 py-4 text-left font-bold">
                          Expense
                        </th>

                        <th className="px-6 py-4 text-left font-bold">
                          Purpose
                        </th>

                        <th className="px-6 py-4 text-left font-bold">
                          Budget Accordingly
                        </th>

                      </tr>

                    </thead>

                    <tbody>

                      <tr className="bg-white dark:bg-slate-900">
                        <td className="px-6 py-4 font-medium">
                          Processing Fee
                        </td>
                        <td className="px-6 py-4">
                          Loan application processing.
                        </td>
                        <td className="px-6 py-4">
                          ✔
                        </td>
                      </tr>

                      <tr className="bg-slate-50 dark:bg-slate-800">
                        <td className="px-6 py-4 font-medium">
                          Legal Charges
                        </td>
                        <td className="px-6 py-4">
                          Property document review.
                        </td>
                        <td className="px-6 py-4">
                          ✔
                        </td>
                      </tr>

                      <tr className="bg-white dark:bg-slate-900">
                        <td className="px-6 py-4 font-medium">
                          Technical Evaluation
                        </td>
                        <td className="px-6 py-4">
                          Property assessment.
                        </td>
                        <td className="px-6 py-4">
                          ✔
                        </td>
                      </tr>

                      <tr className="bg-slate-50 dark:bg-slate-800">
                        <td className="px-6 py-4 font-medium">
                          Stamp Duty & Registration
                        </td>
                        <td className="px-6 py-4">
                          Government registration charges.
                        </td>
                        <td className="px-6 py-4">
                          ✔
                        </td>
                      </tr>

                      <tr className="bg-white dark:bg-slate-900">
                        <td className="px-6 py-4 font-medium">
                          Insurance
                        </td>
                        <td className="px-6 py-4">
                          Loan/property protection.
                        </td>
                        <td className="px-6 py-4">
                          Optional / As Applicable
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
                Looking for a Home Loan Friendly Property?
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-emerald-100">
                RSN Estates helps buyers discover verified residential
                properties in Jaipur while providing guidance on home loans,
                documentation, builder selection, and the complete property
                buying journey.
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
                Common Home Loan Mistakes to Avoid
            ================================================ */}

            <section
              id="loan-mistakes"
              className="scroll-mt-28"
            >

              <h2 className="mb-8 text-4xl font-black tracking-tight">
                Common Home Loan Mistakes to Avoid
              </h2>

              {/* Warning Box */}

              <div className="rounded-3xl border border-red-300 bg-red-50 p-8 dark:border-red-900 dark:bg-red-950/30">

                <h3 className="text-2xl font-bold text-red-700 dark:text-red-300">
                  Avoid These Costly Mistakes
                </h3>

                <ul className="mt-5 space-y-3 leading-8 text-slate-700 dark:text-slate-300">

                  <li>❌ Borrowing more than you can comfortably repay.</li>

                  <li>❌ Ignoring your credit score before applying.</li>

                  <li>❌ Applying with multiple lenders simultaneously without planning.</li>

                  <li>❌ Not reading the loan agreement carefully.</li>

                  <li>❌ Ignoring additional costs beyond the property's price.</li>

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
                          Possible Impact
                        </th>

                        <th className="px-6 py-4 text-left font-bold">
                          Better Approach
                        </th>

                      </tr>

                    </thead>

                    <tbody>

                      <tr className="bg-white dark:bg-slate-900">
                        <td className="px-6 py-4 font-medium">
                          Over Borrowing
                        </td>
                        <td className="px-6 py-4">
                          Financial pressure.
                        </td>
                        <td className="px-6 py-4">
                          Borrow within your budget.
                        </td>
                      </tr>

                      <tr className="bg-slate-50 dark:bg-slate-800">
                        <td className="px-6 py-4 font-medium">
                          Low Credit Score
                        </td>
                        <td className="px-6 py-4">
                          Reduced approval chances.
                        </td>
                        <td className="px-6 py-4">
                          Improve your credit profile.
                        </td>
                      </tr>

                      <tr className="bg-white dark:bg-slate-900">
                        <td className="px-6 py-4 font-medium">
                          Ignoring Charges
                        </td>
                        <td className="px-6 py-4">
                          Budget overruns.
                        </td>
                        <td className="px-6 py-4">
                          Calculate total buying cost.
                        </td>
                      </tr>

                      <tr className="bg-slate-50 dark:bg-slate-800">
                        <td className="px-6 py-4 font-medium">
                          Skipping Loan Comparison
                        </td>
                        <td className="px-6 py-4">
                          Less favorable loan terms.
                        </td>
                        <td className="px-6 py-4">
                          Compare multiple lenders.
                        </td>
                      </tr>

                    </tbody>

                  </table>

                </div>

              </div>

            </section>

            {/* ================================================
                H2 #7
                Expert Tips to Get Your Loan Approved Faster
            ================================================ */}

            <section
              id="expert-tips"
              className="scroll-mt-28 mt-16"
            >

              <h2 className="mb-8 text-4xl font-black tracking-tight">
                Expert Tips to Get Your Loan Approved Faster
              </h2>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                A well-prepared loan application can significantly improve your
                chances of quick approval. Organize all required documents,
                maintain a healthy credit history, choose a property with clear
                legal documentation, and ensure that your income records are
                accurate and up to date before approaching a lender.
              </p>

              <p className="mb-6 leading-8 text-slate-700 dark:text-slate-300">
                Compare lenders carefully instead of accepting the first offer.
                Understand processing fees, repayment flexibility, interest
                rates, and prepayment conditions before making your final
                decision. A small difference in interest rates can have a
                significant impact over the entire loan tenure.
              </p>

              <p className="leading-8 text-slate-700 dark:text-slate-300">
                Buying a legally verified property and maintaining transparent
                financial records often makes the verification process smoother,
                reducing the likelihood of delays during loan processing.
              </p>

              {/* Expert Insight */}

              <div className="mt-10 rounded-3xl border border-green-200 bg-green-50 p-8 dark:border-green-900 dark:bg-green-950/30">

                <h3 className="text-2xl font-bold text-green-800 dark:text-green-300">
                  Expert Insight
                </h3>

                <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
                  Buyers who prepare complete documentation, compare multiple
                  lenders, and choose legally verified properties generally
                  experience a smoother loan approval process and fewer delays
                  during property purchase.
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
                A home loan is a long-term financial commitment, and choosing
                the right loan is just as important as selecting the right
                property. Careful planning, responsible borrowing, and thorough
                comparison of loan options can help buyers achieve home
                ownership without unnecessary financial pressure.
              </p>

              <p className="leading-8 text-slate-700 dark:text-slate-300">
                Whether you are purchasing your first home or investing in
                Jaipur's growing real estate market, understanding the home loan
                process will help you make informed decisions and build a strong
                financial foundation for the future.
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
                  ✔ Check your eligibility before applying.
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900">
                  ✔ Maintain a healthy credit score.
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900">
                  ✔ Compare multiple lenders before choosing.
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900">
                  ✔ Understand fixed and floating interest rates.
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900">
                  ✔ Budget for all additional property buying costs.
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900">
                  ✔ Choose legally verified properties for smoother financing.
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
                Help others make informed home financing decisions by sharing
                this guide with friends and family planning to buy property in
                Jaipur.
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
                    The RSN Estates Editorial Team publishes practical,
                    research-driven real estate guides for homebuyers,
                    investors, and first-time property purchasers in Jaipur.
                    Our articles simplify complex topics such as home loans,
                    property verification, RERA compliance, builder evaluation,
                    legal documentation, and investment planning so readers can
                    make confident and informed property decisions.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">

                    <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
                      Home Loans
                    </span>

                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
                      Property Buying
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
                  Continue learning with our expert real estate guides for
                  Jaipur homebuyers and investors.
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
                  Ready to Buy Your Dream Property in Jaipur?
                </h2>

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-emerald-100">
                  Whether you're searching for your first home, comparing
                  financing options, or planning a long-term real estate
                  investment, RSN Estates helps you discover verified
                  properties, understand home loans, evaluate builders, and
                  make confident property buying decisions every step of the
                  way.
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