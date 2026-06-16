import { motion, useReducedMotion } from "framer-motion";
import fieldImg from "@/assets/image-44.jpeg";
import newsnationLogo from "@/assets/news-nation.png";

const NEWS_NATION = {
  channel: "News Nation",
  yearFrom: "2024",
  yearTill: "2025",
  title: "Breaking news with clarity and conviction",
  lead: "Anchoring prime-time segments and special reports that bring Uttar Pradesh's most important stories to millions of viewers across India.",
  body: "Led coverage on state politics, public policy, and citizen issues — combining studio presentation with sharp analysis and responsible, fact-led journalism on one of India's largest news networks.",
  highlights: ["Prime-time anchoring", "Political analysis", "Special reports"],
};

export function NewsChannelSecond() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        reduceMotion
          ? undefined
          : { scale: 1.02, y: -8, transition: { type: "spring", stiffness: 320, damping: 22 } }
      }
      className="relative origin-center overflow-hidden rounded-2xl bg-gradient-hero text-primary-foreground shadow-card-hover ring-1 ring-white/10 transition-shadow duration-300 hover:shadow-elevated"
    >
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage: `
                linear-gradient(to right, oklch(1 0 0 / 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, oklch(1 0 0 / 0.05) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />
          <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-accent via-saffron to-accent/40" />

          <div className="relative grid items-stretch gap-4 p-5 sm:gap-5 sm:p-7 lg:grid-cols-[1fr_280px] lg:gap-6 lg:p-8 xl:grid-cols-[1fr_300px]">
            {/* Content column (left) — branding from left */}
            <div className="relative order-1 grid min-h-0 grid-rows-[auto_1fr] gap-4 text-left sm:gap-5 lg:col-start-1 lg:row-start-1 lg:gap-6">
              {/* Background logo — top-left */}
              <div
                className="pointer-events-none absolute left-0 top-0 z-[5] h-full w-[55%] overflow-hidden pl-1 pt-1 sm:pl-2 sm:pt-2"
                aria-hidden
              >
                <img
                  src={newsnationLogo}
                  alt=""
                  className="h-full w-full object-contain object-left-top opacity-[0.32]"
                />
              </div>

              {/* Box 2 — year from till */}
              <div className="relative z-10 flex items-center justify-start rounded-xl border border-white/15 bg-gradient-to-l from-white/[0.1] via-white/[0.04] to-transparent px-4 py-3 text-left sm:px-5 sm:py-3.5">
                <p className="text-left text-sm font-semibold tracking-wide text-white/90 sm:text-base">
                  <span className="text-accent">{NEWS_NATION.yearFrom}</span>
                  <span className="mx-2 text-white/40">—</span>
                  <span className="text-accent">{NEWS_NATION.yearTill}</span>
                  <span className="mx-2 text-white/40">·</span>
                  <span className="font-bold text-white">{NEWS_NATION.channel}</span>
                </p>
              </div>

              {/* Box 3 — content */}
              <div className="relative z-10 flex min-h-0 flex-col items-start justify-between rounded-xl border border-white/10 bg-gradient-to-l from-white/[0.07] via-white/[0.03] to-transparent p-5 text-left sm:p-6">
                <div className="w-full text-left">
                  <p className="text-left text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                    Featured Channel
                  </p>
                  <h2 className="mt-3 text-left text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-[1.75rem] xl:text-3xl">
                    {NEWS_NATION.title}
                  </h2>
                  <p className="mt-3 text-left text-sm leading-relaxed text-white/80 sm:text-base lg:mt-4 lg:text-[0.95rem] lg:leading-relaxed xl:text-base">
                    {NEWS_NATION.lead}
                  </p>
                  <p className="mt-3 text-left text-sm leading-relaxed text-white/60 lg:text-[0.9rem] xl:text-sm">
                    {NEWS_NATION.body}
                  </p>
                </div>

                <div className="mt-5 flex w-full flex-wrap justify-start gap-2 lg:mt-4">
                  {NEWS_NATION.highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1 text-left text-xs font-medium text-white/75 sm:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Image (right) */}
            <div className="relative order-2 aspect-[1080/1187] overflow-hidden rounded-xl border border-white/10 lg:col-start-2 lg:row-start-1 lg:aspect-auto lg:min-h-0 lg:self-stretch">
              <img
                src={fieldImg}
                alt="Rajesh Pandey reporting for Zee News"
                width={1080}
                height={1187}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
          </div>
    </motion.div>
  );
}
