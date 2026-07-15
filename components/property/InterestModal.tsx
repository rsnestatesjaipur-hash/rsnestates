"use client";

import { useState } from "react";
import { toast } from "sonner";

import { createInquiry } from "@/app/actions/inquiry-actions";

interface InterestModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyTitle: string;
  propertyId: number;
  propertySlug: string;
}

export default function InterestModal({
  isOpen,
  onClose,
  propertyTitle,
  propertyId,
  propertySlug,
}: InterestModalProps) {
  const [isSubmitting, setIsSubmitting] =
    useState(false);

  if (!isOpen) return null;

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const form = e.currentTarget;

      const formData = new FormData(form);

      formData.append(
        "propertyId",
        String(propertyId)
      );

      formData.append(
        "propertyTitle",
        propertyTitle
      );

      formData.append(
        "propertySlug",
        propertySlug
      );

      // Map WhatsApp field to phone field
      const whatsapp = String(
        formData.get("whatsapp") ?? ""
      );

      formData.delete("whatsapp");
      formData.append("phone", whatsapp);

      if (!formData.has("message")) {
        formData.append("message", "");
      }

      const result = await createInquiry(
        formData
      );

      if (!result.success) {
        toast.error(
          result.message ??
            "Failed to submit inquiry."
        );
        return;
      }

toast.success(
  "Your inquiry has been submitted successfully."
);

form.reset();

onClose();

      onClose();
    } catch (error) {
      console.error(error);

      toast.error(
        "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl dark:bg-slate-900">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            I'm Interested
          </h2>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Fill in your details and we'll contact you shortly.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            name="name"
            type="text"
            required
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />

          <input
            name="whatsapp"
            type="tel"
            required
            placeholder="Enter your WhatsApp number"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />

          <div className="space-y-3 pt-2">
            <button
              type="button"
              disabled={isSubmitting}
              onClick={async () => {
                const form = document.querySelector(
                  "form"
                ) as HTMLFormElement;

                if (!form.reportValidity()) {
                  return;
                }

                try {
                  setIsSubmitting(true);

                  const formData = new FormData(form);

                  formData.append(
                    "propertyId",
                    String(propertyId)
                  );

                  formData.append(
                    "propertyTitle",
                    propertyTitle
                  );

                  formData.append(
                    "propertySlug",
                    propertySlug
                  );

                  const whatsapp = String(
                    formData.get("whatsapp") ?? ""
                  );

                  formData.delete("whatsapp");

                  formData.append(
                    "phone",
                    whatsapp
                  );

                  if (!formData.has("message")) {
                    formData.append(
                      "message",
                      ""
                    );
                  }

                  const result =
                    await createInquiry(formData);

                  if (!result.success) {
                    toast.error(
                      result.message ??
                        "Failed to submit inquiry."
                    );
                    return;
                  }

                  const message = `🏡 *Property Inquiry*

            🏠 Property:
            ${propertyTitle}

            🆔 Property ID:
            ${propertyId}

            👤 Name:
            ${formData.get("name")}

            📱 WhatsApp:
            ${whatsapp}

            🔗 Property Link:
            https://rsnestates.com/properties/${propertySlug}`;

                  window.open(
                    `https://wa.me/917014210085?text=${encodeURIComponent(
                      message
                    )}`,
                    "_blank"
                  );

                  toast.success(
                    "Opening WhatsApp..."
                  );

                  form.reset();

                  onClose();
                } catch (error) {
                  console.error(error);

                  toast.error(
                    "Something went wrong."
                  );
                } finally {
                  setIsSubmitting(false);
                }
              }}
              className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-500 disabled:opacity-50"
            >
              💬 Submit on WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}