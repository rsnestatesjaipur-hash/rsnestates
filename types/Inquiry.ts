export interface Inquiry {
  id: number;

  source: "Property" | "Contact";

  propertyId?: number;

  propertyTitle: string;

  propertySlug?: string;

  enquiryType?: "buy" | "sell";

  name: string;

  email: string;

  phone: string;

  message: string;

  status: string;

  createdAt: string;
}