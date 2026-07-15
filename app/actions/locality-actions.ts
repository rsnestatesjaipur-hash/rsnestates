"use server";

import { supabaseServer } from "@/lib/supabase/server";

export async function createLocality(formData: FormData) {
const payload = {
  slug: String(formData.get("slug") ?? ""),

  name: String(formData.get("name") ?? ""),

  short_description: String(
    formData.get("shortDescription") ?? ""
  ),

  description: String(
    formData.get("description") ?? ""
  ),

  hero_image: String(
    formData.get("heroImage") ?? ""
  ),

  images: formData
    .getAll("images")
    .map(String)
    .filter(Boolean),

  highlights: formData
    .getAll("highlights")
    .map(String)
    .filter(Boolean),

  schools: formData
    .getAll("schools")
    .map(String)
    .filter(Boolean),

  hospitals: formData
    .getAll("hospitals")
    .map(String)
    .filter(Boolean),

  shopping: formData
    .getAll("shopping")
    .map(String)
    .filter(Boolean),

  connectivity: formData
    .getAll("connectivity")
    .map(String)
    .filter(Boolean),

  apartment_price: String(
    formData.get("apartmentPrice") ?? ""
  ),

  villa_price: String(
    formData.get("villaPrice") ?? ""
  ),

  plot_price: String(
    formData.get("plotPrice") ?? ""
  ),

  commercial_price: String(
    formData.get("commercialPrice") ?? ""
  ),

  seo_title: String(
    formData.get("seoTitle") ?? ""
  ),

  seo_description: String(
    formData.get("seoDescription") ?? ""
  ),

  featured:
    formData.get("featured") === "true",

  published:
    formData.get("published") === "true",
};

  const { error } = await supabaseServer
    .from("localities")
    .insert(payload);

if (error) {
  return {
    success: false,
    message: error.message,
  };
}

return {
  success: true,
};
}

export async function updateLocality(
  id: number,
  formData: FormData
) {
const payload = {
  slug: String(formData.get("slug") ?? ""),

  name: String(formData.get("name") ?? ""),

  short_description: String(
    formData.get("shortDescription") ?? ""
  ),

  description: String(
    formData.get("description") ?? ""
  ),

  hero_image: String(
    formData.get("heroImage") ?? ""
  ),

  images: formData
    .getAll("images")
    .map(String)
    .filter(Boolean),

  highlights: formData
    .getAll("highlights")
    .map(String)
    .filter(Boolean),

  schools: formData
    .getAll("schools")
    .map(String)
    .filter(Boolean),

  hospitals: formData
    .getAll("hospitals")
    .map(String)
    .filter(Boolean),

  shopping: formData
    .getAll("shopping")
    .map(String)
    .filter(Boolean),

  connectivity: formData
    .getAll("connectivity")
    .map(String)
    .filter(Boolean),

  apartment_price: String(
    formData.get("apartmentPrice") ?? ""
  ),

  villa_price: String(
    formData.get("villaPrice") ?? ""
  ),

  plot_price: String(
    formData.get("plotPrice") ?? ""
  ),

  commercial_price: String(
    formData.get("commercialPrice") ?? ""
  ),

  investment_rating: Number(
    formData.get("investmentRating") ?? 5
  ),

  livability_rating: Number(
    formData.get("livabilityRating") ?? 5
  ),

  rental_yield: String(
    formData.get("rentalYield") ?? ""
  ),

  future_growth: String(
    formData.get("futureGrowth") ?? ""
  ),

  why_invest: String(
    formData.get("whyInvest") ?? ""
  ),

  property_types: formData
    .getAll("propertyTypes")
    .map(String)
    .filter(Boolean),

  nearest_metro: String(
    formData.get("nearestMetro") ?? ""
  ),

  nearest_railway_station: String(
    formData.get("nearestRailwayStation") ?? ""
  ),

  nearest_airport: String(
    formData.get("nearestAirport") ?? ""
  ),

  nearby_landmarks: formData
    .getAll("nearbyLandmarks")
    .map(String)
    .filter(Boolean),

  search_keywords: formData
    .getAll("searchKeywords")
    .map(String)
    .filter(Boolean),

  faqs: formData
    .getAll("faqs")
    .map(String)
    .filter(Boolean),

  seo_title: String(
    formData.get("seoTitle") ?? ""
  ),

  seo_description: String(
    formData.get("seoDescription") ?? ""
  ),

  featured:
    formData.get("featured") === "true",

  published:
    formData.get("published") === "true",
};

  const { error } = await supabaseServer
    .from("localities")
    .update(payload)
    .eq("id", id);

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
  };
}

export async function deleteLocality(
  id: number
) {
  const { error } = await supabaseServer
    .from("localities")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);

    return {
      success: false,
      message: error.message,
      error,
    };
  }

  return {
    success: true,
  };
}