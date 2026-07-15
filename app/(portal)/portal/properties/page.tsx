import Link from "next/link";

import Button from "@/components/ui/Button";
import PropertyTable from "@/components/portal/properties/PropertyTable";
import { getAllProperties } from "@/lib/repositories/propertyRepository";
import { getCurrentUserRole } from "@/lib/auth/getCurrentUserRole";

export default async function PropertiesPage() {
const [propertiesResult, role] =
  await Promise.all([
    getAllProperties(),
    getCurrentUserRole(),
  ]);

const properties =
  propertiesResult ?? [];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Properties
          </h1>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Manage all property listings.
          </p>
        </div>

        <Link href="/portal/properties/new">
          <Button>+ Add Property</Button>
        </Link>
      </div>

      <PropertyTable
        properties={properties}
        role={role}
      />
    </div>
  );
}