// =====================================================
// Jaipur Demo Pricing
// Average Prices
// =====================================================

export const PRICE_CONFIG = {
  apartments: {
    Sell: {
      min: 3500000,
      max: 25000000,
    },

    Rent: {
      min: 12000,
      max: 85000,
    },
  },

  villas: {
    Sell: {
      min: 9000000,
      max: 65000000,
    },

    Rent: {
      min: 30000,
      max: 250000,
    },
  },

  residentialPlot: {
    Sell: {
      min: 1800000,
      max: 55000000,
    },
  },

  commercialPlot: {
    Sell: {
      min: 3000000,
      max: 90000000,
    },
  },

  agriculturalLand: {
    Sell: {
      min: 4500000,
      max: 200000000,
    },
  },

  commercial: {
    Sell: {
      min: 2500000,
      max: 120000000,
    },

    Rent: {
      min: 10000,
      max: 500000,
    },
  },
};

// =====================================================
// Random Price Generator
// =====================================================

export function getRandomPrice(
  min: number,
  max: number
) {
  return (
    Math.floor(
      Math.random() *
        ((max - min) / 50000)
    ) *
      50000 +
    min
  );
}