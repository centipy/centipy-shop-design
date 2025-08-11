import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/shop/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Index = () => {
  const novedades = products.filter((p) => p.badge === "Nuevo");
  const destacados = products.filter((p) => p.badge === "Destacado");
  const categorias = [
    { label: "Audio", slug: "audio" },
    { label: "Teclados", slug: "teclados" },
    { label: "Accesorios", slug: "accesorios" },
    { label: "Smart Home", slug: "smart-home" },
  ];

  const ld = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Centipy Shop",
    url: "https://centipy.shop/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://centipy.shop/buscar?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Centipy Shop | Tecnología que impulsa tu mundo</title>
        <meta name="description" content="Tienda online oficial de Centipy. Novedades, productos destacados y categorías populares para comprar ahora." />
        <link rel="canonical" href="https://centipy.shop/" />
        <script type="application/ld+json">{JSON.stringify(ld)}</script>
      </Helmet>
      <Header />
      <main className="">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,hsl(var(--brand)/0.25),transparent_60%),radial-gradient(1200px_600px_at_110%_10%,hsl(var(--brand-variant)/0.2),transparent_60%)] pointer-events-none" aria-hidden />
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Centipy Shop: tecnología que impulsa tu mundo</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Compra hardware y accesorios premium con una experiencia rápida y clara, optimizada para conversión.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link to="#novedades"><Button variant="cta" size="lg">Ver novedades</Button></Link>
              <Link to="/categoria/teclados"><Button variant="hero" size="lg">Explorar teclados</Button></Link>
            </div>
          </div>
        </section>

        <section id="novedades" className="container mx-auto px-4 py-10">
          <header className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-semibold">Novedades</h2>
            <Link to="/categoria/accesorios" className="text-sm text-primary">Ver todo</Link>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(novedades.length ? novedades : products.slice(0,3)).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-10">
          <header className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-semibold">Productos Destacados</h2>
            <Link to="/categoria/audio" className="text-sm text-primary">Ver todo</Link>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(destacados.length ? destacados : products.slice(3,6)).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold mb-6">Categorías Populares</h2>
          <div className="flex flex-wrap gap-3">
            {categorias.map((c) => (
              <Link key={c.slug} to={`/categoria/${c.slug}`} className="inline-flex">
                <Button variant="outline" className="bg-secondary/50 hover:bg-secondary">{c.label}</Button>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
