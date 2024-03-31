const express = require('express');
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Conexion a la base de datos
const username = encodeURIComponent('test');
const password = encodeURIComponent('test2323test');
const clusterEndpoint = 'matrix-instance-1.cl2iww8c0ioh.eu-west-1.docdb.amazonaws.com';
const dbName = 'votacion_gatos_perros';
const options = {
    tls: true,
    tlsCAFile: path.resolve(__dirname, 'certs/global-bundle.pem'),
    retryWrites: false
};
const uri = `mongodb://${username}:${password}@${clusterEndpoint}:27017/${dbName}?tls=true&retryWrites=false`;

app.use(express.json());

// Middleware para conectar a la base de datos
app.use(async (req, res, next) => {
    const client = new MongoClient(uri, options);
    await client.connect();
    req.dbClient = client;
    req.db = client.db(dbName);
    next();
});

// Ruta para votar
app.post('/vote', async (req, res) => {
    const { animal } = req.body;
    if (!['gatos', 'perros'].includes(animal)) {
        return res.status(400).send({ error: 'Voto inválido. Los votos deben ser por "gatos" o "perros".' });
    }
    
    const votesCollection = req.db.collection('votes');
    await votesCollection.updateOne({ animal }, { $inc: { count: 1 } }, { upsert: true });
    
    res.send({ message: `Voto registrado con éxito por ${animal}` });
});

// Ruta para obtener resultados
app.get('/results', async (req, res) => {
    const votesCollection = req.db.collection('votes');
    const results = await votesCollection.find({}).toArray();
    
    res.send(results);
});

// Listener del servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

// Manejo de cierre
process.on('SIGINT', async () => {
    await req.dbClient.close();
    process.exit();
});
