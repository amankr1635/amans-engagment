import useScrollReveal from "@/hooks/useScrollReveal";

const InvitationMessage = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="section-padding cinematic-gradient text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at center, hsla(40, 70%, 50%, 0.06) 0%, transparent 50%)"
      }} />
      
      <div className={`max-w-3xl mx-auto relative z-10 transition-all duration-[1500ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-gold/40 text-5xl mb-8">✦</p>
        <h2 className="font-body text-2xl md:text-3xl lg:text-4xl text-foreground/70 leading-relaxed italic font-light">
          "With great joy and grateful hearts, we invite you to celebrate our engagement as we take the first 
          step towards a lifetime of love and togetherness."
        </h2>
        <div className="gold-divider mt-10" />
        <p className="mt-8 text-foreground/40 font-body text-lg">
          Your presence would mean the world to us.
        </p>
        <p className="mt-8 font-heading text-lg tracking-widest uppercase">
          <span className="text-gold/50">With love,</span><br />
          <span className="text-gold-gradient text-xl mt-2 inline-block">Aman & Jeancy</span>
        </p>
      </div>
    </section>
  );
};

export default InvitationMessage;
