"use client";

import { useFormContext } from "react-hook-form";

import Card from "@/components/ui/Card";

import { PortalRole } from "@/lib/config/portal-navigation";
import { PropertyFormValues } from "@/lib/validations/property";

// =====================================================
// Props
// =====================================================

interface PublishInformationProps {
  title?: string;

  role: PortalRole | null;

  canFeatureProperty: boolean;
}

// =====================================================
// Component
// =====================================================

export default function PublishInformation({
  title,
  role,
  canFeatureProperty,
}: PublishInformationProps) {
  const { register } =
    useFormContext<PropertyFormValues>();
    
console.log(
  "Role:",
  role,
  "Can Feature:",
  canFeatureProperty
);

  const showFeaturedProperty =
    role === "admin" ||
    (role === "user" &&
      canFeatureProperty);

  return (
    <Card className="p-8">
      {/* ============================================
          Header
      ============================================ */}

      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        Publish Settings
      </h2>

      <p className="mt-2 text-slate-500 dark:text-slate-400">
        Control the visibility of this property.
      </p>

      {/* ============================================
          Settings
      ============================================ */}

      <div className="mt-8 space-y-5">
        {/* ========================================
            Featured Property
        ======================================== */}

      <input
        type="hidden"
        {...register("featured")}
      />

      {showFeaturedProperty && (
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            {...register("featured")}
            className="h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-800"
          />

          <span className="font-medium text-slate-700 dark:text-slate-200">
            {title ??
              "Featured Property"}
          </span>
        </label>
      )}

        {/* ========================================
            Publish Immediately
        ======================================== */}

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            {...register("published")}
            className="h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-800"
          />

          <span className="font-medium text-slate-700 dark:text-slate-200">
            Publish Immediately
          </span>
        </label>
      </div>
    </Card>
  );
}