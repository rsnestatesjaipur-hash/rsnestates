"use client";

import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { localitySchema, LocalityFormValues } from "@/lib/validations/locality";

import BasicInformation from "./BasicInformation";
import PricingInformation from "./PricingInformation";
import FacilitiesInformation from "./FacilitiesInformation";
import HighlightsInformation from "./HighlightsInformation";

import ImageUploader from "@/components/portal/common/ImageUploader";
import LocalitySeoInformation from "./LocalitySeoInformation";
import PublishInformation from "@/components/portal/common/PublishInformation";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import {
  createLocality,
  updateLocality,
} from "@/app/actions/locality-actions";
import { uploadImages } from "@/lib/supabase/uploadImages";

interface LocalityFormProps {
  mode?: "create" | "edit";
  localityId?: number;
  initialData?: Partial<LocalityFormValues>;
}

export default function LocalityForm({
  mode = "create",
  localityId,
  initialData,
}: LocalityFormProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [existingImages, setExistingImages] =
  useState<string[]>(
    initialData?.images ?? []
  );
  const [deletedImages, setDeletedImages] = useState<string[]>([]);

const methods = useForm<LocalityFormValues>({
  resolver: zodResolver(localitySchema),

defaultValues: {
  // =====================================================
  // Basic Information
  // =====================================================

  name: "",
  slug: "",

  shortDescription: "",
  description: "",

  // =====================================================
  // Images
  // =====================================================

  heroImage: "",
  images: [],

  // =====================================================
  // Pricing
  // =====================================================

  apartmentPrice: "",
  villaPrice: "",
  plotPrice: "",
  commercialPrice: "",

  // =====================================================
  // Investment
  // =====================================================

  investmentRating: 5,
  livabilityRating: 5,

  rentalYield: "",
  futureGrowth: "",
  whyInvest: "",

  // =====================================================
  // Facilities
  // =====================================================

  highlights: [],

  schools: [],
  hospitals: [],
  shopping: [],
  connectivity: [],

  propertyTypes: [],

  nearestMetro: "",
  nearestRailwayStation: "",
  nearestAirport: "",

  nearbyLandmarks: [],

  searchKeywords: [],

  // =====================================================
  // FAQ
  // =====================================================

  faqs: [],

  // =====================================================
  // SEO
  // =====================================================

  seoTitle: "",
  seoDescription: "",

  // =====================================================
  // Publish
  // =====================================================

  featured: false,
  published: true,

  ...initialData,
},
});

useEffect(() => {
  if (!initialData) return;

methods.reset({
  // =====================================================
  // Basic Information
  // =====================================================

  name: "",
  slug: "",

  shortDescription: "",
  description: "",

  // =====================================================
  // Images
  // =====================================================

  heroImage: "",
  images: [],

  // =====================================================
  // Pricing
  // =====================================================

  apartmentPrice: "",
  villaPrice: "",
  plotPrice: "",
  commercialPrice: "",

  // =====================================================
  // Investment
  // =====================================================

  investmentRating: 5,
  livabilityRating: 5,

  rentalYield: "",
  futureGrowth: "",
  whyInvest: "",

  // =====================================================
  // Facilities
  // =====================================================

  highlights: [],

  schools: [],
  hospitals: [],
  shopping: [],
  connectivity: [],

  propertyTypes: [],

  nearestMetro: "",
  nearestRailwayStation: "",
  nearestAirport: "",

  nearbyLandmarks: [],

  searchKeywords: [],

  // =====================================================
  // FAQ
  // =====================================================

  faqs: [],

  // =====================================================
  // SEO
  // =====================================================

  seoTitle: "",
  seoDescription: "",

  // =====================================================
  // Publish
  // =====================================================

  featured: false,
  published: true,

  ...initialData,
});

  setExistingImages(
    initialData.images ?? []
  );
}, [initialData, methods]);


const router = useRouter();

const [isSubmitting, setIsSubmitting] =
  useState(false);

const [uploadProgress, setUploadProgress] =
  useState(0);

async function onSubmit(
  data: LocalityFormValues
) {

  console.log("Form Data:", data);

  try {
    setIsSubmitting(true);

    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (key === "images") return;

      if (Array.isArray(value)) {
        value.forEach((item) => {
          formData.append(key, String(item));
        });
      } else {
        formData.append(key, String(value));
      }
    });

    console.log(
      Array.from(formData.entries())
    );

    let uploadedUrls: string[] = [];

    if (files.length > 0) {
      toast.loading("Uploading images...", {
        id: "locality-upload",
      });

      uploadedUrls = await uploadImages(
        files,
        setUploadProgress
      );

      toast.success("Images uploaded.", {
        id: "locality-upload",
      });
    }

    const finalImages = [
      ...existingImages.filter(
        (image) => !deletedImages.includes(image)
      ),
      ...uploadedUrls,
    ];

finalImages.forEach((url) => {
  formData.append("images", url);
});

formData.set(
  "heroImage",
  finalImages[0] ?? ""
);

console.log(
  "heroImage",
  formData.get("heroImage")
);

console.log(
  "images",
  formData.getAll("images")
);

const result =
  mode === "edit" && localityId
    ? await updateLocality(
        localityId,
        formData
      )
    : await createLocality(
        formData
      );

    if (!result.success) {
      toast.error(
        result.message ??
          "Failed to create locality."
      );

      return;
    }

    toast.success(
      mode === "edit"
        ? "Locality updated successfully!"
        : "Locality created successfully!"
    );

if (mode === "create") {
  methods.reset();

  setFiles([]);
  setExistingImages([]);
  setDeletedImages([]);
}

console.log(
  "Navigating to /portal/localities..."
);

router.replace("/portal/localities");

  } catch (error) {
      console.error(
    "onSubmit failed:",
    error
  );

    toast.error(
      "Failed to save locality."
    );
  } finally {
    setUploadProgress(0);
    setIsSubmitting(false);
  }
}

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <BasicInformation />

        <PricingInformation />

        <FacilitiesInformation />

        <HighlightsInformation />

        <ImageUploader
          title="Locality Images"
          description="Upload hero and gallery images."
          files={files}
          existingImages={existingImages}
          deletedImages={deletedImages}
          onFilesChange={setFiles}
          onExistingImagesChange={setExistingImages}
          onDeletedImagesChange={setDeletedImages}
        />

        <LocalitySeoInformation />

      <PublishInformation
        role="admin"
        canFeatureProperty={true}
      />

        <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-xl bg-slate-900 px-8 py-3 font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-blue-600 dark:hover:bg-blue-500"
        >
            {isSubmitting
            ? uploadProgress > 0
              ? `Uploading ${uploadProgress}%`
              : "Saving..."
            : "Save Locality"}
          </button>
        </div>
      </form>
    </FormProvider>
  );
}