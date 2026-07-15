"use client";

import { useState } from "react";
import InterestModal from "./InterestModal";

interface PropertyContactCardProps {
  propertyTitle: string;
  propertyId: number;
  propertySlug: string;
  propertyStatus: string;
}

export default function PropertyContactCard({
  propertyTitle,
  propertyId,
  propertySlug,
  propertyStatus,
}: PropertyContactCardProps) {

const [isModalOpen, setIsModalOpen] = useState(false);

return (
<>
<div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-colors dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-950/40">
<h2 className="text-4xl font-bold text-slate-900 dark:text-white">
Interested in this Property?
</h2>

    <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
      Tell us you're interested and our property expert will contact you on
      WhatsApp with complete details, answer your questions and arrange a
      site visit at your convenience.
    </p>

    <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
          Property ID
        </span>

        <span className="font-bold text-slate-900 dark:text-white">
          #{propertyId}
        </span>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
          Status
        </span>

        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${
            propertyStatus === "Sold Out"
              ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
              : propertyStatus === "Under Construction"
              ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
              : propertyStatus === "New Launch"
              ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
              : propertyStatus === "Resale"
              ? "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400"
              : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
          }`}
        >
  {propertyStatus}
</span>
      </div>
    </div>

    <button
      onClick={() => setIsModalOpen(true)}
      className="mt-8 w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-500"
    >
      I'm Interested
    </button>
  </div>

  <InterestModal
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
    propertyTitle={propertyTitle}
    propertyId={propertyId}
    propertySlug={propertySlug}
  />
</>

);
}