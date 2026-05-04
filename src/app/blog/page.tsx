import CompanyDetails from "../home-page/sections/comp-details";
import FooterCTA from "../home-page/sections/footer-cta";
import Testimonials from "../home-page/sections/testimonials";
import BlogBanner from "./sections/blog-banner";
import BlogContent from "./sections/blog-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Tech Blog | Latest Trends in IT",
  description: "Explore our latest articles, insights, and tech trends. Stay updated with the ever-evolving world of software development and digital transformation.",
};
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
