"use client";

import { useEffect } from "react";
import {
  FieldValues,
  UseFormReturn,
} from "react-hook-form";

function generateSlug(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function usePropertyAutoGeneration<
  T extends FieldValues
>(methods: UseFormReturn<T>) {

  console.log("usePropertyAutoGeneration initialized");
  const {
    watch,
    setValue,
  } = methods;

const values = watch();

console.log(values);

const propertyType = values.propertyType;
const propertySubType =
  values.propertySubType;
const transactionType = values.transactionType;
const bedrooms = values.bedrooms;
const area = values.area;
const areaUnit = values.areaUnit;
const description = values.description;
const locality = values.locality;

  useEffect(() => {

    console.log("INSIDE useEffect");

    const transactionLabel =
  transactionType === "Sell"
    ? "Sale"
    : "Rent";

    let title = "";

    switch (propertyType) {
      case "Apartment":
        title = `${bedrooms || ""} BHK Apartment for ${transactionLabel}`;
        break;

      case "Villa":
        title = `${bedrooms || ""} BHK Villa for ${transactionLabel}`;
        break;

      case "Plot":
        title = `${
          area || ""
        } ${areaUnit} ${
          propertySubType || "Plot"
        } for ${transactionLabel}`;
        break;

      case "Commercial":
        title = `${area || ""} ${areaUnit} Commercial Property for ${transactionLabel}`;
        break;

      default:
        title = "";
    }

    if (locality?.trim()) {
        title = `${title} on ${locality.trim()}`;
      }

      title = title.trim();
    console.log("AUTO TITLE:", title);

    // Auto Title
    setValue("title" as any, title as any, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: false,
    });

    // Auto Slug
    setValue(
      "slug" as any,
      generateSlug(title) as any,
      {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: false,
      }
    );

    // Auto Meta Title
    setValue(
      "metaTitle" as any,
      `${title} | RSN Estates` as any,
      {
        shouldValidate: true,
      }
    );

    // Auto Meta Description
    let metaDescription =
      description?.trim() ||
      `Explore this ${title}. View price, specifications, amenities and contact the seller on RSN Estates.`;

    if (metaDescription.length > 160) {
      metaDescription =
        metaDescription.substring(
          0,
          157
        ) + "...";
    }

    setValue(
      "metaDescription" as any,
      metaDescription as any,
      {
        shouldValidate: true,
      }
    );
  }, [
    propertyType,
    propertySubType,
    transactionType,
    bedrooms,
    area,
    areaUnit,
    description,
    setValue,
  ]);
}