"use server";

import { supabaseServer } from "@/lib/supabase/server";
import { settingsSchema } from "@/lib/validations/settings";

function parseSettingsForm(
  formData: FormData
) {
  return settingsSchema.safeParse({
    siteName: String(
      formData.get("siteName") ?? ""
    ),

    tagline: String(
      formData.get("tagline") ?? ""
    ),

    logo: String(
      formData.get("logo") ?? ""
    ),

    favicon: String(
      formData.get("favicon") ?? ""
    ),

    phone: String(
      formData.get("phone") ?? ""
    ),

    whatsapp: String(
      formData.get("whatsapp") ?? ""
    ),

    email: String(
      formData.get("email") ?? ""
    ),

    address: String(
      formData.get("address") ?? ""
    ),

    googleMaps: String(
      formData.get("googleMaps") ?? ""
    ),

    facebook: String(
      formData.get("facebook") ?? ""
    ),

    instagram: String(
      formData.get("instagram") ?? ""
    ),

    linkedin: String(
      formData.get("linkedin") ?? ""
    ),

    youtube: String(
      formData.get("youtube") ?? ""
    ),

    metaTitle: String(
      formData.get("metaTitle") ?? ""
    ),

    metaDescription: String(
      formData.get("metaDescription") ?? ""
    ),

    ogImage: String(
      formData.get("ogImage") ?? ""
    ),

    googleAnalytics: String(
      formData.get("googleAnalytics") ?? ""
    ),

    searchConsole: String(
      formData.get("searchConsole") ?? ""
    ),

    copyright: String(
      formData.get("copyright") ?? ""
    ),
  });
}

export async function updateSettings(
  formData: FormData
) {
  const parsed =
    parseSettingsForm(formData);

  if (!parsed.success) {
    return {
      success: false,
      errors:
        parsed.error.flatten()
          .fieldErrors,
    };
  }

  const payload = {
    site_name:
      parsed.data.siteName,

    tagline:
      parsed.data.tagline,

    logo:
      parsed.data.logo,

    favicon:
      parsed.data.favicon,

    phone:
      parsed.data.phone,

    whatsapp:
      parsed.data.whatsapp,

    email:
      parsed.data.email,

    address:
      parsed.data.address,

    google_maps:
      parsed.data.googleMaps,

    facebook:
      parsed.data.facebook,

    instagram:
      parsed.data.instagram,

    linkedin:
      parsed.data.linkedin,

    youtube:
      parsed.data.youtube,

    meta_title:
      parsed.data.metaTitle,

    meta_description:
      parsed.data.metaDescription,

    og_image:
      parsed.data.ogImage,

    google_analytics:
      parsed.data.googleAnalytics,

    search_console:
      parsed.data.searchConsole,

    copyright:
      parsed.data.copyright,
  };

  const { error } =
    await supabaseServer
      .from("settings")
      .update(payload)
      .eq("id", 1);

  if (error) {
    console.error(error);

    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
  };
}