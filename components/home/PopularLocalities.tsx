import Link from "next/link";
import Image from "next/image";
import Container from "../common/Container";
import Section from "../common/Section";

import { getAllLocalities } from "@/lib/repositories/localityRepository";

export default async function PopularLocalities() {
  const localities =
    await getAllLocalities(true);

  return (
    <Section className="bg-slate-50 transition-colors dark:bg-slate-900">
      <Container>
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
            Explore Jaipur
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900 transition-colors dark:text-white">
            Popular Localities
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 transition-colors dark:text-slate-300">
            Discover Jaipur&apos;s fastest-growing residential and commercial
            destinations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {localities.map((locality) => {
            const propertyCount =
              locality.propertyCount;

            return (
              <Link
                key={locality.slug}
                href={`/localities/${locality.slug}`}
                className="block"
              >
                <div className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-slate-800 dark:shadow-slate-950/40">
                  <div className="relative h-56 w-full overflow-hidden">
                    {locality.heroImage ? (
                      <Image
                        src={locality.heroImage}
                        alt={locality.name}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                        sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-slate-200 text-lg font-semibold text-slate-500 transition-colors dark:bg-slate-700 dark:text-slate-400">
                        {locality.name} Image
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-slate-900 transition-colors dark:text-white">
                      {locality.name}
                    </h3>

                    <p className="mt-3 text-slate-600 transition-colors dark:text-slate-300">
                      {propertyCount}{" "}
                      {propertyCount === 1
                        ? "Property"
                        : "Properties"}
                    </p>

                    <div className="mt-6 inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500">
                      Explore Properties
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}