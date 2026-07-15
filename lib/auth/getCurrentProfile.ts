import { createAuthClient } from "@/lib/supabase/auth-server";

// =====================================================
// Current Profile
// =====================================================

export interface CurrentProfile {
  full_name: string | null;
  email: string | null;
  plan: string | null;
}

export async function getCurrentProfile(): Promise<CurrentProfile | null> {
  const supabase =
    await createAuthClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data } =
    await supabase
      .from("profiles")
      .select("full_name,email,plan")
      .eq("user_id", user.id)
      .maybeSingle();

  return data;
}