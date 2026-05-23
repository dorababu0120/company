import { SectionHeading } from "./SectionHeading";
import appMockup from "@/assets/ezyfinds-mockup.png";

const services = ["Drivers", "Maids", "Chefs", "Electricians", "Cleaners", "Tutors", "Delivery", "Plumbers"];

export function Products() {
  return (
    <section id="products" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Products"
          title={<>One ecosystem. <span className="text-gradient">Many launches.</span></>}
          description="A growing portfolio of consumer and platform products — engineered to scale from neighborhood to nation."
        />

        <div className="mt-14 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
          {/* Ezy Finds feature card */}
          <div className="relative glass-strong rounded-[2rem] p-8 md:p-10 shadow-card overflow-hidden">
            <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[var(--gradient-brand)] opacity-30 blur-3xl" />
            <div className="relative grid sm:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[oklch(0.85_0.24_145)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.85_0.24_145)] animate-pulse-glow" />
                  Flagship · Live build
                </div>
                <h3 className="mt-3 font-display text-3xl md:text-4xl font-semibold">Ezy Finds</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-md">
                  A hyperlocal all-in-one services marketplace connecting people with trusted nearby professionals — instantly.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {services.map((s) => (
                    <span key={s} className="text-xs glass rounded-full px-3 py-1.5">{s}</span>
                  ))}
                </div>
                <div className="mt-8 flex gap-3">
                  <a href="#" className="btn-primary rounded-full px-5 py-2.5 text-sm">Coming to App Store</a>
                  <a href="#" className="btn-ghost rounded-full px-5 py-2.5 text-sm">Coming to Google Play</a>
                </div>
              </div>
              <div className="relative w-44 sm:w-56">
                <div className="absolute -inset-6 bg-aurora blur-2xl opacity-80" />
                <img src={appMockup} alt="Ezy Finds mockup" loading="lazy" width={1024} height={1024} className="relative animate-float" />
              </div>
            </div>
          </div>

          {/* Upcoming products */}
          <div className="grid gap-5">
            {[
              { tag: "AI Platform · 2026", title: "MG Cortex", desc: "Domain-tuned AI agents for hyperlocal commerce, ops, and discovery." },
              { tag: "Infra · 2026", title: "Neighborhood OS", desc: "The operating layer powering communities — identity, trust, and payments." },
              { tag: "Consumer · TBA", title: "Stealth #03", desc: "A new vertical app reimagining a billion-person daily habit. Quietly cooking." },
            ].map((p) => (
              <div key={p.title} className="glass rounded-2xl p-6 hover:border-[oklch(0.72_0.2_245/0.4)] hover:translate-y-[-2px] transition-all duration-300">
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{p.tag}</div>
                <h4 className="mt-2 font-display text-xl font-semibold">{p.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}