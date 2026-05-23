import { Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-aurora.jpg";
import appMockup from "@/assets/ezyfinds-mockup.png";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover opacity-60"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 grid-bg" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs">
              <span className="h-2 w-2 rounded-full bg-[oklch(0.85_0.24_145)] animate-pulse-glow" />
              <span className="text-muted-foreground">Now building · Series Seed open</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.02] tracking-tight">
              Building the future of <span className="text-gradient">everyday digital services</span>.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              MG Innovations Pvt Ltd creates scalable digital products and intelligent platforms that simplify how people connect, work, and access services — starting with hyperlocal marketplaces.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/products" className="btn-primary rounded-full px-6 py-3 text-sm inline-flex items-center gap-2">
                Explore Products
                <Arrow />
              </Link>
              <Link to="/contact" className="btn-ghost rounded-full px-6 py-3 text-sm">
                Partner With Us
              </Link>
              <Link to="/investors" className="btn-ghost rounded-full px-6 py-3 text-sm">
                Invest In Innovation
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-md">
              {[
                ["10×", "growth target"],
                ["1M+", "future users"],
                ["24/7", "AI-driven ops"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="text-2xl font-display font-semibold text-gradient">{k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-aurora blur-3xl opacity-80" />
            <div className="relative animate-float">
              <img
                src={appMockup}
                alt="Ezy Finds app mockup"
                className="relative z-10 mx-auto w-full max-w-md drop-shadow-[0_30px_80px_oklch(0.72_0.2_245/0.4)]"
                width={1024}
                height={1024}
              />
            </div>
            <FloatingBadge className="absolute top-8 -left-4 md:left-0" label="AI Match" sub="0.42s" />
            <FloatingBadge className="absolute bottom-12 -right-2 md:right-0" label="Verified Pro" sub="4.9 ★" tone="neon" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function FloatingBadge({ className, label, sub, tone = "electric" }: { className?: string; label: string; sub: string; tone?: "electric" | "neon" }) {
  const color = tone === "neon" ? "oklch(0.85 0.24 145)" : "oklch(0.72 0.2 245)";
  return (
    <div className={`glass-strong rounded-2xl px-4 py-3 shadow-card ${className}`} style={{ animation: "float-slow 7s ease-in-out infinite" }}>
      <div className="flex items-center gap-3">
        <span className="h-8 w-8 rounded-xl flex items-center justify-center" style={{ background: `${color} / 0.15`, boxShadow: `0 0 24px ${color}` }}>
          <span className="h-2 w-2 rounded-full" style={{ background: color }} />
        </span>
        <div>
          <div className="text-xs text-muted-foreground">{label}</div>
          <div className="text-sm font-medium">{sub}</div>
        </div>
      </div>
    </div>
  );
}