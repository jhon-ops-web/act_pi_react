Documentación de la API (API.md)
Esta documentación describe las rutas (endpoints) de la API implementadas para el proyecto integrador, "Partes de Computadores".

Endpoints de Autenticación y Usuarios
Endpoint

Método

Descripción

Parámetros (Body)

Respuesta Exitosa

/api/users/register

POST

Permite a un nuevo usuario registrarse en la aplicación.

email, password, name

{ "message": "Usuario registrado exitosamente.", "user": { ... } }

/api/users/login

POST

Autentica a un usuario existente.

email, password

{ "message": "Inicio de sesión exitoso.", "user": { ... } }

Endpoints de Productos
Endpoint

Método

Descripción

Parámetros (Body)

Respuesta Exitosa

/api/products

GET

Obtiene una lista completa de todos los productos disponibles.

Ninguno

[ { "id": 1, "name": "Laptop", ... }, { ... } ]

Endpoints del Carrito de Compras
Endpoint

Método

Descripción

Parámetros (Body)

Respuesta Exitosa

/api/cart

GET

Obtiene el estado actual del carrito de compras.

Ninguno

[ { "productId": 1, "quantity": 1 }, { ... } ]

/api/cart

POST

Agrega un producto al carrito de compras.

productId, quantity

{ "message": "Producto agregado al carrito.", "cartItems": [ ... ] }