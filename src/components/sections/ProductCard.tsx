import { ProductData } from "@/data/products";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: ProductData;
  reverse?: boolean;
}

export function ProductCard({ product, reverse = false }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center bg-[#0B0D15] border border-white/[0.04] rounded-[2.5rem] p-6 md:p-8 lg:p-12 overflow-hidden shadow-2xl ${reverse ? 'lg:flex-row-reverse' : ''}`}
    >
      
      {/* Intense blue glow bleeding from behind the left box */}
      <div className={`absolute top-1/2 ${reverse ? '-right-32' : '-left-32'} w-[45rem] h-[45rem] -translate-y-1/2 bg-[#3b82f6] opacity-[0.4] rounded-full blur-[120px] pointer-events-none mix-blend-screen`} />

      {/* Left Image Side - Inner Pitch Black Box */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center">
        <div className="relative w-full aspect-[4/4.5] lg:aspect-square max-w-[460px] mx-auto bg-[#030304] rounded-[2rem] overflow-hidden flex justify-center items-center z-10 border border-white/[0.03]">
          
          {/* Subtle Starry noise pattern - much lower opacity to match target */}
          <div 
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `radial-gradient(1px 1px at 10% 20%, #ffffff 100%, transparent),
                                radial-gradient(1px 1px at 30% 40%, #ffffff 100%, transparent),
                                radial-gradient(1.5px 1.5px at 50% 10%, #ffffff 100%, transparent),
                                radial-gradient(1px 1px at 70% 60%, #ffffff 100%, transparent),
                                radial-gradient(2px 2px at 90% 30%, rgba(255,255,255,0.8) 100%, transparent),
                                radial-gradient(1px 1px at 20% 80%, #ffffff 100%, transparent),
                                radial-gradient(1px 1px at 60% 90%, #ffffff 100%, transparent),
                                radial-gradient(1.5px 1.5px at 80% 80%, rgba(255,255,255,0.9) 100%, transparent)`,
              backgroundSize: '150px 150px',
            }}
          />

          <img src={product.image} alt={`${product.title} mockup`} className="relative z-10 w-full h-full object-cover" />
        </div>
      </div>

      {/* Right Content Side */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-start">
        {product.badge && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A1C23] border border-white/5 text-[11px] font-medium text-white mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
            {product.badge}
          </div>
        )}
        
        <h3 className="font-display text-4xl md:text-[3.25rem] font-semibold text-white mb-5 leading-tight">{product.title}</h3>
        
        <p className="text-[#8f96a3] text-base md:text-[1.05rem] leading-relaxed mb-8 max-w-[480px]">
          {product.description}
        </p>

        {/* Service Grid */}
        {product.services && product.services.length > 0 && (
          <div className="grid grid-cols-4 gap-3 sm:gap-4 w-full max-w-[480px] mb-8">
            {product.services.map((service) => (
              <div key={service.name} className="flex flex-col items-center justify-center py-4 px-2 rounded-[1.25rem] bg-[#121318] border border-white/[0.04] hover:bg-[#1a1c23] hover:border-white/10 transition-all group shadow-sm">
                <span className="text-[1.35rem] sm:text-[1.6rem] mb-2 group-hover:scale-110 transition-transform duration-300">{service.emoji}</span>
                <span className="text-[10px] sm:text-[11px] font-medium text-[#8f96a3] group-hover:text-gray-300 transition-colors">{service.name}</span>
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-2">
          {product.primaryButton && (
            <button className="px-6 py-2.5 rounded-full text-[13px] font-semibold text-gray-900 bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#6ee7b7] hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(192,132,252,0.3)]">
              {product.primaryButton.text}
            </button>
          )}
          {product.secondaryButton && (
            <button className="px-6 py-2.5 rounded-full text-[13px] font-semibold text-white bg-transparent border border-white/10 hover:bg-white/5 transition-colors">
              {product.secondaryButton.text}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
