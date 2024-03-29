
# Votación Gatos vs Perros

## Descripción
Este proyecto es una aplicación de votación simple pero poderosa, diseñada para ilustrar cómo construir y desplegar una aplicación de microservicios utilizando tecnologías de AWS. Los usuarios pueden votar por su favorito entre dos opciones eternas: gatos y perros. La aplicación registra votos de manera persistente y muestra los resultados de la votación en tiempo real.

## Tecnologías Utilizadas
- **Backend:** Node.js con Express
- **Frontend:** React
- **Base de Datos:** AWS DocumentDB
- **Orquestación de Contenedores:** AWS ECS y Fargate
- **Despliegue y Gestión:** AWS Copilot

## Arquitectura
La aplicación se divide en microservicios, con un servicio de votación y un servicio de resultados en el backend, y una SPA (Single Page Application) en el frontend. Utiliza DocumentDB para almacenar los resultados de las votaciones de manera persistente.

## Desarrollo Local
Para comenzar el desarrollo local, asegúrese de tener instalado Node.js y npm. Clone el repositorio y siga las instrucciones específicas para cada servicio.

### Backend
```bash
cd backend
npm install
npm start
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## Despliegue
Este proyecto está configurado para desplegarse en AWS utilizando ECS y Fargate con la ayuda de AWS Copilot. Consulte la guía de despliegue en la sección de documentación para más detalles.
