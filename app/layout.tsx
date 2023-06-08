'use client';

import './globals.css';
import { Montserrat } from 'next/font/google';
import PortfolioNav from '@/app/PortfolioNav';

const inter = Montserrat({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col h-screen`}>
        <PortfolioNav />
        {children}
      </body>
    </html>
  );
}
