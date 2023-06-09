import "../../app/globals.css";
import { Montserrat } from "next/font/google";
import PortfolioNav from "@/components/PortfolioNav/PortfolioNav";

const inter = Montserrat({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PortfolioNav />
      {children}
    </>
  );
}
