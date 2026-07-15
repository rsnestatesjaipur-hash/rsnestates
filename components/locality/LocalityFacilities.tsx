import {
  School,
  Hospital,
  ShoppingBag,
  Route,
  CheckCircle2,
} from "lucide-react";

interface LocalityFacilitiesProps {
  schools: string[];
  hospitals: string[];
  shopping: string[];
  connectivity: string[];
}

export default function LocalityFacilities({
  schools,
  hospitals,
  shopping,
  connectivity,
}: LocalityFacilitiesProps) {
  const sections = [
    {
      title: "Schools",
      icon: School,
      items: schools,
      color:
        "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
      title: "Hospitals",
      icon: Hospital,
      items: hospitals,
      color:
        "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
    },
    {
      title: "Shopping",
      icon: ShoppingBag,
      items: shopping,
      color:
        "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
    },
    {
      title: "Connectivity",
      icon: Route,
      items: connectivity,
      color:
        "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    },
  ];

  return (
    <section className="mt-20 rounded-3xl border border-slate-200 bg-white p-10 shadow-lg transition-colors dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-950/40">
      <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
        Nearby Facilities
      </h2>

      <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
        Everything you need is conveniently located near this locality,
        making it an excellent choice for comfortable living.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {sections.map((section) => {
          const Icon = section.icon;

          return (
            <div
              key={section.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="mb-6 flex items-center gap-4">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${section.color}`}
                >
                  <Icon size={26} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {section.title}
                  </h3>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {section.items.length} Places
                  </p>
                </div>
              </div>

              {section.items.length > 0 ? (
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-green-500"
                      />

                      <span className="leading-7 text-slate-700 dark:text-slate-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-500 dark:text-slate-400">
                  Information will be updated soon.
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}