import Footer from "@/components/Footer/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Insprosoftware. Your partner for innovative software solutions.",
};
import CompanyDetails from "./sections/comp-details";
import DevProcess from "./sections/dev-process";
import DigitalServices from "./sections/digitial-services";
import FAQ from "./sections/faq";
import FooterCTA from "./sections/footer-cta";
import HeroBanner from "./sections/hero-banner";
import Industries from "./sections/industries";
import LeadingSection from "./sections/leading-section";
import Portfolio from "./sections/portfolio";
import ProfessionalExp from "./sections/professional-exp";
import Testimonials from "./sections/testimonials";
import Understand from "./sections/understand";

export default function HomePage() {
    return (
        <div>
            <HeroBanner />
            <CompanyDetails />
            <LeadingSection />
            <DigitalServices />
            <Understand />
            <Portfolio />
            <ProfessionalExp />
            <Industries />
            <DevProcess />
            <FAQ />
            <Testimonials />
            <FooterCTA />
        </div>
    );
}