export interface PropertyFieldConfig {
  showBedrooms: boolean;
  showBathrooms: boolean;
  showBalconies: boolean;

  showSuperBuiltupArea: boolean;
  showCarpetArea: boolean;

  showDimensions: boolean;
  showLength: boolean;
  showWidth: boolean;

  showBuildingDetails: boolean;
  showConstructionDetails: boolean;
}

export const propertyFields = {
  Apartment: {
    showBedrooms: true,
    showBathrooms: true,
    showBalconies: true,

    showSuperBuiltupArea: true,
    showCarpetArea: true,

    showDimensions: false,
    showLength: false,
    showWidth: false,

    showBuildingDetails: true,
    showConstructionDetails: true,
  },

  Villa: {
    showBedrooms: true,
    showBathrooms: true,
    showBalconies: true,

    showSuperBuiltupArea: true,
    showCarpetArea: true,

    showDimensions: false,
    showLength: false,
    showWidth: false,

    showBuildingDetails: true,
    showConstructionDetails: true,
  },

  Plot: {
    showBedrooms: false,
    showBathrooms: false,
    showBalconies: false,

    showSuperBuiltupArea: false,
    showCarpetArea: false,

    showDimensions: true,
    showLength: true,
    showWidth: true,

    showBuildingDetails: false,
    showConstructionDetails: false,
  },
} satisfies Record<string, PropertyFieldConfig>;