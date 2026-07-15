import type { Locality } from "@/types/Locality";

interface LocalityOverviewProps {
  locality: Locality;
}

export default function LocalityOverview({
  locality,
}: LocalityOverviewProps) {
  return (
    <section className="mt-20">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-slate-900">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          About {locality.name}
        </h2>

        <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
          {locality.description}
        </p>

        {/* ================================================
            Highlights
        ================================================ */}

        {locality.highlights.length > 0 && (
          <>
            <h3 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">
              Highlights
            </h3>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {locality.highlights.map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-200 p-4 dark:border-slate-700"
                  >
                    ✅ {item}
                  </div>
                )
              )}
            </div>
          </>
        )}

        {/* ================================================
            Average Property Prices
        ================================================ */}

        <h3 className="mt-12 text-xl font-bold text-slate-900 dark:text-white">
          Average Property Prices
        </h3>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-slate-200 p-5 dark:border-slate-700">
            <div className="font-semibold text-slate-900 dark:text-white">
              Apartments
            </div>

            <div className="mt-2 text-slate-600 dark:text-slate-400">
              {locality.apartmentPrice}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 p-5 dark:border-slate-700">
            <div className="font-semibold text-slate-900 dark:text-white">
              Villas
            </div>

            <div className="mt-2 text-slate-600 dark:text-slate-400">
              {locality.villaPrice}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 p-5 dark:border-slate-700">
            <div className="font-semibold text-slate-900 dark:text-white">
              Plots
            </div>

            <div className="mt-2 text-slate-600 dark:text-slate-400">
              {locality.plotPrice}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 p-5 dark:border-slate-700">
            <div className="font-semibold text-slate-900 dark:text-white">
              Commercial
            </div>

            <div className="mt-2 text-slate-600 dark:text-slate-400">
              {locality.commercialPrice}
            </div>
          </div>
        </div>

        {/* ================================================
            Schools
        ================================================ */}

        {locality.schools.length > 0 && (
          <>
            <h3 className="mt-12 text-xl font-bold text-slate-900 dark:text-white">
              Nearby Schools
            </h3>

            <div className="mt-5 flex flex-wrap gap-3">
              {locality.schools.map(
                (school) => (
                  <span
                    key={school}
                    className="rounded-full bg-blue-100 px-4 py-2 text-sm dark:bg-blue-900"
                  >
                    {school}
                  </span>
                )
              )}
            </div>
          </>
        )}

        {/* ================================================
            Hospitals
        ================================================ */}

        {locality.hospitals.length > 0 && (
          <>
            <h3 className="mt-12 text-xl font-bold text-slate-900 dark:text-white">
              Hospitals
            </h3>

            <div className="mt-5 flex flex-wrap gap-3">
              {locality.hospitals.map(
                (hospital) => (
                  <span
                    key={hospital}
                    className="rounded-full bg-green-100 px-4 py-2 text-sm dark:bg-green-900"
                  >
                    {hospital}
                  </span>
                )
              )}
            </div>
          </>
        )}

        {/* ================================================
            Shopping
        ================================================ */}

        {locality.shopping.length > 0 && (
          <>
            <h3 className="mt-12 text-xl font-bold text-slate-900 dark:text-white">
              Shopping & Entertainment
            </h3>

            <div className="mt-5 flex flex-wrap gap-3">
              {locality.shopping.map(
                (place) => (
                  <span
                    key={place}
                    className="rounded-full bg-orange-100 px-4 py-2 text-sm dark:bg-orange-900"
                  >
                    {place}
                  </span>
                )
              )}
            </div>
          </>
        )}

        {/* ================================================
            Connectivity
        ================================================ */}

        {locality.connectivity.length > 0 && (
          <>
            <h3 className="mt-12 text-xl font-bold text-slate-900 dark:text-white">
              Connectivity
            </h3>

            <div className="mt-5 flex flex-wrap gap-3">
              {locality.connectivity.map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full bg-purple-100 px-4 py-2 text-sm dark:bg-purple-900"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}