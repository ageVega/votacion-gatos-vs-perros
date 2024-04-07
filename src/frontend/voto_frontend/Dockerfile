# Define la etapa de construcción
FROM node:18 as builder

# Establece el directorio de trabajo
WORKDIR /app

# Instala las dependencias del proyecto
COPY package*.json ./
RUN npm install

# Copia el código fuente del proyecto
COPY . .

# Construye la aplicación
RUN npm run build

# Define la etapa de ejecución usando Nginx
FROM nginx:alpine

# Copia los archivos estáticos desde la etapa de construcción
COPY --from=builder /app/build /usr/share/nginx/html

# Copia la configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
