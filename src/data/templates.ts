import type { Product } from "@/data/products";

export type Template = Product & {
  demoUrl: string;
  images?: string[];
};

export const templates: Template[] = [
  {
    id: "t1",
    slug: "landing-stellar",
    name: "Landing Stellar",
    price: 79,
    image: "/placeholder.svg",
    category: "Plantillas",
    description: "Landing Page de alto impacto enfocada en conversión. Animaciones suaves y secciones hero, features y pricing.",
    demoUrl: "https://example.com/demo/stellar",
    images: ["/placeholder.svg"],
  },
  {
    id: "t2",
    slug: "ecommerce-ignite",
    name: "E-commerce Ignite",
    price: 129,
    image: "/placeholder.svg",
    category: "Plantillas",
    description: "Plantilla para tienda online con carrito, filtros y checkout básico.",
    demoUrl: "https://example.com/demo/ignite",
    images: ["/placeholder.svg"],
  },
  {
    id: "t3",
    slug: "corporate-pulse",
    name: "Corporate Pulse",
    price: 99,
    image: "/placeholder.svg",
    category: "Plantillas",
    description: "Sitio corporativo con secciones de servicios, equipo, testimonios y blog.",
    demoUrl: "https://example.com/demo/pulse",
    images: ["/placeholder.svg"],
  },
  {
    id: "t4",
    slug: "portfolio-neo",
    name: "Portfolio Neo",
    price: 59,
    image: "/placeholder.svg",
    category: "Plantillas",
    description: "Portfolio minimalista con galerías y páginas de proyecto.",
    demoUrl: "https://example.com/demo/neo",
    images: ["/placeholder.svg"],
  },
];
