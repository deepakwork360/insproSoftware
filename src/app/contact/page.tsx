import ContactBanner from "./sections/contact-banner";
import CompDetail from "./sections/compDetail";
import FormPart from "./sections/formPart";
import Map from "./sections/Map";

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