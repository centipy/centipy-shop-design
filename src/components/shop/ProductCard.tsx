import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

const priceFmt = (n: number) => new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" }).format(n * 4000);

export const ProductCard = ({ product }: { product: Product }) => {
  const { add } = useCart();

  return (
    <Card className="bg-card/70 border-border/60 hover:border-border transition-colors">
      <Link to={`/producto/${product.slug}`} aria-label={`Ver ${product.name}`}>
        <div className="aspect-square overflow-hidden rounded-t-md group">
          <img
            src={product.image}
            alt={`${product.name} — Centipy Shop`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-medium">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.category}</p>
          </div>
          {product.badge && (
            <span className="text-[10px] px-2 py-1 rounded-full bg-[hsl(var(--brand))/0.15] text-[hsl(var(--brand))] border border-[hsl(var(--brand))/0.3]">
              {product.badge}
            </span>
          )}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-semibold">{priceFmt(product.price)}</span>
          <Button variant="cta" size="sm" onClick={() => add(product, 1)}>Añadir</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
