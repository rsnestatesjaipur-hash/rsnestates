"use client";

import { Search } from "lucide-react";

import ThemeToggle from "@/components/common/ThemeToggle";
import LogoutButton from "@/components/portal/LogoutButton";
import UserProfile from "@/components/portal/UserProfile";

import { PortalRole } from "@/lib/config/portal-navigation";
import { CurrentProfile } from "@/lib/auth/getCurrentProfile";

// =====================================================
// Props
// =====================================================

interface HeaderProps {
  title: string;
  role: PortalRole | null;
  profile: CurrentProfile | null;
}

// =====================================================
// Component
// =====================================================

export default function Header({
  title,
  role,
  profile,
}: HeaderProps) {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8 dark:border-slate-800 dark:bg-slate-900">
      {/* ============================================
          Page Title
      ============================================ */}

      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          {title}
        </h1>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Welcome to the RSN Estates Management Portal
        </p>
      </div>

      {/* ============================================
          Right Section
      ============================================ */}

      <div className="flex items-center gap-4">
        {/* ========================================
            Search
        ======================================== */}

        <div className="relative hidden lg:block">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-72 rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-slate-500"
          />
        </div>

        {/* ========================================
            Theme
        ======================================== */}

        <ThemeToggle />

        {/* ========================================
            Logout
        ======================================== */}

        <LogoutButton />

        {/* ========================================
            User Profile
        ======================================== */}

        <UserProfile
          role={role}
          profile={profile}
        />
      </div>
    </header>
  );
}