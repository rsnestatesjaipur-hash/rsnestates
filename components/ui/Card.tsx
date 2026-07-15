import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={[
        "rounded-2xl",
        "border",
        "border-slate-200",
        "bg-white",
        "shadow-sm",
        "transition-colors",
        "dark:border-slate-700",
        "dark:bg-slate-900",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}