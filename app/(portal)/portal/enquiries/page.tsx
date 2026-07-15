import InquiryTable from "@/components/portal/inquiries/InquiryTable";
import { getAllInquiries } from "@/app/actions/inquiry-actions";

export default async function EnquiriesPage() {
  const inquiries = await getAllInquiries();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Property Inquiries
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Manage all customer inquiries from one place.
        </p>
      </div>

      <InquiryTable inquiries={inquiries} />
    </div>
  );
}