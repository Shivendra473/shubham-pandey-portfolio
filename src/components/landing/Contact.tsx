import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Copy, Check, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

const CONTACT = {
  email: "shubham.pandey@email.com",
  phones: ["+918429808088", "+917379721674"] as const,
};

export function Contact() {
  const reduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Could not copy email");
    }
  }

  return (
    <section id="contact" className="bg-background pb-12 pt-8 sm:pb-16 sm:pt-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl"
        >
          <div className="mb-8 text-center sm:mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Reach Out1
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Every Story Matters — Get in Touch
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card ring-1 ring-black/5 sm:p-8 lg:p-10">
            <p className="text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
              Whether it&apos;s breaking news, a community event, an exclusive tip, or a press
              inquiry, I&apos;m always interested in hearing stories that matter. Reach out today
              and let&apos;s make your voice heard.
            </p>

            <div className="mt-8 border-b border-border pb-6 text-center">
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-2xl font-bold tracking-tight text-accent transition-colors hover:text-accent/80 sm:text-3xl"
              >
                {CONTACT.email}
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 rounded-lg border-2 border-accent bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90"
              >
                <Mail className="h-4 w-4" aria-hidden />
                Send Email
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:border-accent hover:text-accent"
              >
                {copied ? (
                  <Check className="h-4 w-4" aria-hidden />
                ) : (
                  <Copy className="h-4 w-4" aria-hidden />
                )}
                {copied ? "Copied" : "Copy Email"}
              </button>

              {/* s{CONTACT.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:border-accent hover:text-accent"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {phone}
                </a>
              ))} */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
