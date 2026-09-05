import type { MetadataRoute } from "next";

import {
  getAllProperties,
} from "@/lib/data/properties";

import {
  getPublishedLocalities,
} from "@/lib/data/localities";

import {
  generateProgrammaticRoutes,
} from "@/lib/utils/programmaticRoutes";

// =====================================================
// Sitemap Configuration
// =====================================================
//
// IMPORTANT:
// - Production canonical host is www.rsnestates.com.
// - All sitemap URLs use the same www host.
// - Existing static, locality, property, programmatic,
//   and blog URLs are preserved.
// - The Jaipur plot investment landing page is included.
// - Only real, generated routes are added to the sitemap.
// =====================================================

const BASE_URL =
  "https://www.rsnestates.com";

// =====================================================
// Sitemap
// =====================================================

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const urls: MetadataRoute.Sitemap = [];

  // ===================================================
  // Static Pages
  // ===================================================

  const staticPages = [
    "",
    "/about",
    "/contact",
    "/blogs",
    "/localities",
    "/properties",
    "/privacy-policy",
    "/terms-and-conditions",
    "/jaipur-plot-investment",
  ];

  staticPages.forEach((page) => {
    urls.push({
      url:
        `${BASE_URL}${page}`,

      lastModified:
        new Date(),

      changeFrequency:
        page === ""
          ? "daily"
          : "weekly",

      priority:
        page === ""
          ? 1
          : page ===
            "/jaipur-plot-investment"
            ? 0.95
            : 0.9,
    });
  });

  // ===================================================
  // Locality Pages
  // ===================================================

  const localities =
    await getPublishedLocalities();

  localities.forEach((locality) => {
    urls.push({
      url:
        `${BASE_URL}/localities/${locality.slug}`,

      lastModified:
        new Date(),

      changeFrequency:
        "weekly",

      priority:
        0.8,
    });
  });

  // ===================================================
  // Property Pages
  // ===================================================

  const properties =
    await getAllProperties();

  properties.forEach((property) => {
    urls.push({
      url:
        `${BASE_URL}/property/${property.slug}`,

      lastModified:
        property.created_at
          ? new Date(
              property.created_at
            )
          : new Date(),

      changeFrequency:
        "weekly",

      priority:
        0.9,
    });
  });

  // ===================================================
  // Programmatic Pages
  // ===================================================
  //
  // Programmatic pages are generated only for published
  // localities that have associated properties.
  //
  // Existing route-generation logic is preserved.
  // ===================================================

  localities.forEach((locality) => {
    const localityProperties =
      properties.filter(
        (property: any) =>
          property.localitySlug ===
          locality.slug
      );

    // Do not generate programmatic URLs for localities
    // without any associated properties.
    if (
      localityProperties.length ===
      0
    ) {
      return;
    }

    const routes =
      generateProgrammaticRoutes(
        locality.slug,
        localityProperties
      );

    routes.forEach((route) => {
      urls.push({
        url:
          `${BASE_URL}${route}`,

        lastModified:
          new Date(),

        changeFrequency:
          "weekly",

        priority:
          route.includes(
            "under-"
          ) ||
          route.includes(
            "-bhk-"
          )
            ? 0.9
            : 0.8,
      });
    });
  });

  // ===================================================
  // Blog Pages
  // ===================================================
  //
  // Existing published blog URLs are preserved.
  // ===================================================

  urls.push(
    {
      url:
        `${BASE_URL}/blogs/how-to-buy-property-in-jaipur`,

      lastModified:
        new Date(),

      changeFrequency:
        "monthly",

      priority:
        0.7,
    },

    {
      url:
        `${BASE_URL}/blogs/best-localities-to-buy-property-in-jaipur`,

      lastModified:
        new Date(),

      changeFrequency:
        "monthly",

      priority:
        0.7,
    },

    {
      url:
        `${BASE_URL}/blogs/common-mistakes-to-avoid-when-buying-property-in-jaipur`,

      lastModified:
        new Date(),

      changeFrequency:
        "monthly",

      priority:
        0.7,
    },

    {
      url:
        `${BASE_URL}/blogs/apartment-vs-plot-which-is-better-in-jaipur`,

      lastModified:
        new Date(),

      changeFrequency:
        "monthly",

      priority:
        0.7,
    },

    {
      url:
        `${BASE_URL}/blogs/top-emerging-investment-areas-in-jaipur`,

      lastModified:
        new Date(),

      changeFrequency:
        "monthly",

      priority:
        0.7,
    }
  );

  // ===================================================
  // Return Sitemap
  // ===================================================

  return urls;
}