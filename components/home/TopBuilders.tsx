import Container from "../common/Container";
import Section from "../common/Section";

const builders = [
  {
    name: "Mahima Group",
    projects: "28 Projects",
  },
  {
    name: "Manglam Group",
    projects: "34 Projects",
  },
  {
    name: "Ashiana Housing",
    projects: "16 Projects",
  },
  {
    name: "Apex Group",
    projects: "21 Projects",
  },
];

export default function TopBuilders() {
  return (
    <Section className="bg-white transition-colors dark:bg-slate-950">
      <Container>
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
            Trusted Developers
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900 transition-colors dark:text-white">
            Top Builders in Jaipur
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 transition-colors dark:text-slate-300">
            Explore projects from Jaipur&apos;s most trusted and reputed real
            estate developers.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {builders.map((builder) => (
            <div
              key={builder.name}
              className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-950/40"
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-slate-200 text-slate-500 transition-colors dark:bg-slate-700 dark:text-slate-400">
                Logo
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900 transition-colors dark:text-white">
                {builder.name}
              </h3>

              <p className="mt-3 text-slate-600 transition-colors dark:text-slate-300">
                {builder.projects}
              </p>

              <button className="mt-6 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500">
                View Projects
              </button>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}