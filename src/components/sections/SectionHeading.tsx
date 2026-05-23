export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-muted-foreground mb-5 ${align === "center" ? "" : ""}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.72_0.2_245)]" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">{title}</h2>
      {description && (
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
}