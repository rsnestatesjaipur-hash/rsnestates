import fs from "node:fs";
import path from "node:path";

export interface BlogMeta {
  slug: string;

  title: string;

  description: string;

  excerpt: string;

  featuredImage: string;

  featuredImageAlt: string;

  category: string;

  publishedAt: string;

  readTime: string;

  published: boolean;
}

const BLOGS_DIR = path.join(
  process.cwd(),
  "content",
  "blogs"
);

export function getAllBlogSlugs() {
  if (!fs.existsSync(BLOGS_DIR)) {
    return [];
  }

  return fs
    .readdirSync(BLOGS_DIR, {
      withFileTypes: true,
    })
    .filter(
      (entry) => entry.isDirectory()
    )
    .map((entry) => entry.name)
    .sort();
}