import {
  LayoutDashboard,
  Building2,
  Users,
  MapPinned,
  MessageSquare,
  Settings,
} from "lucide-react";

// =====================================================
// Portal Roles
// =====================================================

export type PortalRole =
  | "admin"
  | "subadmin"
  | "user";

// =====================================================
// Navigation Item
// =====================================================

export interface PortalNavigationItem {
  title: string;
  href: string;
  icon: typeof LayoutDashboard;
  roles: PortalRole[];
}

// =====================================================
// Portal Navigation
// =====================================================

export const portalNavigation: PortalNavigationItem[] = [
  // ===================================================
  // Dashboard
  // ===================================================

  {
    title: "Dashboard",
    href: "/portal/dashboard",
    icon: LayoutDashboard,
    roles: [
      "admin",
      "subadmin",
      "user",
    ],
  },

  // ===================================================
  // Properties
  // ===================================================

  {
    title: "Properties",
    href: "/portal/properties",
    icon: Building2,
    roles: [
      "admin",
      "subadmin",
      "user",
    ],
  },

  // ===================================================
  // Users (Admin Only)
  // ===================================================

  {
    title: "Users",
    href: "/portal/users",
    icon: Users,
    roles: ["admin"],
  },

  // ===================================================
  // Localities (Admin Only)
  // ===================================================

  {
    title: "Localities",
    href: "/portal/localities",
    icon: MapPinned,
    roles: ["admin"],
  },

  // ===================================================
  // Enquiries (Admin Only)
  // ===================================================

  {
    title: "Enquiries",
    href: "/portal/enquiries",
    icon: MessageSquare,
    roles: ["admin"],
  },

  // ===================================================
  // Settings (Admin Only)
  // ===================================================

  {
    title: "Settings",
    href: "/portal/settings",
    icon: Settings,
    roles: ["admin"],
  },
];