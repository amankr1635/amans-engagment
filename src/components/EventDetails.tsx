const EventDetails = () => {
  return (
    <section id="event" className="section-padding text-center">
      <p className="font-body text-muted-foreground tracking-[0.2em] uppercase text-xs mb-2">Join Us</p>
      <h2 className="section-title">Event Details</h2>
      <div className="gold-divider" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
        {[
          {
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            ),
            title: "Date",
            detail: "11th May 2026",
            sub: "Monday",
          },
          {
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            ),
            title: "Time",
            detail: "6:00 PM IST",
            sub: "Evening Ceremony",
          },
          {
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            ),
            title: "Venue",
            detail: "The Wedding House",
            sub: "Varanasi, India",
          },
        ].map((item) => (
          <div key={item.title} className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-foreground font-medium">{item.detail}</p>
            <p className="text-muted-foreground text-sm">{item.sub}</p>
          </div>
        ))}
      </div>
      <a
        href="https://maps.google.com/?q=The+Wedding+House+Varanasi"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-10 px-8 py-3 rounded-full bg-primary text-primary-foreground font-body font-medium hover:opacity-90 transition-opacity"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        View on Map
      </a>
    </section>
  );
};

export default EventDetails;
