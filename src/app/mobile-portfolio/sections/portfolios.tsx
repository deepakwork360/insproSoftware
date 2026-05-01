import Portfolios, { PortfolioItem } from "../../web-portfolio/sections/portfolios";

const mobilePortfolioData: PortfolioItem[] = [
    {
        id: 1,
        title: "AES",
        category: "Mobile App",
        imageUrl: "/portfolio/ae.png",
        link: "https://play.google.com/store/apps/details?id=com.app.aerecharge&pcampaignid=web_share"
    },
    {
        id: 2,
        title: "MyShifts",
        category: "Mobile App",
        imageUrl: "/portfolio/shift.png",
        link: "https://play.google.com/store/apps/details?id=com.psm.timesheet"
    },
    {
        id: 3,
        title: "Dakinto",
        category: "Mobile App",
        imageUrl: "/portfolio/dakinto.png",
        link: "https://play.google.com/store/search?q=dakinto&c=apps"
    }
];

export default function MobilePortfolios() {
    return (
        <Portfolios 
            items={mobilePortfolioData} 
            title="Mobile Innovations" 
            subtitle="App.Archive"
            showTitle={false}
            aspectRatio="aspect-[3/4]"
        />

    );
}
