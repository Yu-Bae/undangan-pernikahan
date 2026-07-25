"use client";

import React, { useEffect, useRef } from "react";
import { Music, VolumeX } from "lucide-react";

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, onToggle }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.warn("Audio autoplay blocked or failed:", err);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-20 md:bottom-6 right-5 z-40">
      <audio ref={audioRef} src="/music/wedding-song.mp3" loop preload="auto" />

      <button
        type="button"
        onClick={onToggle}
        className={`w-12 h-12 rounded-full border border-[#C5A059]/60 shadow-xl flex items-center justify-center transition-all duration-300 cursor-pointer ${
          isPlaying
            ? "bg-[#7A5230] text-[#FAF6F0] animate-spin-slow"
            : "bg-[#FFFFFF] text-[#8C7361] hover:text-[#3D2B1F]"
        }`}
        aria-label={isPlaying ? "Hentikan Musik" : "Putar Musik"}
      >
        {isPlaying ? (
          <Music className="w-5 h-5 text-[#E5C88B]" />
        ) : (
          <VolumeX className="w-5 h-5 text-[#8C7361]" />
        )}
      </button>
    </div>
  );
};
