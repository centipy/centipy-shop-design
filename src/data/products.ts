import auroraHeadset from "@/assets/products/aurora-headset.jpg";
import nebulaKeyboard from "@/assets/products/nebula-keyboard.jpg";
import quantumMouse from "@/assets/products/quantum-mouse.jpg";
import orionSpeaker from "@/assets/products/orion-speaker.jpg";
import cypherHub from "@/assets/products/cypher-hub.jpg";
import lumenBulb from "@/assets/products/lumen-bulb.jpg";

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  category: string;
  badge?: "Nuevo" | "Destacado" | "Oferta";
  description: string;
};

export const products: Product[] = [
  {
    id: "p1",
    slug: "aurora-headset",
    name: "Aurora Headset Wireless",
    price: 129.99,
    image: auroraHeadset,
    category: "Audio",
    badge: "Destacado",
    description:
      "Auriculares inalámbricos con sonido espacial y baja latencia. Comodidad premium y 40h de batería.",
  },
  {
    id: "p2",
    slug: "nebula-keyboard",
    name: "Nebula Keyboard 65%",
    price: 149.99,
    image: nebulaKeyboard,
    category: "Teclados",
    badge: "Nuevo",
    description:
      "Teclado mecánico 65% con switches intercambiables y retroiluminación perimetral violeta.",
  },
  {
    id: "p3",
    slug: "quantum-mouse",
    name: "Quantum Mouse Pro",
    price: 89.99,
    image: quantumMouse,
    category: "Accesorios",
    description:
      "Mouse ergonómico ultraligero con sensor de precisión de 26K DPI y diseño perforado.",
  },
  {
    id: "p4",
    slug: "orion-speaker",
    name: "Orion Mini Speaker",
    price: 59.99,
    image: orionSpeaker,
    category: "Audio",
    description:
      "Altavoz Bluetooth compacto con 360° de sonido y anillo LED violeta personalizable.",
  },
  {
    id: "p5",
    slug: "cypher-hub",
    name: "Cypher USB‑C Hub",
    price: 74.99,
    image: cypherHub,
    category: "Accesorios",
    description:
      "Hub USB‑C de aluminio con 7 puertos, 10Gbps y soporte de carga passthrough.",
  },
  {
    id: "p6",
    slug: "lumen-bulb",
    name: "Lumen Smart Bulb",
    price: 24.99,
    image: lumenBulb,
    category: "Smart Home",
    badge: "Oferta",
    description:
      "Bombilla inteligente con control por app y asistentes. Escenas dinámicas violeta.",
  },
];

export const categories = [
  "Novedades",
  "Productos Destacados",
  "Audio",
  "Teclados",
  "Accesorios",
  "Smart Home",
];
