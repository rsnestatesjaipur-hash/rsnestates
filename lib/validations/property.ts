import { z } from "zod";

export const propertySchema = z.object({
title: z
.string()
.min(5, "Property title must be at least 5 characters."),

slug: z
.string()
.min(5, "Slug is required."),

description: z
.string()
.min(
20,
"Description must be at least 20 characters."
),

propertyType: z.enum([
  "Apartment",
  "Villa",
  "Plot",
  "Commercial",
]),

transactionType: z.enum([
  "Sell",
  "Rent",
]),

propertyStatus: z.enum([
  "Ready to Move",
  "Under Construction",
  "New Launch",
  "Resale",
  "Sold Out",
]),

localityId: z
.string()
.min(1, "Please select a locality."),

state: z.string().default("Rajasthan"),

city: z.string().default("Jaipur"),

fullAddress: z.string().default(""),

pincode: z.string().default(""),

latitude: z.number().nullable().default(null),

longitude: z.number().nullable().default(null),

projectName: z.string().default(""),

builderName: z.string().default(""),

areaUnit: z.enum([
  "Sq.Ft",
  "Sq.Yd",
  "Sq.Mt",
  "Acre",
  "Hectare",
]),

price: z
.number()
.positive("Price must be greater than zero."),

securityDeposit: z.number().default(0),

area: z
.number()
.positive("Area must be greater than zero."),

carpetArea: z.number().default(0),

superBuiltupArea: z.number().default(0),

bedrooms: z
.number()
.min(0, "Bedrooms cannot be negative."),

bathrooms: z
.number()
.min(0, "Bathrooms cannot be negative."),

washroomType: z
  .enum([
    "Private",
    "Shared",
  ])
  .default("Private"),

balconies: z.number().default(0),

floorNumber: z.number().default(0),

totalFloors: z.number().default(0),

coveredParking: z.number().default(0),

openParking: z.number().default(0),

plotArea: z.number().default(0),

privateGarden: z.boolean().default(false),

privateTerrace: z.boolean().default(false),

servantRoom: z.boolean().default(false),

studyRoom: z.boolean().default(false),

length: z.number().default(0),

width: z.number().default(0),

roadWidth: z.number().default(0),

cornerPlot: z.boolean().default(false),

plotFacing: z.string().default(""),

parkingSpaces: z.number().default(0),

furnishing: z.string().default(""),

commercialType: z.string().default(""),

propertySubType: z.string().default(""),

facing: z.string().default(""),

propertyAge: z.string().default(""),

constructionStatus: z.string().default(""),

possessionDate: z.string().default(""),

reraNumber: z.string().default(""),

reraApproved: z.boolean().default(false),

loanApproved: z.boolean().default(false),

gatedCommunity: z.boolean().default(false),

featured: z
  .boolean()
  .default(false),

published: z
  .boolean()
  .default(true),

metaTitle: z.string().default(""),

metaDescription: z.string().default(""),

youtubeVideos: z
.array(z.string())
.default([""]),

images: z
.array(z.string())
.default([]),

amenities: z
.array(z.string())
.default([]),
});
export type PropertyFormValues = z.infer<
  typeof propertySchema
>;

export type PropertyData = PropertyFormValues;