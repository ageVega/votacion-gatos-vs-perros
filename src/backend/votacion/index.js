const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
const { connect } = require('./db');

app.use(cors({
    origin: '*'
}));

app.use(express.json());

app.use(async (req, res, next) => {
    try {
        const client = await connect();
        if (!client) {
            return res.status(500).send({ error: 'Error al conectar con la base de datos.' });
        }
        req.db = client.db('votacion_gatos_perros');
        req.dbClient = client;
        next();
    } catch (error) {
        return res.status(500).send({ error: 'Error de conexión a la base de datos.' });
    }
});

app.post('/vote', async (req, res) => {
    const { animal } = req.body;
    if (!['gatos', 'perros'].includes(animal)) {
        return res.status(400).send({ error: 'Voto inválido. Los votos deben ser por "gatos" o "perros".' });
    }
    
    const votesCollection = req.db.collection('votes');
    await votesCollection.updateOne({ animal }, { $inc: { count: 1 } }, { upsert: true });
    
    res.send({ message: `Voto registrado con éxito por ${animal}` });
});

app.get('/results', async (req, res) => {
    const votesCollection = req.db.collection('votes');
    const results = await votesCollection.find({}).toArray();
    
    res.send(results);
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

process.on('SIGINT', async () => {
    if (global.dbClient) {
        await global.dbClient.close();
    }
    console.log('Conexión a la base de datos cerrada');
    process.exit();
});