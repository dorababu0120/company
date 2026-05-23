import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/sections/About";
import { Why } from "@/components/sections/Why";
import { Vision } from "@/components/sections/Vision";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — MG Innovations Pvt Ltd" },
      { name: "description", content: "MG Innovations is a futuristic technology studio building a portfolio of AI-native digital products for modern communities." },
      { property: "og:title", content: "About MG Innovations" },
      { property: "og:description", content: "Vision, culture and mission of MG Innovations Pvt Ltd." },
    ],
  }),
  component: () => (
    <div className="pt-32">
      <About />
      <Why />
      <Vision />
    </div>
  ),
});