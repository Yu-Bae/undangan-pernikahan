"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { weddingData } from "@/data/wedding";
import { GalleryItem } from "@/types/wedding";
import { SectionAnimation } from "./SectionAnimation";

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 px-4 bg-[#FAF6F0] overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <SectionAnimation>
          <p className="font-script text-3xl text-[#C5A059] mb-1">Momen Indah</p>
          <h2 className="font-serif text-3xl md:text-5xl text-[#3D2B1F] tracking-tight mb-4">
            Galeri Foto
          </h2>
          <p className="font-sans text-xs md:text-sm text-[#7A5230] max-w-md mx-auto mb-12">
            Potret kebersamaan dan kenangan manis yang kami abadikan dalam setiap langkah.
          </p>
        </SectionAnimation>

        {/* Responsive CSS Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {weddingData.gallery.map((item, index) => (
            <SectionAnimation key={item.id} delay={index * 0.1}>
              <button
                type="button"
                onClick={() => setSelectedImage(item)}
                className="group relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#C5A059]/30 shadow-md cursor-pointer block focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#3D2B1F]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#FAF6F0]/90 text-[#C5A059] flex items-center justify-center shadow-lg">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </button>
            </SectionAnimation>
          ))}
        </div>

        {/* Lightbox / Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-[#3D2B1F]/80 backdrop-blur-md p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl w-full max-h-[85vh] bg-[#FAF6F0] rounded-3xl p-3 border border-[#C5A059] shadow-2xl overflow-hidden flex flex-col items-center"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#FFFFFF]/90 text-[#3D2B1F] hover:bg-[#C5A059] hover:text-[#FFFFFF] transition-colors flex items-center justify-center shadow-md cursor-pointer"
                  aria-label="Tutup foto"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Lightbox Image */}
                <div className="relative w-full aspect-[4/5] sm:aspect-square max-h-[70vh] rounded-2xl overflow-hidden">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    unoptimized
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>

                <p className="font-serif text-base text-[#3D2B1F] font-semibold mt-3">
                  {selectedImage.title}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
