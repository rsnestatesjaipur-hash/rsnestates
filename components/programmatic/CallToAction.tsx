import Link from "next/link";

import type { Locality } from "@/types/Locality";

interface CallToActionProps {
  locality: Locality;

  propertyType?: string;
}

export default function CallToAction({
  locality,
  propertyType,
}: CallToActionProps) {
  const propertyLabel =
    propertyType ?? "Property";

  return (
    <section className="mt-20">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 p-10 text-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold">
            Looking for the Best {propertyLabel} in{" "}
            {locality.name}?
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Our real estate experts help you find verified
            properties that match your budget and
            requirements. From site visits to legal
            verification and home loan assistance, we
            support you throughout the buying journey.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div>✅ Verified Listings</div>
            <div>✅ Free Site Visit</div>
            <div>✅ Home Loan Assistance</div>
            <div>✅ Legal Guidance</div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:bg-slate-100"
            >
              Contact Expert
            </Link>

            <a
              href="tel:+917014210085"
              className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-blue-700"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}