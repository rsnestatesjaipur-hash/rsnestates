import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getPropertyBySlug,
  getRelatedProperties,
} from "@/lib/data/properties";

import PropertyGallery from "@/components/property/PropertyGallery";
import PropertyBreadcrumb from "@/components/property/PropertyBreadcrumb";
import PropertyOverview from "@/components/property/PropertyOverview";
import PropertySpecifications from "@/components/property/PropertySpecifications";
import PropertyVideos from "@/components/property/PropertyVideos";
import PropertyContactCard from "@/components/property/PropertyContactCard";
import PropertySchema from "@/components/seo/PropertySchema";

const BASE_URL = "https://www.rsnestates.com";

interface PropertyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// =====================================================
// Dynamic SEO Metadata
// =====================================================

export async function generateMetadata({
  params,
}: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params;

  const property = await getPropertyBySlug(slug);

  if (!property) {
    return {
      title: "Property Not Found | RSN Estates",
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  const title = property.title
    ? `${property.title} | RSN Estates`
    : "Property for Sale in Jaipur | RSN Estates";

  const description = property.description
    ? property.description.slice(0, 160)
    : `View ${property.title || "this property"} for sale in ${property.locality || "Jaipur"}. Check property details, specifications, photos and availability with RSN Estates.`;

  const canonicalUrl = `${BASE_URL}/properties/${property.slug}`;

  const image =
    Array.isArray(property.images) &&
    property.images.length > 0
      ? property.images[0]
      : undefined;

  return {
    title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      type: "website",
      url: canonicalUrl,
      title,
      description,
      siteName: "RSN Estates",
      locale: "en_IN",
      ...(image && {
        images: [
          {
            url: image,
            alt: property.title || "Property for sale",
          },
        ],
      }),
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image && {
        images: [image],
      }),
    },
  };
}

// =====================================================
// Property Page
// =====================================================

export default async function PropertyPage({
  params,
}: PropertyPageProps) {
  const { slug } = await params;

  const property = await getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const relatedProperties = await getRelatedProperties(
    property.localityId,
    property.id
  );

  return (
    <>
      <PropertySchema property={property} />

      <PropertyBreadcrumb property={property} />

      <PropertyGallery property={property} />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[minmax(0,2fr)_350px]">
        <div className="space-y-10">
          <PropertyOverview property={property} />

          <PropertySpecifications property={property} />

          <PropertyVideos videos={property.videos} />
        </div>

        <div className="space-y-6">
          <PropertyContactCard
            propertyTitle={property.title}
            propertyId={property.id}
            propertySlug={property.slug}
            propertyStatus={property.propertyStatus}
          />
        </div>
      </div>
    </>
  );
}