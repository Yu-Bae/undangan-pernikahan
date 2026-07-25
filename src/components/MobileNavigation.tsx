"use client";

import React, { useState, useEffect } from "react";
import { Home, Users, Calendar, Image as ImageIcon, Send } from "lucide-react";

export const MobileNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "couple", label: "Couple", icon: Users },
    { id: "event", label: "Event", icon: Calendar },
    { id: "gallery", label: "Gallery", icon: ImageIcon },
    { id: "rsvp", label: "RSVP", icon: Send },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#FFFFFF]/90 backdrop-blur-lg border-t border-[#C5A059]/30 py-2 px-3 sm:hidden shadow-lg">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                isActive
                  ? "text-[#C5A059] font-bold"
                  : "text-[#8C7361] hover:text-[#3D2B1F]"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "stroke-[2.5]" : "stroke-[1.75]"}`} />
              <span className="text-[10px] font-sans tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
