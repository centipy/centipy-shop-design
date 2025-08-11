import { NavLink, Link } from "react-router-dom";
import { ShoppingCart, Search, Info, Mail, Home } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

export const Header = () => {
  const { items } = useCart();
  const count = items.reduce((a, i) => a + i.qty, 0);

  const navLinkCls = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-foreground"
      : "text-muted-foreground hover:text-foreground transition-colors";

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b"> 
      <div className="container mx-auto px-4 py-3 flex items-center gap-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-sm bg-gradient-to-br from-[hsl(var(--brand))] to-[hsl(var(--brand-variant))]" aria-hidden />
          <span className="text-lg font-semibold tracking-tight">Centipy Shop</span>
        </Link>

        <nav className="hidden md:flex items-center gap-5 ml-6">
          <NavLink to="/" end className={navLinkCls}>
            <span className="inline-flex items-center gap-1"><Home className="h-4 w-4" />Inicio</span>
          </NavLink>
          <NavLink to="/categoria/audio" className={navLinkCls}>
            Audio
          </NavLink>
          <NavLink to="/categoria/teclados" className={navLinkCls}>
            Teclados
          </NavLink>
          <NavLink to="/categoria/accesorios" className={navLinkCls}>
            Accesorios
          </NavLink>
          <NavLink to="/categoria/smart-home" className={navLinkCls}>
            Smart Home
          </NavLink>
        </nav>

        <div className="ml-auto flex-1 max-w-lg hidden md:flex items-center gap-2">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Busca productos..." className="pl-10 bg-secondary/50" aria-label="Buscar productos" />
          </div>
        </div>

        <div className="ml-auto md:ml-2 flex items-center gap-2">
          <a href="https://centipy.com" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
            Blog
          </a>
          <NavLink to="/sobre" className={({isActive}) => isActive ? "text-sm" : "text-sm text-muted-foreground hover:text-foreground"}>
            <span className="inline-flex items-center gap-1"><Info className="h-4 w-4" />Sobre</span>
          </NavLink>
          <NavLink to="/contacto" className={({isActive}) => isActive ? "text-sm" : "text-sm text-muted-foreground hover:text-foreground"}>
            <span className="inline-flex items-center gap-1"><Mail className="h-4 w-4" />Contacto</span>
          </NavLink>
          <Link to="/cart">
            <Button variant="cta" size="sm" aria-label="Ver carrito">
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Carrito</span>
              {count > 0 && (
                <span className="ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-secondary px-1 text-xs text-secondary-foreground">
                  {count}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
