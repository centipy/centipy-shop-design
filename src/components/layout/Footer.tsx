import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto px-4 py-10 grid gap-6 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-sm bg-gradient-to-br from-[hsl(var(--brand))] to-[hsl(var(--brand-variant))]" aria-hidden />
            <span className="text-lg font-semibold tracking-tight">Centipy Shop</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Tecnología que impulsa tu mundo. Envíos rápidos y compra segura.
          </p>
        </div>
        <nav className="text-sm flex items-center gap-4 md:justify-end">
          <Link to="/servicios" className="text-muted-foreground hover:text-foreground">Servicios</Link>
          <Link to="/planes" className="text-muted-foreground hover:text-foreground">Planes</Link>
          <Link to="/plantillas" className="text-muted-foreground hover:text-foreground">Plantillas</Link>
          <Link to="/sobre" className="text-muted-foreground hover:text-foreground">Sobre</Link>
          <Link to="/contacto" className="text-muted-foreground hover:text-foreground">Contacto</Link>
          <a href="https://centipy.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">Blog</a>
        </nav>
      </div>
      <div className="text-xs text-muted-foreground text-center pb-6">© {new Date().getFullYear()} Centipy. Todos los derechos reservados.</div>
    </footer>
  );
};

export default Footer;
