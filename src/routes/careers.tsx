import { createFileRoute } from "@tanstack/react-router";
import { Careers } from "@/components/sections/Careers";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — MG Innovations" },
      { name: "description", content: "Join MG Innovations at day one. Founding engineers, designers, AI builders and operators wanted." },
      { property: "og:title", content: "Careers at MG Innovations" },
      { property: "og:description", content: "Build the next generation of digital ecosystems with us." },
    ],
  }),
  component: () => (
    <div className="pt-32">
      <Careers />
    </div>
  ),
});