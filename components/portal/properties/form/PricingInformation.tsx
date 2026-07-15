"use client";

import { useFormContext } from "react-hook-form";

import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";

import { PropertyFormValues } from "@/lib/validations/property";

export default function PricingInformation() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<PropertyFormValues>();

  const transactionType =
    watch("transactionType");

  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        Pricing Information
      </h2>

      <p className="mt-2 text-slate-500 dark:text-slate-400">
        Enter the pricing details for this property.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {/* =====================================================
            Price / Monthly Rent
        ====================================================== */}

        <div>
          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
            {transactionType === "Rent"
              ? "Monthly Rent (₹)"
              : "Price (₹)"}
          </label>

          <Input
            type="number"
            {...register("price", {
              valueAsNumber: true,
            })}
            placeholder={
              transactionType === "Rent"
                ? "25000"
                : "8500000"
            }
          />

          {errors.price && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              {errors.price.message}
            </p>
          )}
        </div>

        {/* =====================================================
            Security Deposit
        ====================================================== */}

        {transactionType === "Rent" && (
          <div>
            <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
              Security Deposit / Advance (₹)
            </label>

            <Input
              type="number"
              {...register("securityDeposit", {
                valueAsNumber: true,
              })}
              placeholder="50000"
            />

            {errors.securityDeposit && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                {errors.securityDeposit.message}
              </p>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}