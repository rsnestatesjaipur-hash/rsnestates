"use client";

import { useFormContext } from "react-hook-form";

import Card from "@/components/ui/Card";
import type { LocalityFormValues } from "@/lib/validations/locality";

export default function PricingInformation() {
  const {
    register,
    formState: { errors },
  } = useFormContext<LocalityFormValues>();

  const priceFields = [
    {
      name: "apartmentPrice",
      label: "Apartment Price",
      placeholder: "₹6,500 - ₹8,500 / Sq.ft",
    },
    {
      name: "villaPrice",
      label: "Villa Price",
      placeholder: "₹1.50 Cr - ₹5 Cr",
    },
    {
      name: "plotPrice",
      label: "Plot Price",
      placeholder: "₹45,000 - ₹80,000 / Sq.yd",
    },
    {
      name: "commercialPrice",
      label: "Commercial Price",
      placeholder: "₹8,000 - ₹18,000 / Sq.ft",
    },
  ] as const;

  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        Property Price & Investment
      </h2>

      <p className="mt-2 text-slate-500 dark:text-slate-400">
        Enter average property prices and investment information for this
        locality.
      </p>

      {/* =======================================================
          Property Prices
      ======================================================= */}

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {priceFields.map((field) => (
          <div key={field.name}>
            <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
              {field.label}
            </label>

            <input
              {...register(field.name)}
              placeholder={field.placeholder}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />

            {errors[field.name] && (
              <p className="mt-2 text-sm text-red-600">
                {String(errors[field.name]?.message ?? "")}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* =======================================================
          Investment Ratings
      ======================================================= */}

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
            Investment Rating
          </label>

          <select
            {...register("investmentRating", {
              valueAsNumber: true,
            })}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          >
            <option value={1}>1 - Poor</option>
            <option value={2}>2 - Average</option>
            <option value={3}>3 - Good</option>
            <option value={4}>4 - Very Good</option>
            <option value={5}>5 - Excellent</option>
          </select>

          {errors.investmentRating && (
            <p className="mt-2 text-sm text-red-600">
              {errors.investmentRating.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
            Livability Rating
          </label>

          <select
            {...register("livabilityRating", {
              valueAsNumber: true,
            })}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          >
            <option value={1}>1 - Poor</option>
            <option value={2}>2 - Average</option>
            <option value={3}>3 - Good</option>
            <option value={4}>4 - Very Good</option>
            <option value={5}>5 - Excellent</option>
          </select>

          {errors.livabilityRating && (
            <p className="mt-2 text-sm text-red-600">
              {errors.livabilityRating.message}
            </p>
          )}
        </div>
      </div>

      {/* =======================================================
          Investment Details
      ======================================================= */}

      <div className="mt-10 space-y-6">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
            Rental Yield
          </label>

          <input
            {...register("rentalYield")}
            placeholder="Example: 3% - 4.5% annually"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />

          {errors.rentalYield && (
            <p className="mt-2 text-sm text-red-600">
              {errors.rentalYield.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
            Future Growth
          </label>

          <textarea
            {...register("futureGrowth")}
            rows={4}
            placeholder="Describe future infrastructure, appreciation potential and planned developments..."
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />

          {errors.futureGrowth && (
            <p className="mt-2 text-sm text-red-600">
              {errors.futureGrowth.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
            Why Invest
          </label>

          <textarea
            {...register("whyInvest")}
            rows={6}
            placeholder="Explain why buyers and investors should consider this locality..."
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />

          {errors.whyInvest && (
            <p className="mt-2 text-sm text-red-600">
              {errors.whyInvest.message}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}