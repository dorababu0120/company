import { SectionHeading } from "./SectionHeading";

export function Vision() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <SectionHeading
          align="center"
          eyebrow="Vision for the future"
          title={<>A multi-product company building <span className="text-gradient">digital infrastructure</span> for modern communities.</>}
          description="From a single hyperlocal app to a global suite of AI-native products — engineered for millions, designed for one."
        />
        <div className="mt-14 grid sm:grid-cols-3 gap-5 text-left">
          {[
            { y: "2026", t: "Launch the marketplace", d: "Establish Ezy Finds as the trusted hyperlocal services layer." },
            { y: "2027", t: "Expand the ecosystem", d: "Ship two new consumer apps powered by shared infrastructure." },
            { y: "2028+", t: "Global scale", d: "Operate across continents with localized AI-driven supply networks." },
          ].map((s) => (
            <div key={s.y} className="glass-strong rounded-3xl p-6 shadow-card">
              <div className="text-sm text-gradient font-display font-semibold">{s.y}</div>
              <h3 className="mt-2 font-display text-xl">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}