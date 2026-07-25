"use client";

import React, { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import { Music, VolumeX } from "lucide-react";

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export interface MusicPlayerRef {
  playAudio: () => void;
  pauseAudio: () => void;
}

export const MusicPlayer = forwardRef<MusicPlayerRef, MusicPlayerProps>(
  ({ isPlaying, onToggle }, ref) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useImperativeHandle(ref, () => ({
      playAudio: () => {
        if (audioRef.current) {
          audioRef.current.play().catch((err) => {
            console.warn("iOS Audio play blocked or failed:", err);
          });
        }
      },
      pauseAudio: () => {
        if (audioRef.current) {
          audioRef.current.pause();
        }
      },
    }));

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
        <audio ref={audioRef} loop preload="auto" playsInline>
          <source src="/music/wedding-song.mp3" type="audio/mpeg" />
          <source src="/music/wedding-song.m4a" type="audio/mp4" />
          <source src="/music/wedding-song.webm" type="audio/webm" />
        </audio>

        <button
          type="button"
          onClick={() => {
            if (!isPlaying && audioRef.current) {
              audioRef.current.play().catch(() => {});
            }
            onToggle();
          }}
          className={`w-12 h-12 rounded-full border border-[#C5A059]/60 shadow-xl flex items-center justify-center transition-all duration-300 cursor-pointer ${
            isPlaying
              ? "bg-[#7A5230] text-[#FAF6F0] animate-spin-slow shadow-[#C5A059]/30"
              : "bg-[#FFFFFF] text-[#8C7361] hover:text-[#3D2B1F]"
          }`}
          aria-label={isPlaying ? "Hentikan Musik" : "Putar Musik"}
        >
          {isPlaying ? (
            <Music className="w-5 h-5 text-[#E5C88B] animate-pulse" />
          ) : (
            <VolumeX className="w-5 h-5 text-[#8C7361]" />
          )}
        </button>
      </div>
    );
  }
);

MusicPlayer.displayName = "MusicPlayer";
