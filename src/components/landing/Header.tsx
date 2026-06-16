import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#home" },
  { label: "Professional Journey", href: "#journey" },
  { label: "My Reportings", href: "#reportings" },
  { label: "Connect", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-border bg-background/90 backdrop-blur-md">
        <div className="container mx-auto flex h-15 items-center justify-between px-4 py-3">
          <a href="#home" className="text-lg font-bold tracking-tight text-primary sm:text-xl">
            Shubham Pandey<span className="text-accent">.</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-lg border-2 border-accent bg-accent/5 px-5 py-2 text-sm font-semibold text-accent transition-all hover:bg-accent hover:text-accent-foreground sm:inline-flex"
            >
              Say Hello
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="rounded-md p-2 text-primary hover:bg-secondary lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-border bg-background lg:hidden"
          >
            <div className="container mx-auto flex flex-col gap-1 px-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-lg border-2 border-accent bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground"
              >
                Say Hello
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
