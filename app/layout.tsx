"use client";

import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { SSRProvider } from "react-bootstrap";
import { Montserrat } from "next/font/google";
import PortfolioNav from "@/components/PortfolioNav";

const inter = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` vh-100 d-flex flex-column`}>
        <PortfolioNav />
        <SSRProvider>{children}</SSRProvider>
      </body>
    </html>
  );
}
