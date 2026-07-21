import { supabaseServer } from "@/lib/supabase/server";
import { createAuthClient } from "@/lib/supabase/auth-server";
import { getCurrentUserRole } from "@/lib/auth/getCurrentUserRole";

function mapProperty(property: any) {
  return {
    id: property.id,

    slug: property.slug,

    title: property.title,

    description: property.description,

    propertyType: property.property_type,

    commercialType:
    property.commercial_type ?? "",

    propertySubType:
      property.property_sub_type ?? "",

    transactionType:
      property.transaction_type === "Sale"
        ? "Sell"
        : property.transaction_type,

    propertyStatus:
      property.property_status,

    localityId:
      String(property.locality_id),

    locality:
      property.localities?.name ?? "",

    localitySlug:
      property.localities?.slug ?? "",

    city: property.city,

    state:
    property.state ?? "Rajasthan",

    price: property.price,

    priceLabel:
      property.price_label,

    securityDeposit:
      property.security_deposit ?? 0,

    area: property.area,

    superBuiltupArea:
      property.super_builtup_area ??
      property.area ??
      0,

    carpetArea:
      property.carpet_area ?? 0,

    plotArea:
      property.plot_area ?? 0,

    areaUnit:
      property.area_unit,

    projectName:
      property.project_name ?? "",

    builderName:
      property.builder_name ?? "",

    // ======================================================
    // Room Details
    // ======================================================

    bedrooms:
      property.bedrooms ?? 0,

    bathrooms:
      property.bathrooms ?? 0,

    balconies:
      property.balconies ?? 0,

    // ======================================================
    // Floor Details
    // ======================================================

    floorNumber:
      property.floor_number ?? 0,

    totalFloors:
      property.total_floors ?? 0,

    // ======================================================
    // Parking
    // ======================================================

    coveredParking:
      property.covered_parking ?? 0,

    openParking:
      property.open_parking ?? 0,

    // ======================================================
    // Plot Details
    // ======================================================

    length:
      property.length ?? 0,

    width:
      property.width ?? 0,

    roadWidth:
      property.road_width ?? 0,

    plotFacing:
      property.plot_facing ?? "",

    cornerPlot:
      property.corner_plot ?? false,

    // ======================================================
    // Villa Features
    // ======================================================

    privateGarden:
      property.private_garden ?? false,

    privateTerrace:
      property.private_terrace ?? false,

    servantRoom:
      property.servant_room ?? false,

    studyRoom:
      property.study_room ?? false,

    // ======================================================
    // Media
    // ======================================================

    featuredImage:
      property.images?.[0] ??
      property.featured_image ??
      "",

    images:
      property.images ?? [],

    videos:
      property.youtubevideos?.map(
        (url: string) => ({
          title: "Property Video",
          url,
        })
      ) ?? [],

    // ======================================================
    // Other
    // ======================================================

    amenities:
      property.amenities ?? [],

    featured:
      Boolean(property.featured),

    is_demo:
      property.is_demo ?? false,

    published:
      Boolean(property.published),

    metaTitle:
      property.metatitle ?? "",

    metaDescription:
      property.metadescription ?? "",
  };
}



export async function getAllProperties() {
  const role =
    await getCurrentUserRole();

  let query = supabaseServer
    .from("properties")
    .select(`
      *,
      localities (
        id,
        name,
        slug
      )
    `)
    .eq("published", true);

if (role && role !== "admin") {
  const supabase =
    await createAuthClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  if (role === "subadmin") {
    query = query.eq(
      "created_by",
      user.id
    );
  }

  if (role === "user") {
    const {
      data: profile,
    } = await supabaseServer
      .from("profiles")
      .select("id")
      .eq("user_id", user.id)
      .single();

    if (!profile) {
      return null;
    }

    query = query.eq(
      "owner_id",
      profile.id
    );
  }
}

const { data, error } =
  await query
    .order("created_at", {
      ascending: false,
    })
    .range(0, 49999);

  if (error) {
    console.error(error);

    return [];
  }

  return (data ?? []).map(
    mapProperty
  );
}

export async function getPropertyById(
  id: number
) {
  const role =
    await getCurrentUserRole();

  let query = supabaseServer
    .from("properties")
    .select(`
      *,
      localities (
        id,
        name,
        slug
      )
    `)
    .eq("id", id);

if (role && role !== "admin") {
  const supabase =
    await createAuthClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return [];
  }

  if (role === "subadmin") {
    query = query.eq(
      "created_by",
      user.id
    );
  }

  if (role === "user") {
    const {
      data: profile,
    } = await supabaseServer
      .from("profiles")
      .select("id")
      .eq("user_id", user.id)
      .single();

    if (!profile) {
      return null;
    }

    query = query.eq(
      "owner_id",
      profile.id
    );
  }
}

  const { data, error } =
    await query.single();

  if (error) {
    console.error(error);

    return null;
  }

  return mapProperty(data);
}