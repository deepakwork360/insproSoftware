import HomePage from "./home-page/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Software Development Company",
  description: "Leading software development company specializing in custom web applications, mobile apps, and enterprise solutions. We turn your vision into reality.",
};

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
