import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { getLocalityBySlug } from "@/lib/repositories/localityRepository";
import { getAllProperties } from "@/lib/repositories/propertyRepository";

import PropertyCard from "@/components/cards/PropertyCard";
import LocalityOverview from "@/components/locality/LocalityOverview";
import LocalityFacilities from "@/components/locality/LocalityFacilities";
import LocalityPriceTrends from "@/components/locality/LocalityPriceTrends";
import WhyInvest from "@/components/locality/WhyInvest";
import LocalityFAQ from "@/components/locality/LocalityFAQ";
import LocalityQuickFacts from "@/components/locality/LocalityQuickFacts";

import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FaqSchema from "@/components/seo/FaqSchema";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

const BASE_URL = "https://www.rsnestates.com";

interface LocalityPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// =====================================================
// Dynamic Locality SEO Metadata
// =====================================================

export async function generateMetadata({
  params,
}: LocalityPageProps): Promise<Metadata> {
  const { slug } = await params;

  const locality = await getLocalityBySlug(slug);

  if (!locality) {
    return {
      title: "Locality Not Found | RSN Estates",
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  const title =
    `Property in ${locality.name}, Jaipur | RSN Estates`;

  const description =
    locality.description?.trim()?.slice(0, 160) ||
    `Explore properties for sale in ${locality.name}, Jaipur. View available properties, locality information, price trends, connectivity and investment opportunities with RSN Estates.`;

  const canonicalUrl =
    `${BASE_URL}/localities/${locality.slug}`;

  const image = locality.heroImage || undefined;

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
            alt: `${locality.name}, Jaipur`,
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
// Locality Page
// =====================================================

export default async function LocalityPage({
  params,
}: LocalityPageProps) {
  const { slug } = await params;

  const locality = await getLocalityBySlug(slug);

  if (!locality) {
    notFound();
  }

  const properties =
    (await getAllProperties()) ?? [];

  const localityProperties =
    properties.filter(
      (property: any) =>
        (property.locality ?? "")
          .toLowerCase()
          .trim() ===
        locality.name
          .toLowerCase()
          .trim()
    );

  const propertyTypes = [
    ...new Set(
      localityProperties.map(
        (property) => property.propertyType
      )
    ),
  ].join(", ");

  const city =
    localityProperties[0]?.city ?? "Jaipur";

  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: BASE_URL,
          },
          {
            name: "Localities",
            url: `${BASE_URL}/localities`,
          },
          {
            name: locality.name,
            url: `${BASE_URL}/localities/${locality.slug}`,
          },
        ]}
      />

      <FaqSchema
        faqs={[
          {
            question: "Is this locality a good place to invest?",
            answer:
              "Yes. This locality has witnessed steady infrastructure development, increasing demand and excellent long-term appreciation potential.",
          },
          {
            question: "What types of properties are available?",
            answer:
              "Apartments, villas, independent houses, residential plots and commercial properties are available in this locality.",
          },
          {
            question: "Is home loan assistance available?",
            answer:
              "Yes. RSN Estates can assist you in connecting with leading banks and financial institutions for home loans.",
          },
          {
            question: "Can I schedule a site visit?",
            answer:
              "Absolutely. You can submit an enquiry through our website and our property consultant will arrange a convenient site visit.",
          },
        ]}
      />

      <LocalBusinessSchema />

      <main className="mx-auto max-w-7xl px-6 py-12">
        <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link
            href="/"
            className="transition hover:text-slate-900 dark:hover:text-white"
          >
            Home
          </Link>

          <span>/</span>

          <Link
            href="/localities"
            className="transition hover:text-slate-900 dark:hover:text-white"
          >
            Localities
          </Link>

          <span>/</span>

          <span className="font-semibold text-slate-900 dark:text-white">
            {locality.name}
          </span>
        </nav>

        <div className="relative h-[450px] overflow-hidden rounded-3xl bg-slate-200 dark:bg-slate-800">
          {locality.heroImage ? (
            <Image
              src={locality.heroImage}
              alt={`${locality.name}, Jaipur`}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-4xl font-bold text-slate-500">
              {locality.name}
            </div>
          )}
        </div>

        <div className="mt-10">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white">
            Property in {locality.name}, Jaipur
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            {locality.description}
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-colors dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-950/40">
            <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-400">
              Available Properties
            </h3>

            <p className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">
              {localityProperties.length}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-colors dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-950/40">
            <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-400">
              Property Type
            </h3>

            <p className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
              {propertyTypes || "Properties"}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-colors dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-950/40">
            <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-400">
              City
            </h3>

            <p className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
              {city}
            </p>
          </div>
        </div>

        <LocalityQuickFacts
          locality={locality}
          propertyCount={localityProperties.length}
          propertyTypes={propertyTypes}
        />

        <LocalityOverview
          locality={locality}
          propertyCount={localityProperties.length}
          propertyTypes={propertyTypes}
        />

        <LocalityFacilities
          schools={locality.schools ?? []}
          hospitals={locality.hospitals ?? []}
          shopping={locality.shopping ?? []}
          connectivity={locality.connectivity ?? []}
        />

        <LocalityPriceTrends
          apartmentPrice={locality.apartmentPrice}
          villaPrice={locality.villaPrice}
          plotPrice={locality.plotPrice}
          commercialPrice={locality.commercialPrice}
        />

        <WhyInvest locality={locality} />

        <LocalityFAQ
          localityName={locality.name}
        />

        <section className="mt-20">
          <h2 className="mb-8 text-4xl font-bold text-slate-900 dark:text-white">
            Properties in {locality.name}
          </h2>

          {localityProperties.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {localityProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center transition-colors dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                No Properties Available Yet
              </h3>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                We are currently adding verified properties in{" "}
                <strong>{locality.name}</strong>. Meanwhile, you can explore the
                complete locality guide, compare price trends, nearby schools,
                hospitals, connectivity and investment potential.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Contact RSN Estates
                </Link>

                <Link
                  href="/properties"
                  className="rounded-xl border border-slate-300 px-8 py-3 font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800"
                >
                  Browse All Properties
                </Link>
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
}