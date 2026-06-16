import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, MapPin, Users, Award } from "lucide-react";

const pillars = [
  {
    num: "01",
    icon: ShieldCheck,
    title: "Government-Backed Credibility",
    desc: "MSME GoI incubator under PPP with Uttar Pradesh — trusted since 1999.",
  },
  {
    num: "02",
    icon: MapPin,
    title: "Reach Across 75 Districts",
    desc: "Mentor entrepreneurs statewide through structured programmes and live sessions.",
  },
  {
    num: "03",
    icon: Users,
    title: "Lead With Real Impact",
    desc: "Convert your industry experience into outcomes — from business ideas to execution.",
  },
  {
    num: "04",
    icon: Award,
    title: "Join Expert Network",
    desc: "Stand alongside professionals, faculty, and sector specialists building India's MSME ecosystem.",
  },
] as const;

const credentials = ["MSME GoI", "Uttar Pradesh", "Since 1999", "75 Districts"];

export function WhyChooseUs() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="why"
      className="relative overflow-hidden bg-primary text-primary-foreground py-24 sm:py-28"
    >
      {/* Blueprint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, oklch(1 0 0 / 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, oklch(1 0 0 / 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />
      <div className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none text-[clamp(10rem,22vw,18rem)] font-bold leading-none tracking-tighter text-white/[0.03]">
        75
      </div>
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="container relative mx-auto px-4">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-10 xl:gap-16">
          {/* Editorial headline */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              Why Choose Us
            </div>

            <h2 className="mt-6 text-[2rem] font-bold leading-[1.08] sm:text-4xl xl:text-[2.75rem]">
              Built for mentors who shape{" "}
              <span className="text-gradient-accent">nation-building</span>{" "}
              enterprises
            </h2>

            <p className="mt-5 max-w-md text-base leading-relaxed text-white/65">
              IID isn&apos;t another training portal — it&apos;s a government-recognized
              incubation platform where experienced professionals guide the next wave of
              entrepreneurs across Uttar Pradesh.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {credentials.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium tracking-wide text-white/75"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Pillars — editorial stack */}
          <div className="relative lg:col-span-7">
            <div
              className="pointer-events-none absolute bottom-4 left-[1.65rem] top-4 hidden w-px bg-gradient-to-b from-accent/70 via-white/15 to-transparent sm:block"
              aria-hidden
            />

            <ul className="space-y-0">
              {pillars.map((item, idx) => (
                <motion.li
                  key={item.num}
                  initial={reduceMotion ? false : { opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.55,
                    delay: reduceMotion ? 0 : idx * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative border-b border-white/10 py-7 first:pt-0 last:border-b-0 last:pb-0 sm:pl-14"
                >
                  <span
                    className="absolute left-0 top-7 hidden h-3.5 w-3.5 rounded-full border-2 border-primary bg-accent shadow-[0_0_0_4px_oklch(0.58_0.14_162/0.25)] sm:block"
                    aria-hidden
                  />

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                    <div className="flex items-center gap-4 sm:w-36 sm:shrink-0 sm:flex-col sm:items-start sm:gap-2">
                      <span className="text-3xl font-bold leading-none tracking-tight text-white/20 transition-colors group-hover:text-accent/80">
                        {item.num}
                      </span>
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-accent transition-all group-hover:border-accent/40 group-hover:bg-accent group-hover:text-accent-foreground group-hover:shadow-accent">
                        <item.icon className="h-5 w-5" strokeWidth={1.75} />
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold tracking-tight sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/65 sm:text-[0.95rem]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
