// =====================================================
// Fictional Projects
// Used for Demo Property Generator
// =====================================================

export const PROJECTS: Record<
  string,
  string[]
> = {
  jagatpura: [
    "Emerald Heights",
    "Skyline Residency",
    "Green Valley Homes",
    "Royal Enclave",
    "Urban Heights",
    "Crystal Greens",
    "Silver Residency",
    "Palm Meadows",
  ],

  "vaishali-nagar": [
    "Golden Avenue",
    "Elite Residency",
    "Harmony Heights",
    "Park View Homes",
    "Blue Orchid",
    "Urban Elite",
    "City Central",
    "Green Square",
  ],

  mansarovar: [
    "Silver Springs",
    "Royal Meadows",
    "Crystal Park",
    "Sunrise Homes",
    "Green Horizon",
    "Sky Gardens",
    "Palm Residency",
    "The Grand",
  ],

  "malviya-nagar": [
    "Prestige Heights",
    "Urban Greens",
    "Elite Park",
    "Lake View Residency",
    "Royal Palm",
    "Harmony Residency",
    "Blue Meadows",
    "Crystal Avenue",
  ],

  "pratap-nagar": [
    "Dream Residency",
    "Green Orchid",
    "Sunshine Residency",
    "Royal County",
    "Urban Paradise",
    "Skyline Greens",
    "Palm County",
    "Silver Woods",
  ],

  "ajmer-road": [
    "Grand Residency",
    "Emerald Park",
    "Infinity Homes",
    "Royal Lifestyle",
    "Urban Nest",
    "Harmony Greens",
    "Green Meadows",
    "Crystal Valley",
  ],

  "sirsi-road": [
    "Elite Homes",
    "Golden Residency",
    "Park Avenue",
    "Blue Valley",
    "Palm Heights",
    "Royal Gardens",
    "Green County",
    "Sunrise Valley",
  ],

  "kalwar-road": [
    "City View",
    "Urban County",
    "Silver Park",
    "Royal Horizon",
    "Green Lifestyle",
    "Crystal Homes",
    "Palm Estate",
    "Sky Residency",
  ],
};

// =====================================================
// Returns Project Name
// =====================================================

export function getProject(
  localitySlug: string,
  index: number
) {
  const projects =
    PROJECTS[localitySlug] ?? [];

  if (projects.length === 0) {
    return "";
  }

  return projects[
    index % projects.length
  ];
}