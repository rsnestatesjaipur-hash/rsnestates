"use client";

import { Controller, useFormContext } from "react-hook-form";
import Card from "@/components/ui/Card";
import type { PropertyFormValues } from "@/lib/validations/property";

const AMENITIES = [
  "Parking",
  "Lift",
  "Swimming Pool",
  "Gym",
  "Club House",
  "Garden",
  "Children's Play Area",
  "Security",
  "CCTV",
  "Power Backup",
  "Visitor Parking",
  "Balcony",
  "Terrace",
  "Modular Kitchen",
  "Furnished",
  "Air Conditioning",
  "Internet / WiFi",
  "Gas Pipeline",
  "Rain Water Harvesting",
  "Fire Safety",
];

export default function AmenitiesInformation() {
  const { control } =
    useFormContext<PropertyFormValues>();

    console.log("AmenitiesInformation Rendered");

  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        Amenities
      </h2>

      <p className="mt-2 text-slate-500 dark:text-slate-400">
        Select all amenities available with this property.
      </p>

      <Controller
        name="amenities"
        control={control}
        render={({ field }) => (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AMENITIES.map((amenity) => {
              const checked =
                field.value?.includes(amenity);

              return (
                <label
                  key={amenity}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${
                    checked
                      ? "border-blue-600 bg-blue-50 dark:border-blue-500 dark:bg-blue-950/20"
                      : "border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(event) => {
                      if (event.target.checked) {
                        field.onChange([
                          ...(field.value ?? []),
                          amenity,
                        ]);
                      } else {
                        field.onChange(
                          (field.value ?? []).filter(
                            (item) =>
                              item !== amenity
                          )
                        );
                      }
                    }}
                    className="h-5 w-5"
                  />

                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    {amenity}
                  </span>
                </label>
              );
            })}
          </div>
        )}
      />
    </Card>
  );
}