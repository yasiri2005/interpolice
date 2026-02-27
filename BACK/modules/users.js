//!modulo para la manipulacion del usuario
import express from "express";
import { cnx } from "./bdatos.js";

export const user = express();
//!crud basico de ciudadanos

//!listar todos los ciudadanos
user.get("/users/listartodos",(req,res)=>{
    //!se hace la consulta
    let sql = "SELECT * FROM users ORDER BY apellidos";

    //!ejecutar la consulta en la base de datos
    cnx.query(sql,(err,results,fields)=>{
        // console.log(err)
        // console.log(results)
        // console.log(fields)
        res.send({results});
    });
});
//!listar users por id
user.get("/users/listarporid/:id",(req,res)=>{
    //!recibimos el parametro de la consulta
    let id = req.params.id;
    //!se hace la consulta,por seguridad use consulta parametrizada
    let sql = "SELECT * FROM users WHERE id=?";
    // let sql = "SELECT * FROM users WHERE codigo=${id}"; //!esta forma tiene riesgo de sql injection

    //!ejecutar la consulta en la base de datos
    cnx.query(sql,[id],(err,results,fields)=>{
        res.status(200).send({results});
    });
});

//!borrar registro -- borrado real
user.delete("/users/borrarporid/:id",(req,res)=>{
    //!recibimos el parametro de la consulta
    let id = req.params.id;
    //!se hace la consulta,por seguridad use consulta parametrizada
    let sql = "DELETE FROM users WHERE id=?";
    // let sql = "SELECT * FROM users WHERE codigo=${id}"; //!esta forma tiene riesgo de sql injection

    //!ejecutar la consulta en la base de datos
    cnx.query(sql,[id],(err,results,fields)=>{
        res.status(200).send({results});
    });
});

//!crear ciudadanos
user.post("/users/crear",(req,res)=>{
    //!recibimos los parametros enviados en la consulta - payload - body de la consulta en un objeto JS 
    let datosFormularios = {
        nombre:req.body.nombre,
        apellidos:req.body.apellidos,
        email:req.body.email,
        password:req.body.password,
        avatar:req.body.avatar,
        rol:req.body.rol,
    };
    //!se hace la consulta,por seguridad use consulta parametrizada
    let sql = "INSERT INTO users SET ?";
    // let sql = "SELECT * FROM users WHERE codigo=${id}"; //!esta forma tiene riesgo de sql injection

    //!ejecutar la consulta en la base de datos
    cnx.query(sql,[datosFormularios],(err,results,fields)=>{
        res.status(200).send({results});
    });
});

//!editar: recibir una payload en el body de la peticion (request) y el id

user.put("/users/editar/:id",(req,res)=>{
    //!recibimos los parametros enviados en la consulta - payload - body de la consulta en un objeto JS 
    let id = req.params.id;
    let datosFormularios = {
        nombre:req.body.nombre,
        apellidos:req.body.apellidos,
        email:req.body.email,
        password:req.body.password,
        avatar:req.body.avatar,
        rol:req.body.rol,
    };
    //!se hace la consulta,por seguridad use consulta parametrizada
    let sql = "UPDATE users SET ? WHERE id = ?";
    // let sql = "SELECT * FROM users WHERE codigo=${id}"; //!esta forma tiene riesgo de sql injection

    //!ejecutar la consulta en la base de datos
    cnx.query(sql,[datosFormularios,id],(err,results,fields)=>{
        res.status(200).send({results});
    });
});