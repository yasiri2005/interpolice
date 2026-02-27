//!modulo para conexion a la base de datos
import mysql from "mysql2";
let cnx;
try {
   cnx = mysql.createConnection({
  host: "bunozzsosbgspwq9dm1j-mysql.services.clever-cloud.com-mysql.services.clever-cloud.com",
  user: "umsb4s95ss1lilpr",
  database: "bunozzsosbgspwq9dm1j",
  // port:"3306",
});
// console.log(`conexion exitosa`);
} catch (error) {
    console.log(`Ha ocurrido un error en la conexion: ${error.message}`);
}
export { cnx };