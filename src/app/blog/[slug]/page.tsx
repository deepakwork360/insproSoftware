import React from "react";
import { notFound } from "next/navigation";
import { blogData } from "@/constants/blog-data";
import PageBanner from "@/components/ui/page-banner";
import FAQ from "@/app/home-page/sections/faq";
import FooterCTA from "@/app/home-page/sections/footer-cta";
import Image from "next/image";
import { Calendar, User, Clock, Tag } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const data = blogData[slug];

  if (!data) return { title: "Blog Post Not Found" };

  return {
    title: data.metaTitle,
    description: data.metaDescription,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const data = blogData[slug];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <PageBanner 
        title={data.title}
        description={data.bannerDescription}
        imageUrl={data.bannerImage}
        imagePosition={data.imagePosition}
        subtitle={data.subtitle}
      />

      <article className="py-10 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Post Metadata */}
          <div className="flex flex-wrap items-center gap-6 py-8 border-b border-border/10">
            <div className="flex items-center gap-2 text-primary">
              <Calendar size={16} />
              <span className="text-xs font-mono uppercase tracking-widest">{data.date}</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/40">
              <User size={16} />
              <span className="text-xs font-mono uppercase tracking-widest">{data.author}</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/40">
              <Clock size={16} />
              <span className="text-xs font-mono uppercase tracking-widest">{data.readTime}</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/40">
              <Tag size={16} />
              <span className="text-xs font-mono uppercase tracking-widest">{data.category}</span>
            </div>
          </div>

          {/* Dynamic Content Sections */}
          <div className="space-y-10">
            {data.sections.map((section, idx) => {
              if (section.type === "heading") {
                return (
                  <h2 key={idx} className="text-3xl md:text-4xl font-playfair font-medium text-foreground leading-tight pt-4">
                    {section.content as string}
                  </h2>
                );
              }
              if (section.type === "paragraph") {
                return (
                  <p key={idx} className="text-lg text-foreground/70 font-poppins font-light leading-relaxed">
                    {section.content as string}
                  </p>
                );
              }
              if (section.type === "list") {
                return (
                  <ul key={idx} className="space-y-4 list-none">
                    {(section.content as string[]).map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-lg text-foreground/70 font-poppins font-light leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>

          {/* Bottom Divider */}
          {/* <div className="pt-12 border-t border-border/10 flex justify-between items-center opacity-30 select-none">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em]">End_Of_Transmission</div>
            <div className="text-[10px] font-mono uppercase tracking-[0.3em]">Article.ID: {slug.toUpperCase()}</div>
          </div> */}
        </div>
      </article>

      {/* Blog Specific FAQ */}
      {data.faqs && data.faqs.length > 0 && (
        <FAQ 
          customFaqs={data.faqs}
          title="Article"
          highlightTitle="FAQ"
          description={`Frequently asked questions about ${data.title.toLowerCase()}. Get deeper insights into the topic.`}
        />
      )}

      <FooterCTA />
      
      <div className="h-20" />
    </main>
  );
}
