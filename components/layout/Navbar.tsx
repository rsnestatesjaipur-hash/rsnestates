"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import Container from "../common/Container";
import ThemeToggle from "../common/ThemeToggle";

export default function Navbar() {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Always return a valid image path to avoid
  // hydration mismatch during the initial render.
  const logo =
    !mounted
      ? "/images/logo-white.png"
      : resolvedTheme === "light"
        ? "/images/logo-black.png"
        : "/images/logo-white.png";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white transition-colors dark:border-slate-800 dark:bg-slate-950">
      <Container>
        <nav className="relative flex h-20 items-center justify-between">
          {/* Left Logo */}
          <Link
            href="/"
            className="flex items-center"
          >
            <Image
              src={logo}
              alt="RSN Estates"
              width={220}
              height={70}
              priority
              className="h-14 w-auto"
            />
          </Link>

          {/* Center Brand */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 text-3xl font-bold tracking-wide text-slate-900 transition-colors dark:text-white"
          >
            RSN Estates
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-3">

            <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              {mounted && (
                <>
                  {resolvedTheme === "dark" ? (
                    <>
                      <Moon className="h-4 w-4" />
                      <span>Dark</span>
                    </>
                  ) : (
                    <>
                      <Sun className="h-4 w-4" />
                      <span>Light</span>
                    </>
                  )}
                </>
              )}

              <ThemeToggle />
            </div>

            <Link
              href="/portal/properties/new"
              className="rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-400"
            >
              Post Property FREE
            </Link>

          </div>
        </nav>
      </Container>
    </header>
  );
}