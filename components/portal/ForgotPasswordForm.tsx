"use client";

import { useState } from "react";
import Link from "next/link";
import { createBrowserClient } from "@supabase/ssr";

export default function ForgotPasswordForm() {
  const [email, setEmail] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [error, setError] =
    useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setError("");
    setMessage("");

    const supabase =
      createBrowserClient(
        process.env
          .NEXT_PUBLIC_SUPABASE_URL!,
        process.env
          .NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );

    const { error } =
      await supabase.auth.resetPasswordForEmail(
        email,
        {
          redirectTo: `${window.location.origin}/auth/callback`,
        }
      );

    if (error) {
      setError(error.message);
    } else {
      setMessage(
        "Password reset link has been sent to your email."
      );
    }

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
          Email Address
        </label>

        <input
          type="email"
          required
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
          placeholder="admin@rsnestates.com"
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
        />
      </div>

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {message && (
        <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-amber-500 px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-400 disabled:opacity-60"
      >
        {loading
          ? "Sending..."
          : "Send Reset Link"}
      </button>

      <div className="text-center">
        <Link
          href="/portal/login"
          className="text-sm font-medium text-blue-600 hover:text-blue-500"
        >
          Back to Login
        </Link>
      </div>
    </form>
  );
}