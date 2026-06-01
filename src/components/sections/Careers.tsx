import { Link } from "@tanstack/react-router";

const roles = [
  "Engineering", "Design", "Product", "AI / ML", "Growth", "Operations"
];

export function Careers() {
  return (
    <section id="careers" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden bg-[#0B0D15] border border-white/[0.04] rounded-[2.5rem] p-10 md:p-16 lg:p-20 shadow-2xl flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Background Glow */}
          <div className="absolute top-1/2 right-0 w-[45rem] h-[45rem] -translate-y-1/2 bg-[#2563eb] opacity-[0.15] rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
          
          {/* Left Content */}
          <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-start">
          <p className="text-[13px] font-bold tracking-[0.2em] text-[#22c55e] uppercase mb-6">Careers</p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.05] mb-6 text-white">
            Be part of building <span className="bg-gradient-to-r from-[#60a5fa] to-[#a855f7] bg-clip-text text-transparent">the<br />future.</span>
          </h2>
          <p className="text-[#8f96a3] text-base md:text-lg leading-relaxed mb-10 max-w-[480px]">
            We're looking for developers, designers, innovators and builders who want to ship products that matter. Small team. Big ambitions. Long-term thinking.
          </p>
          <Link to="/contact" className="px-8 py-3.5 rounded-full text-[14px] font-semibold text-gray-900 bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#6ee7b7] hover:opacity-90 transition-opacity shadow-[0_0_30px_rgba(192,132,252,0.3)]">
            Join the journey &rarr;
          </Link>
        </div>

        {/* Right Roles Grid */}
        <div className="relative z-10 w-full lg:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {roles.map((role) => (
              <div key={role} className="flex items-center justify-between px-7 py-5 rounded-full bg-[#121318] border border-white/[0.04] hover:bg-[#1a1c23] hover:border-white/10 transition-colors cursor-pointer group shadow-sm">
                <span className="font-medium text-[15px] text-white group-hover:text-gray-200 transition-colors">{role}</span>
                <span className="text-[12px] text-[#8f96a3]">Open</span>
              </div>
            ))}
          </div>
        </div>

          </div>
        </div>
    </section>
  );
}