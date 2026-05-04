const InvitationMessage = () => {
  return (
    <section className="section-padding bg-blush/20 text-center">
      <div className="max-w-2xl mx-auto">
        <p className="text-gold text-4xl mb-6">✦</p>
        <h2 className="font-heading text-2xl md:text-3xl text-foreground leading-relaxed italic">
          "With great joy and grateful hearts, we invite you to celebrate our engagement as we take the first 
          step towards a lifetime of love and togetherness."
        </h2>
        <div className="gold-divider mt-8" />
        <p className="mt-6 text-muted-foreground font-body">
          Your presence would mean the world to us. Come share in our happiness as we embark on this 
          beautiful journey together.
        </p>
        <p className="mt-8 font-heading text-lg text-foreground">
          With love,<br />
          <span className="text-primary font-semibold">Aman & Jeancy</span>
        </p>
      </div>
    </section>
  );
};

export default InvitationMessage;
