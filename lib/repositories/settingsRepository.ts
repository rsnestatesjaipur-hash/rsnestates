import { supabaseServer } from "@/lib/supabase/server";

function mapSettings(data: any) {
  return {
    id: data.id,

    siteName:
      data.site_name ?? "",

    tagline:
      data.tagline ?? "",

    logo:
      data.logo ?? "",

    favicon:
      data.favicon ?? "",

    phone:
      data.phone ?? "",

    whatsapp:
      data.whatsapp ?? "",

    email:
      data.email ?? "",

    address:
      data.address ?? "",

    googleMaps:
      data.google_maps ?? "",

    facebook:
      data.facebook ?? "",

    instagram:
      data.instagram ?? "",

    linkedin:
      data.linkedin ?? "",

    youtube:
      data.youtube ?? "",

    metaTitle:
      data.meta_title ?? "",

    metaDescription:
      data.meta_description ?? "",

    ogImage:
      data.og_image ?? "",

    googleAnalytics:
      data.google_analytics ?? "",

    searchConsole:
      data.search_console ?? "",

    copyright:
      data.copyright ?? "",
  };
}

export async function getSettings() {
  const { data, error } =
    await supabaseServer
      .from("settings")
      .select("*")
      .eq("id", 1)
      .single();

  if (error || !data) {
    console.error(error);

    return mapSettings({});
  }

  return mapSettings(data);
}