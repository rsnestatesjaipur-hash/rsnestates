"use client";

import { useFormContext } from "react-hook-form";

import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";

import {
  SettingsFormValues,
} from "@/lib/validations/settings";

export default function ContactInformation() {
  const {
    register,
    formState: { errors },
  } =
    useFormContext<SettingsFormValues>();

  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        Contact Information
      </h2>

      <p className="mt-2 text-slate-500 dark:text-slate-400">
        Configure your business contact details.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-semibold">
            Phone
          </label>

          <Input
            {...register("phone")}
            placeholder="+91 9876543210"
          />

          {errors.phone && (
            <p className="mt-2 text-sm text-red-600">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            WhatsApp
          </label>

          <Input
            {...register("whatsapp")}
            placeholder="+91 9876543210"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Email
          </label>

          <Input
            {...register("email")}
            placeholder="contact@example.com"
          />

          {errors.email && (
            <p className="mt-2 text-sm text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Google Maps URL
          </label>

          <Input
            {...register("googleMaps")}
            placeholder="https://maps.google.com/..."
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block font-semibold">
            Address
          </label>

          <Input
            {...register("address")}
            placeholder="Full Office Address"
          />
        </div>
      </div>
    </Card>
  );
}