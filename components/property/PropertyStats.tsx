import Container from "@/components/common/Container";

interface PropertyStatsProps {
  totalProperties: number;
}

export default function PropertyStats({
  totalProperties,
}: PropertyStatsProps) {
  return (
    <div className="border-b border-slate-200 bg-white transition-colors dark:border-slate-800 dark:bg-slate-950">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-4 py-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 transition-colors dark:text-white">
              {totalProperties} Properties Found
            </h2>

            <p className="mt-1 text-sm text-slate-500 transition-colors dark:text-slate-400">
              Apartments • Villas • Plots • Commercial
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-500 transition-colors dark:text-slate-400">
              Updated Today
            </span>

            <div className="h-2 w-2 rounded-full bg-green-500"></div>
          </div>
        </div>
      </Container>
    </div>
  );
}