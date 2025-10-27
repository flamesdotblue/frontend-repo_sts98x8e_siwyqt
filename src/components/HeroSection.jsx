import { Star, Scissors } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-rose-50 via-white to-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-rose-200/40 blur-3xl" />
        <div className="absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 sm:pt-28 sm:pb-28">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-sm text-rose-700 ring-1 ring-rose-200">
            <Star className="h-4 w-4 fill-rose-500/20 text-rose-600" />
            <span>Custom Tailoring & Alterations</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900">
            Crafted to fit your story
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-gray-600">
            From bespoke suits to perfect alterations, we bring precision, style,
            and comfort together—made just for you.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-rose-600 px-5 py-3 text-white shadow-md shadow-rose-600/20 transition hover:bg-rose-700"
            >
              <Scissors className="h-5 w-5" /> Book a fitting
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-gray-900 ring-1 ring-gray-200 transition hover:bg-gray-50"
            >
              Explore services
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left w-full">
            {[
              { label: "Bespoke Suits", value: "Premium fabrics" },
              { label: "Dress Alterations", value: "Perfect fit" },
              { label: "Wedding Wear", value: "Tailored elegance" },
              { label: "Same-day Hemming", value: "By appointment" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-gray-200 bg-white p-5">
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="mt-1 font-medium text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
