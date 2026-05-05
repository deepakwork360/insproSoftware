"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Calendar, User } from 'lucide-react';

interface BlogPost {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Top Trends in Progressive Web App Development in the USA for 2026",
        description: "Progressive Web Apps (PWAs) are a new web standard that is changing the way that online businesses engage with consumers by blending the best of websites and mobile apps. As 2025 approaches, businesses will increasingly depend on some of the most innovative web technologies to deliver fast, secure, app-like user experiences without the need for app store downloads. This shift has consequently raised the demand for a PWA development company in USA that can deliver state-of-the-art digital solutions.",
        imageUrl: "/blog/web.png",
        link: "/blog/future-of-web-development-2026"
    },
    {
        id: 2,
        title: "10 best brochure design services in 2026: Your Go-To Guide for Brochure Design",
        description: "As 2025 approaches, now more than ever before, companies will cease to settle for substandard marketing collateral when the branding and delivering the optimal customer experience is priority one. Since they can present information in an attractive, well-structured format, brochures are still a highly useful marketing tool even though we seem to be headed down the digital path these days. When it comes to both business presentations and events, a great brochure is an essential marketing material. You want to stand out, and the content included in your brochure isn’t just good looking when you hire a good brochure design service.",
        imageUrl: "/blog/brochure.png",
        link: "/blog/brochure-design-guide"
    },
    {
        id: 3,
        title: "How To Develop Apps For Smartwatch: STEP-BY-STEP GUIDE",
        description: "We no longer have an expensive time show on our wrist but true companions who show us how we are doing with our health, help us talk to our family and friends or even do some work by using voice commands and taps on the smart watch. As the smartwatch industry grows aggressively, agencies and developers are investing more into smartwatch app software development services to make an app creative, well designed and functional. Creating a smartwatch app can be separated into several steps and in this guide, you are led through each step of the process from ideation to publishing your app.",
        imageUrl: "/blog/watch.png",
        link: "/blog/smartwatch-app-development-guide"
    },
    {
        id: 4,
        title: "What is an Enterprise Solution vs Bespoke in Website",
        description: "With today’s digital warfare, your website becomes an online touchpoint for your company. Selecting the development approach that's right for you is vital as your business scales and its digital demand becomes more sophisticated. Strategic decisions companies need to take into account the trade-offs between Enterprise Web Solutions vs. Bespoke Website.Though all three of these tactics will have their own strengths, which one is right for you will ultimately come down to your goals, size, and growth plan.",
        imageUrl: "/blog/webdev1.png",
        link: "/blog/enterprise-vs-bespoke-website"
    },
    {
        id: 5,
        title: "How Much Does Website Development Cost in the USA in 2025?",
        description: "With the digital landscape shifting, businesses of all shapes and sizes are able to quickly respond to growing trends by utilizing the digital channels that perform best for them. Whether you have opportunity to do sustainable SEO, to scale your business or if you are starting a start-up you need to calculate Website Development Cost USA 2025. In this post we'll take a look at the most up to date investment information and from all angles, to determine the least expensive way possible in which you can create references for a website.",
        imageUrl: "/blog/website-cost.webp",
        link: "/blog/website-development-cost-in-usa"
    },
    {
        id: 6,
        title: "Professional Ecommerce Development Services Fueling Immersive, Mobile-first Marketplaces Of 2026",
        description: "E-commerce changes fast, 2025 will be a tipping point for businesses wanting to get on the web. As technology has developed, and the popularity of online shopping has grown exponentially, expert e-commerce development services have become increasingly adopted. Today’s consumer expects to be engaged, to be able to navigate fluidly and, above all, mobile-friendly design, and companies need to implement professional ecommerce solutions that support all such – and more.",
        imageUrl: "/blog/prof.png",
        link: "/blog/professional-ecommerce-development-services"
    },
    {
        id: 7,
        title: "Building Future-ready Enterprise Web Solutions With Ai, Edge & Design Systems",
        description: "The digital environment is changing so rapidly, and businesses today are always under the pressure to innovate and offer secure, scalable and customer centric platforms. As we look ahead to 2025, the intersection of AI, edge, and design systems is redefining how enterprises think about the strategy for their enterprise web solution. Business as usual: outdated operations no longer cut it and businesses today demand smart, capable and cost-effective solutions to compete.",
        imageUrl: "/blog/future.png",
        link: "/blog/future-ready-enterprise-web-solutions"
    },
    {
        id: 8,
        title: "Smartwatch App Software Development Services Guide - Steps, Cost & Development Process",
        description: "Gone are the days when smart watches were just fancy gadgets, as in recent years, smart watches have taken a wide range of purposes such as fitness trackers, health monitors, communication and workplace productivity at an extreme pace. With growing demand, businesses and startups are increasing their investment in smartwatches application software development services to target tech-savvy users on wearable platforms. If you are going to create a smartwatch app, you need to know the steps, cost factors and the development process in general. An Ultimate Guide To Everything You Should Know Before Getting Smartwatch App Development Services appeared first on Appsrhino.",
        imageUrl: "/blog/watch1.png",
        link: "/blog/app-software-development-services-guide"
    },
    {
        id: 9,
        title: "From Qr Codes To Augmented Reality: How Smart Brochures Engage Audiences In 2026",
        description: "Paper and print are now a thing of the past in 2025 for traditional marketing tools. Brands are presenting brochures through interactive, tech-enabled experiences that bring digital closer to the real world. Smart brochures revolutionise brands ability in audience attraction, from QR codes leading to videos or apps, to augmented reality (AR) that enable designs justice to stock. Thanks to professional brochure design services, companies can now prepare materials that look better than ever and also engage visually more than ever.",
        imageUrl: "/blog/2026.png",
        link: "/blog/qr-codes-augmented-reality-brochure"
    },
    {
        id: 10,
        title: "Top 7 Enterprise Web Development Trends to Follow in 2026",
        description: "By 2026, the businesses are taking advanced digital solutions and integrated services to provide integrated user experiences, stay ahead in the competition, and fasten the processes. In the ever-evolving digital landscape, enterprise web solution providers are being touted as the all-in-one solution for enterprises to navigate the transition. As organizations look for state-of-the-art platforms capable of elastically scaling and integrating with existing data. Below are the top 7 trends for enterprise web development in 2026.",
        imageUrl: "/blog/enterprise3.png",
        link: "/blog/enterprise-web-development-trends"
    },
    {
        id: 11,
        title: "Top Website Development Services for a Stunning Online Presence",
        description: "In today's digital landscape, having a well-designed and functional website is essential for any business to succeed. A professionally developed website not only enhances user experience but also boosts search engine rankings and brand credibility. At Insprosoftware, we specialize in providing top-notch website development services tailored to meet your business needs.",
        imageUrl: "/blog/top.png",
        link: "/blog/top-website-development-services"
    },
    {
        id: 12,
        title: "Elevate Your Online Presence with Expert Web Designing",
        description: "In today's digital era, a well-designed website is more than just an online presence; it is the cornerstone of your business's success. At Insprosoftware, we specialize in creating cutting-edge web designing solutions that help you stand out in the competitive online world. Our expert team understands the intricate balance between aesthetics, functionality, and user experience, ensuring your website becomes a powerful tool to achieve your business goals.",
        imageUrl: "/blog/Elevate.png",
        link: "/blog/web-designing"
    },
    {
        id: 13,
        title: "Boost Your Business with Expert Digital Marketing Servicesg",
        description: "In today's fast-paced digital world, businesses need a strong online presence to thrive. Digital marketing services have become essential for companies aiming to reach their target audience, increase brand awareness, and boost sales. At Insprosoftware, we specialize in delivering top-notch digital marketing solutions tailored to your business needs.",
        imageUrl: "/blog/boost.png",
        link: "/blog/digital-marketing-services"
    },
    {
        id: 14,
        title: "Graphics Design: The Key to a Strong Brand Identity",
        description: "In today's digital world, where first impressions matter the most, graphics design plays a crucial role in establishing a brand’s visual identity. Whether you are a startup looking for an eye-catching logo or a business aiming to enhance your online presence, the right design elements can make all the difference. At Insprosoftware, we specialize in delivering top-notch graphics design solutions tailored to your business needs.",
        imageUrl: "/blog/design.png",
        link: "/blog/graphics-design-brand-identity"
    },
    {
        id: 15,
        title: "Software Development: Build Scalable & Smart Solutions",
        description: "In the digital age, software development plays a crucial role in shaping businesses, automating processes, and enhancing user experiences. Whether you are a startup, a growing enterprise, or an established company, investing in high-quality software development can drive efficiency, innovation, and profitability. At Insprosoftware, we specialize in developing cutting-edge software solutions that cater to the unique needs of businesses across industries.",
        imageUrl: "/blog/soft.png",
        link: "/blog/build-scalable-smart-solutions"
    },
    {
        id: 16,
        title: "Mobile App Development: Transform Your Business with Apps",
        description: "In today’s digital world, mobile apps have become essential tools for businesses to enhance user experience, streamline operations, and drive revenue. With the rise of smartphones and the ever-growing demand for on-the-go solutions, investing in mobile app development is no longer optional—it’s a necessity.",
        imageUrl: "/blog/app.png",
        link: "/blog/mobile-app-development"
    },
];


