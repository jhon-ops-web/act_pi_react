"use client";

import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

export default function CartItem({ item }) {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "80px 1fr auto auto", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: "1px solid #eee" }}>
      <img src={item.image} alt={item.title} style={{ width: 80, height: 80, objectFit: "contain" }} />
      <div>
        <div style={{ fontWeight: 600 }}>{item.title}</div>
        <div>Cantidad: {item.quantity}</div>
      </div>
      <div>${(item.price * item.quantity).toFixed(2)}</div>
      <button onClick={() => removeFromCart(item.id)} style={{ color: "#d11a2a", background: "transparent", border: "1px solid #d11a2a", borderRadius: 6, padding: "6px 10px", cursor: "pointer" }}>
        Eliminar
      </button>
    </div>
  );
}
