import { supabaseServer } from "@/lib/supabase/server";

// =====================================================
// Types
// =====================================================

export interface PortalUser {
  id: number;

  userId: string;

  fullName: string;

  email: string;

  type: "user" | "subadmin";

  active: boolean;

  canFeatureProperty: boolean;

  propertyCount: number;
}

// =====================================================
// Get All Users
// =====================================================

export async function getAllUsers(): Promise<
  PortalUser[]
> {
  // ===================================================
  // Users
  // ===================================================

  const {
    data: users,
    error: usersError,
  } = await supabaseServer
    .from("users")
    .select(`
      id,
      user_id,
      active,
      can_feature_property
    `)
    .order("created_at", {
      ascending: false,
    });

  if (usersError || !users) {
    console.error(usersError);

    return [];
  }

  // ===================================================
  // Profiles
  // ===================================================

  const userIds = users.map(
    (user) => user.user_id
  );

  const {
    data: profiles,
    error: profilesError,
  } = await supabaseServer
    .from("profiles")
    .select(`
      user_id,
      full_name,
      email
    `)
    .in("user_id", userIds);

  if (profilesError) {
    console.error(profilesError);

    return [];
  }

  // ===================================================
  // Roles
  // ===================================================

  const {
    data: roles,
    error: rolesError,
  } = await supabaseServer
    .from("user_roles")
    .select(`
      id,
      role
    `)
    .in("id", userIds);

  if (rolesError) {
    console.error(rolesError);

    return [];
  }

  // ===================================================
  // Property Counts
  // ===================================================

  const {
    data: properties,
    error: propertiesError,
  } = await supabaseServer
    .from("properties")
    .select("created_by")
    .in("created_by", userIds);

  if (propertiesError) {
    console.error(propertiesError);

    return [];
  }

  // ===================================================
  // Lookup Maps
  // ===================================================

  const profileMap = new Map(
    (profiles ?? []).map(
      (profile) => [
        profile.user_id,
        profile,
      ]
    )
  );

  const roleMap = new Map(
    (roles ?? []).map(
      (role) => [
        role.id,
        role.role,
      ]
    )
  );

  const propertyCountMap =
    new Map<string, number>();

  for (const property of properties ?? []) {
    const ownerId =
      property.created_by;

    if (!ownerId) {
      continue;
    }

    propertyCountMap.set(
      ownerId,
      (propertyCountMap.get(
        ownerId
      ) ?? 0) + 1
    );
  }

  // ===================================================
  // Final Result
  // ===================================================

  return users
    .filter((user) => {
      // Hide Administrators
      return (
        roleMap.get(user.user_id) !==
        "admin"
      );
    })
    .map((user) => {
      const profile =
        profileMap.get(user.user_id);

      const role =
        roleMap.get(user.user_id);

      return {
        id: user.id,

        userId: user.user_id,

        fullName:
          profile?.full_name ??
          "Unknown User",

        email:
          profile?.email ?? "",

        type:
          role === "subadmin"
            ? "subadmin"
            : "user",

        active: user.active,

        canFeatureProperty:
          user.can_feature_property,

        propertyCount:
          role === "subadmin"
            ? 0
            : propertyCountMap.get(
                user.user_id
              ) ?? 0,
      };
    });
}