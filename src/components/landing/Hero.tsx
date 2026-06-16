import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail, Twitter, Youtube } from "lucide-react";
import profileImg from "@/assets/hero-1.jpg";
import news18Logo from "@/assets/News18.svg";
import zeeLogo from "@/assets/zee.png";
import newsnationLogo from "@/assets/newsnation.jpg";

const JOURNALIST = {
  name: "Rajesh Pandey",
  role: "Senior Journalist & News Anchor",
  location: "Lucknow, U.P., India",
  tagline: {
    before: "I tell ",
    highlight1: "truthful",
    middle: ", ",
    highlight2: "timely",
    after: " stories — from the ground to primetime.",
  },
  bio: "Covering politics, society, and breaking news for national broadcasters. Experienced in field reporting, live anchoring, and long-form investigative pieces across Hindi and English media.",
};

const outlets = [
  { src: zeeLogo, alt: "Zee News" },
  { src: newsnationLogo, alt: "NewsNation" },
  { src: news18Logo, alt: "News18" },
];

const socials = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Mail, label: "Email", href: "#contact" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      {/* Soft light background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-accent/8 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-accent-soft blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-4 pb-12 sm:pt-6 lg:pt-8 lg:pb-20">
        <div className="grid items-stretch gap-8 lg:grid-cols-[1fr_480px] lg:gap-10 xl:grid-cols-[1fr_540px]">
          {/* Left — intro */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between lg:min-h-full lg:py-2"
          >
            <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold text-accent lg:text-base">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Journalist & Storyteller
              </span>
              <span className="hidden text-muted-foreground/50 sm:inline">·</span>
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground sm:text-sm sm:normal-case sm:tracking-normal">
                On the record since 2012
              </span>
            </span>

            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-primary sm:text-5xl lg:mt-5 lg:text-6xl">
              {JOURNALIST.name}
              <span className="text-accent">.</span>
            </h1>

            <div className="mt-3 flex flex-col gap-1.5 text-sm font-medium text-muted-foreground sm:text-base lg:mt-5 lg:text-lg">
              <p>
                <span className="text-accent">Role</span>
                <span className="mx-2 text-border">·</span>
                {JOURNALIST.role}
              </p>
              <p>
                <span className="text-accent">Location</span>
                <span className="mx-2 text-border">·</span>
                {JOURNALIST.location}
              </p>
            </div>

            <p className="mt-5 max-w-2xl text-lg font-medium leading-snug text-primary sm:text-xl lg:mt-6 lg:text-2xl lg:leading-snug">
              {JOURNALIST.tagline.before}
              <span className="text-accent">{JOURNALIST.tagline.highlight1}</span>
              {JOURNALIST.tagline.middle}
              <span className="text-primary underline decoration-accent/40 decoration-2 underline-offset-4">
                {JOURNALIST.tagline.highlight2}
              </span>
              {JOURNALIST.tagline.after}
            </p>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground lg:mt-5 lg:text-lg">
              {JOURNALIST.bio}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 lg:mt-8">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-accent bg-accent/5 px-6 py-3 text-sm font-semibold text-accent transition-all hover:bg-accent hover:text-accent-foreground lg:px-7 lg:py-3.5 lg:text-base"
              >
                View Stories
                <ArrowDown className="h-4 w-4 lg:h-5 lg:w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-primary shadow-card transition-all hover:border-primary/20 hover:shadow-card-hover lg:px-7 lg:py-3.5 lg:text-base"
              >
                Get in Touch
              </a>
            </div>

            <div className="mt-5 flex items-center gap-2.5 lg:mt-6">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-accent hover:text-accent lg:h-12 lg:w-12"
                >
                  <Icon className="h-4 w-4 lg:h-5 lg:w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — profile */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto flex w-full max-w-md flex-col lg:mx-0 lg:max-w-none"
          >
            {/* Profile card */}
            <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card-hover">
              <div className="flex shrink-0 items-center justify-between border-b border-border bg-secondary/60 px-4 py-2.5">
                <span className="text-xs font-semibold text-muted-foreground">Featured Profile</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                  On Air
                </span>
              </div>
              <div className="relative min-h-[280px] flex-1 overflow-hidden sm:min-h-[360px] lg:min-h-[420px]">
                <img
                  src={profileImg}
                  alt={JOURNALIST.name}
                  width={640}
                  height={480}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent" />
              </div>
            </div>

            {/* Outlet logos */}
            <div className="mt-4 rounded-2xl border border-border bg-card p-5 shadow-card">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Featured On
              </p>
              <div className="flex flex-wrap items-center gap-4">
                {outlets.map((outlet) => (
                  <img
                    key={outlet.alt}
                    src={outlet.src}
                    alt={outlet.alt}
                    className="h-7 w-auto object-contain opacity-80 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
