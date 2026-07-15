import Link from "next/link";

import RegisterForm from "@/components/portal/RegisterForm";

export const metadata = {
  title: "Create Account | RSN Estates",
  description:
    "Create your RSN Estates account.",
};

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6 py-10 dark:bg-slate-950">
      <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-10 shadow-xl dark:border-slate-800 dark:bg-slate-900">
        {/* ================================================
            Logo
        ================================================ */}

        <div className="text-center">
          <Link
            href="/"
            className="inline-block"
          >
            <h1 className="text-3xl font-bold text-slate-900 transition hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
              RSN Estates
            </h1>
          </Link>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Create Your Account
          </p>
        </div>

        {/* ================================================
            Register Form
        ================================================ */}

        <div className="mt-10">
          <RegisterForm />
        </div>

        {/* ================================================
            Login Link
        ================================================ */}

        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Already have an account?{" "}
            <Link
              href="/portal/login"
              className="font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}