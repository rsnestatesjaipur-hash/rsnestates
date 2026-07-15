import { supabaseServer } from "@/lib/supabase/server";

function mapBlog(blog: any) {
  return {
    id: blog.id,

    title: blog.title,

    slug: blog.slug,

    excerpt: blog.excerpt ?? "",

    content: blog.content ?? "",

    featuredImage:
      blog.featured_image ?? "",

    category:
      blog.category ?? "General",

    tags:
      blog.tags ?? [],

    author:
      blog.author ?? "RSN Estates",

    publishedAt:
      blog.published_at ?? "",

    readingTime:
      blog.reading_time ?? "5 min read",

    seoTitle:
      blog.seo_title ?? "",

    seoDescription:
      blog.seo_description ?? "",

    published:
      blog.published ?? false,

    createdAt:
      blog.created_at ?? "",

    updatedAt:
      blog.updated_at ?? "",
  };
}

export async function getAllBlogs(
  publicOnly = false
) {
  let query = supabaseServer
    .from("blogs")
    .select("*")
    .order("published_at", {
      ascending: false,
    });

  if (publicOnly) {
    query = query.eq(
      "published",
      true
    );
  }

  const { data, error } =
    await query;

  if (error) {
    console.error(error);
    return [];
  }

  return (data ?? []).map(mapBlog);
}

export async function getBlogById(
  id: number
) {
  const { data, error } =
    await supabaseServer
      .from("blogs")
      .select("*")
      .eq("id", id)
      .single();

  if (error) {
    console.error(error);
    return null;
  }

  return mapBlog(data);
}

export async function getBlogBySlug(
  slug: string
) {
  const { data, error } =
    await supabaseServer
      .from("blogs")
      .select("*")
      .eq("slug", slug)
      .single();

  if (error) {
    console.error(error);
    return null;
  }

  return mapBlog(data);
}