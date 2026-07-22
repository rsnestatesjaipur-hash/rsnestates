import Link from "next/link";

import Container from "../common/Container";
import Section from "../common/Section";

import { getProperties } from "@/lib/supabase/properties";

export default async function PropertyCategories() {
  const properties = await getProperties();

  /* =========================================================
     Normalize Property Types
     ---------------------------------------------------------
     Merge equivalent categories so they appear as a single
     card on the homepage.
     Example:
       - Plot / Land → Plot
  ========================================================= */

  const normalizedProperties = properties.map(
    (property) => ({
      ...property,
      property_type:
        property.property_type ===
        "Plot / Land"
          ? "Plot"
          : property.property_type,
    })
  );

  /* =========================================================
     Build Dynamic Property Types
  ========================================================= */

  const propertyTypes = Array.from(
    new Set(
      normalizedProperties.map(
        (property) => property.property_type
      )
    )
  )
    .filter(Boolean)
    .sort((a, b) => {
      const countA =
        normalizedProperties.filter(
          (property) =>
            property.property_type === a
        ).length;

      const countB =
        normalizedProperties.filter(
          (property) =>
            property.property_type === b
        ).length;

      return countB - countA;
    });

  /* =========================================================
     Category Icons
  ========================================================= */

  const getIcon = (type: string) => {
    switch (type) {
      case "Residential":
        return "🏠";

      case "Commercial":
        return "🏬";

      case "Plot":
        return "🌳";

      case "PG / Hostel":
        return "🛏️";

      default:
        return "🏡";
    }
  };

  return (
    <Section className="bg-white transition-colors dark:bg-slate-950">
      <Container>
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
            Browse by Category
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900 transition-colors dark:text-white">
            Find Properties by Type
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 transition-colors dark:text-slate-300">
            Choose the property category that best matches your lifestyle and
            investment goals.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {propertyTypes.map((type) => {
            const count =
              normalizedProperties.filter(
                (property) =>
                  property.property_type ===
                  type
              ).length;

            return (
              <Link
                key={type}
                href={`/properties?type=${encodeURIComponent(
                  type
                )}`}
                className="mx-auto block w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-slate-900 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 dark:hover:border-blue-500 dark:hover:shadow-slate-950/40"
              >
                <div className="text-6xl">
                  {getIcon(type)}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900 transition-colors dark:text-white">
                  {type}
                </h3>

                <p className="mt-3 text-slate-600 transition-colors dark:text-slate-300">
                  {count}{" "}
                  {count === 1
                    ? "Property"
                    : "Properties"}
                </p>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}