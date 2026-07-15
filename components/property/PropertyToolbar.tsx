import Container from "@/components/common/Container";

interface PropertyToolbarProps {
  totalProperties: number;
}

export default function PropertyToolbar({
  totalProperties,
}: PropertyToolbarProps) {
  return (
    <div className="border-b border-slate-200 bg-slate-50 transition-colors dark:border-slate-800 dark:bg-slate-900">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 py-5 md:flex-row md:items-center">
          <h2 className="text-lg font-semibold text-slate-900 transition-colors dark:text-white">
            Showing {totalProperties} Properties
          </h2>

          <select className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-blue-500">
            <option>Latest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Area: Small to Large</option>
            <option>Area: Large to Small</option>
          </select>
        </div>
      </Container>
    </div>
  );
}