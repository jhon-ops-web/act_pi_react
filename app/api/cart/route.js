//
// 📂 app/api/cart/route.js
// API Route para manejar el carrito (GET y POST)
//
import { NextResponse } from 'next/server';

let cartItems = []; // Simulación de un carrito

export async function GET() {
  return NextResponse.json(cartItems);
}

export async function POST(request) {
  const { productId, quantity } = await request.json();
  const existingItem = cartItems.find(item => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cartItems.push({ productId, quantity });
  }

  return NextResponse.json({ message: 'Producto agregado al carrito.', cartItems });
}