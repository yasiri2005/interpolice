//!La capa modelo para el modulo de ciudadanos.

//!importamos la conexion a la base de datos

import { db } from "./bdatos.js";

//!activar el manejo de promesas(asincronica)


//!creamos el modulo: usando el concepto orientado a objetos
//!la clase modelo correspondiente a ciudadano

export const CiudadanoModel = {

    //!listar todos los ciudadanos aplicamos funciones asincronicas para aprovechar las promesas
    //!LAS PROMESAS (LOS HILOS DE EJECUCION)
    findALL:async()=>{
        const sql = "SELECT * FROM ciudadano ORDER BY apellidos";
        //!almacenamos la respuesta en un arreglo
        const [rows] = await db.query(sql);
        return rows;

    },
    //!Buscar por id, recibe el id como parametro, y devuelve el ciudadano correspondiente a ese id
    findById:async(id)=>{
        const sql = "SELECT * FROM ciudadano WHERE codigo = ?";
        //!almacenamos la respuesta en un arreglo
        const [rows] = await db.query(sql,[id]);
        return rows;
    },
    //!borramos teniendo en cuenta el id que llega del controlador por parametro
    delete:async(id)=>{
        const sql = "DELETE FROM ciudadano WHERE codigo = ?";
        //!almacenamos la respuesta en un arreglo
        const [rows] = await db.query(sql,[id]);
        return rows;
    },
    create:async(data)=>{
        const sql = "INSERT INTO ciudadano SET ?";
        //!almacenamos la respuesta en un arreglo
        const [rows] = await db.query(sql,[data]);
        return rows;
    },
    update:async(id,data)=>{
        const sql = "UPDATE ciudadano SET ? WHERE codigo = ?";
        //!almacenamos la respuesta en un arreglo
        const [rows] = await db.query(sql,[data,id]);
        return rows;
    },


};