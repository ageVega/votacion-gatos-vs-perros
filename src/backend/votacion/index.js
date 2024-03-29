const express = require('express');
const app = express();
const PORT = 3000;

// Simular base de datos en memoria
let votes = { gatos: 0, perros: 0 };

app.use(express.json());

app.get('/', (req, res) => {
    res.send('El servicio de votación está corriendo correctamente.');
});

// Ruta para votar
app.post('/vote', (req, res) => {
    const { animal } = req.body;
    if (animal !== 'gatos' && animal !== 'perros') {
        return res.status(400).send({ error: 'Voto inválido. Los votos deben ser por "gatos" o "perros".' });
    }
    votes[animal] += 1;
    res.send({ message: `Voto registrado con éxito por ${animal}`, votes });
});

// Ruta para obtener resultados
app.get('/results', (req, res) => {
    res.send(votes);
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
