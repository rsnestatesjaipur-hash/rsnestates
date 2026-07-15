"use client";

import { ReactNode } from "react";
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

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950">
        {/* ============================================
            Sidebar
        ============================================ */}

        <Sidebar role={role} />

        {/* ============================================
            Main Area
        ============================================ */}

        <div className="flex min-w-0 flex-1 flex-col">
          {/* ========================================
              Header
          ======================================== */}

          <Header
            title={title}
            role={role}
            profile={profile}
          />

          {/* ========================================
              Page Content
          ======================================== */}

          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}