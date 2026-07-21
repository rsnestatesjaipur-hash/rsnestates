"use client";

import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

import {
  calculateArea,
  formatArea,
} from "@/lib/utils/area";

import { PropertyFormValues } from "@/lib/validations/property";

export default function PlotSpecifications() {
  const {
    register,
    watch,
    setValue,
  } = useFormContext<PropertyFormValues>();

    const length = watch("length");
    const width = watch("width");
    const areaUnit = watch("areaUnit");

    const area = calculateArea(
      Number(length),
      Number(width)
    );

    useEffect(() => {
      setValue("area", area);
    }, [area, setValue]);

  return (
    <div className="space-y-10">
      {/* =====================================================
          Plot Dimensions
      ====================================================== */}

      <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-700">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Plot Dimensions
        </h3>

        <div className="mt-6 grid gap-6 md:grid-cols-3">

          <div>
            <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
              Area Unit
            </label>

            <Select {...register("areaUnit")}>
              <option value="Sq.Ft">Sq.Ft</option>
              <option value="Sq.Yd">Sq.Yd</option>
              <option value="Sq.Mt">Sq.Mt</option>
            </Select>
          </div>
          <div>
            <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
              Plot Length
            </label>

            <div className="flex">
              <Input
                type="number"
                {...register("length", {
                  valueAsNumber: true,
                })}
                placeholder="30"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
              Plot Width
            </label>

            <div className="flex">
              <Input
                type="number"
                {...register("width", {
                  valueAsNumber: true,
                })}
                placeholder="60"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-xl bg-slate-100 p-6 text-center dark:bg-slate-800">
          <p className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Calculated Area
          </p>

          <p className="mt-3 text-4xl font-bold text-blue-600 dark:text-blue-400">
            {formatArea(area)}
          </p>

          <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">
            {areaUnit}
          </p>

          {length > 0 && width > 0 && (
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              {length} × {width} {areaUnit}
            </p>
          )}
        </div>
      </div>
      
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
      {/* =====================================================
          Plot Details
      ====================================================== */}

      <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-700">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Plot Details
        </h3>

        <div>
          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
            Plot Type
          </label>

          <Select {...register("propertySubType")}>
            <option value="">
              Select Plot Type
            </option>

            <option value="Residential Plot">
              Residential Plot
            </option>

            <option value="Commercial Plot">
              Commercial Plot
            </option>

            <option value="Industrial Plot">
              Industrial Plot
            </option>

            <option value="Agricultural Land">
              Agricultural Land
            </option>

            <option value="Farm Land">
              Farm Land
            </option>

            <option value="Institutional Land">
              Institutional Land
            </option>

            <option value="Mixed Use Land">
              Mixed Use Land
            </option>
          </Select>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
              Facing
            </label>

            <Select {...register("plotFacing")}>
              <option value="">Select Plot Facing</option>
              <option>North</option>
              <option>South</option>
              <option>East</option>
              <option>West</option>
              <option>North-East</option>
              <option>North-West</option>
              <option>South-East</option>
              <option>South-West</option>
            </Select>
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
              Road Width (Ft)
            </label>

            <div className="flex">
              <Input
                type="number"
                {...register("roadWidth", {
                  valueAsNumber: true,
                })}
                placeholder="40"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 pt-9">
            <input
              type="checkbox"
              {...register("cornerPlot")}
            />

            <label className="font-medium text-slate-700 dark:text-slate-200">
              Is Corner Plot?
            </label>
          </div>

          <div className="flex items-center gap-3 pt-9">
            <input
              type="checkbox"
              {...register("gatedCommunity")}
            />

            <label className="font-medium text-slate-700 dark:text-slate-200">
              Inside Gated Township / Residential Project
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}