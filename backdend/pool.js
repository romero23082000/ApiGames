// Conexion a mysql y a base de datos
const util = require('util');
const mysql = require('mysql');

//pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME
})

// Obtener conexion
pool.getConnection((err, connection) => {
  if (err) {
    console.log("Error de conexion");
  } else if (connection) {
    connection.release();
  }
  return;
})

pool.query = util.promisify(pool.query);

module.exports = pool;