import { motion, useReducedMotion } from "framer-motion";
import fieldImg from "@/assets/image-22.jpeg";
import news18Logo from "@/assets/News18.svg";

const NEWS18 = {
  channel: "News18",
  yearFrom: "2015",
  yearTill: "Present",
  title: "Field reporting that puts people first",
  lead: "From village ground reports to primetime bulletins — delivering verified news from Uttar Pradesh and beyond for News18 audiences nationwide.",
  body: "Covered elections, monsoon disasters, rural development, and breaking political stories with on-ground reporting, live crosses, and in-depth Hindi & English coverage. Trusted for accurate, timely journalism when it matters most.",
  highlights: ["Live field reporting", "Political & social beats", "Hindi & English coverage"],
};

export function NewsChannel() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="work" className="relative bg-background py-12 sm:py-14">
      <div className="container mx-auto px-4">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl bg-gradient-hero text-primary-foreground shadow-card-hover ring-1 ring-white/10"
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

          <div className="relative grid items-stretch gap-4 p-5 sm:gap-5 sm:p-7 lg:grid-cols-[280px_1fr] lg:gap-6 lg:p-8 xl:grid-cols-[300px_1fr]">
            {/* Box 1 — image */}
            <div className="relative aspect-[1080/1252] overflow-hidden rounded-xl border border-white/10 lg:aspect-auto lg:min-h-0 lg:self-stretch">
              <img
                src={fieldImg}
                alt="Rajesh Pandey reporting from the field for News18"
                width={1080}
                height={1252}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>

            {/* Right column — boxes 2 & 3 */}
            <div className="relative grid min-h-0 grid-rows-[auto_1fr] gap-4 sm:gap-5 lg:gap-6">
              {/* Background News18 — top-right watermark area */}
              <div
                className="pointer-events-none absolute right-0 top-0 z-[5] h-full w-[55%] overflow-hidden pr-1 pt-1 sm:pr-2 sm:pt-2"
                aria-hidden
              >
                <img
                  src={news18Logo}
                  alt=""
                  className="h-full w-full object-contain object-right-top opacity-[0.32]"
                />
              </div>

              {/* Box 2 — year from till */}
              <div className="relative z-10 flex items-center rounded-xl border border-white/15 bg-gradient-to-r from-white/[0.1] via-white/[0.04] to-transparent px-4 py-3 sm:px-5 sm:py-3.5">
                <p className="text-sm font-semibold tracking-wide text-white/90 sm:text-base">
                  <span className="text-accent">{NEWS18.yearFrom}</span>
                  <span className="mx-2 text-white/40">—</span>
                  <span className="text-accent">{NEWS18.yearTill}</span>
                  <span className="mx-2 text-white/40">·</span>
                  <span className="font-bold text-white">{NEWS18.channel}</span>
                </p>
              </div>

              {/* Box 3 — content */}
              <div className="relative z-10 flex min-h-0 flex-col justify-between rounded-xl border border-white/10 bg-gradient-to-r from-white/[0.07] via-white/[0.03] to-transparent p-5 sm:p-6">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                    Featured Channel
                  </p>
                  <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-[1.75rem] xl:text-3xl">
                    {NEWS18.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base lg:mt-4 lg:text-[0.95rem] lg:leading-relaxed xl:text-base">
                    {NEWS18.lead}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/60 lg:text-[0.9rem] xl:text-sm">
                    {NEWS18.body}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2 lg:mt-4">
                  {NEWS18.highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1 text-xs font-medium text-white/75 sm:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
