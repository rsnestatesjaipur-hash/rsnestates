"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const {
    resolvedTheme,
    setTheme,
  } = useTheme();

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-10" />
    );
  }

  const isDark =
    resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle Theme"
      onClick={() => {
        console.log({
          resolvedTheme,
          switchingTo: isDark
            ? "light"
            : "dark",
        });

        setTheme(
          isDark
            ? "light"
            : "dark"
        );
      }}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
    >
      {isDark ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} />
      )}
    </button>
  );
}