"use client";

import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

import Select from "@/components/ui/Select";

import Input from "@/components/ui/Input";

import { PropertyFormValues } from "@/lib/validations/property";

export default function ApartmentSpecifications() {
    const {
    register,
    setValue,
    } = useFormContext<PropertyFormValues>();

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

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
              Super Built-up Area
            </label>

            <div className="flex items-center gap-3">
            <Input
                type="number"
                {...register("area", {
                valueAsNumber: true,
                })}
                placeholder="e.g. 1850"
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
                placeholder="e.g. 1550"
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
                  Project Information
              ================================================ */}

              <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Project Information
                </h3>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
                      Project Name
                    </label>

                    <Input
                      {...register("projectName")}
                      placeholder="e.g. Manglam Radiance"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
                      Builder / Developer
                    </label>

                    <Input
                      {...register("builderName")}
                      placeholder="e.g. Manglam Group"
                    />
                  </div>
                </div>
              </div>

{/* ================================================
    Configuration
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
        <option value={0}>
          Studio Apartment
        </option>

        <option value={1}>
          1 BHK
        </option>

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
          6+ BHK
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
        placeholder="2"
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
        placeholder="2"
      />
    </div>
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
              Floor Number
            </label>

            <Input
              type="number"
              {...register("floorNumber", {
                valueAsNumber: true,
              })}
              placeholder="e.g. 5"
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
              placeholder="e.g. 12"
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
              placeholder="e.g. 1"
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
              placeholder="e.g. 1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}