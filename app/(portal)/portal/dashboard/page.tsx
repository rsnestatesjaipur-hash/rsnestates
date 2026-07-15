import Card from "@/components/ui/Card";

import { getCurrentUserRole } from "@/lib/auth/getCurrentUserRole";
import { getAllLocalities } from "@/lib/repositories/localityRepository";
import { getAllProperties } from "@/lib/repositories/propertyRepository";

// =====================================================
// Dashboard
// =====================================================

export default async function DashboardPage() {
  const role =
    await getCurrentUserRole();

  const properties =
    (await getAllProperties()) ?? [];

  // ===================================================
  // Property Owner Dashboard
  // ===================================================

  if (role === "user") {
    const publishedProperties =
      properties.filter(
        (property) => property.published
      ).length;

    const draftProperties =
      properties.filter(
        (property) => !property.published
      ).length;

    const featuredProperties =
      properties.filter(
        (property) => property.featured
      ).length;

    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {/* =========================================
            My Properties
        ========================================= */}

        <Card className="p-6">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            My Properties
          </p>

          <h2 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
            {properties.length}
          </h2>
        </Card>

        {/* =========================================
            Published
        ========================================= */}

        <Card className="p-6">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Published Properties
          </p>

          <h2 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
            {publishedProperties}
          </h2>
        </Card>

        {/* =========================================
            Draft
        ========================================= */}

        <Card className="p-6">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Draft Properties
          </p>

          <h2 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
            {draftProperties}
          </h2>
        </Card>

        {/* =========================================
            Featured
        ========================================= */}

        <Card className="p-6">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Featured Properties
          </p>

          <h2 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
            {featuredProperties}
          </h2>
        </Card>
      </div>
    );
  }

  // ===================================================
  // Admin / Sub-Admin Dashboard
  // ===================================================

  const localities =
    (await getAllLocalities()) ?? [];

  const featuredProperties =
    properties.filter(
      (property) => property.featured
    ).length;

return (
  <div className="space-y-6">
    {/* =========================================
        Statistics
    ========================================= */}

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {/* =========================================
          Total Properties
      ========================================= */}

      <Card className="p-6">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Total Properties
        </p>

        <h2 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
          {properties.length}
        </h2>
      </Card>

      {/* =========================================
          Featured Properties
      ========================================= */}

      <Card className="p-6">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Featured Properties
        </p>

        <h2 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
          {featuredProperties}
        </h2>
      </Card>

      {/* =========================================
          Published Localities
      ========================================= */}

      <Card className="p-6">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Published Localities
        </p>

        <h2 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
          {localities.length}
        </h2>
      </Card>

      {/* =========================================
          Total Inventory
      ========================================= */}

      <Card className="p-6">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Total Inventory
        </p>

        <h2 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
          {properties.length}
        </h2>
      </Card>
    </div>

    {/* =========================================
        Admin Tools
    ========================================= */}

    {role === "admin" && (
      <Card className="p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              🤖 Demo Property Generator
            </h2>

            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Generate realistic demo properties for testing, development and SEO validation.
            </p>
          </div>

          <a
            href="/portal/demo-generator"
            className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-400"
          >
            Open Generator →
          </a>
        </div>
      </Card>
    )}
  </div>
);
}