import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail, Twitter, Youtube } from "lucide-react";
import profileImg from "@/assets/image-11.jpeg";

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

const socials = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Mail, label: "Email", href: "#contact" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-accent/8 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-accent-soft blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-3 pb-10 sm:pt-5 lg:pt-6 lg:pb-14">
        <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_360px] lg:gap-8 xl:grid-cols-[1fr_380px]">
          {/* Left — intro (matches image height on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex h-full min-h-0 flex-col justify-between gap-8 lg:gap-6"
          >
            <div>
              <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold text-accent lg:text-base">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Journalist & Storyteller
                </span>
                <span className="hidden text-muted-foreground/50 sm:inline">·</span>
                <span className="text-sm font-medium text-muted-foreground">
                  On the record since 2012
                </span>
              </span>

              <h1 className="mt-3 text-3xl font-extrabold leading-[1.05] tracking-tight text-primary sm:text-4xl lg:mt-4 lg:text-5xl xl:text-[3.25rem]">
                {JOURNALIST.name}
                <span className="text-accent">.</span>
              </h1>

              <div className="mt-3 space-y-1 text-base font-medium text-muted-foreground lg:mt-4 lg:text-lg">
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

              <p className="mt-5 max-w-xl text-lg font-medium leading-snug text-primary sm:text-xl lg:mt-6 lg:text-2xl lg:leading-snug">
                {JOURNALIST.tagline.before}
                <span className="text-accent">{JOURNALIST.tagline.highlight1}</span>
                {JOURNALIST.tagline.middle}
                <span className="text-primary underline decoration-accent/40 decoration-2 underline-offset-4">
                  {JOURNALIST.tagline.highlight2}
                </span>
                {JOURNALIST.tagline.after}
              </p>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground lg:mt-5 lg:text-lg lg:leading-relaxed">
                {JOURNALIST.bio}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-accent bg-accent/5 px-5 py-2.5 text-sm font-semibold text-accent transition-all hover:bg-accent hover:text-accent-foreground lg:px-6 lg:py-3 lg:text-base"
                >
                  View Stories
                  <ArrowDown className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary shadow-card transition-all hover:border-primary/20 hover:shadow-card-hover lg:px-6 lg:py-3 lg:text-base"
                >
                  Get in Touch
                </a>
              </div>

              <div className="mt-5 flex items-center gap-2.5">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-accent hover:text-accent lg:h-11 lg:w-11"
                  >
                    <Icon className="h-4 w-4 lg:h-5 lg:w-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — image only */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto w-full max-w-xs sm:max-w-sm lg:mx-0 lg:max-w-none"
          >
            <div className="relative aspect-[1080/1343] w-full overflow-hidden rounded-xl border border-border shadow-card">
              <img
                src={profileImg}
                alt={JOURNALIST.name}
                width={1080}
                height={1343}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
