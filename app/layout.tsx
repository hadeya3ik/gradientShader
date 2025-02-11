import type { Metadata } from "next";
import localfont from "next/font/local";
import "./globals.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "UW Smile Club",
  description: "University of Waterloo's Smile Club",
};

const ppNeueMontreal = localfont({
  src: [
    {
      path: "../fonts/PPNeueMontreal-Bold.otf",
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/PPNeueMontreal-Medium.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/PPNeueMontreal-Book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/PPNeueMontreal-Italic.otf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-ppneuemonteal', 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#191818] text-[#ffffff] ${ppNeueMontreal.className}`}>{children}
        <div className="global-overlay"></div>
      </body>
    </html>
  );
}
