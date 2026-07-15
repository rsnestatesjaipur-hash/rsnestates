// =====================================================
// Description Templates
// =====================================================

const OPENING = [
  "Discover this well-maintained property located in one of Jaipur's most sought-after neighborhoods.",
  "Presenting a thoughtfully planned property in a prime location of Jaipur.",
  "This beautifully designed property offers an excellent opportunity for homebuyers and investors.",
  "Experience comfortable living in this premium property situated in a rapidly developing area.",
];

const LOCATION = [
  "The property enjoys excellent connectivity to schools, hospitals, shopping centres and major road networks.",
  "Located in a well-developed neighbourhood with easy access to daily conveniences.",
  "The surrounding area offers excellent infrastructure and a peaceful residential environment.",
  "Public transport, educational institutions and healthcare facilities are easily accessible from this location.",
];

const INVESTMENT = [
  "The locality has witnessed steady appreciation, making it an attractive long-term investment.",
  "Growing infrastructure and increasing demand make this property a promising investment opportunity.",
  "Whether for self-use or investment, this property offers excellent future potential.",
  "The area's continuous development enhances the long-term value of this property.",
];

const CLOSING = [
  "Contact RSN Estates today to schedule a site visit and learn more.",
  "Don't miss this opportunity to own a premium property in Jaipur.",
  "Book your visit today and explore everything this property has to offer.",
  "Enquire now for pricing, availability and complete property details.",
];

// =====================================================
// Generate Description
// =====================================================

export function generateDescription(
  index: number
) {
  return [
    OPENING[index % OPENING.length],

    LOCATION[index % LOCATION.length],

    INVESTMENT[index % INVESTMENT.length],

    CLOSING[index % CLOSING.length],
  ].join("\n\n");
}