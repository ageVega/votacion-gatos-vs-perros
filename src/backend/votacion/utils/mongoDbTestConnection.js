// src/backend/votacion/testConnection.js
// Prueba de conexión a la base de datos MongoDB

const { connect } = require('../models/mongoDbConnection');

async function testConnection() {
    try {
        const db = await connect();
        console.log('Test de conexión realizado con éxito.', db);
    } catch (error) {
        console.error('Test de conexión fallido:', error.message);
    }
}

testConnection();
