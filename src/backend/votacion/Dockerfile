# src/backend/votacion/Dockerfile
FROM node:18

# Crear directorio de trabajo
WORKDIR /usr/src/app

# Instalar dependencias
COPY package*.json ./
RUN npm cache clean --force && npm install
# Si estás construyendo tu código para producción
# RUN npm ci --only=production

# Copiar los archivos de la aplicación
COPY . .

# Tu aplicación se expone en el puerto 3000
EXPOSE 3000

# Comando para correr la aplicación
CMD ["node", "index.js"]
