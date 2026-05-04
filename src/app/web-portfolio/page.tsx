import BestWeb from "./sections/best-web";
import Portfolios from "./sections/portfolios";
import WebBanner from "./sections/web-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Portfolio | Showcasing Digital Excellence",
  description: "Browse our portfolio of high-end web applications, corporate websites, and e-commerce platforms. See how we deliver stunning visual and functional excellence.",
};

export default function WebPortfolio() {
    return (
        <main>
            <WebBanner />
            <BestWeb />
            <Portfolios />
        </main>
    )
}

