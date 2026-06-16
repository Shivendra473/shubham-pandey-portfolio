import { motion, useReducedMotion } from "framer-motion";
import {
  Calculator,
  Landmark,
  Briefcase,
  GraduationCap,
  Presentation,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const roles: { title: string; icon: LucideIcon }[] = [
  { title: "CA / CA Inter", icon: Calculator },
  { title: "Retired Bankers", icon: Landmark },
  { title: "Industry Experts", icon: Briefcase },
  { title: "Research Scholars", icon: GraduationCap },
  { title: "Business / Management Faculty", icon: Presentation },
];

export function WhoCanApply() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="who-can-apply" className="bg-secondary/40 py-10 sm:py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-2xl border border-border bg-background shadow-card"
        >
          <div className="flex flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5">
            <div className="shrink-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                Eligibility
              </p>
              <h2 className="mt-1 text-xl font-bold tracking-tight text-primary sm:text-2xl">
                Who Can <span className="text-gradient-accent">Apply?</span>
              </h2>
            </div>
            <a
              href="#lead-form"
              className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-4 py-2 text-xs font-semibold text-primary transition-all hover:border-accent/40 hover:bg-accent hover:text-accent-foreground sm:text-sm"
            >
              Apply now
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="border-t border-border bg-gradient-to-r from-secondary/30 via-background to-secondary/30">
            <div className="flex flex-nowrap overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {roles.map((role, idx) => (
                <motion.a
                  key={role.title}
                  href="#lead-form"
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: reduceMotion ? 0 : idx * 0.06 }}
                  className="group relative flex min-w-[9.25rem] flex-1 flex-col items-center gap-2.5 px-3 py-4 text-center transition-colors hover:bg-accent/[0.06] sm:min-w-0 sm:px-4 sm:py-5"
                >
                  {idx > 0 && (
                    <span
                      className="pointer-events-none absolute left-0 top-1/4 h-1/2 w-px bg-gradient-to-b from-transparent via-border to-transparent"
                      aria-hidden
                    />
                  )}

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent ring-1 ring-accent/20 transition-all group-hover:bg-accent group-hover:text-accent-foreground group-hover:ring-accent/40 group-hover:shadow-accent">
                    <role.icon className="h-4 w-4" strokeWidth={1.75} />
                  </div>

                  <span className="text-[11px] font-semibold leading-snug text-primary sm:text-xs">
                    {role.title}
                  </span>

                  <span className="absolute inset-x-4 bottom-0 h-0.5 scale-x-0 rounded-full bg-gradient-to-r from-accent to-saffron transition-transform duration-300 group-hover:scale-x-100" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
