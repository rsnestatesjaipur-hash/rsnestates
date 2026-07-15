"use client";

import Link from "next/link";
import { Plus, Search } from "lucide-react";

export default function PropertyToolbar() {
  return (
    <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          Properties
        </h1>

        <p className="mt-2 text-slate-500">
          Manage all property listings from one place.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search properties..."
            className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-slate-900 outline-none transition focus:border-slate-900 sm:w-80"
          />
        </div>

        <Link
          href="/portal/properties/new"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
        >
          <Plus size={20} />
          Add Property
        </Link>
      </div>
    </div>
  );
}