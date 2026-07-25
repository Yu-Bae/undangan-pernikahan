"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import { OpeningCover } from "@/components/OpeningCover";
import { HeroSection } from "@/components/HeroSection";
import { GreetingSection } from "@/components/GreetingSection";
import { CoupleSection } from "@/components/CoupleSection";
import { CountdownSection } from "@/components/CountdownSection";
import { EventSection } from "@/components/EventSection";
import { LoveStorySection } from "@/components/LoveStorySection";
import { GallerySection } from "@/components/GallerySection";
import { WeddingGiftSection } from "@/components/WeddingGiftSection";
import { RSVPSection } from "@/components/RSVPSection";
import { WishesSection } from "@/components/WishesSection";
import { ClosingSection } from "@/components/ClosingSection";
import { MusicPlayer } from "@/components/MusicPlayer";
import { MobileNavigation } from "@/components/MobileNavigation";

import { initialWishes } from "@/data/wishes";
import { GuestWish } from "@/types/wedding";

function WeddingAppContent() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [wishes, setWishes] = useState<GuestWish[]>(initialWishes);

  const searchParams = useSearchParams();
  const rawGuest = searchParams.get("to");
  const guestName = rawGuest && rawGuest.trim() !== "" ? rawGuest.trim() : "Tamu Undangan";

  // Prevent scroll when cover overlay is active
  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpened]);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    setIsPlayingMusic(true);
  };

  const handleToggleMusic = () => {
    setIsPlayingMusic((prev) => !prev);
  };

  const handleAddWish = (newWish: GuestWish) => {
    setWishes((prev) => [newWish, ...prev]);
  };

  return (
    <main className="relative min-h-screen w-full bg-[#FAF6F0] selection:bg-[#C5A059]/20 selection:text-[#3D2B1F]">
      {/* Opening Cover Screen */}
      <AnimatePresence mode="wait">
        {!isOpened && (
          <OpeningCover key="opening-cover" onOpen={handleOpenInvitation} guestName={guestName} />
        )}
      </AnimatePresence>

      {/* Main Invitation Sections */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpened ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className={isOpened ? "block" : "pointer-events-none opacity-0 h-screen overflow-hidden"}
      >
        <HeroSection />
        <GreetingSection />
        <CoupleSection />
        <CountdownSection />
        <EventSection />
        <LoveStorySection />
        <GallerySection />
        <WeddingGiftSection />
        <RSVPSection onAddWish={handleAddWish} />
        <WishesSection wishes={wishes} />
        <ClosingSection />

        {/* Floating Controls & Navigation */}
        <MusicPlayer isPlaying={isPlayingMusic} onToggle={handleToggleMusic} />
        <MobileNavigation />
      </motion.div>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#FAF6F0] text-[#7A5230] font-serif text-lg">
          Memuat Undangan...
        </div>
      }
    >
      <WeddingAppContent />
    </Suspense>
  );
}
