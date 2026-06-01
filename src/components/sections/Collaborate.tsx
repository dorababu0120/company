export function Collaborate() {
  return (
    <section className="relative py-12 md:py-16 px-6">
      <div className="mx-auto max-w-5xl bg-[#0B0D15] border border-white/[0.04] rounded-[2.5rem] p-10 md:p-16 lg:p-20 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
        
        {/* Subtle background glow inside the card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-[#3b82f6] opacity-[0.1] rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

        <div className="relative z-10">
          <p className="text-[12px] md:text-[13px] font-bold tracking-[0.2em] text-[#3b82f6] uppercase mb-5">
            Collaborate
          </p>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight leading-[1.1] mb-6 text-white">
            Let's build the future <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#60a5fa] to-[#a855f7] bg-clip-text text-transparent">together.</span>
          </h2>
          
          <p className="text-[#8f96a3] text-base md:text-[1.05rem] leading-relaxed mb-10 max-w-[700px] mx-auto">
            MG Innovations is open to strategic partnerships with innovators, creators, developers and forward-looking businesses. If you are building something ambitious — we want to hear from you.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3.5 rounded-full text-[14.5px] font-semibold text-gray-900 bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#6ee7b7] hover:opacity-90 transition-opacity shadow-[0_0_30px_rgba(192,132,252,0.2)]">
              Start a conversation
            </button>
            <a href="mailto:hello@mginnovations.com" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-[14.5px] font-medium text-white bg-[#121318] border border-white/[0.06] hover:bg-[#1a1c23] hover:border-white/10 transition-colors shadow-sm">
              hello@mginnovations.com
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
}
