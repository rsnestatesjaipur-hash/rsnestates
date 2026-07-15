"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
} from "lucide-react";

import { supabase } from "@/lib/supabase/client";

export default function RegisterForm() {
  // =====================================================
  // State
  // =====================================================

  const router = useRouter();

  const [fullName, setFullName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [mobile, setMobile] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [
    showPassword,
    setShowPassword,
  ] = useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const [acceptTerms, setAcceptTerms] =
    useState(false);

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

    if (password !== confirmPassword) {
      setError(
        "Passwords do not match."
      );
      return;
    }

    if (!acceptTerms) {
      setError(
        "Please accept the Terms & Conditions."
      );
      return;
    }

    try {
      setLoading(true);

      const origin =
        window.location.origin;

      const { error } =
        await supabase.auth.signUp({
          email,
          password,

          options: {
            emailRedirectTo:
              `${origin}/portal/login`,

            data: {
              full_name: fullName,
              mobile,
            },
          },
        });

      if (error) {
        setError(
          error.message ||
            "Unable to create account."
        );
        return;
      }

      await supabase.auth.signOut();

      setSuccess(
        "Account created successfully. Please verify your email before signing in."
      );

      setTimeout(() => {
        router.replace(
          "/portal/login"
        );
      }, 3000);
    } catch {
      setError(
        "Unable to create account."
      );
    } finally {
      setLoading(false);
    }
  }

  // =====================================================
  // UI
  // =====================================================

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {/* Full Name */}

      <div>
        <label className="mb-2 block font-medium">
          Full Name
        </label>

        <input
          required
          value={fullName}
          onChange={(e) =>
            setFullName(
              e.target.value
            )
          }
          className="w-full rounded-xl border border-slate-300 px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
        />
      </div>

      {/* Email */}

      <div>
        <label className="mb-2 block font-medium">
          Email
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
          className="w-full rounded-xl border border-slate-300 px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
        />
      </div>

      {/* Mobile */}

      <div>
        <label className="mb-2 block font-medium">
          Mobile Number
        </label>

        <input
          value={mobile}
          onChange={(e) =>
            setMobile(
              e.target.value
            )
          }
          className="w-full rounded-xl border border-slate-300 px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
        />
      </div>

      {/* Password */}

      <div>
        <label className="mb-2 block font-medium">
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
            className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-12 dark:border-slate-700 dark:bg-slate-800"
          />

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
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        </div>
      </div>
            {/* Confirm Password */}

      <div>
        <label className="mb-2 block font-medium">
          Confirm Password
        </label>

        <div className="relative">
          <input
            type={
              showConfirmPassword
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
            className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-12 dark:border-slate-700 dark:bg-slate-800"
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(
                !showConfirmPassword
              )
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
          >
            {showConfirmPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Terms */}

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={acceptTerms}
          onChange={(e) =>
            setAcceptTerms(
              e.target.checked
            )
          }
        />

        <span className="text-sm">
          I agree to the Terms &
          Conditions and Privacy
          Policy.
        </span>
      </label>

      {/* Error */}

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-600 dark:border-red-800 dark:bg-red-950 dark:text-red-300">
          {error}
        </div>
      )}

      {/* Success */}

      {success && (
        <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-700 dark:border-green-800 dark:bg-green-950 dark:text-green-300">
          {success}
        </div>
      )}

      {/* Submit */}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-amber-500 px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading
          ? "Creating Account..."
          : "Create Account"}
      </button>
    </form>
  );
}