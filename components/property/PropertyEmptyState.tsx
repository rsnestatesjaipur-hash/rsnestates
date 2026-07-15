import Container from "@/components/common/Container";

export default function PropertyEmptyState() {
  return (
    <Container>
      <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-20 text-center transition-colors dark:border-slate-700 dark:bg-slate-900">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          No Properties Found
        </h3>

        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Try changing your search criteria or filters.
        </p>
      </div>
    </Container>
  );
}