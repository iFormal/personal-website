"use client";
import Gradientdiv from "@/components/gradientdiv";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen`}>
        <Gradientdiv className="">
          <Navbar />
          {children}
        </Gradientdiv>
        </body>
    </html>
  );
}
