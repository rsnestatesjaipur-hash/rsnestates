import Link from "next/link";
import Image from "next/image";
import Container from "../common/Container";
import Section from "../common/Section";

export default function Hero() {
return (
<Section className="bg-gradient-to-b from-slate-50 to-white transition-colors dark:from-slate-950 dark:to-slate-900">
<Container>
<div className="grid items-center gap-16 lg:grid-cols-2">
{/* Left */}
<div>
<span className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
Jaipur's Smart Property Portal
</span>

        <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 transition-colors dark:text-white lg:text-6xl">
          Find Your Dream Property in Jaipur
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 transition-colors dark:text-slate-300">
          Discover apartments, villas, plots, commercial spaces, and premium
          investment opportunities across Jaipur&apos;s fastest-growing
          locations.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/properties"
            className="rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500"
          >
            Browse Properties
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800"
          >
            Contact Expert
          </Link>
        </div>
      </div>

      {/* Right */}
      <div className="relative h-[500px] w-full overflow-hidden rounded-3xl border border-slate-200 shadow-2xl transition-colors dark:border-slate-700">
        <Image
          src="/images/hero-image.webp"
          alt="Hawa Mahal, Jaipur"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="inline-flex rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 backdrop-blur dark:bg-slate-900/80 dark:text-white">
            Hawa Mahal • Jaipur
          </div>
        </div>
      </div>
    </div>
  </Container>
</Section>

);
}