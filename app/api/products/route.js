//
// 📂 app/api/products/route.js
// API Route para listar productos (GET)
//
import { NextResponse } from 'next/server';

const products = [
  { id: 1, name: 'Procesador Intel Core i9', price: 599, description: 'Procesador de alto rendimiento para gaming y creación de contenido.' },
  { id: 2, name: 'Tarjeta Gráfica NVIDIA RTX 4080', price: 1199, description: 'Tarjeta gráfica de última generación para gráficos hiperrealistas.' },
  { id: 3, name: 'Memoria RAM DDR5 (32GB)', price: 150, description: 'Módulo de memoria RAM de alta velocidad para multitarea fluida.' },
  { id: 4, name: 'SSD M.2 NVMe (1TB)', price: 99, description: 'Unidad de estado sólido ultrarrápida para tiempos de carga mínimos.' },
  { id: 5, name: 'Fuente de Poder 850W', price: 120, description: 'Fuente de poder certificada para alimentar componentes de alto consumo.' },
];

export async function GET() {
  return NextResponse.json(products);
}