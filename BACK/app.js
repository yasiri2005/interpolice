//!API REST : GET,POST,PUT,DELETE => EXPRESS
//!importamos la libreria express
import express from "express";
import cors from "cors";
import ciudadanoRutas from "./src/routes/ciudadano.route.js";
//!instanciamos la libreria en un objeto-app para poderla manipular
const app = express();
app.use(express.json()); //!serializa los request y response
app.use(cors());
//!primer recurso o endpoint

//!middlewares
app.use(express.json()); //!Para que el servidor entienda JSON 
app.use(cors());
//!rutas
app.use("/api",ciudadanoRutas);
export default app;