import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contacto | Centipy Shop</title>
        <meta name="description" content="¿Dudas o soporte? Escríbenos y te ayudamos con tu compra en Centipy Shop." />
        <link rel="canonical" href="https://centipy.shop/contacto" />
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 py-16 grid gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold">Contacto</h1>
          <p className="mt-4 text-muted-foreground">Envíanos un mensaje y nos pondremos en contacto lo antes posible.</p>
        </div>
        <form className="space-y-3">
          <div>
            <label className="text-sm text-muted-foreground">Nombre</label>
            <Input required className="mt-1" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Email</label>
            <Input required type="email" className="mt-1" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Mensaje</label>
            <textarea className="mt-1 h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" required />
          </div>
          <Button variant="cta">Enviar</Button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
