import { redirect } from "next/navigation";

import DemoGenerator from "@/components/portal/demo/DemoGenerator";
import { getCurrentUserRole } from "@/lib/auth/getCurrentUserRole";

export default async function DemoGeneratorPage() {
  // =====================================================
  // Admin Only
  // =====================================================

  const role = await getCurrentUserRole();

  if (role !== "admin") {
    redirect("/portal/dashboard");
  }

  // =====================================================
  // UI
  // =====================================================

  return <DemoGenerator />;
}