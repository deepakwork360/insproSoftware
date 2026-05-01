import BestWeb from "./sections/best-web";
import Portfolios from "./sections/portfolios";
import WebBanner from "./sections/web-banner";

export default function WebPortfolio() {
    return (
        <main>
            <WebBanner />
            <BestWeb />
            <Portfolios />
        </main>
    )
}

