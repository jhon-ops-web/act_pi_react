//
// 📂 lib/hooks/useAuth.js
// Hook personalizado para manejar el estado de autenticación de forma persistente.
//
'use client';

import { useState, useEffect } from 'react';

const AUTH_KEY = 'user_auth_data'; // Clave para guardar en localStorage

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Al cargar la página, verifica si hay datos de usuario en el almacenamiento local
    const storedUser = localStorage.getItem(AUTH_KEY);
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
        setIsAuthenticated(true);
      } catch (e) {
        console.error('Failed to parse user data from localStorage', e);
        localStorage.removeItem(AUTH_KEY); // Limpia datos corruptos
      }
    }
    setLoading(false);
  }, []);

  /**
   * Guarda los datos del usuario y actualiza el estado.
   * @param {object} userData - Datos del usuario, típicamente de una API.
   */
  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem(AUTH_KEY, JSON.stringify(userData)); // Persiste la sesión
  };

  /**
   * Cierra la sesión y limpia los datos.
   */
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem(AUTH_KEY); // Elimina los datos de la sesión
  };

  return {
    user,
    isAuthenticated,
    loading,
    login,
    logout,
  };
};

export default useAuth;