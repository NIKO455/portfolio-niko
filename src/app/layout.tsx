'use client'

import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Squares from "@/components/Squares";
import FluidCursor from "@/components/FluidCursor";
import Dock from "@/components/Dock/Dock";
import Loader from "@/components/Loader/Loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {/* Loader with smooth transition */}
        <div
          className={`transition-opacity duration-500 ${isLoading ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          style={{ zIndex: 1 }} // Make sure loader is on top
        >
          <Loader />
        </div>

        {/* Main content */}
        <div
          className={`absolute top-0 text-white h-full w-full transition-opacity duration-500 ${isLoading ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
          style={{ zIndex: 1 }}
        >
          {children}
        </div>

        {/* Background squares animation */}
        <div className="absolute h-[100vh] w-full top-0 left-0 bg-black" style={{ zIndex: -1 }}>
          <Squares
            speed={0.1}
            squareSize={30}
            direction="diagonal"
            borderColor="#171717"
            hoverFillColor="black"
          />
        </div>

        {/* Custom cursor */}
        <FluidCursor />

        {/* Dock */}
        <div
          className={`transition-opacity duration-500 ${isLoading ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
          style={{ zIndex: 1 }}
        >
          <Dock collapsible={false} responsive="bottom" />
        </div>
      </body>
    </html>
  );
}

