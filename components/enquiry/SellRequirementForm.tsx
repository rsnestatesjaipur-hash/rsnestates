"use client";

import { useState } from "react";

import LocalitySelect from "@/components/common/LocalitySelect";

import TurnstileWidget from "@/components/common/TurnstileWidget";

interface SellRequirementFormProps {
  token: string;
  enquiry: any;
}

export default function SellRequirementForm({
  token,
  enquiry,
}: SellRequirementFormProps) {
  // =====================================================
  // State
  // =====================================================

const [isSubmitting, setIsSubmitting] =
  useState(false);

const [isSubmitted, setIsSubmitted] =
  useState(false);

  const [
  turnstileToken,
  setTurnstileToken,
] = useState("");

  const [propertyType, setPropertyType] =
    useState("");

  // =====================================================
  // Submit
  // =====================================================

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const form = e.currentTarget;

      const formData = new FormData(form);

      if (!turnstileToken) {
          alert(
            "Please complete the security verification."
          );

          setIsSubmitting(false);

          return;
        }

      const additionalDetails = {
        propertyType:
          formData.get("propertyType"),
        propertyLocality:
          formData.get("propertyLocality"),
        propertyStatus:
          formData.get("propertyStatus"),
        propertySize:
          formData.get("propertySize"),
        expectedPrice:
          formData.get("expectedPrice"),
        description:
          formData.get("description"),
      };

      const response = await fetch(
        "/api/enquiry/complete",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            token,
            additionalDetails,
            "cf-turnstile-response":
              turnstileToken,
          }),
        }
      );

      const result =
        await response.json();

      if (!result.success) {
        alert("Failed to save.");
        return;
      }

    setIsSubmitted(true);

    form.reset();

    setPropertyType("");
    } catch (error) {
      console.error(error);

      alert("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {/* ================================================
          Heading
      ================================================ */}

      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        Property Details
      </h2>

      <p className="mt-2 text-slate-600 dark:text-slate-300">
        Please provide a few more details about
        your property.
      </p>

      {/* ================================================
          Form
      ================================================ */}

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-6"
      >
        {/* Property Type */}

        <div>
          <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
            Property Type
          </label>

          <select
            name="propertyType"
            value={propertyType}
            onChange={(e) =>
              setPropertyType(
                e.target.value
              )
            }
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          >
            <option value="">
              Select Property Type
            </option>

            <option value="Apartment">
              Apartment
            </option>

            <option value="Villa">
              Villa
            </option>

            <option value="Plot">
              Plot
            </option>

            <option value="Commercial">
              Commercial
            </option>
          </select>
        </div>

        {/* Property Locality */}

        <div>
          <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
            Property Locality
          </label>

          <LocalitySelect
            name="propertyLocality"
            placeholder="Select Property Locality"
            showAnyOption={false}
          />
        </div>

        {/* Property Status */}

        <div>
          <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
            Property Status
          </label>

          <select
            name="propertyStatus"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          >
            <option value="">
              Select Status
            </option>

            <option value="Ready to Move">
              Ready to Move
            </option>

            <option value="Under Construction">
              Under Construction
            </option>

            <option value="Resale">
              Resale
            </option>
          </select>
        </div>

        {/* Property Size */}

        <div>
          <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
            Property Size (
            {propertyType === "Plot"
              ? "Sq. Yd."
              : "Sq. Ft."}
            )
          </label>

          <input
            type="number"
            name="propertySize"
            placeholder={
              propertyType === "Plot"
                ? "e.g. 300"
                : "e.g. 1800"
            }
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
        </div>

        {/* Expected Selling Price */}

        <div>
          <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
            Expected Selling Price
          </label>

          <div className="flex overflow-hidden rounded-xl border border-slate-300 dark:border-slate-700">
            <span className="flex items-center bg-slate-100 px-4 text-lg font-semibold text-slate-700 dark:bg-slate-800 dark:text-white">
              ₹
            </span>

            <input
              type="number"
              name="expectedPrice"
              placeholder="Enter Expected Selling Price"
              className="w-full border-0 bg-white px-4 py-3 text-slate-900 outline-none dark:bg-slate-900 dark:text-white"
            />
          </div>
        </div>

        {/* Property Description */}

        <div>
          <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
            Property Description
          </label>

          <textarea
            rows={5}
            name="description"
            placeholder="Tell us about your property..."
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400"
          />
        </div>

        {/* Submit Button */}

        <TurnstileWidget
            onVerify={setTurnstileToken}
            onExpire={() =>
              setTurnstileToken("")
            }
            onError={() =>
              setTurnstileToken("")
            }
          />

        <div className="space-y-4">
        <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-amber-500 px-6 py-4 font-semibold text-slate-900 transition hover:bg-amber-400 disabled:opacity-50"
        >
            {isSubmitting
            ? "Submitting..."
            : "Submit Requirements"}
        </button>

        {isSubmitted && (
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-center">
            <div className="mb-2 text-3xl">
                ✅
            </div>

            <h3 className="text-lg font-bold text-emerald-400">
                Requirements Submitted Successfully!
            </h3>

            <p className="mt-2 text-sm text-slate-300">
                Thank you for sharing your property details.
                Our property expert will review them and
                contact you shortly.
            </p>
            </div>
        )}
        </div>
      </form>
    </>
  );
}