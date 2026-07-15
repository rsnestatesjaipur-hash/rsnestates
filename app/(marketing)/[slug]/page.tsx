import { notFound } from "next/navigation";
import type { Metadata } from "next";

import PropertyCard from "@/components/properties/PropertyCard";
import LocalityOverview from "@/components/programmatic/LocalityOverview";
import NearbyLocalities from "@/components/programmatic/NearbyLocalities";
import Hero from "@/components/programmatic/Hero";
import WhyInvest from "@/components/programmatic/WhyInvest";
import FaqSection from "@/components/programmatic/FaqSection";
import RelatedSearches from "@/components/programmatic/RelatedSearches";
import { generateFaqs } from "@/lib/utils/generateFaqs";
import CallToAction from "@/components/programmatic/CallToAction";
import {
  getAllProperties,
} from "@/lib/data/properties";

import {
  getPublishedLocalities,
} from "@/lib/data/localities";

import {
  generateProgrammaticRoutes,
} from "@/lib/utils/programmaticRoutes";

import {
getProperties,
} from "@/lib/data/properties";

import {
  getLocalityBySlug,
  getNearbyLocalities,
} from "@/lib/data/localities";

import {
parseProgrammaticSlug,
} from "@/lib/utils/programmatic";

interface PageProps {
params: Promise<{
slug: string;
}>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } =
    await params;

  const page =
    parseProgrammaticSlug(
      slug
    );

  if (
    !page ||
    !page.localitySlug
  ) {
    return {
      title:
        "Page Not Found",
    };
  }

  return {
    title:
      `${page.title} | RSN Estates`,

    description:
      page.description,

    alternates: {
      canonical: `https://rsnestates.com/${slug}`,
    },

    openGraph: {
      title:
        page.title,

      description:
        page.description,

      url: `https://rsnestates.com/${slug}`,

      siteName:
        "RSN Estates",

      type:
        "website",
    },

    twitter: {
      card:
        "summary_large_image",

      title:
        page.title,

      description:
        page.description,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export async function generateStaticParams() {
  const localities =
    await getPublishedLocalities();

  const properties =
    await getAllProperties();

  console.log(
    "Properties:",
    properties.slice(0, 10)
  );

  const routes =
    localities.flatMap(
      (locality) => {
        const localityProperties =
          properties.filter(
            (property: any) =>
              property.localitySlug ===
              locality.slug
          );

        return generateProgrammaticRoutes(
          locality.slug,
          localityProperties
        ).map((route) => ({
          slug: route.replace(
            /^\//,
            ""
          ),
        }));
      }
    );

  console.log(
    "Routes:",
    routes
      .slice(0, 100)
      .map(
        (route) =>
          route.slug
      )
  );

  return routes;
}

export default async function ProgrammaticPage({
  params,
}: PageProps) {
  const { slug } =
    await params;

  const page =
    parseProgrammaticSlug(
      slug
    );

  if (
    !page ||
    !page.localitySlug
  ) {
    notFound();
  }

  const locality =
    await getLocalityBySlug(
      page.localitySlug
    );

  if (!locality) {
    notFound();
  }

  page.title =
    page.title.replace(
      page.localitySlug.replace(
        /-/g,
        " "
      ),
      locality.name
    );

  const properties =
    await getProperties({
      propertyType:
        page.propertyType,

      transactionType:
        page.transactionType,

      localityId:
        locality.id,

      bedrooms:
        page.bedrooms,

      minPrice:
        page.minPrice,

      maxPrice:
        page.maxPrice,

      propertyStatus:
        page.propertyStatus,
    });

  if (
    properties.length === 0
  ) {
    notFound();
  }

  const nearbyLocalities =
    await getNearbyLocalities(
      locality.id
    );

  const faqs =
    generateFaqs({
      locality,

      propertyType:
        page.propertyType,

      bedrooms:
        page.bedrooms,
    });

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">

        {/* JSON-LD temporarily disabled */}

      <Hero
        title={page.title}
        description={
          page.description
        }
        propertyCount={
          properties.length
        }
        propertyType={
          page.propertyType
        }
        bedrooms={
          page.bedrooms
        }
      />

      <section
        className="mt-12"
      >
        <h2 className="mb-8 text-3xl font-bold">
          Available Properties
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map(
            (property) => (
              <PropertyCard
                key={
                  property.id
                }
                property={
                  property
                }
              />
            )
          )}
        </div>
      </section>

      <section
        className="mt-16"
      >
        <LocalityOverview
          locality={
            locality
          }
        />
      </section>

      <section
        className="mt-16"
      >
        <WhyInvest
          locality={
            locality
          }
          propertyType={
            page.propertyType
          }
        />
      </section>

      <section
        className="mt-16"
      >
        <FaqSection
          locality={
            locality
          }
          propertyType={
            page.propertyType
          }
          bedrooms={
            page.bedrooms
          }
        />
      </section>

      <section
        className="mt-16"
      >
        <RelatedSearches
          locality={
            locality
          }
        />
      </section>

      <section
        className="mt-16"
      >
        <NearbyLocalities
          localities={
            nearbyLocalities
          }
        />
      </section>

      <section
        className="mt-16"
      >
        <CallToAction
          locality={
            locality
          }
          propertyType={
            page.propertyType
          }
        />
      </section>

    </main>
  );
}