function BlogCard({ post }: { post: BlogPost }) {
    return (
        <div className="group space-y-6">
            {/* Image Link Container */}
            <Link href={post.link} className="relative block aspect-[16/10] overflow-hidden border border-border/40 bg-card">
                {/* HUD Detail - Top Left */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/40 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Center Link Icon (Visual) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 z-20">
                    <div className="w-12 h-12 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center">
                        <ArrowUpRight size={20} className="text-white" />
                    </div>
                </div>
            </Link>


            {/* Content Section */}
            <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-playfair font-medium text-foreground leading-tight transition-colors duration-300 group-hover:text-primary">
                    <Link href={post.link}>{post.title}</Link>
                </h3>

                <p className="text-sm md:text-base text-foreground/60 font-poppins leading-relaxed line-clamp-3">
                    {post.description}
                </p>

                <div className="pt-2">
                    <Link
                        href={post.link}
                        className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors duration-300"
                    >
                        Read more
                        <div className="h-px w-8 bg-foreground group-hover:bg-primary group-hover:w-12 transition-all duration-300" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function BlogContent() {
    return (
        <section className="px-6 md:px-12 lg:px-24 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                    {blogPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>

                {/* Pagination Placeholder (Premium style) */}
                <div className="mt-32 flex items-center justify-center gap-4">
                    <div className="h-px flex-1 bg-border/20 max-w-[100px]" />
                    <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-foreground/40">
                        <span className="text-primary font-bold">01</span>
                        <span>/</span>
                        <span>04</span>
                    </div>
                    <div className="h-px flex-1 bg-border/20 max-w-[100px]" />
                </div>
            </div>
        </section>
    );
}