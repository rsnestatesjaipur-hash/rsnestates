"use client";
import { useState } from "react";

import LocalitySelect from "@/components/common/LocalitySelect";
import TurnstileWidget from "@/components/common/TurnstileWidget";

interface BuyRequirementFormProps {
  token: string;
  enquiry: any;
}

export default function BuyRequirementForm({
  token,
  enquiry,
}: BuyRequirementFormProps) {
    const [isSubmitting, setIsSubmitting] =
    useState(false);

    const [isSubmitted, setIsSubmitted] =
    useState(false);

    const [
      turnstileToken,
      setTurnstileToken,
    ] = useState("");

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
      preferredLocality: formData.get(
        "preferredLocality"
      ),
      budget: formData.get("budget"),
      propertyType:
        formData.get("propertyType"),
      configuration:
        formData.get("configuration"),
      purchaseTimeline: formData.get(
        "purchaseTimeline"
      ),
      homeLoanRequired: formData.get(
        "homeLoanRequired"
      ),
      requirements:
        formData.get("requirements"),
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
  } catch (error) {
    console.error(error);

    alert("Something went wrong.");
  } finally {
    setIsSubmitting(false);
  }
}
  return (
    <>
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        Property Requirements
      </h2>

      <p className="mt-2 text-slate-600 dark:text-slate-300">
        Please provide a few more details so we can recommend the most suitable properties.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-6"
        >

        <div>
        <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
            Preferred Locality
        </label>

        <LocalitySelect
            name="preferredLocality"
            placeholder="Select Preferred Locality"
        />
        </div>

        <div>
  <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
    Budget
  </label>

  <select
    name="budget"
    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
  >
    <option value="">
      Select Budget
    </option>

    <option value="Under 25 Lakh">
      Under ₹25 Lakh
    </option>

    <option value="25-50 Lakh">
      ₹25 - ₹50 Lakh
    </option>

    <option value="50-75 Lakh">
      ₹50 - ₹75 Lakh
    </option>

    <option value="75 Lakh - 1 Crore">
      ₹75 Lakh - ₹1 Crore
    </option>

    <option value="1-2 Crore">
      ₹1 - ₹2 Crore
    </option>

    <option value="2-5 Crore">
      ₹2 - ₹5 Crore
    </option>

    <option value="Above 5 Crore">
      Above ₹5 Crore
    </option>
  </select>
</div>

       <div>
  <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
    Property Type
  </label>

  <select
    name="propertyType"
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

      <div>
  <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
    Configuration
  </label>

  <select
    name="configuration"
    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
  >
    <option value="">
      Select Configuration
    </option>

    <option value="Studio">
      Studio
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

    <option value="5 BHK+">
      5 BHK+
    </option>
  </select>
</div>

        <div>
  <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
    Purchase Timeline
  </label>

  <select
    name="purchaseTimeline"
    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
  >
    <option value="">
      Select Purchase Timeline
    </option>

    <option value="Immediate">
      Immediate
    </option>

    <option value="Within 1 Month">
      Within 1 Month
    </option>

    <option value="Within 3 Months">
      Within 3 Months
    </option>

    <option value="Within 6 Months">
      Within 6 Months
    </option>

    <option value="Just Researching">
      Just Researching
    </option>
  </select>
</div>

       <div>
  <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
    Home Loan Required?
  </label>

  <select
    name="homeLoanRequired"
    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
  >
    <option value="">
      Select an option
    </option>

    <option value="Yes">
      Yes
    </option>

    <option value="No">
      No
    </option>
  </select>
</div>

       <div>
  <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
    Additional Requirements
  </label>

  <textarea
    rows={5}
    name="requirements"
    placeholder="Tell us about any preferred amenities, facing, schools, connectivity, gated community, Vastu preferences, or other requirements..."
    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400"
  />
</div>
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
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
                <div className="mb-3 text-4xl">
                ✅
                </div>

                <h3 className="text-xl font-bold text-emerald-400">
                Requirements Submitted Successfully!
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                Thank you for sharing your requirements with
                <strong> RSN Estates</strong>.
                <br />
                Our property expert is reviewing your details
                and will contact you shortly.
                <br />
                <br />
                Need immediate assistance?
                Continue the conversation on WhatsApp.
                </p>

                <a
                href={`https://wa.me/918302699704?text=${encodeURIComponent(
                    `Hello RSN Estates,

            I have successfully submitted my property requirements through your website.

            Name: ${enquiry.full_name}
            Mobile: ${enquiry.mobile}
            Email: ${enquiry.email}

            I would like to continue our discussion on WhatsApp.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-500"
                >
                💬 Continue on WhatsApp
                </a>
            </div>
            )}
        </div>
      </form>
    </>
  );
}