"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { PROPERTY_TYPES } from "@/lib/constants/propertyTypes";

interface PropertySearchProps {
  localities: {
    id: number;
    name: string;
  }[];
}

export default function PropertySearch({
  localities,
}: PropertySearchProps) {
  const router = useRouter();

  const heroImages = [
  {
    image: "/images/jal-mahal.webp",
    title: "Jal Mahal",
    credit:
      "https://www.incredibleindia.gov.in/en/rajasthan/jaipur/jal-mahal",
  },
  {
    image: "/images/amber-fort.webp",
    title: "Amber Fort",
    credit:
      "https://www.incredibleindia.gov.in/en/rajasthan/jaipur/amber-fort",
  },
  {
    image: "/images/albert-hall.webp",
    title: "Albert Hall Museum",
    credit:
      "https://www.incredibleindia.gov.in/en/rajasthan/jaipur/albert-hall-museum",
  },
];

const [currentImage, setCurrentImage] =
  useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    setCurrentImage(
      (prev) =>
        (prev + 1) %
        heroImages.length
    );
  }, 5000);

  return () => clearInterval(timer);
}, []);

  // =====================================================
  // Main Tabs
  // =====================================================

  const [activeTab, setActiveTab] =
    useState<"buy" | "sell" | "rent">(
      "buy"
    );

  // =====================================================
  // Buy Search
  // =====================================================

const [buyPropertyType, setBuyPropertyType] =
  useState<
    | "Residential"
    | "Commercial"
    | "Plot / Land"
  >("Residential");

  const [buySubType, setBuySubType] =
    useState("");

  const [buyBedrooms, setBuyBedrooms] =
    useState("");

  const [buyLocality, setBuyLocality] =
    useState("");

  const [buyMinBudget, setBuyMinBudget] =
    useState("");

  const [buyMaxBudget, setBuyMaxBudget] =
    useState("");

  // =====================================================
  // Rent Search
  // =====================================================

const [rentPropertyType, setRentPropertyType] =
  useState<
    | "Residential"
    | "Commercial"
    | "Plot / Land"
    | "PG / Hostel"
  >("Residential");

  const [rentSubType, setRentSubType] =
    useState("");

  const [rentBedrooms, setRentBedrooms] =
    useState("");

  const [rentLocality, setRentLocality] =
    useState("");

  const [rentMinBudget, setRentMinBudget] =
    useState("");

  const [rentMaxBudget, setRentMaxBudget] =
    useState("");

  // =====================================================
  // Buy Search
  // =====================================================

function handleBuySearch() {
  const params =
    new URLSearchParams();

  params.set(
    "transaction",
    "sell"
  );

  params.set(
    "type",
    buyPropertyType
  );

if (buySubType) {
  params.set(
    "subType",
    buySubType
  );
}

  if (buyLocality) {
    params.set(
      "locality",
      buyLocality
    );
  }

  if (buyMinBudget) {
    params.set(
      "min",
      buyMinBudget
    );
  }

  if (buyMaxBudget) {
    params.set(
      "max",
      buyMaxBudget
    );
  }

  router.push(
    `/properties?${params.toString()}`
  );
}
  // =====================================================
  // Rent Search
  // =====================================================

