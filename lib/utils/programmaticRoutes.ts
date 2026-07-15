export const PROPERTY_TYPES = [
  "Apartment",
  "Villa",
  "Plot",
] as const;

export const TRANSACTIONS = [
  "Sale",
  "Rent",
] as const;

export const BEDROOMS = [
  1,
  2,
  3,
  4,
  5,
] as const;

export const BUDGETS = [
  ["25-lakh", 2500000],
  ["40-lakh", 4000000],
  ["50-lakh", 5000000],
  ["60-lakh", 6000000],
  ["75-lakh", 7500000],
  ["80-lakh", 8000000],
  ["90-lakh", 9000000],
  ["1-crore", 10000000],
  ["125-lakh", 12500000],
  ["150-lakh", 15000000],
  ["2-crore", 20000000],
  ["3-crore", 30000000],
  ["5-crore", 50000000],
] as const;

export function generateProgrammaticRoutes(
  localitySlug: string,
  properties: any[]
) {
  const routes = new Set<string>();

  if (properties.length === 0) {
    return [];
  }

  routes.add(
    `/properties-in-${localitySlug}`
  );

  for (const property of properties) {
    const type =
      property.propertyType;

    const transaction =
      property.transactionType;

    const bedrooms =
      property.bedrooms;

    const price =
      property.price ?? 0;

    // =====================================================
    // Apartments
    // =====================================================

    if (type === "Apartment") {
      routes.add(
        `/apartments-in-${localitySlug}`
      );

      routes.add(
        `/flats-in-${localitySlug}`
      );

      if (transaction === "Sale") {
        routes.add(
          `/flat-for-sale-in-${localitySlug}`
        );
      }

      if (transaction === "Rent") {
        routes.add(
          `/flat-for-rent-in-${localitySlug}`
        );
      }

      if (bedrooms) {
        routes.add(
          `/${bedrooms}-bhk-apartments-in-${localitySlug}`
        );

        routes.add(
          `/${bedrooms}-bhk-flats-in-${localitySlug}`
        );

        if (transaction === "Sale") {
          routes.add(
            `/${bedrooms}-bhk-flat-for-sale-in-${localitySlug}`
          );
        }

        if (transaction === "Rent") {
          routes.add(
            `/${bedrooms}-bhk-flat-for-rent-in-${localitySlug}`
          );
        }

        for (const [
          budget,
          amount,
        ] of BUDGETS) {
          if (price <= amount) {
            routes.add(
              `/${bedrooms}-bhk-flat-for-${transaction.toLowerCase()}-in-${localitySlug}-under-${budget}`
            );
          }
        }
      }
    }

    // =====================================================
    // Villas
    // =====================================================

    if (type === "Villa") {
      routes.add(
        `/villas-in-${localitySlug}`
      );

      if (transaction === "Sale") {
        routes.add(
          `/villa-for-sale-in-${localitySlug}`
        );
      }

      if (transaction === "Rent") {
        routes.add(
          `/villa-for-rent-in-${localitySlug}`
        );
      }

      if (bedrooms) {
        routes.add(
          `/${bedrooms}-bhk-villas-in-${localitySlug}`
        );

        if (transaction === "Sale") {
          routes.add(
            `/${bedrooms}-bhk-villa-for-sale-in-${localitySlug}`
          );
        }

        if (transaction === "Rent") {
          routes.add(
            `/${bedrooms}-bhk-villa-for-rent-in-${localitySlug}`
          );
        }
      }
    }

    // =====================================================
    // Plots
    // =====================================================

    if (type === "Plot") {
      routes.add(
        `/plots-in-${localitySlug}`
      );

      for (const [
        budget,
        amount,
      ] of BUDGETS) {
        if (price <= amount) {
          routes.add(
            `/plot-in-${localitySlug}-under-${budget}`
          );
        }
      }
    }

    // =====================================================
    // Commercial
    // =====================================================

    if (type === "Commercial") {
      routes.add(
        `/commercial-property-in-${localitySlug}`
      );

      routes.add(
        `/commercial-property-for-${transaction.toLowerCase()}-in-${localitySlug}`
      );
    }

    // =====================================================
    // Generic
    // =====================================================

    if (transaction === "Sale") {
      routes.add(
        `/property-for-sale-in-${localitySlug}`
      );
    }

    if (transaction === "Rent") {
      routes.add(
        `/property-for-rent-in-${localitySlug}`
      );
    }

    for (const [
      budget,
      amount,
    ] of BUDGETS) {
      if (price <= amount) {
        routes.add(
          `/property-in-${localitySlug}-under-${budget}`
        );
      }
    }
  }

  return [
    ...routes,
  ].sort();
}