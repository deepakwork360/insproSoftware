import React from "react";
import { notFound } from "next/navigation";
import { servicesData } from "@/constants/services-data";
import ServiceCards from "@/components/services/serviceCards";
import PageBanner from "@/components/ui/page-banner";
import ProfWebDev from "@/components/services/profWebDev";
import CustomWebDev from "@/components/services/customWebDev";
import DevProcess from "@/app/home-page/sections/dev-process";
import ProfessionalExp from "@/app/home-page/sections/professional-exp";
import Portfolio from "@/app/home-page/sections/portfolio";
import WantTalk from "@/components/services/wantTalk";
import Testimonials from "@/app/home-page/sections/testimonials";
import FAQ from "@/app/home-page/sections/faq";
import FooterCTA from "@/app/home-page/sections/footer-cta";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const data = servicesData[slug];

  if (!data) return { title: "Service Not Found" };

  return {
    title: data.metaTitle,
    description: data.metaDescription,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const data = servicesData[slug];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <PageBanner 
        title={data.title}
        description={data.bannerDescription}
        imageUrl={data.bannerImage}
        imagePosition={data.imagePosition}
        subtitle={data.subtitle}
      />

      {/* Section Header & Cards Section */}
      <section className="py-10 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Dynamic Section Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3">
              <div className="w-8 h-px bg-[var(--primary)]" />
              <span className="text-[var(--primary)] text-[10px] uppercase tracking-[0.4em] font-mono font-bold">
                Professional.Services
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-[var(--foreground)] leading-[1.1]">
              {data.sectionTitle.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="italic text-[var(--primary)]">
                {data.sectionTitle.split(' ').slice(-1)}
              </span>
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] font-light leading-relaxed max-w-2xl">
              {data.sectionDescription}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="-mx-6 md:-mx-12 lg:-mx-24">
            <ServiceCards cards={data.cards} />
          </div>
        </div>
      </section>

      <ProfWebDev data={data.profSection} />
      <CustomWebDev data={data.techSection} />
      <DevProcess />
      <ProfessionalExp />
      <Portfolio />
      <WantTalk />
      <Testimonials />
      <FAQ />
      <FooterCTA />

      <div className="h-20" />
    </main>
  );
}
