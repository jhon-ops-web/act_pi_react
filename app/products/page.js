"use client";

import ProductCard from "@/components/features/ProductCard";
import { useFetch } from "@/hooks/useFetch";

export default function ProductsPage() {
  const { data: products, loading, error } = useFetch("https://fakestoreapi.com/products");

  if (loading) return <p style={{ padding: 20 }}>Cargando productos…</p>;
  if (error)   return <p style={{ padding: 20 }}>Error: {String(error)}</p>;
  if (!products?.length) return <p style={{ padding: 20 }}>No hay productos</p>;

  return (
    <main style={{ padding: 20, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
      {products.map((p) => <ProductCard key={p.id} product={p} />)}
    </main>
  );
}
