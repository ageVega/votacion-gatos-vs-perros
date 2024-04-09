// /src/backend/votacion2/app.js
// Configuración principal de Express.

const express = require('express');
const cors = require('cors');
const voteRoutes = require('./routes/voteRoutes');
const resultsRoutes = require('./routes/resultsRoutes');
const dbMiddleware = require('./middlewares/dbMiddleware');

const app = express();

app.use(cors({
    origin: '*' // Esto permite todas las solicitudes de cualquier origen
}));

app.use(express.json());
app.use(dbMiddleware);

// Rutas
app.use(voteRoutes);
app.use(resultsRoutes);

module.exports = app;
