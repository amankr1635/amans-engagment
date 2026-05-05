// import { useState } from "react";

// const MusicToggle = () => {
//   const [playing, setPlaying] = useState(false);

//   return (
//     <button
//       onClick={() => setPlaying(!playing)}
//       className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full border border-gold/20 bg-background/80 flex items-center justify-center hover:border-gold/40 transition-all duration-500"
//       style={{
//         boxShadow: playing ? "0 0 20px hsla(40, 70%, 50%, 0.2)" : "none"
//       }}
//       aria-label={playing ? "Pause music" : "Play music"}
//     >
//       {playing ? (
//         <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072M17.95 6.05a8 8 0 010 11.9M6.5 8H4a1 1 0 00-1 1v6a1 1 0 001 1h2.5l4.5 4V4l-4.5 4z" /></svg>
//       ) : (
//         <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gold/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg>
//       )}
//     </button>
//   );
// };

// export default MusicToggle;


// import { useState, useRef, useEffect } from "react";

// const MusicToggle = () => {
//   const [playing, setPlaying] = useState(false);
//   const audioRef = useRef(null);

//   const toggleMusic = () => {
//     if (!playing) {
//       audioRef.current.play();
//     } else {
//       audioRef.current.pause();
//     }
//     setPlaying(!playing);
//   };
//   useEffect(() => {
//     const audio = audioRef.current;

//     if (audio) {
//       audio.volume = 0.5;

//       // Try autoplay
//       audio.play()
//         .then(() => {
//           setPlaying(true); // ✅ only set ON if actually playing
//         })
//         .catch(() => {
//           setPlaying(false); // ❌ autoplay blocked (expected)
//         });
//     }
//   }, []);

//   return (
//     <>
//       {/* Audio Element */}
//       <audio ref={audioRef} loop>
//         <source src="/music.mp3" type="audio/mpeg" />
//       </audio>

//       {/* Button */}
//       <button
//         onClick={toggleMusic}
//         className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full border border-gold/20 bg-background/80 flex items-center justify-center hover:border-gold/40 transition-all duration-500"
//         style={{
//           boxShadow: playing ? "0 0 20px hsla(40, 70%, 50%, 0.2)" : "none"
//         }}
//         aria-label={playing ? "Pause music" : "Play music"}
//       >
//         {playing ? (
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072M17.95 6.05a8 8 0 010 11.9M6.5 8H4a1 1 0 00-1 1v6a1 1 0 001 1h2.5l4.5 4V4l-4.5 4z" />
//           </svg>
//         ) : (
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gold/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15z" />
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
//           </svg>
//         )}
//       </button>
//     </>
//   );
// };

// export default MusicToggle;


// import { useState, useRef, useEffect } from "react";

// const MusicToggle = () => {
//   const [playing, setPlaying] = useState(true); // ✅ Start as true (default ON)
//   const audioRef = useRef(null);

//   const toggleMusic = () => {
//     if (!playing) {
//       audioRef.current.play();
//     } else {
//       audioRef.current.pause();
//     }
//     setPlaying(!playing);
//   };

//   useEffect(() => {
//     const audio = audioRef.current;
//     if (audio) {
//       audio.volume = 0.5;
//       // Autoplay on mount
//       audio.play()
//         .then(() => {
//           setPlaying(true); // ✅ Confirm playing state
//         })
//         .catch(() => {
//           setPlaying(false); // ❌ Autoplay blocked by browser
//         });
//     }
//   }, []);

//   return (
//     <>
//       {/* Audio Element */}
//       <audio ref={audioRef} loop>
//         <source src="/music.mp3" type="audio/mpeg" />
//       </audio>

//       {/* Button */}
//       <button
//         onClick={toggleMusic}
//         className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full border border-gold/20 bg-background/80 flex items-center justify-center hover:border-gold/40 transition-all duration-500"
//         style={{
//           boxShadow: playing ? "0 0 20px hsla(40, 70%, 50%, 0.2)" : "none"
//         }}
//         aria-label={playing ? "Pause music" : "Play music"}
//       >
//         {playing ? (
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072M17.95 6.05a8 8 0 010 11.9M6.5 8H4a1 1 0 00-1 1v6a1 1 0 001 1h2.5l4.5 4V4l-4.5 4z" />
//           </svg>
//         ) : (
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gold/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15z" />
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
//           </svg>
//         )}
//       </button>
//     </>
//   );
// };

// export default MusicToggle;


import { useState, useRef, useEffect } from "react";

