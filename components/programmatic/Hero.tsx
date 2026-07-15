interface HeroProps {
  title: string;

  description: string;

  propertyCount: number;

  propertyType?: string;

  bedrooms?: number;
}

export default function Hero({
  title,
  description,
  propertyCount,
  propertyType,
  bedrooms,
}: HeroProps) {
  return (
    <section className="mb-12 rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 to-white p-10 dark:border-slate-700 dark:from-slate-900 dark:to-slate-800">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
        {title}
      </h1>

      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
        {description}
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <div className="rounded-xl bg-white px-5 py-3 shadow transition-colors dark:bg-slate-800">
          <div className="text-sm text-slate-500 dark:text-slate-400">
            Properties
          </div>

          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {propertyCount}
          </div>
        </div>

        {propertyType && (
          <div className="rounded-xl bg-white px-5 py-3 shadow transition-colors dark:bg-slate-800">
            <div className="text-sm text-slate-500 dark:text-slate-400">
              Type
            </div>

            <div className="text-xl font-semibold text-slate-900 dark:text-white">
              {propertyType}
            </div>
          </div>
        )}

        {bedrooms !== undefined && (
          <div className="rounded-xl bg-white px-5 py-3 shadow transition-colors dark:bg-slate-800">
            <div className="text-sm text-slate-500 dark:text-slate-400">
              Configuration
            </div>

            <div className="text-xl font-semibold text-slate-900 dark:text-white">
              {bedrooms === 0
                ? "Studio"
                : `${bedrooms} BHK`}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}