interface PropertySchemaProps {
  property: any;
}

export default function PropertySchema({
  property,
}: PropertySchemaProps) {
  const schema = {
    "@context": "https://schema.org",

    "@type": "RealEstateListing",

    name: property.title,

    description: property.description,

    url: `https://www.rsnestates.com/properties/${property.slug}`,

    image: property.images,

    datePosted: property.createdAt,

    offers: {
      "@type": "Offer",

      price: property.price,

      priceCurrency: "INR",

      availability: "https://schema.org/InStock",
    },

    mainEntity: {
      "@type":
        property.propertyType === "Apartment"
          ? "Apartment"
          : property.propertyType === "Villa"
          ? "House"
          : "Residence",

      name: property.title,

      numberOfRooms:
        property.bedrooms,

      numberOfBathroomsTotal:
        property.bathrooms,

      floorSize: {
        "@type":
          "QuantitativeValue",

        value:
          property.area,

        unitText:
          property.areaUnit,
      },

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
        __html: JSON.stringify(
          schema
        ),
      }}
    />
  );
}