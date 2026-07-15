"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  Moon,
  Sun,
  Menu,
} from "lucide-react";

import Container from "../common/Container";
import ThemeToggle from "../common/ThemeToggle";

export default function Navbar() {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logo =
    !mounted
      ? "/images/logo-white.png"
      : resolvedTheme === "light"
        ? "/images/logo-black.png"
        : "/images/logo-white.png";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white transition-colors dark:border-slate-800 dark:bg-slate-950">
      <Container>
        <nav className="flex h-16 items-center justify-between md:h-20">
          {/* ===================================== */}
          {/* Left Logo */}
          {/* ===================================== */}

          <Link
            href="/"
            className="shrink-0"
          >
            <Image
              src={logo}
              alt="RSN Estates"
              width={220}
              height={70}
              priority
              className="h-10 w-auto md:h-14"
            />
          </Link>

          {/* ===================================== */}
          {/* Desktop Brand */}
          {/* ===================================== */}

          <Link
            href="/"
            className="absolute left-1/2 hidden -translate-x-1/2 text-3xl font-bold tracking-wide text-slate-900 transition-colors dark:text-white md:block"
          >
            RSN Estates
          </Link>

          {/* ===================================== */}
          {/* Right Actions */}
          {/* ===================================== */}

          <div className="flex items-center gap-2 md:gap-3">

            {/* Desktop Theme Text */}
            <div className="hidden items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 md:flex">
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

            {/* Mobile Theme Toggle */}
            <div className="md:hidden">
              <ThemeToggle />
            </div>

            {/* Login */}
            <Link
              href="/portal/login"
              className="hidden rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800 md:inline-flex"
            >
              Login
            </Link>

            {/* CTA */}
            <Link
              href="/portal/properties/new"
              className="rounded-lg bg-amber-500 px-3 py-2 text-xs font-semibold whitespace-nowrap text-slate-900 transition hover:bg-amber-400 md:rounded-xl md:px-4 md:py-2 md:text-sm"
            >
              Post FREE
            </Link>

            {/* Mobile Menu */}
            <button
              type="button"
              className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 md:hidden"
              aria-label="Open Menu"
            >
              <Menu className="h-5 w-5" />
            </button>

          </div>
        </nav>
      </Container>
    </header>
  );
}