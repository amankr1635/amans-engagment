const Footer = () => {
  return (
    <footer className="py-16 text-center border-t border-gold/10 relative overflow-hidden">
      <div className="absolute inset-0 cinematic-gradient" />
      <div className="relative z-10">
        <p className="font-heading text-xl md:text-2xl text-gold/60 tracking-wider">
          We look forward to celebrating with you
        </p>
        <div className="gold-divider mt-6" />
        <p className="text-foreground/30 text-sm font-sans mt-6 tracking-widest uppercase">
          Aman & Jeancy • 11th May 2026 • Varanasi
        </p>
      </div>
    </footer>
  );
};

export default Footer;
