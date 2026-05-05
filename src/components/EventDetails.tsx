import useScrollReveal from "@/hooks/useScrollReveal";

const EventDetails = () => {
  const { ref, isVisible } = useScrollReveal();

  const details = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
      ),
      title: "Date",
      detail: "11th May 2026",
      sub: "Monday",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      ),
      title: "Time",
      detail: "6:00 PM IST",
      sub: "Evening Ceremony",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      ),
      title: "Venue",
      detail: "The Wedding House",
      sub: "Ring Road, in front of Sankara eye hospital, Madhopur, Varanasi, Uttar Pradesh 221003",
    },
  ];

  return (
    <section ref={ref} id="event" className="section-padding text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at bottom, hsla(40, 70%, 50%, 0.03) 0%, transparent 60%)"
      }} />
      
      <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="font-sans text-gold/50 tracking-[0.4em] uppercase text-xs mb-4">Join Us</p>
        <h2 className="section-title">Event Details</h2>
        <div className="gold-divider" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16 perspective-container relative z-10">
        {details.map((item, i) => (
          <div
            key={item.title}
            className={`card-3d rounded-xl p-10 border border-gold/10 bg-card/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{
              transitionDelay: `${i * 200 + 400}ms`,
              boxShadow: "0 0 40px hsla(40, 70%, 50%, 0.05), inset 0 1px 0 hsla(40, 70%, 50%, 0.08)"
            }}
          >
            <div className="flex justify-center mb-6 text-gold/70">{item.icon}</div>
            <h3 className="font-heading text-sm font-semibold text-gold/60 tracking-[0.3em] uppercase mb-3">{item.title}</h3>
            <p className="text-foreground font-heading text-xl font-medium">{item.detail}</p>
            <p className="text-muted-foreground text-sm font-body mt-1">{item.sub}</p>
          </div>
        ))}
      </div>

      <div className={`relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1000ms' }}>
        <a
          href="https://maps.google.com/?q=The+Wedding+House+Varanasi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 mt-14 px-10 py-4 rounded-none border border-gold/30 text-gold font-sans text-sm tracking-[0.2em] uppercase hover:bg-gold/10 transition-all duration-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          View on Map
        </a>
      </div>
    </section>
  );
};

export default EventDetails;
