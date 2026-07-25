"use client";

import React from "react";
import { weddingData } from "@/data/wedding";
import { SectionAnimation } from "./SectionAnimation";

export const GreetingSection: React.FC = () => {
  return (
    <SectionAnimation className="w-full py-16 px-4 bg-[#FAF8F5] border-y border-[#C5A059]/20">
      <div className="max-w-2xl mx-auto text-center">
        {/* Ornamental Divider */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C5A059]" />
          <span className="font-serif italic text-lg text-[#C5A059]">Assalamu’alaikum Wr. Wb.</span>
          <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C5A059]" />
        </div>

        {/* Greeting Body Text */}
        <p className="font-sans text-sm md:text-base text-[#4A3525] leading-relaxed mb-8">
          {weddingData.openingGreeting}
        </p>

        {/* Romantic / Quranic Quote Card */}
        <div className="relative p-6 md:p-8 rounded-2xl bg-[#FFFFFF] border border-[#C5A059]/30 shadow-sm text-center">
          <p className="font-serif italic text-base md:text-lg text-[#3D2B1F] leading-relaxed">
            &quot;{weddingData.quote.text}&quot;
          </p>
          <p className="font-sans text-xs md:text-sm font-semibold text-[#C5A059] tracking-wider uppercase mt-4">
            — {weddingData.quote.source}
          </p>
        </div>
      </div>
    </SectionAnimation>
  );
};
