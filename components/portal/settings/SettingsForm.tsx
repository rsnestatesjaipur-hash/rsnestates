"use client";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import {
  settingsSchema,
  SettingsFormValues,
} from "@/lib/validations/settings";

import { updateSettings } from "@/app/actions/settings-actions";

import GeneralInformation from "./GeneralInformation";

import ContactInformation from "./ContactInformation";

import SocialInformation from "./SocialInformation";

import AnalyticsInformation from "./AnalyticsInformation";

interface SettingsFormProps {
  initialData: SettingsFormValues;
}

export default function SettingsForm({
  initialData,
}: SettingsFormProps) {
  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const methods =
    useForm<SettingsFormValues>({
      resolver: zodResolver(
        settingsSchema
      ),
      defaultValues: initialData,
      mode: "onBlur",
    });

  async function onSubmit(
    data: SettingsFormValues
  ) {
    try {
      setIsSubmitting(true);

      const formData = new FormData();

      Object.entries(data).forEach(
        ([key, value]) => {
          formData.append(
            key,
            String(value)
          );
        }
      );

      const result =
        await updateSettings(
          formData
        );

      if (!result.success) {
        toast.error(
          result.message ??
            "Failed to save settings."
        );

        return;
      }

      toast.success(
        "Settings updated successfully!"
      );
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to save settings."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(
          onSubmit
        )}
        className="space-y-8"
      >
        <GeneralInformation />

        <ContactInformation />

        <SocialInformation />

        <AnalyticsInformation />

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-xl bg-slate-900 px-8 py-3 font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-blue-600 dark:hover:bg-blue-500"
          >
            {isSubmitting
              ? "Saving..."
              : "Save Settings"}
          </button>
        </div>
      </form>
    </FormProvider>
  );
}