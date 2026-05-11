import Footer from "@/components/Footer/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "InsproSoftware - Web Development, Mobile & Digital Solutions Agency",
  description: "InsproSoftware provides modern web development, mobile app development, UI/UX Design, branding, and digital marketing solutions focused on performance , creativity, and business growth.",
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

import { getContactSettings, getTestimonials } from "@/sanity/lib/queries";

export const revalidate = 0;

export default async function HomePage() {
    const contactData = await getContactSettings();
    const testimonialData = await getTestimonials();

    return (
        <div>
            <HeroBanner />
            <CompanyDetails />
            <LeadingSection phoneNumber={contactData?.phoneNumbers?.[0]} />
            <DigitalServices />
            <Understand />
            <Portfolio />
            {/* <ProfessionalExp /> */}
            <Industries />
            <DevProcess />
            <FAQ />
            <Testimonials data={testimonialData} />
            <FooterCTA contactData={contactData} />
        </div>
    );
}