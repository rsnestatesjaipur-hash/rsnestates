import Link from "next/link";

import type { Locality } from "@/types/Locality";

interface RelatedSearchesProps {
  locality: Locality;
}

export default function RelatedSearches({
  locality,
}: RelatedSearchesProps) {
  const links = [
    {
      title: `Properties in ${locality.name}`,
      href: `/properties-in-${locality.slug}`,
    },
    {
      title: `Apartments in ${locality.name}`,
      href: `/apartments-in-${locality.slug}`,
    },
    {
      title: `Villas in ${locality.name}`,
      href: `/villas-in-${locality.slug}`,
    },
    {
      title: `Plots in ${locality.name}`,
      href: `/plots-in-${locality.slug}`,
    },
    {
      title: `Studio Apartments in ${locality.name}`,
      href: `/studio-apartments-in-${locality.slug}`,
    },
    {
      title: `2 BHK Apartments in ${locality.name}`,
      href: `/2-bhk-apartments-in-${locality.slug}`,
    },
    {
      title: `3 BHK Apartments in ${locality.name}`,
      href: `/3-bhk-apartments-in-${locality.slug}`,
    },
    {
      title: `4 BHK Villas in ${locality.name}`,
      href: `/4-bhk-villas-in-${locality.slug}`,
    },
    {
      title: `Property Under ₹50 Lakh`,
      href: `/property-in-${locality.slug}-under-50-lakh`,
    },
    {
      title: `Property Under ₹1 Crore`,
      href: `/property-in-${locality.slug}-under-1-crore`,
    },
  ];

  return (
    <section className="mt-20">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-slate-900">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Related Property Searches
        </h2>

        <p className="mt-3 text-slate-600 dark:text-slate-400">
          Explore more property options in and around {locality.name}.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl border border-slate-200 p-4 transition-all hover:border-blue-500 hover:bg-blue-50 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}