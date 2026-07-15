"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  Trash2,
  CheckSquare,
  Square,
} from "lucide-react";

import { toast } from "sonner";

import {
  updateInquiryStatus,
  deleteInquiry,
  deleteMultipleInquiries,
} from "@/app/actions/inquiry-actions";

import ConfirmDialog from "@/components/ui/ConfirmDialog";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

import type { Inquiry } from "@/types";
import Card from "@/components/ui/Card";
import SearchBar from "@/components/ui/SearchBar";

interface InquiryTableProps {
  inquiries: Inquiry[];
}

export default function InquiryTable({
  inquiries,
}: InquiryTableProps) {
  const [search, setSearch] = useState("");

  const router = useRouter();

const [isPending, startTransition] =
  useTransition();

const [deleteId, setDeleteId] =
  useState<number | null>(null);

const [
  selectedItems,
  setSelectedItems,
] = useState<
  {
    id: number;
    source: "Property" | "Contact";
  }[]
>([]);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return inquiries;

    return inquiries.filter((item) => {
      return (
        item.name.toLowerCase().includes(query) ||
        item.phone.toLowerCase().includes(query) ||
        item.propertyTitle
          .toLowerCase()
          .includes(query)
      );
    });
  }, [inquiries, search]);

  const statusColor = (status: string) => {
    switch (status) {
      case "New":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300";

      case "Contacted":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300";

      case "Site Visit":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300";

      case "Negotiation":
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300";

      case "Closed":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300";

      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
    }
  };

const toggleSelection = (
  id: number,
  source: "Property" | "Contact"
) => {
  setSelectedItems((prev) => {
    const exists = prev.some(
      (item) =>
        item.id === id &&
        item.source === source
    );

    if (exists) {
      return prev.filter(
        (item) =>
          !(
            item.id === id &&
            item.source === source
          )
      );
    }

    return [
      ...prev,
      {
        id,
        source,
      },
    ];
  });
};

