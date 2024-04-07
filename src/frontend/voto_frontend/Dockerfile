# Etapa de construcción usando Node.js
FROM node:18 as builder

# Configura el directorio de trabajo
WORKDIR /app

# Optimización: Copia solo los archivos de definición de dependencias primero.
# Esto aprovecha la caché de Docker si no se modifican las dependencias.
COPY package*.json ./
RUN npm install

# Copia el resto del código fuente de la aplicación
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Etapa de ejecución usando Nginx para servir los archivos estáticos
FROM nginx:alpine

# Copia los archivos estáticos desde la etapa de construcción
COPY --from=builder /app/build /usr/share/nginx/html

# Configura Nginx para redirigir todas las solicitudes al index.html (SPA)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80 para el tráfico HTTP
EXPOSE 80

# Inicia Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
