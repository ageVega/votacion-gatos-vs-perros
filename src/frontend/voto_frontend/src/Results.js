import React, { useEffect, useState } from 'react';

function Results() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch('http://localhost:3000/results');
      const data = await response.json();
      setResults(data);
    };

    fetchResults();
    const interval = setInterval(fetchResults, 5000); // Refrescar cada 5 segundos

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
