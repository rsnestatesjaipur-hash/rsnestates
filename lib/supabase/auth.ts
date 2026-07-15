import { supabase } from "@/lib/supabase/client";

// =====================================================
// Sign In
// =====================================================

export async function signIn(
  email: string,
  password: string
) {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
}

// =====================================================
// Sign Out
// =====================================================

export async function signOut() {
  return await supabase.auth.signOut();
}

// =====================================================
// Get Current User
// =====================================================

export async function getCurrentUser() {
  return await supabase.auth.getUser();
}

// =====================================================
// Get Session
// =====================================================

export async function getSession() {
  return await supabase.auth.getSession();
}

// =====================================================
// Listen for Auth Changes
// =====================================================

export function onAuthStateChange(
  callback: Parameters<
    typeof supabase.auth.onAuthStateChange
  >[0]
) {
  return supabase.auth.onAuthStateChange(
    callback
  );
}