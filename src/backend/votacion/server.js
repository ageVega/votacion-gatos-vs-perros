// src/backend/votacion2/server.js
// Punto de entrada del servidor que inicia el servidor Express.

const app = require('./app');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
