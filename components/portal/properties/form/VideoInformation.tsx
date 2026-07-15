"use client";

import { useFormContext } from "react-hook-form";

import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import { PropertyFormValues } from "@/lib/validations/property";

export default function VideoInformation() {
  const {
    register,
    formState: { errors },
  } = useFormContext<PropertyFormValues>();

  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        Property Videos
      </h2>

      <p className="mt-2 text-slate-500 dark:text-slate-400">
        Paste a YouTube video URL (optional).
      </p>

      <div className="mt-8">
        <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
          YouTube URL
        </label>

        <Input
          type="url"
          {...register("youtubeVideos.0")}
          placeholder="https://www.youtube.com/watch?v=..."
        />

        {errors.youtubeVideos?.[0] && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
            {errors.youtubeVideos[0]?.message}
          </p>
        )}
      </div>
    </Card>
  );
}