import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { About } from "@/components/sections/About";
import { Products } from "@/components/sections/Products";
import { Why } from "@/components/sections/Why";
import { Investors } from "@/components/sections/Investors";
import { Vision } from "@/components/sections/Vision";
import { Careers } from "@/components/sections/Careers";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MG Innovations Pvt Ltd — Future of everyday digital services" },
      { name: "description", content: "Futuristic technology startup building scalable digital products, mobile apps and AI-powered platforms. Home of Ezy Finds, the hyperlocal services marketplace." },
      { property: "og:title", content: "MG Innovations Pvt Ltd" },
      { property: "og:description", content: "Building the future of everyday digital services." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Products />
      <Why />
      <Investors />
      <Vision />
      <Careers />
      <Contact />
    </>
  );
}
