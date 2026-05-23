import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MG Innovations" },
      { name: "description", content: "Partnership, investment, press or careers — reach out to MG Innovations Pvt Ltd." },
      { property: "og:title", content: "Contact MG Innovations" },
      { property: "og:description", content: "Let's build something." },
    ],
  }),
  component: () => (
    <div className="pt-32">
      <Contact />
    </div>
  ),
});