import { motion } from "framer-motion";
import { Megaphone, Code2, Palette, BrainCircuit, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Master SEO, social media, performance ads and analytics to grow real brands.",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Build modern, responsive websites and apps with React, Node.js and databases.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    desc: "Create professional visuals using Photoshop, Illustrator and design principles.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Data Science",
    desc: "Learn Python, machine learning, and data analysis for the next-gen workforce.",
  },
];

export function Programs() {
  return (
    <section id="programs" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Featured Programs
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">
            Industry-aligned courses built for India's future
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-accent grid place-items-center text-accent-foreground shadow-accent">
                <p.icon className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-primary">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <a
                href="#lead-form"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-2.5 transition-all"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
