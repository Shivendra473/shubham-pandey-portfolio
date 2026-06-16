import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { X, M as Menu, A as ArrowDown, T as Twitter, L as Linkedin, Y as Youtube, a as Mail, C as Check, b as Copy, F as Facebook, I as Instagram, E as ExternalLink } from "../_libs/lucide-react.mjs";
import { m as motion, u as useReducedMotion } from "../_libs/framer-motion.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const navItems = [
  { label: "About", href: "#home" },
  { label: "Professional Journey", href: "#journey" },
  { label: "My Reportings", href: "#reportings" },
  { label: "Connect", href: "#contact" }
];
function Header() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border bg-background/90 backdrop-blur-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex h-15 items-center justify-between px-4 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#home", className: "text-lg font-bold tracking-tight text-primary sm:text-xl", children: [
        "Shubham Pandey",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-7 lg:flex", children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: item.href,
          className: "text-sm font-medium text-foreground/80 transition-colors hover:text-accent",
          children: item.label
        },
        item.label
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#contact",
            className: "hidden items-center gap-2 rounded-lg border-2 border-accent bg-accent/5 px-5 py-2 text-sm font-semibold text-accent transition-all hover:bg-accent hover:text-accent-foreground sm:inline-flex",
            children: "Say Hello"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "aria-label": "Toggle menu",
            onClick: () => setOpen((o) => !o),
            className: "rounded-md p-2 text-primary hover:bg-secondary lg:hidden",
            children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
          }
        )
      ] })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.nav,
      {
        initial: { opacity: 0, y: -8 },
        animate: { opacity: 1, y: 0 },
        className: "border-t border-border bg-background lg:hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex flex-col gap-1 px-4 py-4", children: [
          navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: item.href,
              onClick: () => setOpen(false),
              className: "rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary",
              children: item.label
            },
            item.label
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#contact",
              onClick: () => setOpen(false),
              className: "mt-2 inline-flex items-center justify-center rounded-lg border-2 border-accent bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground",
              children: "Say Hello"
            }
          )
        ] })
      }
    )
  ] }) });
}
const profileImg = "/assets/image-11-Di66zPva.jpeg";
const JOURNALIST = {
  name: "Shubham Pandey",
  role: "Senior Journalist",
  location: "Lucknow, U.P., India",
  tagline: {
    before: "I tell ",
    highlight1: "truthful",
    middle: ", ",
    highlight2: "timely",
    after: " stories — from the ground to primetime."
  },
  bio: "Covering politics, society, and breaking news for national broadcasters. Experienced in field reporting, live anchoring, and long-form investigative pieces across Hindi and English media."
};
const socials = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Mail, label: "Email", href: "#contact" }
];
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", className: "relative overflow-hidden bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-0 -z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -left-24 h-80 w-80 rounded-full bg-accent/8 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-accent-soft blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 pt-3 pb-10 sm:pt-5 lg:pt-6 lg:pb-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-stretch gap-6 lg:grid-cols-[1fr_360px] lg:gap-8 xl:grid-cols-[1fr_380px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "flex h-full min-h-0 flex-col justify-between gap-8 lg:gap-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold text-accent lg:text-base", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-accent" }),
                  "Journalist & Storyteller"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden text-muted-foreground/50 sm:inline", children: "·" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-muted-foreground", children: "On the record since 2012" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 text-3xl font-extrabold leading-[1.05] tracking-tight text-primary sm:text-4xl lg:mt-4 lg:text-5xl xl:text-[3.25rem]", children: [
                JOURNALIST.name,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-1 text-base font-medium text-muted-foreground lg:mt-4 lg:text-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Role" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2 text-border", children: "·" }),
                  JOURNALIST.role
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Location" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2 text-border", children: "·" }),
                  JOURNALIST.location
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 max-w-xl text-lg font-medium leading-snug text-primary sm:text-xl lg:mt-6 lg:text-2xl lg:leading-snug", children: [
                JOURNALIST.tagline.before,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: JOURNALIST.tagline.highlight1 }),
                JOURNALIST.tagline.middle,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary underline decoration-accent/40 decoration-2 underline-offset-4", children: JOURNALIST.tagline.highlight2 }),
                JOURNALIST.tagline.after
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xl text-base leading-relaxed text-muted-foreground lg:mt-5 lg:text-lg lg:leading-relaxed", children: JOURNALIST.bio })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "#journey",
                    className: "inline-flex items-center gap-2 rounded-lg border-2 border-accent bg-accent/5 px-5 py-2.5 text-sm font-semibold text-accent transition-all hover:bg-accent hover:text-accent-foreground lg:px-6 lg:py-3 lg:text-base",
                    children: [
                      "View Stories",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "h-4 w-4" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "#contact",
                    className: "inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary shadow-card transition-all hover:border-primary/20 hover:shadow-card-hover lg:px-6 lg:py-3 lg:text-base",
                    children: "Get in Touch"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex items-center gap-2.5", children: socials.map(({ icon: Icon, label, href }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href,
                  "aria-label": label,
                  className: "flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-accent hover:text-accent lg:h-11 lg:w-11",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 lg:h-5 lg:w-5" })
                },
                label
              )) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.15 },
          className: "mx-auto w-full max-w-xs sm:max-w-sm lg:mx-0 lg:max-w-none",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[1080/1343] w-full overflow-hidden rounded-xl border border-border shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: profileImg,
              alt: JOURNALIST.name,
              width: 1080,
              height: 1343,
              className: "h-full w-full object-cover object-top"
            }
          ) })
        }
      )
    ] }) })
  ] });
}
const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "" },
  { icon: Facebook, label: "Facebook", href: "" },
  { icon: Instagram, label: "Instagram", href: "" },
  { icon: Youtube, label: "YouTube", href: "" }
];
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative border-t border-border bg-background text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container relative mx-auto px-4 py-8 sm:py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2.5", children: socialLinks.map(({ icon: Icon, label, href }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": label,
        className: "group flex h-8 w-8 items-center justify-center rounded-full border border-border bg-secondary text-primary/70 transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5" })
      },
      label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:support@iid.org.in", className: "transition-colors hover:text-accent", children: "support@iid.org.in" }) })
  ] }) }) });
}
const fieldImg$2 = "/assets/image-66-BsPXQONi.jpeg";
const news18Logo = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2027.8.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='300px'%20height='110px'%20viewBox='0%200%20300%20110'%20style='enable-background:new%200%200%20300%20110;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill-rule:evenodd;clip-rule:evenodd;fill:%23FFFFFF;}%20.st1{fill-rule:evenodd;clip-rule:evenodd;fill:%230A1F41;}%20.st2{fill-rule:evenodd;clip-rule:evenodd;fill:%23E02A26;}%20%3c/style%3e%3cg%3e%3crect%20y='27.4'%20class='st0'%20width='243.7'%20height='82.6'/%3e%3crect%20x='1.3'%20y='28.7'%20class='st1'%20width='241.2'%20height='80'/%3e%3cpolygon%20class='st0'%20points='17.1,44%2017.1,92.5%2028.8,92.5%2028.8,62.4%2046.2,92.5%2057.8,92.5%2057.8,44%2045.9,44%2045.9,72.2%2029.2,44%20'/%3e%3cpolygon%20class='st0'%20points='64.6,43.9%2064.6,92.5%20102.6,92.5%20102.5,81.8%2076.7,81.8%2076.7,72.1%2099.4,72.1%2099.4,61.8%2076.7,61.8%2076.7,54.7%20101.4,54.7%20101.4,43.9%20'/%3e%3cpolygon%20class='st0'%20points='104.9,43.9%20118.7,92.5%20130.9,92.5%20137.3,61.3%20143.9,92.5%20154.9,92.5%20168.8,44%20156.3,43.9%20149.6,72.5%20143.7,44%20130.7,43.9%20125.2,70.9%20118.9,43.9%20'/%3e%3cpath%20class='st0'%20d='M196.7,59.9c0,0,1.6-6-7.9-7c-6.5-0.6-7.9,3.9-6.9,5.6c2,3.5,17.1,3.5,24.3,9.6c6.2,5.2,4.7,17.1-1.9,21.5%20c-7.9,5.2-20.2,4.4-25.7,1.9c-11-5-9.2-15.8-9.2-15.8H181c0,0-0.6,7.5,8.5,7.5c9.6,0,9.6-5,7.6-7c-2.2-2.2-20.3-3-25.2-10.5%20c-3.3-5-3.8-15,5-20.3c8.8-5.3,21.9-2.7,26.7,2.2c5.7,5.9,4.8,12.3,4.8,12.3L196.7,59.9z'/%3e%3cpolygon%20class='st0'%20points='217,0%20300,0%20299.9,82.5%20217.1,82.5%20'/%3e%3cpolygon%20class='st2'%20points='218.3,1.3%20298.7,1.3%20298.7,81.3%20218.3,81.3%20'/%3e%3cpolygon%20class='st0'%20points='226.5,17.1%20246.1,17.1%20246.1,66.8%20234.4,66.8%20234.4,28.6%20226.5,28.6%20'/%3e%3cpath%20class='st0'%20d='M279.5,39.7c3.1-2.2,5.4-4.8,5-10.9c-0.9-8.4-7.9-12.5-16.1-12.6c-8.2-0.1-14.6,4.9-15.8,12.3%20c-1,6.4,3.1,10.1,5.1,11.2c-3.9,2.1-7.5,7.7-6.8,13.8c0.7,5.7,6.6,14.3,17.8,14.1c10.3-0.2,16.7-7.3,17.4-14%20C287.2,44.5,282.4,41.4,279.5,39.7z%20M268.8,26.1c2.7,0,4.9,1.8,4.9,4.8c0,2.7-2.1,5.1-4.9,5.1c-2.7,0-5-2-5-5.1%20C263.9,27.8,266.5,26.1,268.8,26.1z%20M268.9,56.3c-3.2,0.1-5.7-2.7-5.8-5.8c0-3.3,2.3-5.7,5.7-5.7c3.2,0,5.6,2.6,5.6,5.7%20C274.4,53.6,272.3,56.2,268.9,56.3z'/%3e%3c/g%3e%3c/svg%3e";
const NEWS18$1 = {
  channel: "News18",
  yearFrom: "2015",
  yearTill: "Present",
  title: "Field reporting that puts people first",
  lead: "From village ground reports to primetime bulletins — delivering verified news from Uttar Pradesh and beyond for News18 audiences nationwide.",
  body: "Covered elections, monsoon disasters, rural development, and breaking political stories with on-ground reporting, live crosses, and in-depth Hindi & English coverage. Trusted for accurate, timely journalism when it matters most.",
  highlights: ["Live field reporting", "Political & social beats", "Hindi & English coverage"]
};
function NewsChannel() {
  const reduceMotion = useReducedMotion();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: reduceMotion ? false : { opacity: 0, y: 28 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
      whileHover: reduceMotion ? void 0 : { scale: 1.02, y: -8, transition: { type: "spring", stiffness: 320, damping: 22 } },
      className: "relative origin-center overflow-hidden rounded-2xl bg-gradient-hero text-primary-foreground shadow-card-hover ring-1 ring-white/10 transition-shadow duration-300 hover:shadow-elevated",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute inset-0 opacity-40",
            style: {
              backgroundImage: `
                linear-gradient(to right, oklch(1 0 0 / 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, oklch(1 0 0 / 0.05) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-accent via-saffron to-accent/40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid items-stretch gap-4 p-5 sm:gap-5 sm:p-7 lg:grid-cols-[280px_1fr] lg:gap-6 lg:p-8 xl:grid-cols-[300px_1fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[1080/1252] overflow-hidden rounded-xl border border-white/10 lg:aspect-auto lg:min-h-0 lg:self-stretch", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: fieldImg$2,
              alt: "Rajesh Pandey reporting from the field for News18",
              width: 1080,
              height: 1252,
              className: "absolute inset-0 h-full w-full object-cover object-center"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid min-h-0 grid-rows-[auto_1fr] gap-4 sm:gap-5 lg:gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "pointer-events-none absolute right-0 top-0 z-[5] h-full w-[55%] overflow-hidden pr-1 pt-1 sm:pr-2 sm:pt-2",
                "aria-hidden": true,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: news18Logo,
                    alt: "",
                    className: "h-full w-full object-contain object-right-top opacity-[0.32]"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 flex items-center rounded-xl border border-white/15 bg-gradient-to-r from-white/[0.1] via-white/[0.04] to-transparent px-4 py-3 sm:px-5 sm:py-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold tracking-wide text-white/90 sm:text-base", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: NEWS18$1.yearFrom }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2 text-white/40", children: "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: NEWS18$1.yearTill }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2 text-white/40", children: "·" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white", children: NEWS18$1.channel })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex min-h-0 flex-col justify-between rounded-xl border border-white/10 bg-gradient-to-r from-white/[0.07] via-white/[0.03] to-transparent p-5 sm:p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-accent", children: "Featured Channel" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-[1.75rem] xl:text-3xl", children: NEWS18$1.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-white/80 sm:text-base lg:mt-4 lg:text-[0.95rem] lg:leading-relaxed xl:text-base", children: NEWS18$1.lead }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-white/60 lg:text-[0.9rem] xl:text-sm", children: NEWS18$1.body })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-2 lg:mt-4", children: NEWS18$1.highlights.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "rounded-full border border-white/12 bg-white/[0.06] px-3 py-1 text-xs font-medium text-white/75 sm:text-sm",
                  children: item
                },
                item
              )) })
            ] })
          ] })
        ] })
      ]
    }
  );
}
const fieldImg$1 = "/assets/image-44-BtLCeK9J.jpeg";
const newsnationLogo = "/assets/news-nation-BsU2oplz.png";
const NEWS_NATION = {
  channel: "News Nation",
  yearFrom: "2024",
  yearTill: "2025",
  title: "Breaking news with clarity and conviction",
  lead: "Anchoring prime-time segments and special reports that bring Uttar Pradesh's most important stories to millions of viewers across India.",
  body: "Led coverage on state politics, public policy, and citizen issues — combining studio presentation with sharp analysis and responsible, fact-led journalism on one of India's largest news networks.",
  highlights: ["Prime-time anchoring", "Political analysis", "Special reports"]
};
function NewsChannelSecond() {
  const reduceMotion = useReducedMotion();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: reduceMotion ? false : { opacity: 0, y: 28 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
      whileHover: reduceMotion ? void 0 : { scale: 1.02, y: -8, transition: { type: "spring", stiffness: 320, damping: 22 } },
      className: "relative origin-center overflow-hidden rounded-2xl bg-gradient-hero text-primary-foreground shadow-card-hover ring-1 ring-white/10 transition-shadow duration-300 hover:shadow-elevated",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute inset-0 opacity-40",
            style: {
              backgroundImage: `
                linear-gradient(to right, oklch(1 0 0 / 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, oklch(1 0 0 / 0.05) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-accent via-saffron to-accent/40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid items-stretch gap-4 p-5 sm:gap-5 sm:p-7 lg:grid-cols-[1fr_280px] lg:gap-6 lg:p-8 xl:grid-cols-[1fr_300px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative order-1 grid min-h-0 grid-rows-[auto_1fr] gap-4 text-left sm:gap-5 lg:col-start-1 lg:row-start-1 lg:gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "pointer-events-none absolute left-0 top-0 z-[5] h-full w-[55%] overflow-hidden pl-1 pt-1 sm:pl-2 sm:pt-2",
                "aria-hidden": true,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: newsnationLogo,
                    alt: "",
                    className: "h-full w-full object-contain object-left-top opacity-[0.32]"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 flex items-center justify-start rounded-xl border border-white/15 bg-gradient-to-l from-white/[0.1] via-white/[0.04] to-transparent px-4 py-3 text-left sm:px-5 sm:py-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-left text-sm font-semibold tracking-wide text-white/90 sm:text-base", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: NEWS_NATION.yearFrom }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2 text-white/40", children: "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: NEWS_NATION.yearTill }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2 text-white/40", children: "·" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white", children: NEWS_NATION.channel })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex min-h-0 flex-col items-start justify-between rounded-xl border border-white/10 bg-gradient-to-l from-white/[0.07] via-white/[0.03] to-transparent p-5 text-left sm:p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-left text-[11px] font-semibold uppercase tracking-[0.2em] text-accent", children: "Featured Channel" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-left text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-[1.75rem] xl:text-3xl", children: NEWS_NATION.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-left text-sm leading-relaxed text-white/80 sm:text-base lg:mt-4 lg:text-[0.95rem] lg:leading-relaxed xl:text-base", children: NEWS_NATION.lead }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-left text-sm leading-relaxed text-white/60 lg:text-[0.9rem] xl:text-sm", children: NEWS_NATION.body })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex w-full flex-wrap justify-start gap-2 lg:mt-4", children: NEWS_NATION.highlights.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "rounded-full border border-white/12 bg-white/[0.06] px-3 py-1 text-left text-xs font-medium text-white/75 sm:text-sm",
                  children: item
                },
                item
              )) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative order-2 aspect-[1080/1187] overflow-hidden rounded-xl border border-white/10 lg:col-start-2 lg:row-start-1 lg:aspect-auto lg:min-h-0 lg:self-stretch", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: fieldImg$1,
              alt: "Rajesh Pandey reporting for Zee News",
              width: 1080,
              height: 1187,
              className: "absolute inset-0 h-full w-full object-cover object-center"
            }
          ) })
        ] })
      ]
    }
  );
}
const fieldImg = "/assets/image-55-DBDhxW5O.jpeg";
const zeeLogo = "/assets/zee-DzO-o9o_.png";
const NEWS18 = {
  channel: "Zee News",
  yearFrom: "2024",
  yearTill: "2022",
  title: "Field reporting that puts people first",
  lead: "From village ground reports to primetime bulletins — delivering verified news from Uttar Pradesh and beyond for News18 audiences nationwide.",
  body: "Covered elections, monsoon disasters, rural development, and breaking political stories with on-ground reporting, live crosses, and in-depth Hindi & English coverage. Trusted for accurate, timely journalism when it matters most.",
  highlights: ["Live field reporting", "Political & social beats", "Hindi & English coverage"]
};
function NewsChannelThird() {
  const reduceMotion = useReducedMotion();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: reduceMotion ? false : { opacity: 0, y: 28 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
      whileHover: reduceMotion ? void 0 : { scale: 1.02, y: -8, transition: { type: "spring", stiffness: 320, damping: 22 } },
      className: "relative origin-center overflow-hidden rounded-2xl bg-gradient-hero text-primary-foreground shadow-card-hover ring-1 ring-white/10 transition-shadow duration-300 hover:shadow-elevated",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute inset-0 opacity-40",
            style: {
              backgroundImage: `
                linear-gradient(to right, oklch(1 0 0 / 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, oklch(1 0 0 / 0.05) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-accent via-saffron to-accent/40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid items-stretch gap-4 p-5 sm:gap-5 sm:p-7 lg:grid-cols-[280px_1fr] lg:gap-6 lg:p-8 xl:grid-cols-[300px_1fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[1080/1252] overflow-hidden rounded-xl border border-white/10 lg:aspect-auto lg:min-h-0 lg:self-stretch", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: fieldImg,
              alt: "Rajesh Pandey reporting from the field for News18",
              width: 1080,
              height: 1252,
              className: "absolute inset-0 h-full w-full object-cover object-center"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid min-h-0 grid-rows-[auto_1fr] gap-4 sm:gap-5 lg:gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "pointer-events-none absolute right-0 top-0 z-[5] h-full w-[55%] overflow-hidden pr-1 pt-1 sm:pr-2 sm:pt-2",
                "aria-hidden": true,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: zeeLogo,
                    alt: "",
                    className: "h-full w-full object-contain object-right-top opacity-[0.32]"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 flex items-center rounded-xl border border-white/15 bg-gradient-to-r from-white/[0.1] via-white/[0.04] to-transparent px-4 py-3 sm:px-5 sm:py-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold tracking-wide text-white/90 sm:text-base", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: NEWS18.yearFrom }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2 text-white/40", children: "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: NEWS18.yearTill }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2 text-white/40", children: "·" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white", children: NEWS18.channel })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex min-h-0 flex-col justify-between rounded-xl border border-white/10 bg-gradient-to-r from-white/[0.07] via-white/[0.03] to-transparent p-5 sm:p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-accent", children: "Featured Channel" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-[1.75rem] xl:text-3xl", children: NEWS18.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-white/80 sm:text-base lg:mt-4 lg:text-[0.95rem] lg:leading-relaxed xl:text-base", children: NEWS18.lead }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-white/60 lg:text-[0.9rem] xl:text-sm", children: NEWS18.body })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-2 lg:mt-4", children: NEWS18.highlights.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "rounded-full border border-white/12 bg-white/[0.06] px-3 py-1 text-xs font-medium text-white/75 sm:text-sm",
                  children: item
                },
                item
              )) })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function ProfessionalJourney() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "journey", className: "bg-background pb-12 pt-8 sm:pb-16 sm:pt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 sm:mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold uppercase tracking-[0.2em] text-accent", children: "Career" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl", children: "Professional Journey" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-8 overflow-visible py-1 sm:gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(NewsChannel, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NewsChannelSecond, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NewsChannelThird, {})
    ] })
  ] }) });
}
const ACHIEVEMENTS = [
  {
    heading: "Election Ground Report — Uttar Pradesh",
    date: "March 2024",
    description: "On-ground coverage from polling booths and rally grounds, bringing voters' voices and real-time updates to primetime.",
    youtubeId: "jNQXAC9IVRw",
    youtubeUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw"
  },
  {
    heading: "Live Flood Coverage — Eastern UP",
    date: "July 2023",
    description: "Breaking live crosses from flood-affected districts with rescue operations, relief efforts, and community impact stories.",
    youtubeId: "aqz-KE-bpKQ",
    youtubeUrl: "https://www.youtube.com/watch?v=aqz-KE-bpKQ"
  },
  {
    heading: "Exclusive Interview Series",
    date: "November 2022",
    description: "In-depth conversations with policymakers and grassroots leaders on governance, development, and public accountability.",
    youtubeId: "M7lc1UVf-VE",
    youtubeUrl: "https://www.youtube.com/watch?v=M7lc1UVf-VE"
  },
  {
    heading: "Field Documentary — Rural India",
    date: "January 2022",
    description: "A long-form report highlighting livelihood challenges, local enterprise, and change makers across rural Uttar Pradesh.",
    youtubeId: "ysz5S6PUM-U",
    youtubeUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U"
  }
];
function AchievementCard({ item, index }) {
  const reduceMotion = useReducedMotion();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.article,
    {
      initial: reduceMotion ? false : { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-60px" },
      transition: { duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] },
      whileHover: reduceMotion ? void 0 : { scale: 1.02, y: -6, transition: { type: "spring", stiffness: 320, damping: 22 } },
      className: "origin-center overflow-hidden rounded-2xl border border-border bg-card shadow-card ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-card-hover",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid min-h-[320px] grid-cols-1 md:grid-cols-[2fr_3fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-video bg-black md:aspect-auto md:min-h-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "iframe",
          {
            src: `https://www.youtube.com/embed/${item.youtubeId}`,
            title: item.heading,
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            allowFullScreen: true,
            loading: "lazy",
            className: "absolute inset-0 h-full w-full"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center gap-3 p-5 sm:p-6 lg:p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("time", { className: "text-sm font-medium text-accent", children: item.date }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold leading-snug tracking-tight text-primary sm:text-2xl", children: item.heading }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground sm:text-base", children: item.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: item.youtubeUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 rounded-lg border-2 border-accent bg-accent/5 px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground",
              children: [
                "View",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-4 w-4", "aria-hidden": true })
              ]
            }
          ) })
        ] })
      ] })
    }
  );
}
function Achievements() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "reportings", className: "bg-secondary/40 pb-12 pt-8 sm:pb-16 sm:pt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 sm:mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold uppercase tracking-[0.2em] text-accent", children: "Highlights" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl", children: "My Reportings" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-6 overflow-visible py-1 sm:gap-8", children: ACHIEVEMENTS.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(AchievementCard, { item, index }, item.youtubeId)) })
  ] }) });
}
const CONTACT = {
  email: "shubham.pandey@email.com",
  phones: ["+918429808088", "+917379721674"]
};
function Contact() {
  const reduceMotion = useReducedMotion();
  const [copied, setCopied] = reactExports.useState(false);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2e3);
    } catch {
      toast.error("Could not copy email");
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "bg-background pb-12 pt-8 sm:pb-16 sm:pt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: reduceMotion ? false : { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-60px" },
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      className: "mx-auto max-w-3xl",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 text-center sm:mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold uppercase tracking-[0.2em] text-accent", children: "Reach Out" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl", children: "Every Story Matters — Get in Touch" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card ring-1 ring-black/5 sm:p-8 lg:p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm leading-relaxed text-muted-foreground sm:text-base", children: "Whether it's breaking news, a community event, an exclusive tip, or a press inquiry, I'm always interested in hearing stories that matter. Reach out today and let's make your voice heard." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 border-b border-border pb-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: `mailto:${CONTACT.email}`,
              className: "text-2xl font-bold tracking-tight text-accent transition-colors hover:text-accent/80 sm:text-3xl",
              children: CONTACT.email
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap items-center justify-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: `mailto:${CONTACT.email}`,
                className: "inline-flex items-center gap-2 rounded-lg border-2 border-accent bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4", "aria-hidden": true }),
                  "Send Email"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: copyEmail,
                className: "inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:border-accent hover:text-accent",
                children: [
                  copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4", "aria-hidden": true }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-4 w-4", "aria-hidden": true }),
                  copied ? "Copied" : "Copy Email"
                ]
              }
            )
          ] })
        ] })
      ]
    }
  ) }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProfessionalJourney, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Achievements, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
