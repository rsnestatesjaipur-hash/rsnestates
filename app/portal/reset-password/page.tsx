import ResetPasswordForm from "@/components/portal/ResetPasswordForm";

export const metadata = {
  title: "Reset Password | RSN Estates",
  description:
    "Create a new password for your RSN Estates account.",
};

export default function ResetPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6 dark:bg-slate-950">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-10 shadow-xl dark:border-slate-800 dark:bg-slate-900">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Reset Password
          </h1>

          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Enter your new password below.
          </p>
        </div>

        <div className="mt-10">
          <ResetPasswordForm />
        </div>
      </div>
    </main>
  );
}