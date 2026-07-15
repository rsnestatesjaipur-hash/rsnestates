"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { X } from "lucide-react";

import LogoutButton from "@/components/portal/LogoutButton";

import {
  portalNavigation,
  PortalRole,
} from "@/lib/config/portal-navigation";

// =====================================================
// Props
// =====================================================

interface SidebarProps {
  role: PortalRole | null;

  sidebarOpen: boolean;

  setSidebarOpen: Dispatch<
    SetStateAction<boolean>
  >;
}

// =====================================================
// Component
// =====================================================

export default function Sidebar({
  role,
  sidebarOpen,
  setSidebarOpen,
}: SidebarProps) {
  const pathname =
    usePathname();

  const { resolvedTheme } =
    useTheme();

  // ===================================================
  // Logo
  // ===================================================

  const logo =
    resolvedTheme === "light"
      ? "/images/logo-black.png"
      : "/images/logo-white.png";

  // ===================================================
  // Navigation
  // ===================================================

  const navigation =
    role === null
      ? []
      : portalNavigation.filter(
          (item) =>
            item.roles.includes(
              role
            )
        );

  // ===================================================
  // UI
  // ===================================================

  return (
    <>
      {/* ===============================================
          Mobile Backdrop
      =============================================== */}

      {sidebarOpen && (
        <div
          onClick={() =>
            setSidebarOpen(
              false
            )
          }
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* ===============================================
          Sidebar
      =============================================== */}

      <aside
        className={[
          "fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-slate-200 bg-white transition-transform duration-300 dark:border-slate-800 dark:bg-slate-900",
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full",
          "lg:translate-x-0",
        ].join(" ")}
      >
        {/* =============================================
            Brand
        ============================================= */}

        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-6 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <Image
              src={logo}
              alt="RSN Estates"
              width={54}
              height={54}
              priority
              className="h-12 w-auto shrink-0"
            />

            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                RSN Estates
              </h1>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Management Portal
              </p>
            </div>
          </div>

          {/* ===========================================
              Mobile Close
          =========================================== */}

          <button
            type="button"
            onClick={() =>
              setSidebarOpen(
                false
              )
            }
            className="rounded-lg p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
            aria-label="Close Sidebar"
          >
            <X size={22} />
          </button>
        </div>

        {/* =============================================
            Navigation
        ============================================= */}

        <nav className="flex-1 space-y-2 overflow-y-auto p-6">
          {navigation.map(
            (item) => {
              const Icon =
                item.icon;

              const active =
                pathname ===
                  item.href ||
                (item.href !==
                  "/portal/dashboard" &&
                  pathname.startsWith(
                    item.href
                  ));

              return (
                <Link
                  key={
                    item.href
                  }
                  href={
                    item.href
                  }
                  onClick={() =>
                    setSidebarOpen(
                      false
                    )
                  }
                  className={[
                    "group flex items-center gap-4 rounded-2xl px-5 py-4 text-base font-medium transition-all duration-200",
                    active
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
                  ].join(
                    " "
                  )}
                >
                  <Icon
                    size={22}
                    className={
                      active
                        ? "text-white"
                        : "text-slate-500 group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-white"
                    }
                  />

                  <span>
                    {
                      item.title
                    }
                  </span>
                </Link>
              );
            }
          )}
        </nav>

        {/* =============================================
            Footer
        ============================================= */}

        <div className="border-t border-slate-200 p-6 dark:border-slate-800">
          {/* Logout */}

          <LogoutButton />

          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
            <p className="font-semibold text-slate-900 dark:text-white">
              RSN Estates
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Property Management System
            </p>

            <div className="mt-4 rounded-xl bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white">
              Version 1.0
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}