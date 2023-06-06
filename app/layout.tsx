"use client";

import "./globals.css";
import { Montserrat } from "next/font/google";
import PortfolioNav from "@/app/PortfolioNav";
import { Instagram } from "./socialSVG";

const inter = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        <PortfolioNav />
        {children}
      </body>
    </html>
  );
}
