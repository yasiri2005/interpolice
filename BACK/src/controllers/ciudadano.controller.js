//!contolador para ciudadano : este es el encargado para escuchae y responder a las peticiones del cliente
//!peticiones

import { CiudadanoModel } from "../models/ciudadano.model.js";

export const getCiudadanos = async(req,res)=>{
//!codigo protegido con try-catch
try {
    const result = await CiudadanoModel.findALL();
    res.json({result});
} catch (error) {
    res.status(500).json({error: "error al listar los ciudadanos"});
}

};
//!Buscar ciudadano por el parametro ID
export const getCiudadanoById = async(req,res)=>{
//!codigo protegido con try-catch
try {
    const result = await CiudadanoModel.findById(req.params.id);
    res.json({result});
} catch (error) {
    res.status(500).json({error: "error al buscar el ciudadano"});
}

};
//!insertar un registro
export const createCiudadanos = async(req,res)=>{
//!codigo protegido con try-catch
const data = {
            "nombre": req.body.nombre,
            "apellidos": req.body.apellidos,
            "apodo": req.body.apodo,
            "fechaNace": req.body.fechaNace,
            "planetaOrigen": req.body.planetaOrigen,
            "planetaReside": req.body.planetaReside,
            "foto": req.body.foto,
            "codigoQr": req.body.codigoQr,
            "estado": req.body.estado
    
};
try {
    const result = await CiudadanoModel.create(data);
    res.json({result});
} catch (error) {
    res.status(500).json({error: "error al registrar el ciudadano"});
}
};
//!BORRAR CIUDADANO POR ID
export const deleteCiudadanoById = async(req,res)=>{
//!codigo protegido con try-catch
try {
    const result = await CiudadanoModel.delete(req.params.id);
    res.json({result});
} catch (error) {
    res.status(500).json({error: "error al eliminar el ciudadano"});
}
};
export const updateCiudadanos = async(req,res)=>{
//!codigo protegido con try-catch
const data = {
            "nombre": req.body.nombre,
            "apellidos": req.body.apellidos,
            "apodo": req.body.apodo,
            "fechaNace": req.body.fechaNace,
            "planetaOrigen": req.body.planetaOrigen,
            "planetaReside": req.body.planetaReside,
            "foto": req.body.foto,
            "codigoQr": req.body.codigoQr,
            "estado": req.body.estado
    
};
try {
    const result = await CiudadanoModel.update(req.params.id,data);
    res.json({result});
} catch (error) {
    res.status(500).json({error: "error al registrar el ciudadano"});
}
};
