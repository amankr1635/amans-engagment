// import { useState, useEffect } from "react";
// import heroBg from "@/assets/hero-bg.jpg";

// const HeroSection = () => {
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoaded(true), 300);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Cinematic background with Ken Burns effect */}
//       <div className="absolute inset-0 animate-cinematic-zoom">
//         <img
//           src={heroBg}
//           alt="Cinematic silhouette"
//           width={1920}
//           height={1080}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Dark cinematic overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
//       <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

//       {/* Cinematic letterbox bars */}
//       <div className="absolute top-0 left-0 right-0 h-12 md:h-20 bg-black z-20" />
//       <div className="absolute bottom-0 left-0 right-0 h-12 md:h-20 bg-black z-20" />

//       {/* Lens flare effect */}
//       <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial animate-glow-pulse"
//         style={{
//           background: "radial-gradient(circle, hsla(40, 70%, 50%, 0.15) 0%, transparent 70%)",
//         }}
//       />

//       {/* Content with 3D perspective */}
//       <div className="relative z-30 text-center px-4 max-w-4xl mx-auto perspective-container">
//         <div
//           className={`transition-all duration-[2000ms] ease-out ${
//             loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//           style={{ transitionDelay: "200ms" }}
//         >
//           <p className="font-sans text-gold/70 tracking-[0.5em] uppercase text-xs md:text-sm mb-8 font-light">
//             You are cordially invited to
//           </p>
//         </div>

//         <div
//           className={`transition-all duration-[2000ms] ease-out ${
//             loaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
//           }`}
//           style={{ transitionDelay: "600ms" }}
//         >
//           <h1 className="font-heading text-5xl md:text-7xl lg:text-9xl font-bold tracking-widest mb-2">
//             <span className="text-gold-gradient glow-gold">Aman</span>
//           </h1>
//           <p className="text-gold/50 text-3xl md:text-4xl font-body italic my-4">&</p>
//           <h1 className="font-heading text-5xl md:text-7xl lg:text-9xl font-bold tracking-widest">
//             <span className="text-gold-gradient glow-gold">Jeancy</span>
//           </h1>
//         </div>

//         <div
//           className={`transition-all duration-[2000ms] ease-out ${
//             loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//           style={{ transitionDelay: "1200ms" }}
//         >
//           <div className="gold-divider mt-10" />
//           <p className="font-heading text-foreground/80 text-lg md:text-2xl tracking-[0.3em] uppercase mt-6">
//             Engagement Ceremony
//           </p>
//         </div>

