import { notFound } from "next/navigation";

import LocalityForm from "@/components/portal/localities/form/LocalityForm";

import { getLocalityById } from "@/lib/repositories/localityRepository";

interface EditLocalityPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditLocalityPage({
  params,
}: EditLocalityPageProps) {
  const { id } = await params;

  const locality = await getLocalityById(
    Number(id)
  );

  if (!locality) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Edit Locality
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Update locality information.
        </p>
      </div>

      <LocalityForm
        mode="edit"
        localityId={locality.id}
        initialData={locality}
      />
    </div>
  );
}