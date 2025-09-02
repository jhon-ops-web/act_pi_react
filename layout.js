import "./globals.css";
import { CartProvider } from "@/context/CartContext";

export const metadata = {
  title: "E-commerce",
  description: "Demo con productos y carrito",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <nav style={{ padding: "10px", background: "#f5f5f5" }}>
          <a href="/" style={{ marginRight: 12 }}>Inicio</a>
          <a href="/products" style={{ marginRight: 12 }}>Productos</a>
          <a href="/cart">Carrito</a>
        </nav>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
