"use client";

import {
  ReactNode,
  useState,
} from "react";
import { usePathname } from "next/navigation";

import Header from "./Header";
import Sidebar from "./Sidebar";

import ProtectedRoute from "@/components/portal/ProtectedRoute";

import { PortalRole } from "@/lib/config/portal-navigation";
import { CurrentProfile } from "@/lib/auth/getCurrentProfile";

// =====================================================
// Props
// =====================================================

interface PortalLayoutProps {
  children: ReactNode;
  role: PortalRole | null;
  profile: CurrentProfile | null;
}

// =====================================================
// Page Titles
// =====================================================

const pageTitles: Record<
  string,
  string
> = {
  "/portal/dashboard":
    "Dashboard",

  "/portal/properties":
    "Properties",

  "/portal/localities":
    "Localities",

  "/portal/enquiries":
    "Enquiries",

  "/portal/settings":
    "Settings",
};

// =====================================================
// Component
// =====================================================

export default function PortalLayout({
  children,
  role,
  profile,
}: PortalLayoutProps) {
  const pathname =
    usePathname();

  const title =
    pageTitles[pathname] ??
    "RSN Estates Portal";

  // ===================================================
  // Mobile Sidebar
  // ===================================================

  const [
    sidebarOpen,
    setSidebarOpen,
  ] = useState(false);

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen overflow-x-hidden bg-slate-100 dark:bg-slate-950">
        {/* ============================================
            Mobile Overlay
        ============================================ */}

        {sidebarOpen && (
          <div
            onClick={() =>
              setSidebarOpen(false)
            }
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          />
        )}

        {/* ============================================
            Sidebar
        ============================================ */}

        <Sidebar
          role={role}
          sidebarOpen={
            sidebarOpen
          }
          setSidebarOpen={
            setSidebarOpen
          }
        />

        {/* ============================================
            Main Area
        ============================================ */}

        <div className="flex min-w-0 flex-1 flex-col lg:ml-72">
          {/* ========================================
              Header
          ======================================== */}

          <Header
            title={title}
            role={role}
            profile={profile}
            sidebarOpen={
              sidebarOpen
            }
            setSidebarOpen={
              setSidebarOpen
            }
          />

          {/* ========================================
              Page Content
          ======================================== */}

          <main className="min-w-0 flex-1 overflow-x-auto p-4 md:p-6">
            {children}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}