export default function GallerySection() {
  const images = [
    { src: "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1480&auto=format&fit=crop", alt: "Tailor measuring a suit" },
    { src: "https://images.unsplash.com/photo-1553975994-02450ef0dfaa?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUYWlsb3IlMjBtZWFzdXJpbmclMjBhJTIwc3VpdHxlbnwwfDB8fHwxNzYxNTQ5NjkzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80", alt: "Sewing machine close-up" },
    { src: "https://images.unsplash.com/photo-1553975994-02450ef0dfaa?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUYWlsb3IlMjBtZWFzdXJpbmclMjBhJTIwc3VpdHxlbnwwfDB8fHwxNzYxNTQ5NjkzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80", alt: "Fabric and tools" },
    { src: "https://images.unsplash.com/photo-1553975994-02450ef0dfaa?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUYWlsb3IlMjBtZWFzdXJpbmclMjBhJTIwc3VpdHxlbnwwfDB8fHwxNzYxNTQ5NjkzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80", alt: "Pressing garments" },
    { src: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=1480&auto=format&fit=crop", alt: "Buttons and thread" },
    { src: "https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=1480&auto=format&fit=crop", alt: "Tailor's chalk on fabric" },
  ];

  return (
    <section id="gallery" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Studio snapshots</h2>
          <p className="mt-3 text-gray-600">A glimpse into the craft—materials, techniques, and finishing details.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-gray-200 bg-white">
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
