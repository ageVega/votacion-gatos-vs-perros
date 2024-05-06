#!/bin/bash

# Genera un número aleatorio entre 10000 y 99999
num_times=$(shuf -i 10000-99999 -n 1)

echo "Ejecutando el comando $num_times veces."

# Bucle para ejecutar el comando curl el número aleatorio de veces
for ((i=1; i<=num_times; i++))
do
  curl -X POST https://gatos-vs-perros.agevega.com/api/vote -H 'Content-Type: application/json' -d '{"animal": "gatos"}'
done

echo "Comando ejecutado $num_times veces."
