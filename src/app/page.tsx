import HomePage from "./home-page/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "InsproSoftware | Web, Mobile & Software Development Company",
  description: "InsproSoftware is a modern software development company specializing in custom web development, mobile applications, UI/UX design, and scalable digital solutions for startups and businesses.",
};

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
