"use client";

import { useFormContext } from "react-hook-form";

import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

import { PropertyFormValues } from "@/lib/validations/property";

export default function ConstructionInformation() {
  const {
    register,
    formState: { errors },
  } = useFormContext<PropertyFormValues>();

  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        Construction Details
      </h2>

      <p className="mt-2 text-slate-500 dark:text-slate-400">
        Enter the legal and construction information.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
            Construction Status
          </label>

          <Select {...register("constructionStatus")}>
            <option value="">Select</option>
            <option value="Ready to Move">
              Ready to Move
            </option>
            <option value="Under Construction">
              Under Construction
            </option>
            <option value="New Launch">
              New Launch
            </option>
            <option value="Resale">
              Resale
            </option>
          </Select>
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
            Possession Date
          </label>

          <Input
            type="date"
            {...register("possessionDate")}
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
            RERA Number
          </label>

          <Input
            {...register("reraNumber")}
            placeholder="RAJ/P/2026/000123"
          />
        </div>

        <div className="flex items-center gap-3 pt-8">
          <input
            type="checkbox"
            {...register("reraApproved")}
          />

          <label className="font-medium text-slate-700 dark:text-slate-200">
            RERA Approved
          </label>
        </div>

        <div className="flex items-center gap-3 pt-8">
          <input
            type="checkbox"
            {...register("loanApproved")}
          />

          <label className="font-medium text-slate-700 dark:text-slate-200">
            Loan Approved
          </label>
        </div>

        <div className="flex items-center gap-3 pt-8">
          <input
            type="checkbox"
            {...register("gatedCommunity")}
          />

          <label className="font-medium text-slate-700 dark:text-slate-200">
            Gated Community
          </label>
        </div>
      </div>
    </Card>
  );
}