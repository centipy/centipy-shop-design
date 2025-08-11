import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";

const priceFmt = (n: number) => new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" }).format(n * 4000);

const ProductPage = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { add } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-semibold">Producto no encontrado</h1>
          <Link to="/" className="mt-4 inline-block text-primary">Volver a la tienda</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const ld = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: [product.image],
    description: product.description,
    sku: product.id,
    brand: { "@type": "Brand", name: "Centipy" },
    offers: {
      "@type": "Offer",
      url: `https://centipy.shop/producto/${product.slug}`,
      priceCurrency: "COP",
      price: (product.price * 4000).toFixed(0),
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{`${product.name} | Centipy Shop`}</title>
        <meta name="description" content={product.description} />
        <link rel="canonical" href={`https://centipy.shop/producto/${product.slug}`} />
        <script type="application/ld+json">{JSON.stringify(ld)}</script>
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg border bg-card">
            <img
              src={product.image}
              alt={`${product.name} — Centipy Shop`}
              className="w-full h-auto transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-muted-foreground mb-4">{product.category}</p>
            <div className="text-2xl font-semibold">{priceFmt(product.price)}</div>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">{product.description}</p>
            <div className="mt-6 flex items-center gap-3">
              <Button variant="cta" size="lg" onClick={() => add(product, 1)}>Añadir al carrito</Button>
              <Link to="/checkout"><Button variant="hero" size="lg">Comprar ahora</Button></Link>
            </div>
            <ul className="mt-8 text-sm text-muted-foreground list-disc pl-5 space-y-2">
              <li>Garantía de 12 meses</li>
              <li>Envío gratis desde $200.000 COP</li>
              <li>Pagos 100% seguros</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
