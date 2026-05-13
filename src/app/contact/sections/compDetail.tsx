import CompDetailCard from "@/components/ui/Company-detail-card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

interface CompDetailProps {
    className?: string;
    contactData?: {
        phoneNumbers?: string[];
        email?: string;
        address?: string;
        workingHours?: string;
    } | null;
}

export default function CompDetail({ className = "", contactData }: CompDetailProps) {
    const contactDetails = [
        {
            icon: <MapPin size={24} />,
            title: "Visit Our Office",
            description: contactData?.address || "B-127, Block B, Noida Sector 2, Uttarpradesh-201301"
        },
        {
            icon: <Phone size={24} />,
            title: "Call Us Directly",
            description: contactData?.phoneNumbers?.[0] || "+91 9990760789"
        },
        {
            icon: <Mail size={24} />,
            title: "Email Support",
            description: contactData?.email || "infotech@gmail.com"
        },
        {
            icon: <Clock size={24} />,
            title: "Working Hours",
            description: contactData?.workingHours || "Monday - Friday: 9:00 AM - 6:00 PM"
        }
    ];

    return (
        <section className={`py-10 lg:py-15 px-6 md:px-12 lg:px-24 bg-background transition-colors duration-300 ${className}`}>
            <div className="max-w-[1600px] mx-auto">
                <div className="max-w-3xl space-y-4 mb-12">
                    <h2 className="text-4xl md:text-5xl font-playfair font-medium text-foreground leading-tight">
                        Reach Our <span className="italic text-primary">Expert Team</span>
                    </h2>
                    <p className="text-base md:text-lg text-foreground/60 font-poppins leading-relaxed">
                        Send a message through the form below. If your enquiry is time sensitive, please use the contact details provided below.
                    </p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
                    {contactDetails.map((detail, index) => (
                        <CompDetailCard
                            key={index}
                            icon={detail.icon}
                            title={detail.title}
                            description={detail.description}
                            variant={index % 2 === 0 ? "dark" : "primary"}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}