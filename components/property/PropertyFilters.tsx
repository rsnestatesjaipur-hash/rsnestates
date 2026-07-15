"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { PROPERTY_TYPES } from "@/lib/constants/propertyTypes";
import PropertySearchToolbar from "@/components/property/PropertySearchToolbar";

interface PropertyFiltersProps {
  localities: {
    id: number;
    name: string;
  }[];
}

export default function PropertyFilters({
  localities,
}: PropertyFiltersProps) {
  const router = useRouter();

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
  <section className="bg-slate-50 py-4 dark:bg-slate-950">

    <div className="mx-auto max-w-7xl px-4">

      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">

        <div className="flex flex-nowrap items-end gap-2 overflow-x-auto [&>div]:flex-shrink-0">

          {/* =====================================
              Buy / Rent Tabs
          ===================================== */}

          <div className="flex overflow-hidden rounded-xl border border-slate-300 dark:border-slate-700">

            <button
              type="button"
              onClick={() =>
                setActiveTab("buy")
              }
              className={`px-6 py-4 text-[11px] font-semibold transition ${
                activeTab === "buy"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-slate-700 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
              }`}
            >
              Buy
            </button>

            <button
              type="button"
              onClick={() =>
                setActiveTab("rent")
              }
              className={`px-6 py-3 text-[11px] font-semibold transition ${
                activeTab === "rent"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-slate-700 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
              }`}
            >
              Rent
            </button>

          </div>
{activeTab === "buy" && (

<>

<div className="w-full lg:w-auto lg:min-w-[170px]">

  <label className="mb-2 block text-[11px] font-medium">
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
    }}
    className="h-[48px] w-full rounded-xl border border-slate-300 px-4 dark:border-slate-700 dark:bg-slate-800"
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

<div className="w-full lg:w-auto lg:min-w-[190px]">

  <label className="mb-2 block text-[11px] font-medium">
    Sub Type
  </label>

  <select
    value={buySubType}
    onChange={(e) =>
      setBuySubType(
        e.target.value
      )
    }
    className="h-[48px] w-full rounded-xl border border-slate-300 px-4 dark:border-slate-700 dark:bg-slate-800"
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

<div className="w-full lg:w-auto lg:min-w-[220px]">

  <label className="mb-2 block text-[11px] font-medium">
    Locality
  </label>

  <select
    value={buyLocality}
    onChange={(e) =>
      setBuyLocality(
        e.target.value
      )
    }
    className="h-[48px] w-full rounded-xl border border-slate-300 px-4 dark:border-slate-700 dark:bg-slate-800"
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

<div className="w-full lg:w-auto lg:min-w-[150px]">

  <label className="mb-2 block text-[11px] font-medium">
    Min
  </label>

  <select
    value={buyMinBudget}
    onChange={(e) =>
      setBuyMinBudget(
        e.target.value
      )
    }
    className="h-[48px] w-full rounded-xl border border-slate-300 px-4 dark:border-slate-700 dark:bg-slate-800"
  >
    <option value="">
      No Min
    </option>

    <option value="1000000">
      ₹10 Lakh
    </option>

    <option value="5000000">
      ₹50 Lakh
    </option>

    <option value="10000000">
      ₹1 Crore
    </option>

  </select>

</div>

<div className="min-w-[150px]">

  <label className="mb-2 block text-[11px] font-medium">
    Max
  </label>

  <select
    value={buyMaxBudget}
    onChange={(e) =>
      setBuyMaxBudget(
        e.target.value
      )
    }
    className="h-[48px] w-full rounded-xl border border-slate-300 px-4 dark:border-slate-700 dark:bg-slate-800"
  >
    <option value="">
      No Max
    </option>

    <option value="5000000">
      ₹50 Lakh
    </option>

    <option value="10000000">
      ₹1 Crore
    </option>

    <option value="999999999">
      Above ₹10 Crore
    </option>

  </select>

</div>


  <button
    type="button"
    onClick={handleBuySearch}
    className="h-[48px] w-full rounded-xl bg-blue-600 px-4 font-semibold text-white hover:bg-blue-700"
  >
    Apply Filter
  </button>

</>

)}

{/* =====================================================
RENT
===================================================== */}

{activeTab === "rent" && (

<>

{/* =====================================
    Type
===================================== */}

<div>
  <label className="mb-2 block text-[11px] font-semibold">
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
  <label className="mb-2 block text-[11px] font-semibold">
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

<div
  className={`${
    rentPropertyType === "Residential"
      ? "block"
      : "invisible"
  } w-[170px] flex-shrink-0`}
>
  <label className="mb-2 block text-[11px] font-semibold">
    Bedrooms
  </label>

  <select
    value={rentBedrooms}
    onChange={(e) =>
      setRentBedrooms(e.target.value)
    }
    disabled={
      rentPropertyType !== "Residential"
    }
    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
  >
    <option value="">Any</option>
    <option value="0">Studio Apartment</option>
    <option value="1 RK">1 RK</option>
    <option value="1 BHK">1 BHK</option>
    <option value="2 BHK">2 BHK</option>
    <option value="3 BHK">3 BHK</option>
    <option value="4 BHK">4 BHK</option>
    <option value="5 BHK">5 BHK</option>
    <option value="6 BHK">6+ BHK</option>
  </select>
</div>

  {/* =====================================
      Locality
  ===================================== */}

<div className="w-[180px]">
  <label className="mb-2 block text-[11px] font-semibold">
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

<div className="w-[120px]">

  <label className="mb-2 block text-[11px] font-semibold">
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

<div className="w-[120px]">

  <label className="mb-2 block text-[11px] font-semibold">
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

<button
    type="button"
    onClick={handleRentSearch}
    className="h-[48px] rounded-xl bg-blue-600 px-4 font-semibold text-white hover:bg-blue-700"
  >
    Apply Filter
  </button>

</>

)}
</div>

</div>

</div>
</section>
);
}