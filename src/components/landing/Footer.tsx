import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "" },
  { icon: Facebook, label: "Facebook", href: "" },
  { icon: Instagram, label: "Instagram", href: "" },
  { icon: Youtube, label: "YouTube", href: "" },
] as const;

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background text-foreground">
      <div className="container relative mx-auto px-4 py-8 sm:py-10">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <div className="flex items-center gap-2.5">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group flex h-8 w-8 items-center justify-center rounded-full border border-border bg-secondary text-primary/70 transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            <a href="mailto:support@iid.org.in" className="transition-colors hover:text-accent">
              support@iid.org.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
