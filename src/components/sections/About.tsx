import { SectionHeading } from "./SectionHeading";

const pillars = [
  { title: "Startup vision", text: "A multi-product technology company shipping intentional, scalable software for the next decade of digital life." },
  { title: "Innovation-first culture", text: "Small senior teams, fast cycles, real users. We obsess over the craft and the outcome — not the process theatre." },
  { title: "Technology-driven mission", text: "AI, cloud-native infrastructure, and design systems engineered to compound across every product we launch." },
  { title: "Real-world problems", text: "We solve the messy, daily problems of people and neighborhoods — the kind of software that quietly becomes essential." },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="About the company"
          title={<>We design and ship <span className="text-gradient">intelligent digital ecosystems</span>.</>}
          description="MG Innovations is a future-forward technology studio building a portfolio of digital products and AI-native platforms. One operating system, many products, millions of moments."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {pillars.map((p, i) => (
            <div key={p.title} className="glass-strong rounded-3xl p-7 shadow-card group hover:border-[oklch(0.72_0.2_245/0.4)] transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-[var(--gradient-brand)] flex items-center justify-center text-sm font-display font-semibold text-[oklch(0.08_0.02_265)]">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{p.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}