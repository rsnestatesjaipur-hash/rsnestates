import { forwardRef, TextareaHTMLAttributes } from "react";

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(({ className = "", ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      {...props}
      className={[
        "w-full",
        "rounded-xl",
        "border",
        "border-slate-300",
        "bg-white",
        "px-4",
        "py-3",
        "text-slate-900",
        "placeholder:text-slate-400",
        "outline-none",
        "transition-colors",
        "focus:border-blue-600",
        "focus:ring-2",
        "focus:ring-blue-200",
        "dark:border-slate-700",
        "dark:bg-slate-800",
        "dark:text-white",
        "dark:placeholder:text-slate-500",
        "dark:focus:border-blue-500",
        "dark:focus:ring-blue-900/40",
        className,
      ].join(" ")}
    />
  );
});

Textarea.displayName = "Textarea";

export default Textarea;