import { supabaseServer } from "@/lib/supabase/server";
import type { Locality } from "@/types/Locality";

function mapLocality(
  locality: any,
  propertyCount = 0
): Locality {
    return {
    id: locality.id,

    slug: locality.slug,

    name: locality.name,

    shortDescription:
      locality.short_description ?? "",

    description:
      locality.description ?? "",

    heroImage:
      locality.hero_image ??
      locality.image ??
      "",

    images:
      locality.images ?? [],

    highlights:
      locality.highlights ?? [],

    schools:
      locality.schools ?? [],

    hospitals:
      locality.hospitals ?? [],

    shopping:
      locality.shopping ?? [],

    connectivity:
      locality.connectivity ?? [],

    apartmentPrice:
      locality.apartment_price ?? "",

    villaPrice:
      locality.villa_price ?? "",

    plotPrice:
      locality.plot_price ?? "",

    commercialPrice:
      locality.commercial_price ?? "",

    investmentRating:
      locality.investment_rating ?? 5,

    livabilityRating:
      locality.livability_rating ?? 5,

    rentalYield:
      locality.rental_yield ?? "",

    futureGrowth:
      locality.future_growth ?? "",

    whyInvest:
      locality.why_invest ?? "",

    propertyTypes:
      locality.property_types ?? [],

    nearestMetro:
      locality.nearest_metro ?? "",

    nearestRailwayStation:
      locality.nearest_railway_station ?? "",

    nearestAirport:
      locality.nearest_airport ?? "",

    nearbyLandmarks:
      locality.nearby_landmarks ?? [],

    searchKeywords:
      locality.search_keywords ?? [],

    faqs:
      locality.faqs ?? [],

    seoTitle:
      locality.seo_title ??
      locality.meta_title ??
      "",

    seoDescription:
      locality.seo_description ??
      locality.meta_description ??
      "",

    featured:
      locality.featured ?? false,

    published:
      locality.published ?? true,

    propertyCount,
  };
}

export async function getAllLocalities(
  publicOnly = false
) {
  const { data, error } =
    await supabaseServer
      .from("localities")
      .select("*")
      .order("name");

  if (error) {
    console.error(error);
    return [];
  }

  const result = (data ?? []).map((item) =>
    mapLocality(item)
  );

  return publicOnly
    ? result.filter((l) => l.published)
    : result;
}

export async function getLocalityBySlug(
  slug: string
) {
  const { data, error } =
    await supabaseServer
      .from("localities")
      .select("*")
      .eq("slug", slug)
      .single();

  if (error || !data) {
    return null;
  }

  return mapLocality(data);
}

export async function getLocalityById(
  id: number
) {
  const { data, error } =
    await supabaseServer
      .from("localities")
      .select("*")
      .eq("id", id)
      .single();

  if (error || !data) {
    return null;
  }

  return mapLocality(data);
}

export async function getLocalityOptions() {
  const { data, error } =
    await supabaseServer
      .from("localities")
      .select("id, name")
      .eq("published", true)
      .order("name");

  if (error) {
    console.error(error);
    return [];
  }

  return data ?? [];
}

export async function getNearbyLocalities(
  currentId: number,
  limit = 4
) {
  const { data, error } =
    await supabaseServer
      .from("localities")
      .select("*")
      .eq("published", true)
      .neq("id", currentId)
      .order("name")
      .limit(limit);

  if (error) {
    console.error(error);
    return [];
  }

  return (data ?? []).map((item) =>
    mapLocality(item)
  );
}

export async function getPublishedLocalities() {
  const { data } =
    await supabaseServer
      .from("localities")
      .select(
        `
        id,
        name,
        slug,
        published
      `
      )
      .eq("published", true)
      .order("name");

  return data ?? [];
}