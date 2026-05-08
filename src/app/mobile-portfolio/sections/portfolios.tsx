import Portfolios from "../../web-portfolio/sections/portfolios";
import { client } from "@/sanity/lib/client";
import { GET_PORTFOLIOS } from "@/sanity/lib/queries";

export default async function MobilePortfolios() {
    const portfolios = await client.fetch(GET_PORTFOLIOS, { platform: 'mobile' });

    return (
        <Portfolios 
            items={portfolios} 
            title="Mobile Innovations" 
            subtitle="App.Archive"
            showTitle={false}
            aspectRatio="aspect-[3/4]"
        />
    );
}
