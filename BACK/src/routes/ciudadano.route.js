//!las rutas del modulo ciudadano

import { Router } from "express";
//!importamos la logica del controlador para construir cada interaccion de la ruta
import * as CiudadanoCtr from "../controllers/ciudadano.controller.js";
//!instanciamos el metodo router de express para poder crear las rutas
const router = Router();
//!las rutas del modulo
//!ruta para listar todos los ciudadanos
router.get("/ciudadano/listartodos",CiudadanoCtr.getCiudadanos);
router.get("/ciudadano/listarporid/:id",CiudadanoCtr.getCiudadanoById);
router.post("/ciudadano/crear",CiudadanoCtr.createCiudadanos);
router.delete("/ciudadano/borrarporid/:id",CiudadanoCtr.deleteCiudadanoById);
router.put("/ciudadano/editar/:id",CiudadanoCtr.updateCiudadanos);



export default router;