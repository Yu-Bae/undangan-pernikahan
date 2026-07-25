"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, UserCheck, Users, MessageSquare } from "lucide-react";
import { AttendanceStatus, GuestWish } from "@/types/wedding";
import { SectionAnimation } from "./SectionAnimation";

interface RSVPSectionProps {
  onAddWish: (newWish: GuestWish) => void;
}

export const RSVPSection: React.FC<RSVPSectionProps> = ({ onAddWish }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState<AttendanceStatus>("Hadir");
  const [guestCount, setGuestCount] = useState<number>(1);
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish: GuestWish = {
      id: `wish-${Date.now()}`,
      name: name.trim(),
      status,
      message: message.trim(),
      createdAt: "Baru saja",
    };

    onAddWish(newWish);
    setIsSubmitted(true);

    setTimeout(() => {
      setName("");
      setMessage("");
      setGuestCount(1);
      setStatus("Hadir");
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section id="rsvp" className="py-20 px-4 bg-[#FAF6F0] overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <SectionAnimation className="text-center mb-12">
          <p className="font-script text-3xl text-[#C5A059] mb-1">Konfirmasi Kehadiran</p>
          <h2 className="font-serif text-3xl md:text-5xl text-[#3D2B1F] tracking-tight mb-4">
            Formulir RSVP
          </h2>
          <p className="font-sans text-xs md:text-sm text-[#7A5230] max-w-md mx-auto">
            Mohon isi formulir di bawah ini untuk mengonfirmasi kehadiran Anda.
          </p>
        </SectionAnimation>

        <SectionAnimation delay={0.2}>
          <div className="bg-[#FFFFFF] rounded-3xl p-6 md:p-10 border border-[#C5A059]/40 shadow-xl relative">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto animate-bounce" />
                <h3 className="font-serif text-2xl md:text-3xl text-[#3D2B1F] font-bold">
                  RSVP Berhasil Disimpan!
                </h3>
                <p className="font-sans text-xs md:text-sm text-[#7A5230] max-w-sm mx-auto leading-relaxed">
                  Terima kasih banyak atas konfirmasi kehadiran dan doa ucapan yang telah Anda kirimkan.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                {/* Field 1: Nama */}
                <div>
                  <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#3D2B1F] mb-2">
                    Nama Lengkap *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Masukkan nama Anda"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#C5A059]/40 text-[#3D2B1F] placeholder-[#8C7361] text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
                    />
                  </div>
                </div>

                {/* Field 2: Status Kehadiran */}
                <div>
                  <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#3D2B1F] mb-2 flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-[#C5A059]" />
                    Status Kehadiran *
                  </label>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {(["Hadir", "Tidak Hadir", "Masih Ragu"] as AttendanceStatus[]).map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setStatus(option)}
                        className={`py-3 px-2 rounded-xl text-xs md:text-sm font-sans font-semibold border transition-all cursor-pointer ${
                          status === option
                            ? "bg-[#7A5230] text-[#FAF6F0] border-[#7A5230] shadow-md"
                            : "bg-[#FAF8F5] text-[#3D2B1F] border-[#C5A059]/30 hover:border-[#C5A059]"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Field 3: Jumlah Tamu */}
                {status === "Hadir" && (
                  <div>
                    <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#3D2B1F] mb-2 flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#C5A059]" />
                      Jumlah Tamu
                    </label>
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#C5A059]/40 text-[#3D2B1F] text-sm focus:outline-none focus:border-[#C5A059] transition-all"
                    >
                      <option value={1}>1 Orang</option>
                      <option value={2}>2 Orang</option>
                      <option value={3}>3 Orang</option>
                      <option value={4}>4+ Orang</option>
                    </select>
                  </div>
                )}

                {/* Field 4: Pesan / Ucapan */}
                <div>
                  <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#3D2B1F] mb-2 flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                    Pesan & Doa Restu *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tuliskan ucapan & doa restu untuk kedua mempelai..."
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#C5A059]/40 text-[#3D2B1F] placeholder-[#8C7361] text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#7A5230] to-[#5C3D22] text-[#FAF6F0] font-sans text-sm font-semibold flex items-center justify-center gap-2 border border-[#C5A059]/50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#E5C88B]" />
                  <span>Kirim Konfirmasi & Ucapan</span>
                </button>
              </form>
            )}
          </div>
        </SectionAnimation>
      </div>
    </section>
  );
};
