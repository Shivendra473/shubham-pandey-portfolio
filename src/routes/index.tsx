import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { LeadForm } from "@/components/landing/LeadForm";
import { Programs } from "@/components/landing/Programs";
import { WhoCanApply } from "@/components/landing/WhoCanApply";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { Testimonials } from "@/components/landing/Testimonials";
import { Process } from "@/components/landing/Process";
import { Footer } from "@/components/landing/Footer";
import { ProfessionalJourney } from "@/components/landing/ProfessionalJourney";
import { Achievements } from "@/components/landing/Achievements";
import { Contact } from "@/components/landing/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shubham Pandey - Senior Journalist at News18" },
      {
        name: "description",
        content:
          "Portfolio of Shubham Pandey, Senior Journalist based in Lucknow, U.P. Covering politics, society, and breaking news through field reporting, live anchoring, and investigative stories for News18 and national broadcasters.",
      },
      { property: "og:title", content: "Shubham Pandey - Senior Journalist at News18" },
      {
        property: "og:description",
        content:
          "Truthful, timely stories from the ground to primetime. Explore Shubham Pandey's professional journey, reporting highlights, and get in touch for news tips and press inquiries.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        {/* <WhyChooseUs /> */}
        <ProfessionalJourney />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
