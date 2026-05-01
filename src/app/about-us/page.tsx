import FooterCTA from "../home-page/sections/footer-cta";
import LeadingSection from "../home-page/sections/leading-section";
import ProfessionalExp from "../home-page/sections/professional-exp";
import Testimonials from "../home-page/sections/testimonials";
import Understand from "../home-page/sections/understand";
import AboutUsBanner from "./sections/about-us-banner";
import MeetTeam from "./sections/meet-team";
import Team from "./sections/team";

export default function AboutUsPage() {
    return (
        <main>
            <AboutUsBanner />
            <LeadingSection />
            <Team />
            <Understand />
            <MeetTeam />
            <ProfessionalExp />
            <Testimonials />
            <FooterCTA />
        </main>
    );
}

