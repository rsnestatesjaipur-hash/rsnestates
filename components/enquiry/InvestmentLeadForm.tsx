"use client";

import { FormEvent, useState } from "react";

/**
 * InvestmentLeadForm
 *
 * Dedicated lead-generation form for the Jaipur plot investment
 * landing page.
 *
 * IMPORTANT:
 * - This form is intentionally separate from the existing RSN Estates
 *   enquiry system.
 * - No database/API is required at this stage.
 * - On successful validation, the visitor's enquiry details are formatted
 *   into a WhatsApp message and WhatsApp is opened for the visitor.
 * - The visitor must still tap "Send" inside WhatsApp to submit the lead.
 * - The existing landing-page theme is supported through Tailwind's
 *   dark: variants.
 */
export default function InvestmentLeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  /**
   * Handles form submission.
   *
   * Flow:
   * 1. Prevent the browser's default form submission.
   * 2. Read all form values.
   * 3. Validate required fields and mobile number.
   * 4. Build a structured WhatsApp lead message.
   * 5. Open WhatsApp with the message pre-filled.
   * 6. Show the success state.
   */
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const mobile = String(formData.get("mobile") || "").trim();
    const budget = String(formData.get("budget") || "").trim();
    const plotSize = String(formData.get("plotSize") || "").trim();
    const purpose = String(formData.get("purpose") || "").trim();
    const horizon = String(formData.get("horizon") || "").trim();
    const contactMethod = String(
      formData.get("contactMethod") || "",
    ).trim();

    try {
      /*
       * Client-side validation.
       *
       * HTML "required" attributes already provide browser-level
       * validation, but we validate again here so the WhatsApp
       * message can never be generated with missing lead details.
       */
      if (
        !name ||
        !mobile ||
        !budget ||
        !plotSize ||
        !purpose ||
        !horizon ||
        !contactMethod
      ) {
        setError("Please complete all required fields.");
        return;
      }

      /*
       * Validate the Indian 10-digit mobile number.
       *
       * Only digits are accepted. Country code is not required
       * because the WhatsApp destination number is already configured.
       */
      if (!/^[0-9]{10}$/.test(mobile)) {
        setError("Please enter a valid 10-digit mobile number.");
        return;
      }

      /*
       * Build the WhatsApp message.
       *
       * The values are taken directly from the visitor's form
       * selections so the received lead is easy to qualify.
       */
      const whatsappMessage = `*NEW INVESTMENT ENQUIRY*

*Name:* ${name}
*Mobile:* ${mobile}
*Budget:* ${budget}
*Preferred Plot Size:* ${plotSize}
*Investment Purpose:* ${purpose}
*Investment Horizon:* ${horizon}
*Preferred Contact:* ${contactMethod}

*Source:* Jaipur Plot Investment Landing Page`;

      /*
       * Encode the complete message so spaces, line breaks and
       * special characters are safely passed to WhatsApp.
       */
      const whatsappUrl = `https://wa.me/919887047255?text=${encodeURIComponent(
        whatsappMessage,
      )}`;

      /*
       * Open WhatsApp in a new tab/window.
       *
       * Because this happens directly from the user's submit action,
       * it should normally be permitted by the browser's popup rules.
       */
      const whatsappWindow = window.open(
        whatsappUrl,
        "_blank",
        "noopener,noreferrer",
      );

      /*
       * Some browsers may block the new window.
       * Do not show a false success message in that situation.
       */
      if (!whatsappWindow) {
        setError(
          "WhatsApp could not be opened. Please allow pop-ups for this website and try again.",
        );
        return;
      }

      /*
       * WhatsApp has been opened successfully.
       * Show the success state and reset the form.
       */
      setSubmitted(true);
      form.reset();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  /**
   * Success state.
   *
   * The visitor is told that WhatsApp has been opened and that
   * they need to tap Send to actually share the enquiry.
   */
  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-900 dark:bg-green-950/30">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-2xl text-white">
          ✓
        </div>

        <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
          WhatsApp Opened
        </h3>

        <p className="mx-auto mt-3 max-w-xl text-slate-600 dark:text-slate-300">
          Your enquiry details have been prepared in WhatsApp. Please tap
          Send to share them with us.
        </p>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 font-semibold text-amber-600 hover:text-amber-500"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* =========================================================
          NAME + MOBILE
      ========================================================= */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="investment-name"
            className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
          >
            Full Name <span className="text-red-500">*</span>
          </label>

          <input
            id="investment-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Enter your name"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500"
          />
        </div>

        <div>
          <label
            htmlFor="investment-mobile"
            className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
          >
            Mobile Number <span className="text-red-500">*</span>
          </label>

          <input
            id="investment-mobile"
            name="mobile"
            type="tel"
            required
            autoComplete="tel"
            inputMode="numeric"
            pattern="[0-9]{10}"
            maxLength={10}
            placeholder="10-digit mobile number"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500"
          />
        </div>
      </div>

      {/* =========================================================
          INVESTMENT BUDGET
      ========================================================= */}
      <div>
        <label
          htmlFor="investment-budget"
          className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
        >
          Investment Budget <span className="text-red-500">*</span>
        </label>

        <select
          id="investment-budget"
          name="budget"
          required
          defaultValue=""
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
        >
          <option value="" disabled>
            Select your budget
          </option>
          <option value="₹35–50 Lakh">₹35–50 Lakh</option>
          <option value="₹50–75 Lakh">₹50–75 Lakh</option>
          <option value="₹75 Lakh–₹1 Crore">₹75 Lakh–₹1 Crore</option>
          <option value="₹1 Crore+">₹1 Crore+</option>
        </select>
      </div>

      {/* =========================================================
          PREFERRED PLOT SIZE
      ========================================================= */}
      <div>
        <label
          htmlFor="investment-plot-size"
          className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
        >
          Preferred Plot Size <span className="text-red-500">*</span>
        </label>

        <select
          id="investment-plot-size"
          name="plotSize"
          required
          defaultValue=""
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
        >
          <option value="" disabled>
            Select preferred plot size
          </option>
          <option value="111–147 SqYd">111–147 SqYd</option>
          <option value="153–189 SqYd">153–189 SqYd</option>
          <option value="227–261 SqYd">227–261 SqYd</option>
          <option value="300+ SqYd">300+ SqYd</option>
          <option value="Not decided">Not decided</option>
        </select>
      </div>

      {/* =========================================================
          INVESTMENT PURPOSE
      ========================================================= */}
      <div>
        <label
          htmlFor="investment-purpose"
          className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
        >
          Investment Purpose <span className="text-red-500">*</span>
        </label>

        <select
          id="investment-purpose"
          name="purpose"
          required
          defaultValue=""
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
        >
          <option value="" disabled>
            Select your purpose
          </option>
          <option value="Investment">Investment</option>
          <option value="Future Use">Future Use</option>
          <option value="Both">Both</option>
        </select>
      </div>

      {/* =========================================================
          INVESTMENT HORIZON
      ========================================================= */}
      <div>
        <label
          htmlFor="investment-horizon"
          className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
        >
          Expected Investment Horizon{" "}
          <span className="text-red-500">*</span>
        </label>

        <select
          id="investment-horizon"
          name="horizon"
          required
          defaultValue=""
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
        >
          <option value="" disabled>
            Select investment horizon
          </option>
          <option value="1–3 Years">1–3 Years</option>
          <option value="3–5 Years">3–5 Years</option>
          <option value="5–7 Years">5–7 Years</option>
          <option value="7+ Years">7+ Years</option>
        </select>
      </div>

      {/* =========================================================
          PREFERRED CONTACT METHOD
      ========================================================= */}
      <div>
        <label className="mb-3 block text-sm font-semibold text-slate-700 dark:text-slate-200">
          Preferred Contact Method{" "}
          <span className="text-red-500">*</span>
        </label>

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3.5 transition hover:border-amber-400 has-[:checked]:border-amber-500 has-[:checked]:bg-amber-50 dark:border-slate-700 dark:bg-slate-900 dark:has-[:checked]:bg-amber-950/20">
            <input
              type="radio"
              name="contactMethod"
              value="Call"
              required
              className="h-4 w-4 accent-amber-500"
            />

            <span className="font-medium text-slate-700 dark:text-slate-200">
              Call
            </span>
          </label>

          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3.5 transition hover:border-amber-400 has-[:checked]:border-amber-500 has-[:checked]:bg-amber-50 dark:border-slate-700 dark:bg-slate-900 dark:has-[:checked]:bg-amber-950/20">
            <input
              type="radio"
              name="contactMethod"
              value="WhatsApp"
              className="h-4 w-4 accent-amber-500"
            />

            <span className="font-medium text-slate-700 dark:text-slate-200">
              WhatsApp
            </span>
          </label>
        </div>
      </div>

      {/* =========================================================
          ERROR MESSAGE
      ========================================================= */}
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/30 dark:text-red-300">
          {error}
        </div>
      )}

      {/* =========================================================
          SUBMIT BUTTON
      ========================================================= */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-amber-500 px-6 py-4 text-base font-bold text-slate-950 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting
          ? "Opening WhatsApp..."
          : "Get Current Price & Availability"}
      </button>

      {/* =========================================================
          CONSENT / DISCLOSURE
      ========================================================= */}
      <p className="text-center text-xs leading-5 text-slate-500 dark:text-slate-400">
        By submitting this enquiry, you agree to be contacted regarding
        available investment options and property details.
      </p>
    </form>
  );
}