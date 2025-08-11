import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/shop/ProductCard";
import { products } from "@/data/products";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const slugToCategory = (slug: string) => {
  const map: Record<string, string> = {
    audio: "Audio",
    teclados: "Teclados",
    accesorios: "Accesorios",
    "smart-home": "Smart Home",
  };
  return map[slug] ?? slug;
};

const CategoryPage = () => {
  const { slug } = useParams();
  const category = slugToCategory(slug || "");
  const filtered = products.filter((p) => p.category === category);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{`${category} | Centipy Shop`}</title>
        <meta name="description" content={`Compra ${category} en Centipy Shop: calidad y rendimiento.`} />
        <link rel="canonical" href={`https://centipy.shop/categoria/${slug}` } />
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">{category}</h1>
        {filtered.length === 0 ? (
          <p className="text-muted-foreground">No hay productos en esta categoría.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
