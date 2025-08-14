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

// Productos placeholder para mantener la funcionalidad del sitio
export const products: Product[] = [];

export const categories = [
  "Novedades",
  "Productos Destacados",
];