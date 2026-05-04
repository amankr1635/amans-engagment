import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Couple walking in garden" },
  { src: gallery2, alt: "Engagement ring close-up" },
  { src: gallery3, alt: "Couple under fairy lights" },
  { src: gallery4, alt: "Pink roses arrangement" },
  { src: gallery5, alt: "Dancing in flower field" },
  { src: gallery6, alt: "Romantic dinner setting" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding text-center">
      <p className="font-body text-muted-foreground tracking-[0.2em] uppercase text-xs mb-2">Moments</p>
      <h2 className="section-title">Gallery</h2>
      <div className="gold-divider" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto mt-12">
        {images.map((img, i) => (
          <div key={i} className="group relative overflow-hidden rounded-xl aspect-square">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={800}
              height={800}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
