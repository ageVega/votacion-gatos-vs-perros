# src/frontend/votacion/Dockerfile
FROM node:18 as builder

WORKDIR /app

# Instala las dependencias del proyecto
COPY package*.json ./
RUN npm install

COPY . .

# Construye la aplicación
RUN npm run build

FROM nginx:alpine

# Copia los archivos estáticos desde la etapa de construcción
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
