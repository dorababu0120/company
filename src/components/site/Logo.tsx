export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative h-8 w-8">
        <div className="absolute inset-0 rounded-lg bg-[var(--gradient-brand)] blur-md opacity-70" />
        <div className="relative h-8 w-8 rounded-lg bg-[var(--gradient-brand)] flex items-center justify-center font-display font-bold text-[oklch(0.08_0.02_265)]">
          M
        </div>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display font-semibold text-sm tracking-tight">MG Innovations</span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Pvt Ltd</span>
      </div>
    </div>
  );
}