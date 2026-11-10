import "../components/resources/resources.css";
import type { Metadata } from "next";
import PageIntro from "../components/resources/PageIntro";
import ResourceCTA from "../components/resources/ResourceCTA";
import FAQExplorer from "./FAQExplorer";
export const metadata: Metadata = {
  title: "Frequently asked questions",
  description:
    "Get answers about Devlync’s services, nearshore teams, project process, and engagement models.",
  alternates: { canonical: "/faqs" },
};
export default function FAQsPage() {
  return (
    <>
      <PageIntro
        label="FAQs"
        title="FAQs About Our Software."
        accent="Development Services."
        description="Everything you need to know about building with Devlync. From the first conversation to what comes next."
      />
      <FAQExplorer />
      <ResourceCTA />
    </>
  );
}
