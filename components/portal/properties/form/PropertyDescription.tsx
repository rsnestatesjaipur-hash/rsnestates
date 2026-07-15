"use client";

import { useFormContext } from "react-hook-form";

import Card from "@/components/ui/Card";
import Textarea from "@/components/ui/Textarea";

import { PropertyFormValues } from "@/lib/validations/property";

export default function PropertyDescription() {
  const {
    register,
    formState: { errors },
  } = useFormContext<PropertyFormValues>();

  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        Property Description
      </h2>

      <p className="mt-2 text-slate-500 dark:text-slate-400">
        Describe the property, its highlights, surroundings, amenities and anything buyers should know.
      </p>

      <div className="mt-8">
        <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
          Description
        </label>

        <Textarea
          rows={8}
          {...register("description")}
          placeholder="Write a detailed description of the property..."
        />

        {errors.description && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
            {errors.description.message}
          </p>
        )}
      </div>
    </Card>
  );
}