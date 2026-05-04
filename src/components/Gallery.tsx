import { useState } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Golden engagement rings" },
  { src: gallery2, alt: "Couple walking under fairy lights" },
  { src: gallery3, alt: "Rose petals and candles" },
  { src: gallery4, alt: "Candlelit ceremony venue" },
  { src: gallery5, alt: "Couple dancing in moonlight" },
  { src: gallery6, alt: "Luxurious bouquet" },
];

const Gallery = () => {
  const { ref, isVisible } = useScrollReveal();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section ref={ref} id="gallery" className="section-padding text-center relative overflow-hidden">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="font-sans text-gold/50 tracking-[0.4em] uppercase text-xs mb-4">Moments</p>
        <h2 className="section-title">Gallery</h2>
        <div className="gold-divider" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 max-w-6xl mx-auto mt-16 perspective-container">
        {images.map((img, i) => (
          <div
            key={i}
            className={`group relative overflow-hidden aspect-square cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}
            style={{
              transitionDelay: `${i * 120 + 400}ms`,
              transform: hoveredIdx === i ? 'scale(1.02) translateZ(30px)' : undefined,
            }}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={800}
              height={800}
              className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
            />
            {/* Cinematic overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
            {/* Gold border glow on hover */}
            <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
