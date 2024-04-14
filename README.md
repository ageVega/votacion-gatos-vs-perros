
# Votación Gatos vs Perros

## Descripción General
`Votación Gatos vs Perros` es una aplicación interactiva de votación diseñada para demostrar una implementación efectiva de microservicios utilizando tecnologías cloud de AWS. Los usuarios participan en una encuesta clásica, eligiendo entre gatos y perros, y pueden ver los resultados actualizados en tiempo real.

## Tecnologías Empleadas
- **Backend:** Node.js con Express para manejar la lógica del servidor.
- **Frontend:** React para una interfaz de usuario dinámica y responsiva.
- **Base de Datos:** MongoDB a través de AWS DocumentDB para persistencia de datos.
- **Orquestación de Contenedores:** AWS ECS y Fargate para la gestión y escalado de contenedores.
- **Automatización del Despliegue:** AWS Copilot facilita la implementación y configuración en AWS.

## Arquitectura de la Aplicación
La aplicación se estructura en microservicios:
- **Servicio de Votación y Resultados:** Dos servicios separados en el backend procesan las votaciones y gestionan la recuperación de resultados, respectivamente.
- **Frontend SPA (Single Page Application):** Una aplicación de página única que presenta la interfaz de usuario.

## Configuración del Entorno de Desarrollo
Asegúrate de tener instalado Node.js y npm. Para configurar el entorno localmente, sigue estos pasos:

### Configuración del Backend
```bash
cd src/backend/votacion
npm install
npm start
```

### Configuración del Frontend
```bash
cd src/frontend/votacion
npm install
npm start
```

## Despliegue en AWS
El proyecto utiliza AWS ECS y Fargate para el despliegue automatizado:
1. **AWS ECS:** Escalado automático y gestión de contenedores.
2. **AWS Fargate:** Ejecución sin servidor de contenedores.

Gracias por utilizar o contribuir a `Votación Gatos vs Perros`!
