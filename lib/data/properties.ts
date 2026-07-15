import { supabaseServer } from "@/lib/supabase/server";

function mapProperty(property: any) {
  return {
    id: property.id,

    title: property.title,
    slug: property.slug,
    description: property.description,

    propertyType: property.property_type,
    transactionType: property.transaction_type,
    propertyStatus: property.property_status,

    localityId: property.locality_id,
    locality: property.localities?.name ?? "",
    localitySlug: property.localities?.slug ?? "",

    city: property.city,
    state: property.state,

    price: property.price,

    priceLabel:
      property.price_label,

    securityDeposit:
      property.security_deposit ?? 0,

    commercialType:
      property.commercial_type ?? "",

    area: property.area,
    
    carpetArea: property.carpet_area,
    plotArea: property.plot_area,
    areaUnit: property.area_unit,

    bedrooms: property.bedrooms,
    bathrooms: property.bathrooms,

    washroomType:
      property.washroom_type ??
      "Private",
      
    balconies: property.balconies,

    floorNumber: property.floor_number,
    totalFloors: property.total_floors,

    coveredParking: property.covered_parking,
    openParking: property.open_parking,

    length: property.length,
    width: property.width,

    roadWidth: property.road_width,
    plotFacing: property.plot_facing,
    cornerPlot: property.corner_plot,

    gatedCommunity: property.gated_community,

    privateGarden: property.private_garden,
    privateTerrace: property.private_terrace,

    servantRoom: property.servant_room,
    studyRoom: property.study_room,

    amenities: property.amenities ?? [],

    images: property.images ?? [],

    featuredImage:
      property.images?.[0] ?? "",

    youtubeVideos:
      property.youtubevideos ?? [],

    videos:
      (property.youtubevideos ?? []).map(
        (url: string, index: number) => ({
          title: `Property Video ${index + 1}`,
          url,
        })
      ),

    featured: property.featured,

// ======================================================
// Demo Listing
// ======================================================

is_demo:
  property.is_demo ?? false,

published:
  property.published,

metaTitle:
  property.metatitle,

metaDescription:
  property.metadescription,

    createdAt: property.created_at,
  };
}

export async function getPropertyBySlug(
  slug: string
) {
  const { data, error } =
    await supabaseServer
      .from("properties")
      .select(
        `
        *,
        localities (
          id,
          name,
          slug
        )
      `
      )
      .eq("slug", slug)
      .eq("published", true)
      .single();

if (error || !data) {
  console.error("Supabase Error Code:", error?.code);
  console.error("Supabase Error Message:", error?.message);
  console.error("Supabase Error Details:", error?.details);
  console.error("Supabase Error Hint:", error?.hint);

  console.log("Slug:", slug);
  console.log("Data:", data);

  return null;
}
  return mapProperty(data);
}

export async function getRelatedProperties(
  localityId: number,
  propertyId: number,
  limit = 6
) {
  const { data } =
    await supabaseServer
      .from("properties")
      .select(
        `
        *,
        localities (
          id,
          name,
          slug
        )
      `
      )
      .eq("published", true)
      .eq("locality_id", localityId)
      .neq("id", propertyId)
      .limit(limit);

  return (data ?? []).map(mapProperty);
}

export async function getLatestProperties(
  limit = 12
) {
  const { data } =
    await supabaseServer
      .from("properties")
      .select(
        `
        *,
        localities (
          id,
          name,
          slug
        )
      `
      )
      .eq("published", true)
      .order("created_at", {
        ascending: false,
      })
      .limit(limit);

  return (data ?? []).map(mapProperty);
}

export async function getProperties({
  propertyType,
  transactionType,
  localityId,
  bedrooms,
  propertyStatus,
  minPrice,
  maxPrice,
  limit = 24,
}: {
  propertyType?: string;
  transactionType?: string;
  localityId?: number;
  bedrooms?: number;
  propertyStatus?: string;
  minPrice?: number;
  maxPrice?: number;
  limit?: number;
}) {
  let query = supabaseServer
    .from("properties")
    .select(
      `
      *,
      localities (
        id,
        name,
        slug
      )
      `
    )
    .eq("published", true)
    .limit(limit);

  if (propertyType) {
    query = query.eq(
      "property_type",
      propertyType
    );
  }

  if (transactionType) {
    query = query.eq(
      "transaction_type",
      transactionType
    );
  }

  if (localityId) {
    query = query.eq(
      "locality_id",
      localityId
    );
  }

  if (
    bedrooms !== undefined
  ) {
    query = query.eq(
      "bedrooms",
      bedrooms
    );
  }

  if (propertyStatus) {
    query = query.eq(
      "property_status",
      propertyStatus
    );
  }

  if (
    minPrice !== undefined
  ) {
    query = query.gte(
      "price",
      minPrice
    );
  }

  if (
    maxPrice !== undefined
  ) {
    query = query.lte(
      "price",
      maxPrice
    );
  }

  const { data } =
    await query.order(
      "created_at",
      {
        ascending: false,
      }
    );

  return (data ?? []).map(
    mapProperty
  );
}

export async function getAllProperties() {
  const { data } =
    await supabaseServer
      .from("properties")
        .select(
          `
          slug,
          created_at,
          published,
          is_demo,
          locality_id,
          property_type,
          transaction_type,
          bedrooms,
          price,
          localities (
          name,
          slug
        )
        `
      )
      .eq("published", true)
      .order("created_at", {
        ascending: false,
      });

  return (data ?? []).map((property: any) => ({
    slug: property.slug,

    is_demo:
      property.is_demo ?? false,

    created_at:
      property.created_at,

    published: property.published,

    localityId: property.locality_id,

    locality: property.localities?.name ?? "",

    localitySlug:
      property.localities?.slug ?? "",

    propertyType:
      property.property_type,

    commercialType:
      property.commercial_type ?? "",

    transactionType:
      property.transaction_type,

    bedrooms:
      property.bedrooms,

    price:
      property.price,
  }));
}