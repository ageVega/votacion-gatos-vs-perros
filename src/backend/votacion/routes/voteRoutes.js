// /src/backend/votacion2/routes/voteRoutes.js
// Rutas relacionadas con la votación.

const express = require('express');
const router = express.Router();

router.post('/vote', async (req, res) => {
    const { animal } = req.body;
    if (!['gatos', 'perros'].includes(animal)) {
        return res.status(400).send({ error: 'Voto inválido. Los votos deben ser por "gatos" o "perros".' });
    }
    
    const votesCollection = req.db.collection('votes');
    await votesCollection.updateOne({ animal }, { $inc: { count: 1 } }, { upsert: true });
    
    res.send({ message: `Voto registrado con éxito por ${animal}` });
});

module.exports = router;