const toggleSelectAll = () => {
  if (
    selectedItems.length ===
    filtered.length
  ) {
    setSelectedItems([]);

    return;
  }

  setSelectedItems(
    filtered.map((item) => ({
      id: item.id,
      source: item.source,
    }))
  );
};

  return (
    <Card className="overflow-hidden p-0">
        <div className="flex flex-col gap-4 border-b border-slate-200 p-6 dark:border-slate-700 md:flex-row md:items-center md:justify-between">

          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Customer Inquiries
            </h3>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {filtered.length} of {inquiries.length} inquiries
            </p>
          </div>

          <div className="flex flex-1 items-center justify-end gap-4">

            <div className="w-full max-w-md">
              <SearchBar
                value={search}
                onChange={setSearch}
                placeholder="Search..."
              />
            </div>

            {selectedItems.length > 0 && (
              <button
                type="button"
                disabled={isPending}
                onClick={() => setDeleteId(-1)}
                className="inline-flex min-w-[240px] items-center justify-center gap-3 rounded-xl bg-red-600 px-8 py-3 text-base font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
              >
                <Trash2 size={20} />

                Delete Selected ({selectedItems.length})
              </button>
            )}

          </div>

        </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-100 dark:bg-slate-800">
            <tr>
              <th className="px-6 py-4 text-left">
                Source
              </th>

              <th className="px-6 py-4 text-left">
                Customer
              </th>

              <th className="px-6 py-4 text-left">
                Enquiry
              </th>

              <th className="px-6 py-4 text-left">
                Phone
              </th>

              <th className="px-6 py-4 text-left">
                Status
              </th>

              <th className="px-6 py-4 text-left">
                Date
              </th>

              <th className="px-6 py-4 text-center">
                <button
                  type="button"
                  onClick={toggleSelectAll}
                  className="flex w-full items-center justify-center"
                  title="Select All"
                >
                  {selectedItems.length ===
                    filtered.length &&
                  filtered.length > 0 ? (
                    <CheckSquare
                      size={20}
                      className="text-green-600"
                    />
                  ) : (
                    <Square
                      size={20}
                      className="text-slate-500"
                    />
                  )}
                </button>

                <div className="mt-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                  Select All
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="px-6 py-16 text-center"
                >
                  <Search
                    className="mx-auto mb-4 text-slate-400"
                    size={50}
                  />

                  <h3 className="text-xl font-bold">
                    No Inquiries Found
                  </h3>
                </td>
              </tr>
            ) : (
              filtered.map((item) => (
                <tr
                  key={`${item.source}-${item.id}`}
                  className="border-t border-slate-200 dark:border-slate-700"
                >
                  {/* Source */}

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        item.source === "Property"
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                          : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                      }`}
                    >
                      {item.source}
                    </span>
                  </td>

                  {/* Customer */}

                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {item.name}
                    </div>

                    {item.email && (
                      <div className="mt-1 text-sm text-slate-500">
                        {item.email}
                      </div>
                    )}
                  </td>

                  {/* Enquiry */}

                  <td className="px-6 py-4">
                    {item.propertySlug ? (
                      <Link
                        href={`/properties/${item.propertySlug}`}
                        className="font-medium text-blue-600 hover:underline"
                      >
                        {item.propertyTitle}
                      </Link>
                    ) : (
                      <span className="font-medium">
                        {item.propertyTitle}
                      </span>
                    )}
                  </td>

                  {/* Phone */}

                  <td className="px-6 py-4">
                    {item.phone}
                  </td>

                  {/* Status */}

                  <td className="px-6 py-4">
                    {item.source === "Property" ? (
                      <select
                        value={item.status}
                        disabled={isPending}
                        onChange={(e) => {
                          const status = e.target.value;

                          startTransition(async () => {
                            const result =
                              await updateInquiryStatus(
                                item.id,
                                status
                              );

                            if (!result.success) {
                              toast.error(
                                result.message ??
                                  "Failed to update status."
                              );
                              return;
                            }

                            toast.success(
                              "Status updated."
                            );

                            router.refresh();
                          });
                        }}
                        className={`rounded-full border-0 px-3 py-2 text-xs font-semibold outline-none ${statusColor(
                          item.status
                        )}`}
                      >
                        <option value="New">
                          New
                        </option>

                        <option value="Contacted">
                          Contacted
                        </option>

                        <option value="Site Visit">
                          Site Visit
                        </option>

                        <option value="Negotiation">
                          Negotiation
                        </option>

                        <option value="Closed">
                          Closed
                        </option>
                      </select>
                    ) : (
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColor(
                          item.status
                        )}`}
                      >
                        {item.status}
                      </span>
                    )}
                  </td>

                  {/* Date */}

                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(
                      item.createdAt
                    ).toLocaleDateString("en-IN")}
                  </td>

                  {/* Actions */}

                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      <button
                        type="button"
                        onClick={() =>
                          toggleSelection(
                            item.id,
                            item.source
                          )
                        }
                        className="transition"
                        title="Select Inquiry"
                      >
                        {selectedItems.some(
                          (selected) =>
                            selected.id === item.id &&
                            selected.source ===
                              item.source
                        ) ? (
                          <CheckSquare
                            size={20}
                            className="text-green-600"
                          />
                        ) : (
                          <Square
                            size={20}
                            className="text-slate-500"
                          />
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <ConfirmDialog
        open={deleteId !== null}
        title={
          deleteId === -1
            ? "Delete Selected Inquiries"
            : "Delete Inquiry"
        }
        description={
          deleteId === -1
            ? `Are you sure you want to delete ${selectedItems.length} selected inquiries? This action cannot be undone.`
            : "Are you sure you want to delete this inquiry? This action cannot be undone."
        }
        confirmText="Delete"
        cancelText="Cancel"
        loading={isPending}
        onCancel={() => setDeleteId(null)}
          onConfirm={() => {
            startTransition(async () => {
              // ================================================
              // Bulk Delete
              // ================================================

              if (deleteId === -1) {
              const result =
                await deleteMultipleInquiries(
                  selectedItems
                );

                if (!result.success) {
                  toast.error(
                    result.message ??
                      "Failed to delete inquiries."
                  );
                  return;
                }

                toast.success(
                  `${selectedItems.length} inquiries deleted.`
                );

                setSelectedItems([]);
                setDeleteId(null);

                router.refresh();

                setSelectedItems([]);

                setDeleteId(null);

                return;
              }

              // ================================================
              // Single Delete
              // ================================================

              if (!deleteId) {
                return;
              }

              const result =
                await deleteInquiry(deleteId);

              if (!result.success) {
                toast.error(
                  result.message ??
                    "Failed to delete inquiry."
                );
                return;
              }

              toast.success(
                "Inquiry deleted."
              );

              setDeleteId(null);

              router.refresh();
            });
          }}
        />
    </Card>
  );
}