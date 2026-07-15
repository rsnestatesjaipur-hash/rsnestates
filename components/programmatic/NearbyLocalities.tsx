import Link from "next/link";

import type { Locality } from "@/types/Locality";

interface NearbyLocalitiesProps {
  localities: Locality[];
}

export default function NearbyLocalities({
  localities,
}: NearbyLocalitiesProps) {
  if (localities.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-white">
        Nearby Localities
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {localities.map((locality) => (
          <Link
            key={locality.id}
            href={`/apartments-in-${locality.slug}`}
            className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
          >
            <h3 className="font-semibold text-slate-900 dark:text-white">
              {locality.name}
            </h3>

            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              View Apartments
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}