import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "./footer";
import "./globals.css";
import { Navbar } from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "James Ang",
  description: "Created by James",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
