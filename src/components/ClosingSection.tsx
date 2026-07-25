"use client";

import React from "react";
import { Heart } from "lucide-react";
import { weddingData } from "@/data/wedding";
import { SectionAnimation } from "./SectionAnimation";

export const ClosingSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-[#FAF6F0] overflow-hidden text-center">
      <div className="max-w-3xl mx-auto">
        <SectionAnimation className="space-y-6">
          <div className="w-12 h-12 rounded-full bg-[#FFFFFF] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] mx-auto shadow-sm">
            <Heart className="w-5 h-5 fill-[#C5A059]/30" />
          </div>

          <p className="font-sans text-sm md:text-base text-[#4A3525] max-w-xl mx-auto leading-relaxed">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak, Ibu, Saudara, dan Saudari berkenan hadir dan memberikan doa restu.
          </p>

          <div className="pt-4">
            <p className="font-serif italic text-base text-[#7A5230]">Kami yang berbahagia,</p>
            <h2 className="font-script text-5xl md:text-6xl text-[#3D2B1F] mt-2">
              {weddingData.couple.groom.name} & {weddingData.couple.bride.name}
            </h2>
          </div>
        </SectionAnimation>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-[#C5A059]/20 text-center pb-24 md:pb-8">
        <p className="font-sans text-xs text-[#8C7361] flex items-center justify-center gap-1">
          Made with love for <span className="font-serif font-bold text-[#3D2B1F]">{weddingData.couple.groom.name} & {weddingData.couple.bride.name}</span> © 2026
        </p>
      </footer>
    </section>
  );
};
