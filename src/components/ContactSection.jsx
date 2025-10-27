import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Book a fitting</h2>
            <p className="mt-3 text-gray-600">
              Tell us what you need and we’ll get back to confirm a time. Walk-ins welcome when available.
            </p>

            <div className="mt-8 space-y-4">
              <a href="tel:+1234567890" className="flex items-center gap-3 text-gray-700 hover:text-rose-700">
                <Phone className="h-5 w-5" /> <span>+1 (234) 567-890</span>
              </a>
              <a href="mailto:hello@finesew.co" className="flex items-center gap-3 text-gray-700 hover:text-rose-700">
                <Mail className="h-5 w-5" /> <span>hello@finesew.co</span>
              </a>
              <p className="flex items-center gap-3 text-gray-700">
                <MapPin className="h-5 w-5" /> <span>123 Atelier Lane, Suite 5, Your City</span>
              </p>
              <p className="flex items-center gap-3 text-gray-700">
                <Calendar className="h-5 w-5" /> <span>Mon–Sat, 10am–6pm</span>
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
            {sent ? (
              <div className="text-center py-10">
                <div className="mx-auto h-12 w-12 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  ✓
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900">Message sent</h3>
                <p className="mt-2 text-gray-600">We’ll be in touch shortly to confirm your appointment.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1 w-full rounded-lg border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-1 w-full rounded-lg border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">What can we help with?</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-1 w-full rounded-lg border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                    placeholder="Alteration type, garment, dates, etc."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-rose-600 px-5 py-3 text-white shadow-md shadow-rose-600/20 transition hover:bg-rose-700"
                >
                  Send request
                </button>
                <p className="text-xs text-gray-500">
                  By sending, you agree we may contact you about your request.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
