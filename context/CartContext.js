"use client";

import { createContext, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";




export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage("cart", []);

  function addToCart(product) {
    setCart((prev) => {
      const found = prev.find((it) => it.id === product.id);
      if (found) {
        return prev.map((it) =>
          it.id === product.id ? { ...it, quantity: it.quantity + 1 } : it
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((it) => it.id !== id));
  }

  const value = useMemo(() => ({ cart, addToCart, removeFromCart }), [cart]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
