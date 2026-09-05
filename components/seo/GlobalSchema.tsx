export default function GlobalSchema() {

  const BASE_URL =
    "https://www.rsnestates.com";

  const schema = [
    // ========================================================
    // Organization
    // ========================================================

    {
      "@context": "https://schema.org",

      "@type":
        "Organization",

      "@id":
        `${BASE_URL}/#organization`,

      name:
        "RSN Estates",

      url:
        BASE_URL,

      logo:
        `${BASE_URL}/images/logo-black.png`,

      description:
        "RSN Estates is a trusted real estate company in Jaipur helping buyers, sellers and investors find residential, commercial and plotted properties.",

      email:
        "contact@rsnestates.com",
    },

    // ========================================================
    // Real Estate Agent
    // ========================================================

    {
      "@context": "https://schema.org",

      "@type":
        "RealEstateAgent",

      "@id":
        `${BASE_URL}/#realestateagent`,

      name:
        "RSN Estates",

      url:
        BASE_URL,

      image:
        `${BASE_URL}/images/logo-black.png`,

      telephone:
        "+91-7014210085",

      email:
        "contact@rsnestates.com",

      areaServed: {
        "@type":
          "City",

        name:
          "Jaipur",
      },

      address: {
        "@type":
          "PostalAddress",

        addressLocality:
          "Jaipur",

        addressRegion:
          "Rajasthan",

        postalCode:
          "302021",

        addressCountry:
          "IN",
      },
    },

    {
      "@context": "https://schema.org",

      "@type":
        "WebSite",

      "@id":
        `${BASE_URL}/#website`,

      url:
        BASE_URL,

      name:
        "RSN Estates",

      publisher: {
        "@id":
          `${BASE_URL}/#organization`,
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html:
          JSON.stringify(schema),
      }}
    />
  );
}