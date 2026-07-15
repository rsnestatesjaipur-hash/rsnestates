import PropertyBreadcrumb from "@/components/property/PropertyBreadcrumb";
import PropertyFilters from "@/components/property/PropertyFilters";
import PropertyGrid from "@/components/property/PropertyGrid";
import PropertyPagination from "@/components/property/PropertyPagination";
import PropertyStats from "@/components/property/PropertyStats";
import PropertyToolbar from "@/components/property/PropertyToolbar";

import { getAllProperties } from "@/lib/repositories/propertyRepository";
import { getAllLocalities } from "@/lib/repositories/localityRepository";

// =====================================================
// Types
// =====================================================

interface PropertiesPageProps {
  searchParams: Promise<{
    transaction?: string;
    type?: string;
    subType?: string;
    locality?: string;
    min?: string;
    max?: string;
    bedrooms?: string;
  }>;
}

// =====================================================
// Page
// =====================================================

export default async function PropertiesPage({
  searchParams,
}: PropertiesPageProps) {
  const params = await searchParams;

  // ===================================================
  // Load Data
  // ===================================================

  const allProperties =
    (await getAllProperties()) ?? [];

  const localities =
    (await getAllLocalities(true)) ?? [];

  // ===================================================
  // Working Copy
  // ===================================================

  let properties = [...allProperties];

  // ===================================================
  // Transaction Type
  // ===================================================

  if (params.transaction) {
    properties = properties.filter(
      (property) =>
        property.transactionType.toLowerCase() ===
        params.transaction!.toLowerCase()
    );
  }

// ===================================================
// Property Type
// ===================================================

if (params.type) {
  properties = properties.filter(
    (property) =>
      property.propertyType ===
      params.type
  );
}

// ===================================================
// Property Sub Type
// ===================================================

if (params.subType) {
  properties = properties.filter(
    (property) =>
      property.propertySubType ===
      params.subType
  );
}

  // ===================================================
  // Locality
  // ===================================================

  if (params.locality) {
    properties = properties.filter(
      (property) =>
        property.locality ===
        params.locality
    );
  }

  // ===================================================
  // Minimum Price
  // ===================================================

  if (params.min) {
    properties = properties.filter(
      (property) =>
        property.price >=
        Number(params.min)
    );
  }

  // ===================================================
  // Maximum Price
  // ===================================================

  if (params.max) {
    properties = properties.filter(
      (property) =>
        property.price <=
        Number(params.max)
    );
  }

  // ===================================================
  // Render
  // ===================================================

  console.log(
  properties.slice(0, 10).map((p) => ({
    title: p.title,
    bedrooms: p.bedrooms,
    subType: p.propertySubType,
  }))
);

  return (
    <>
      <PropertyBreadcrumb />

      <PropertyFilters
        localities={localities}
      />

      <PropertyStats
        totalProperties={properties.length}
      />

      <PropertyToolbar
        totalProperties={properties.length}
      />

      <PropertyGrid
        properties={properties}
      />

      <PropertyPagination />
    </>
  );
}