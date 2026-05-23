import { createFileRoute } from "@tanstack/react-router";
import { Investors } from "@/components/sections/Investors";
import { Vision } from "@/components/sections/Vision";

export const Route = createFileRoute("/investors")({
  head: () => ({
    meta: [
      { title: "Investors & Collaboration — MG Innovations" },
      { name: "description", content: "MG Innovations is raising and welcoming strategic partners. Backing the next generation of digital ecosystems." },
      { property: "og:title", content: "Invest in MG Innovations" },
      { property: "og:description", content: "Open to VCs, angels, incubators and strategic partners." },
    ],
  }),
  component: () => (
    <div className="pt-32">
      <Investors />
      <Vision />
    </div>
  ),
});