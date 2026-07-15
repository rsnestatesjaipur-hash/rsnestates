import { ReactNode } from "react";

import PortalLayout from "@/components/portal/PortalLayout";

import { getCurrentUserRole } from "@/lib/auth/getCurrentUserRole";
import { getCurrentProfile } from "@/lib/auth/getCurrentProfile";

// =====================================================
// Props
// =====================================================

interface LayoutProps {
  children: ReactNode;
}

// =====================================================
// Layout
// =====================================================

export default async function Layout({
  children,
}: LayoutProps) {
  const [role, profile] =
    await Promise.all([
      getCurrentUserRole(),
      getCurrentProfile(),
    ]);

  return (
    <PortalLayout
      role={role}
      profile={profile}
    >
      {children}
    </PortalLayout>
  );
}