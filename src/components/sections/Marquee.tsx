const words = [
  "Hyperlocal", "AI-native", "Investor-ready", "Globally scalable", "Future unicorn",
  "Mobile-first", "Innovation-first", "Production-grade", "Senior craft",
];

export function Marquee() {
  const items = [...words, ...words];
  return (
    <section className="relative py-8 border-y border-white/5 overflow-hidden">
      <div className="marquee whitespace-nowrap">
        {items.map((w, i) => (
          <span key={i} className="font-display text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-16">
            {w}
            <span className="h-1 w-1 rounded-full bg-[oklch(0.72_0.2_245)]" />
          </span>
        ))}
      </div>
    </section>
  );
}