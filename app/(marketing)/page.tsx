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

      <WhyChooseUs />
    </>
  );
}