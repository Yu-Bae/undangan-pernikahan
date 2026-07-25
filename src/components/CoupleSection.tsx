"use client";

import React from "react";
import Image from "next/image";
import { weddingData } from "@/data/wedding";
import { SectionAnimation } from "./SectionAnimation";

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const CoupleSection: React.FC = () => {
  const { groom, bride } = weddingData.couple;

  return (
    <section id="couple" className="py-20 px-4 bg-[#FAF6F0] overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <SectionAnimation>
          <p className="font-script text-3xl md:text-4xl text-[#C5A059] mb-1">
            Mempelai Pernikahan
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-[#3D2B1F] tracking-tight mb-4">
            Pasangan Mempelai
          </h2>
          <p className="font-sans text-xs md:text-sm text-[#7A5230] max-w-md mx-auto mb-12">
            Maha Suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan.
          </p>
        </SectionAnimation>

        {/* Groom & Bride Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          
          {/* Groom Profile */}
          <SectionAnimation delay={0.2} className="flex flex-col items-center">
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full p-2 bg-gradient-to-tr from-[#C5A059] via-[#E5C88B] to-[#7A5230] shadow-lg mb-6 group">
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#FFFFFF]">
                <Image
                  src={groom.image}
                  alt={groom.fullName}
                  fill
                  unoptimized
                  sizes="208px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            <span className="font-script text-xl text-[#C5A059] mb-1">Marapulai</span>
            <h3 className="font-serif text-2xl md:text-3xl text-[#3D2B1F] font-bold">
              {groom.fullName}
            </h3>
            <p className="font-sans text-xs md:text-sm text-[#7A5230] font-medium mt-2 max-w-xs">
              {groom.parents}
            </p>

            <a
              href={groom.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#C5A059]/40 text-[#7A5230] hover:text-[#3D2B1F] text-xs font-sans font-semibold shadow-sm hover:shadow transition-all duration-300"
            >
              <InstagramIcon className="w-4 h-4 text-[#C5A059]" />
              <span>{groom.instagram}</span>
            </a>
          </SectionAnimation>

          {/* Bride Profile */}
          <SectionAnimation delay={0.4} className="flex flex-col items-center">
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full p-2 bg-gradient-to-tr from-[#C5A059] via-[#E5C88B] to-[#7A5230] shadow-lg mb-6 group">
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#FFFFFF]">
                <Image
                  src={bride.image}
                  alt={bride.fullName}
                  fill
                  unoptimized
                  sizes="208px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            <span className="font-script text-xl text-[#C5A059] mb-1">Anak Daro</span>
            <h3 className="font-serif text-2xl md:text-3xl text-[#3D2B1F] font-bold">
              {bride.fullName}
            </h3>
            <p className="font-sans text-xs md:text-sm text-[#7A5230] font-medium mt-2 max-w-xs">
              {bride.parents}
            </p>

            <a
              href={bride.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#C5A059]/40 text-[#7A5230] hover:text-[#3D2B1F] text-xs font-sans font-semibold shadow-sm hover:shadow transition-all duration-300"
            >
              <InstagramIcon className="w-4 h-4 text-[#C5A059]" />
              <span>{bride.instagram}</span>
            </a>
          </SectionAnimation>

        </div>
      </div>
    </section>
  );
};
