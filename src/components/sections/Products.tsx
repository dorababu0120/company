import { productsData } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function Products() {
  return (
    <section id="products" className="relative py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <p className="text-sm font-semibold tracking-widest text-[#3b82f6] uppercase mb-4">Products</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight leading-tight">
            A scalable ecosystem <br className="hidden sm:block" />
            of <span className="bg-gradient-to-r from-[#60a5fa] to-[#a855f7] bg-clip-text text-transparent">digital products.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-12 md:gap-20">
          {productsData.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              reverse={index % 2 !== 0} // Alternates layout for every second product
            />
          ))}
        </div>
      </div>
    </section>
  );
}