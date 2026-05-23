import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const nav = [
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/investors", label: "Investors" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-300 ${
            scrolled ? "glass-strong shadow-card" : "bg-transparent"
          }`}
        >
          <Link to="/" className="shrink-0">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
                activeProps={{ className: "px-3 py-2 text-sm text-foreground rounded-lg bg-white/5" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <Link to="/investors" className="btn-ghost rounded-full px-4 py-2 text-sm">
              Invest
            </Link>
            <Link to="/contact" className="btn-primary rounded-full px-4 py-2 text-sm">
              Partner with us
            </Link>
          </div>
          <button
            aria-label="Menu"
            className="md:hidden btn-ghost rounded-lg p-2"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-sm rounded-lg hover:bg-white/5"
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary rounded-full px-4 py-3 text-sm text-center mt-2">
              Partner with us
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}