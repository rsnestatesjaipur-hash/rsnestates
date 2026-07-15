"use client";

import Link from "next/link";

// =====================================================
// Props
// =====================================================

interface PropertyCardProps {
  property: {
    id: number;

    slug: string;

    title: string;

    propertyType: string;

    locality: string;

    priceLabel: string;

    area: number;

    areaUnit: string;

    bedrooms: number;

    images: string[];

    is_demo?: boolean;
  };
}

// =====================================================
// Component
// =====================================================

export default function PropertyCard({
  property,
}: PropertyCardProps) {
  const image =
    property.images?.[0] ?? "";

  const configuration =
    property.propertyType === "Plot"
      ? "Plot"
      : property.bedrooms === 0
      ? "Studio Apartment"
      : `${property.bedrooms} BHK`;

  return (
    <Link
      href={`/property/${property.slug}`}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
    >
      {/* ============================================
          Property Image
      ============================================ */}

      <div className="aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
        {image ? (
          <img
            src={image}
            alt={property.title}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center px-6 text-center">
            <span className="text-lg font-semibold text-slate-600 dark:text-slate-300">
              {property.is_demo
                ? "Demo Listing"
                : "Property Image"}
            </span>

            {property.is_demo && (
              <span className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Real photos will be available soon.
              </span>
            )}
          </div>
        )}
      </div>

      {/* ============================================
          Property Details
      ============================================ */}

      <div className="space-y-3 p-5">
        <h3 className="line-clamp-2 text-lg font-bold text-slate-900 dark:text-white">
          {property.title}
        </h3>

        {/* ========================================
            Demo Badge
        ======================================== */}

        {property.is_demo && (
          <div>
            <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
              Demo Listing
            </span>
          </div>
        )}

        <p className="text-sm text-slate-500 dark:text-slate-400">
          {property.locality}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-semibold text-blue-600">
            {property.priceLabel}
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold dark:bg-slate-800">
            {configuration}
          </span>
        </div>

        <div className="text-sm text-slate-600 dark:text-slate-400">
          {property.area} {property.areaUnit}
        </div>
      </div>
    </Link>
  );
}