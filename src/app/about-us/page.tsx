import FooterCTA from "../home-page/sections/footer-cta";
import LeadingSection from "../home-page/sections/leading-section";
import ProfessionalExp from "../home-page/sections/professional-exp";
import Testimonials from "../home-page/sections/testimonials";
import Understand from "../home-page/sections/understand";
import AboutUsBanner from "./sections/about-us-banner";
import MeetTeam from "./sections/meet-team";
import Team from "./sections/team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Our Story & Expertise",
  description: "Learn about InsproSoftware's journey, our values, and the expert team behind our world-class software solutions. We are dedicated to innovation and client success.",
};

import { getContactSettings, getTeamMembers } from "@/sanity/lib/queries";

export default async function AboutUsPage() {
    const contactData = await getContactSettings();
    const teamData = await getTeamMembers();

    return (
        <main>
            <AboutUsBanner />
            <LeadingSection className="py-10 md:py-14" phoneNumber={contactData?.phoneNumbers?.[0]} />
            <Team data={teamData} />
            <Understand />
            <MeetTeam />
            {/* <ProfessionalExp /> */}
            <Testimonials />
            <FooterCTA contactData={contactData} />
        </main>
    );
}
