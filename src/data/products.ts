import appMockup from "@/assets/ezyfinds-app.jpg";

export interface Service {
  name: string;
  emoji: string;
}

export interface ProductData {
  id: string;
  title: string;
  description: string;
  badge?: string;
  image: string;
  services?: Service[];
  primaryButton?: {
    text: string;
    action?: string;
  };
  secondaryButton?: {
    text: string;
    action?: string;
  };
}

export const productsData: ProductData[] = [
  {
    id: "ezy-finds",
    title: "Ezy Finds",
    description: "A hyperlocal all-in-one services marketplace connecting people with trusted nearby professionals — instantly. Drivers, maids, chefs, electricians, tutors, delivery helpers and more, in one beautifully simple app.",
    badge: "Flagship product",
    image: appMockup,
    services: [
      { name: "Drivers", emoji: "🚙" },
      { name: "Maids", emoji: "🧺" },
      { name: "Chefs", emoji: "👨🍳" },
      { name: "Electricians", emoji: "⚡" },
      { name: "Cleaners", emoji: "✨" },
      { name: "Tutors", emoji: "📚" },
      { name: "Delivery", emoji: "📦" },
      { name: "Pros", emoji: "🛠️" },
    ],
    primaryButton: {
      text: "Get early access",
    },
    secondaryButton: {
      text: "See roadmap",
    }
  }
];
