"use client";

import React from "react";
import { Heart } from "lucide-react";
import { weddingData } from "@/data/wedding";
import { SectionAnimation } from "./SectionAnimation";

export const LoveStorySection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-[#FAF8F5] border-y border-[#C5A059]/20 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <SectionAnimation className="text-center mb-14">
          <p className="font-script text-3xl text-[#C5A059] mb-1">Perjalanan Cinta</p>
          <h2 className="font-serif text-3xl md:text-5xl text-[#3D2B1F] tracking-tight mb-4">
            Kisah Kami
          </h2>
          <p className="font-serif italic text-sm md:text-base text-[#C5A059] max-w-md mx-auto font-medium">
            “Berawal dari Tawa, Berakhir pada Sebuah Janji.”
          </p>
        </SectionAnimation>

        {/* Vertical Responsive Timeline */}
        <div className="relative border-l-2 border-[#C5A059]/40 ml-4 md:ml-32 space-y-12 pr-4">
          {weddingData.loveStory.map((item, index) => (
            <SectionAnimation
              key={item.id}
              delay={index * 0.2}
              className="relative pl-8 md:pl-10"
            >
              {/* Timeline Dot Marker */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#FAF6F0] border-2 border-[#C5A059] flex items-center justify-center text-[#C5A059] shadow-sm">
                <Heart className="w-3.5 h-3.5 fill-[#C5A059]" />
              </div>

              {/* Card Container */}
              <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#C5A059]/30 shadow-sm relative">
                {/* Date Badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-[#FAF6F0] border border-[#C5A059]/40 text-[#7A5230] font-sans text-xs font-semibold mb-3">
                  {item.date}
                </span>

                <h3 className="font-serif text-xl md:text-2xl text-[#3D2B1F] font-bold mb-2">
                  {item.title}
                </h3>

                <p className="font-sans text-xs md:text-sm text-[#4A3525] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </SectionAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};
