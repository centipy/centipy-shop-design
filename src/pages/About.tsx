import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Sobre Nosotros | Centipy Shop</title>
        <meta name="description" content="Conoce la misión de Centipy Shop: tecnología premium con enfoque en experiencia y rendimiento." />
        <link rel="canonical" href="https://centipy.shop/sobre" />
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-3xl font-bold">Sobre Centipy Shop</h1>
        <p className="mt-4 text-muted-foreground">
          Centipy Shop es la extensión e-commerce de Centipy, enfocada en ofrecer productos tecnológicos
          de alto rendimiento con una experiencia de compra simple, clara y confiable.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
