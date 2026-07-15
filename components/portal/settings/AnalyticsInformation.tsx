"use client";

import { useFormContext } from "react-hook-form";

import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";

import {
  SettingsFormValues,
} from "@/lib/validations/settings";

export default function AnalyticsInformation() {
  const {
    register,
    formState: { errors },
  } =
    useFormContext<SettingsFormValues>();

  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        Analytics & Website Settings
      </h2>

      <p className="mt-2 text-slate-500 dark:text-slate-400">
        Configure analytics and website-wide settings.
      </p>

      <div className="mt-8 space-y-6">
        <div>
          <label className="mb-2 block font-semibold">
            Google Analytics ID
          </label>

          <Input
            {...register("googleAnalytics")}
            placeholder="G-XXXXXXXXXX"
          />

          {errors.googleAnalytics && (
            <p className="mt-2 text-sm text-red-600">
              {errors.googleAnalytics.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Search Console Verification
          </label>

          <Input
            {...register("searchConsole")}
            placeholder="Google verification code"
          />

          {errors.searchConsole && (
            <p className="mt-2 text-sm text-red-600">
              {errors.searchConsole.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Copyright
          </label>

          <Input
            {...register("copyright")}
            placeholder="© 2026 RSN Estates. All Rights Reserved."
          />

          {errors.copyright && (
            <p className="mt-2 text-sm text-red-600">
              {errors.copyright.message}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}