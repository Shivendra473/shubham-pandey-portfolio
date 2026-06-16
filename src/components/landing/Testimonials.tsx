import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Priya Verma",
    role: "Web Developer · Bengaluru",
    text: "The Web Development program gave me real project experience. I landed my first job within 2 months of completing the certification.",
  },
  {
    name: "Rahul Singh",
    role: "Digital Marketer · Lucknow",
    text: "Trainers are incredible and supportive. The placement cell helped me get into a leading agency — life-changing platform!",
  },
  {
    name: "Ayesha Khan",
    role: "Graphic Designer · Hyderabad",
    text: "Affordable, government-certified and genuinely practical. I built a portfolio that clients trust. Highly recommended.",
  },
  {
    name: "Vikram Patel",
    role: "Data Analyst · Ahmedabad",
    text: "From zero coding knowledge to working on real data science projects — the AI program changed my career trajectory.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const r = reviews[i];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Success Stories
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">
            Real students. Real careers.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="relative rounded-3xl bg-card border border-border p-8 sm:p-12 shadow-card-hover">
            <Quote className="absolute -top-5 left-8 h-12 w-12 text-accent" />
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-lg sm:text-xl text-foreground leading-relaxed">"{r.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-accent grid place-items-center text-accent-foreground font-bold">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-primary">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => setI((x) => (x - 1 + reviews.length) % reviews.length)}
              aria-label="Previous"
              className="h-10 w-10 rounded-full bg-card border border-border grid place-items-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-1.5">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Review ${idx + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === idx ? "w-8 bg-accent" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setI((x) => (x + 1) % reviews.length)}
              aria-label="Next"
              className="h-10 w-10 rounded-full bg-card border border-border grid place-items-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
