import { notFound } from "next/navigation";

import PropertyForm from "@/components/portal/properties/form/PropertyForm";

import { getCurrentUserPermissions } from "@/lib/auth/getCurrentUserPermissions";
import { getPropertyById } from "@/lib/repositories/propertyRepository";
import { getLocalityOptions } from "@/lib/repositories/localityRepository";

// =====================================================
// Props
// =====================================================

interface EditPropertyPageProps {
  params: Promise<{
    id: string;
  }>;
}

// =====================================================
// Edit Property
// =====================================================

export default async function EditPropertyPage({
  params,
}: EditPropertyPageProps) {
  const { id } = await params;

  const [
    propertyResult,
    localities,
    permissions,
  ] = await Promise.all([
    getPropertyById(Number(id)),
    getLocalityOptions(),
    getCurrentUserPermissions(),
  ]);

  // ===================================================
  // Validate Property
  // ===================================================

  if (
    !propertyResult ||
    Array.isArray(propertyResult)
  ) {
    notFound();
  }

  // ===================================================
  // Type Narrowing
  // ===================================================

  const property = propertyResult as Exclude<
    typeof propertyResult,
    never[] | null
  >;

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Edit Property
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Update your property information.
        </p>
      </div>

      <PropertyForm
        mode="edit"
        propertyId={property.id}
        initialData={property}
        localities={localities}
        role={permissions.role}
        canFeatureProperty={
          permissions.canFeatureProperty
        }
      />
    </div>
  );
}