import "./globals.css";
import { Montserrat } from "next/font/google";

const inter = Montserrat({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Dario Russo Portfolio",
  description:
    "Dario Russo's portfolio. Meet Dario a very passionate web developer with 2 years of experience in building and maintaining webpages solutions.",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-screen">
      <body className={`${inter.className} h-screen`}>{children}</body>
    </html>
  );
}
