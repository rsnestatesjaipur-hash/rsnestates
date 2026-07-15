import type { Route } from "next";

export interface Blog {
id: number;

slug: Route;

title: string;

featuredImage: string;

featuredImageAlt: string;

excerpt: string;

category: string;

readTime: string;

publishedAt: string;
}

export const blogs: Blog[] = [
{
id: 1,
slug: "/blogs/best-localities-to-buy-property-in-jaipur",
title: "Best Localities to Buy Property in Jaipur (2026 Guide)",
featuredImage:
"/images/blogs/best-localities-to-buy-property-in-jaipur.webp",
featuredImageAlt:
"Best Localities to Buy Property in Jaipur",
excerpt:
"Explore Jaipur's most promising residential areas including Jagatpura, Vaishali Nagar, Mansarovar, Malviya Nagar and Ajmer Road. Compare property prices, infrastructure, connectivity, rental demand and long-term investment potential before making your next property purchase.",
category: "Buying Guide",
readTime: "8 min read",
publishedAt: "28 June 2026",
},

{
id: 2,
slug: "/blogs/villa-vs-apartment-which-is-better",
title: "Villa vs Apartment: Which One Should You Buy?",
featuredImage:
"/images/blogs/villa-vs-apartment.webp",
featuredImageAlt:
"Villa vs Apartment Buying Guide",
excerpt:
"Compare villas and apartments based on price, maintenance, privacy, security, resale value, appreciation potential and lifestyle to choose the right investment for your family.",
category: "Property Guide",
readTime: "7 min read",
publishedAt: "24 June 2026",
},

{
id: 3,
slug: "/blogs/real-estate-investment-tips-for-beginners",
title: "10 Real Estate Investment Tips Every Beginner Should Know",
featuredImage:
"/images/blogs/real-estate-investment-tips.webp",
featuredImageAlt:
"Real Estate Investment Tips",
excerpt:
"Learn practical real estate investment strategies including budgeting, location selection, legal verification, financing, rental income and long-term wealth creation.",
category: "Investment",
readTime: "9 min read",
publishedAt: "20 June 2026",
},

{
id: 4,
slug: "/blogs/documents-required-before-buying-property",
title: "Essential Documents to Verify Before Buying Property",
featuredImage:
"/images/blogs/property-documents.webp",
featuredImageAlt:
"Property Document Verification Checklist",
excerpt:
"Understand the important legal documents every home buyer should verify, including title deed, sale deed, encumbrance certificate, approvals and RERA registration.",
category: "Legal",
readTime: "10 min read",
publishedAt: "15 June 2026",
},

{
id: 5,
slug: "/blogs/home-loan-guide-for-first-time-buyers",
title: "Home Loan Guide for First-Time Property Buyers",
featuredImage:
"/images/blogs/home-loan-guide.webp",
featuredImageAlt:
"Home Loan Guide for Property Buyers",
excerpt:
"Everything you need to know about home loans, including eligibility, documentation, EMI planning, interest rates and tips for faster loan approval.",
category: "Home Loan",
readTime: "8 min read",
publishedAt: "10 June 2026",
},

{
id: 6,
slug: "/blogs/commercial-property-investment-in-jaipur",
title: "Commercial Property Investment in Jaipur: Is It Worth It?",
featuredImage:
"/images/blogs/commercial-property-investment.webp",
featuredImageAlt:
"Commercial Property Investment in Jaipur",
excerpt:
"Explore the advantages of investing in commercial real estate in Jaipur, including rental yields, appreciation potential, business locations and future growth opportunities.",
category: "Commercial",
readTime: "9 min read",
publishedAt: "05 June 2026",
},

{
id: 7,
slug: "/blogs/how-rera-protects-home-buyers",
title: "How RERA Protects Home Buyers in India",
featuredImage:
"/images/blogs/rera-home-buyers.webp",
featuredImageAlt:
"RERA Guide for Home Buyers",
excerpt:
"Understand how the Real Estate (Regulation and Development) Act protects buyers through transparency, builder accountability and legal safeguards.",
category: "Legal",
readTime: "6 min read",
publishedAt: "31 May 2026",
},

{
id: 8,
slug: "/blogs/property-buying-checklist",
title: "Complete Property Buying Checklist Before You Invest",
featuredImage:
"/images/blogs/property-buying-checklist.webp",
featuredImageAlt:
"Complete Property Buying Checklist",
excerpt:
"Follow this comprehensive property buying checklist covering location analysis, legal due diligence, builder reputation, financing, inspections and registration.",
category: "Buying Guide",
readTime: "11 min read",
publishedAt: "25 May 2026",
},
];