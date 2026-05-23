import { Link } from "@tanstack/react-router";
import { SectionHeading } from "./SectionHeading";

const roles = [
  { team: "Engineering", title: "Founding Full-Stack Engineer", loc: "Remote · India / Global" },
  { team: "Design", title: "Senior Product Designer", loc: "Remote · India / Global" },
  { team: "AI", title: "Applied AI Engineer", loc: "Remote · India / Global" },
  { team: "Growth", title: "Founding Growth Lead", loc: "Remote · India" },
];

export function Careers() {
  return (
    <section id="careers" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Careers"
          title={<>Join us at <span className="text-gradient">day one</span>.</>}
          description="We're hiring founding engineers, designers, AI builders, and early-stage operators. If you want ownership, real users, and craft — come build."
        />
        <div className="mt-12 grid gap-3">
          {roles.map((r) => (
            <Link
              key={r.title}
              to="/contact"
              className="group glass rounded-2xl px-6 py-5 flex flex-wrap items-center justify-between gap-4 hover:border-[oklch(0.72_0.2_245/0.5)] transition-all"
            >
              <div className="flex items-center gap-5">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground w-28">{r.team}</span>
                <span className="font-display text-lg">{r.title}</span>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span>{r.loc}</span>
                <span className="group-hover:text-foreground transition-colors">Apply →</span>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Don't see your role? <Link to="/contact" className="text-foreground underline-offset-4 hover:underline">Pitch yourself.</Link>
        </p>
      </div>
    </section>
  );
}