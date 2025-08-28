//
// app/api/users/login/route.js
// API Route para el inicio de sesión (POST)
//

import { NextResponse } from 'next/server';

// Simulación de una base de datos de usuarios en memoria
// ¡Importante! Este array se reinicia cada vez que el servidor se reinicia.
export const users = [
  { id: '1', name: 'Cesar', email: 'cesar@example.com', password: 'password123' },
];

export async function POST(request) {
  const { email, password } = await request.json();

  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return NextResponse.json({ message: 'Credenciales inválidas.' }, { status: 401 });
  }

  // Si las credenciales son válidas, devuelve los datos del usuario.
  return NextResponse.json({ message: 'Inicio de sesión exitoso.', user });
}