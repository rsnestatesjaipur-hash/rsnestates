import { supabaseServer } from "@/lib/supabase/server";

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function generatePropertySlug(
  title: string
) {
  const baseSlug = slugify(title);

  let slug = baseSlug;

  let counter = 2;

  while (true) {
    const { data } =
      await supabaseServer
        .from("properties")
        .select("id")
        .eq("slug", slug)
        .maybeSingle();

    if (!data) {
      return slug;
    }

    slug = `${baseSlug}-${counter}`;

    counter++;
  }
}