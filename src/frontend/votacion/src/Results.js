import React, { useEffect, useState } from 'react';

function Results() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch('http://108.128.135.204:3000/results');
      if (!response.ok) {
        console.error("Failed to fetch results:", response.status);
        setResults([]); // Asegúrate de manejar errores adecuadamente
        return;
      }
      const data = await response.json();
      if (Array.isArray(data)) { // Verificación para asegurar que data es un arreglo
        setResults(data);
      } else {
        console.error("Data is not an array:", data);
        setResults([]); // Manejar caso donde data no es un arreglo
      }
    };

    fetchResults();
    const interval = setInterval(fetchResults, 1500); // Refrescar cada 1,5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Resultados de la Votación:</h2>
      {results.map(result => (
        <p key={result.animal}>{result.animal.toUpperCase()}: {result.count}</p>
      ))}
    </div>
  );
}

export default Results;
