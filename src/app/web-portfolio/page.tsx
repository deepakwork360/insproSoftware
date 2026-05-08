import BestWeb from "./sections/best-web";
import Portfolios from "./sections/portfolios";
import WebBanner from "./sections/web-banner";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { GET_PORTFOLIOS } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Web Portfolio | Showcasing Digital Excellence",
  description: "Browse our portfolio of high-end web applications, corporate websites, and e-commerce platforms. See how we deliver stunning visual and functional excellence.",
};

export default async function WebPortfolio() {
    const portfolios = await client.fetch(GET_PORTFOLIOS, { platform: 'web' });

    return (
        <main>
            <WebBanner />
            <BestWeb />
            <Portfolios items={portfolios} />
        </main>
    )
}