//         <div
//           className={`transition-all duration-[2000ms] ease-out ${
//             loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//           style={{ transitionDelay: "1600ms" }}
//         >
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 font-sans text-foreground/60 text-sm tracking-widest uppercase">
//             <span>11 May 2026</span>
//             <span className="hidden sm:inline text-gold/40">✦</span>
//             <span>6:00 PM</span>
//             <span className="hidden sm:inline text-gold/40">✦</span>
//             <span>Varanasi</span>
//           </div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div
//         className={`absolute bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 z-30 transition-all duration-[2000ms] ${
//           loaded ? "opacity-100" : "opacity-0"
//         }`}
//         style={{ transitionDelay: "2200ms" }}
//       >
//         <div className="flex flex-col items-center gap-2">
//           <p className="text-gold/30 text-xs font-sans tracking-[0.3em] uppercase">Scroll</p>
//           <div className="w-px h-12 bg-gradient-to-b from-gold/40 to-transparent animate-pulse" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [animateName, setAnimateName] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loaded) {
      const timer = setTimeout(() => setAnimateName(true), 500);
      return () => clearTimeout(timer);
    }
  }, [loaded]);

  // Character animation
  // const splitText = (text, delay = 0) => {
  //   return text.split("").map((char, i) => (
  //     <span
  //       key={i}
  //       className="inline-block"
  //       style={{
  //         opacity: animateName ? 1 : 0,
  //         transform: animateName
  //           ? "translateY(0px)"
  //           : "translateY(-30px)",
  //         transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${delay + i * 60
  //           }ms`,
  //       }}
  //     >
  //       {char}
  //     </span>
  //   ));
  // };
  const splitText = (text, delay = 0) => {
    return text.split("").map((char, i) => (
      <span
        key={i}
        className="inline-block"
        style={{
          opacity: animateName ? 1 : 0,
          transform: animateName
            ? "translateY(0px)"
            : "translateY(40px)",
          transition: `
          opacity 1.2s ease ${delay + i * 80}ms,
          transform 1.4s cubic-bezier(0.19, 1, 0.22, 1) ${delay + i * 80}ms
        `,
        }}
      >
        {char}
      </span>
    ));
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* Background cinematic zoom */}
      <div className="absolute inset-0 scale-110 animate-[zoom_20s_linear_infinite]">
        <img
          src={heroBg}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Light glow center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] rounded-full bg-yellow-500/10 blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-40 text-center px-4">

        {/* Subtitle */}
        <p
          className={`text-gold/70 tracking-[0.4em] uppercase text-xs mb-8 transition-all duration-1000 ${loaded ? "opacity-100" : "opacity-0"
            }`}
        >
          You are cordially invited to
        </p>

        {/* Names */}
        {/* <div className="space-y-2">

          <h1 className="relative z-50 text-5xl md:text-7xl lg:text-9xl font-bold tracking-wide text-yellow-400 drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]">
            {splitText("Aman", 0)}
          </h1>

          <div
            style={{
              opacity: animateName ? 1 : 0,
              transform: animateName
                ? "scale(1)"
                : "scale(0.5)",
              transition: "all 0.6s ease 300ms",
            }}
          >
            <p className="text-yellow-400 text-3xl italic">&</p>
          </div>

          <h1 className="relative z-50 text-5xl md:text-7xl lg:text-9xl font-bold tracking-wide text-yellow-400 drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]">
            {splitText("Jeancy", 300)}
          </h1>
        </div> */}
        <div className="space-y-4">

          {/* Aman */}
          {/* <h1 className="font-heading text-5xl md:text-7xl lg:text-9xl font-semibold tracking-wide text-[#E6C77B]">
            {splitText("Aman", 0)}
          </h1> */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-9xl font-semibold tracking-wide text-gold">
            {splitText("AMAN", 50)}
          </h1>
          {/* & */}
          <div
            style={{
              opacity: animateName ? 1 : 0,
              transform: animateName ? "scale(1)" : "scale(0.8)",
              transition: "all 1.2s ease 400ms",
            }}
          >
            <p className="text-[#CFAF5A] text-3xl md:text-4xl italic font-light">
              &
            </p>
          </div>

          {/* Jeancy */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-9xl font-semibold tracking-wide text-gold">
            {splitText("JEANCY", 300)}
          </h1>

        </div>

        {/* Divider */}
        <div
          className={`w-24 h-px bg-yellow-500 mx-auto mt-10 transition-all duration-1000 ${loaded ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
        />

        {/* Event */}
        <p
          className={`text-white/80 text-lg md:text-2xl tracking-[0.3em] uppercase mt-6 transition-all duration-1000 ${loaded ? "opacity-100" : "opacity-0"
            }`}
        >
          Engagement Ceremony
        </p>

        {/* Date */}
        <div
          className={`flex flex-col sm:flex-row justify-center gap-6 mt-6 text-white/60 text-sm tracking-widest uppercase transition-all duration-1000 ${loaded ? "opacity-100" : "opacity-0"
            }`}
        >
          <span>11 May 2026</span>
          <span className="hidden sm:inline text-yellow-400">✦</span>
          <span>6:00 PM</span>
          <span className="hidden sm:inline text-yellow-400">✦</span>
          <span>Varanasi</span>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest animate-pulse">
        Scroll ↓
      </div> */}
      <div className="absolute bottom-10 md:bottom-16 left-1/2 -translate-x-1/2 z-40">
        <div className="flex flex-col items-center gap-2 animate-fade-in">

          {/* Text */}
          <p className="text-white/40 text-[10px] md:text-xs tracking-[0.3em] uppercase">
            Scroll
          </p>

          {/* Line indicator */}
          <div className="relative w-px h-10 md:h-14 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/40 to-transparent animate-scroll-line" />
          </div>

        </div>
      </div>

      {/* Keyframes */}
      <style>
        {`
          @keyframes zoom {
            0% { transform: scale(1.1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1.1); }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;