import { useState, useEffect } from "react";

const ENGAGEMENT_DATE = new Date("2026-05-11T18:00:00+05:30").getTime();

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

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
    <section className="section-padding bg-blush/30 text-center">
      <p className="font-body text-muted-foreground tracking-[0.2em] uppercase text-xs mb-2">Counting Down To</p>
      <h2 className="section-title">The Big Day</h2>
      <div className="gold-divider" />
      <div className="flex justify-center gap-4 md:gap-8 mt-10">
        {units.map((u) => (
          <div key={u.label} className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-xl bg-card shadow-lg flex items-center justify-center border border-border">
              <span className="font-heading text-2xl md:text-4xl font-bold text-foreground">
                {String(u.value).padStart(2, "0")}
              </span>
            </div>
            <span className="text-muted-foreground text-xs md:text-sm mt-2 font-body">{u.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountdownTimer;
