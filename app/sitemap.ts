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

const BASE_URL =
  "https://www.rsnestates.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const urls: MetadataRoute.Sitemap =
    [];

  // =====================================================
  // Static Pages
  // =====================================================

  const staticPages = [
    "",
    "/about",
    "/contact",
    "/blogs",
    "/localities",
    "/properties",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  staticPages.forEach((page) => {
    urls.push({
      url: `${BASE_URL}${page}`,

      lastModified: new Date(),

      changeFrequency:
        page === ""
          ? "daily"
          : "weekly",

      priority:
        page === ""
          ? 1
          : 0.9,
    });
  });

  // =====================================================
  // Localities
  // =====================================================

  const localities =
    await getPublishedLocalities();

  localities.forEach((locality) => {
    urls.push({
      url: `${BASE_URL}/localities/${locality.slug}`,

      lastModified: new Date(),

      changeFrequency:
        "weekly",

      priority: 0.8,
    });
  });

  // =====================================================
  // Property Pages
  // =====================================================

  const properties =
    await getAllProperties();

  properties.forEach((property) => {
    urls.push({
      url: `${BASE_URL}/property/${property.slug}`,

      lastModified:
        property.created_at
          ? new Date(
              property.created_at
            )
          : new Date(),

      changeFrequency:
        "weekly",

      priority: 0.9,
    });
  });

  // =====================================================
  // Programmatic Pages
  // =====================================================

  // =====================================================
  // Programmatic Pages
  // Only create pages for localities having properties
  // =====================================================

  // =====================================================
  // Programmatic Pages
  // Only for localities having at least one property
  // =====================================================

    localities.forEach((locality) => {
      const localityProperties =
        properties.filter(
          (property: any) =>
            property.localitySlug ===
            locality.slug
        );

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
          url: `${BASE_URL}${route}`,

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

  // =====================================================
  // Blog Pages
  // =====================================================

  urls.push(
    {
      url:
        `${BASE_URL}/blogs/how-to-buy-property-in-jaipur`,
      lastModified:
        new Date(),
      changeFrequency:
        "monthly",
      priority: 0.7,
    },
    {
      url:
        `${BASE_URL}/blogs/best-localities-to-buy-property-in-jaipur`,
      lastModified:
        new Date(),
      changeFrequency:
        "monthly",
      priority: 0.7,
    },
    {
      url:
        `${BASE_URL}/blogs/common-mistakes-to-avoid-when-buying-property-in-jaipur`,
      lastModified:
        new Date(),
      changeFrequency:
        "monthly",
      priority: 0.7,
    },
    {
      url:
        `${BASE_URL}/blogs/apartment-vs-plot-which-is-better-in-jaipur`,
      lastModified:
        new Date(),
      changeFrequency:
        "monthly",
      priority: 0.7,
    },
    {
      url:
        `${BASE_URL}/blogs/top-emerging-investment-areas-in-jaipur`,
      lastModified:
        new Date(),
      changeFrequency:
        "monthly",
      priority: 0.7,
    }
  );

  return urls;
}