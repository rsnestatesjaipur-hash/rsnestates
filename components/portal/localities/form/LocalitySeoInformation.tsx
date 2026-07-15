"use client";

import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";

import type { LocalityFormValues } from "@/lib/validations/locality";

export default function LocalitySeoInformation() {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<LocalityFormValues>();

  const [autoSeo, setAutoSeo] =
    useState(true);

  // =====================================================
  // Watch Form Fields
  // =====================================================

  const localityName =
    watch("name");

  const shortDescription =
    watch("shortDescription");

  const propertyTypes =
    watch("propertyTypes");

  const seoTitle =
    watch("seoTitle");

  const seoDescription =
    watch("seoDescription");

  // =====================================================
  // Auto Generate SEO
  // =====================================================

  useEffect(() => {
    if (!autoSeo) return;

    const locality =
      localityName?.trim() || "Jaipur";

    const propertyType =
      propertyTypes?.length
        ? propertyTypes.join(", ")
        : "Flats, Villas & Plots";

    const generatedTitle =
      `Property in ${locality}, Jaipur | RSN Estates`;

    let generatedDescription =
      shortDescription?.trim() ||
      `Explore property in ${locality}, Jaipur. Find ${propertyType}, price trends, nearby schools, hospitals, connectivity and investment opportunities with RSN Estates.`;

    if (
      generatedDescription.length >
      160
    ) {
      generatedDescription =
        generatedDescription.substring(
          0,
          157
        ) + "...";
    }

    setValue(
      "seoTitle",
      generatedTitle,
      {
        shouldValidate: true,
      }
    );

    setValue(
      "seoDescription",
      generatedDescription,
      {
        shouldValidate: true,
      }
    );
  }, [
    autoSeo,
    localityName,
    shortDescription,
    propertyTypes,
    setValue,
  ]);

  return (
    <Card className="p-8">
      {/* =====================================================
          Header
      ===================================================== */}

      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        SEO Information
      </h2>

      <p className="mt-2 text-slate-500 dark:text-slate-400">
        SEO metadata is generated automatically for better Google rankings.
      </p>

      {/* =====================================================
          Auto SEO Toggle
      ===================================================== */}

      <div className="mt-8 flex items-center gap-3 rounded-xl border border-slate-200 p-4 dark:border-slate-700">
        <input
          id="autoSeo"
          type="checkbox"
          checked={autoSeo}
          onChange={(e) =>
            setAutoSeo(
              e.target.checked
            )
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
        {/* =====================================================
            SEO Title
        ===================================================== */}

        <div>
          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-300">
            SEO Title
          </label>

          <Input
            {...register("seoTitle")}
            readOnly={autoSeo}
            placeholder="SEO Title"
            className={
              autoSeo
                ? "bg-slate-100 dark:bg-slate-800"
                : ""
            }
          />

          <p className="mt-2 text-xs text-slate-500">
            {seoTitle?.length || 0}/60 Characters
          </p>

          {errors.seoTitle && (
            <p className="mt-2 text-sm text-red-600">
              {errors.seoTitle.message}
            </p>
          )}
        </div>

        {/* =====================================================
            SEO Description
        ===================================================== */}

        <div>
          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-300">
            SEO Description
          </label>

          <Textarea
            rows={5}
            {...register(
              "seoDescription"
            )}
            readOnly={autoSeo}
            placeholder="SEO Description"
            className={
              autoSeo
                ? "bg-slate-100 dark:bg-slate-800"
                : ""
            }
          />

          <p className="mt-2 text-xs text-slate-500">
            {seoDescription?.length || 0}/160 Characters
          </p>

          {errors.seoDescription && (
            <p className="mt-2 text-sm text-red-600">
              {
                errors.seoDescription
                  .message
              }
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}