function handleRentSearch() {
  const params =
    new URLSearchParams();

  params.set(
    "transaction",
    "rent"
  );

  params.set(
    "type",
    rentPropertyType
  );

  if (rentSubType) {
    params.set(
      "subType",
      rentSubType
    );
  }

    if (
      rentPropertyType ===
        "Residential" &&
      rentBedrooms
    ) {
      params.set(
        "bedrooms",
        rentBedrooms
      );
    }

  if (rentLocality) {
    params.set(
      "locality",
      rentLocality
    );
  }

  if (rentMinBudget) {
    params.set(
      "min",
      rentMinBudget
    );
  }

  if (rentMaxBudget) {
    params.set(
      "max",
      rentMaxBudget
    );
  }

  router.push(
    `/properties?${params.toString()}`
  );
}

  // =====================================================
  // Sell
  // =====================================================

  function handleSellClick() {
    router.push(
      "/portal/properties/new"
    );
  }

  // =====================================================
  // UI
  // =====================================================

  return (
<section
  className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-16 transition-all duration-1000"
  style={{
    backgroundImage: `url(${heroImages[currentImage].image})`,
  }}
>
  <div className="absolute inset-0 bg-slate-950/55" />

  <div className="absolute bottom-4 left-4 z-20 rounded-lg bg-black/50 px-3 py-2 text-xs text-white backdrop-blur-sm">
    📷 Photo:&nbsp;
    <a
      href={heroImages[currentImage].credit}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium underline underline-offset-2 hover:text-amber-300"
    >
      {heroImages[currentImage].title}
    </a>
    &nbsp;•&nbsp;Incredible India
  </div>

  <div className="relative z-10 mx-auto max-w-7xl px-4">

      {/* =====================================================
          Heading
      ===================================================== */}

      <div className="mb-10 text-center">

        <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
          Jaipur's Smartest Property Search
        </h2>

        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Find verified homes, villas, plots & commercial spaces.
        </p>

      </div>

      {/* =====================================================
          Tabs
      ===================================================== */}

      <div className="mx-auto mb-10 flex max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900">

        {/* Buy */}

        <button
          type="button"
          onClick={() =>
            setActiveTab("buy")
          }
          className={`flex-1 px-6 py-4 text-center font-semibold transition ${
            activeTab === "buy"
              ? "bg-blue-600 text-white"
              : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          }`}
        >
          Buy
        </button>

        {/* Sell */}

        <button
          type="button"
          onClick={() =>
            setActiveTab("sell")
          }
          className={`flex-1 px-6 py-4 text-center font-semibold transition ${
            activeTab === "sell"
              ? "bg-blue-600 text-white"
              : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          }`}
        >
          Sell
        </button>

        {/* Rent */}

        <button
          type="button"
          onClick={() =>
            setActiveTab("rent")
          }
          className={`flex-1 px-6 py-4 text-center font-semibold transition ${
            activeTab === "rent"
              ? "bg-blue-600 text-white"
              : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          }`}
        >
          Rent
        </button>

      </div>

      {/* =====================================================
          BUY
      ===================================================== */}
{activeTab === "buy" && (

  <div className="rounded-3xl border border-white/40bg-white/50 p-8 shadow-2xl backdrop-blur-xl dark:border-slate-600/50 dark:bg-slate-900/55">

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-6">

      {/* Type */}

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Type
        </label>

<select
  value={buyPropertyType}
  onChange={(e) => {
    setBuyPropertyType(
      e.target.value as
        | "Residential"
        | "Commercial"
        | "Plot / Land"
    );

    setBuySubType("");
    setBuyBedrooms("");
  }}
  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
>
  <option value="Residential">
    Residential
  </option>

  <option value="Commercial">
    Commercial
  </option>

  <option value="Plot / Land">
    Plot / Land
  </option>
</select>
      </div>

      {/* Sub Type */}

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Sub Type
        </label>

<select
  value={buySubType}
  onChange={(e) =>
    setBuySubType(
      e.target.value
    )
  }
  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
>
  <option value="">
    Any
  </option>

{PROPERTY_TYPES[
  buyPropertyType
].map((item: string) => (
  <option
    key={item}
    value={item}
  >
    {item}
  </option>
))}
</select>
      </div>

      {/* Locality */}

      <div>

        <label className="mb-2 block text-sm font-semibold">
          Locality
        </label>

        <select
          value={buyLocality}
          onChange={(e) =>
            setBuyLocality(
              e.target.value
            )
          }
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
        >
          <option value="">
            All Localities
          </option>

          {localities.map(
            (locality) => (
              <option
                key={locality.id}
                value={locality.name}
              >
                {locality.name}
              </option>
            )
          )}

        </select>

      </div>

      {/* Min Budget */}

<div>

  <label className="mb-2 block text-sm font-semibold">
    Min Budget
  </label>

  <select
    value={buyMinBudget}
    onChange={(e) =>
      setBuyMinBudget(
        e.target.value
      )
    }
    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
  >
    <option value="">
      No Min
    </option>

    <option value="1000000">
      ₹10 Lakh
    </option>

    <option value="2000000">
      ₹20 Lakh
    </option>

    <option value="3000000">
      ₹30 Lakh
    </option>

    <option value="4000000">
      ₹40 Lakh
    </option>

    <option value="5000000">
      ₹50 Lakh
    </option>

    <option value="7500000">
      ₹75 Lakh
    </option>

    <option value="10000000">
      ₹1 Crore
    </option>

    <option value="20000000">
      ₹2 Crore
    </option>

    <option value="50000000">
      ₹5 Crore
    </option>

    <option value="100000000">
      ₹10 Crore
    </option>

  </select>

</div>

{/* =====================================
    Max Budget
===================================== */}

<div>

  <label className="mb-2 block text-sm font-semibold">
    Max Budget
  </label>

  <select
    value={buyMaxBudget}
    onChange={(e) =>
      setBuyMaxBudget(
        e.target.value
      )
    }
    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
  >
    <option value="">
      No Max
    </option>

    <option value="1000000">
      ₹10 Lakh
    </option>

    <option value="2000000">
      ₹20 Lakh
    </option>

    <option value="3000000">
      ₹30 Lakh
    </option>

    <option value="4000000">
      ₹40 Lakh
    </option>

    <option value="5000000">
      ₹50 Lakh
    </option>

    <option value="7500000">
      ₹75 Lakh
    </option>

    <option value="10000000">
      ₹1 Crore
    </option>

    <option value="20000000">
      ₹2 Crore
    </option>

    <option value="50000000">
      ₹5 Crore
    </option>

    <option value="100000000">
      ₹10 Crore
    </option>

    <option value="999999999">
      Above ₹10 Crore
    </option>

  </select>

</div>

    </div>

    <div className="mt-8 flex justify-center">

      <button
        type="button"
        onClick={handleBuySearch}
        className="rounded-xl bg-blue-600 px-10 py-4 font-semibold text-white transition hover:bg-blue-700"
      >
        Search Properties
      </button>

    </div>

  </div>

)}

      {/* =====================================================
          SELL
      ===================================================== */}

      {activeTab === "sell" && (

        <div className="rounded-3xl border border-white/40 bg-white/50 p-8 shadow-2xl backdrop-blur-xl dark:border-slate-600/50 dark:bg-slate-900/55">

         <div className="mx-auto max-w-4xl text-center">

  {/* Icon */}

  <div className="mb-6 text-6xl">
    🏡
  </div>

  {/* Heading */}

  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
    Sell Your Property Faster
  </h2>

  {/* Description */}

  <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
    Reach thousands of genuine buyers looking for
    residential, commercial and land properties across
    Jaipur. Create your property listing in just a few
    minutes and start receiving enquiries instantly.
  </p>

  {/* Features */}

  <div className="mt-10 grid gap-6 md:grid-cols-3">

    <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-700">

      <div className="mb-3 text-4xl">
        🚀
      </div>

      <h3 className="font-semibold">
        Fast Listing
      </h3>

      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        Publish your property within minutes.
      </p>

    </div>

    <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-700">

      <div className="mb-3 text-4xl">
        👥
      </div>

      <h3 className="font-semibold">
        Genuine Buyers
      </h3>

      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        Connect directly with verified buyers and
        investors.
      </p>

    </div>

    <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-700">

      <div className="mb-3 text-4xl">
        📈
      </div>

      <h3 className="font-semibold">
        Maximum Visibility
      </h3>

      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        Showcase your property to thousands of
        active visitors every day.
      </p>

    </div>

  </div>

  {/* CTA */}

  <button
    type="button"
    onClick={handleSellClick}
    className="mt-10 rounded-xl bg-amber-500 px-10 py-4 text-lg font-semibold text-slate-900 transition hover:bg-amber-400"
  >
    Post Property FREE
  </button>

  <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
    No brokerage • No hidden charges • Start
    receiving enquiries today.
  </p>

</div>

        </div>

      )}

      {/* =====================================================
          RENT
      ===================================================== */}

      {activeTab === "rent" && (

        <div className="rounded-3xl border border-white/405bg-white/50 p-8 shadow-2xl backdrop-blur-xl dark:border-slate-600/50 dark:bg-slate-900/55">

         <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-6">

{/* =====================================
    Type
===================================== */}

<div>
  <label className="mb-2 block text-sm font-semibold">
    Type
  </label>

  <select
    value={rentPropertyType}
    onChange={(e) => {
      setRentPropertyType(
        e.target.value as
          | "Residential"
          | "Commercial"
          | "Plot / Land"
          | "PG / Hostel"
      );

      setRentSubType("");
      setRentBedrooms("");
    }}
    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
  >
    <option value="Residential">
      Residential
    </option>

    <option value="Commercial">
      Commercial
    </option>

    <option value="Plot / Land">
      Plot / Land
    </option>

    <option value="PG / Hostel">
      PG / Hostel
    </option>
  </select>
</div>

{/* =====================================
    Sub Type
===================================== */}

<div>
  <label className="mb-2 block text-sm font-semibold">
    Sub Type
  </label>

  <select
    value={rentSubType}
    onChange={(e) =>
      setRentSubType(
        e.target.value
      )
    }
    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
  >
    <option value="">
      Any
    </option>

{PROPERTY_TYPES[
  rentPropertyType
].map((item: string) => (
  <option
    key={item}
    value={item}
  >
    {item}
  </option>
))}

    {rentPropertyType ===
      "Plot / Land" &&
      [
        "Residential Plot",
        "Commercial Plot",
        "Industrial Plot",
        "Agricultural Land",
        "Farm Land",
        "Mixed Use Land",
        "Institutional Land",
      ].map((item) => (
        <option
          key={item}
          value={item}
        >
          {item}
        </option>
      ))}

    {rentPropertyType ===
      "PG / Hostel" &&
      [
        "Boys PG",
        "Girls PG",
        "Co-living",
        "Hostel",
      ].map((item) => (
        <option
          key={item}
          value={item}
        >
          {item}
        </option>
      ))}
  </select>
</div>

  {/* =====================================
      Bedrooms
  ===================================== */}

{
rentPropertyType ===
"Residential" && (
  <div>
    <label className="mb-2 block text-sm font-semibold">
      Bedrooms
    </label>

    <select
      value={rentBedrooms}
      onChange={(e) =>
        setRentBedrooms(
          e.target.value
        )
      }
      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
    >
      <option value="">
        Any
      </option>

      <option value="0">
        Studio Apartment
      </option>

      <option value="1 RK">
        1 RK
      </option>

      <option value="1 BHK">
        1 BHK
      </option>

      <option value="2 BHK">
        2 BHK
      </option>

      <option value="3 BHK">
        3 BHK
      </option>

      <option value="4 BHK">
        4 BHK
      </option>

      <option value="5 BHK">
        5 BHK
      </option>

      <option value="6 BHK">
        6+ BHK
      </option>
    </select>
  </div>
)}

  {/* =====================================
      Locality
  ===================================== */}

  <div>
    <label className="mb-2 block text-sm font-semibold">
      Locality
    </label>

    <select
      value={rentLocality}
      onChange={(e) =>
        setRentLocality(
          e.target.value
        )
      }
      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
    >
      <option value="">
        All Localities
      </option>

      {localities.map(
        (locality) => (
          <option
            key={locality.id}
            value={locality.name}
          >
            {locality.name}
          </option>
        )
      )}
    </select>
  </div>

  {/* =====================================
      Min Budget
  ===================================== */}

<div>

  <label className="mb-2 block text-sm font-semibold">
    Min Budget
  </label>

  <select
    value={rentMinBudget}
    onChange={(e) =>
      setRentMinBudget(
        e.target.value
      )
    }
    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
  >
    <option value="">
      No Min
    </option>

    <option value="5000">
      ₹5,000
    </option>

    <option value="10000">
      ₹10,000
    </option>

    <option value="15000">
      ₹15,000
    </option>

    <option value="20000">
      ₹20,000
    </option>

    <option value="30000">
      ₹30,000
    </option>

    <option value="50000">
      ₹50,000
    </option>

    <option value="75000">
      ₹75,000
    </option>

    <option value="100000">
      ₹1 Lakh
    </option>

  </select>

</div>

{/* =====================================
    Max Budget
===================================== */}

<div>

  <label className="mb-2 block text-sm font-semibold">
    Max Budget
  </label>

  <select
    value={rentMaxBudget}
    onChange={(e) =>
      setRentMaxBudget(
        e.target.value
      )
    }
    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
  >
    <option value="">
      No Max
    </option>

    <option value="5000">
      ₹5,000
    </option>

    <option value="10000">
      ₹10,000
    </option>

    <option value="15000">
      ₹15,000
    </option>

    <option value="20000">
      ₹20,000
    </option>

    <option value="30000">
      ₹30,000
    </option>

    <option value="50000">
      ₹50,000
    </option>

    <option value="75000">
      ₹75,000
    </option>

    <option value="100000">
      ₹1 Lakh
    </option>

    <option value="999999999">
      Above ₹1 Lakh
    </option>

  </select>

</div>

</div>

          {/* =====================================
              Search Button
          ===================================== */}

          <div className="mt-8 flex justify-center">

            <button
              type="button"
              onClick={handleRentSearch}
              className="rounded-xl bg-blue-600 px-10 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Search Rental Properties
            </button>

          </div>

        </div>

      )}

    </div>

  </section>
);
}