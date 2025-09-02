import "../styles/globals.css";
import Header from "@/components/layout/Header.jsx";
import Navbar from "@/components/layout/Navbar.jsx";
import Sidebar from "@/components/layout/Sidebar.jsx";
import Footer from "@/components/layout/Footer.jsx";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        {/* Header arriba */}
        <Header />

        {/* Navbar debajo del header */}
        <Navbar />

        <div className="flex flex-1">
          {/* Sidebar a la izquierda */}
          <Sidebar />

          {/* Contenido principal */}
          <main className="flex-1 p-6">{children}</main>
        </div>

        {/* Footer abajo */}
        <Footer />
      </body>
    </html>
  );
}