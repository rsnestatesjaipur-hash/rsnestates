"use client";

import { UserCircle } from "lucide-react";

import { PortalRole } from "@/lib/config/portal-navigation";
import { CurrentProfile } from "@/lib/auth/getCurrentProfile";

// =====================================================
// Props
// =====================================================

interface UserProfileProps {
  role: PortalRole | null;
  profile: CurrentProfile | null;
}

// =====================================================
// Component
// =====================================================

export default function UserProfile({
  role,
  profile,
}: UserProfileProps) {
  const title =
    role === "admin"
      ? "Administrator"
      : role === "subadmin"
      ? "Sub-Admin"
      : profile?.full_name ??
        "Property Owner";

const subtitle =
  role === "admin" ||
  role === "subadmin"
    ? "RSN Estates"
    : "Property Owner";

  return (
    <button className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-2 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800">
      <UserCircle
        size={34}
        className="text-slate-700 dark:text-slate-300"
      />

      <div className="hidden text-left md:block">
        <p className="font-semibold text-slate-900 dark:text-white">
          {title}
        </p>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          {subtitle}
        </p>
      </div>
    </button>
  );
}