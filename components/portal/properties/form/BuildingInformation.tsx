"use client";

import { useFormContext } from "react-hook-form";

import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

import { PropertyFormValues } from "@/lib/validations/property";

export default function BuildingInformation() {
  const {
    register,
    formState: { errors },
  } = useFormContext<PropertyFormValues>();

  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        Building Details
      </h2>

      <p className="mt-2 text-slate-500 dark:text-slate-400">
        Enter the building and interior details.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Floor Number */}

        <div>
          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
            Floor Number
          </label>

          <Input
            type="number"
            {...register("floorNumber", {
              valueAsNumber: true,
            })}
            placeholder="5"
          />

          {errors.floorNumber && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              {errors.floorNumber.message}
            </p>
          )}
        </div>

        {/* Total Floors */}

        <div>
          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
            Total Floors
          </label>

          <Input
            type="number"
            {...register("totalFloors", {
              valueAsNumber: true,
            })}
            placeholder="12"
          />

          {errors.totalFloors && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              {errors.totalFloors.message}
            </p>
          )}
        </div>

        {/* Parking */}

        <div>
          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
            Parking Spaces
          </label>

          <Input
            type="number"
            {...register("parkingSpaces", {
              valueAsNumber: true,
            })}
            placeholder="2"
          />

          {errors.parkingSpaces && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              {errors.parkingSpaces.message}
            </p>
          )}
        </div>

        {/* Furnishing */}

        <div>
          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
            Furnishing
          </label>

          <Select {...register("furnishing")}>
            <option value="">Select</option>
            <option value="Unfurnished">
              Unfurnished
            </option>
            <option value="Semi Furnished">
              Semi Furnished
            </option>
            <option value="Fully Furnished">
              Fully Furnished
            </option>
          </Select>
        </div>

        {/* Facing */}

        <div>
          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
            Facing
          </label>

          <Select {...register("facing")}>
            <option value="">Select</option>
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="East">East</option>
            <option value="West">West</option>
            <option value="North-East">North-East</option>
            <option value="North-West">North-West</option>
            <option value="South-East">South-East</option>
            <option value="South-West">South-West</option>
          </Select>
        </div>

        {/* Property Age */}

        <div>
          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
            Property Age
          </label>

          <Select {...register("propertyAge")}>
            <option value="">Select</option>
            <option value="New">New</option>
            <option value="0-1 Years">0–1 Years</option>
            <option value="1-5 Years">1–5 Years</option>
            <option value="5-10 Years">5–10 Years</option>
            <option value="10+ Years">10+ Years</option>
          </Select>
        </div>
      </div>
    </Card>
  );
}