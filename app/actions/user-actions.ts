"use server";

import { revalidatePath } from "next/cache";

import { supabaseServer } from "@/lib/supabase/server";

// =====================================================
// Toggle Feature Permission
// =====================================================

export async function toggleFeaturePermission(
  userId: string,
  enabled: boolean
) {
  const { error } = await supabaseServer
    .from("users")
    .update({
      can_feature_property: enabled,
    })
    .eq("user_id", userId);

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  revalidatePath("/portal/users");

  return {
    success: true,
    message:
      "Permission updated successfully.",
  };
}