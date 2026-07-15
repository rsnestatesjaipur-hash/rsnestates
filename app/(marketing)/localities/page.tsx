import Link from "next/link";
import type { Locality } from "@/types";
import { getAllLocalities } from "@/lib/repositories/localityRepository";
import { getAllProperties } from "@/lib/repositories/propertyRepository";

export default async function LocalitiesPage() {
const localities =
  await getAllLocalities(true);

const properties =
  (await getAllProperties()) ?? [];

return (
<main className="mx-auto max-w-7xl px-6 py-12 transition-colors">
{/* Page Header */}
<div className="mb-12">
<h1 className="text-5xl font-bold tracking-tight text-slate-900 transition-colors dark:text-white">
Explore Jaipur's Best Localities
</h1>

    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 transition-colors dark:text-slate-300">
      Compare Jaipur&apos;s top residential and commercial neighbourhoods
      based on connectivity, lifestyle, nearby schools, hospitals,
      investment potential, and available properties to find the perfect
      location for your next home or investment.
    </p>
  </div>

  {/* Locality Cards */}
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {localities.map((locality: Locality) => {
      const propertyCount = properties.filter(
        (property) => property.locality === locality.name
      ).length;

      return (
        <Link
          key={locality.slug}
          href={`/localities/${locality.slug}`}
          className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-amber-400 dark:hover:shadow-2xl"
        >
          <h2 className="text-2xl font-bold text-slate-900 transition-colors dark:text-white">
            {locality.name}
          </h2>

          <p className="mt-4 leading-7 text-slate-600 transition-colors dark:text-slate-300">
            {locality.description}
          </p>

          <p className="mt-6 text-base font-semibold text-slate-900 transition-colors dark:text-white">
            {propertyCount > 0 ? (
              <>
                {propertyCount}{" "}
                {propertyCount === 1 ? "Property" : "Properties"} Available
              </>
            ) : (
              "Locality Guide Available"
            )}
          </p>

          {propertyCount === 0 && (
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Property listings will be added soon.
            </p>
          )}

          <div className="mt-6 inline-flex items-center font-semibold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-amber-400">
            Explore Locality
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </Link>
      );
    })}
  </div>
</main>

);
}