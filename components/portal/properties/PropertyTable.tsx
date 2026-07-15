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

import { deleteProperty } from "@/app/actions/property-actions";
import Card from "@/components/ui/Card";
import ConfirmDialog from "@/components/ui/ConfirmDialog";
import SearchBar from "@/components/ui/SearchBar";
import type { Property } from "@/types";

interface PropertyTableProps {
  properties: Property[];
  role: "admin" | "subadmin" | null;
}

export default function PropertyTable({
  properties,
  role,
}: PropertyTableProps) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const [search, setSearch] = useState("");

  const [deleteId, setDeleteId] = useState<number | null>(
    null
  );

  const [deleteTitle, setDeleteTitle] =
    useState("");

  const filteredProperties = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return properties;
    }

    return properties.filter((property) => {
      return (
        property.title
          .toLowerCase()
          .includes(query) ||
        property.locality
          .toLowerCase()
          .includes(query) ||
        property.propertyType
          .toLowerCase()
          .includes(query)
      );
    });
  }, [properties, search]);

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
      const result = await deleteProperty(deleteId);

      if (!result.success) {
        toast.error(
          result.message ??
            "Failed to delete property."
        );
        return;
      }

      toast.success(
        "Property deleted successfully!"
      );

      closeDeleteDialog();

      router.refresh();
    });
  }

  if (properties.length === 0) {
    return (
      <Card className="overflow-hidden p-0">
        <div className="bg-white px-8 py-20 text-center dark:bg-slate-900">
          <div className="flex flex-col items-center">
            <ImageOff
              size={64}
              className="text-slate-300 dark:text-slate-600"
            />

            <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
              No Properties Found
            </h3>

            <p className="mt-2 max-w-md text-slate-500 dark:text-slate-400">
              Start by creating your first property
              listing. Once added, it will appear
              here automatically.
            </p>

            <Link
              href="/portal/properties/new"
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
              {filteredProperties.length} of{" "}
              {properties.length} properties
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
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Property
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Type
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Locality
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Price
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Featured
                </th>

                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
                            {filteredProperties.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-16 text-center"
                  >
                    <Search
                      size={54}
                      className="mx-auto text-slate-300 dark:text-slate-600"
                    />

                    <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                      No Matching Properties
                    </h3>

                    <p className="mt-2 text-slate-500 dark:text-slate-400">
                      Try another search keyword.
                    </p>
                  </td>
                </tr>
              ) : (
                filteredProperties.map((property) => (
                  <tr
                    key={property.id}
                    className="border-t border-slate-200 transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="h-20 w-28 flex-shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
                          {property.images.length > 0 ? (
                            <img
                              src={property.images[0]}
                              alt={property.title}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center">
                              <ImageOff
                                size={24}
                                className="text-slate-400 dark:text-slate-600"
                              />
                            </div>
                          )}
                        </div>

                        <div>
                          <Link
                            href={`/properties/${property.slug}`}
                            className="font-semibold text-slate-900 transition hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                          >
                            {property.title}
                          </Link>

                          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                            #{property.id}
                          </p>

                          <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                            {property.images.length} Image
                            {property.images.length !== 1 ? "s" : ""}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-700 dark:text-slate-300">
                      {property.propertyType}
                    </td>

                    <td className="px-6 py-4 text-slate-700 dark:text-slate-300">
                      {property.locality}
                    </td>

                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                      {property.priceLabel}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          property.featured
                            ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
                            : "bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                        }`}
                      >
                        {property.featured
                          ? "Featured"
                          : "Normal"}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-4">
                        <Link
                          href={`/properties/${property.slug}`}
                          className="text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                          title="View Property"
                        >
                          <Eye size={18} />
                        </Link>

                        <Link
                          href={`/portal/properties/${property.id}/edit`}
                          className="text-blue-600 transition hover:text-blue-800 dark:text-blue-400"
                          title="Edit Property"
                        >
                          <Pencil size={18} />
                        </Link>

                        {role === "admin" && (
                          <button
                            type="button"
                            title="Delete Property"
                            onClick={() =>
                              openDeleteDialog(
                                property.id,
                                property.title
                              )
                            }
                            className="text-red-600 transition hover:text-red-800 disabled:opacity-50 dark:text-red-400"
                            disabled={isPending}
                          >
                            <Trash2 size={18} />
                          </button>
                        )}
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