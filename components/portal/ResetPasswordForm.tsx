"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { createBrowserClient } from "@supabase/ssr";

export default function ResetPasswordForm() {
  // =====================================================
  // State
  // =====================================================

  const router = useRouter();

  const [password, setPassword] =
    useState("");

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState("");

  const [
    showPassword,
    setShowPassword,
  ] = useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  // =====================================================
  // Submit
  // =====================================================

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (password.length < 6) {
      setError(
        "Password must be at least 6 characters."
      );
      return;
    }

    if (
      password !==
      confirmPassword
    ) {
      setError(
        "Passwords do not match."
      );
      return;
    }

    setLoading(true);

    const supabase =
      createBrowserClient(
        process.env
          .NEXT_PUBLIC_SUPABASE_URL!,
        process.env
          .NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );

    const { error } =
      await supabase.auth.updateUser({
        password,
      });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setSuccess(
      "Password updated successfully. Redirecting to login..."
    );

    setTimeout(() => {
      router.replace(
        "/portal/login"
      );
    }, 2000);
  }

  // =====================================================
  // UI
  // =====================================================

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* ===============================================
          New Password
      =============================================== */}

      <div>
        <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
          New Password
        </label>

        <div className="relative">
          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            required
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-12 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        </div>
      </div>

      {/* ===============================================
          Confirm Password
      =============================================== */}

      <div>
        <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
          Confirm Password
        </label>

        <input
          type={
            showPassword
              ? "text"
              : "password"
          }
          required
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(
              e.target.value
            )
          }
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
        />
      </div>

      {/* ===============================================
          Error
      =============================================== */}

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-800 dark:bg-red-950 dark:text-red-300">
          {error}
        </div>
      )}

      {/* ===============================================
          Success
      =============================================== */}

      {success && (
        <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 dark:border-green-800 dark:bg-green-950 dark:text-green-300">
          {success}
        </div>
      )}

      {/* ===============================================
          Submit
      =============================================== */}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-amber-500 px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading
          ? "Updating..."
          : "Update Password"}
      </button>
    </form>
  );
}