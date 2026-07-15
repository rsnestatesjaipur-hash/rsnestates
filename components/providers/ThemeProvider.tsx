"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

if (
  typeof window !== "undefined" &&
  process.env.NODE_ENV === "development"
) {
  const originalConsoleError = console.error;
  console.error = (...args: unknown[]) => {
    const [firstArg] = args;
    if (
      typeof firstArg === "string" &&
      firstArg.includes("Encountered a script tag")
    ) {
      // Known false-positive from next-themes' internal flicker-prevention
      // script; safe to ignore. See comment block above for details.
      return;
    }
    originalConsoleError(...args);
  };
}

interface ThemeProviderProps {
  /** The application tree that should have access to theme context. */
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}