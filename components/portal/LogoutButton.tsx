"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { signOut } from "@/lib/supabase/auth";

export default function LogoutButton() {
  // =====================================================
  // State
  // =====================================================

  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  // =====================================================
  // Logout
  // =====================================================

  async function handleLogout() {
    setLoading(true);

    try {
      await signOut();

      router.replace("/portal/login");

      router.refresh();
    } catch (error) {
      console.error(
        "Logout failed:",
        error
      );
    } finally {
      setLoading(false);
    }
  }

  // =====================================================
  // Render
  // =====================================================

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={loading}
      className="rounded-xl bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading
        ? "Signing Out..."
        : "Logout"}
    </button>
  );
}