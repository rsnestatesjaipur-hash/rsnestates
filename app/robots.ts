import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    // Allow all search-engine crawlers to access the website.
    rules: {
      userAgent: "*",
      allow: "/",
    },

    // Keep this URL consistent with the site's canonical
    // domain and sitemap.ts BASE_URL.
  sitemap:
    "https://www.rsnestates.com/sitemap.xml",
  };
}