//!modulo para la manipulacion del usuario
import express from "express";
import { cnx } from "./bdatos.js";

export const ciudadano = express();
//!crud basico de ciudadanos

//!listar todos los ciudadanos
ciudadano.get("/ciudadano/listartodos",(req,res)=>{
    //!se hace la consulta
    let sql = "SELECT * FROM ciudadano ORDER BY apellidos";

    //!ejecutar la consulta en la base de datos
    cnx.query(sql,(err,results,fields)=>{
        // console.log(err)
        // console.log(results)
        // console.log(fields)
        res.send({results});
    });
});
//!listar ciudadano por id
ciudadano.get("/ciudadano/listarporid/:id",(req,res)=>{
    //!recibimos el parametro de la consulta
    let id = req.params.id;
    //!se hace la consulta,por seguridad use consulta parametrizada
    let sql = "SELECT * FROM ciudadano WHERE codigo=?";
    // let sql = "SELECT * FROM ciudadano WHERE codigo=${id}"; //!esta forma tiene riesgo de sql injection

    //!ejecutar la consulta en la base de datos
    cnx.query(sql,[id],(err,results,fields)=>{
        res.status(200).send({results});
    });
});

//!borrar registro -- borrado real
ciudadano.delete("/ciudadano/borrarporid/:id",(req,res)=>{
    //!recibimos el parametro de la consulta
    let id = req.params.id;
    //!se hace la consulta,por seguridad use consulta parametrizada
    let sql = "DELETE FROM ciudadano WHERE codigo=?";
    // let sql = "SELECT * FROM ciudadano WHERE codigo=${id}"; //!esta forma tiene riesgo de sql injection

    //!ejecutar la consulta en la base de datos
    cnx.query(sql,[id],(err,results,fields)=>{
        res.status(200).send({results});
    });
});

//!crear ciudadanos
ciudadano.post("/ciudadano/crear",(req,res)=>{
    //!recibimos los parametros enviados en la consulta - payload - body de la consulta en un objeto JS 
    let datosFormularios = {
        nombre:req.body.nombre,
        apellidos:req.body.apellidos,
        apodo:req.body.apodo,
        fechaNace:req.body.fechaNace,
        planetaOrigen:req.body.planetaOrigen,
        planetaReside:req.body.planetaReside,
        foto:req.body.foto,
        codigoQr:req.body.codigoQr,
        estado:req.body.estado,
    };
    //!se hace la consulta,por seguridad use consulta parametrizada
    let sql = "INSERT INTO ciudadano SET ?";
    // let sql = "SELECT * FROM ciudadano WHERE codigo=${id}"; //!esta forma tiene riesgo de sql injection

    //!ejecutar la consulta en la base de datos
    cnx.query(sql,[datosFormularios],(err,results,fields)=>{
        res.status(200).send({results});
    });
});

//!editar: recibir una payload en el body de la peticion (request) y el id

ciudadano.put("/ciudadano/editar/:id",(req,res)=>{
    //!recibimos los parametros enviados en la consulta - payload - body de la consulta en un objeto JS 
    let id = req.params.id;
    let datosFormularios = {
        nombre:req.body.nombre,
        apellidos:req.body.apellidos,
        apodo:req.body.apodo,
        fechaNace:req.body.fechaNace,
        planetaOrigen:req.body.planetaOrigen,
        planetaReside:req.body.planetaReside,
        foto:req.body.foto,
        codigoQr:req.body.codigoQr,
        estado:req.body.estado,
    };
    //!se hace la consulta,por seguridad use consulta parametrizada
    let sql = "UPDATE ciudadano SET ? WHERE codigo = ?";
    // let sql = "SELECT * FROM ciudadano WHERE codigo=${id}"; //!esta forma tiene riesgo de sql injection

    //!ejecutar la consulta en la base de datos
    cnx.query(sql,[datosFormularios,id],(err,results,fields)=>{
        res.status(200).send({results});
    });
});