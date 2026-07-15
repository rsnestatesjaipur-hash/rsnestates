import Container from "@/components/common/Container";

export default function PropertyPagination() {
  return (
    <div className="bg-white py-10 transition-colors dark:bg-slate-950">
      <Container>
        <div className="flex justify-center gap-2">
          <button className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800">
            Previous
          </button>

          <button className="rounded-lg bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500">
            1
          </button>

          <button className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800">
            2
          </button>

          <button className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800">
            3
          </button>

          <button className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800">
            Next
          </button>
        </div>
      </Container>
    </div>
  );
}