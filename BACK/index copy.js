//!API REST : GET,POST,PUT,DELETE => EXPRESS
//!importamos la libreria express
import express from "express";
import cors from "cors";
import { ciudadano } from "./modules/ciudadano.js";
import { user } from "./modules/users.js";
//!instanciamos la libreria en un objeto-app para poderla manipular
const app = express();
app.use(express.json()); //!serializa los request y response
app.use(cors());
const port = 3000;
//!primer recurso o endpoint
app.get("/",(req,res)=>{
   res.status(200).send("API ENCENDIDA")
});
// app.get("/ciudadano",(req,res)=>{
//     res.status(200).send({
//         "id":1,
//         "nombre": "pibe valderrama",
//         "apodo":"pepeland",
//         "estatus": "muerto",
//         "edad": 25,
//     })
// });
app.use("/",ciudadano);
app.use("/",user);

//!Encendemos el servicio - prendemos la API
app.listen(port,()=>{
    console.log(`Servidor corriendo en: ${port}`);
});