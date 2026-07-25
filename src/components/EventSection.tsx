"use client";

import React from "react";
import { Calendar, Clock, MapPin, ExternalLink, Heart } from "lucide-react";
import { weddingData } from "@/data/wedding";
import { SectionAnimation } from "./SectionAnimation";

export const EventSection: React.FC = () => {
  const { akad, resepsi } = weddingData;

  const events = [
    { ...akad, icon: Heart, label: "Janji Suci" },
    { ...resepsi, icon: Calendar, label: "Syukuran" },
  ];

  return (
    <section id="event" className="py-20 px-4 bg-[#FAF6F0] overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <SectionAnimation>
          <p className="font-script text-3xl text-[#C5A059] mb-1">Waktu & Lokasi</p>
          <h2 className="font-serif text-3xl md:text-5xl text-[#3D2B1F] tracking-tight mb-4">
            Rangkaian Acara
          </h2>
          <p className="font-sans text-xs md:text-sm text-[#7A5230] max-w-md mx-auto mb-12">
            Dengan penuh rasa syukur, kami mengundang Anda untuk menjadi bagian dari momen bahagia kami.
          </p>
        </SectionAnimation>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <SectionAnimation
                key={index}
                delay={index * 0.2}
                className="flex flex-col justify-between p-8 rounded-3xl bg-[#FFFFFF] border border-[#C5A059]/40 shadow-lg text-center relative overflow-hidden group hover:border-[#C5A059] transition-all duration-300"
              >
                {/* Decorative Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#7A5230] via-[#C5A059] to-[#7A5230]" />

                <div>
                  {/* Icon Badge */}
                  <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-[#FAF6F0] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl md:text-3xl text-[#3D2B1F] font-bold mb-1">
                    {event.title}
                  </h3>
                  <span className="inline-block text-[11px] font-sans font-semibold tracking-widest text-[#C5A059] uppercase mb-6">
                    {event.label}
                  </span>

                  {/* Info List */}
                  <div className="space-y-4 text-xs md:text-sm text-[#4A3525] mb-8 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Calendar className="w-4 h-4 text-[#C5A059] shrink-0" />
                      <span className="font-semibold">{event.date}</span>
                    </div>

                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-start justify-center gap-2 max-w-xs mx-auto">
                      <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-[#3D2B1F]">{event.venue}</p>
                        <p className="text-[#7A5230] text-xs mt-0.5">{event.city}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location Action Button */}
                <a
                  href={event.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#7A5230] hover:bg-[#5C3D22] text-[#FAF6F0] text-xs font-sans font-semibold transition-all duration-300 shadow-md hover:shadow-lg border border-[#C5A059]/50"
                >
                  <MapPin className="w-4 h-4 text-[#E5C88B]" />
                  <span>Lihat Lokasi</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#E5C88B]/80 ml-1" />
                </a>
              </SectionAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};
