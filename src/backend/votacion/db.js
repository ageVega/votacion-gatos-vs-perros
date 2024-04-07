const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

// Credenciales y configuración de conexión
const username = encodeURIComponent('test');
const password = encodeURIComponent('test2323test');
const clusterEndpoint = 'matrix-instance-1.cl2iww8c0ioh.eu-west-1.docdb.amazonaws.com';
const dbName = 'votacion_gatos_perros';

// Opciones de conexión a MongoDB
const options = {
    tls: true,
    tlsAllowInvalidCertificates: true,  // Permitir certificados inválidos
    retryWrites: false
};

// URI de conexión
const uri = `mongodb://${username}:${password}@${clusterEndpoint}:27017/${dbName}?tls=true&retryWrites=false`;

// Crea una instancia del cliente MongoDB
const client = new MongoClient(uri, options);

async function connect() {
    try {
        await client.connect();
        console.log('Conectado exitosamente a DocumentDB');
        return client;
    } catch (e) {
        console.error('Error conectando a DocumentDB:', e);
        return null;
    }
}

module.exports = { connect };
