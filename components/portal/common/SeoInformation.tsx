"use client";

import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";

import { PropertyFormValues } from "@/lib/validations/property";

export default function SeoInformation() {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<PropertyFormValues>();

  const [autoSeo, setAutoSeo] =
    useState(true);

  const title = watch("title");
  const description =
    watch("description");
  const propertyType =
    watch("propertyType");
  const bedrooms =
    watch("bedrooms");
  const localityId =
    watch("localityId");

  useEffect(() => {
    if (!autoSeo) return;

    // ============================================
    // Meta Title
    // ============================================

    let metaTitle = title?.trim() || "";

    if (metaTitle) {
      metaTitle += " | RSN Estates";
    }

    setValue("metaTitle", metaTitle, {
      shouldValidate: true,
    });

    // ============================================
    // Meta Description
    // ============================================

    let metaDescription = "";

    if (description?.trim()) {
      metaDescription =
        description.trim();
    } else {
      const propertyTypeText =
  propertyType?.toLowerCase() ??
  "property";

metaDescription = `Explore this ${bedrooms || ""} BHK ${propertyTypeText} in Jaipur. View price, specifications, photos and contact the seller on RSN Estates.`;
    }

    if (metaDescription.length > 160) {
      metaDescription =
        metaDescription.substring(
          0,
          157
        ) + "...";
    }

    setValue(
      "metaDescription",
      metaDescription,
      {
        shouldValidate: true,
      }
    );
  }, [
    autoSeo,
    title,
    description,
    propertyType,
    bedrooms,
    localityId,
    setValue,
  ]);

  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        SEO Information
      </h2>

      <p className="mt-2 text-slate-500 dark:text-slate-400">
        SEO is automatically generated for better search engine visibility.
      </p>

      {/* ============================================
          Auto SEO Toggle
      ============================================ */}

      <div className="mt-8 flex items-center gap-3 rounded-xl border border-slate-200 p-4 dark:border-slate-700">
        <input
          id="autoSeo"
          type="checkbox"
          checked={autoSeo}
          onChange={(e) =>
            setAutoSeo(e.target.checked)
          }
        />

        <label
          htmlFor="autoSeo"
          className="font-medium text-slate-700 dark:text-slate-200"
        >
          Auto Generate SEO
        </label>
      </div>

      <div className="mt-8 space-y-6">
        {/* ============================================
            Meta Title
        ============================================ */}

        <div>
          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
            Meta Title
          </label>

          <Input
            {...register("metaTitle")}
            readOnly={autoSeo}
            className={
              autoSeo
                ? "bg-slate-100 dark:bg-slate-800"
                : ""
            }
            placeholder="Meta Title"
          />

          <p className="mt-2 text-xs text-slate-500">
            {watch("metaTitle")?.length || 0}
            /60 Characters
          </p>

          {errors.metaTitle && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              {errors.metaTitle.message}
            </p>
          )}
        </div>

        {/* ============================================
            Meta Description
        ============================================ */}

        <div>
          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
            Meta Description
          </label>

          <Textarea
            rows={4}
            {...register(
              "metaDescription"
            )}
            readOnly={autoSeo}
            className={
              autoSeo
                ? "bg-slate-100 dark:bg-slate-800"
                : ""
            }
            placeholder="Meta Description"
          />

          <p className="mt-2 text-xs text-slate-500">
            {watch("metaDescription")
              ?.length || 0}
            /160 Characters
          </p>

          {errors.metaDescription && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              {
                errors.metaDescription
                  .message
              }
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}