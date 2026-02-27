// index.js

//! Importamos app y dotenv
import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.APP_PORT || 3000;

//! Encendemos el servicio 
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);

    //! Mostramos variables de entorno
    console.log('Todas las variables de entorno:', process.env);
    
    console.log('Sistema operativo:', process.env.OS);
    console.log('Número de procesadores:', process.env.NUMBER_OF_PROCESSORS);
    console.log('Ruta de Node.js:', process.env.NODE);
    console.log('Nombre del servidor:', process.env.COMPUTERNAME);

    //! Variables definidas por el usuario en el .env
    console.log('HOST:', process.env.HOST);
    console.log('DB_BASE:', process.env.DB_BASE);
});