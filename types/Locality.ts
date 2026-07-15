export interface Locality {
  id: number;

  slug: string;

  name: string;

  shortDescription: string;

  description: string;

  heroImage: string;

  images: string[];

  highlights: string[];

  schools: string[];

  hospitals: string[];

  shopping: string[];

  connectivity: string[];

  apartmentPrice: string;

  villaPrice: string;

  plotPrice: string;

  commercialPrice: string;

  investmentRating: number;

  livabilityRating: number;

  rentalYield: string;

  futureGrowth: string;

  whyInvest: string;

  propertyTypes: string[];

  nearestMetro: string;

  nearestRailwayStation: string;

  nearestAirport: string;

  nearbyLandmarks: string[];

  searchKeywords: string[];

  faqs: {
    question: string;
    answer: string;
  }[];

  seoTitle: string;

  seoDescription: string;

  featured: boolean;

  published: boolean;

  propertyCount: number;
}