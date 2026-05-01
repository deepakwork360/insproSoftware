import BestMobile from "./sections/best-mobile";
import MobileBanner from "./sections/mobile-banner";
import MobilePortfolios from "./sections/portfolios";

export default function MobilePortfolio() {
    return (
        <main>
            <MobileBanner />
            <BestMobile />
            <MobilePortfolios />
        </main>
    )
}