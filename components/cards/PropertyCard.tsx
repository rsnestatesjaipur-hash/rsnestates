"use client";

import { useState } from "react";
import Link from "next/link";

import type { Property } from "@/types";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({
  property,
}: PropertyCardProps) {
  const [isPortrait, setIsPortrait] =
    useState(false);

  return (
    <Link
      href={`/properties/${property.slug}`}
      className="block"
    >
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-950/40">
        {/* ============================================
            Property Image
        ============================================ */}

        <div className="flex h-64 items-center justify-center overflow-hidden bg-slate-200 transition-colors dark:bg-slate-700">
          {property.featuredImage ? (
            <img
              src={property.featuredImage}
              alt={property.title}
              onLoad={(e) => {
                const img =
                  e.currentTarget;

                setIsPortrait(
                  img.naturalHeight >
                    img.naturalWidth
                );
              }}
              className={`h-full w-full transition duration-300 hover:scale-105 ${
                isPortrait
                  ? "object-contain"
                  : "object-cover"
              }`}
            />
          ) : (
            <div className="flex h-full items-center justify-center text-slate-500 dark:text-slate-400">
              Property Image
            </div>
          )}
        </div>

        {/* ============================================
            Property Details
        ============================================ */}

        <div className="p-6">
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-500/20 dark:text-amber-300">
            {property.propertyType}
          </span>

          <h3 className="mt-4 text-2xl font-bold text-slate-900 transition-colors dark:text-white">
            {property.title}
          </h3>

          <p className="mt-2 text-slate-600 transition-colors dark:text-slate-300">
            {property.locality}, {property.city}
          </p>

          <p className="mt-3 text-slate-600 transition-colors dark:text-slate-300">
            {property.propertyType === "Plot"
              ? `${property.area} ${property.areaUnit}`
              : `${property.bedrooms} BHK • ${property.area} ${property.areaUnit}`}
          </p>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-2xl font-bold text-slate-900 transition-colors dark:text-white">
              {property.priceLabel}
            </span>

            <span className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500">
              View Details
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}