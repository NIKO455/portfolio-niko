import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Squares from "@/components/Squares";
import FluidCursor from "@/components/FluidCursor";
import Dock from "@/components/Dock/Dock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {children}
        <div className="absolute h-[100vh] w-full top-0 left-0 bg-black">
          <Squares
            speed={0.1}
            squareSize={30}
            direction='diagonal'
            borderColor='#171717'
            hoverFillColor='black'
          />
        </div>
        <FluidCursor />
        <Dock collapsible={false}  responsive="bottom" />
      </body>

    </html>
  );
}
