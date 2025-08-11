import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const priceFmt = (n: number) => new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" }).format(n * 4000);

const CartPage = () => {
  const { items, remove, clear, total } = useCart();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Carrito de compras | Centipy Shop</title>
        <meta name="description" content="Revisa tus productos y finaliza tu compra con confianza en Centipy Shop." />
        <link rel="canonical" href="https://centipy.shop/cart" />
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Tu Carrito</h1>
        {items.length === 0 ? (
          <div className="text-muted-foreground">Tu carrito está vacío. <Link to="/" className="text-primary">Explorar productos</Link></div>
        ) : (
          <div className="grid gap-6 md:grid-cols-[1fr_320px]">
            <div className="space-y-4">
              {items.map((i) => (
                <div key={i.product.id} className="flex items-center gap-4 border rounded-lg p-4 bg-card/60">
                  <img src={i.product.image} alt={i.product.name} className="h-16 w-16 rounded object-cover" />
                  <div className="flex-1">
                    <div className="font-medium">{i.product.name}</div>
                    <div className="text-sm text-muted-foreground">{priceFmt(i.product.price)} x {i.qty}</div>
                  </div>
                  <Button variant="outline" onClick={() => remove(i.product.id)}>Eliminar</Button>
                </div>
              ))}
            </div>
            <aside className="border rounded-lg p-4 h-fit bg-card/60">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold">{priceFmt(total)}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Impuestos y envío se calculan en el checkout.</p>
              <div className="mt-4 flex gap-2">
                <Link to="/checkout" className="flex-1"><Button variant="cta" className="w-full">Ir al checkout</Button></Link>
                <Button variant="outline" onClick={clear}>Vaciar</Button>
              </div>
            </aside>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
