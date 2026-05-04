import ContactBanner from "./sections/contact-banner";
import CompDetail from "./sections/compDetail";
import FormPart from "./sections/formPart";
import Map from "./sections/Map";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch for Expert Solutions",
  description: "Have a project in mind? Contact Insprosoftware today. Our experts are ready to help you with your next big idea. Reach out via form, email, or phone.",
};

export default function Contact() {
    return (
        <div>
            <ContactBanner />
            <CompDetail />
            <FormPart />
            <Map />
        </div>
    )
}