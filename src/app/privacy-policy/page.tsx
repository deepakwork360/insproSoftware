import { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | Inspro Software",
  description: "Learn about how Inspro Software collects, uses, and protects your personal data with precision engineered security.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
