export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": "https://www.rsnestates.com/#realestateagent",

    name: "RSN Estates",

    url: "https://www.rsnestates.com",

    image: "https://www.rsnestates.com/images/logo-black.png",

    description:
      "RSN Estates is a trusted real estate consultant in Jaipur offering verified residential, commercial and investment properties.",

    areaServed: {
      "@type": "City",
      name: "Jaipur",
    },

    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },

    telephone: "+91-XXXXXXXXXX",

    email: "info@rsnestates.com",

    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}