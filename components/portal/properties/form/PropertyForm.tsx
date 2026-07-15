"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { usePropertyAutoGeneration } from "@/hooks/usePropertyAutoGeneration";

import {
  createProperty,
  updateProperty,
} from "@/app/actions/property-actions";

import { uploadImages } from "@/lib/supabase/uploadImages";

import {
  propertySchema,
  PropertyFormValues,
} from "@/lib/validations/property";

import PropertyDescription from "./PropertyDescription";
import LocationInformation from "./LocationInformation";
import PricingInformation from "./PricingInformation";
import SpecificationInformation from "./SpecificationInformation";
import ImageUploader from "@/components/portal/common/ImageUploader";
import VideoInformation from "./VideoInformation";
import PublishInformation from "@/components/portal/common/PublishInformation";
import AmenitiesInformation from "./AmenitiesInformation";


interface PropertyFormProps {
  mode?: "create" | "edit";

  propertyId?: number;

  initialData?: Partial<PropertyFormValues>;

  localities: {
    id: number;
    name: string;
  }[];

  role: "admin" | "subadmin" | "user" | null;

  canFeatureProperty: boolean;
}

export default function PropertyForm({
  mode = "create",
  propertyId,
  initialData,
  localities,
  role,
  canFeatureProperty,
}: PropertyFormProps) {
  const router = useRouter();

  const [files, setFiles] = useState<File[]>([]);
  const [existingImages, setExistingImages] =
  useState<string[]>(
    initialData?.images ?? []
  );
  const [uploadProgress, setUploadProgress] =
    useState(0);

  const [isSubmitting, setIsSubmitting] =
    useState(false);
  
  const [deletedImages, setDeletedImages] =
  useState<string[]>([]);

  const methods = useForm<PropertyFormValues>({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      title: "",
      slug: "",
      description: "",

      propertyType: "Apartment",
      transactionType: "Sell",

      localityId: "",

    price: 0,

    securityDeposit: 0,

    area: 0,

    superBuiltupArea: 0,

    carpetArea: 0,

    plotArea: 0,

    areaUnit: "Sq.Ft",

    bedrooms: 0,
    bathrooms: 0,
    balconies: 0,

    floorNumber: 0,
    totalFloors: 0,

    coveredParking: 0,
    openParking: 0,

    length: 0,
    width: 0,
    roadWidth: 0,

    plotFacing: "",
    cornerPlot: false,

    gatedCommunity: false,

    privateGarden: false,
    privateTerrace: false,

    servantRoom: false,
    studyRoom: false,

    featured: false,
    published: true,

    metaTitle: "",
    metaDescription: "",

    youtubeVideos: [""],
    images: [],

    amenities: [],

      ...initialData,
    },
    mode: "onBlur",
  });

  console.log("Calling usePropertyAutoGeneration");
  usePropertyAutoGeneration(methods);

  const propertyType =
  methods.watch("propertyType");

const gatedCommunity =
  methods.watch("gatedCommunity");

  console.log(
  "Property:",
  propertyType,
  "Gated:",
  gatedCommunity
);

  async function onSubmit(
    data: PropertyFormValues
  ) {
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

      let uploadedUrls: string[] = [];

      if (files.length > 0) {
        toast.loading("Uploading images...", {
          id: "property-upload",
        });

        uploadedUrls = await uploadImages(
          files,
          setUploadProgress
        );

        toast.success("Images uploaded.", {
          id: "property-upload",
        });
      }

      existingImages.forEach((url) => {
        formData.append("images", url);
      });

      uploadedUrls.forEach((url) => {
        formData.append("images", url);
      });

      console.log("Submitting Property:", data);

      const result =
        mode === "edit" && propertyId
          ? await updateProperty(
              propertyId,
              formData
            )
          : await createProperty(formData);

      if (!result.success) {
        toast.error(
          result.message ??
            (mode === "edit"
              ? "Failed to update property."
              : "Failed to create property.")
        );

        setIsSubmitting(false);
        return;
      }

      toast.success(
        mode === "edit"
          ? "Property updated successfully!"
          : "Property created successfully!"
      );

      if (mode === "create") {
        methods.reset();

        setFiles([]);
        setExistingImages([]);
      }

      setTimeout(() => {
        router.push("/portal/properties");
        router.refresh();
      }, 800);
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to upload one or more images."
      );
    } finally {
      setUploadProgress(0);
      setIsSubmitting(false);
    }
  }

  return (
    <FormProvider {...methods}>
    <form
      onSubmit={methods.handleSubmit(
        onSubmit,
          (errors) => {
            console.log("========== EDIT FORM ERRORS ==========");

            console.log(errors);

            Object.entries(errors).forEach(([field, error]) => {
              console.log(
                field,
                error?.message,
                methods.getValues(field as keyof PropertyFormValues)
              );
            });
          }
      )}
        className="space-y-8"
      >
          <SpecificationInformation />

          <LocationInformation
            localities={localities}
          />

          <PropertyDescription />

          <PricingInformation />

          {(propertyType === "Apartment" ||
            propertyType === "Villa" ||
            propertyType === "Commercial" ||
            (propertyType === "Plot" &&
              gatedCommunity)) && (
            <AmenitiesInformation />
          )}

          <ImageUploader
            title="Property Images"
            description="Upload one or more property images."
            files={files}
            existingImages={existingImages}
            deletedImages={deletedImages}
            onFilesChange={setFiles}
            onExistingImagesChange={setExistingImages}
            onDeletedImagesChange={setDeletedImages}
          />

          {uploadProgress > 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Uploading Images...
                </span>

                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {uploadProgress}%
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                <div
                  className="h-full rounded-full bg-blue-600 transition-all duration-300"
                  style={{
                    width: `${uploadProgress}%`,
                  }}
                />
              </div>
            </div>
          )}

          <VideoInformation />

          <PublishInformation
            role={role}
            canFeatureProperty={canFeatureProperty}
          />

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-xl bg-slate-900 px-8 py-3 font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-blue-600 dark:hover:bg-blue-500"
          >
            {isSubmitting
              ? uploadProgress > 0
                ? `Uploading ${uploadProgress}%`
                : mode === "edit"
                ? "Updating..."
                : "Saving..."
              : mode === "edit"
              ? "Update Property"
              : "Save Property"}
          </button>
        </div>
      </form>
    </FormProvider>
  );
}