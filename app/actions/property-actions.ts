"use server";

import { propertySchema } from "@/lib/validations/property";
import { getLocalityById } from "@/lib/repositories/localityRepository";
import { generatePropertySlug } from "@/lib/utils/generatePropertySlug";

import { supabaseServer } from "@/lib/supabase/server";
import { createAuthClient } from "@/lib/supabase/auth-server";
import { getCurrentUserRole } from "@/lib/auth/getCurrentUserRole";

async function buildPayload(parsed: {
  data: {
    title: string;
    slug: string;
    description: string;

    propertyType: string;
    transactionType: string;

    propertyStatus: string;

    localityId: string;

    price: number;

    securityDeposit: number;

    commercialType: string;

    propertySubType: string;

    area: number;
    carpetArea: number;
    plotArea: number;
    areaUnit: string;

    bedrooms: number;
    bathrooms: number;
    washroomType: string;

    balconies: number;

    floorNumber: number;
    totalFloors: number;

    coveredParking: number;
    openParking: number;

    length: number;
    width: number;
    roadWidth: number;

    plotFacing: string;
    cornerPlot: boolean;

    privateGarden: boolean;
    privateTerrace: boolean;

    servantRoom: boolean;
    studyRoom: boolean;

    featured: boolean;
    published: boolean;

    metaTitle: string;
    metaDescription: string;

    youtubeVideos: string[];
    images: string[];
    amenities: string[];

    projectName: string;

    builderName: string;

    created_by?: string;
  };
}) {
  const locality = await getLocalityById(
    Number(parsed.data.localityId)
  );

const localityName =
  locality?.name ?? "Jaipur";

let generatedTitle =
  parsed.data.title.trim();

if (generatedTitle === "") {
  switch (parsed.data.propertyType) {
    case "Apartment":
      generatedTitle = `${parsed.data.bedrooms} BHK Apartment for Sale in ${localityName}`;
      break;

    case "Villa":
      generatedTitle = `${parsed.data.bedrooms} BHK Villa for Sale in ${localityName}`;
      break;

    case "Plot":
      generatedTitle = `${parsed.data.area} ${parsed.data.areaUnit} Plot for Sale in ${localityName}`;
      break;

    default:
      generatedTitle = "Property";
  }
}

const generatedMetaTitle =
  `${generatedTitle} | RSN Estates`;

let generatedMetaDescription =
  parsed.data.description?.trim() ||
  `Explore ${generatedTitle}. View price, specifications, amenities, photos and contact the seller on RSN Estates.`;

if (generatedMetaDescription.length > 160) {
  generatedMetaDescription =
    generatedMetaDescription.substring(
      0,
      157
    ) + "...";
}

return {
  title: generatedTitle,

slug: await generatePropertySlug(
  parsed.data.slug.trim() !== ""
    ? parsed.data.slug.trim()
    : generatedTitle
),

  description:
    parsed.data.description,

  property_type:
    parsed.data.propertyType,

  metatitle:
    generatedMetaTitle,

  metadescription:
    generatedMetaDescription,

    locality_id: Number(parsed.data.localityId),
    locality: locality?.name ?? "",

    state: "Rajasthan",

    city: "Jaipur",

    project_name:
      parsed.data.projectName,

    builder_name:
      parsed.data.builderName,

    transaction_type:
      parsed.data.transactionType,

    property_status:
      parsed.data.propertyStatus,

    commercial_type:
      parsed.data.commercialType,

    property_sub_type:
      parsed.data.propertySubType,

    price: parsed.data.price,

    security_deposit:
      parsed.data.securityDeposit,

    price_label:
      parsed.data.transactionType === "Rent"
        ? `₹${parsed.data.price.toLocaleString("en-IN")} / Month`
        : `₹${parsed.data.price.toLocaleString("en-IN")}`,

    area: parsed.data.area,
    carpet_area: parsed.data.carpetArea,
    plot_area: parsed.data.plotArea,
    area_unit: parsed.data.areaUnit,

    bedrooms: parsed.data.bedrooms,
    bathrooms: parsed.data.bathrooms,

    washroom_type:
      parsed.data.washroomType,

    balconies: parsed.data.balconies,

    floor_number: parsed.data.floorNumber,
    total_floors: parsed.data.totalFloors,

    covered_parking: parsed.data.coveredParking,
    open_parking: parsed.data.openParking,

    length: parsed.data.length,
    width: parsed.data.width,
    road_width: parsed.data.roadWidth,

    plot_facing: parsed.data.plotFacing,
    corner_plot: parsed.data.cornerPlot,

    private_garden: parsed.data.privateGarden,
    private_terrace: parsed.data.privateTerrace,

    servant_room: parsed.data.servantRoom,
    study_room: parsed.data.studyRoom,

    featured: parsed.data.featured,
    published: parsed.data.published,
    
    youtubevideos: parsed.data.youtubeVideos,
    images: parsed.data.images,
    amenities: parsed.data.amenities,

    created_by: parsed.data.created_by,

    owner_id: null as string | null,

  };
}

