"use client";

import { useState, FormEvent } from "react";
import { createLocality } from "@/app/actions/locality-actions";

export default function LocalityForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setIsSubmitting(true);

    try {
      const formData = new FormData(event.currentTarget);

      const result = await createLocality(formData);

      if (!result.success) {
        alert(result.message);
        return;
      }

      alert("Locality created successfully.");

      event.currentTarget.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to create locality.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* ================================================
          Locality Name
      ================================================ */}

      <input
        name="name"
        placeholder="Locality Name"
        className="w-full rounded-lg border p-3"
        required
      />

      {/* ================================================
          Slug
      ================================================ */}

      <input
        name="slug"
        placeholder="Slug"
        className="w-full rounded-lg border p-3"
        required
      />

      {/* ================================================
          Description
      ================================================ */}

      <textarea
        name="description"
        placeholder="Description"
        rows={6}
        className="w-full rounded-lg border p-3"
      />

      {/* ================================================
          Hero Image
      ================================================ */}

      <input
        name="heroImage"
        placeholder="Hero Image URL"
        className="w-full rounded-lg border p-3"
      />

      {/* ================================================
          SEO Title
      ================================================ */}

      <input
        name="seoTitle"
        placeholder="SEO Title"
        className="w-full rounded-lg border p-3"
      />

      {/* ================================================
          SEO Description
      ================================================ */}

      <textarea
        name="seoDescription"
        placeholder="SEO Description"
        rows={3}
        className="w-full rounded-lg border p-3"
      />

      {/* ================================================
          Submit
      ================================================ */}

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-lg bg-black px-6 py-3 text-white disabled:opacity-50"
      >
        {isSubmitting
          ? "Saving..."
          : "Save Locality"}
      </button>
    </form>
  );
}