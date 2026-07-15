import { z } from "zod";

export const inquirySchema = z.object({
  propertyId: z.number(),

  propertyTitle: z.string(),

  propertySlug: z.string(),

  name: z
    .string()
    .min(2, "Name is required."),

  email: z
    .string()
    .email("Invalid email.")
    .or(z.literal("")),

  phone: z
    .string()
    .min(10, "Phone number is required."),

  message: z.string().default(""),
});

export type InquiryFormValues =
  z.infer<typeof inquirySchema>;