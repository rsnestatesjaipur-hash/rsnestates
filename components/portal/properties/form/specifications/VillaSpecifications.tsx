"use client";

import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

import { PropertyFormValues } from "@/lib/validations/property";

export default function VillaSpecifications() {
  const {
    register,
    setValue,
  } = useFormContext<PropertyFormValues>();

  // Villas are always measured in Sq.ft
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
                  valueAsNumber: true,
                })}
                placeholder="e.g. 3200"
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
                placeholder="e.g. 2600"
              />

              <span className="whitespace-nowrap font-semibold text-slate-600 dark:text-slate-300">
                Sq.ft
              </span>
            </div>
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
              Plot Area
            </label>

            <div className="flex items-center gap-3">
              <Input
                type="number"
                {...register("plotArea", {
                  valueAsNumber: true,
                })}
                placeholder="e.g. 4200"
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
            <option value="Ready to Move">
              Ready to Move
            </option>

            <option value="Under Construction">
              Under Construction
            </option>

            <option value="New Launch">
              New Launch
            </option>

            <option value="Resale">
              Resale
            </option>

            <option value="Sold Out">
              Sold Out
            </option>
          </Select>
        </div>
      </div>

      {/* ================================================
          Room Details
      ================================================ */}

      <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-700">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Room Details
        </h3>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
              BHK
            </label>

            <Select
              {...register("bedrooms", {
                valueAsNumber: true,
              })}
            >
              <option value={2}>
                2 BHK
              </option>

              <option value={3}>
                3 BHK
              </option>

              <option value={4}>
                4 BHK
              </option>

              <option value={5}>
                5 BHK
              </option>

              <option value={6}>
                6 BHK
              </option>

              <option value={7}>
                7+ BHK
              </option>
            </Select>
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
              Bathrooms
            </label>

            <Input
              type="number"
              {...register("bathrooms", {
                valueAsNumber: true,
              })}
              placeholder="e.g. 4"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
              Balconies
            </label>

            <Input
              type="number"
              {...register("balconies", {
                valueAsNumber: true,
              })}
              placeholder="e.g. 3"
            />
          </div>
        </div>
      </div>

      {/* ================================================
          Parking Details
      ================================================ */}

      <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-700">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Parking Details
        </h3>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
              Covered Parking
            </label>

            <Input
              type="number"
              {...register("coveredParking", {
                valueAsNumber: true,
              })}
              placeholder="e.g. 2"
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
              placeholder="e.g. 2"
            />
          </div>
        </div>
      </div>

      {/* ================================================
          Outdoor Features
      ================================================ */}

      <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-700">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Outdoor Features
        </h3>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <label className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 dark:border-slate-700">
            <input
              type="checkbox"
              {...register("privateGarden")}
            />

            <span className="font-medium text-slate-700 dark:text-slate-200">
              Private Garden
            </span>
          </label>

          <label className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 dark:border-slate-700">
            <input
              type="checkbox"
              {...register("privateTerrace")}
            />

            <span className="font-medium text-slate-700 dark:text-slate-200">
              Private Terrace
            </span>
          </label>
        </div>
      </div>

      {/* ================================================
          Additional Rooms
      ================================================ */}

      <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-700">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Additional Rooms
        </h3>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <label className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 dark:border-slate-700">
            <input
              type="checkbox"
              {...register("servantRoom")}
            />

            <span className="font-medium text-slate-700 dark:text-slate-200">
              Servant Room
            </span>
          </label>

          <label className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 dark:border-slate-700">
            <input
              type="checkbox"
              {...register("studyRoom")}
            />

            <span className="font-medium text-slate-700 dark:text-slate-200">
              Study Room
            </span>
          </label>
        </div>
      </div>

      {/* ================================================
          Floor Details
      ================================================ */}

      <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-700">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Floor Details
        </h3>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
              Total Floors
            </label>

            <Input
              type="number"
              {...register("totalFloors", {
                valueAsNumber: true,
              })}
              placeholder="e.g. 2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}