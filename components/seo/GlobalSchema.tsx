export default function GlobalSchema() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",

      "@id": "https://www.rsnestates.com/#organization",

      name: "RSN Estates",

      url: "https://www.rsnestates.com",

      logo: "https://www.rsnestates.com/images/logo-black.png",

      description:
        "RSN Estates is a trusted real estate company in Jaipur helping buyers, sellers and investors find residential, commercial and plotted properties.",

      email: "contact@rsnestates.com",

      sameAs: [
        "https://www.facebook.com/",
        "https://www.instagram.com/",
        "https://www.linkedin.com/",
        "https://www.youtube.com/",
      ],
    },

    {
      "@context": "https://schema.org",

      "@type": "RealEstateAgent",

      "@id": "https://www.rsnestates.com/#realestateagent",

      name: "RSN Estates",

      url: "https://www.rsnestates.com",

      image:
        "https://www.rsnestates.com/images/logo-black.png",

      telephone: "+91-7014210085",

      email: "contact@rsnestates.com",

      areaServed: {
        "@type": "City",
        name: "Jaipur",
      },

      address: {
        "@type": "PostalAddress",

        addressLocality: "Jaipur",

        addressRegion: "Rajasthan",

        postalCode: "302021",

        addressCountry: "IN",
      },
    },

    {
      "@context": "https://schema.org",

      "@type": "WebSite",

      "@id": "https://www.rsnestates.com/#website",

      url: "https://www.rsnestates.com",

      name: "RSN Estates",

      publisher: {
        "@id":
          "https://www.rsnestates.com/#organization",
      },

      potentialAction: {
        "@type": "SearchAction",

        target:
          "https://www.rsnestates.com/properties?search={search_term_string}",

        "query-input":
          "required name=search_term_string",
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}