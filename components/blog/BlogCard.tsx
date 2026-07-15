import Image from "next/image";
import Link from "next/link";

import type { BlogMeta } from "@/content/blogs";

interface BlogCardProps {
  blog: BlogMeta;
}

export default function BlogCard({
  blog,
}: BlogCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      <Link href={`/blogs/${blog.slug}`}>
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={blog.featuredImage}
            alt={blog.featuredImageAlt}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          />
        </div>
      </Link>

      <div className="space-y-5 p-6">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            {blog.category}
          </span>

          <span className="text-slate-500 dark:text-slate-400">
            {blog.readTime}
          </span>

          <span className="text-slate-500 dark:text-slate-400">
            {blog.publishedAt}
          </span>
        </div>

        <Link href={`/blogs/${blog.slug}`}>
          <h2 className="line-clamp-2 text-2xl font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
            {blog.title}
          </h2>
        </Link>

        <p className="line-clamp-3 text-slate-600 dark:text-slate-400">
          {blog.excerpt}
        </p>

        <Link
          href={`/blogs/${blog.slug}`}
          className="inline-flex items-center font-semibold text-blue-600 transition hover:gap-3 dark:text-blue-400"
        >
          Read Article →

        </Link>
      </div>
    </article>
  );
}