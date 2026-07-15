import {
  APARTMENT_TYPES,
  COMMERCIAL_TYPES,
  LOCALITIES,
  PG_TYPES,
  PLOT_TYPES,
  PROPERTY_LABELS,
  VILLA_TYPES,
} from "./constants";

import { getAmenities, APARTMENT_AMENITIES, VILLA_AMENITIES, PLOT_AMENITIES, COMMERCIAL_AMENITIES } from "./data/amenities";

import { getBuilder } from "./data/builders";

import { getProject } from "./data/projects";

import { generateDescription } from "./data/descriptions";

import { PRICE_CONFIG, getRandomPrice } from "./data/prices";

// =====================================================
// Demo Property
// =====================================================

export interface DemoProperty {
  title: string;

  slug: string;

  propertyType: string;

  propertySubType: string;

  transactionType: "Sell" | "Rent";

  localityId: number;

  locality: string;

  localitySlug: string;

  city: string;

  state: string;

  area: number;

  areaUnit: string;

  price: number;

  bedrooms: number;

  bathrooms: number;
}

interface GeneratorConfig {
  propertyType: string;

  subTypes: string[];

  labels: string[];

  listingsPerSubType: number;

  localityId?: number;

  properties: DemoProperty[];
}


function createSlug(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function getTransactionLabel(
  transactionType: "Sell" | "Rent"
) {
  return transactionType === "Sell"
    ? "Sale"
    : "Rent";
}

function getLabel(
  labels: string[],
  index: number
) {
  return labels[
    index % labels.length
  ];
}

function generateCategory(
  config: GeneratorConfig
) {
  const {
    propertyType,
    subTypes,
    labels,
    listingsPerSubType,
    localityId,
    properties,
  } = config;

  const selectedLocalities =
  localityId
    ? LOCALITIES.filter(
        (l) => l.id === localityId
      )
    : LOCALITIES;

for (const locality of selectedLocalities) {
    for (const subType of subTypes) {
      for (
        let i = 1;
        i <= listingsPerSubType;
        i++
      ) {
  const transactionType =
    i % 2 === 0
      ? "Rent"
      : "Sell";

        const transactionLabel =
          getTransactionLabel(
            transactionType
          );

        const label = getLabel(
          labels,
          i
        );

const bedrooms =
  propertyType === "Residential" &&
    ![
      "Villa",
      "House",
      "Duplex Villa",
      "Independent House",
      "Bungalow",
      "Row House",
      "Farm House",
    ].includes(subType)
    ? subType === "Studio Apartment"
      ? 0
      : subType === "1 RK"
      ? 1
      : subType === "1 BHK"
      ? 1
      : subType === "2 BHK"
      ? 2
      : subType === "3 BHK"
      ? 3
      : subType === "4 BHK"
      ? 4
      : subType === "5 BHK"
      ? 5
      : subType === "Builder Floor"
      ? 3
      : subType === "Penthouse"
      ? 5
      : 2
    : propertyType === "Residential" &&
    [
      "Villa",
      "House",
      "Duplex Villa",
      "Independent House",
      "Bungalow",
      "Row House",
      "Farm House",
    ].includes(subType)
    ? subType === "House"
      ? 3
      : subType === "Villa"
      ? 3
      : subType === "Row House"
      ? 3
      : subType === "Independent House"
      ? 4
      : subType === "Duplex Villa"
      ? 4
      : subType === "Bungalow"
      ? 5
      : subType === "Farm House"
      ? 6
      : 3
    : propertyType === "PG / Hostel"
    ? 1
    : 0;

        const bathrooms =
          bedrooms > 0
            ? bedrooms
            : 1;

        const area =
          propertyType === "Plot / Land"
            ? 900 + i * 120
            : 600 +
              bedrooms * 350 +
              i * 15;

        let title = "";

        switch (propertyType) {
          case "Residential":
            if (
              [
                "Villa",
                "House",
                "Duplex Villa",
                "Independent House",
                "Bungalow",
                "Row House",
                "Farm House",
              ].includes(subType)
            ) {
              title = bedrooms > 0
  ? `${bedrooms} BHK ${subType} for ${transactionLabel} in ${locality.name}, Jaipur`
  : `${subType} for ${transactionLabel} in ${locality.name}, Jaipur`;
            } else {
              title =
                subType === "Penthouse"
                  ? `${area} Sq.Ft Penthouse for ${transactionLabel} in ${locality.name}, Jaipur`
                  : `${subType} ${label} for ${transactionLabel} in ${locality.name}, Jaipur`;
            }
            break;

          case "Plot / Land":
            title = `${area} Sq.Ft ${subType} for ${transactionLabel} in ${locality.name}, Jaipur`;
            break;

          case "Commercial":
            title = `${area} Sq.Ft ${subType} for ${transactionLabel} in ${locality.name}, Jaipur`;
            break;

          case "PG / Hostel":
            title = `${subType} for Rent in ${locality.name}, Jaipur`;
            break;
        }

      const slug = [
        bedrooms > 0 ? `${bedrooms}-bhk` : "",
        createSlug(subType),
        transactionType === "Sell" ? "for-sale" : "for-rent",
        "in",
        locality.slug,
        i,
      ]
        .filter(Boolean)
        .join("-");

        const builder =
          getBuilder(i);

        const project =
          getProject(
            locality.slug,
            i
          );

const description = `🔴 DEMO LISTING 🔴

This is an AI-generated demonstration property created to showcase the RSN Estates platform.

Actual property listings will be published as they become available.

${generateDescription(i)}`;

        let amenities: string[] =
          [];

        switch (propertyType) {
          case "Residential":
          amenities =
            getAmenities(
              [
                "Villa",
                "House",
                "Duplex Villa",
                "Independent House",
                "Bungalow",
                "Row House",
                "Farm House",
              ].includes(subType)
                ? VILLA_AMENITIES
                : APARTMENT_AMENITIES
            );
          break;

          case "Plot / Land":
            amenities =
              getAmenities(
                PLOT_AMENITIES
              );
            break;

            case "Commercial":
              amenities =
                getAmenities(
                  COMMERCIAL_AMENITIES
                );
              break;

            case "PG / Hostel":
              amenities =
                getAmenities(
                  APARTMENT_AMENITIES
                );
              break;
        }

        let price = 0;

        if (
          propertyType === "Residential" &&
          ![
            "Villa",
            "House",
            "Duplex Villa",
            "Independent House",
            "Bungalow",
            "Row House",
            "Farm House",
          ].includes(subType)
        ) {
          price =
            transactionType ===
            "Sell"
              ? getRandomPrice(
                  PRICE_CONFIG
                    .apartments.Sell
                    .min,
                  PRICE_CONFIG
                    .apartments.Sell
                    .max
                )
              : getRandomPrice(
                  PRICE_CONFIG
                    .apartments.Rent
                    .min,
                  PRICE_CONFIG
                    .apartments.Rent
                    .max
                );
        }

        if (
          propertyType === "Residential" &&
          [
            "Villa",
            "House",
            "Duplex Villa",
            "Independent House",
            "Bungalow",
            "Row House",
            "Farm House",
          ].includes(subType)
        ) {
          price =
            transactionType ===
            "Sell"
              ? getRandomPrice(
                  PRICE_CONFIG
                    .villas.Sell.min,
                  PRICE_CONFIG
                    .villas.Sell.max
                )
              : getRandomPrice(
                  PRICE_CONFIG
                    .villas.Rent.min,
                  PRICE_CONFIG
                    .villas.Rent.max
                );
        }

        if (propertyType === "Commercial") {
          price =
            transactionType ===
            "Sell"
              ? getRandomPrice(
                  PRICE_CONFIG
                    .commercial.Sell
                    .min,
                  PRICE_CONFIG
                    .commercial.Sell
                    .max
                )
              : getRandomPrice(
                  PRICE_CONFIG
                    .commercial.Rent
                    .min,
                  PRICE_CONFIG
                    .commercial.Rent
                    .max
                );
        }

        if (propertyType === "Plot / Land") {
          price =
            getRandomPrice(
              PRICE_CONFIG
                .residentialPlot
                .Sell.min,
              PRICE_CONFIG
                .residentialPlot
                .Sell.max
            );
        }

        if (propertyType === "PG / Hostel") {
          price =
            getRandomPrice(
              PRICE_CONFIG.apartments.Rent.min,
              PRICE_CONFIG.apartments.Rent.max
            );
        }

        properties.push({
          title,
          slug,
          propertyType,
          propertySubType:
            subType,
          transactionType,
          localityId:
            locality.id,
          locality:
            locality.name,
          localitySlug:
            locality.slug,
          city: "Jaipur",
          state: "Rajasthan",
          area,
          areaUnit: "Sq.Ft",
          price,
          bedrooms,
          bathrooms,

          // Will be mapped during DB insert
          // @ts-ignore
          builder,

          // @ts-ignore
          project,

          // @ts-ignore
          description,

          // @ts-ignore
          amenities,

          // @ts-ignore
          featured:
            i % 7 === 0,

          // @ts-ignore
          published: true,

          // @ts-ignore
          is_demo: true,

          // @ts-ignore
          metaTitle: `${title} | RSN Estates`,

          // @ts-ignore
          metaDescription:
            description.substring(
              0,
              155
            ),
        });
      }
    }
  }
}

// =====================================================
// Generator
// =====================================================

export function generateDemoProperties(
  listingsPerSubType: number,
  localityId?: number
): DemoProperty[] {

  const properties: DemoProperty[] = [];

  generateCategory({
    propertyType: "Residential",
    subTypes: APARTMENT_TYPES,
    labels: PROPERTY_LABELS.Apartment,
    listingsPerSubType,
    localityId,
    properties,
  });

  generateCategory({
    propertyType: "Residential",
    subTypes: VILLA_TYPES,
    labels: PROPERTY_LABELS.Villa,
    listingsPerSubType,
    localityId,
    properties,
  });

  generateCategory({
    propertyType: "Plot / Land",
    subTypes: PLOT_TYPES,
    labels: PROPERTY_LABELS["Residential Plot"],
    listingsPerSubType,
    localityId,
    properties,
  });

  generateCategory({
    propertyType: "Commercial",
    subTypes: COMMERCIAL_TYPES,
    labels: PROPERTY_LABELS.Commercial,
    listingsPerSubType,
    localityId,
    properties,
  });

  generateCategory({
  propertyType: "PG / Hostel",
  subTypes: PG_TYPES,
  labels: [
    "PG",
    "Hostel",
    "Co-living",
  ],
  listingsPerSubType,
  localityId,
  properties,
});

  return properties;
}