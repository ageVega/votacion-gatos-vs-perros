import React, { useState } from 'react';
import './App.css';
import Results from './Results';

function App() {
  const [vote, setVote] = useState('');

  const handleVote = async (animal) => {
    setVote(animal);
    const response = await fetch('http://108.128.135.204:3000/vote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ animal })
    });

    if (response.ok) {
      console.log('Voto registrado:', animal);
    } else {
      console.error('Error al votar');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Vota por tu favorito: Gatos o Perros</h1>
        <button onClick={() => handleVote('gatos')}>Votar por Gatos</button>
        <button onClick={() => handleVote('perros')}>Votar por Perros</button>
        <p>Has votado por: {vote}</p>
        <Results />  {/* Incluir el componente de resultados aquí */}
      </header>
    </div>
  );
}

export default App;
