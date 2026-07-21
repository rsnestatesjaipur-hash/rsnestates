import type { Property } from "@/types";

interface PropertyOverviewProps {
  property: Property;
}

export default function PropertyOverview({
  property,
}: PropertyOverviewProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-colors dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-950/40">
      {/* ================================================
          Overview
      ================================================ */}

      <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
        Overview
      </h2>

      <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
        {property.description}
      </p>

      {/* ================================================
          Property Summary
      ================================================ */}

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* ================================================
            Sale Price / Monthly Rent
        ================================================ */}

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors dark:border-slate-700 dark:bg-slate-900">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {property.transactionType === "Rent"
              ? "Monthly Rent"
              : "Sale Price"}
          </p>

          <p className="mt-2 whitespace-nowrap text-xl font-bold text-emerald-600 dark:text-emerald-400">
            {property.priceLabel}
          </p>
        </div>

        {/* ================================================
            Security Deposit (Rent Only)
        ================================================ */}

        {property.transactionType === "Rent" && (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors dark:border-slate-700 dark:bg-slate-900">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Security Deposit
            </p>

            <p className="mt-2 whitespace-nowrap text-xl font-bold text-slate-900 dark:text-white">
              ₹
              {(property.securityDeposit ?? 0).toLocaleString(
                "en-IN"
              )}
            </p>
          </div>
        )}

        {/* ================================================
            Area
        ================================================ */}

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors dark:border-slate-700 dark:bg-slate-900">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Area
          </p>

          <p className="mt-2 whitespace-nowrap text-xl font-bold text-slate-900 dark:text-white">
            {property.area} {property.areaUnit}
          </p>
        </div>

        {/* ================================================
            Location
        ================================================ */}

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors dark:border-slate-700 dark:bg-slate-900">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Location
          </p>

          <p className="mt-2 whitespace-nowrap text-xl font-bold text-slate-900 dark:text-white">
            {property.locality}, {property.city}
          </p>
        </div>

        {/* ================================================
            Residential Properties
            Commercial:
              - Hide Property Type
              - Hide Bedrooms
              - Hide Bathrooms

            Plot:
              - Show Property Type
              - Hide Bedrooms
              - Hide Bathrooms

            Apartment / Villa:
              - Show Property Type
              - Show Bedrooms
              - Show Bathrooms
        ================================================ */}

        {property.propertyType !== "Commercial" && (
          <>
            {/* ================================================
                Property Type
            ================================================ */}

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors dark:border-slate-700 dark:bg-slate-900">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Property Type
              </p>

              <p className="mt-2 whitespace-nowrap text-xl font-bold text-slate-900 dark:text-white">
                {property.propertyType}
              </p>
            </div>

            {/* ================================================
                Bedrooms & Bathrooms
                Hide for Plot
            ================================================ */}

            {property.propertyType !== "Plot" && (
              <>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors dark:border-slate-700 dark:bg-slate-900">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Bedrooms
                  </p>

                  <p className="mt-2 whitespace-nowrap text-xl font-bold text-slate-900 dark:text-white">
                    {property.bedrooms}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors dark:border-slate-700 dark:bg-slate-900">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Bathrooms
                  </p>

                  <p className="mt-2 whitespace-nowrap text-xl font-bold text-slate-900 dark:text-white">
                    {property.bathrooms}
                  </p>
                </div>
              </>
            )}
          </>
        )}

        {/* ================================================
            Transaction
        ================================================ */}

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors dark:border-slate-700 dark:bg-slate-900">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Transaction
          </p>

          <p className="mt-2 whitespace-nowrap text-xl font-bold text-slate-900 dark:text-white">
            {property.transactionType}
          </p>
        </div>

        {/* ================================================
            Property ID
        ================================================ */}

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors dark:border-slate-700 dark:bg-slate-900">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Property ID
          </p>

          <p className="mt-2 whitespace-nowrap text-xl font-bold text-slate-900 dark:text-white">
            #{property.id}
          </p>
        </div>
      </div>
    </section>
  );
}