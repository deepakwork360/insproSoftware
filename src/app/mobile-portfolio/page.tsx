import BestMobile from "./sections/best-mobile";
import MobileBanner from "./sections/mobile-banner";
import MobilePortfolios from "./sections/portfolios";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Portfolio | High-Performance Mobile Apps",
  description: "Explore our mobile app portfolio. From iOS to Android, we build high-performance, user-centric mobile applications that engage and delight.",
};

export default function MobilePortfolio() {
    return (
        <main>
            <MobileBanner />
            <BestMobile />
            <MobilePortfolios />
        </main>
    )
}