function parsePropertyForm(formData: FormData) {
return propertySchema.safeParse({
  title: String(formData.get("title") ?? ""),
  slug: String(formData.get("slug") ?? ""),
  description: String(
    formData.get("description") ?? ""
  ),

  propertyType: String(
    formData.get("propertyType")
  ),

transactionType: String(
  formData.get("transactionType") ??
    "Sell"
) as
  | "Sell"
  | "Rent",

propertyStatus: String(
  formData.get("propertyStatus") ??
    "Ready to Move"
) as
  | "Ready to Move"
  | "Under Construction"
  | "New Launch"
  | "Resale"
  | "Sold Out",

  localityId: String(
    formData.get("localityId") ?? ""
  ),

  state: "Rajasthan",

  city: "Jaipur",

  fullAddress: String(
    formData.get("fullAddress") ?? ""
  ),

  pincode: String(
    formData.get("pincode") ?? ""
  ),

  latitude: null,

  longitude: null,

  projectName: String(
    formData.get("projectName") ?? ""
  ),

  builderName: String(
    formData.get("builderName") ?? ""
  ),

  areaUnit: String(
    formData.get("areaUnit") ?? "Sq.ft"
  ) as
    | "Sq.ft"
    | "Sq.yd"
    | "Sq.m"
    | "Acre"
    | "Hectare",

  price: Number(
    formData.get("price") ?? 0
  ),

  securityDeposit: Number(
    formData.get("securityDeposit") ?? 0
  ),

  area: Number(
    formData.get("area") ?? 0
  ),

  carpetArea: Number(
    formData.get("carpetArea") ?? 0
  ),

  superBuiltupArea: Number(
    formData.get("superBuiltupArea") ?? 0
  ),

  plotArea: Number(
    formData.get("plotArea") ?? 0
  ),

  bedrooms: Number(
    formData.get("bedrooms") ?? 0
  ),

  bathrooms: Number(
    formData.get("bathrooms") ?? 0
  ),

  washroomType: String(
    formData.get("washroomType") ??
      "Private"
  ) as
    | "Private"
    | "Shared",

  balconies: Number(
    formData.get("balconies") ?? 0
  ),

  floorNumber: Number(
    formData.get("floorNumber") ?? 0
  ),

  totalFloors: Number(
    formData.get("totalFloors") ?? 0
  ),

  coveredParking: Number(
    formData.get("coveredParking") ?? 0
  ),

  openParking: Number(
    formData.get("openParking") ?? 0
  ),

  length: Number(
    formData.get("length") ?? 0
  ),

  width: Number(
    formData.get("width") ?? 0
  ),

  roadWidth: Number(
    formData.get("roadWidth") ?? 0
  ),

  plotFacing: String(
    formData.get("plotFacing") ?? ""
  ),

  cornerPlot:
    formData.get("cornerPlot") ===
    "true",

  privateGarden:
    formData.get("privateGarden") ===
    "true",

  privateTerrace:
    formData.get("privateTerrace") ===
    "true",

  servantRoom:
    formData.get("servantRoom") ===
    "true",

  studyRoom:
    formData.get("studyRoom") ===
    "true",

  parkingSpaces: Number(
    formData.get("parkingSpaces") ?? 0
  ),

  furnishing: String(
    formData.get("furnishing") ?? ""
  ),

  commercialType: String(
    formData.get("commercialType") ?? ""
  ),

  propertySubType: String(
    formData.get("propertySubType") ?? ""
  ),

  facing: String(
    formData.get("facing") ?? ""
  ),

  propertyAge: String(
    formData.get("propertyAge") ?? ""
  ),

  constructionStatus: String(
    formData.get(
      "constructionStatus"
    ) ?? ""
  ),

  possessionDate: String(
    formData.get("possessionDate") ?? ""
  ),

  reraNumber: String(
    formData.get("reraNumber") ?? ""
  ),

  reraApproved:
    formData.get("reraApproved") ===
    "true",

  loanApproved:
    formData.get("loanApproved") ===
    "true",

  gatedCommunity:
    formData.get("gatedCommunity") ===
    "true",

  featured:
    formData.get("featured") ===
    "true",

  published:
    formData.get("published") ===
    "true",

  metaTitle: String(
    formData.get("metaTitle") ?? ""
  ),

  metaDescription: String(
    formData.get("metaDescription") ?? ""
  ),

  youtubeVideos: formData
    .getAll("youtubeVideos")
    .map(String)
    .filter(Boolean),

  images: formData
    .getAll("images")
    .map(String)
    .filter(Boolean),

  amenities: formData
    .getAll("amenities")
    .map(String)
    .filter(Boolean),
});
}

