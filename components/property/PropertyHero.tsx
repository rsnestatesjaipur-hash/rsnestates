import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

interface PropertyHeroProps {
totalProperties: number;
}

export default function PropertyHero({
totalProperties,
}: PropertyHeroProps) {
return (
<Section className="border-b border-slate-200 bg-slate-50 transition-colors dark:border-slate-800 dark:bg-slate-950">
<Container>
<div className="max-w-3xl">
{/* Section Badge */}
<span className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700 dark:bg-amber-500/15 dark:text-amber-400">
Jaipur Real Estate
</span>

      {/* Main Heading */}
      <h1 className="mt-5 text-5xl font-extrabold text-slate-900 transition-colors dark:text-white">
        Browse Properties in Jaipur
      </h1>

      {/* Description */}
      <p className="mt-6 text-lg leading-8 text-slate-600 transition-colors dark:text-slate-300">
        Discover apartments, villas, plots, and commercial properties across
        Jaipur&apos;s most sought-after locations.
      </p>

      {/* Property Counter */}
      <div className="mt-8 inline-flex items-center rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-900 dark:shadow-none">
        <span className="text-2xl font-bold text-slate-900 transition-colors dark:text-white">
          {totalProperties}
        </span>

        <span className="ml-3 text-slate-600 transition-colors dark:text-slate-300">
          Properties Available
        </span>
      </div>
    </div>
  </Container>
</Section>

);
}