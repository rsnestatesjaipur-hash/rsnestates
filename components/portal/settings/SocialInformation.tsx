"use client";

import { useFormContext } from "react-hook-form";

import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";

import {
  SettingsFormValues,
} from "@/lib/validations/settings";

export default function SocialInformation() {
  const {
    register,
  } =
    useFormContext<SettingsFormValues>();

  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        Social Media
      </h2>

      <p className="mt-2 text-slate-500 dark:text-slate-400">
        Add links to your social media profiles.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-semibold">
            Facebook
          </label>

          <Input
            {...register("facebook")}
            placeholder="https://facebook.com/..."
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Instagram
          </label>

          <Input
            {...register("instagram")}
            placeholder="https://instagram.com/..."
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            LinkedIn
          </label>

          <Input
            {...register("linkedin")}
            placeholder="https://linkedin.com/company/..."
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            YouTube
          </label>

          <Input
            {...register("youtube")}
            placeholder="https://youtube.com/..."
          />
        </div>
      </div>
    </Card>
  );
}