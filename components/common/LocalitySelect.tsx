"use client";

import { useEffect, useState } from "react";

interface Locality {
  id: number;
  name: string;
}

interface LocalitySelectProps {
  name: string;
  placeholder?: string;
  defaultValue?: string;
  required?: boolean;
  className?: string;

  showAnyOption?: boolean;
}

export default function LocalitySelect({
  name,
  placeholder = "Select Locality",
  defaultValue = "",
  required = false,
  className = "",
  showAnyOption = true,
}: LocalitySelectProps) {
  const [localities, setLocalities] = useState<
    Locality[]
  >([]);

  useEffect(() => {
    async function loadLocalities() {
      try {
        const response = await fetch(
          "/api/localities"
        );

        const data = await response.json();

        setLocalities(
          [...data].sort((a, b) =>
            a.name.localeCompare(b.name)
          )
        );
      } catch (error) {
        console.error(
          "Failed to load localities:",
          error
        );
      }
    }

    loadLocalities();
  }, []);

  return (
    <select
      name={name}
      required={required}
      defaultValue={defaultValue}
      className={`w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white ${className}`}
    >
      <option value="">
        {placeholder}
      </option>

      {showAnyOption && (
        <option value="Any Locality">
          Any Locality
        </option>
      )}

      {localities.map((locality) => (
        <option
          key={locality.id}
          value={locality.name}
        >
          {locality.name}
        </option>
      ))}
    </select>
  );
}