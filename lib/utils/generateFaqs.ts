import type { Locality } from "@/types/Locality";

interface GenerateFaqsOptions {
  locality: Locality;

  propertyType?: string;

  bedrooms?: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export function generateFaqs({
  locality,
  propertyType,
  bedrooms,
}: GenerateFaqsOptions): FAQ[] {
  const propertyLabel =
    propertyType ?? "Property";

  const configuration =
    bedrooms !== undefined
      ? bedrooms === 0
        ? "Studio"
        : `${bedrooms} BHK`
      : "";

  const propertyText = configuration
    ? `${configuration} ${propertyLabel}`
    : propertyLabel;

  return [
    {
      question: `Is ${locality.name} a good place to buy ${propertyText}?`,
      answer: `${locality.name} is considered one of Jaipur's promising residential destinations due to its infrastructure development, connectivity, educational institutions, hospitals, shopping facilities and long-term investment potential.`,
    },
    {
      question: `What is the average price of ${propertyLabel}s in ${locality.name}?`,
      answer: `Property prices vary depending on the builder, location, amenities, project size and specifications. Browse the latest listings on this page to compare available options in ${locality.name}.`,
    },
    {
      question: `Are home loans available for properties in ${locality.name}?`,
      answer: `Yes. Most banks and housing finance companies provide home loans for eligible residential properties in ${locality.name}, subject to documentation and eligibility.`,
    },
    {
      question: `Is ${locality.name} suitable for families?`,
      answer: `Yes. ${locality.name} offers schools, hospitals, shopping centres, parks and excellent connectivity, making it suitable for families.`,
    },
    {
      question: `What amenities are available near ${locality.name}?`,
      answer: `Residents enjoy access to educational institutions, hospitals, shopping destinations, restaurants, fitness centres and public transport depending on the exact location.`,
    },
    {
      question: `Is investing in ${propertyLabel}s in ${locality.name} a good decision?`,
      answer: `${locality.name} continues to witness infrastructure development and steady demand, making it an attractive destination for long-term real estate investment.`,
    },
    {
      question: `Can I schedule a property visit?`,
      answer: `Yes. Contact RSN Estates through the enquiry form to arrange a site visit at your preferred time.`,
    },
    {
      question: `How do I choose the right ${propertyLabel.toLowerCase()}?`,
      answer: `Compare location, builder reputation, legal approvals, amenities, connectivity, budget and future appreciation before making your decision.`,
    },
  ];
}