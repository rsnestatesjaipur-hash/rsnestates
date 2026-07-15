"use client";

import { useFormContext } from "react-hook-form";

import Card from "@/components/ui/Card";
import type { LocalityFormValues } from "@/lib/validations/locality";

interface FieldProps {
  title: string;

  name:
    | "schools"
    | "hospitals"
    | "shopping"
    | "connectivity"
    | "propertyTypes"
    | "nearbyLandmarks"
    | "searchKeywords";

  placeholder: string;
}

function MultiLineField({
  title,
  name,
  placeholder,
}: FieldProps) {
  const {
    watch,
    setValue,
  } = useFormContext<LocalityFormValues>();

  const value = (watch(name) ?? []).join("\n");

  return (
    <div>
      <label className="mb-2 block text-lg font-semibold text-slate-900 dark:text-white">
        {title}
      </label>

      <textarea
        rows={6}
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          const items = e.target.value
            .split("\n")
            .map((item) => item.trim())
            .filter(Boolean);

          setValue(name, items, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
          });
        }}
        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
      />

      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        Enter one item per line.
      </p>
    </div>
  );
}

export default function FacilitiesInformation() {
  const { register } =
    useFormContext<LocalityFormValues>();

  return (
    <Card className="space-y-8 p-8">
      {/* =====================================================
          Header
      ===================================================== */}

      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Facilities & Connectivity
        </h2>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Enter nearby facilities, connectivity information, landmarks and
          supported property types for this locality.
        </p>
      </div>

      {/* =====================================================
          Educational Institutions
      ===================================================== */}

      <MultiLineField
        title="Schools"
        name="schools"
        placeholder={`My Own School
St. Xavier's School
Seedling Public School`}
      />

      {/* =====================================================
          Healthcare
      ===================================================== */}

      <MultiLineField
        title="Hospitals"
        name="hospitals"
        placeholder={`Fortis Hospital
CK Birla Hospital
Manipal Hospital`}
      />

      {/* =====================================================
          Shopping & Entertainment
      ===================================================== */}

      <MultiLineField
        title="Shopping"
        name="shopping"
        placeholder={`World Trade Park
GT Central Mall
Triton Mall`}
      />

      {/* =====================================================
          Property Types
      ===================================================== */}

      <MultiLineField
        title="Property Types"
        name="propertyTypes"
        placeholder={`Apartments
Villas
Residential Plots
Commercial Spaces
Builder Floors`}
      />

      {/* =====================================================
          Road Connectivity
      ===================================================== */}

      <MultiLineField
        title="Connectivity"
        name="connectivity"
        placeholder={`Ajmer Road
Gandhi Path
Jaipur Ring Road
200 Ft. Bypass`}
      />

      {/* =====================================================
          Public Transport
      ===================================================== */}

      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <label className="mb-2 block text-lg font-semibold text-slate-900 dark:text-white">
            Nearest Metro
          </label>

          <input
            {...register("nearestMetro")}
            placeholder="Mansarovar Metro Station"
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-lg font-semibold text-slate-900 dark:text-white">
            Nearest Railway Station
          </label>

          <input
            {...register("nearestRailwayStation")}
            placeholder="Jaipur Junction"
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-lg font-semibold text-slate-900 dark:text-white">
            Nearest Airport
          </label>

          <input
            {...register("nearestAirport")}
            placeholder="Jaipur International Airport"
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />
        </div>
      </div>

      {/* =====================================================
          Nearby Landmarks
      ===================================================== */}

      <MultiLineField
        title="Nearby Landmarks"
        name="nearbyLandmarks"
        placeholder={`World Trade Park
Jaipur Exhibition & Convention Centre
Akshardham Temple`}
      />

      {/* =====================================================
          Search Keywords
      ===================================================== */}

      <MultiLineField
        title="Search Keywords"
        name="searchKeywords"
        placeholder={`Property in Vaishali Nagar
Flats in Vaishali Nagar
Plots in Vaishali Nagar
Villas in Vaishali Nagar
Commercial Property in Vaishali Nagar`}
      />
    </Card>
  );
}