const MusicToggle = () => {
  const [playing, setPlaying] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!playing) {
      audioRef.current.play().then(() => {
        setPlaying(true);
      });
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;

      // Try autoplay immediately
      audio.play()
        .then(() => {
          setPlaying(true);
          setUserInteracted(true);
        })
        .catch(() => {
          // Autoplay blocked - wait for user interaction
          setPlaying(false);
          
          const startMusic = () => {
            if (!userInteracted) {
              audio.play().then(() => {
                setPlaying(true);
                setUserInteracted(true);
              }).catch(() => {});
            }
          };

          // Start music on ANY user interaction
          document.addEventListener('click', startMusic, { once: true });
          document.addEventListener('touchstart', startMusic, { once: true });
          document.addEventListener('keydown', startMusic, { once: true });
        });
    }
  }, [userInteracted]);

  return (
    <>
      {/* Audio Element */}
      <audio ref={audioRef} loop>
        <source src="/sai_pallavi_s_intro.mp3" type="audio/mpeg" />
      </audio>

      {/* Button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full border border-gold/20 bg-background/80 flex items-center justify-center hover:border-gold/40 transition-all duration-500"
        style={{
          boxShadow: playing ? "0 0 20px hsla(40, 70%, 50%, 0.2)" : "none"
        }}
        aria-label={playing ? "Pause music" : "Play music"}
      >
        {playing ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072M17.95 6.05a8 8 0 010 11.9M6.5 8H4a1 1 0 00-1 1v6a1 1 0 001 1h2.5l4.5 4V4l-4.5 4z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gold/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        )}
      </button>
    </>
  );
};

export default MusicToggle;


// import { useState, useRef, useEffect } from "react";

// const MusicToggle = () => {
//   const [playing, setPlaying] = useState(true); // ✅ Default state is ON
//   const audioRef = useRef(null);
//   const hasInteractedRef = useRef(false);

//   const toggleMusic = () => {
//     const audio = audioRef.current;
//     if (!audio) return;

//     if (playing) {
//       audio.pause();
//       setPlaying(false);
//     } else {
//       audio.play().catch(() => {});
//       setPlaying(true);
//     }
//   };

//   useEffect(() => {
//     const audio = audioRef.current;
//     if (!audio) return;

//     audio.volume = 0.5;

//     // Handler for first interaction and subsequent toggles
//     const handleInteraction = (e) => {
//       // Ignore clicks on the music button itself
//       if (e.target.closest('.music-toggle-btn')) {
//         return;
//       }

//       if (!hasInteractedRef.current) {
//         // First interaction - start music
//         audio.play()
//           .then(() => {
//             setPlaying(true);
//             hasInteractedRef.current = true;
//           })
//           .catch(() => {
//             setPlaying(false);
//           });
//       } else {
//         // Subsequent interactions - toggle music
//         if (audio.paused) {
//           audio.play().then(() => setPlaying(true));
//         } else {
//           audio.pause();
//           setPlaying(false);
//         }
//       }
//     };

//     // Try autoplay first
//     audio.play()
//       .then(() => {
//         setPlaying(true);
//         hasInteractedRef.current = true;
//       })
//       .catch(() => {
//         // Autoplay blocked - add listeners
//         setPlaying(true); // Keep UI showing as ON
//         document.addEventListener('click', handleInteraction);
//         document.addEventListener('touchstart', handleInteraction);
//       });

//     return () => {
//       document.removeEventListener('click', handleInteraction);
//       document.removeEventListener('touchstart', handleInteraction);
//     };
//   }, []);

//   return (
//     <>
//       {/* Audio Element */}
//       <audio ref={audioRef} loop>
//         <source src="/sai_pallavi_s_intro.mp3" type="audio/mpeg" />
//       </audio>

//       {/* Button */}
//       <button
//         onClick={toggleMusic}
//         className="music-toggle-btn fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full border border-gold/20 bg-background/80 flex items-center justify-center hover:border-gold/40 transition-all duration-500"
//         style={{
//           boxShadow: playing ? "0 0 20px hsla(40, 70%, 50%, 0.2)" : "none"
//         }}
//         aria-label={playing ? "Pause music" : "Play music"}
//       >
//         {playing ? (
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072M17.95 6.05a8 8 0 010 11.9M6.5 8H4a1 1 0 00-1 1v6a1 1 0 001 1h2.5l4.5 4V4l-4.5 4z" />
//           </svg>
//         ) : (
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gold/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15z" />
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
//           </svg>
//         )}
//       </button>
//     </>
//   );
// };

// export default MusicToggle;
