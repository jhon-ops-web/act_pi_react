"use client";

import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <article style={{ border: "1px solid #e5e5e5", borderRadius: 8, padding: 12, textAlign: "center" }}>
      <a href={`/products/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img src={product.image} alt={product.title} style={{ width: "100%", height: 160, objectFit: "contain" }} />
        <h3 style={{ fontSize: 14, minHeight: 40 }}>{product.title}</h3>
      </a>
      <p style={{ fontWeight: 600 }}>${product.price}</p>
      <button onClick={() => addToCart(product)} style={{ padding: "6px 10px", background: "#0070f3", color: "#fff", border: 0, borderRadius: 6, cursor: "pointer" }}>
        Agregar
      </button>
    </article>
  );
}

