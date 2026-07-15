interface PropertyItem {
  title: string;
  slug: string;
  images?: string[];
  price?: number;
}

interface ItemListSchemaProps {
  properties: PropertyItem[];
}

export default function ItemListSchema({ properties }: ItemListSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    numberOfItems: properties.length,
    itemListElement: properties.map((property, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://rsnestates.com/property/${property.slug}`,
      item: {
        "@type": "Residence",
        name: property.title,
        image: property.images?.[0] ?? "",
        offers: {
          "@type": "Offer",
          price: property.price ?? 0,
          priceCurrency: "INR",
        },
      },
    })),
  };

  return (
    <script
      id="item-list-schema"
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}