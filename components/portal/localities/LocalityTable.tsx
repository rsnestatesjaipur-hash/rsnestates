"use client";

import { useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Eye,
  ImageOff,
  Pencil,
  Search,
  Trash2,
} from "lucide-react";
import { toast } from "sonner";

import { deleteLocality } from "@/app/actions/locality-actions";
import Card from "@/components/ui/Card";
import ConfirmDialog from "@/components/ui/ConfirmDialog";
import SearchBar from "@/components/ui/SearchBar";
import type { Locality } from "@/types";

interface LocalityTableProps {
  localities: Locality[];
}

export default function LocalityTable({
  localities,
}: LocalityTableProps) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const [search, setSearch] = useState("");

  const [deleteId, setDeleteId] = useState<number | null>(
    null
  );

  const [deleteTitle, setDeleteTitle] =
    useState("");

  const filteredlocalities = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return localities;
    }

return localities.filter((locality) => {
  return (
    locality.name
      .toLowerCase()
      .includes(query) ||
    locality.slug
      .toLowerCase()
      .includes(query)
  );
});
  }, [localities, search]);

  function openDeleteDialog(
    id: number,
    title: string
  ) {
    setDeleteId(id);
    setDeleteTitle(title);
  }

  function closeDeleteDialog() {
    if (isPending) return;

    setDeleteId(null);
    setDeleteTitle("");
  }

function handleDelete() {
  if (!deleteId) return;

  startTransition(async () => {
    const result = await deleteLocality(deleteId);

    if (!result.success) {
      toast.error(
        result.message ??
          "Failed to delete locality."
      );
      return;
    }

    toast.success(
      "Locality deleted successfully!"
    );

    closeDeleteDialog();

    router.refresh();
  });
}

  if (localities.length === 0) {
    return (
      <Card className="overflow-hidden p-0">
        <div className="bg-white px-8 py-20 text-center dark:bg-slate-900">
          <div className="flex flex-col items-center">
            <ImageOff
              size={64}
              className="text-slate-300 dark:text-slate-600"
            />

            <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
              No localities Found
            </h3>

            <p className="mt-2 max-w-md text-slate-500 dark:text-slate-400">
              Start by creating your first property
              listing. Once added, it will appear
              here automatically.
            </p>

            <Link
              href="/portal/localities/new"
              className="mt-8 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500"
            >
              Add First Property
            </Link>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <>
      <Card className="overflow-hidden p-0">
        <div className="flex flex-col gap-4 border-b border-slate-200 p-6 dark:border-slate-700 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Property Listings
            </h3>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {filteredlocalities.length} of{" "}
              {localities.length} localities
            </p>
          </div>

          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search by title, locality or type..."
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-slate-100 dark:bg-slate-800">
            <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold">
                Locality
            </th>

            <th className="px-6 py-4 text-center text-sm font-semibold">
            Properties
          </th>

            <th className="px-6 py-4 text-left text-sm font-semibold">
                Featured
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold">
                Published
            </th>

            <th className="px-6 py-4 text-center text-sm font-semibold">
                Actions
            </th>
            </tr>
            </thead>

            <tbody>
                            {filteredlocalities.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-16 text-center"
                  >
                    <Search
                      size={54}
                      className="mx-auto text-slate-300 dark:text-slate-600"
                    />

                    <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                      No Matching localities
                    </h3>

                    <p className="mt-2 text-slate-500 dark:text-slate-400">
                      Try another search keyword.
                    </p>
                  </td>
                </tr>
              ) : (
                filteredlocalities.map((locality) => (
                <tr
                    key={locality.id}
                    className="border-t border-slate-200 transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
                >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="h-20 w-28 overflow-hidden rounded-xl border border-slate-200">
                          {locality.images.length > 0 ? (
                            <img
                              src={locality.images[0]}
                              alt={locality.name}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center">
                              <ImageOff size={24} />
                            </div>
                          )}
                        </div>

                        <div>
                          <Link
                            href={`/localities/${locality.slug}`}
                            className="font-semibold hover:text-blue-600"
                          >
                            {locality.name}
                          </Link>

                          <p className="text-sm text-slate-500">
                            #{locality.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-center">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          locality.propertyCount > 0
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {locality.propertyCount}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          locality.featured
                            ? "bg-green-100 text-green-700"
                            : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        {locality.featured
                          ? "Featured"
                          : "Normal"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                    <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        locality.published
                            ? "bg-blue-100 text-blue-700"
                            : "bg-slate-200 text-slate-600"
                        }`}
                    >
                        {locality.published
                        ? "Published"
                        : "Draft"}
                    </span>
                    </td>

                    <td className="px-6 py-4">
                    <div className="flex justify-center gap-4">
                        <Link
                        href={`/localities/${locality.slug}`}
                        title="View"
                        >
                        <Eye size={18} />
                        </Link>

                        <Link
                        href={`/portal/localities/${locality.id}/edit`}
                        title="Edit"
                        >
                        <Pencil size={18} />
                        </Link>

                        <button
                        type="button"
                        onClick={() =>
                            openDeleteDialog(
                            locality.id,
                            locality.name
                            )
                        }
                        >
                        <Trash2 size={18} />
                        </button>
                    </div>
                    </td>
                </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>

      <ConfirmDialog
        open={deleteId !== null}
        title="Delete Property"
        description={`Are you sure you want to delete "${deleteTitle}"? This action cannot be undone.`}
        confirmText="Delete Property"
        cancelText="Cancel"
        loading={isPending}
        onCancel={closeDeleteDialog}
        onConfirm={handleDelete}
      />
    </>
  );
}