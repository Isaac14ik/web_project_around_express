# Around Express API (web_project_around_express)

[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![Airbnb Style](https://img.shields.io/badge/Code%20Style-Airbnb-FF5A5F?style=for-the-badge&logo=airbnb&logoColor=white)](https://github.com/airbnb/javascript)

Este repositorio contiene el desarrollo del Backend inicial para la aplicación **"Alrededor de los EE. UU."** (Around the U.S.). Se trata de una API REST robusta construida sobre **Node.js** y **Express.js**. El proyecto implementa un diseño de arquitectura modular y una configuración estricta de calidad de código basada en estándares internacionales de la industria (ESLint + Airbnb Style Guide).

---

## 📄 Descripción del Proyecto

El objetivo principal de esta aplicación es servir como el motor central (Backend) que gestionará el flujo de información de la plataforma web. En esta fase del proyecto, la API expone endpoints específicos para administrar dos recursos fundamentales: **Usuarios (`users`)** y **Tarjetas de contenido (`cards`)**. 

Para lograr esto de forma eficiente y simular el comportamiento de un entorno real sin una base de datos activa todavía, el sistema realiza operaciones asíncronas de lectura de archivos locales (`data/users.json` y `data/cards.json`) utilizando el módulo nativo **`fs` (File System)** de Node.js. La API intercepta las peticiones de los clientes, procesa los parámetros dinámicos de las URLs (como los IDs de usuario), maneja los códigos de estado HTTP adecuados (`200 OK`, `404 Not Found`) y devuelve las respuestas estructuradas en formato JSON de manera no bloqueante.

---

## 🎯 El Porqué de este Proyecto (Filosofía de Aprendizaje)

Cualquier desarrollador puede levantar un servidor básico de Express en un par de minutos, pero **construir software mantenible y profesional requiere bases sólidas**. Este proyecto representa un hito crítico en mi formación como programador por las siguientes razones:

* **Dominio del Flujo Asíncrono:** Trabajar con el sistema de archivos (`fs`) obliga a comprender a fondo el Event Loop de Node.js y el manejo de promesas, evitando el bloqueo del servidor cuando múltiples usuarios realizan peticiones al mismo tiempo.
* **Mentalidad de Arquitectura Modular:** Separar el código en capas distintas (`routes`, `data` y el arranque en `app.js`) entrena la lógica para construir aplicaciones escalables. Si el proyecto crece o cambia a una base de datos real (como MongoDB) en el siguiente sprint, el impacto en el código será mínimo porque las responsabilidades ya están divididas.
* **Disciplinas de la Industria (Estandarización):** El uso de herramientas como `EditorConfig` y `ESLint` bajo las reglas de **Airbnb** nos quita el mal hábito de "escribir código como sea". Nos fuerza a escribir sintaxis limpia, legible y uniforme, garantizando que el código sea idéntico sin importar qué desarrollador del equipo lo abra.
* **Manejo Profesional de Errores:** Controlar qué pasa cuando un recurso no existe (manejo de respuestas 404 dinámicas) es la diferencia entre una aplicación rota que frustra al usuario y una API madura lista para producción.

---

## 🏗️ Estructura del Proyecto

El proyecto sigue una arquitectura modular y limpia para separar las responsabilidades de enrutamiento y almacenamiento de datos:

```text
web_project_around_express/
├── data/                  # Capa de datos estáticos (Simulación de Base de Datos)
│   ├── cards.json         # Estructura JSON de tarjetas / posts
│   └── users.json         # Estructura JSON de perfiles de usuario
├── routes/                # Capa de enrutamiento (Express Routers individuales)
│   ├── cards.js           # Enrutador para el recurso 'cards'
│   └── users.js           # Enrutador para el recurso 'users'
├── .editorconfig          # Consistencia de formateo de código entre diferentes IDEs
├── .gitignore             # Exclusión de archivos locales y dependencias en control de versiones
├── .eslintrc              # Archivo de configuración con reglas estrictas de ESLint
├── app.js                 # Punto de entrada (Inicialización del servidor y middlewares)
├── package.json           # Manifiesto del proyecto, scripts y dependencias NPM
└── README.md              # Documentación técnica
