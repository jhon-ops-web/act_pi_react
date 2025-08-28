Documentación de Despliegue (DEPLOYMENT.md)
Este documento guía el proceso para desplegar la aplicación "Partes de Computadores".

Requisitos Previos
Asegúrate de tener instalado:

Node.js: Versión 18.x o superior.

npm: El gestor de paquetes de Node.js.

Git: El sistema de control de versiones.

1. Clonar el Repositorio
Si aún no lo has hecho, clona el repositorio principal (el del líder del grupo) en tu máquina local.

git clone [URL_DEL_REPOSITORIO_DEL_LIDER]
cd [nombre-del-proyecto]

2. Instalar Dependencias
Desde la raíz del proyecto, ejecuta el siguiente comando para instalar todas las dependencias necesarias.

npm install

3. Configurar Variables de Entorno
Crea un archivo llamado .env.local en la raíz del proyecto, basado en el archivo .env.local.example proporcionado.

touch .env.local

4. Ejecutar la Aplicación en Modo de Desarrollo
Para ejecutar la aplicación localmente y ver los cambios en tiempo real, usa este comando.

npm run dev

La aplicación estará disponible en http://localhost:3000.

5. Preparar para Producción
Para construir la versión optimizada de la aplicación, usa este comando.

npm run build

6. Iniciar la Aplicación en Modo de Producción
Una vez que la aplicación ha sido construida, puedes iniciar el servidor de producción.

npm start
