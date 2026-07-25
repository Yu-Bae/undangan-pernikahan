"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "center" | "left" | "right";
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  description,
  align = "center",
  className = "",
}) => {
  const alignmentClasses = {
    center: "text-center items-center",
    left: "text-left items-start",
    right: "text-right items-end",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col ${alignmentClasses[align]} ${className}`}
    >
      {subtitle && (
        <span className="font-script text-2xl md:text-3xl text-[#C5A059] tracking-wide mb-1">
          {subtitle}
        </span>
      )}
      <h2 className="font-serif text-3xl md:text-4xl text-[#3D2B1F] tracking-wide font-medium">
        {title}
      </h2>
      
      {/* Decorative Gold Accent Lines */}
      <div className="flex items-center justify-center gap-3 my-3">
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C5A059]" />
        <div className="w-2 h-2 rotate-45 border border-[#C5A059] bg-[#FAF6F0]" />
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C5A059]" />
      </div>

      {description && (
        <p className="font-sans text-sm md:text-base text-[#7A5230] max-w-md mt-1 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};
