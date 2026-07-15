import Link from "next/link";

import Button from "@/components/ui/Button";

import LocalityTable from "@/components/portal/localities/LocalityTable";

import { getAllLocalities } from "@/lib/repositories/localityRepository";

export default async function LocalitiesPage() {
  const localities = await getAllLocalities();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Localities
          </h1>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Manage all localities.
          </p>
        </div>

        <Link href="/portal/localities/new">
          <Button>
            + Add Locality
          </Button>
        </Link>
      </div>

      <LocalityTable
        localities={localities}
      />
    </div>
  );
}