import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import PropertyCard from "@/components/cards/PropertyCard";
import PropertyEmptyState from "@/components/property/PropertyEmptyState";
import type { Property } from "@/types";

interface PropertyGridProps {
  properties: Property[];
}

export default function PropertyGrid({
  properties,
}: PropertyGridProps) {
  if (properties.length === 0) {
    return (
      <Section className="bg-white transition-colors dark:bg-slate-950">
        <PropertyEmptyState />
      </Section>
    );
  }

  return (
    <Section className="bg-white transition-colors dark:bg-slate-950">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {properties.map((property) => (
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