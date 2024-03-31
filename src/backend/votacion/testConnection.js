// testConnection.js

const { connect } = require('./db');

async function testConnection() {
    const client = await connect();
    if (client) {
        console.log('Test de conexión realizado con éxito.');
        // Proceder con las operaciones, por ejemplo:
        // const db = client.db('votacion_gatos_perros');
        // const col = db.collection('tuColeccion');
        // Hacer algo con la colección...
        
        // Cierra la conexión solo después de completar tus operaciones
        await client.close();
    } else {
        console.log('Test de conexión fallido.');
    }
}

testConnection();
