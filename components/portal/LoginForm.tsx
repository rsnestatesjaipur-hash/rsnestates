"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
} from "lucide-react";

import { signIn } from "@/lib/supabase/auth";

export default function LoginForm() {
  // =====================================================
  // State
  // =====================================================

  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [
    showPassword,
    setShowPassword,
  ] = useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  // =====================================================
  // Submit Handler
  // =====================================================

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    setError("");

    try {
      const { error } =
        await signIn(
          email,
          password
        );

      if (error) {
        setError(error.message);

        return;
      }

      router.replace("/portal");
    } catch {
      setError(
        "Unable to sign in. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  // =====================================================
  // Render
  // =====================================================

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* ================================================
          Email
      ================================================ */}

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

      {/* ================================================
          Password
      ================================================ */}

      <div>
        <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
          Password
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
            placeholder="Enter your password"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-12 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />

          {password && (
            <button
              type="button"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
            >
              {showPassword ? (
                <EyeOff
                  size={20}
                />
              ) : (
                <Eye size={20} />
              )}
            </button>
          )}
        </div>
      </div>

      {/* ================================================
          Error
      ================================================ */}

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-800 dark:bg-red-950 dark:text-red-300">
          {error}
        </div>
      )}

      {/* ================================================
          Submit
      ================================================ */}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-amber-500 px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading
          ? "Signing In..."
          : "Sign In"}
      </button>

      {/* ================================================
          Forgot Password
      ================================================ */}

      <div className="text-center">
        <button
          type="button"
          onClick={() =>
            router.push(
              "/portal/forgot-password"
            )
          }
          className="text-sm font-medium text-blue-600 transition hover:text-blue-500"
        >
          Forgot Password?
        </button>
      </div>

      {/* ================================================
          Divider
      ================================================ */}

      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />

        <span className="text-sm text-slate-500">
          OR
        </span>

        <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
      </div>

      {/* ================================================
          Create Account
      ================================================ */}

      <button
        type="button"
        onClick={() =>
          router.push(
            "/portal/register"
          )
        }
        className="w-full rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
      >
        Create New Account
      </button>
    </form>
  );
}