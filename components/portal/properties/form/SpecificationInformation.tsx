"use client";

import { useFormContext } from "react-hook-form";

import Card from "@/components/ui/Card";
import Select from "@/components/ui/Select";

import ApartmentSpecifications from "./specifications/ApartmentSpecifications";
import VillaSpecifications from "./specifications/VillaSpecifications";
import PlotSpecifications from "./specifications/PlotSpecifications";
import CommercialSpecifications from "./specifications/CommercialSpecifications";

import { PropertyFormValues } from "@/lib/validations/property";

export default function SpecificationInformation() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<PropertyFormValues>();

  const propertyType = watch("propertyType");

  return (
    <Card className="p-8">
      {/* =====================================================
          Section Header
      ====================================================== */}

      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        Property Specifications
      </h2>

      <p className="mt-2 text-slate-500 dark:text-slate-400">
        Enter the specifications of this property.
      </p>

      {/* =====================================================
          Common Information
      ====================================================== */}

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {/* =====================================================
            Property Type
        ====================================================== */}

        <div>
          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
            Property Type
          </label>

          <Select {...register("propertyType")}>
            <option value="Apartment">
              Apartment
            </option>

            <option value="Villa">
              Villa
            </option>

            <option value="Plot">
              Plot
            </option>

            <option value="Commercial">
              Commercial
            </option>
          </Select>

          {errors.propertyType && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              {errors.propertyType.message}
            </p>
          )}
        </div>
      </div>

      {/* =====================================================
          Dynamic Specification Forms
          Each property type has its own dedicated specification
          component. Property Sub Type is now handled inside the
          respective forms (where applicable) to avoid duplicate
          data entry with Room Details.
      ====================================================== */}

      <div className="mt-8">
        {propertyType === "Apartment" && (
          <ApartmentSpecifications />
        )}

        {propertyType === "Villa" && (
          <VillaSpecifications />
        )}

        {propertyType === "Plot" && (
          <PlotSpecifications />
        )}

        {propertyType === "Commercial" && (
          <CommercialSpecifications />
        )}
      </div>
    </Card>
  );
}