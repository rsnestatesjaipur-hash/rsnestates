import { createAuthClient } from "@/lib/supabase/auth-server";

import { PortalRole } from "@/lib/config/portal-navigation";

// =====================================================
// Get Current Portal Role
// =====================================================

export async function getCurrentUserRole(): Promise<
  PortalRole | null
> {
  const supabase =
    await createAuthClient();

  // ===================================================
  // Current User
  // ===================================================

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  // ===================================================
  // Admin / SubAdmin
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
    return roleData.role as
      | "admin"
      | "subadmin";
  }

  // ===================================================
  // Public User
  // ===================================================

  const {
    data: profile,
  } = await supabase
    .from("profiles")
    .select("blocked")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!profile) {
    return null;
  }

  if (profile.blocked) {
    return null;
  }

  return "user";
}