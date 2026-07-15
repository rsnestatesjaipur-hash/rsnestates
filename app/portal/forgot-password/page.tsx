import ForgotPasswordForm from "@/components/portal/ForgotPasswordForm";

export const metadata = {
  title: "Forgot Password | RSN Estates",
  description:
    "Reset your RSN Estates administrator account password.",
};

export default function ForgotPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6 dark:bg-slate-950">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-10 shadow-xl dark:border-slate-800 dark:bg-slate-900">
        {/* ================================================
            Heading
        ================================================ */}

        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Forgot Password
          </h1>

          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Enter your registered email address and we'll send you a password reset link.
          </p>
        </div>

        {/* ================================================
            Forgot Password Form
        ================================================ */}

        <div className="mt-10">
          <ForgotPasswordForm />
        </div>
      </div>
    </main>
  );
}