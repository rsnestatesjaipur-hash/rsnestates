"use client";

import { Dispatch, SetStateAction } from "react";
import { Menu, Search } from "lucide-react";

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
      <div className="flex min-h-20 items-center justify-between gap-4 px-4 py-4 md:px-6 lg:px-8">
        {/* ============================================
            Left Section
        ============================================ */}

        <div className="flex min-w-0 items-center gap-4">
          {/* Mobile Menu */}

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

          {/* Title */}

          <div className="min-w-0">
            <h1 className="truncate text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
              {title}
            </h1>

            <p className="hidden text-sm text-slate-500 dark:text-slate-400 md:block">
              Welcome to the RSN Estates Management Portal
            </p>
          </div>
        </div>

        {/* ============================================
            Right Section
        ============================================ */}

        <div className="flex items-center gap-2 md:gap-4">
          {/* Search */}

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

          {/* Theme */}

          <ThemeToggle />

          {/* Logout */}

          <LogoutButton />

          {/* User */}

          <UserProfile
            role={role}
            profile={profile}
          />
        </div>
      </div>
    </header>
  );
}