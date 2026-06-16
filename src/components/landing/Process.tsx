import { motion } from "framer-motion";
import { UserPlus, BookMarked, Laptop, Award } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Register", desc: "Create your free account in under a minute." },
  { icon: BookMarked, title: "Choose Course", desc: "Pick from 50+ certified programs aligned to your career." },
  { icon: Laptop, title: "Learn & Practice", desc: "Attend live sessions, work on real projects, get mentored." },
  { icon: Award, title: "Get Certified", desc: "Earn a government-recognized certificate and start your career." },
];

export function Process() {
  return (
    <section id="process" className="py-20 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Your Path
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">
            How it works — in 4 simple steps
          </h2>
        </div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* connector */}
          <div className="hidden lg:block absolute top-9 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-accent/30 via-accent/60 to-accent/30" />
          {steps.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative text-center"
            >
              <div className="relative mx-auto h-18 w-18 rounded-2xl bg-card border border-border shadow-card grid place-items-center text-primary z-10">
                <s.icon className="h-8 w-8" />
                <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-accent text-accent-foreground text-xs font-bold grid place-items-center shadow-accent">
                  {idx + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-xs mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
