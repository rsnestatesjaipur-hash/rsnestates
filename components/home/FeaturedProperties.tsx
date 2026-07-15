import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import PropertyCard from "@/components/cards/PropertyCard";
import { getFeaturedProperties } from "@/lib/supabase/properties";

export default async function FeaturedProperties() {
  const featuredProperties =
    await getFeaturedProperties();

  return (
    <Section className="bg-white transition-colors dark:bg-slate-950">
      <Container>
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 transition-colors dark:text-white">
            Featured Properties
          </h2>

          <p className="mt-4 text-lg text-slate-600 transition-colors dark:text-slate-300">
            Discover premium properties across Jaipur.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}