import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-500 border border-blue-600",
    secondary:
      "bg-white text-slate-900 border border-slate-300 hover:bg-slate-100 dark:bg-slate-800 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700",
    danger:
      "bg-red-600 text-white hover:bg-red-500 border border-red-600",
  };

  return (
    <button
      {...props}
      className={[
        "inline-flex items-center justify-center",
        "rounded-xl",
        "px-5",
        "py-3",
        "font-semibold",
        "transition-colors",
        "disabled:cursor-not-allowed",
        "disabled:opacity-50",
        variants[variant],
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}