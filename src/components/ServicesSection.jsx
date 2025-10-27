import { Scissors, Ruler, Shirt } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Alterations",
    desc: "Hems, tapers, waist adjustments, sleeve lengths — precise finish and clean lines for every garment.",
  },
  {
    icon: Shirt,
    title: "Bespoke Tailoring",
    desc: "Made-to-measure suits, shirts, dresses, and traditional wear crafted to your measurements and style.",
  },
  {
    icon: Ruler,
    title: "Fittings & Styling",
    desc: "Personal consultations to refine fit, choose fabrics, and elevate your wardrobe with timeless pieces.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Our services</h2>
          <p className="mt-3 text-gray-600">
            Thoughtful craftsmanship and attentive service from first measurement to final press.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-rose-700 ring-1 ring-rose-200">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4 text-sm text-gray-600">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-emerald-200">Same-day hemming</span>
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-amber-800 ring-1 ring-amber-200">Wedding & event wear</span>
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-sky-700 ring-1 ring-sky-200">Premium fabric sourcing</span>
        </div>
      </div>
    </section>
  );
}
