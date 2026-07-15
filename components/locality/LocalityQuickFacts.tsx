import {
  Building2,
  Star,
  Heart,
  TrendingUp,
  Train,
  Plane,
  MapPin,
  Home,
} from "lucide-react";

import type { Locality } from "@/types";

interface LocalityQuickFactsProps {
  locality: Locality;
  propertyCount: number;
  propertyTypes: string;
}

export default function LocalityQuickFacts({
  locality,
  propertyCount,
  propertyTypes,
}: LocalityQuickFactsProps) {
  const facts = [
    {
      title: "Available Properties",
      value: propertyCount.toString(),
      icon: Building2,
    },
    {
      title: "Property Types",
      value: propertyTypes || "-",
      icon: Home,
    },
    {
      title: "Investment Rating",
      value: `${locality.investmentRating}/5 ★`,
      icon: TrendingUp,
    },
    {
      title: "Livability",
      value: `${locality.livabilityRating}/5 ★`,
      icon: Heart,
    },
    {
      title: "Rental Yield",
      value: locality.rentalYield || "-",
      icon: Star,
    },
    {
      title: "Nearest Metro",
      value: locality.nearestMetro || "-",
      icon: Train,
    },
    {
      title: "Railway Station",
      value:
        locality.nearestRailwayStation || "-",
      icon: MapPin,
    },
    {
      title: "Airport",
      value: locality.nearestAirport || "-",
      icon: Plane,
    },
  ];

  return (
    <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-10 shadow-lg dark:border-slate-700 dark:bg-slate-800">
      <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
        Locality Quick Facts
      </h2>

      <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
        A quick snapshot of everything you
        should know before investing in{" "}
        <strong>{locality.name}</strong>.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {facts.map((fact) => {
          const Icon = fact.icon;

          return (
            <div
              key={fact.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="rounded-xl bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  <Icon size={24} />
                </div>

                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {fact.title}
                </h3>
              </div>

              <p className="text-lg font-bold leading-7 text-slate-900 dark:text-white">
                {fact.value}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}