import {
  Building2,
  Home,
  Map,
  Briefcase,
  TrendingUp,
} from "lucide-react";

interface LocalityPriceTrendsProps {
  apartmentPrice: string;
  villaPrice: string;
  plotPrice: string;
  commercialPrice: string;
}

export default function LocalityPriceTrends({
  apartmentPrice,
  villaPrice,
  plotPrice,
  commercialPrice,
}: LocalityPriceTrendsProps) {
  const trends = [
    {
      title: "Apartments",
      value: apartmentPrice,
      icon: Building2,
    },
    {
      title: "Villas",
      value: villaPrice,
      icon: Home,
    },
    {
      title: "Residential Plots",
      value: plotPrice,
      icon: Map,
    },
    {
      title: "Commercial",
      value: commercialPrice,
      icon: Briefcase,
    },
  ];

  return (
    <section className="mt-20 rounded-3xl border border-slate-200 bg-white p-10 shadow-lg transition-colors dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-950/40">
      <div className="flex items-center gap-4">
        <div className="rounded-2xl bg-emerald-100 p-4 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
          <TrendingUp size={28} />
        </div>

        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Property Price Guide
          </h2>

          <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">
            Indicative market price ranges for different property types in this locality.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {trends.map((trend) => {
          const Icon = trend.icon;

          return (
            <div
              key={trend.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="rounded-xl bg-emerald-100 p-3 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {trend.title}
                </h3>
              </div>

              <p className="break-words text-xl font-bold leading-8 text-emerald-600 dark:text-emerald-400">
                {trend.value || "Price on Request"}
              </p>
            </div>
          );
        })}
      </div>

      <p className="mt-8 text-sm text-slate-500 dark:text-slate-400">
        * Prices are indicative market ranges and may vary based on the project,
        location, amenities, property size and prevailing market conditions.
      </p>
    </section>
  );
}