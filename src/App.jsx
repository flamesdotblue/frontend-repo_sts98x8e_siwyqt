import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-xl">FineSew Tailor</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
            <a href="#services" className="hover:text-rose-700">Services</a>
            <a href="#gallery" className="hover:text-rose-700">Gallery</a>
            <a href="#contact" className="hover:text-rose-700">Contact</a>
            <a href="#contact" className="ml-2 rounded-lg bg-rose-600 px-4 py-2 text-white hover:bg-rose-700">Book</a>
          </nav>
        </div>
      </header>

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
