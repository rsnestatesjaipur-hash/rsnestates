import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
  getAllBlogSlugs,
} from "@/content/blogs";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map(
    (slug) => ({
      slug,
    })
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } =
    await params;

  try {
    const module =
      await import(
        `@/content/blogs/${slug}/page`
      );

    return (
      module.metadata ?? {
        title:
          "RSN Estates Blog",
      }
    );
  } catch {
    return {
      title:
        "Blog Not Found",
    };
  }
}

export default async function BlogPage({
  params,
}: PageProps) {
  const { slug } =
    await params;

  if (
    !getAllBlogSlugs().includes(
      slug
    )
  ) {
    notFound();
  }

  try {
    const module =
      await import(
        `@/content/blogs/${slug}/page`
      );

    const Blog =
      module.default;

    return <Blog />;
  } catch {
    notFound();
  }
}