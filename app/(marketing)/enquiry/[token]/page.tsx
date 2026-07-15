import { notFound } from "next/navigation";

import { supabaseServer } from "@/lib/supabase/server";

import BuyRequirementForm from "@/components/enquiry/BuyRequirementForm";
import SellRequirementForm from "@/components/enquiry/SellRequirementForm";

interface PageProps {
  params: Promise<{
    token: string;
  }>;
}

export default async function EnquiryPage({
  params,
}: PageProps) {
  const { token } = await params;

  // =====================================================
  // Load Enquiry
  // =====================================================

  const { data: enquiry, error } =
    await supabaseServer
      .from("contact_enquiries")
      .select("*")
      .eq("token", token)
      .single();

  if (error || !enquiry) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-xl dark:border-slate-800 dark:bg-slate-900">

        {/* ================================================
            Page Heading
        ================================================ */}

        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Complete Your Requirements
        </h1>

        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Please complete the remaining details so our
          property expert can assist you better.
        </p>

        {/* ================================================
            Basic Information (Read Only)
        ================================================ */}

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          {/* Full Name */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
              Full Name
            </label>

            <input
              value={enquiry.full_name}
              readOnly
              className="w-full cursor-not-allowed rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 text-slate-900 opacity-80 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>

          {/* Mobile */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
              Mobile
            </label>

            <input
              value={enquiry.mobile}
              readOnly
              className="w-full cursor-not-allowed rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 text-slate-900 opacity-80 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>

          {/* Email */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
              Email
            </label>

            <input
              value={enquiry.email}
              readOnly
              className="w-full cursor-not-allowed rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 text-slate-900 opacity-80 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>
        </div>

        {/* ================================================
            Dynamic Requirement Form
        ================================================ */}

        <div className="mt-12">
          {enquiry.enquiry_type === "buy" ? (
            <BuyRequirementForm
              token={token}
              enquiry={enquiry}
            />
          ) : (
            <SellRequirementForm
              token={token}
              enquiry={enquiry}
            />
          )}
        </div>

      </div>
    </main>
  );
}