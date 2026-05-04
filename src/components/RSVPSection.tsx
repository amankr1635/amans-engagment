import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const RSVPSection = () => {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<string>("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you! 💕",
      description: `${name}, your RSVP has been received.`,
    });
    setName("");
    setAttending("");
  };

  return (
    <section id="rsvp" className="section-padding text-center">
      <p className="font-body text-muted-foreground tracking-[0.2em] uppercase text-xs mb-2">Be There</p>
      <h2 className="section-title">RSVP</h2>
      <div className="gold-divider" />
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-6">
        <div className="text-left">
          <label className="block text-sm font-medium text-foreground mb-2 font-body">Your Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
          />
        </div>
        <div className="text-left">
          <label className="block text-sm font-medium text-foreground mb-2 font-body">Will you attend?</label>
          <div className="flex gap-4">
            {["Yes, I'll be there!", "Sorry, can't make it"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setAttending(option)}
                className={`flex-1 py-3 rounded-lg border font-body text-sm transition-all ${
                  attending === option
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground border-border hover:border-primary/50"
                }`}
              >
                {option.includes("Yes") ? "✨ Yes!" : "😔 No"}
              </button>
            ))}
          </div>
        </div>
        <button
          type="submit"
          disabled={!name || !attending}
          className="w-full py-3 rounded-full bg-primary text-primary-foreground font-body font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send RSVP
        </button>
      </form>
    </section>
  );
};

export default RSVPSection;
