// src/backend/votacion/models/db.js
// Conexión a la base de datos MongoDB

const { MongoClient } = require('mongodb');

const username = encodeURIComponent('test');
const password = encodeURIComponent('test2323test');
const clusterEndpoint = 'matrix-instance-1.cl2iww8c0ioh.eu-west-1.docdb.amazonaws.com';
const dbName = 'votacion_gatos_perros';
const uri = `mongodb://${username}:${password}@${clusterEndpoint}:27017/${dbName}?tls=true&retryWrites=false`;

const options = {
    tls: true,
    tlsAllowInvalidCertificates: true,
    retryWrites: false
};

let dbInstance = null;

async function connect() {
    if (!dbInstance) {
        const client = new MongoClient(uri, options);
        await client.connect();
        dbInstance = client.db(dbName);
        console.log('Conectado exitosamente a MongoDB');
    }
    return dbInstance;
}

module.exports = { connect };
