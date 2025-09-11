"use client";

import { useContext, useMemo } from "react";
import { CartContext } from "@/context/CartContext";
import CartItem from "@/components/features/CartItem";

export default function CartPage() {
  const { cart } = useContext(CartContext);
  const total = useMemo(() => cart.reduce((sum, it) => sum + it.price * it.quantity, 0), [cart]);

  if (!cart.length) return <p style={{ padding: 20 }}>El carrito está vacío</p>;

  return (
    <main style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
      <h1>Carrito</h1>
      <div>
        {cart.map((it) => <CartItem key={it.id} item={it} />)}
      </div>
      <hr />
      <p style={{ textAlign: "right", fontWeight: "bold", fontSize: 18 }}>Total: ${total.toFixed(2)}</p>
    </main>
  );
}
