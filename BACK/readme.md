##BITACORA DEL PROYECTO

#HERRAMIENTAS BACK:

Gestor: mysql.

Express: framework node js => sirve para gestionar APIS usando protocolo htpp.
Node js: standalone - instalado en mi pc => en consola: node -v 
Nodemon: plugin para usar en desarrollo - no se USA en producción 
mysql2: gestionar las interacciones con la BD - orm (sequelize)
Cors: plugin para la gestion de CORS
Env: variables globales del proyecto

#HERRAMIENTAS FRONT:

CSS: Framework Boostrap
BUNDLER: Vite --(webpack)
vanilla js

#PASO A PASO BACKEND
-Inicializar el proyecto con node js - npm init
-Instalar los paquetes requeridos : npm install nodemon mysql2 cors env express
-Configurar el control de versiones del codigo: Crear el .gitignore
-Iniciar el seguimiento del repositorio: git init, git add . 
-Creamos el repo en la nube: github
-Conectamos el repo de la nube con el repo local: git remote add origin https://github.com/monsalve910/inter_policeBack.git
-Hacemos la primer actualizacion local y remota:
local: git commit -m "inicio del proyecto"
remota: git push -u origin master
-Revision del package.json: verificar las dependencias
-Modificamos el package para ejecucion del proyecto
"start": "node index.js" este es el modo producción/despliegue en la nube,
"dev": "nodemon index.js" este es el modo de desarrollo o development,

##CODIFICACION DEL PROYECTO
-Crear el archivo principal: index.js
-configurar los plugins basicos: nodemon,cors, hacer la primer prueba
npm run dev (modo desarrollador) npm start(modo produccion)
##CREACION DEL MODULO CONEXION A LA BASE DE DATOS
-Importamos la libreria mysql2 y hacemos la conexion de acuerdo el ejemplo
##CODIFICACION DEL MODULO CIUDADANO


##IMPLEMENTACIÓN DE ARQUITECTURA POR CAPAS(N-TIER)
-CONTROLLER : Controlador del modulo maneja la logica de peticiones y respuestas
-ROUTES : Se encarga de construir los endpoints o rutas de la API, en ella podemos inyectar los middlewares
-MODELS : Se encarga de la interacción(consultas) con el sistema gestor de base de datos(SGBD), implementa la logica del negocio
##CAPAS DE SOPORTE:
-MIDDLEWARE : Capa intermedia entre el cliente y la API(ejemplo validar toquen, validar IP por CORS)
-HELPERS : Ayudas, ayudantes, como clases o funciones reusables del sistema por ejemplo un sistema de errores.
##CONFIGURACION DE VARIABLES DE ENTORNO/GLOBALES
sirven para mejorar la confidencialidad,mejor mentenibilidad
en node.js: variables .env
instalar el paquete dotenv y configurarlo (nota: la ultima version de node.js ya lo implementa nativo)
-npm i dotenv
-Crear archivo .env en la raiz del proyecto
-Ver el ejemplo de archivo .env (recuerde crear estilo constantes)