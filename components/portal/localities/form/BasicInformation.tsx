"use client";

import { useFormContext } from "react-hook-form";

import Card from "@/components/ui/Card";
import type { LocalityFormValues } from "@/lib/validations/locality";

export default function BasicInformation() {
  const {
    register,
    formState: { errors },
  } = useFormContext<LocalityFormValues>();

  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        Basic Information
      </h2>

      <p className="mt-2 text-slate-500 dark:text-slate-400">
        Enter the basic details of the locality.
      </p>

      <div className="mt-8 space-y-6">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
            Locality Name
          </label>

          <input
            {...register("name")}
            placeholder="e.g. Jagatpura"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />

          {errors.name && (
            <p className="mt-2 text-sm text-red-600">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
            Slug
          </label>

          <input
            {...register("slug")}
            placeholder="jagatpura"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />

          {errors.slug && (
            <p className="mt-2 text-sm text-red-600">
              {errors.slug.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
            Short Description
          </label>

          <textarea
            {...register("shortDescription")}
            rows={3}
            placeholder="A short summary displayed in cards and listings..."
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />

          {errors.shortDescription && (
            <p className="mt-2 text-sm text-red-600">
              {errors.shortDescription.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
            Description
          </label>

          <textarea
            {...register("description")}
            rows={8}
            placeholder="Detailed locality description..."
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />

          {errors.description && (
            <p className="mt-2 text-sm text-red-600">
              {errors.description.message}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}