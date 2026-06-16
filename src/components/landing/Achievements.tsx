import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type Achievement = {
  heading: string;
  date: string;
  description: string;
  youtubeId: string;
  youtubeUrl: string;
};

const ACHIEVEMENTS: Achievement[] = [
  {
    heading: "Election Ground Report — Uttar Pradesh",
    date: "March 2024",
    description:
      "On-ground coverage from polling booths and rally grounds, bringing voters' voices and real-time updates to primetime.",
    youtubeId: "jNQXAC9IVRw",
    youtubeUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
  },
  {
    heading: "Live Flood Coverage — Eastern UP",
    date: "July 2023",
    description:
      "Breaking live crosses from flood-affected districts with rescue operations, relief efforts, and community impact stories.",
    youtubeId: "aqz-KE-bpKQ",
    youtubeUrl: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
  },
  {
    heading: "Exclusive Interview Series",
    date: "November 2022",
    description:
      "In-depth conversations with policymakers and grassroots leaders on governance, development, and public accountability.",
    youtubeId: "M7lc1UVf-VE",
    youtubeUrl: "https://www.youtube.com/watch?v=M7lc1UVf-VE",
  },
  {
    heading: "Field Documentary — Rural India",
    date: "January 2022",
    description:
      "A long-form report highlighting livelihood challenges, local enterprise, and change makers across rural Uttar Pradesh.",
    youtubeId: "ysz5S6PUM-U",
    youtubeUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
  },
];

function AchievementCard({ item, index }: { item: Achievement; index: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        reduceMotion
          ? undefined
          : { scale: 1.02, y: -6, transition: { type: "spring", stiffness: 320, damping: 22 } }
      }
      className="origin-center overflow-hidden rounded-2xl border border-border bg-card shadow-card ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-card-hover"
    >
      <div className="grid min-h-[320px] grid-cols-1 md:grid-cols-[2fr_3fr]">
        <div className="relative aspect-video bg-black md:aspect-auto md:min-h-0">
          <iframe
            src={`https://www.youtube.com/embed/${item.youtubeId}`}
            title={item.heading}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 h-full w-full"
          />
        </div>

        <div className="flex flex-col justify-center gap-3 p-5 sm:p-6 lg:p-7">
          <time className="text-sm font-medium text-accent">{item.date}</time>
          <h3 className="text-xl font-bold leading-snug tracking-tight text-primary sm:text-2xl">
            {item.heading}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {item.description}
          </p>
          <div className="pt-1">
            <a
              href={item.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-accent bg-accent/5 px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              View
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Achievements() {
  return (
    <section id="reportings" className="bg-secondary/40 pb-12 pt-8 sm:pb-16 sm:pt-10">
      <div className="container mx-auto px-4">
        <div className="mb-8 sm:mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Highlights
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            My Reportings
          </h2>
        </div>

        <div className="flex flex-col gap-6 overflow-visible py-1 sm:gap-8">
          {ACHIEVEMENTS.map((item, index) => (
            <AchievementCard key={item.youtubeId} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
