import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Undangan Pernikahan Abiyyu & Alda",
  description: "The Wedding of Abiyyu & Alda - Undangan Pernikahan Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${cormorant.variable} ${greatVibes.variable} ${plusJakarta.variable} h-full antialiased selection:bg-[#C5A059]/20 selection:text-[#4A3525]`}
    >
      <body className="min-h-full bg-[#FAF6F0] text-[#4A3525] font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
