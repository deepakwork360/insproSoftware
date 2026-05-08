import CompanyDetails from "../home-page/sections/comp-details";
import FooterCTA from "../home-page/sections/footer-cta";
import Testimonials from "../home-page/sections/testimonials";
import BlogBanner from "./sections/blog-banner";
import BlogContent from "./sections/blog-content";
import { Metadata } from "next";

import { client } from "@/sanity/lib/client";
import { GET_BLOG_POSTS } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Insights & Tech Blog | Latest Trends in IT",
  description: "Explore our latest articles, insights, and tech trends. Stay updated with the ever-evolving world of software development and digital transformation.",
};

export default async function Blog() {
    const posts = await client.fetch(GET_BLOG_POSTS);

    return (
        <div>
            <BlogBanner />
            <CompanyDetails />
            <BlogContent posts={posts} />
            <Testimonials />
            <FooterCTA />
        </div>
    )
}
