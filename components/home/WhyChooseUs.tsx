import Container from "../common/Container";
import Section from "../common/Section";

const features = [
  {
    title: "Verified Listings",
    description:
      "Every property is carefully reviewed to help you discover genuine opportunities.",
  },
  {
    title: "Expert Guidance",
    description:
      "Connect with experienced property experts for buying and investment decisions.",
  },
  {
    title: "Prime Localities",
    description:
      "Explore Jaipur's fastest-growing residential and commercial destinations.",
  },
  {
    title: "Trusted Builders",
    description:
      "Browse projects from reputed developers with proven track records.",
  },
  {
    title: "Investment Insights",
    description:
      "Access market trends, price analysis, and investment opportunities.",
  },
  {
    title: "Quick Lead Support",
    description:
      "Request pricing, schedule site visits, and receive quick assistance.",
  },
];

export default function WhyChooseUs() {
  return (
    <Section className="bg-white transition-colors dark:bg-slate-950">
      <Container>
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
            Why Choose RSN Estates
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900 transition-colors dark:text-white">
            Your Trusted Real Estate Partner
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600 transition-colors dark:text-slate-300">
            We help buyers discover the right property with verified
            information, trusted builders, and expert assistance throughout
            their property journey.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-amber-400 dark:hover:shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-slate-900 transition-colors dark:text-white">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600 transition-colors dark:text-slate-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}