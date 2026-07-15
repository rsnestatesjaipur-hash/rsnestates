"use client";

import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

import { PropertyFormValues } from "@/lib/validations/property";

export default function CommercialSpecifications() {
  const { register, setValue } = useFormContext<PropertyFormValues>();

  useEffect(() => {
    setValue("areaUnit", "Sq.Ft");
  }, [setValue]);

  return (
    <div className="space-y-10">
      {/* ================================================
          Area Details
      ================================================ */}

      <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-700">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Area Details
        </h3>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
              Built-up Area
            </label>

            <div className="flex items-center gap-3">
              <Input
                type="number"
                {...register("area", {
                  setValueAs: (value) =>
                    value === "" ? 0 : Number(value),
                })}
                placeholder="e.g. 1200"
              />

              <span className="whitespace-nowrap font-semibold text-slate-600 dark:text-slate-300">
                Sq.ft
              </span>
            </div>
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
              Carpet Area
            </label>

            <div className="flex items-center gap-3">
              <Input
                type="number"
                {...register("carpetArea", {
                  valueAsNumber: true,
                })}
                placeholder="e.g. 950"
              />

              <span className="whitespace-nowrap font-semibold text-slate-600 dark:text-slate-300">
                Sq.ft
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================
          Property Status
      ================================================ */}

      <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-700">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Property Status
        </h3>

        <div className="mt-6">
          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
            Status
          </label>

          <Select {...register("propertyStatus")}>
            <option value="Ready to Move">Ready to Move</option>

            <option value="Under Construction">Under Construction</option>

            <option value="New Launch">New Launch</option>

            <option value="Resale">Resale</option>

            <option value="Sold Out">Sold Out</option>
          </Select>
        </div>
      </div>

      {/* ================================================
          Commercial Details
      ================================================ */}

      <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-700">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Commercial Details
        </h3>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
              Commercial Type
            </label>

            <Select {...register("commercialType")}>
              <option value="">Select Type</option>

              <option value="Office">Office</option>

              <option value="Shop">Shop</option>

              <option value="Showroom">Showroom</option>

              <option value="Warehouse">Warehouse</option>

              <option value="Industrial Shed">Industrial Shed</option>

              <option value="Commercial Land">Commercial Land</option>

              <option value="Co-working Space">Co-working Space</option>
            </Select>
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
              Floor Number
            </label>

            <Input
              type="number"
              {...register("floorNumber", {
                valueAsNumber: true,
              })}
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
              Total Floors
            </label>

            <Input
              type="number"
              {...register("totalFloors", {
                valueAsNumber: true,
              })}
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
              Washrooms
            </label>

            <Input
              type="number"
              {...register("bathrooms", {
                valueAsNumber: true,
              })}
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
              Washroom Type
            </label>

            <Select {...register("washroomType")}>
              <option value="Private">Private</option>

              <option value="Shared">Shared</option>
            </Select>
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
              Covered Parking
            </label>

            <Input
              type="number"
              {...register("coveredParking", {
                valueAsNumber: true,
              })}
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
              Open Parking
            </label>

            <Input
              type="number"
              {...register("openParking", {
                valueAsNumber: true,
              })}
            />
          </div>
        </div>
      </div>

      {/* ================================================
          Project Information
      ================================================ */}

      <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-700">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Project Information
        </h3>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Input {...register("projectName")} placeholder="Project Name" />

          <Input
            {...register("builderName")}
            placeholder="Builder / Developer"
          />
        </div>
      </div>
    </div>
  );
}
