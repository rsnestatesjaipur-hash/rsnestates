"use client";

import { Dispatch, SetStateAction } from "react";
import {
  Building2,
  Menu,
  Search,
} from "lucide-react";

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

  sidebarOpen: boolean;

  setSidebarOpen: Dispatch<
    SetStateAction<boolean>
  >;
}

// =====================================================
// Component
// =====================================================

export default function Header({
  title,
  role,
  profile,
  sidebarOpen,
  setSidebarOpen,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="flex min-h-20 items-center justify-between gap-3 px-4 py-4 md:px-6 lg:px-8">
        {/* ============================================
            Left Section
        ============================================ */}

        <div className="flex min-w-0 flex-1 items-center gap-3">
          {/* ========================================
              Mobile Menu
          ======================================== */}

          <button
            type="button"
            onClick={() =>
              setSidebarOpen(
                !sidebarOpen
              )
            }
            className="rounded-xl p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
            aria-label="Open Menu"
          >
            <Menu size={22} />
          </button>

          {/* ========================================
              Brand Logo
          ======================================== */}

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
            <Building2 size={22} />
          </div>

          {/* ========================================
              Company Name
          ======================================== */}

          <div className="min-w-0">
            <h1 className="truncate text-lg font-bold text-slate-900 dark:text-white sm:text-xl md:text-2xl">
              RSN Estates
            </h1>

            <p className="hidden text-xs text-slate-500 dark:text-slate-400 md:block">
              {title}
            </p>
          </div>
        </div>

        {/* ============================================
            Right Section
        ============================================ */}

        <div className="flex shrink-0 items-center gap-2 md:gap-4">
          {/* ========================================
              Search
          ======================================== */}

          <div className="relative hidden xl:block">
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
      </div>
    </header>
  );
}