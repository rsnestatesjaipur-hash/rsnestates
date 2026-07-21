import Link from "next/link";
import Container from "../common/Container";
import Section from "../common/Section";
import { getProperties } from "@/lib/supabase/properties";

const categories = [
  {
    title: "Apartments",
    type: "Apartment",
    icon: "🏢",
  },

  {
    title: "Villas",
    type: "Villa",
    icon: "🏡",
  },

  {
    title: "Plots",
    type: "Plot",
    icon: "🌳",
  },

  {
    title: "Commercial",
    type: "Commercial",
    icon: "🏬",
  },
];

export default async function PropertyCategories() {
  const properties = await getProperties();

  /* =========================================================
     TEMPORARY DIAGNOSTICS
  ========================================================= */

  console.log(
    "TOTAL PROPERTIES:",
    properties.length
  );

  console.log(
    "PROPERTY TYPES:",
    properties.map(
      (property) => property.property_type
    )
  );

  console.log(
    "CATEGORY COUNTS:",
    {
      Apartment: properties.filter(
        (property) =>
          property.property_type ===
          "Apartment"
      ).length,

      Villa: properties.filter(
        (property) =>
          property.property_type ===
          "Villa"
      ).length,

      Plot: properties.filter(
        (property) =>
          property.property_type ===
          "Plot"
      ).length,

      Commercial: properties.filter(
        (property) =>
          property.property_type ===
          "Commercial"
      ).length,
    }
  );

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
          {categories.map((category) => {
            const count = properties.filter(
              (property) =>
                property.property_type ===
                category.type
            ).length;

            return (
              <Link
                key={category.title}
                href={`/properties?type=${encodeURIComponent(
                  category.type
                )}`}
                className="mx-auto block w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-slate-900 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 dark:hover:border-blue-500 dark:hover:shadow-slate-950/40"
              >
                <div className="text-6xl">
                  {category.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900 transition-colors dark:text-white">
                  {category.title}
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