import { Star, Scissors } from "lucide-react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.35),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(147,51,234,0.35),transparent_60%),#0b0b12] text-white"
    >
      {/* Soft grain + gradient accents that don't block interactions */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 mix-blend-overlay opacity-30" style={{ backgroundImage: "url('data:image/svg+xml;utf8, %3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 100%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.8%27 numOctaves=%272%27/%3E%3CfeColorMatrix type=%27saturate%27 values=%270%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E')" }} />
        <div className="absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full from-fuchsia-500/30 to-indigo-500/30 bg-gradient-to-br blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-[26rem] w-[26rem] rounded-full from-indigo-500/30 to-sky-500/30 bg-gradient-to-tr blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 sm:pt-24 pb-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-indigo-200 ring-1 ring-white/20 backdrop-blur">
              <Star className="h-4 w-4 text-indigo-300" />
              <span>Premium Bespoke Tailoring</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight">
              Precision tailoring for a standout fit
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-indigo-100/90">
              From hand-finished suits to thoughtful alterations, we blend tradition with modern technique—so every detail feels exceptional.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-3 text-white shadow-lg shadow-fuchsia-500/20 transition hover:shadow-indigo-600/30 hover:from-fuchsia-400 hover:to-indigo-400"
              >
                <Scissors className="h-5 w-5" /> Book a fitting
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-white ring-1 ring-white/20 transition hover:bg-white/15"
              >
                Explore services
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left w-full">
              {[
                { label: "Bespoke Suits", value: "Italian & English mills" },
                { label: "Dress Alterations", value: "Red-carpet finish" },
                { label: "Wedding Wear", value: "Tailored ceremonies" },
                { label: "Express Hemming", value: "Same-day slots" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur"
                >
                  <p className="text-sm text-indigo-200/80">{item.label}</p>
                  <p className="mt-1 font-medium text-white">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[480px] sm:h-[560px] lg:h-[640px]"
          >
            <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 overflow-hidden">
              <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: "100%", height: "100%" }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
