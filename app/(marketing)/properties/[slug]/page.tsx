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

interface PropertyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PropertyPage({
  params,
}: PropertyPageProps) {
  const { slug } = await params;

const property =
  await getPropertyBySlug(slug);

if (!property) {
  notFound();
}

console.log("================================================");
console.log("property.youtubeVideos =", property.youtubeVideos);
console.log("property.videos =", property.videos);
console.log("================================================");

const relatedProperties =
  await getRelatedProperties(
    property.localityId,
    property.id
  );

return (
  <>
    <PropertySchema
      property={property}
    />
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