import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

export const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost", // Agregar el nombre del host de la base de datos
  user: process.env.DB_USER || "root", // Agregar el nombre de usuario de la base de datos
  password: process.env.DB_PASS || "", // Agregar la contraseña de la base de datos
  database: process.env.DB_NAME || "productsdb", // Agregar el nombre de la base de datos
  port: Number(process.env.DB_PORT) || 3306, // Agregar el puerto de la base de datos
  connectionLimit: 10,
});
