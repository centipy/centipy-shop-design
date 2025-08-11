import { useParams, Link } from "react-router-dom";
import { templates } from "@/data/templates";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";
import { useCart } from "@/contexts/CartContext";

const priceFmt = (n: number) => new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" }).format(n * 4000);

const PlantillaPage = () => {
  const { slug } = useParams();
  const plantilla = templates.find((t) => t.slug === slug);
  const { add } = useCart();

  if (!plantilla) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-semibold">Plantilla no encontrada</h1>
          <Link to="/plantillas" className="mt-4 inline-block text-primary">Volver a plantillas</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const ld = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: plantilla.name,
    image: [plantilla.image],
    description: plantilla.description,
    sku: plantilla.id,
    brand: { "@type": "Brand", name: "Centipy" },
    offers: {
      "@type": "Offer",
      url: `https://centipy.shop/plantilla/${plantilla.slug}`,
      priceCurrency: "COP",
      price: (plantilla.price * 4000).toFixed(0),
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{`${plantilla.name} | Plantilla web | Centipy Shop`}</title>
        <meta name="description" content={plantilla.description} />
        <link rel="canonical" href={`https://centipy.shop/plantilla/${plantilla.slug}`} />
        <script type="application/ld+json">{JSON.stringify(ld)}</script>
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg border bg-card">
            <img src={plantilla.image} alt={`${plantilla.name} — Plantilla web premium`} className="w-full h-auto" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">{plantilla.name}</h1>
            <p className="text-muted-foreground mb-4">Plantilla Web Premium</p>
            <div className="text-2xl font-semibold">{priceFmt(plantilla.price)}</div>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">{plantilla.description}</p>
            <div className="mt-6 flex items-center gap-3">
              <a href={plantilla.demoUrl} target="_blank" rel="noreferrer"><Button variant="secondary" size="lg">Ver demo en vivo</Button></a>
              <Button variant="cta" size="lg" onClick={() => add(plantilla, 1)}>Añadir al carrito</Button>
            </div>
            <ul className="mt-8 text-sm text-muted-foreground list-disc pl-5 space-y-2">
              <li>Descarga inmediata</li>
              <li>Actualizaciones incluidas por 6 meses</li>
              <li>Documentación paso a paso</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlantillaPage;
