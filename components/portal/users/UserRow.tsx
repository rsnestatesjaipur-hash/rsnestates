"use client";

import { useState, useTransition } from "react";

import { Check, Shield, User, X } from "lucide-react";
import { toast } from "sonner";

import { toggleFeaturePermission } from "@/app/actions/user-actions";

import { PortalUser } from "@/lib/repositories/users/userRepository";

// =====================================================
// Props
// =====================================================

interface UserRowProps {
  user: PortalUser;
}

// =====================================================
// Component
// =====================================================

export default function UserRow({
  user,
}: UserRowProps) {
  const [
    canFeature,
    setCanFeature,
  ] = useState(
    user.canFeatureProperty
  );

  const [
    isPending,
    startTransition,
  ] = useTransition();

  // ===================================================
  // Toggle Permission
  // ===================================================

  function handleToggle() {
    const newValue =
      !canFeature;

    // Optimistic Update

    setCanFeature(newValue);

    startTransition(
      async () => {
        const result =
          await toggleFeaturePermission(
            user.userId,
            newValue
          );

        if (
          result.success
        ) {
          toast.success(
            "Permission updated."
          );

          return;
        }

        // Rollback

        setCanFeature(
          !newValue
        );

        toast.error(
          result.message ??
            "Failed to update permission."
        );
      }
    );
  }

  return (
    <tr className="border-b border-slate-100 transition hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900/50">
      {/* ============================================
          Name
      ============================================ */}

      <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
        {user.fullName}
      </td>

      {/* ============================================
          Type
      ============================================ */}

      <td className="px-6 py-4">
        {user.type ===
        "subadmin" ? (
          <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-sm font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
            <Shield size={15} />
            Sub-Admin
          </span>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            <User size={15} />
            Property Owner
          </span>
        )}
      </td>

      {/* ============================================
          Email
      ============================================ */}

      <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
        {user.email}
      </td>

      {/* ============================================
          Active
      ============================================ */}

      <td className="px-6 py-4 text-center">
        {user.active
          ? "✅"
          : "❌"}
      </td>

      {/* ============================================
          Can Feature
      ============================================ */}

      <td className="px-6 py-4 text-center">
        <button
          type="button"
          disabled={
            isPending
          }
          onClick={
            handleToggle
          }
          className={`inline-flex h-8 w-8 items-center justify-center rounded-lg border transition ${
            canFeature
              ? "border-green-600 bg-green-600 text-white hover:bg-green-700"
              : "border-slate-300 bg-white text-slate-400 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700"
          } ${
            isPending
              ? "cursor-not-allowed opacity-60"
              : ""
          }`}
        >
          {canFeature ? (
            <Check
              size={16}
            />
          ) : (
            <X
              size={16}
            />
          )}
        </button>
      </td>

      {/* ============================================
          Properties
      ============================================ */}

      <td className="px-6 py-4 text-center font-medium text-slate-900 dark:text-white">
        {user.type ===
        "subadmin"
          ? "—"
          : user.propertyCount}
      </td>
    </tr>
  );
}