import type { Metadata } from "next";

import BlogCard from "@/components/blog/BlogCard";

import {
  getAllBlogSlugs,
} from "@/content/blogs";

export const metadata: Metadata = {
  title:
    "Real Estate Blog | RSN Estates",

  description:
    "Explore expert real estate guides, buying tips, Jaipur locality insights and investment advice.",

  alternates: {
    canonical:
      "https://rsnestates.com/blogs",
  },
};

export default async function BlogsPage() {
  /* =====================================================
     Load Blogs Dynamically
     ===================================================== */

  const slugs =
    getAllBlogSlugs();

  const publishedBlogs = [];

  for (const slug of slugs) {
    try {
      const module =
        await import(
          `@/content/blogs/${slug}/page`
        );

      const meta =
        module.blogMetadata ??
        module.metadata;

      if (!meta) {
        continue;
      }

      publishedBlogs.push({
        slug,

        title:
          meta.title ??
          "Untitled Blog",

        description:
          meta.description ??
          "",

        excerpt:
          meta.excerpt ??
          meta.description ??
          "",

        featuredImage:
          `/images/blogs/${slug}.webp`,

        featuredImageAlt:
          meta.title ??
          "",

        category:
          meta.category ??
          "Real Estate",

        publishedAt:
          meta.publishedAt ??
          "",

        readTime:
          meta.readTime ??
          "",

        published:
          meta.published ??
          true,
      });
    } catch {
      // Ignore invalid blog folders
    }
  }

  publishedBlogs.sort(
    (a, b) =>
      new Date(
        b.publishedAt
      ).getTime() -
      new Date(
        a.publishedAt
      ).getTime()
  );

  return (
    <main>
      {/* =====================================================
          Hero
      ===================================================== */}

      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white py-20 dark:border-slate-800 dark:from-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              RSN Estates Blog
            </span>

            <h1 className="mt-8 text-5xl font-black tracking-tight text-slate-900 dark:text-white md:text-6xl">
              Real Estate
              <br />
              Insights & Guides
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
              Stay updated with expert property buying
              guides, Jaipur locality insights,
              investment strategies, legal advice,
              home loan tips and the latest real estate
              trends.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          Blog Listing
      ===================================================== */}

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          {publishedBlogs.length ===
          0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 py-20 text-center dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                No Blogs Published Yet
              </h2>

              <p className="mt-4 text-slate-600 dark:text-slate-400">
                Publish your first blog
                to see it here.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {publishedBlogs.map(
                (blog) => (
                  <BlogCard
                    key={blog.slug}
                    blog={blog}
                  />
                )
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}