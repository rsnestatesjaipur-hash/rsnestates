// =====================================================
// Apartment Amenities
// =====================================================

export const APARTMENT_AMENITIES = [
  "24x7 Security",
  "Power Backup",
  "Lift",
  "Club House",
  "Swimming Pool",
  "Gymnasium",
  "Children's Play Area",
  "Jogging Track",
  "Landscaped Garden",
  "Visitor Parking",
  "Rain Water Harvesting",
  "Fire Safety",
];

// =====================================================
// Villa Amenities
// =====================================================

export const VILLA_AMENITIES = [
  "Private Garden",
  "Private Terrace",
  "24x7 Security",
  "Club House",
  "Swimming Pool",
  "Gymnasium",
  "Children's Play Area",
  "Power Backup",
  "Jogging Track",
  "Gated Community",
];

// =====================================================
// Plot Amenities
// =====================================================

export const PLOT_AMENITIES = [
  "Gated Community",
  "24x7 Security",
  "Wide Roads",
  "Street Lighting",
  "Underground Electricity",
  "Water Supply",
  "Sewer Line",
  "Park",
];

// =====================================================
// Commercial Amenities
// =====================================================

export const COMMERCIAL_AMENITIES = [
  "Power Backup",
  "Lift",
  "Reserved Parking",
  "Visitor Parking",
  "24x7 Security",
  "CCTV Surveillance",
  "Fire Safety",
  "High Speed Internet",
];

// =====================================================
// Returns Random Amenities
// =====================================================

export function getAmenities(
  amenities: string[],
  count = 6
) {
  const shuffled = [...amenities].sort(
    () => Math.random() - 0.5
  );

  return shuffled.slice(0, count);
}