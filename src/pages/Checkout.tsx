import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Helmet } from "react-helmet-async";
import { toast } from "@/hooks/use-toast";

const CheckoutPage = () => {
  const { items, total, clear } = useCart();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Pedido recibido", description: "Gracias por tu compra. Este es un flujo de demostración." });
    clear();
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Checkout | Centipy Shop</title>
        <meta name="description" content="Finaliza tu compra de forma rápida y segura en Centipy Shop." />
        <link rel="canonical" href="https://centipy.shop/checkout" />
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-[1fr_380px]">
        <form onSubmit={onSubmit} className="space-y-4">
          <h1 className="text-2xl font-bold">Información de pago</h1>
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <label className="text-sm text-muted-foreground">Nombre</label>
              <Input required placeholder="Tu nombre" className="mt-1" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Email</label>
              <Input required type="email" placeholder="tucorreo@ejemplo.com" className="mt-1" />
            </div>
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Dirección</label>
            <Input required placeholder="Calle 123 #45 - 67" className="mt-1" />
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            <div>
              <label className="text-sm text-muted-foreground">Ciudad</label>
              <Input required placeholder="Ciudad" className="mt-1" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Departamento</label>
              <Input required placeholder="Departamento" className="mt-1" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Código Postal</label>
              <Input required placeholder="000000" className="mt-1" />
            </div>
          </div>
          <Button type="submit" variant="cta" size="lg">Pagar ahora</Button>
        </form>
        <aside className="border rounded-lg p-4 h-fit bg-card/60">
          <h2 className="text-lg font-semibold mb-3">Resumen</h2>
          <div className="space-y-2">
            {items.map((i) => (
              <div key={i.product.id} className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{i.product.name} x{i.qty}</span>
                <span className="font-medium">{new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" }).format(i.product.price * 4000 * i.qty)}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-muted-foreground">Total</span>
            <span className="font-semibold">{new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" }).format(total * 4000)}</span>
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
