"use server";

import { revalidatePath } from "next/cache";

import { supabaseServer } from "@/lib/supabase/server";
import { getCurrentUserRole } from "@/lib/auth/getCurrentUserRole";

import { generateDemoProperties } from "@/lib/demo/generator";

export async function generateDemoListings(
  listingsPerSubType = 10,
  localityId?: number
) {
  try {
    // =====================================================
    // Security
    // =====================================================

    const role =
      await getCurrentUserRole();

    if (role !== "admin") {
      return {
        success: false,
        message: "Unauthorized.",
      };
    }

    // =====================================================
    // Generate Properties
    // =====================================================

    const properties =
      generateDemoProperties(
        listingsPerSubType,
        localityId
      );

    const payload = properties.map(
      (property: any) => ({
        title: property.title,

        slug: property.slug,

        description:
          property.description,

        property_type:
          property.propertyType,

        property_sub_type:
          property.propertySubType,

        transaction_type:
          property.transactionType,

        locality_id:
          property.localityId,

        locality:
          property.locality,

        city:
          property.city,

        state:
          property.state,

        area:
          property.area,

        area_unit:
          property.areaUnit,

        price:
          property.price,

        price_label:
          property.transactionType ===
          "Rent"
            ? `₹${property.price.toLocaleString()}/month`
            : `₹${property.price.toLocaleString()}`,

        bedrooms:
          property.bedrooms,

        bathrooms:
          property.bathrooms,

        builder_name:
          property.builder,

        project_name:
          property.project,

        amenities:
          property.amenities,

        metatitle:
          property.metaTitle,

        metadescription:
          property.metaDescription,

        featured:
          property.featured,

        published: true,

        is_demo: true,

        images: [],

        youtubevideos: [],
      })
    );

    // =====================================================
    // Duplicate Slug Check
    // =====================================================

    const slugs = payload.map(
      (p) => p.slug
    );

    const duplicateSlugs =
      slugs.filter(
        (slug, index) =>
          slugs.indexOf(slug) !==
          index
      );

    console.log(
      "Duplicate Slugs:",
      duplicateSlugs
    );

    // =====================================================
    // Remove Existing Demo Properties
    // =====================================================

    if (localityId) {
      await supabaseServer
        .from("properties")
        .delete()
        .eq("is_demo", true)
        .eq(
          "locality_id",
          localityId
        );
    } else {
      await supabaseServer
        .from("properties")
        .delete()
        .eq("is_demo", true);
    }

    // =====================================================
    // Insert New Demo Properties
    // =====================================================

    const { error } =
      await supabaseServer
        .from("properties")
        .insert(payload);

    if (error) {
      console.error(error);

      return {
        success: false,
        message: error.message,
      };
    }

    revalidatePath(
      "/portal/properties"
    );

    return {
      success: true,
      count: payload.length,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message:
        "Failed to generate demo listings.",
    };
  }
}