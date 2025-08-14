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
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,hsl(var(--brand)/0.25),transparent_60%),radial-gradient(1200px_600px_at_110%_10%,hsl(var(--brand-variant)/0.2),transparent_60%)] pointer-events-none" aria-hidden />
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">Soluciones Digitales que Impulsan tu Negocio</h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              Desde Landing Pages de alto impacto hasta optimización SEO avanzada.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Link to="/planes"><Button variant="cta" size="lg">Ver Planes y Servicios</Button></Link>
              <Link to="/plantillas"><Button variant="hero" size="lg">Ver plantillas</Button></Link>
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

        {/* Servicios */}
        <section className="container mx-auto px-4 py-10">
          <header className="mb-6">
            <h2 className="text-2xl font-semibold">Nuestros Servicios</h2>
            <p className="text-sm text-muted-foreground">Desarrollo a medida, SEO y rendimiento para maximizar resultados.</p>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Landing Pages", desc: "Enfocadas en conversión.", icon: "💥" },
              { title: "Tiendas Online", desc: "E‑commerce completos.", icon: "🛒" },
              { title: "Sitios Corporativos/Blogs", desc: "Multipágina con CMS.", icon: "🏢" },
              { title: "CRM a Medida", desc: "Gestión de clientes", icon: "📇" },
              { title: "Consultoría SEO", desc: "Auditoría y plan.", icon: "🔎" },
              { title: "Rendimiento (WPO)", desc: "Velocidad y CWV.", icon: "⚡" },
            ].map((s) => (
              <article key={s.title} className="rounded-lg border bg-card p-6">
                <div className="text-2xl" aria-hidden>{s.icon}</div>
                <h3 className="mt-3 font-medium">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-6">
            <Link to="/servicios"><Button variant="secondary">Ver todos los servicios</Button></Link>
          </div>
        </section>

        {/* Planes Destacados */}
        <section className="container mx-auto px-4 py-10">
          <header className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-semibold">Planes Destacados</h2>
            <Link to="/planes" className="text-sm text-primary">Comparar todos</Link>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Despegue", price: "$499", benefits: ["Landing Page", "Dominio+Hosting 1 año", "SEO inicial"] },
              { name: "Crecimiento", price: "$1,499", benefits: ["Sitio 5 secciones o Tienda 20 prod.", "SEO completo", "Prioridad 3 meses"] },
              { name: "Empresarial", price: "Desde $3,999", benefits: ["Desarrollo a medida", "Rendimiento+Seguridad", "Soporte 6 meses"] },
            ].map((p) => (
              <article key={p.name} className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <div className="mt-1 text-2xl font-bold">{p.price}</div>
                <ul className="mt-3 text-sm space-y-1 text-muted-foreground list-disc pl-5">
                  {p.benefits.map((b) => (<li key={b}>{b}</li>))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Plantillas Populares */}
        <section className="container mx-auto px-4 py-10">
          <header className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-semibold">Plantillas Populares</h2>
            <Link to="/plantillas" className="text-sm text-primary">Ver todas</Link>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {["landing-stellar","ecommerce-ignite","corporate-pulse"].map((slug) => (
              <Link key={slug} to={`/plantilla/${slug}`} className="rounded-lg border bg-card overflow-hidden">
                <div className="aspect-video bg-secondary/40">
                  <img src="/placeholder.svg" alt={`Vista previa de ${slug}`} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{slug.replace('-', ' ')}</span>
                    <span className="text-sm text-muted-foreground">desde $79</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Prueba Social */}
        <section className="container mx-auto px-4 py-12">
          <div className="rounded-lg border bg-secondary/30 p-6">
            <h2 className="text-2xl font-semibold">Lo que dicen nuestros clientes</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {[
                { quote: "Aumentamos 3x las conversiones con su nueva landing.", author: "María, Fundadora" },
                { quote: "El sitio carga en menos de 1s y el SEO mejoró notablemente.", author: "Carlos, Director de Marketing" },
                { quote: "El CRM a medida nos ahorra horas cada semana.", author: "Laura, Operaciones" },
              ].map((t) => (
                <blockquote key={t.author} className="rounded-md bg-card p-5 border">
                  <p className="text-sm">“{t.quote}”</p>
                  <footer className="mt-3 text-xs text-muted-foreground">— {t.author}</footer>
                </blockquote>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link to="/contacto"><Button variant="cta">Hablar con nosotros</Button></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
