interface BreadcrumbSchemaProps {
  title: string;
  url: string;
}

export default function BreadcrumbSchema({ title, url }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://rsnestates.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: title,
        item: `https://rsnestates.com${url}`,
      },
    ],
  };

  return (
    <script
      id="breadcrumb-schema"
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}