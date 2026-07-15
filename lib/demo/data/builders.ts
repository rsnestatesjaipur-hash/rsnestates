// =====================================================
// Fictional Builders
// Used for Demo Property Generator
// =====================================================

export const BUILDERS = [
  "RSN Developers",

  "Skyline Buildtech",

  "Urban Nest Realty",

  "Prime Horizon Developers",

  "BlueStone Infra",

  "GreenLeaf Homes",

  "Capital Buildcon",

  "Sunrise Developers",

  "Elite Spaces",

  "Metro Buildtech",

  "Royal Habitat",

  "SilverStone Developers",

  "Urban Crest Builders",

  "FutureNest Realty",

  "Pinnacle Homes",

  "DreamScape Developers",

  "Grand Arc Buildcon",

  "Infinity Infra",

  "NextGen Realty",

  "Blue Horizon Developers",
];

// =====================================================
// Returns Builder Name
// =====================================================

export function getBuilder(
  index: number
) {
  return BUILDERS[
    index % BUILDERS.length
  ];
}