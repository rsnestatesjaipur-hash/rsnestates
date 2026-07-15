"use client";

import { useFormContext } from "react-hook-form";

import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

import { PropertyFormValues } from "@/lib/validations/property";

interface LocationInformationProps {
localities: {
id: number;
name: string;
}[];
}

export default function LocationInformation({
localities,
}: LocationInformationProps) {
const {
register,
formState: { errors },
} = useFormContext<PropertyFormValues>();

return (
<Card className="p-8">
<h2 className="text-2xl font-bold text-slate-900 dark:text-white">
Location Information
</h2>

  <p className="mt-2 text-slate-500 dark:text-slate-400">
    Enter where this property is located.
  </p>

  <div className="mt-8 space-y-6">
    {/* State */}

<div>
  <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
    State
  </label>

  <Input
    value="Rajasthan"
    readOnly
    className="cursor-not-allowed bg-slate-100 dark:bg-slate-800"
  />

  <input
    type="hidden"
    {...register("state")}
    value="Rajasthan"
  />
</div>

    {/* City */}

    <div>
      <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
        City
      </label>

      <Input
        value="Jaipur"
        readOnly
        className="cursor-not-allowed bg-slate-100 dark:bg-slate-800"
      />

      <input
        type="hidden"
        {...register("city")}
        value="Jaipur"
      />
    </div>

    {/* Locality */}

    <div>
      <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
        Locality
      </label>

      <Select {...register("localityId")}>
        <option value="">
          Select Locality
        </option>

        {localities.map((locality) => (
          <option
            key={locality.id}
            value={String(locality.id)}
          >
            {locality.name}
          </option>
        ))}
      </Select>

      {errors.localityId && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">
          {errors.localityId.message}
        </p>
      )}
    </div>
  </div>
</Card>

);
}