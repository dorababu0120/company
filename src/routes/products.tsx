import { createFileRoute } from "@tanstack/react-router";
import { Products } from "@/components/sections/Products";
import { Vision } from "@/components/sections/Vision";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — MG Innovations · Ezy Finds & more" },
      { name: "description", content: "Explore the MG Innovations product ecosystem — Ezy Finds hyperlocal marketplace, MG Cortex AI, Neighborhood OS and upcoming launches." },
      { property: "og:title", content: "Products — MG Innovations" },
      { property: "og:description", content: "One ecosystem. Many launches." },
    ],
  }),
  component: () => (
    <div className="pt-32">
      <Products />
      <Vision />
    </div>
  ),
});