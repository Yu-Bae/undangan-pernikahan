"use client";

import React, { useState } from "react";
import { CreditCard, Copy, Check, Gift } from "lucide-react";
import { weddingData } from "@/data/wedding";
import { SectionAnimation } from "./SectionAnimation";

export const WeddingGiftSection: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (accountNumber: string, index: number) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2500);
  };

  return (
    <section className="py-20 px-4 bg-[#FAF8F5] border-y border-[#C5A059]/20 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <SectionAnimation>
          <div className="w-12 h-12 rounded-full bg-[#FAF6F0] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] mx-auto mb-4 shadow-sm">
            <Gift className="w-6 h-6" />
          </div>
          <p className="font-script text-3xl text-[#C5A059] mb-1">Tanda Kasih</p>
          <h2 className="font-serif text-3xl md:text-5xl text-[#3D2B1F] tracking-tight mb-4">
            Hadiah Pernikahan
          </h2>
          <p className="font-sans text-xs md:text-sm text-[#4A3525] max-w-md mx-auto mb-12 leading-relaxed">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika Anda ingin memberi hadiah pernikahan, Anda dapat mengirimkannya melalui rekening berikut:
          </p>
        </SectionAnimation>

        {/* Bank Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {weddingData.bankAccounts.map((account, index) => (
            <SectionAnimation
              key={index}
              delay={index * 0.2}
              className="p-6 rounded-3xl bg-[#FFFFFF] border border-[#C5A059]/40 shadow-md flex flex-col justify-between items-center relative overflow-hidden group hover:border-[#C5A059] transition-all"
            >
              <div className="w-full">
                {/* Bank Header */}
                <div className="flex items-center justify-between w-full mb-4 pb-3 border-b border-[#FAF6F0]">
                  <span className="font-serif text-xl font-bold text-[#3D2B1F]">
                    {account.bankName}
                  </span>
                  <CreditCard className="w-5 h-5 text-[#C5A059]" />
                </div>

                {/* Account Details */}
                <div className="my-4 text-center">
                  <p className="font-sans text-xs text-[#7A5230] uppercase tracking-wider font-medium">
                    Nomor Rekening
                  </p>
                  <p className="font-mono text-2xl font-bold text-[#3D2B1F] tracking-wider my-1">
                    {account.accountNumber}
                  </p>
                  <p className="font-sans text-xs text-[#7A5230]">
                    a.n. <span className="font-semibold text-[#3D2B1F]">{account.accountName}</span>
                  </p>
                </div>
              </div>

              {/* Copy Button */}
              <button
                type="button"
                onClick={() => handleCopy(account.accountNumber, index)}
                className="w-full mt-4 py-2.5 px-4 rounded-full bg-[#FAF6F0] hover:bg-[#C5A059] text-[#7A5230] hover:text-[#FFFFFF] border border-[#C5A059]/40 font-sans text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
              >
                {copiedIndex === index ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Nomor Berhasil Disalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Salin Nomor Rekening</span>
                  </>
                )}
              </button>
            </SectionAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};
