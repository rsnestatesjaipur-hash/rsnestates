import { supabaseServer } from "@/lib/supabase/server";

function mapProperty(property: any) {
  return {
    ...property,

    propertyType: property.property_type,

    transactionType:
      property.transaction_type,

    areaUnit:
      property.area_unit,

    priceLabel:
      property.price_label,

    featuredImage:
      property.images?.[0] ??
      property.featured_image ??
      "",
      
    is_demo:
      property.is_demo ?? false,
  };
}

export async function getProperties() {
  const { data, error } =
    await supabaseServer
      .from("properties")
      .select("*")
      .eq("published", true)
      .order("created_at", {
        ascending: false,
      });

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map(mapProperty);
}

export async function getProperty(
  slug: string
) {
  const { data, error } =
    await supabaseServer
      .from("properties")
      .select("*")
      .eq("slug", slug)
      .single();

  if (error) {
    return null;
  }

  return mapProperty(data);
}

export async function getFeaturedProperties() {
  const { data, error } =
    await supabaseServer
      .from("properties")
      .select("*")
      .eq("featured", true)
      .eq("published", true)
      .eq("is_demo", false)
      .order("created_at", {
        ascending: false,
      });

  if (error) {
    return [];
  }

  return (data ?? []).map(mapProperty);
}