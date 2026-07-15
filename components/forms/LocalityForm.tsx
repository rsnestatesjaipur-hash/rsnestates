"use client";

import { createLocality } from "@/app/actions/locality-actions";

export default function LocalityForm() {
  return (
    <form className="space-y-6">
      <input
        name="name"
        placeholder="Locality Name"
        className="w-full rounded-lg border p-3"
        required
      />

      <input
        name="slug"
        placeholder="Slug"
        className="w-full rounded-lg border p-3"
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        rows={6}
        className="w-full rounded-lg border p-3"
      />

      <input
        name="image"
        placeholder="Hero Image URL"
        className="w-full rounded-lg border p-3"
      />

      <input
        name="metaTitle"
        placeholder="Meta Title"
        className="w-full rounded-lg border p-3"
      />

      <textarea
        name="metaDescription"
        placeholder="Meta Description"
        rows={3}
        className="w-full rounded-lg border p-3"
      />

      <button
        type="submit"
        className="rounded-lg bg-black px-6 py-3 text-white"
      >
        Save Locality
      </button>
    </form>
  );
}