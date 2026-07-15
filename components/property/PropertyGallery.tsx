"use client";

import { useState } from "react";
import type { Property } from "@/types";

interface PropertyGalleryProps {
  property: Property;
}

export default function PropertyGallery({
  property,
}: PropertyGalleryProps) {
  const images = property.images ?? [];

  const [selectedImage, setSelectedImage] =
    useState(0);

  const [isPortrait, setIsPortrait] =
    useState(false);

  const currentImage =
    images[selectedImage] ??
    property.featuredImage ??
    "";

  return (
    <section className="mb-10">
      {/* ============================================
          Main Image
      ============================================ */}

      <div className="flex h-[550px] items-center justify-center overflow-hidden rounded-3xl bg-slate-200 dark:bg-slate-800">
        {currentImage ? (
          <img
            src={currentImage}
            alt={property.title}
            onLoad={(e) => {
              const img =
                e.currentTarget;

              setIsPortrait(
                img.naturalHeight >
                  img.naturalWidth
              );
            }}
            className={
              isPortrait
                ? "max-h-full max-w-full object-contain"
                : "h-full w-full object-cover"
            }
          />
        ) : (
          <div className="flex h-full items-center justify-center text-3xl font-semibold text-slate-500 dark:text-slate-400">
            {property.title}
          </div>
        )}
      </div>

      {/* ============================================
          Thumbnails
      ============================================ */}

      {images.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() =>
                setSelectedImage(index)
              }
              className={`overflow-hidden rounded-2xl border-4 transition ${
                selectedImage === index
                  ? "border-blue-600"
                  : "border-transparent hover:border-slate-300 dark:hover:border-slate-600"
              }`}
            >
              <img
                src={image}
                alt={`${property.title} ${index + 1}`}
                className="h-32 w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}