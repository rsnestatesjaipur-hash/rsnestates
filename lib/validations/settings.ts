import { z } from "zod";

export const settingsSchema = z.object({
  siteName: z.string().default(""),

  tagline: z.string().default(""),

  logo: z.string().default(""),

  favicon: z.string().default(""),

  phone: z.string().default(""),

  whatsapp: z.string().default(""),

  email: z
    .string()
    .email("Invalid email address.")
    .or(z.literal(""))
    .default(""),

  address: z.string().default(""),

  googleMaps: z.string().default(""),

  facebook: z.string().default(""),

  instagram: z.string().default(""),

  linkedin: z.string().default(""),

  youtube: z.string().default(""),

  metaTitle: z.string().default(""),

  metaDescription: z.string().default(""),

  ogImage: z.string().default(""),

  googleAnalytics: z.string().default(""),

  searchConsole: z.string().default(""),

  copyright: z.string().default(""),
});

export type SettingsFormValues =
  z.infer<typeof settingsSchema>;