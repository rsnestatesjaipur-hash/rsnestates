import { z } from "zod";

export const localitySchema = z.object({
  // =====================================================
  // Basic Information
  // =====================================================

  name: z
    .string()
    .min(2, "Locality name is required."),

  slug: z
    .string()
    .min(2, "Slug is required."),

  shortDescription: z
    .string()
    .default(""),

  description: z
    .string()
    .default(""),

  // =====================================================
  // Images
  // =====================================================

  heroImage: z
    .string()
    .default(""),

  images: z
    .array(z.string())
    .default([]),

  // =====================================================
  // Property Price Guide
  // =====================================================

  apartmentPrice: z
    .string()
    .default(""),

  villaPrice: z
    .string()
    .default(""),

  plotPrice: z
    .string()
    .default(""),

  commercialPrice: z
    .string()
    .default(""),

  // =====================================================
  // Investment Details
  // =====================================================

  investmentRating: z
    .number()
    .min(1)
    .max(5)
    .default(5),

  livabilityRating: z
    .number()
    .min(1)
    .max(5)
    .default(5),

  rentalYield: z
    .string()
    .default(""),

  futureGrowth: z
    .string()
    .default(""),

  whyInvest: z
    .string()
    .default(""),

  // =====================================================
  // Facilities
  // =====================================================

  highlights: z
    .array(z.string())
    .default([]),

  schools: z
    .array(z.string())
    .default([]),

  hospitals: z
    .array(z.string())
    .default([]),

  shopping: z
    .array(z.string())
    .default([]),

  connectivity: z
    .array(z.string())
    .default([]),

  // =====================================================
  // Property Information
  // =====================================================

  propertyTypes: z
    .array(z.string())
    .default([]),

  nearbyLandmarks: z
    .array(z.string())
    .default([]),

  searchKeywords: z
    .array(z.string())
    .default([]),

  nearestMetro: z
    .string()
    .default(""),

  nearestRailwayStation: z
    .string()
    .default(""),

  nearestAirport: z
    .string()
    .default(""),

  // =====================================================
  // FAQ
  // =====================================================

  faqs: z
    .array(z.any())
    .default([]),

  // =====================================================
  // SEO
  // =====================================================

  seoTitle: z
    .string()
    .default(""),

  seoDescription: z
    .string()
    .default(""),

  // =====================================================
  // Settings
  // =====================================================

  featured: z
    .boolean()
    .default(false),

  published: z
    .boolean()
    .default(true),
});

export type LocalityFormValues = z.infer<
  typeof localitySchema
>;