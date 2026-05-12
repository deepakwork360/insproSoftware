"use client";

import React from "react";
import PageBanner from "@/components/ui/page-banner";
import { motion } from "framer-motion";

export default function PrivacyPolicyClient() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: `We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, phone number, and company details. We also automatically collect certain technical information when you visit our website, such as your IP address, browser type, and operating system.`,
    },
    {
      title: "2. How We Use Your Information",
      content: `We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to personalize your experience. This includes sending you technical notices, updates, and security alerts. We may also use your information to analyze trends and usage patterns to enhance our offerings.`,
    },
    {
      title: "3. Data Security and Protection",
      content: `Inspro Software takes the security of your data seriously. We implement industry-standard technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. Our systems are regularly audited to ensure compliance with global security standards.`,
    },
    {
      title: "4. Third-Party Disclosures",
      content: `We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as described in this policy. We may share information with trusted third-party service providers who assist us in operating our website and conducting our business, provided those parties agree to keep this information confidential.`,
    },
    {
      title: "5. Cookies and Tracking Technologies",
      content: `Our website uses cookies and similar tracking technologies to enhance your browsing experience and gather information about how our site is used. You can choose to disable cookies through your browser settings, although this may affect the functionality of certain parts of our website.`,
    },
    {
      title: "6. Your Rights and Choices",
      content: `You have the right to access, correct, or delete your personal information held by us. You may also object to the processing of your data or request that we restrict its use. To exercise these rights, please contact our data protection team using the information provided below.`,
    },
    {
      title: "7. Changes to This Policy",
      content: `We may update our Privacy Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. We will notify you of any significant changes by posting the new policy on this page and updating the "Last Updated" date.`,
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <PageBanner
        title="Privacy Policy"
        subtitle="Data Governance & Protection"
        description="At Inspro Software, we are committed to safeguarding your digital privacy through precision engineered security protocols and transparent data practices."
        imageUrl="/images/privacy-policy-bg.png"
      />

      <div className="max-w-4xl mx-auto px-6 py-10 md:py-18">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-medium text-foreground mb-6">
            Our Commitment to Transparency
          </h2>
          <p className="text-lg text-muted-foreground font-poppins leading-relaxed">
            This Privacy Policy outlines how Inspro Software ("we," "our," or "us") collects, uses, and protects your personal information when you interact with our digital platforms. Our goal is to provide you with a clear understanding of our data practices so you can make informed decisions about your privacy.
          </p>
          <div className="mt-8 h-px w-full bg-gradient-to-r from-primary/30 via-primary/10 to-transparent" />
        </motion.div>

        <div className="space-y-16">
          {sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-start gap-6">
                <div className="hidden md:flex flex-col items-center pt-2">
                  <div className="w-2 h-2 rounded-full bg-primary mb-2 shadow-[0_0_8px_var(--primary)]" />
                  <div className="w-px h-full bg-border group-last:bg-transparent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-playfair font-medium text-foreground mb-4 group-hover:text-primary transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-muted-foreground font-poppins leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-32 p-8 md:p-12 rounded-2xl border border-primary/10 bg-primary/5 backdrop-blur-sm relative overflow-hidden"
        >
          {/* Subtle HUD background element */}
          {/* <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-primary/20 tracking-widest uppercase pointer-events-none">
            Secure_Protocol: v.2.4.0
          </div> */}
          
          <h3 className="text-2xl font-playfair font-medium text-foreground mb-6">
            Contact Data Protection Office
          </h3>
          <p className="text-muted-foreground font-poppins mb-8">
            If you have any questions or concerns regarding this Privacy Policy or our data handling practices, please reach out to our dedicated privacy team.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-primary font-mono mb-1">Email</span>
              <a href="mailto:privacy@insprosoftware.com" className="text-foreground hover:text-primary transition-colors font-poppins">
                sales@insprosoftware.com
              </a>
            </div>
            <div className="flex flex-col md:ml-32">
              <span className="text-xs uppercase tracking-widest text-primary font-mono mb-1">Address</span>
              <address className="text-foreground font-poppins not-italic">
                B-127, Block B, Noida Sector 2,
                <br />Uttar Pradesh, India - 201301
              </address>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-primary/10 flex items-center justify-between">
            <span className="text-xs text-muted-foreground font-mono">Last Updated: May 12, 2026</span>
            <div className="flex gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
