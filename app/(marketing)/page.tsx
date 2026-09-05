import Link from "next/link";

import Hero from "@/components/home/Hero";
import PropertySearch from "@/components/home/PropertySearch";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import PropertyCategories from "@/components/home/PropertyCategories";
import PopularLocalities from "@/components/home/PopularLocalities";
import WhyChooseUs from "@/components/home/WhyChooseUs";

import { getAllLocalities } from "@/lib/repositories/localityRepository";

export default async function Home() {
  const localities =
    (await getAllLocalities(true)) ?? [];

  return (
    <>
      <PropertySearch
        localities={localities}
      />

      <Hero />

      <FeaturedProperties />

      <PropertyCategories />

      <PopularLocalities />

      <section className="px-6 py-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
            Looking for{" "}
            <Link
              href="/jaipur-plot-investment"
              className="font-semibold text-blue-600 underline underline-offset-4 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              plots near NIMS University, Jaipur
            </Link>
            ? Explore available residential and commercial plot options,
            current site information and investment details.
          </p>
        </div>
      </section>

      <WhyChooseUs />
    </>
  );
}