import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import useScrollReveal from "@/hooks/useScrollReveal";

const RSVPSection = () => {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<string>("");
  const { toast } = useToast();
  const { ref, isVisible } = useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you! ✦",
      description: `${name}, your RSVP has been received.`,
    });
    setName("");
    setAttending("");
  };

  return (
    <section ref={ref} id="rsvp" className="section-padding text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at bottom, hsla(40, 70%, 50%, 0.04) 0%, transparent 50%)"
      }} />
      
      <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="font-sans text-gold/50 tracking-[0.4em] uppercase text-xs mb-4">Be There</p>
        <h2 className="section-title">RSVP</h2>
        <div className="gold-divider" />
      </div>

      <form
        onSubmit={handleSubmit}
        className={`max-w-md mx-auto mt-14 space-y-8 relative z-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="text-left">
          <label className="block text-xs font-sans text-gold/50 mb-3 tracking-[0.2em] uppercase">Your Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full px-0 py-3 bg-transparent border-0 border-b border-gold/20 text-foreground font-body text-lg placeholder:text-muted-foreground/30 focus:outline-none focus:border-gold/50 transition-colors"
          />
        </div>
        <div className="text-left">
          <label className="block text-xs font-sans text-gold/50 mb-4 tracking-[0.2em] uppercase">Will you attend?</label>
          <div className="flex gap-4">
            {["Yes, I'll be there!", "Sorry, can't make it"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setAttending(option)}
                className={`flex-1 py-4 font-sans text-xs tracking-widest uppercase transition-all duration-500 border ${
                  attending === option
                    ? "bg-gold/10 text-gold border-gold/40"
                    : "bg-transparent text-foreground/40 border-gold/10 hover:border-gold/25"
                }`}
              >
                {option.includes("Yes") ? "✦ Yes" : "No"}
              </button>
            ))}
          </div>
        </div>
        <button
          type="submit"
          disabled={!name || !attending}
          className="w-full py-4 border border-gold/30 bg-gold/5 text-gold font-sans text-sm tracking-[0.3em] uppercase hover:bg-gold/15 transition-all duration-500 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Send RSVP
        </button>
      </form>
    </section>
  );
};

export default RSVPSection;
