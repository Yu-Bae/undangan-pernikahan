"use client";

import React, { useState, useEffect } from "react";
import { weddingData } from "@/data/wedding";
import { SectionAnimation } from "./SectionAnimation";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date(weddingData.eventDate.isoDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SectionAnimation className="py-16 px-4 bg-[#FAF8F5] border-y border-[#C5A059]/20">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-script text-3xl text-[#C5A059] mb-1">Menghitung Hari</p>
        <h2 className="font-serif text-3xl md:text-4xl text-[#3D2B1F] font-bold mb-8">
          Menuju Hari Bahagia
        </h2>

        {/* Countdown Cards Grid */}
        <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-lg mx-auto">
          {[
            { label: "Hari", value: mounted ? timeLeft.days : 0 },
            { label: "Jam", value: mounted ? timeLeft.hours : 0 },
            { label: "Menit", value: mounted ? timeLeft.minutes : 0 },
            { label: "Detik", value: mounted ? timeLeft.seconds : 0 },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl bg-[#FFFFFF] border border-[#C5A059]/40 shadow-sm"
            >
              <span className="font-serif text-2xl sm:text-4xl font-bold text-[#3D2B1F]">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="font-sans text-[11px] sm:text-xs text-[#7A5230] font-semibold uppercase tracking-wider mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionAnimation>
  );
};
