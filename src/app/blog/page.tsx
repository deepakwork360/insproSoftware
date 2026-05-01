import CompanyDetails from "../home-page/sections/comp-details";
import FooterCTA from "../home-page/sections/footer-cta";
import Testimonials from "../home-page/sections/testimonials";
import BlogBanner from "./sections/blog-banner";
import BlogContent from "./sections/blog-content";
export default function Blog() {
    return (
        <div>
            <BlogBanner />
            <CompanyDetails />
            <BlogContent />
            <Testimonials />
            <FooterCTA />
        </div>
    )
}
