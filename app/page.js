//
// 📂 app/page.js
// Componente de la página principal para mostrar los productos de computadoras.
//
'use client';

import { useState, useEffect } from 'react';
import useAuth from '../lib/hooks/useAuth'; // Importa el hook de autenticación
import Link from 'next/link';

// Define el tipo de dato para un producto
/**
 * @typedef {Object} Product
 * @property {number} id - Identificador único del producto.
 * @property {string} name - Nombre del producto.
 * @property {number} price - Precio del producto.
 * @property {string} description - Descripción del producto.
 */

export default function Home() {
  const { isAuthenticated, user, loading: authLoading, logout } = useAuth(); // Usa el hook
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    /**
     * Función asíncrona para obtener los productos de la API.
     */
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('No se pudieron obtener los productos');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (isAuthenticated) {
      fetchProducts();
    } else {
      setLoading(false);
    }
  }, [isAuthenticated]);

  /**
   * Maneja el evento de añadir un producto al carrito.
   * @param {Product} product - El producto que se va a agregar.
   */
  const handleAddToCart = async (product) => {
    if (!isAuthenticated) {
      setMessage('Debes iniciar sesión para añadir productos al carrito.');
      return;
    }

    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: product.id, quantity: 1 }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Error al añadir al carrito.');
      }

      const data = await response.json();
      setMessage(`"${product.name}" añadido al carrito!`);
      // Opcional: limpiar el mensaje después de unos segundos
      setTimeout(() => setMessage(null), 3000); 
      console.log('Carrito actualizado:', data.cartItems);

    } catch (err) {
      setMessage(`Error: ${err.message}`);
    }
  };

  if (authLoading || loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          {authLoading ? 'Verificando autenticación...' : 'Cargando productos...'}
        </p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center">
        <p className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          Debes iniciar sesión para ver los productos.
        </p>
        <Link href="/auth/login" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
          Ir a Iniciar Sesión
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Hola, {user.name || 'Usuario'}
          </h1>
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
          >
            Cerrar Sesión
          </button>
        </div>
        <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12">
          Productos de Computadoras
        </p>
        {message && (
          <div className="bg-indigo-500 text-white p-4 rounded-lg mb-8 text-center">
            {message}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                    ${product.price}
                  </span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
                  >
                    Añadir al Carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
