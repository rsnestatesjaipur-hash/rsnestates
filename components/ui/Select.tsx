import {
  forwardRef,
  SelectHTMLAttributes,
} from "react";

interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={[
          "w-full rounded-xl border border-slate-300 bg-white px-4 py-3",
          "text-slate-900 outline-none transition",
          "focus:border-slate-900",
          "dark:border-slate-700",
          "dark:bg-slate-800",
          "dark:text-white",
          "dark:focus:border-slate-500",
          className,
        ].join(" ")}
        {...props}
      >
        {children}
      </select>
    );
  }
);

Select.displayName = "Select";

export default Select;