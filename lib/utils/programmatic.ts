export interface ProgrammaticPage {
  title: string;
  description: string;

  propertyType?: string;
  transactionType?: string;

  bedrooms?: number;

  localitySlug?: string;

  propertyStatus?: string;

  furnishing?: string;

  builder?: string;

  project?: string;

  plotFacing?: string;

  gatedCommunity?: boolean;

  cornerPlot?: boolean;

  minPrice?: number;
  maxPrice?: number;
}

// =====================================================
// Dictionaries
// =====================================================

const PROPERTY_TYPES = {
  apartment: "Apartment",
  apartments: "Apartment",
  flat: "Apartment",
  flats: "Apartment",

  villa: "Villa",
  villas: "Villa",

  plot: "Plot",
  plots: "Plot",

  commercial: "Commercial",
};

const TRANSACTIONS = {
  sale: "Sale",
  rent: "Rent",
};

const STATUS = {
  "ready-to-move": "Ready to Move",

  resale: "Resale",

  "under-construction":
    "Under Construction",
};

const BUDGETS: Record<
  string,
  number
> = {
  "25-lakh": 2500000,

  "40-lakh": 4000000,

  "50-lakh": 5000000,

  "60-lakh": 6000000,

  "75-lakh": 7500000,

  "80-lakh": 8000000,

  "90-lakh": 9000000,

  "1-crore": 10000000,

  "125-lakh": 12500000,

  "150-lakh": 15000000,

  "2-crore": 20000000,

  "3-crore": 30000000,

  "5-crore": 50000000,
};

const BUDGET_LABELS: Record<
  number,
  string
> = {
  2500000: "25 Lakh",
  4000000: "40 Lakh",
  5000000: "50 Lakh",
  6000000: "60 Lakh",
  7500000: "75 Lakh",
  8000000: "80 Lakh",
  9000000: "90 Lakh",
  10000000: "1 Crore",
  12500000: "1.25 Crore",
  15000000: "1.5 Crore",
  20000000: "2 Crore",
  30000000: "3 Crore",
  50000000: "5 Crore",
};

// =====================================================
// Helper Functions
// =====================================================

function titleCase(
  value: string
) {
  return value
    .replace(/-/g, " ")
    .replace(
      /\b\w/g,
      (char) =>
        char.toUpperCase()
    );
}

function getBudgetPrice(
  budget: string
) {
  return BUDGETS[budget];
}

function getPropertyType(
  token: string
) {
  return PROPERTY_TYPES[
    token as keyof typeof PROPERTY_TYPES
  ];
}

function getTransactionType(
  token: string
) {
  return TRANSACTIONS[
    token as keyof typeof TRANSACTIONS
  ];
}

function getPropertyStatus(
  token: string
) {
  return STATUS[
    token as keyof typeof STATUS
  ];
}

// =====================================================
// Parse Combined Search Intent
// =====================================================

