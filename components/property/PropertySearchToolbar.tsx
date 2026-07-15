"use client";

import type { ReactNode } from "react";

interface PropertySearchToolbarProps {
  children: ReactNode;
}

export default function PropertySearchToolbar({
  children,
}: PropertySearchToolbarProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="flex flex-nowrap items-end gap-2 [&>*]:shrink-0">
        {children}
      </div>
    </div>
  );
}