
# Documentación del Backend para "votación-gatos-vs-perros"

## Descripción General

El backend de la aplicación "votación-gatos-vs-perros" está diseñado para manejar las operaciones del lado del servidor de una aplicación de votación. Esta parte del sistema se encarga de gestionar las solicitudes HTTP relacionadas con las votaciones y los resultados de votos entre gatos y perros.

## Tecnologías Utilizadas

- **Node.js**: Plataforma de ejecución para el código del servidor.
- **Express**: Framework web utilizado para simplificar la configuración de rutas y middlewares en el servidor.
- **MongoDB**: Base de datos NoSQL utilizada para almacenar los votos.

## Estructura de Directorios

El código fuente del backend se encuentra bajo `src/backend/votacion`. Los principales subdirectorios y archivos son:

- `app.js`: Configura el servidor Express, los middlewares y las rutas.
- `server.js`: Inicia el servidor en el puerto definido.
- `middlewares/`: Contiene los middlewares como la conexión a la base de datos (`mongoDbMiddleware.js`) y el manejo de errores (`errorHandler.js`).
- `models/`: Incluye los modelos de la base de datos, específicamente la conexión a MongoDB (`mongoDbConnection.js`).
- `routes/`: Define las rutas del servidor para votar (`voteRoutes.js`) y obtener los resultados (`resultsRoutes.js`).
- `utils/`: Contiene utilidades como la prueba de conexión a la base de datos (`mongoDbTestConnection.js`).

## Configuración del Servidor

### `app.js`

- **cors**: Configurado para aceptar solicitudes de cualquier origen.
- **express.json()**: Middleware para parsear cuerpos de solicitudes JSON.
- **Rutas API**:
  - `/api/vote`: Permite enviar votos.
  - `/api/results`: Permite obtener los resultados de las votaciones.
- **Error Handling**: Utiliza `errorHandler` para capturar y responder a errores durante las solicitudes.

### `server.js`

- **Puerto**: Define el puerto de escucha (3000 por defecto).
- **Inicio del servidor**: Lanza un servidor HTTP que escucha en el puerto configurado.

## Middlewares

### `mongoDbMiddleware.js`

- Establece una conexión con MongoDB antes de procesar las solicitudes y adjunta la instancia de la base de datos al objeto de solicitud para ser usada por las rutas.

### `errorHandler.js`

- Captura errores lanzados durante las solicitudes HTTP y envía respuestas formateadas con el código de estado adecuado y mensajes de error.

## Rutas

### `voteRoutes.js`

- **POST `/vote`**: Recibe un voto (`gatos` o `perros`), actualiza la base de datos incrementando el contador del voto correspondiente, y responde con el resultado de la operación.

### `resultsRoutes.js`

- **GET `/results`**: Consulta y devuelve todos los resultados almacenados en la base de datos.

## Conexión a la Base de Datos

### `mongoDbConnection.js`

- **URI de Conexión**: Configura la URI de conexión utilizando credenciales y parámetros de conexión.
- **Función de Conexión**: Establece una conexión a MongoDB, reutilizable para sucesivas llamadas a la base de datos.

## Dockerización del Backend

El backend está configurado para ser desplegado usando Docker, como se define en `Dockerfile`:
- Se basa en una imagen oficial de Node.js.
- Instala dependencias y copia los archivos necesarios.
- Expone el puerto 3000 y configura el comando por defecto para iniciar el servidor.

## Comunicación con el Frontend

El backend está preparado para recibir solicitudes del frontend, específicamente para votaciones y consultas de resultados, gestionando estas operaciones a través de las rutas definidas y utilizando la base de datos MongoDB para almacenamiento persistente.

## Configuración del Entorno de Desarrollo y Comandos de Inicio

### Requisitos Previos

Antes de comenzar a configurar el entorno de desarrollo para el backend, asegúrate de tener instalado lo siguiente:
- **Node.js**: La plataforma de ejecución para el servidor, preferiblemente la última versión LTS.
- **npm** (Node Package Manager): Para gestionar las dependencias del proyecto.

Puedes verificar si Node.js y npm están instalados correctamente con los siguientes comandos:
```bash
node --version
npm --version
```

### Configuración Local del Backend

Para configurar y ejecutar el backend de la aplicación en tu entorno local, sigue estos pasos:

1. **Clona el repositorio**: Asegúrate de tener una copia del código fuente en tu máquina local. Si aún no has clonado el repositorio, puedes hacerlo con el siguiente comando:
   ```bash
   git clone https://github.com/ageVega/votacion-gatos-vs-perros.git
   ```

2. **Navega al directorio del backend**:
   ```bash
   cd src/backend/votacion
   ```

3. **Instala las dependencias**:
   - Ejecuta el siguiente comando para instalar todas las dependencias necesarias listadas en el archivo `package.json`:
     ```bash
     npm install
     ```

4. **Inicia el servidor**:
   - Una vez instaladas las dependencias, puedes iniciar el servidor utilizando:
     ```bash
     npm start
     ```
   - Este comando iniciará el servidor en el puerto configurado (por defecto es el 3000), y estará listo para recibir solicitudes en `http://localhost:3000`.

### Comprobación del Funcionamiento

Una vez que el servidor esté en funcionamiento, puedes comprobar que todo funciona correctamente realizando una solicitud simple, por ejemplo, accediendo a `http://localhost:3000/api/results` desde un navegador o utilizando una herramienta como Postman para ver los resultados de la votación.

### Notas Adicionales

- **Variables de Entorno**: Asegúrate de configurar cualquier variable de entorno necesaria que el backend requiera, como las credenciales de la base de datos o claves API, en un archivo `.env` en el directorio del backend o configuradas directamente en tu entorno de desarrollo.
- **Logs**: Mantén un ojo en la consola para cualquier mensaje de error o advertencia que pueda indicarte problemas en la configuración o en la conexión con otros servicios como la base de datos.
