import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function App() {
  const { scrollY } = useScroll();
  const headerBg = useTransform(scrollY, [0, 80], ["rgba(255,255,255,0)", "rgba(255,255,255,0.75)"]);
  const headerBorder = useTransform(scrollY, [0, 80], ["rgba(226,232,240,0)", "rgba(226,232,240,1)"]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <motion.header
        className="sticky top-0 z-50 backdrop-blur"
        style={{ backgroundColor: mounted ? headerBg : undefined, borderBottom: mounted ? `1px solid ${headerBorder.get()}` : undefined }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-xl">FineSew Tailor</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-800">
            <a href="#services" className="hover:text-indigo-700">Services</a>
            <a href="#gallery" className="hover:text-indigo-700">Gallery</a>
            <a href="#contact" className="hover:text-indigo-700">Contact</a>
            <a href="#contact" className="ml-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-600 px-4 py-2 text-white hover:from-fuchsia-400 hover:to-indigo-500">Book</a>
          </nav>
        </div>
      </motion.header>

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <ContactSection />
      </main>

      <footer className="border-t border-gray-200 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} FineSew Tailor. All rights reserved.</p>
          <p>Crafted with care in our studio.</p>
        </div>
      </footer>
    </div>
  );
}
