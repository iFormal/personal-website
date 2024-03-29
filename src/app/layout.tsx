"use client";
import Gradientdiv from "@/components/gradientdiv";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "./footer";
import "./globals.css";
import { Navbar } from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} h-screen`}>
        <Gradientdiv className="">
          <Navbar />
          {children}
          <Footer />
        </Gradientdiv>
        </body>
    </html>
  );
}
