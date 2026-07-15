import type { Locality } from "@/types/Locality";

interface WhyInvestProps {
locality: Locality;

propertyType?: string;
}

function InfoList({
title,
items,
}: {
title: string;
items: string[];
}) {
if (items.length === 0) {
return null;
}

return (
<div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-700">
<h3 className="text-xl font-semibold text-slate-900 dark:text-white">
{title}
</h3>

  <ul className="mt-4 space-y-2">
    {items.map((item) => (
      <li
        key={item}
        className="flex items-start gap-2 text-slate-600 dark:text-slate-300"
      >
        <span className="mt-1 text-green-600">
          ✓
        </span>

        <span>{item}</span>
      </li>
    ))}
  </ul>
</div>

);
}

export default function WhyInvest({
locality,
propertyType,
}: WhyInvestProps) {
const propertyLabel =
propertyType ?? "Property";

const highlights =
locality.highlights ?? [];

const connectivity =
locality.connectivity ?? [];

const schools =
locality.schools ?? [];

const hospitals =
locality.hospitals ?? [];

const shopping =
locality.shopping ?? [];

return (
<section className="mt-20">
<div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-slate-900">
<h2 className="text-3xl font-bold text-slate-900 dark:text-white">
Why Invest in {propertyLabel}s in{" "}
{locality.name}?
</h2>

    <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
      {locality.name} is one of Jaipur's
      rapidly developing real estate
      destinations. Whether you are buying
      your first home or investing for future
      appreciation, this locality offers an
      excellent combination of infrastructure,
      connectivity, lifestyle amenities and
      long-term growth potential. Explore the
      latest verified {propertyLabel.toLowerCase()}
      s available in {locality.name} along with
      nearby schools, hospitals, shopping
      destinations and major road
      connectivity.
    </p>

    <div className="mt-10 grid gap-6 md:grid-cols-2">
      <InfoList
        title="Key Highlights"
        items={highlights}
      />

      <InfoList
        title="Connectivity"
        items={connectivity}
      />

      <InfoList
        title="Nearby Schools"
        items={schools}
      />

      <InfoList
        title="Hospitals"
        items={hospitals}
      />

      <InfoList
        title="Shopping & Entertainment"
        items={shopping}
      />
    </div>

    <div className="mt-10 rounded-2xl bg-blue-50 p-6 dark:bg-slate-800">
      <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
        Investment Potential
      </h3>

      <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
        Growing infrastructure projects,
        improving connectivity and increasing
        residential demand continue to make{" "}
        {locality.name} an attractive
        destination for both end users and
        investors. Buyers can benefit from
        modern developments, expanding social
        infrastructure and the potential for
        long-term capital appreciation while
        enjoying a comfortable lifestyle close
        to essential facilities.
      </p>
    </div>
  </div>
</section>

);
}