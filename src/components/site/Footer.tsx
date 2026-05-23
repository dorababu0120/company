import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-32">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.2_245/0.5)] to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-xs">
              Building the future of everyday digital services. From hyperlocal marketplaces to AI-powered platforms.
            </p>
            <div className="flex gap-3 pt-2">
              {["X", "in", "GH", "IG"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="h-9 w-9 rounded-full glass flex items-center justify-center text-xs hover:text-foreground hover:border-[oklch(0.72_0.2_245/0.5)] transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          <FooterCol title="Company" links={[["About","/about"],["Careers","/careers"],["Contact","/contact"]]} />
          <FooterCol title="Products" links={[["Ezy Finds","/products"],["Roadmap","/products"],["Vision","/about"]]} />
          <FooterCol title="Partners" links={[["Investors","/investors"],["Press","/contact"],["Collaborate","/contact"]]} />
        </div>
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} MG Innovations Pvt Ltd. All rights reserved.</p>
          <p>Engineered with intent · Stockholm · Bengaluru · Remote</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">{title}</h4>
      <ul className="space-y-3">
        {links.map(([label, to]) => (
          <li key={label}>
            <Link to={to} className="text-sm hover:text-foreground text-foreground/70 transition-colors">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}