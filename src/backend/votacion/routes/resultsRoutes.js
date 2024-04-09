// /src/backend/votacion2/routes/resultsRoutes.js
// Rutas para obtener resultados.

const express = require('express');
const router = express.Router();

router.get('/results', async (req, res) => {
    try {
        const votesCollection = req.db.collection('votes');
        const results = await votesCollection.find({}).toArray();
        res.send(results);
    } catch (error) {
        console.error('Error al obtener resultados:', error.message);
        res.status(500).send({ error: 'No se pudieron obtener los resultados.' });
    }
});

module.exports = router;
