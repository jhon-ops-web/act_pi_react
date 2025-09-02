"use client";

import ProductCard from "@/components/features/ProductCard";
import { useFetch } from "@/hooks/useFetch";

export default function ProductsPage() {
const { data: products, loading, error } = useFetch("https://fakestoreapi.com/products/category/electronics");

const computerParts = products?.filter(product =>
  product.title.toLowerCase().includes("laptop") ||
  product.title.toLowerCase().includes("ssd") ||
  product.title.toLowerCase().includes("hard drive") ||
  product.title.toLowerCase().includes("monitor")
);


  if (loading) return <p style={{ padding: 20 }}>Cargando productos…</p>;
  if (error)   return <p style={{ padding: 20 }}>Error: {String(error)}</p>;
  if (!products?.length) return <p style={{ padding: 20 }}>No hay productos</p>;

  return (
    <main style={{ padding: 20, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
      {products.map((p) => <ProductCard key={p.id} product={p} />)}
    </main>
  );
}
