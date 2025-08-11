import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    id: "starter",
    name: "Plan Despegue",
    tagline: "Ideal para emprendedores",
    price: "$499",
    features: [
      "Landing Page de alto impacto",
      "Dominio y Hosting 1 año",
      "SEO inicial",
      "Asesoría y mantenimiento 1 mes",
    ],
  },
  {
    id: "growth",
    name: "Plan Crecimiento",
    tagline: "Para negocios en expansión",
    price: "$1,499",
    features: [
      "Sitio corporativo (hasta 5 secciones) o Tienda (hasta 20 productos)",
      "Dominio y Hosting 1 año",
      "Estrategia SEO completa",
      "Mantenimiento prioritario 3 meses",
    ],
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Plan Empresarial",
    tagline: "Para proyectos complejos",
    price: "Desde $3,999",
    features: [
      "Desarrollo a medida (CRM/Plataforma)",
      "Dominio y Hosting 1 año",
      "Rendimiento y seguridad avanzada",
      "Soporte continuo 6 meses + asesoría mensual",
    ],
  },
];

const PlanesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Planes | Centipy Shop</title>
        <meta name="description" content="Planes empaquetados: Despegue, Crecimiento y Empresarial. Elige el paquete ideal para tu negocio." />
        <link rel="canonical" href="https://centipy.shop/planes" />
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Planes que impulsan tu negocio</h1>
          <p className="mt-3 text-muted-foreground">Elige el plan que mejor se adapte a tus objetivos. Transparentes, escalables y listos para convertir.</p>
        </section>

        <section>
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((p) => (
              <article key={p.id} className={`rounded-lg border bg-card p-6 ${p.highlighted ? 'ring-2 ring-[hsl(var(--brand))]' : ''}`}>
                <h2 className="text-xl font-semibold">{p.name}</h2>
                <p className="text-sm text-muted-foreground">{p.tagline}</p>
                <div className="mt-4 text-3xl font-bold">{p.price}</div>
                <ul className="mt-4 space-y-2 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-[hsl(var(--brand))] mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contacto" className="mt-6 inline-block"><Button variant={p.highlighted ? 'cta' : 'secondary'}>Solicitar este plan</Button></Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">¿Necesitas algo a medida? También construimos soluciones personalizadas.</p>
          <Link to="/servicios" className="mt-3 inline-block"><Button variant="hero">Ver servicios</Button></Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PlanesPage;
