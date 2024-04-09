// src/backend/votacion/middlewares/dbMiddleware.js
// Middleware para conectar a la base de datos MongoDB

const { connect } = require('../models/db');

async function dbMiddleware(req, res, next) {
    try {
        const db = await connect();
        req.db = db;
        next();
    } catch (error) {
        console.error('Error en el middleware de la DB:', error.message);
        res.status(500).send({ error: 'Error de conexión a la base de datos.' });
    }
}

module.exports = dbMiddleware;