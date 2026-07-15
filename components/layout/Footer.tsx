import Link from "next/link";
import Container from "../common/Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 text-slate-900 transition-colors dark:border-slate-800 dark:bg-slate-950 dark:text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h2 className="text-2xl font-bold">
              RSN Estates
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 transition-colors dark:text-slate-300">
              Jaipur&apos;s Smart Property Portal helping buyers discover the
              best properties, builders, and investment opportunities.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">
              Explore
            </h3>

            <ul className="space-y-2 text-slate-600 transition-colors dark:text-slate-300">
              <li>
                <Link
                  href="/properties"
                  className="transition hover:text-blue-600 dark:hover:text-amber-400"
                >
                  Properties
                </Link>
              </li>

              <li>
                <Link
                  href="/localities"
                  className="transition hover:text-blue-600 dark:hover:text-amber-400"
                >
                  Localities
                </Link>
              </li>

              <li>
                <Link
                  href="/blogs"
                  className="transition hover:text-blue-600 dark:hover:text-amber-400"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">
              Company
            </h3>

            <ul className="space-y-2 text-slate-600 transition-colors dark:text-slate-300">
              <li>
                <Link
                  href="/about"
                  className="transition hover:text-blue-600 dark:hover:text-amber-400"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-blue-600 dark:hover:text-amber-400"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="transition hover:text-blue-600 dark:hover:text-amber-400"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms-and-conditions"
                  className="transition hover:text-blue-600 dark:hover:text-amber-400"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">
              Contact
            </h3>

            <p className="text-slate-600 transition-colors dark:text-slate-300">
              Jaipur, Rajasthan
            </p>

            <p className="mt-2 text-slate-600 transition-colors dark:text-slate-300">
              contact@rsnestates.com
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500 transition-colors dark:border-slate-800 dark:text-slate-400">
          © {new Date().getFullYear()} RSN Estates. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}