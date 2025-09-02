"use client";

import { useParams } from "next/navigation";
import { useFetch } from "@/hooks/useFetch";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { data: product, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`);
  const { addToCart } = useContext(CartContext);

  if (loading) return <p style={{ padding: 20 }}>Cargando…</p>;
  if (error)   return <p style={{ padding: 20 }}>Error: {String(error)}</p>;
  if (!product) return <p style={{ padding: 20 }}>Producto no encontrado</p>;

  return (
    <main style={{ padding: 20, display: "grid", gridTemplateColumns: "280px 1fr", gap: 24, alignItems: "start" }}>
      <img src={product.image} alt={product.title} style={{ width: 280, height: 280, objectFit: "contain", border: "1px solid #eee", borderRadius: 8 }} />
      <section>
        <h1 style={{ marginTop: 0 }}>{product.title}</h1>
        <p>{product.description}</p>
        <p style={{ fontWeight: "bold", fontSize: 18 }}>${product.price}</p>
        <button onClick={() => addToCart(product)} style={{ padding: "8px 12px", background: "#0070f3", color: "white", border: 0, borderRadius: 6, cursor: "pointer" }}>
          Agregar al carrito
        </button>
      </section>
    </main>
  );
}
