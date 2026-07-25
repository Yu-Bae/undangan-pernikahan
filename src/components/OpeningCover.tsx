"use client";

import React from "react";
import { motion } from "framer-motion";
import { MailOpen, Calendar, Heart } from "lucide-react";
import { weddingData } from "@/data/wedding";

interface OpeningCoverProps {
  onOpen: () => void;
  guestName: string;
}

export const OpeningCover: React.FC<OpeningCoverProps> = ({ onOpen, guestName }) => {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        y: "-100%",
        transition: { duration: 1.1, ease: [0.77, 0, 0.175, 1] },
      }}
      className="fixed inset-0 z-50 flex flex-col justify-between items-center bg-[#FAF6F0] text-[#3D2B1F] overflow-hidden select-none px-6 py-10 md:py-14"
    >
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(#C5A059_0.75px,transparent_0.75px)] [background-size:24px_24px]" />
      
      {/* Outer Border Frame */}
      <div className="absolute inset-4 md:inset-8 border border-[#C5A059]/40 pointer-events-none rounded-2xl flex flex-col justify-between p-2">
        <div className="flex justify-between">
          <div className="w-4 h-4 border-t-2 border-l-2 border-[#C5A059]" />
          <div className="w-4 h-4 border-t-2 border-r-2 border-[#C5A059]" />
        </div>
        <div className="flex justify-between">
          <div className="w-4 h-4 border-b-2 border-l-2 border-[#C5A059]" />
          <div className="w-4 h-4 border-b-2 border-r-2 border-[#C5A059]" />
        </div>
      </div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="relative z-10 text-center mt-4"
      >
        <p className="font-script text-2xl md:text-3xl text-[#C5A059] tracking-wider mb-1">
          The Wedding Of
        </p>
        <div className="flex items-center justify-center gap-2">
          <span className="h-[1px] w-8 bg-[#C5A059]/60" />
          <Heart className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]/30" />
          <span className="h-[1px] w-8 bg-[#C5A059]/60" />
        </div>
      </motion.div>

      {/* Center Couple Names & Date */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative z-10 text-center my-auto py-6"
      >
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#3D2B1F] tracking-tight leading-tight">
          {weddingData.couple.groom.name}
          <span className="font-script text-4xl md:text-6xl text-[#C5A059] mx-3 block sm:inline">
            &
          </span>
          {weddingData.couple.bride.name}
        </h1>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs md:text-sm font-sans tracking-widest text-[#7A5230] uppercase">
          <Calendar className="w-4 h-4 text-[#C5A059]" />
          <span>{weddingData.eventDate.day}, {weddingData.eventDate.dateFormatted}</span>
        </div>
      </motion.div>

      {/* Footer Section: Guest Box & Open Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="relative z-10 w-full max-w-sm flex flex-col items-center gap-6 mb-2"
      >
        {/* Guest Card */}
        <div className="w-full bg-[#FFFFFF]/85 backdrop-blur-md border border-[#C5A059]/40 rounded-2xl p-4 text-center shadow-md">
          <p className="text-xs text-[#7A5230]/90 font-sans tracking-widest uppercase font-medium">
            Kepada Yth.
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-[#3D2B1F] font-bold mt-1 text-ellipsis overflow-hidden px-2">
            {guestName}
          </h3>
        </div>

        {/* Action Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-gradient-to-r from-[#7A5230] to-[#5C3D22] text-[#FAF6F0] text-sm md:text-base font-sans font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-[#C5A059]/60 cursor-pointer overflow-hidden"
        >
          <span className="absolute inset-0 bg-[#C5A059]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <MailOpen className="w-4 h-4 text-[#E5C88B] group-hover:rotate-12 transition-transform duration-300" />
          <span className="relative z-10 tracking-wide font-semibold">Buka Undangan</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
