export function Contact() {
  return (
    <section id="contact" className="relative py-12 md:py-16 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 flex flex-col lg:flex-row gap-10 lg:gap-12">
        
        {/* Left Content */}
        <div className="w-full lg:w-[45%] flex flex-col items-start pt-8">
          <p className="text-[13px] font-bold tracking-[0.2em] text-[#3b82f6] uppercase mb-6">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.05] mb-4 text-white">
            Let's talk.
          </h2>
          <p className="text-[#8f96a3] text-sm md:text-base leading-relaxed mb-8 max-w-[480px]">
            Business inquiries, collaborations, partnerships or just to say hello — we'd love to hear from you.
          </p>

          <div className="flex flex-col gap-3 w-full max-w-[420px] mb-8">
            <div className="flex flex-col justify-center px-5 py-3 rounded-[1.25rem] bg-[#121318] border border-white/[0.04] hover:bg-[#1a1c23] transition-colors cursor-pointer">
              <span className="text-[11px] text-[#8f96a3] mb-1">Email</span>
              <span className="font-medium text-[14px] text-white">hello@mginnovations.com</span>
            </div>
            <div className="flex flex-col justify-center px-5 py-3 rounded-[1.25rem] bg-[#121318] border border-white/[0.04] hover:bg-[#1a1c23] transition-colors cursor-pointer">
              <span className="text-[11px] text-[#8f96a3] mb-1">Partnerships</span>
              <span className="font-medium text-[14px] text-white">partners@mginnovations.com</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <button key={social} className="px-6 py-2.5 rounded-full text-[13px] font-medium text-white bg-[#121318] border border-white/[0.04] hover:bg-[#1a1c23] hover:border-white/10 transition-colors shadow-sm">
                {social}
              </button>
            ))}
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-[55%] relative">
          <div className="bg-[#0B0D15] border border-white/[0.04] rounded-[2rem] p-6 sm:p-8 shadow-2xl relative z-10">
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] text-[#8f96a3] ml-2 font-medium">Name</label>
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className="w-full bg-[#1A1C23] border border-white/5 rounded-full px-5 py-3 text-[14px] text-white placeholder-[#8f96a3]/60 outline-none focus:border-white/20 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] text-[#8f96a3] ml-2 font-medium">Email</label>
                <input 
                  type="email" 
                  placeholder="you@company.com" 
                  className="w-full bg-[#1A1C23] border border-white/5 rounded-full px-5 py-3 text-[14px] text-white placeholder-[#8f96a3]/60 outline-none focus:border-white/20 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] text-[#8f96a3] ml-2 font-medium">Message</label>
                <textarea 
                  rows={3} 
                  placeholder="Tell us what you're building" 
                  className="w-full bg-[#1A1C23] border border-white/5 rounded-[1.25rem] px-5 py-3 text-[14px] text-white placeholder-[#8f96a3]/60 outline-none focus:border-white/20 transition-colors resize-none"
                />
              </div>
              <button 
                type="submit" 
                className="w-full mt-2 py-3.5 rounded-full text-[14px] font-semibold text-gray-900 bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#6ee7b7] hover:opacity-90 transition-opacity shadow-[0_0_30px_rgba(192,132,252,0.2)]"
              >
                Send message
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}