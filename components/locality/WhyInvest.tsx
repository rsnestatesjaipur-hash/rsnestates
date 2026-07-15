import {
  TrendingUp,
  Building2,
  Landmark,
  Star,
} from "lucide-react";

import type { Locality } from "@/types";

interface WhyInvestProps {
  locality: Locality;
}

export default function WhyInvest({
  locality,
}: WhyInvestProps) {
  const reasons = [
    {
      title: "Investment Potential",
      description: locality.whyInvest,
      icon: TrendingUp,
    },
    {
      title: "Future Growth",
      description: locality.futureGrowth,
      icon: Building2,
    },
    {
      title: "Rental Yield",
      description: locality.rentalYield,
      icon: Landmark,
    },
    {
      title: "Investment Rating",
      description: `${locality.investmentRating}/5 ★ Investment Score`,
      icon: Star,
    },
  ];

  return (
    <section className="mt-20 rounded-3xl border border-slate-200 bg-white p-10 shadow-lg transition-colors dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-950/40">
      <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
        Why Invest in {locality.name}?
      </h2>

      <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
        Discover why {locality.name} is considered one of Jaipur's preferred
        destinations for homebuyers, investors and businesses.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {reasons.map((reason) => {
          const Icon = reason.icon;

          return (
            <div
              key={reason.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-colors dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  <Icon size={24} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {reason.title}
                </h3>
              </div>

              <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">
                {reason.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}