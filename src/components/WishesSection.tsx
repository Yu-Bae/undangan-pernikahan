"use client";

import React from "react";
import { MessageSquareQuote, CheckCircle, HelpCircle, XCircle } from "lucide-react";
import { GuestWish } from "@/types/wedding";
import { SectionAnimation } from "./SectionAnimation";

interface WishesSectionProps {
  wishes: GuestWish[];
}

export const WishesSection: React.FC<WishesSectionProps> = ({ wishes }) => {
  const getStatusBadge = (status: GuestWish["status"]) => {
    switch (status) {
      case "Hadir":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-sans font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle className="w-3 h-3 text-emerald-600" />
            Hadir
          </span>
        );
      case "Tidak Hadir":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-sans font-semibold bg-rose-50 text-rose-700 border border-rose-200">
            <XCircle className="w-3 h-3 text-rose-600" />
            Tidak Hadir
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-sans font-semibold bg-amber-50 text-amber-700 border border-amber-200">
            <HelpCircle className="w-3 h-3 text-amber-600" />
            Masih Ragu
          </span>
        );
    }
  };

  return (
    <section className="py-20 px-4 bg-[#FAF8F5] border-y border-[#C5A059]/20 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <SectionAnimation className="text-center mb-12">
          <p className="font-script text-3xl text-[#C5A059] mb-1">Ungkapan Hati</p>
          <h2 className="font-serif text-3xl md:text-5xl text-[#3D2B1F] tracking-tight mb-4">
            Doa & Ucapan Tamu
          </h2>
          <p className="font-sans text-xs md:text-sm text-[#7A5230] max-w-md mx-auto">
            Terima kasih atas doa dan ucapan hangat dari sahabat serta keluarga tersayang.
          </p>
        </SectionAnimation>

        {/* Wishes List Cards */}
        <div className="max-h-[480px] overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-[#C5A059]/40">
          {wishes.map((wish, index) => (
            <SectionAnimation
              key={wish.id}
              delay={index * 0.05}
              className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#C5A059]/30 shadow-sm text-left relative"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-serif text-lg font-bold text-[#3D2B1F]">
                    {wish.name}
                  </span>
                  {getStatusBadge(wish.status)}
                </div>
                <span className="text-[11px] font-sans text-[#8C7361] shrink-0">
                  {wish.createdAt}
                </span>
              </div>

              <div className="flex gap-2">
                <MessageSquareQuote className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5 opacity-70" />
                <p className="font-sans text-xs md:text-sm text-[#4A3525] leading-relaxed">
                  {wish.message}
                </p>
              </div>
            </SectionAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};
