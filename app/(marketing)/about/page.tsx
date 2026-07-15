import Link from "next/link";

export default function AboutPage() {
return (
<main className="mx-auto max-w-7xl px-6 py-16 transition-colors">
{/* Hero Section */}
<section className="text-center">
<span className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
About RSN Estates
</span>

    <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 transition-colors dark:text-white">
      Your Trusted Real Estate Partner in Jaipur
    </h1>

    <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-600 transition-colors dark:text-slate-300">
      RSN Estates is a modern real estate platform dedicated to helping
      buyers, sellers, and investors discover the best residential and
      commercial properties across Jaipur. Our mission is to make property
      buying simple, transparent, and hassle-free by providing verified
      listings, local market insights, and expert guidance throughout your
      property journey.
    </p>
  </section>

  {/* About */}
  <section className="mt-20 grid gap-12 lg:grid-cols-2">
    <div>
      <h2 className="text-3xl font-bold text-slate-900 transition-colors dark:text-white">
        Who We Are
      </h2>

      <p className="mt-6 leading-8 text-slate-600 transition-colors dark:text-slate-300">
        At RSN Estates, we believe that buying a property is one of the most
        important financial decisions in life. Whether you're searching for
        your dream home, an investment property, a commercial space, or a
        residential plot, our goal is to provide reliable information and
        professional assistance that helps you make confident decisions.
      </p>

      <p className="mt-6 leading-8 text-slate-600 transition-colors dark:text-slate-300">
        We focus exclusively on Jaipur&apos;s real estate market, allowing
        us to provide deep local expertise, up-to-date market knowledge, and
        personalized recommendations based on your requirements and budget.
      </p>
    </div>

    <div>
      <h2 className="text-3xl font-bold text-slate-900 transition-colors dark:text-white">
        What We Offer
      </h2>

      <ul className="mt-6 space-y-4 text-slate-600 transition-colors dark:text-slate-300">
        <li>✔ Verified Residential Properties</li>
        <li>✔ Luxury Villas & Apartments</li>
        <li>✔ Residential & Commercial Plots</li>
        <li>✔ Commercial Properties & Office Spaces</li>
        <li>✔ Investment Consultation</li>
        <li>✔ Property Site Visits</li>
        <li>✔ Home Loan Assistance</li>
        <li>✔ End-to-End Buying Support</li>
      </ul>
    </div>
  </section>

  {/* Why Choose Us */}
  <section className="mt-20 rounded-3xl border border-slate-200 bg-slate-50 p-10 transition-colors dark:border-slate-800 dark:bg-slate-900">
    <h2 className="text-3xl font-bold text-slate-900 transition-colors dark:text-white">
      Why Choose RSN Estates?
    </h2>

    <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg dark:hover:bg-slate-800">
        <h3 className="text-xl font-bold text-slate-900 transition-colors dark:text-white">
          Verified Listings
        </h3>

        <p className="mt-3 leading-7 text-slate-600 transition-colors dark:text-slate-300">
          We strive to showcase genuine and carefully verified property
          listings, helping buyers make informed decisions.
        </p>
      </div>

      <div className="rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg dark:hover:bg-slate-800">
        <h3 className="text-xl font-bold text-slate-900 transition-colors dark:text-white">
          Local Expertise
        </h3>

        <p className="mt-3 leading-7 text-slate-600 transition-colors dark:text-slate-300">
          Our deep understanding of Jaipur&apos;s neighbourhoods helps us
          recommend properties that match your lifestyle and investment
          goals.
        </p>
      </div>

      <div className="rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg dark:hover:bg-slate-800">
        <h3 className="text-xl font-bold text-slate-900 transition-colors dark:text-white">
          Transparent Guidance
        </h3>

        <p className="mt-3 leading-7 text-slate-600 transition-colors dark:text-slate-300">
          We believe in honest communication and assist buyers throughout
          the property selection and purchase process.
        </p>
      </div>

      <div className="rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg dark:hover:bg-slate-800">
        <h3 className="text-xl font-bold text-slate-900 transition-colors dark:text-white">
          Customer First
        </h3>

        <p className="mt-3 leading-7 text-slate-600 transition-colors dark:text-slate-300">
          Every recommendation is tailored to your budget, preferences, and
          long-term objectives.
        </p>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="mt-20 text-center">
    <h2 className="text-4xl font-bold text-slate-900 transition-colors dark:text-white">
      Let&apos;s Find Your Perfect Property
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 transition-colors dark:text-slate-300">
      Whether you&apos;re buying your first home, investing in real estate,
      or searching for commercial property in Jaipur, RSN Estates is here to
      guide you every step of the way.
    </p>

    <Link
      href="/properties"
      className="mt-10 inline-flex rounded-2xl bg-amber-500 px-8 py-4 text-lg font-semibold text-slate-900 transition hover:bg-amber-400"
    >
      Explore Properties
    </Link>
  </section>
</main>

);
}