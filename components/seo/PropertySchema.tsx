// =====================================================
// Property Schema
// Schema.org JSON-LD for Individual Property Listing
// =====================================================

interface PropertySchemaProps {
  property: any;
}

export default function PropertySchema({
  property,
}: PropertySchemaProps) {
  // ===================================================
  // Determine Property Type
  // ===================================================

  const propertySchemaType =
    property.propertySubType === "Apartment"
      ? "Apartment"
      : [
          "Villa",
          "Duplex Villa",
          "Independent House",
          "Bungalow",
          "Row House",
          "Farm House",
          "House",
        ].includes(
          property.propertySubType
        )
      ? "House"
      : "Residence";

  // ===================================================
  // Schema
  // ===================================================

  const schema = {
    "@context":
      "https://schema.org",

    "@type":
      "RealEstateListing",

    name:
      property.title,

    description:
      property.description,

    url: `https://www.rsnestates.com/properties/${property.slug}`,

    image:
      property.images,

    datePosted:
      property.createdAt,

    offers: {
      "@type":
        "Offer",

      price:
        property.price,

      priceCurrency:
        "INR",

      availability:
        "https://schema.org/InStock",
    },

    mainEntity: {
      "@type":
        propertySchemaType,

      name:
        property.title,

      // ===============================================
      // Supported Property
      // ===============================================

      numberOfBedrooms:
        property.bedrooms > 0
          ? {
              "@type":
                "QuantitativeValue",

              value:
                property.bedrooms,
            }
          : undefined,

      address: {
        "@type":
          "PostalAddress",

        addressLocality:
          property.locality,

        addressRegion:
          property.state,

        addressCountry:
          "IN",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html:
          JSON.stringify(
            schema
          ),
      }}
    />
  );
}