function parseSearchIntent(
  slug: string
): Partial<ProgrammaticPage> | null {
  const result: Partial<ProgrammaticPage> =
    {};

  // =====================================================
  // Bedrooms
  // =====================================================

  const bhkMatch =
    slug.match(
      /^(\d+)-bhk/
    );

  if (bhkMatch) {
    result.bedrooms =
      Number(
        bhkMatch[1]
      );
  }

  // =====================================================
  // Transaction
  // =====================================================

  const transactionMatch =
    slug.match(
      /for-(sale|rent)/
    );

  if (transactionMatch) {
    result.transactionType =
      getTransactionType(
        transactionMatch[1]
      );
  }

  // =====================================================
  // Property Type
  // =====================================================

  const propertyMatch = slug.match(
    /(?:^|\d+-bhk-)(commercial-property|commercial|apartments|apartment|flats|flat|villas|villa|plots|plot)(?=-|$)/
  );

  if (propertyMatch) {
    const token =
      propertyMatch[1]
        .replace(
          "commercial-property",
          "commercial"
        )
        .replace(
          "apartments",
          "apartment"
        )
        .replace(
          "flats",
          "flat"
        )
        .replace(
          "villas",
          "villa"
        )
        .replace(
          "plots",
          "plot"
        );

    result.propertyType =
      getPropertyType(
        token
      );
  }

  // =====================================================
  // Property Status
  // =====================================================

  const statusMatch =
    slug.match(
      /(ready-to-move|resale|under-construction)/
    );

  if (statusMatch) {
    result.propertyStatus =
      getPropertyStatus(
        statusMatch[1]
      );
  }

  // =====================================================
  // Budget
  // =====================================================

  const budgetMatch =
    slug.match(
      /under-([a-z0-9-]+)$/
    );

  if (budgetMatch) {
    const price =
      getBudgetPrice(
        budgetMatch[1]
      );

    if (price) {
      result.maxPrice =
        price;
    }
  }

  // =====================================================
  // Locality
  // =====================================================

  const localityMatch = slug.match(
    /(?:^|\d+-bhk-)(?:commercial-property|commercial|apartments|apartment|flats|flat|villas|villa|plots|plot)(?:-for-(?:sale|rent))?-in-(.+?)(?:-under-[a-z0-9-]+|$)/
  );

  if (localityMatch) {
    result.localitySlug =
      localityMatch[1];
  }

  if (
    !result.localitySlug
  ) {
    return null;
  }

  // =====================================================
  // Default Transaction
  // =====================================================

  if (
    !result.transactionType
  ) {
    result.transactionType =
      "Sale";
  }

  return result;
}

// =====================================================
// Main Parser
// =====================================================

export function parseProgrammaticSlug(
  slug: string
): ProgrammaticPage | null {
  const parsed =
    parseSearchIntent(slug);

  if (
    !parsed ||
    !parsed.localitySlug
  ) {
    return null;
  }

  const locality =
    titleCase(
      parsed.localitySlug
    );

  const parts: string[] =
    [];

  // =====================================================
  // Property Status
  // =====================================================

  if (
    parsed.propertyStatus
  ) {
    parts.push(
      parsed.propertyStatus
    );
  }

  // =====================================================
  // Bedrooms
  // =====================================================

  if (parsed.bedrooms) {
    parts.push(
      `${parsed.bedrooms} BHK`
    );
  }

  // =====================================================
  // Property Type
  // =====================================================

  switch (
    parsed.propertyType
  ) {
    case "Apartment":
      parts.push("Flat");
      break;

    case "Villa":
      parts.push("Villa");
      break;

    case "Plot":
      parts.push("Plot");
      break;

    case "Commercial":
      parts.push(
        "Commercial Property"
      );
      break;
  }

  // =====================================================
  // Transaction
  // =====================================================

  if (
    parsed.transactionType ===
    "Sale"
  ) {
    parts.push(
      "for Sale"
    );
  }

  if (
    parsed.transactionType ===
    "Rent"
  ) {
    parts.push(
      "for Rent"
    );
  }

  // =====================================================
  // Locality
  // =====================================================

  parts.push(
    `in ${locality}`
  );

  // =====================================================
  // Budget
  // =====================================================

  if (
    parsed.maxPrice
  ) {
    const budget =
      BUDGET_LABELS[
        parsed.maxPrice
      ];

    if (budget) {
      parts.push(
        `Under ${budget}`
      );
    }
  }

  const title =
    parts.join(" ");

  return {
    title,

    description:
      `${title}. Browse verified properties, latest listings, prices, photos and expert assistance from RSN Estates.`,

    propertyType:
      parsed.propertyType,

    transactionType:
      parsed.transactionType,

    bedrooms:
      parsed.bedrooms,

    localitySlug:
      parsed.localitySlug,

    propertyStatus:
      parsed.propertyStatus,

    furnishing:
      parsed.furnishing,

    builder:
      parsed.builder,

    project:
      parsed.project,

    plotFacing:
      parsed.plotFacing,

    gatedCommunity:
      parsed.gatedCommunity,

    cornerPlot:
      parsed.cornerPlot,

    minPrice:
      parsed.minPrice,

    maxPrice:
      parsed.maxPrice,
  };
}