"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Sparkles, Heart } from "lucide-react";
import { weddingData } from "@/data/wedding";

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-16 md:py-24 bg-[#FAF6F0] overflow-hidden">
      {/* Soft Decorative Ambient Background */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#7A5230]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-lg mx-auto flex flex-col items-center text-center">
        
        {/* Header Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF]/80 border border-[#C5A059]/40 text-[#7A5230] text-xs font-sans tracking-widest uppercase mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          <span className="font-medium">The Wedding Of</span>
        </motion.div>

        {/* Couple Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mb-4"
        >
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#3D2B1F] tracking-tight leading-tight">
            {weddingData.couple.groom.name}
            <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#C5A059] mx-3">
              &
            </span>
            {weddingData.couple.bride.name}
          </h1>
          <p className="font-serif text-base md:text-lg text-[#7A5230] mt-2 italic">
            {weddingData.couple.groom.fullName} & {weddingData.couple.bride.fullName}
          </p>
        </motion.div>

        {/* Date Display */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-2 text-sm md:text-base font-sans tracking-wider text-[#3D2B1F] font-semibold mb-6 bg-[#FFFFFF]/70 px-5 py-2 rounded-full border border-[#C5A059]/30"
        >
          <Calendar className="w-4 h-4 text-[#C5A059]" />
          <span>{weddingData.eventDate.day}, {weddingData.eventDate.dateFormatted}</span>
        </motion.div>

        {/* Hero Photo Card with Golden Arch Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative w-full aspect-[4/5] max-w-xs sm:max-w-sm rounded-t-[140px] rounded-b-3xl p-3 bg-[#FFFFFF] shadow-2xl border border-[#C5A059]/40 my-4"
        >
          {/* Inner Photo Wrapper */}
          <div className="relative w-full h-full rounded-t-[130px] rounded-b-2xl overflow-hidden group">
            <Image
              src="/images/couple.png"
              alt={`Foto Pasangan ${weddingData.couple.groom.name} & ${weddingData.couple.bride.name}`}
              fill
              priority
              unoptimized
              sizes="(max-width: 640px) 100vw, 400px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/30 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Heart Badge */}
          <div className="absolute -bottom-4 right-6 bg-[#FAF6F0] border border-[#C5A059]/50 p-2.5 rounded-full shadow-md text-[#C5A059]">
            <Heart className="w-5 h-5 fill-[#C5A059]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
