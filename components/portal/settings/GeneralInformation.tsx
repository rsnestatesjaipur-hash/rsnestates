"use client";

import { useFormContext } from "react-hook-form";

import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";

import {
  SettingsFormValues,
} from "@/lib/validations/settings";

export default function GeneralInformation() {
  const {
    register,
    formState: { errors },
  } =
    useFormContext<SettingsFormValues>();

  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        General Information
      </h2>

      <p className="mt-2 text-slate-500 dark:text-slate-400">
        Configure your website branding.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
            Site Name
          </label>

          <Input
            {...register("siteName")}
            placeholder="RSN Estates"
          />

          {errors.siteName && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              {errors.siteName.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
            Tagline
          </label>

          <Input
            {...register("tagline")}
            placeholder="Find Your Dream Property"
          />

          {errors.tagline && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              {errors.tagline.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
            Logo URL
          </label>

          <Input
            {...register("logo")}
            placeholder="https://example.com/logo.png"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
            Favicon URL
          </label>

          <Input
            {...register("favicon")}
            placeholder="https://example.com/favicon.ico"
          />
        </div>
      </div>
    </Card>
  );
}