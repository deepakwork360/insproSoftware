import CompDetailCard from "@/components/ui/Company-detail-card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactDetails = [
    {
        icon: <MapPin size={24} />,
        title: "Visit Our Office",
        description: "B-127, Block B, Noida Sector 2, Uttarpradesh-201301"
    },
    {
        icon: <Phone size={24} />,
        title: "Call Us Directly",
        description: "+91 9990760789"
    },
    {
        icon: <Mail size={24} />,
        title: "Email Support",
        description: "infotech@gmail.com"
    },
    {
        icon: <Clock size={24} />,
        title: "Working Hours",
        description: "Monday - Friday: 9:00 AM - 6:00 PM"
    }
];

export default function CompDetail() {
    return (
        <section className="py-10 px-6 md:px-12 lg:px-24 bg-background transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl space-y-4 mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-none text-primary text-[10px] uppercase tracking-[0.3em] font-mono font-bold">
                        Direct.Connect
                    </div>
                    <h2 className="text-4xl md:text-5xl font-playfair font-medium text-foreground leading-tight">
                        Reach Our <span className="italic text-primary">Expert Team</span>
                    </h2>
                    <p className="text-base md:text-lg text-foreground/60 font-poppins leading-relaxed">
                        Send a message through the form below. If your enquiry is time sensitive, please use the contact details provided below.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {contactDetails.map((detail, index) => (
                        <CompDetailCard 
                            key={index}
                            icon={detail.icon}
                            title={detail.title}
                            description={detail.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}