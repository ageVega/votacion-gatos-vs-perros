// /src/backend/votacion2/app.js
// Configuración principal de Express.

const express = require('express');
const cors = require('cors');
const voteRoutes = require('./routes/voteRoutes');
const resultsRoutes = require('./routes/resultsRoutes');
const dbMiddleware = require('./middlewares/mongoDbMiddleware');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors({ origin: '*' })); // Esto permite todas las solicitudes de cualquier origen

app.use(express.json());
app.use(dbMiddleware);

// Rutas
app.use('/api', voteRoutes);
app.use('/api', resultsRoutes);

// Manejo de errores
app.use(errorHandler);  

module.exports = app;
