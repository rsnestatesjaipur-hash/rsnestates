import type { Locality } from "@/types/Locality";
import { generateFaqs } from "@/lib/utils/generateFaqs";

interface FaqSectionProps {
  locality: Locality;

  propertyType?: string;

  bedrooms?: number;
}

export default function FaqSection({
  locality,
  propertyType,
  bedrooms,
}: FaqSectionProps) {
  const propertyLabel =
    propertyType ?? "Property";

  const configuration =
    bedrooms !== undefined
      ? bedrooms === 0
        ? "Studio"
        : `${bedrooms} BHK`
      : "";

  const propertyText = configuration
    ? `${configuration} ${propertyLabel}`
    : propertyLabel;

const faqs = generateFaqs({
  locality,
  propertyType,
  bedrooms,
});

return (
  <section className="mt-20">
    <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-slate-900">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
        Frequently Asked Questions
      </h2>

      <div className="mt-8 space-y-6">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-2xl border border-slate-200 p-6 dark:border-slate-700"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {faq.question}
            </h3>

            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
}