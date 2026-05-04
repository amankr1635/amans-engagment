import { useState } from "react";

const MusicToggle = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <button
      onClick={() => setPlaying(!playing)}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-card shadow-lg border border-border flex items-center justify-center hover:shadow-xl transition-shadow"
      aria-label={playing ? "Pause music" : "Play music"}
    >
      {playing ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M17.95 6.05a8 8 0 010 11.9M6.5 8H4a1 1 0 00-1 1v6a1 1 0 001 1h2.5l4.5 4V4l-4.5 4z" /></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg>
      )}
    </button>
  );
};

export default MusicToggle;
