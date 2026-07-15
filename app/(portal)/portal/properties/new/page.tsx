import PropertyForm from "@/components/portal/properties/form/PropertyForm";

import { getCurrentUserPermissions } from "@/lib/auth/getCurrentUserPermissions";
import { getLocalityOptions } from "@/lib/repositories/localityRepository";

// =====================================================
// New Property
// =====================================================

export default async function NewPropertyPage() {
  const [
    localities,
    permissions,
  ] = await Promise.all([
    getLocalityOptions(),
    getCurrentUserPermissions(),
  ]);

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Add Property
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Create a new property listing.
        </p>
      </div>

      <PropertyForm
        localities={localities}
        role={permissions.role}
        canFeatureProperty={
          permissions.canFeatureProperty
        }
      />
    </div>
  );
}