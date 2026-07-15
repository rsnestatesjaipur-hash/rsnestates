import { supabaseServer } from "@/lib/supabase/server";

function mapLocality(
  locality: any,
  propertyCount = 0
) {
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

    seoTitle:
      locality.seo_title ??
      locality.meta_title ??
      "",

    seoDescription:
      locality.seo_description ??
      locality.meta_description ??
      "",

    featured:
      locality.featured,

    published:
      locality.published,

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

    propertyCount,
      };
    }

export async function getAllLocalities(
  publicOnly = false
) {
  const [{ data: localities, error }, { data: properties }] =
    await Promise.all([
      supabaseServer
        .from("localities")
        .select("*")
        .order("name"),

    supabaseServer
      .from("properties")
      .select("locality_id")
      .eq("published", true)
    ]);

    console.log("Localities:", localities);
    console.log("Properties:", properties);

  if (error) {
    console.error(error);
    return [];
  }

  const result = (localities ?? []).map((locality) => {
  const propertyCount =
    (properties ?? []).filter(
      (property) =>
        property.locality_id ===
        locality.id
    ).length;

  console.log(
    locality.name,
    propertyCount
  );

  console.log({
  locality: locality.name,
  localityId: locality.id,
  propertyCount,
});

    return mapLocality(
      locality,
      propertyCount
    );
  });

  if (!publicOnly) {
    return result;
  }

return result.filter(
  (locality) =>
    locality.propertyCount > 0
);
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

  if (error) {
    console.error(error);
    return null;
  }

  return mapLocality(data);
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

  if (error) {
    console.error(error);
    return null;
  }

  return mapLocality(data);
}

export async function getLocalityOptions() {
  const { data, error } = await supabaseServer
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