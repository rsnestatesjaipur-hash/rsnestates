import { createAuthClient } from "@/lib/supabase/auth-server";

import { PortalRole } from "@/lib/config/portal-navigation";

// =====================================================
// Types
// =====================================================

export interface CurrentUserPermissions {
  role: PortalRole | null;

  canFeatureProperty: boolean;
}

// =====================================================
// Current User Permissions
// =====================================================

export async function getCurrentUserPermissions(): Promise<CurrentUserPermissions> {
  const supabase =
    await createAuthClient();

  // ===================================================
  // Current User
  // ===================================================

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      role: null,
      canFeatureProperty: false,
    };
  }

  // ===================================================
  // Admin / Sub-Admin
  // ===================================================

  const {
    data: roleData,
  } = await supabase
    .from("user_roles")
    .select("role, active")
    .eq("id", user.id)
    .maybeSingle();

if (
  roleData &&
  roleData.active
) {
  return {
    role:
      roleData.role as PortalRole,

    // Only Administrators can always
    // feature properties.
    canFeatureProperty:
      roleData.role ===
      "admin",
  };
}

  // ===================================================
  // Property Owner Permission
  // ===================================================

  const {
    data: permission,
  } = await supabase
    .from("users")
    .select("can_feature_property")
    .eq("user_id", user.id)
    .maybeSingle();

  return {
    role: "user",

    canFeatureProperty:
      permission?.can_feature_property ??
      false,
  };
}