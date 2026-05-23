import { SectionHeading } from "./SectionHeading";

const items = [
  { k: "Innovation", v: "We ship what others discuss — research-grade ideas turned into shipped product." },
  { k: "Scalability", v: "Cloud-native infrastructure engineered for millions, from day one." },
  { k: "AI-driven future", v: "Models, agents, and personalization baked into the core, not bolted on." },
  { k: "Hyperlocal ecosystems", v: "Trust networks built block-by-block, neighborhood-by-neighborhood." },
  { k: "Startup agility", v: "Senior, small, fast. Shipping cycles in days, not quarters." },
  { k: "Customer-first design", v: "Awwwards-grade craft applied to everyday utility software." },
];

export function Why() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why MG Innovations"
          title={<>Built to <span className="text-gradient">compound</span>.</>}
          description="Six advantages that make every product we launch faster, sharper, and more defensible than the one before it."
        />
        <div className="mt-14 grid gap-px bg-white/5 rounded-3xl overflow-hidden md:grid-cols-3">
          {items.map((it, i) => (
            <div key={it.k} className="bg-background/80 p-7 md:p-8 group relative overflow-hidden hover:bg-background/40 transition-colors">
              <div className="absolute top-0 left-0 h-1 w-full bg-[var(--gradient-brand)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="text-xs text-muted-foreground">0{i + 1}</div>
              <h3 className="mt-2 font-display text-2xl font-semibold">{it.k}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{it.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}