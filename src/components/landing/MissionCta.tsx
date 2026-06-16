import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function MissionCta() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative bg-background py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl bg-gradient-hero text-primary-foreground shadow-card-hover ring-1 ring-white/10"
        >
          {/* Blueprint grid */}
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
          <div className="pointer-events-none absolute -right-6 -top-10 select-none text-[clamp(6rem,14vw,11rem)] font-bold leading-none tracking-tighter text-white/[0.04]">
            UP
          </div>
          <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-accent via-saffron to-accent/40" />

          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-14 lg:p-14 xl:p-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                Join the Movement
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl xl:text-[2.65rem]">
                Be a Part of the{" "}
                <span className="text-gradient-accent">Mission</span>
              </h2>

              <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
                Use your experience to train, mentor, and inspire entrepreneurs who are
                ready to build the future of Uttar Pradesh&apos;s business ecosystem.
              </p>

              <p className="mt-4 text-sm font-medium leading-relaxed text-white/55 sm:text-base">
                Apply now and contribute to empowering entrepreneurship across Uttar Pradesh.
              </p>
            </div>

            <div className="flex shrink-0 flex-col items-stretch gap-4 sm:items-start lg:items-end">
              <a
                href="#lead-form"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground shadow-accent transition-all hover:scale-[1.03] hover:shadow-[0_16px_40px_-12px_oklch(0.58_0.14_162/0.55)] sm:text-base"
              >
                Apply Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="text-center text-xs text-white/45 lg:text-right">
                MSME GoI · 75 Districts · Entrepreneurship Mentors
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
