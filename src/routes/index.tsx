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
import { NewsChannel } from "@/components/landing/NewsChannel";
import { NewsChannelSecond } from "@/components/landing/NewsChannelSecond";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Institute For Industrial Development" },
      {
        name: "description",
        content:
          "Government-certified skill development & education platform. Learn web development, digital marketing, AI, design and more with placement support.",
      },
      { property: "og:title", content: "Institute For Industrial Development" },
      {
        property: "og:description",
        content:
          "Join 15,000+ students. Certified courses, expert trainers, and placement support for India's future workforce.",
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
        <NewsChannel />
        <NewsChannelSecond />
      </main>
      <Footer />
    </div>
  );
}