export async function createProperty(
  formData: FormData
) {
const parsed = parsePropertyForm(formData);

console.log("Validation Success:", parsed.success);

if (!parsed.success) {
  console.log(
    "Validation Errors:",
    JSON.stringify(
      parsed.error.format(),
      null,
      2
    )
  );

  return {
    success: false,
    message: "Validation Failed",
    errors: parsed.error.flatten().fieldErrors,
  };
}

  const supabase = await createAuthClient();

const {
  data: { user },
} = await supabase.auth.getUser();

if (!user) {
  return {
    success: false,
    message: "User not authenticated.",
  };
}

// =====================================================
// Get Profile
// =====================================================

const role =
  await getCurrentUserRole();

let ownerId: string | null =
  null;

if (role === "user") {
  const {
    data: profile,
  } = await supabaseServer
    .from("profiles")
    .select("id")
    .eq("user_id", user.id)
    .single();

  ownerId =
    profile?.id ?? null;
}

const payload = await buildPayload(parsed);

payload.created_by = user.id;

// Public User Ownership

payload.owner_id = ownerId;

const { data, error } = await supabaseServer
  .from("properties")
  .insert(payload)
  .select();

    console.log("Payload:", payload);
    console.log("Inserted Row:", data);

    if (error) {
      console.error("Supabase Error:", error);

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

export async function updateProperty(
  id: number,
  formData: FormData
) {
  const parsed = parsePropertyForm(formData);

console.log(
  "Incoming FormData:",
  Object.fromEntries(formData.entries())
);

  console.log(
  "Received FormData:",
  Object.fromEntries(formData.entries())
);

if (!parsed.success) {
  return {
    success: false,
    errors: parsed.error.flatten().fieldErrors,
  };
}

const role = await getCurrentUserRole();

if (role !== "admin") {
  const supabase =
    await createAuthClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  const {
    data: property,
    error,
  } = await supabaseServer
    .from("properties")
    .select("created_by")
    .eq("id", id)
    .single();

  if (error) {
    return {
      success: false,
      message: "Property not found.",
    };
  }

  if (
    property.created_by !== user.id
  ) {
    return {
      success: false,
      message: "Access denied.",
    };
  }
}

  const payload =
    await buildPayload(parsed);

  // Preserve the existing slug entered in the form
  payload.slug = parsed.data.slug;

// =============================================
// Preserve ownership during update
// =============================================

const {
  created_by,
  owner_id,
  ...updatePayload
} = payload;

const { data, error } =
  await supabaseServer
    .from("properties")
    .update(updatePayload)
    .eq("id", id)
    .select();

  console.log("Updating Property ID:", id);
  console.log("Rows Updated:", data);
  console.log("Supabase Error:", error);

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

export async function deleteProperty(
  id: number
) {
  const role =
    await getCurrentUserRole();

  if (role !== "admin") {
    return {
      success: false,
      message:
        "Only administrators can delete properties.",
    };
  }

  const { error } =
    await supabaseServer
      .from("properties")
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