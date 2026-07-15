export type { Property, PropertyVideo } from "./Property";
export type { Builder } from "./Builder";
export type { Locality } from "./Locality";
export type { Inquiry } from "./Inquiry";
export interface Blog {
  id: number;

  title: string;

  slug: string;

  excerpt: string;

  content: string;

  featuredImage: string;

  category: string;

  tags: string[];

  author: string;

  publishedAt: string;

  readingTime: string;

  seoTitle: string;

  seoDescription: string;

  published: boolean;

  createdAt: string;

  updatedAt: string;
}