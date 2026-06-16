import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import iidLogo from "@/assets/iid-logo.webp.asset.json";

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/institute-for-industrial-development" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/iid.org.in" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/iid.org.in" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@iidorgin" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative border-t border-border bg-background text-foreground">
      <div className="container relative mx-auto px-4 py-8 sm:py-10">
        {/* Row 1 — logo, social, contact */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <a href="#home" className="inline-flex w-fit items-center">
            <img
              src={iidLogo.url}
              alt="Institute For Industrial Development"
              width={140}
              height={40}
              className="h-8 w-auto sm:h-9"
            />
          </a>

          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3">
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
              <a href="mailto:support@iid.org.in" className="hover:text-accent transition-colors">
                support@iid.org.in
              </a>
              <span className="mx-2 text-border" aria-hidden>
                ·
              </span>
              <a href="tel:+911800123456" className="hover:text-accent transition-colors">
                1800-123-456
              </a>
            </p>
          </div>
        </div>

        {/* Row 2 — legal */}
        <div className="mt-6 flex flex-col gap-2 border-t border-border pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Institute For Industrial Development</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
