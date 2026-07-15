import Link from "next/link";
import { notFound } from "next/navigation";

import { supabaseServer } from "@/lib/supabase/server";

interface PageProps {
  params: Promise<{
    token: string;
  }>;
}

export default async function ConfirmEmailPage({
  params,
}: PageProps) {
  const { token } = await params;

console.log({
  token,
  type: typeof token,
  length: token.length,
  json: JSON.stringify(token),
});

  // =====================================================
  // Debug
  // =====================================================

  console.log(
    "Verification Token:",
    token
  );

  // =====================================================
  // Find Inquiry By Verification Token
  // =====================================================

const cleanToken = token.trim();

const { data: inquiry, error } =
  await supabaseServer
    .from("property_inquiries")
    .select("*")
    .eq(
      "email_verify_token",
      token
    )
    .maybeSingle();

  // =====================================================
  // Query Error
  // =====================================================

  if (error) {
    console.error(error);

    return (
      <main className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-3xl border border-red-300 bg-red-50 p-10">
          <h1 className="text-3xl font-bold text-red-700">
            Database Error
          </h1>

          <pre className="mt-6 overflow-auto rounded-xl bg-white p-6 text-sm">
            {JSON.stringify(
              error,
              null,
              2
            )}
          </pre>
        </div>
      </main>
    );
  }

  // =====================================================
  // Token Not Found
  // =====================================================

  if (!inquiry) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-3xl border border-amber-300 bg-amber-50 p-10">

          <h1 className="text-4xl font-bold text-amber-700">
            Token Not Found
          </h1>

          <p className="mt-6 text-lg">
            The verification token
            could not be found.
          </p>

          <div className="mt-6 rounded-xl bg-white p-4 font-mono text-sm">
            {token}
          </div>

          <div className="mt-10">
            <Link
              href="/properties"
              className="rounded-xl bg-amber-500 px-6 py-4 font-semibold text-slate-900 transition hover:bg-amber-400"
            >
              Back to Properties
            </Link>
          </div>

        </div>
      </main>
    );
  }

  // =====================================================
  // Token Found
  // =====================================================

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <div className="rounded-3xl border border-green-300 bg-green-50 p-10">

        <h1 className="text-4xl font-bold text-green-700">
          Token Found ✅
        </h1>

        <p className="mt-4">
          Matching inquiry found.
        </p>

        <pre className="mt-8 overflow-auto rounded-xl bg-white p-6 text-sm">
          {JSON.stringify(
            inquiry,
            null,
            2
          )}
        </pre>

        <div className="mt-10">
          <Link
            href="/properties"
            className="rounded-xl bg-amber-500 px-6 py-4 font-semibold text-slate-900 transition hover:bg-amber-400"
          >
            Back to Properties
          </Link>
        </div>

      </div>
    </main>
  );
}