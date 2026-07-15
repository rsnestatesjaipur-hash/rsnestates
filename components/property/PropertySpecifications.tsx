import {
  Building2,
  CheckCircle2,
  Home,
  MapPin,
  Ruler,
  ShieldCheck,
} from "lucide-react";

import type { Property } from "@/types";

interface PropertySpecificationsProps {
  property: Property;
}

export default function PropertySpecifications({
  property,
}: PropertySpecificationsProps) {
  const specifications =
    property.propertyType === "Commercial"
      ? [
          {
            label: "Floor",
            value:
              property.floorNumber ??
              "-",
            icon: Building2,
          },
          {
            label: "Washrooms",
            value: `${property.bathrooms} ${
              property.washroomType ??
              "Private"
            }`,
            icon: Home,
          },
          {
            label: "Area",
            value: `${property.area} ${property.areaUnit}`,
            icon: Ruler,
          },
          {
            label: "Locality",
            value: property.locality,
            icon: MapPin,
          },
          {
            label: "City",
            value: property.city,
            icon: Building2,
          },
        ]
      : [
          {
            label: "Bedrooms",
            value: property.bedrooms,
            icon: Home,
          },
          {
            label: "Bathrooms",
            value: property.bathrooms,
            icon: Home,
          },
          {
            label: "Area",
            value: `${property.area} ${property.areaUnit}`,
            icon: Ruler,
          },
          {
            label: "Locality",
            value: property.locality,
            icon: MapPin,
          },
          {
            label: "City",
            value: property.city,
            icon: Building2,
          },
        ];

  return (
    <section className="mt-10 space-y-10">
      {/* ================================================
          Specifications
      ================================================ */}

      <div className="rounded-3xl bg-white p-8 shadow-sm dark:bg-slate-900">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Specifications
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {specifications.map(
            (item) => {
              const Icon =
                item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-xl border border-slate-200 p-4 dark:border-slate-700"
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      size={20}
                      className="text-blue-600"
                    />

                    <span className="text-slate-500 dark:text-slate-400">
                      {item.label}
                    </span>
                  </div>

                  <span className="font-semibold text-slate-900 dark:text-white">
                    {item.value}
                  </span>
                </div>
              );
            }
          )}
        </div>
      </div>

      {/* ================================================
          Amenities
      ================================================ */}

      {property.amenities.length >
        0 && (
        <div className="rounded-3xl bg-white p-8 shadow-sm dark:bg-slate-900">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Amenities
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {property.amenities.map(
              (amenity) => (
                <div
                  key={amenity}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 dark:border-slate-700"
                >
                  <CheckCircle2
                    size={20}
                    className="text-green-600"
                  />

                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    {amenity}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </section>
  );
}