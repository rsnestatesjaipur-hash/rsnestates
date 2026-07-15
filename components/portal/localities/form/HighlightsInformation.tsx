"use client";

import { useFormContext } from "react-hook-form";

import Card from "@/components/ui/Card";
import type { LocalityFormValues } from "@/lib/validations/locality";

export default function HighlightsInformation() {
  const {
    watch,
    setValue,
  } = useFormContext<LocalityFormValues>();

  const value = (watch("highlights") ?? []).join("\n");

  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        Locality Highlights
      </h2>

      <p className="mt-2 text-slate-500 dark:text-slate-400">
        Add the key selling points of this locality. Each line will automatically
        become a separate highlight.
      </p>


      <textarea
        rows={10}
        value={value}
        placeholder={`Premium Residential Area
Excellent Road Connectivity
Wide Roads & Green Spaces
High Investment Potential
Top Schools Nearby
Leading Hospitals
Shopping & Entertainment
Family Friendly Environment`}
        onChange={(e) => {
          const highlights = e.target.value
            .split("\n")
            .map((item) => item.trim())
            .filter(Boolean);

          setValue("highlights", highlights, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
          });
        }}
        className="mt-6 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
      />

      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        Enter one highlight per line. Empty lines are ignored automatically.
      </p>
    </Card>
  );
}