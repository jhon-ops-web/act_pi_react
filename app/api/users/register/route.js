//
// app/api/users/register/route.js
// API Route para el registro (POST)
//

import { NextResponse } from 'next/server';
import { users } from '../login/route'; // Importa el array de usuarios compartido

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();

    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return NextResponse.json({ message: 'El correo electrónico ya está registrado.' }, { status: 409 });
    }

    const newUser = { id: (users.length + 1).toString(), name, email, password };
    users.push(newUser); // Agrega el nuevo usuario al array compartido

    return NextResponse.json({
      message: 'Registro exitoso. Por favor, inicia sesión.'
    }, { status: 201 });

  } catch (error) {
    return NextResponse.json({ message: 'Error en el servidor al procesar el registro.' }, { status: 500 });
  }
}
