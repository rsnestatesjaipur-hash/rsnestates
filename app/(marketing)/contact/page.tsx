"use client";

import { useState } from "react";
import Link from "next/link";
import LocalitySelect from "@/components/common/LocalitySelect";
import TurnstileWidget from "@/components/common/TurnstileWidget";

type EnquiryType =
  | "buy"
  | "sell"

// =====================================================
// Contact Page
// =====================================================

export default function ContactPage() {
  // =====================================================
  // State
  // =====================================================

 const [enquiryType, setEnquiryType] =
  useState<EnquiryType>("buy");

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [turnstileToken, setTurnstileToken] =
  useState("");

  // =====================================================
  // Submit Handler
  // =====================================================

async function handleSubmit(
  e: React.FormEvent<HTMLFormElement>
) {
  e.preventDefault();

  const form = e.currentTarget;

  try {
const formData = new FormData(form);

  const data = {
    enquiryType,
    ...Object.fromEntries(formData.entries()),
    "cf-turnstile-response":
      turnstileToken,
  };

  if (!turnstileToken) {
  setErrorMessage(
    "Please complete the security verification."
  );
  return;
}

const response = await fetch(
  "/api/contact",
  {
    method: "POST",
    headers: {
      "Content-Type":
        "application/json",
    },
    body: JSON.stringify(data),
  }
);

const result =
  await response.json();

if (!response.ok) {
  setSuccessMessage("");

  console.error(
    "API Error:",
    JSON.stringify(
      result,
      null,
      2
    )
  );

  setErrorMessage(
    JSON.stringify(
      result,
      null,
      2
    )
  );

  return;
}

setErrorMessage("");

setSuccessMessage(
  "✅ Thank you! Your enquiry has been submitted successfully."
);

setTimeout(() => {
  setSuccessMessage("");
}, 5000);

form.reset();

setEnquiryType("buy");

setTurnstileToken("");

    } catch (error) {
      console.error(error);

setSuccessMessage("");
setErrorMessage("❌ Something went wrong. Please try again.");

    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-16 transition-colors">
      {/* ================================================
          Hero Section
      ================================================ */}

      <section className="text-center">
        <span className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
          Contact RSN Estates
        </span>

        <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 transition-colors dark:text-white">
          Let's Help You Find Your Perfect Property
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 transition-colors dark:text-slate-300">
          Whether you're planning to buy a property,
          sell your existing property, need home loan
          assistance or simply have a general enquiry,
          our experts are here to help you at every
          step of your real estate journey.
        </p>
      </section>

      {/* ================================================
          Contact Content
      ================================================ */}

      <section className="mt-16 grid gap-10 lg:grid-cols-2">
        {/* ================================================
            Dynamic Enquiry Form
        ================================================ */}

        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg transition-colors dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Send Your Enquiry
          </h2>

          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Select your enquiry type and provide the
            required details. Our team will contact you
            as soon as possible.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
          >
            {/* ============================================
                Enquiry Type
            ============================================ */}

            <div>
            <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
              How can we help you?
            </label>

              <select
                name="enquiryType"
                value={enquiryType}
                onChange={(e) =>
                  setEnquiryType(
                    e.target.value as EnquiryType
                  )
                }
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              >
                <option value="buy">
                  Buy Property
                </option>

                <option value="sell">
                  Sell Property
                </option>
              </select>
            </div>

            {/* ============================================
                Common Fields
            ============================================ */}

            <div>
              <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                required
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
                Mobile Number
              </label>

              <input
                type="tel"
                name="mobile"
                required
                placeholder="Enter your mobile number"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400"
              />
            </div>

        {/* ============================================
            Sell Property
        ============================================ */}
        <div>
          <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
            Message
          </label>

          <textarea
            rows={5}
            name="message"
            placeholder="Tell us about your requirement..."
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400"
          />
        </div>

            <TurnstileWidget
              onVerify={(token) =>
                setTurnstileToken(token)
              }
              onExpire={() =>
                setTurnstileToken("")
              }
              onError={() =>
                setTurnstileToken("")
              }
            />

            {/* ============================================
                Submit Button
            ============================================ */}
            <div className="space-y-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-slate-900 px-6 py-4 font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-amber-500 dark:text-slate-900 dark:hover:bg-amber-400"
              >
                {isSubmitting
                  ? "Submitting..."
                  : "Submit"}
              </button>

              <button
                type="button"
                onClick={() => {
                  const form = document.querySelector(
                    "form"
                  ) as HTMLFormElement;

                  if (!form.reportValidity()) {
                    return;
                  }

                  const formData = new FormData(form);

                  const message = `🏡 *RSN Estates Enquiry*

            👤 Name: ${formData.get("fullName")}

            📱 Mobile: ${formData.get("mobile")}

            📧 Email: ${formData.get("email")}

            📋 Enquiry Type: ${
                    enquiryType === "buy"
                      ? "Buy Property"
                      : "Sell Property"
                  }

            📝 Message:
            ${formData.get("message") || "-"}

            Sent from:
            https://rsnestates.com/contact`;

                  window.open(
                    `https://wa.me/917014210085?text=${encodeURIComponent(
                      message
                    )}`,
                    "_blank"
                  );
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-semibold text-white transition hover:bg-green-500"
              >
                💬 Submit on WhatsApp
              </button>
            </div>

            {successMessage && (
              <div className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-center text-sm font-medium text-emerald-300">
                {successMessage}
              </div>
            )}

            {errorMessage && (
              <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-center text-sm font-medium text-red-300">
                {errorMessage}
              </div>
            )}

            </form>
            </div>
        {/* ================================================
            Contact Information
        ================================================ */}

        <div className="space-y-8">
          {/* ============================================
              Contact Information Card
          ============================================ */}

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-colors dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Contact Information
            </h2>

            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
              Our property consultants are available
              to assist you with buying, selling,
              investment opportunities and home loan
              guidance across Jaipur.
            </p>

            <div className="mt-8 space-y-6">
              {/* Office */}

              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  📍 Office
                </h3>

                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  Jaipur, Rajasthan, India
                </p>
              </div>

              {/* Phone */}

              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  📞 Phone
                </h3>

                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  +91 70142 10085
                </p>
              </div>

              {/* WhatsApp */}

              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  💬 WhatsApp
                </h3>

                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  +91 70142 10085
                </p>
              </div>

              {/* Email */}

              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  ✉️ Email
                </h3>

                <a
                  href="mailto:contact@rsnestates.com"
                  className="mt-2 block text-amber-600 transition hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
                >
                  contact@rsnestates.com
                </a>
              </div>

              {/* Working Hours */}

              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  🕘 Working Hours
                </h3>

                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  Monday – Saturday
                  <br />
                  9:00 AM – 7:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* ============================================
              Why Choose RSN Estates
          ============================================ */}

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-colors dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Why Choose RSN Estates?
            </h2>

            <ul className="mt-6 space-y-4 text-slate-600 dark:text-slate-300">
              <li>
                ✅ Verified Property Listings
              </li>

              <li>
                ✅ Expert Property Consultation
              </li>

              <li>
                ✅ Home Loan Assistance
              </li>

              <li>
                ✅ Transparent Buying Process
              </li>

              <li>
                ✅ Local Jaipur Market Expertise
              </li>
            </ul>
          </div>

          {/* ============================================
              CTA Card
          ============================================ */}

          <div className="rounded-3xl bg-amber-500 p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Explore Verified Properties in Jaipur
            </h2>

            <p className="mt-4 leading-7 text-slate-800">
              Browse apartments, villas and plots
              across Jaipur. Find the right property
              with the guidance of experienced real
              estate professionals.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/properties"
                className="inline-flex rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
              >
                Explore Properties
              </Link>

              <Link
                href="/localities"
                className="inline-flex rounded-xl border border-slate-900 px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
              >
                Explore Localities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}