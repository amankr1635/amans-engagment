import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import EventDetails from "@/components/EventDetails";
import OurStory from "@/components/OurStory";
import Gallery from "@/components/Gallery";
import InvitationMessage from "@/components/InvitationMessage";
import RSVPSection from "@/components/RSVPSection";
import Footer from "@/components/Footer";
import FloatingHearts from "@/components/FloatingHearts";
import MusicToggle from "@/components/MusicToggle";
import CinematicParticles from "@/components/CinematicParticles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CinematicParticles />
      <FloatingHearts />
      <MusicToggle />
      <HeroSection />
      <CountdownTimer />
      <EventDetails />
      <OurStory />
      <Gallery />
      <InvitationMessage />
      {/* <RSVPSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
