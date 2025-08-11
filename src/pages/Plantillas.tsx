import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";
import { templates } from "@/data/templates";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const priceFmt = (n: number) => new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" }).format(n * 4000);

const PlantillasPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Plantillas Web Premium | Centipy Shop</title>
        <meta name="description" content="Explora nuestras plantillas web premium: portfolio, e‑commerce, corporativo y blog. Demo en vivo y compra inmediata." />
        <link rel="canonical" href="https://centipy.shop/plantillas" />
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <section className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Plantillas Populares</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">Templates listos para usar. Instala, personaliza y lanza en días.</p>
        </section>
        <section>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((t) => (
              <article key={t.id} className="rounded-lg border bg-card overflow-hidden">
                <Link to={`/plantilla/${t.slug}`} aria-label={`Ver ${t.name}`}>
                  <div className="aspect-video bg-secondary/40">
                    <img src={t.image} alt={`${t.name} — Plantilla web premium`} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                </Link>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-base font-medium">{t.name}</h2>
                      <p className="text-sm text-muted-foreground">Plantilla</p>
                    </div>
                    <span className="text-sm font-semibold">{priceFmt(t.price)}</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <a href={t.demoUrl} target="_blank" rel="noreferrer"><Button size="sm" variant="secondary">Ver demo</Button></a>
                    <Link to={`/plantilla/${t.slug}`}><Button size="sm" variant="cta">Ver detalles</Button></Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PlantillasPage;
