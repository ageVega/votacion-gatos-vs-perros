# src/backend/votacion/Dockerfile
FROM node:18

# Crear directorio de trabajo
WORKDIR /usr/src/app

# Instalar dependencias
# Un asterisco (*) se usa para asegurarse de que tanto package.json como package-lock.json sean copiados
# donde estén disponibles
COPY package*.json ./

RUN npm install
# Si estás construyendo tu código para producción
# RUN npm ci --only=production

# Copiar los archivos de la aplicación
COPY . .

# Tu aplicación se expone en el puerto 3000
EXPOSE 3000

# Comando para correr la aplicación
CMD [ "node", "index.js" ]
