import type { Locality } from "@/types";

interface LocalityOverviewProps {
  locality: Locality;
  propertyCount: number;
  propertyTypes: string;
}

export default function LocalityOverview({
  locality,
  propertyCount,
  propertyTypes,
}: LocalityOverviewProps) {
  return (
    <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-10 shadow-lg transition-colors dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-950/40">
      <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
        About {locality.name}
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
        {locality.description}
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Available Properties
          </p>

          <p className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">
            {propertyCount}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Property Types
          </p>

          <p className="mt-3 text-lg font-semibold leading-7 text-slate-900 dark:text-white">
            {propertyTypes || "-"}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Investment Rating
          </p>

          <p className="mt-3 text-4xl font-bold text-amber-500">
            {"★".repeat(locality.investmentRating)}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Livability Rating
          </p>

          <p className="mt-3 text-4xl font-bold text-green-500">
            {"★".repeat(locality.livabilityRating)}
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            Why Homebuyers Choose {locality.name}
          </h3>

          <ul className="mt-6 space-y-4">
            {locality.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3"
              >
                <span className="mt-1 text-green-500">
                  ✓
                </span>

                <span className="text-slate-700 dark:text-slate-300">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-amber-300 bg-amber-50 p-8 dark:border-amber-600/40 dark:bg-amber-950/20">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            Investment Overview
          </h3>

          <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
            {locality.whyInvest}
          </p>

          <div className="mt-8 space-y-4">
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">
                Rental Yield
              </p>

              <p className="text-slate-600 dark:text-slate-400">
                {locality.rentalYield}
              </p>
            </div>

            <div>
              <p className="font-semibold text-slate-900 dark:text-white">
                Future Growth
              </p>

              <p className="text-slate-600 dark:text-slate-400">
                {locality.futureGrowth}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}