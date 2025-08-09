import HeroSection from "./HeroSection"

function Feature({ title, desc }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm">{desc}</p>
    </div>
  )
}

export default function HomePage() {
  return (
    <main className="flex-1">
      <HeroSection />

      {/* Details / features section */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Why BASE?
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl">
            Everything you need to manage services and spending with clarity.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Feature title="Smart Wallets"
                     desc="Allocate budgets by category (food, tools, courses) and track in real time." />
            <Feature title="Subscriptions"
                     desc="Flexible plans with daily/weekly controls and transparent pricing." />
            <Feature title="Parent Controls"
                     desc="Set limits, approvals, and notifications — peace of mind built‑in." />
            <Feature title="Multi‑language"
                     desc="English / Vietnamese ready. Easy to expand to more." />
            <Feature title="Multi‑currency"
                     desc="Seamless VND ↔ USD display for pricing and reports." />
            <Feature title="Fast & Secure"
                     desc="Modern stack with best practices for performance and safety." />
          </div>
        </div>
      </section>
    </main>
  )
}
