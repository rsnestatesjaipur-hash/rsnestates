import { z } from "zod";

export const blogSchema = z.object({
  title: z
    .string()
    .min(5, "Title is required."),

  slug: z
    .string()
    .min(3, "Slug is required."),

  excerpt: z
    .string()
    .min(20, "Excerpt is required."),

  content: z
    .string()
    .min(50, "Content is required."),

  featuredImage: z
    .string()
    .default(""),

  images: z
  .array(z.string())
  .default([]),

  category: z
    .string()
    .default("General"),

  tags: z
    .array(z.string())
    .default([]),

  author: z
    .string()
    .default("RSN Estates"),

  publishedAt: z
    .string()
    .default(""),

  readingTime: z
    .string()
    .default("5 min read"),

  seoTitle: z
    .string()
    .default(""),

  seoDescription: z
    .string()
    .default(""),

  published: z.boolean(),
});

export type BlogFormValues = z.infer<
  typeof blogSchema
>;