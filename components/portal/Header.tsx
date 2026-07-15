"use client";

import Image from "next/image";
import {
  Dispatch,
  SetStateAction,
} from "react";
import { useTheme } from "next-themes";
import {
  Menu,
  Search,
} from "lucide-react";

import ThemeToggle from "@/components/common/ThemeToggle";

// =====================================================
// Props
// =====================================================

interface HeaderProps {
  title: string;

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
  sidebarOpen,
  setSidebarOpen,
}: HeaderProps) {
  const {
    resolvedTheme,
  } = useTheme();

  const logo =
    resolvedTheme === "light"
      ? "/images/logo-black.png"
      : "/images/logo-white.png";

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="flex min-h-20 items-center justify-between gap-4 px-4 py-4 md:px-6 lg:px-8">
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
            aria-label="Toggle Sidebar"
          >
            <Menu size={22} />
          </button>

          {/* ========================================
              Company Logo
          ======================================== */}

          <Image
            src={logo}
            alt="RSN Estates"
            width={180}
            height={52}
            priority
            className="h-10 w-auto shrink-0 md:h-12"
          />

          {/* ========================================
              Page Title
          ======================================== */}

          <div className="hidden min-w-0 border-l border-slate-300 pl-4 dark:border-slate-700 md:block">
            <h1 className="truncate text-xl font-bold text-slate-900 dark:text-white">
              {title}
            </h1>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              RSN Estates Management Portal
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
              Theme Toggle
          ======================================== */}

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}