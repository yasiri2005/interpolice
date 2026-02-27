//! crea una constante con el puerta local o el asignado en las variables globales de la aplicacion
import app from './app.js';
import dotenv from 'dotenv';//importa la libreria dotenv
dotenv.config();//activa las variables del archivo .env
const PORT = 3000 || process.env.APP_PORT;

//!Encendemos el servicio - prendemos la API
app.listen(PORT,()=>{
    console.log(`Servidor corriendo en: ${PORT}`);
    console.log(process.env);//TODAS LAS VARIABLES DE ENTORNO
    console.log(process.env.OS);//SISTEMA OPERATIVO EN DONDE SE EJECUTA NODE
    console.log(process.env.NUMBER_OF_PROCESSORS);//NUMERO DE PROCESADORES DEL SERVIDOR DONDE SE EJECUTA NODE
    console.log(process.env.NODE);//RUTA DONDE SE ENCUENTRA EL EJECUTABLE DE NODE EN EL SERVIDOR
    console.log(process.env.COMPUTERNAME);//NOMNBRE DEL SERVIDOR
    console.log(process.env.HOST);//VARIABLE DE USUARIO CREADA EN EL ARCHIVO .ENV
    console.log(process.env.DB_BASE);//VARIABLE DE USUARIO CREADA EN EL ARCHIVO .ENV
});