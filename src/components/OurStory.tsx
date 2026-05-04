import useScrollReveal from "@/hooks/useScrollReveal";

const OurStory = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="section-padding cinematic-gradient text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at top, hsla(40, 70%, 50%, 0.04) 0%, transparent 50%)"
      }} />

      <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="font-sans text-gold/50 tracking-[0.4em] uppercase text-xs mb-4">How It All Began</p>
        <h2 className="section-title">Our Story</h2>
        <div className="gold-divider" />
      </div>

      <div className={`max-w-2xl mx-auto mt-12 space-y-8 relative z-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-foreground/60 leading-relaxed font-body text-lg md:text-xl">
          It all started with a chance meeting and a shared smile. Aman and Jeancy's paths crossed at a time 
          when neither was looking for love, yet love found them anyway. What began as casual conversations 
          soon turned into late-night calls, endless laughter, and a deep, unshakeable bond.
        </p>
        <p className="text-foreground/60 leading-relaxed font-body text-lg md:text-xl">
          Through every season of life — the highs, the lows, and everything in between — they stood by 
          each other with unwavering love and support. Their journey together has been nothing short of magical.
        </p>
        <div className="gold-divider" />
        <p className="font-heading text-gold/80 text-xl md:text-2xl italic tracking-wide">
          "And now, they're ready to begin the most beautiful chapter of their lives — together, forever."
        </p>
      </div>
    </section>
  );
};

export default OurStory;
