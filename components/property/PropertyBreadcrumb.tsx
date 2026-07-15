import Link from "next/link";
import Container from "@/components/common/Container";
import type { Property } from "@/types";

interface PropertyBreadcrumbProps {
property?: Property;
}

export default function PropertyBreadcrumb({
property,
}: PropertyBreadcrumbProps) {
return (
<div className="border-b border-slate-200 bg-white transition-colors dark:border-slate-800 dark:bg-slate-950">
<Container>
<nav className="flex items-center gap-2 py-4 text-sm">
<Link href="/" className="text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white" >
Home
</Link>

      <span className="text-slate-400 dark:text-slate-600">
        /
      </span>

      {property ? (
        <>
          <Link
            href="/properties"
            className="text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            Properties
          </Link>

          <span className="text-slate-400 dark:text-slate-600">
            /
          </span>

          <span className="font-medium text-slate-900 transition-colors dark:text-white">
            {property.title}
          </span>
        </>
      ) : (
        <span className="font-medium text-slate-900 transition-colors dark:text-white">
          Properties
        </span>
      )}
    </nav>
  </Container>
</div>

);
}