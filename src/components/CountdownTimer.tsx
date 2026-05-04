import { useState, useEffect } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

const ENGAGEMENT_DATE = new Date("2026-05-11T18:00:00+05:30").getTime();

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const { ref, isVisible } = useScrollReveal();

  function getTimeLeft() {
    const diff = Math.max(0, ENGAGEMENT_DATE - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section ref={ref} className="section-padding cinematic-gradient text-center relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at center, hsla(40, 70%, 50%, 0.05) 0%, transparent 60%)"
      }} />
      
      <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="font-sans text-gold/50 tracking-[0.4em] uppercase text-xs mb-4">Counting Down To</p>
        <h2 className="section-title">The Big Day</h2>
        <div className="gold-divider" />
        
        <div className="flex justify-center gap-6 md:gap-12 mt-12 perspective-container">
          {units.map((u, i) => (
            <div
              key={u.label}
              className={`flex flex-col items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150 + 300}ms` }}
            >
              <div className="card-3d w-20 h-20 md:w-28 md:h-28 rounded-lg flex items-center justify-center border border-gold/20 bg-card/50"
                style={{
                  boxShadow: "0 0 30px hsla(40, 70%, 50%, 0.1), inset 0 1px 0 hsla(40, 70%, 50%, 0.1)"
                }}
              >
                <span className="font-heading text-3xl md:text-5xl font-bold text-gold-gradient">
                  {String(u.value).padStart(2, "0")}
                </span>
              </div>
              <span className="text-muted-foreground text-xs md:text-sm mt-3 font-sans tracking-widest uppercase">{u.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
