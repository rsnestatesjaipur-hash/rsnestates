import LoginForm from "@/components/portal/LoginForm";

export const metadata = {
  title: "Admin Login | RSN Estates",
  description:
    "Secure administrator login for RSN Estates.",
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6 dark:bg-slate-950">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-10 shadow-xl dark:border-slate-800 dark:bg-slate-900">
        {/* ================================================
            Logo
        ================================================ */}

        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            RSN Estates
          </h1>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Administrator Portal
          </p>
        </div>

        {/* ================================================
            Login Form
        ================================================ */}

        <div className="mt-10">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}