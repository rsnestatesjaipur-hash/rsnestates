"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import InvestmentLeadForm from "@/components/enquiry/InvestmentLeadForm";

export default function JaipurPlotInvestmentPage() {
const { resolvedTheme } = useTheme();

const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

const isDark = mounted && resolvedTheme === "dark";

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        isDark
          ? "bg-slate-950 text-slate-100"
          : "bg-white text-slate-900"
      }`}
    >
      {/* =========================================================
          HERO
          The hero remains visually dark in both themes because
          the image overlay is required for readable white text.
      ========================================================= */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="/images/jaipur-investment-hero.webp"
            alt="Plot investment opportunity near NIMS University, Jaipur"
            fill
            priority
            className="object-cover opacity-80"
          />

          <div className="absolute inset-0 bg-slate-950/65" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-300">
              Jaipur Plot Investment Opportunity
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Invest in Plots Near NIMS University, Jaipur
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Explore a premium plotted investment opportunity in the
              developing Delhi–Jaipur corridor.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-white">
              <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                Residential & Commercial
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                Multiple Plot Sizes
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                Gated Township Development
              </span>
            </div>

            <div className="mt-10">
              <p className="text-sm text-slate-300">
                Investment options from
              </p>

              <p className="mt-1 text-3xl font-bold text-white">
                ₹35L*
              </p>

              <p className="mt-2 text-xs text-slate-400">
                *Indicative starting value. Current price and availability
                to be confirmed.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="#investment-enquiry"
                className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-7 py-4 text-base font-bold text-slate-950 transition hover:bg-amber-400"
              >
                Get Investment Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY THIS CORRIDOR
          Fully controlled by the Navbar theme toggle.
      ========================================================= */}
      <section
        className={`py-20 transition-colors duration-200 sm:py-24 ${
          isDark ? "bg-slate-950" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Investment Perspective
            </p>

            <h2
              className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Why Investors Are Looking at This Corridor
            </h2>

            <p
              className={`mt-5 text-lg leading-8 ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              For a long-term property investor, connectivity, established
              institutions and surrounding development are important factors
              to evaluate before making a purchase decision.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div
              className={`rounded-2xl border p-7 transition-colors duration-200 ${
                isDark
                  ? "border-slate-800 bg-slate-900"
                  : "border-slate-200 bg-slate-50"
              }`}
            >
              <div className="text-3xl">📍</div>

              <h3
                className={`mt-5 text-xl font-bold ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Near NIMS University
              </h3>

              <p
                className={`mt-3 leading-7 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                Located in the vicinity of a major established educational
                institution along the Jaipur–Delhi Highway.
              </p>
            </div>

            <div
              className={`rounded-2xl border p-7 transition-colors duration-200 ${
                isDark
                  ? "border-slate-800 bg-slate-900"
                  : "border-slate-200 bg-slate-50"
              }`}
            >
              <div className="text-3xl">🚗</div>

              <h3
                className={`mt-5 text-xl font-bold ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Highway Connectivity
              </h3>

              <p
                className={`mt-3 leading-7 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                The corridor provides access toward Jaipur and the Delhi side
                through the Jaipur–Delhi highway network.
              </p>
            </div>

            <div
              className={`rounded-2xl border p-7 transition-colors duration-200 ${
                isDark
                  ? "border-slate-800 bg-slate-900"
                  : "border-slate-200 bg-slate-50"
              }`}
            >
              <div className="text-3xl">🏗️</div>

              <h3
                className={`mt-5 text-xl font-bold ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Developing Corridor
              </h3>

              <p
                className={`mt-3 leading-7 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                Investors can evaluate emerging development and infrastructure
                around the wider corridor.
              </p>
            </div>

            <div
              className={`rounded-2xl border p-7 transition-colors duration-200 ${
                isDark
                  ? "border-slate-800 bg-slate-900"
                  : "border-slate-200 bg-slate-50"
              }`}
            >
              <div className="text-3xl">📈</div>

              <h3
                className={`mt-5 text-xl font-bold ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Long-Term Perspective
              </h3>

              <p
                className={`mt-3 leading-7 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                Suitable for buyers evaluating land as a longer-term property
                investment rather than an immediate construction requirement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PLOT OPTIONS
          Fully controlled by the Navbar theme toggle.
      ========================================================= */}
      <section
        className={`py-20 transition-colors duration-200 sm:py-24 ${
          isDark ? "bg-slate-900" : "bg-slate-50"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Investment Options
            </p>

            <h2
              className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Choose Your Investment Size
            </h2>

            <p
              className={`mt-5 text-lg leading-8 ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Multiple plot sizes are available to suit different investment
              budgets. Ask us for current availability and pricing.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {[
              "111 SqYd",
              "122 SqYd",
              "147 SqYd",
              "153 SqYd",
              "167 SqYd",
              "172 SqYd",
              "189 SqYd",
              "227 SqYd",
              "261 SqYd",
              "Larger Options",
            ].map((size) => (
              <div
                key={size}
                className={`rounded-2xl border p-6 text-center shadow-sm transition-colors duration-200 ${
                  isDark
                    ? "border-slate-700 bg-slate-950"
                    : "border-slate-200 bg-white"
                }`}
              >
                <p
                  className={`text-lg font-bold ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  {size}
                </p>

                <p
                  className={`mt-2 text-sm ${
                    isDark ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Check Availability
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="#investment-enquiry"
              className={`inline-flex rounded-xl px-7 py-4 font-bold transition ${
                isDark
                  ? "bg-white text-slate-950 hover:bg-slate-200"
                  : "bg-slate-900 text-white hover:bg-slate-800"
              }`}
            >
              Get Available Plot Options
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          SITE PHOTOS
          Four actual images in a responsive 2 × 2 gallery.
      ========================================================= */}
      <section
        className={`py-20 transition-colors duration-200 sm:py-24 ${
          isDark ? "bg-slate-950" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Visit & Evaluate
            </p>

            <h2
              className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              See the Actual Site
            </h2>

            <p
              className={`mt-5 text-lg leading-8 ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Understand the current development, surrounding area and access
              before making your investment decision.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div
              className={`relative aspect-[16/10] overflow-hidden rounded-2xl ${
                isDark ? "bg-slate-800" : "bg-slate-200"
              }`}
            >
              <Image
                src="/images/jaipur-investment-hero.webp"
                alt="Overall view of the plotted development near NIMS University, Jaipur"
                fill
                className="object-cover"
              />
            </div>

            <div
              className={`relative aspect-[16/10] overflow-hidden rounded-2xl ${
                isDark ? "bg-slate-800" : "bg-slate-200"
              }`}
            >
              <Image
                src="/images/jaipur-investment-site-1.webp"
                alt="Actual site road and plot boundary"
                fill
                className="object-cover"
              />
            </div>

            <div
              className={`relative aspect-[16/10] overflow-hidden rounded-2xl ${
                isDark ? "bg-slate-800" : "bg-slate-200"
              }`}
            >
              <Image
                src="/images/jaipur-investment-site-2.webp"
                alt="Actual site development view"
                fill
                className="object-cover"
              />
            </div>

            <div
              className={`relative aspect-[16/10] overflow-hidden rounded-2xl ${
                isDark ? "bg-slate-800" : "bg-slate-200"
              }`}
            >
              <Image
                src="/images/jaipur-investment-site-3.webp"
                alt="Actual site surroundings and development"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURES
          Kept intentionally dark in both themes for contrast.
      ========================================================= */}
      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-400">
              Development Features
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Designed as a Premium Township
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Gated Development",
              "Wide Internal Roads",
              "Landscaped Areas",
              "Clubhouse",
              "Swimming Pool",
              "Residential & Commercial Options",
            ].map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl text-amber-400">✓</span>

                  <span className="font-semibold text-white">
                    {feature}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          INVESTOR QUALIFICATION
          Fully controlled by the Navbar theme toggle.
      ========================================================= */}
      <section
        className={`py-20 transition-colors duration-200 sm:py-24 ${
          isDark ? "bg-slate-950" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div
            className={`rounded-3xl p-8 transition-colors duration-200 sm:p-12 ${
              isDark ? "bg-amber-950/30" : "bg-amber-50"
            }`}
          >
            <p className="text-sm font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              Is This Right For You?
            </p>

            <h2
              className={`mt-3 text-3xl font-bold sm:text-4xl ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              This Opportunity May Suit You If…
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "You are looking for a long-term land investment",
                "You have a budget of approximately ₹35L or more",
                "You are considering developing corridors around Jaipur",
                "You prefer property as part of your investment portfolio",
                "You are considering a 3–7+ year investment horizon",
                "You want to evaluate the site before making a decision",
              ].map((item) => (
                <div
                  key={item}
                  className={`flex gap-3 rounded-xl p-5 transition-colors duration-200 ${
                    isDark ? "bg-slate-900" : "bg-white"
                  }`}
                >
                  <span className="font-bold text-amber-600 dark:text-amber-400">
                    ✓
                  </span>

                  <span
                    className={
                      isDark ? "text-slate-200" : "text-slate-700"
                    }
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INVESTMENT LEAD FORM
          Separate form created specifically for this landing page.
      ========================================================= */}
      <section
        id="investment-enquiry"
        className={`py-20 transition-colors duration-200 sm:py-24 ${
          isDark ? "bg-slate-900" : "bg-slate-100"
        }`}
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div
            className={`rounded-3xl p-8 shadow-xl transition-colors duration-200 sm:p-12 ${
              isDark ? "bg-slate-950" : "bg-white"
            }`}
          >
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Investment Enquiry
              </p>

              <h2
                className={`mt-3 text-3xl font-bold sm:text-4xl ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Get Investment Options
              </h2>

              <p
                className={`mt-4 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                Tell us what you are looking for and we will share the latest
                available investment options.
              </p>
            </div>

            <div className="mt-10">
              <InvestmentLeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
          Kept intentionally dark in both themes for visual contrast.
      ========================================================= */}
      <section className="bg-slate-950 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Looking for a Long-Term Property Investment Near Jaipur?
          </h2>

          <p className="mt-4 text-slate-300">
            Get current plot options, pricing and availability.
          </p>

          <Link
            href="#investment-enquiry"
            className="mt-8 inline-flex rounded-xl bg-amber-500 px-8 py-4 font-bold text-slate-950 transition hover:bg-amber-400"
          >
            Get Investment Options
          </Link>
        </div>
      </section>
    </div>
  );
}