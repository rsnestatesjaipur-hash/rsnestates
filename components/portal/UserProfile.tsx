"use client";

import { PortalRole } from "@/lib/config/portal-navigation";
import { CurrentProfile } from "@/lib/auth/getCurrentProfile";

// =====================================================
// Props
// =====================================================

interface UserProfileProps {
  role: PortalRole | null;

  profile: CurrentProfile | null;
}

export default function UserProfile({
  role,
  profile,
}: UserProfileProps) {
  void role;
  void profile;

  return null;
}