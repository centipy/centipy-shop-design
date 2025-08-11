import React, { createContext, useContext, useMemo, useState } from "react";
import type { Product } from "@/data/products";

export type CartItem = {
  product: Product;
  qty: number;
};

type CartContextType = {
  items: CartItem[];
  add: (product: Product, qty?: number) => void;
  remove: (productId: string) => void;
  clear: () => void;
  total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const add = (product: Product, qty: number = 1) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.product.id === product.id);
      if (idx !== -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + qty };
        return next;
        }
      return [...prev, { product, qty }];
    });
  };

  const remove = (productId: string) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  };

  const clear = () => setItems([]);

  const total = useMemo(
    () => items.reduce((acc, i) => acc + i.product.price * i.qty, 0),
    [items]
  );

  const value = useMemo(() => ({ items, add, remove, clear, total }), [items, total]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
