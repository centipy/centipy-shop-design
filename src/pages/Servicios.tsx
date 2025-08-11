import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";
import { CheckCircle2, Code2, Store, Newspaper, Database, Search, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServiciosPage = () => {
  const services = [
    { icon: Code2, title: "Desarrollo de Landing Pages", desc: "Páginas enfocadas en conversión con copy y diseño optimizados." },
    { icon: Store, title: "Tiendas Online", desc: "E‑commerce completos listos para vender desde el día uno." },
    { icon: Newspaper, title: "Sitios Corporativos/Blogs", desc: "Webs con múltiples secciones y CMS sencillo para editar contenido." },
    { icon: Database, title: "CRM a Medida", desc: "Sistemas personalizados para gestionar clientes y procesos." },
    { icon: Search, title: "Consultoría SEO", desc: "Auditoría y plan de acción para mejorar tu posicionamiento." },
    { icon: Gauge, title: "Optimización de Rendimiento (WPO)", desc: "Mejora de Core Web Vitals y arquitectura para velocidad." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Servicios | Centipy Shop</title>
        <meta name="description" content="Servicios digitales: landing pages, tiendas online, SEO, WPO, sitios corporativos y CRM a medida." />
        <link rel="canonical" href="https://centipy.shop/servicios" />
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <section className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Servicios Digitales a Medida</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">Desarrollamos soluciones web modernas, rápidas y orientadas a resultados. Elegimos la mejor estrategia para tu negocio.</p>
        </section>

        <section>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.title} className="rounded-lg border bg-card p-6">
                <s.icon className="h-6 w-6 text-[hsl(var(--brand))]" aria-hidden />
                <h2 className="mt-4 text-lg font-semibold">{s.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <Link to="/contacto" className="mt-4 inline-block"><Button variant="cta" size="sm">Solicitar cotización</Button></Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="rounded-lg border bg-secondary/30 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">¿Listo para empezar?</h2>
                <p className="text-sm text-muted-foreground">Cuéntanos tu proyecto y en 24h tendrás una propuesta clara.</p>
              </div>
              <Link to="/contacto"><Button variant="hero">Hablar con un experto</Button></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiciosPage;
