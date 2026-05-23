import { Link } from "@tanstack/react-router";
import { SectionHeading } from "./SectionHeading";

const roadmap = [
  { q: "Q1", title: "Ezy Finds private beta", desc: "Onboard the first 500 verified professionals in pilot city." },
  { q: "Q2", title: "Public launch + Seed round", desc: "Open the marketplace; close strategic seed financing." },
  { q: "Q3", title: "Multi-city expansion", desc: "Scale to 10 cities with localized supply networks." },
  { q: "Q4", title: "Cortex AI release", desc: "Launch the AI agent layer powering matching and ops." },
];

export function Investors() {
  return (
    <section id="investors" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative glass-strong rounded-[2.5rem] overflow-hidden p-8 md:p-16 shadow-card">
          <div className="absolute inset-0 bg-aurora opacity-80" />
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="relative">
            <SectionHeading
              eyebrow="Investors & Collaboration"
              title={<>Backing the next generation of <span className="text-gradient">digital ecosystems</span>.</>}
              description="We are actively raising and welcoming strategic partners. If you build, fund, or distribute meaningful technology — let's talk."
            />

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                ["Open", "for collaboration"],
                ["Seeking", "strategic partnerships"],
                ["Raising", "Seed round"],
                ["Welcoming", "VCs · Angels · Incubators"],
              ].map(([k, v]) => (
                <div key={k} className="glass rounded-2xl p-5">
                  <div className="text-xs text-[oklch(0.85_0.24_145)] uppercase tracking-[0.2em]">{k}</div>
                  <div className="mt-2 font-display text-lg">{v}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 grid lg:grid-cols-[1fr_1.2fr] gap-10">
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-semibold">Traction in motion</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    ["$0 → $1M", "ARR roadmap"],
                    ["10×", "YoY target"],
                    ["3", "products in pipeline"],
                    ["100%", "founder-led equity"],
                  ].map(([k, v]) => (
                    <div key={k} className="glass rounded-2xl p-5">
                      <div className="text-2xl font-display font-semibold text-gradient">{k}</div>
                      <div className="text-xs text-muted-foreground mt-1">{v}</div>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary rounded-full px-6 py-3 text-sm inline-flex items-center gap-2">
                  Request the investor deck →
                </Link>
              </div>

              <div>
                <h3 className="font-display text-2xl font-semibold mb-6">Roadmap</h3>
                <ol className="relative border-l border-white/10 space-y-6 pl-6">
                  {roadmap.map((r) => (
                    <li key={r.q} className="relative">
                      <span className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-[var(--gradient-brand)] glow" />
                      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{r.q}</div>
                      <div className="font-display text-lg mt-1">{r.title}</div>
                      <p className="text-sm text-muted-foreground mt-1">{r.desc}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}