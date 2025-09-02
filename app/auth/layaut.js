//
// 📂 app/auth/layout.js
// Componente de layout para las páginas de autenticación
// Este layout se utiliza para compartir la interfaz de usuario entre las páginas de inicio de sesión y registro.
//
import React from 'react';

export default function AuthLayout({ children }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        {children}
      </div>
    </div>
  );
}