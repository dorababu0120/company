import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1fr_1.1fr] gap-12">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title={<>Let's <span className="text-gradient">build</span> something.</>}
            description="Partnership, investment, press, or a wild idea — drop us a line. We read every message."
          />
          <div className="mt-10 space-y-5">
            {[
              ["General", "hello@mginnovations.in"],
              ["Investors", "invest@mginnovations.in"],
              ["Press", "press@mginnovations.in"],
              ["Careers", "join@mginnovations.in"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{k}</div>
                <a href={`mailto:${v}`} className="font-display text-base hover:text-gradient">{v}</a>
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-8">
            {["LinkedIn", "X / Twitter", "GitHub", "Instagram"].map((s) => (
              <a key={s} href="#" className="text-xs glass rounded-full px-3 py-2 hover:border-[oklch(0.72_0.2_245/0.5)] transition-colors">{s}</a>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="glass-strong rounded-3xl p-8 shadow-card space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" />
            <Field label="Email" name="email" type="email" />
          </div>
          <Field label="Company" name="company" />
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Inquiry type</label>
            <select className="mt-2 w-full bg-transparent glass rounded-xl px-4 py-3 text-sm outline-none focus:border-[oklch(0.72_0.2_245/0.5)]">
              <option className="bg-background">Partnership</option>
              <option className="bg-background">Investment</option>
              <option className="bg-background">Collaboration</option>
              <option className="bg-background">Press</option>
              <option className="bg-background">Careers</option>
              <option className="bg-background">Other</option>
            </select>
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Message</label>
            <textarea rows={5} className="mt-2 w-full bg-transparent glass rounded-xl px-4 py-3 text-sm outline-none focus:border-[oklch(0.72_0.2_245/0.5)]" />
          </div>
          <button type="submit" className="btn-primary rounded-full px-6 py-3 text-sm w-full sm:w-auto">
            {sent ? "Message sent ✓" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input id={name} name={name} type={type} className="mt-2 w-full bg-transparent glass rounded-xl px-4 py-3 text-sm outline-none focus:border-[oklch(0.72_0.2_245/0.5)]" />
    </div>
  );
}