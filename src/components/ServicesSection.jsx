import { Scissors, Ruler, Shirt } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Scissors,
    title: "Alterations",
    desc: "Hems, tapers, waist, and sleeve work with couture-level attention to detail.",
    tag: "Refine the fit",
  },
  {
    icon: Shirt,
    title: "Bespoke Tailoring",
    desc: "Made-to-measure suits, shirts, dresses, and traditional wear with hand-finished details.",
    tag: "From cloth to craft",
  },
  {
    icon: Ruler,
    title: "Fittings & Styling",
    desc: "Personal consultations to perfect the silhouette, choose fabrics, and define your style.",
    tag: "One-on-one care",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Our services</h2>
          <p className="mt-3 text-gray-600">
            Thoughtful craftsmanship from first measurement to final press.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc, tag }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-indigo-500/0 to-sky-500/0 opacity-0 transition group-hover:opacity-10" />
              <div className="relative rounded-2xl border border-gray-200 bg-white p-6 transition group-hover:translate-y-[-2px] group-hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-50 to-indigo-50 text-indigo-700 ring-1 ring-indigo-100">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{desc}</p>
                <span className="mt-4 inline-flex text-xs text-indigo-600 bg-indigo-50 ring-1 ring-indigo-100 px-2 py-1 rounded-full">
                  {tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-wrap items-center gap-4 text-sm text-gray-700"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-emerald-200">Same-day hemming</span>
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-amber-800 ring-1 ring-amber-200">Wedding & event wear</span>
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-sky-700 ring-1 ring-sky-200">Premium fabric sourcing</span>
        </motion.div>
      </div>
    </section>
  );
}
