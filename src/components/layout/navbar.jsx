import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Mi Aplicación</h1>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <ul className="hidden md:flex space-x-4">
          <li className="hover:text-blue-400 cursor-pointer">Inicio</li>
          <li className="hover:text-blue-400 cursor-pointer">Productos</li>
          <li className="hover:text-blue-400 cursor-pointer">Acerca de</li>
        </ul>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <ul className="flex flex-col mt-2 md:hidden space-y-2">
          <li className="hover:text-blue-400 cursor-pointer">Inicio</li>
          <li className="hover:text-blue-400 cursor-pointer">Productos</li>
          <li className="hover:text-blue-400 cursor-pointer">Acerca de</li>
        </ul>
      )}
    </nav>
  );
}