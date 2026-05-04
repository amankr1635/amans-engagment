import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic background with Ken Burns effect */}
      <div className="absolute inset-0 animate-cinematic-zoom">
        <img
          src={heroBg}
          alt="Cinematic silhouette"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      {/* Cinematic letterbox bars */}
      <div className="absolute top-0 left-0 right-0 h-12 md:h-20 bg-black z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-12 md:h-20 bg-black z-20" />

      {/* Lens flare effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial animate-glow-pulse"
        style={{
          background: "radial-gradient(circle, hsla(40, 70%, 50%, 0.15) 0%, transparent 70%)",
        }}
      />

      {/* Content with 3D perspective */}
      <div className="relative z-30 text-center px-4 max-w-4xl mx-auto perspective-container">
        <div
          className={`transition-all duration-[2000ms] ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <p className="font-sans text-gold/70 tracking-[0.5em] uppercase text-xs md:text-sm mb-8 font-light">
            You are cordially invited to
          </p>
        </div>

        <div
          className={`transition-all duration-[2000ms] ease-out ${
            loaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <h1 className="font-heading text-5xl md:text-7xl lg:text-9xl font-bold tracking-widest mb-2">
            <span className="text-gold-gradient glow-gold">Aman</span>
          </h1>
          <p className="text-gold/50 text-3xl md:text-4xl font-body italic my-4">&</p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-9xl font-bold tracking-widest">
            <span className="text-gold-gradient glow-gold">Jeancy</span>
          </h1>
        </div>

        <div
          className={`transition-all duration-[2000ms] ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "1200ms" }}
        >
          <div className="gold-divider mt-10" />
          <p className="font-heading text-foreground/80 text-lg md:text-2xl tracking-[0.3em] uppercase mt-6">
            Engagement Ceremony
          </p>
        </div>

        <div
          className={`transition-all duration-[2000ms] ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "1600ms" }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 font-sans text-foreground/60 text-sm tracking-widest uppercase">
            <span>11 May 2026</span>
            <span className="hidden sm:inline text-gold/40">✦</span>
            <span>6:00 PM</span>
            <span className="hidden sm:inline text-gold/40">✦</span>
            <span>Varanasi</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 z-30 transition-all duration-[2000ms] ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "2200ms" }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-gold/30 text-xs font-sans tracking-[0.3em] uppercase">Scroll</p>
          <div className="w-px h-12 bg-gradient-to-b from-gold/40 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
