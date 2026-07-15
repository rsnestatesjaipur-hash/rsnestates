import Link from "next/link";

interface LocalityCardProps {
  locality: {
    id?: string;
    slug: string;
    name: string;
    image?: string | null;
    propertyCount?: number;
    city?: string;
  };
}

export default function LocalityCard({
  locality,
}: LocalityCardProps) {
  const propertyCount =
    locality.propertyCount ?? 0;

  return (
    <Link
      href={`/localities/${locality.slug}`}
      className="block"
    >
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800 dark:hover:border-amber-400 dark:shadow-slate-950/40">
        <div className="h-60 overflow-hidden bg-slate-200 transition-colors dark:bg-slate-700">
          {locality.image ? (
            <img
              src={locality.image}
              alt={locality.name}
              className="h-full w-full object-cover transition duration-300 hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-lg font-semibold text-slate-500 dark:text-slate-400">
              {locality.name} Image
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-slate-900 transition-colors dark:text-white">
            {locality.name}
          </h3>

          {locality.city && (
            <p className="mt-2 text-slate-600 transition-colors dark:text-slate-300">
              {locality.city}
            </p>
          )}

          <p className="mt-3 text-slate-600 transition-colors dark:text-slate-300">
            {propertyCount}{" "}
            {propertyCount === 1
              ? "Property"
              : "Properties"}
          </p>

          <div className="mt-6 inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500">
            Explore Locality
          </div>
        </div>
      </div>
    </Link>
  );
}