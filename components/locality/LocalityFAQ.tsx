import {
HelpCircle,
Building2,
Landmark,
MapPinned,
} from "lucide-react";

const faqs = [
{
question: "Is this locality a good place to invest?",
answer:
"Yes. This locality has witnessed steady infrastructure development, increasing demand and excellent long-term appreciation potential.",
icon: Landmark,
},
{
question: "What types of properties are available?",
answer:
"Apartments, villas, independent houses, residential plots and commercial properties are available in this locality.",
icon: Building2,
},
{
question: "Is home loan assistance available?",
answer:
"Yes. RSN Estates can assist you in connecting with leading banks and financial institutions for home loans.",
icon: HelpCircle,
},
{
question: "Can I schedule a site visit?",
answer:
"Absolutely. You can submit an enquiry through our website and our property consultant will arrange a convenient site visit.",
icon: MapPinned,
},
];

export default function LocalityFAQ() {
return (
<section className="mt-20 rounded-3xl border border-slate-200 bg-white p-10 shadow-lg transition-colors dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-950/40">
<h2 className="text-4xl font-bold text-slate-900 dark:text-white">
Frequently Asked Questions
</h2>

  <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
    Answers to some of the most common questions asked by property buyers and investors.
  </p>

  <div className="mt-10 space-y-6">
    {faqs.map((faq) => {
      const Icon = faq.icon;

      return (
        <div
          key={faq.question}
          className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-colors dark:border-slate-700 dark:bg-slate-900"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              <Icon size={22} />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {faq.question}
              </h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</section>

);
}