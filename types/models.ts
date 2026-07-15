export interface Locality {
  id: number;
  slug: string;
  name: string;
  image: string;
  description: string;
}

export interface Property {
  id: number;
  slug: string;
  title: string;
  description: string;

  propertyType: "Apartment" | "Villa" | "Plot" | "Commercial";
  transactionType: "Sale" | "Rent";

  locality: string;
  city: string;

  price: number;
  priceLabel: string;

  area: number;
  areaUnit: string;

  bedrooms: number;
  bathrooms: number;

  featuredImage: string;
  featured: boolean;

  videos: {
    title: string;
    url: string;
  }[];
}