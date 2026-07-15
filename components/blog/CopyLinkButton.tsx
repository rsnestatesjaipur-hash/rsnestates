"use client";

import { toast } from "sonner";

interface CopyLinkButtonProps {
  url: string;
}

export default function CopyLinkButton({
  url,
}: CopyLinkButtonProps) {
  async function copyLink() {
    await navigator.clipboard.writeText(url);
    toast.success("Link copied!");
  }

  return (
    <button
      type="button"
      onClick={copyLink}
      className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900"
    >
      Copy Link
    </button>
  );
}