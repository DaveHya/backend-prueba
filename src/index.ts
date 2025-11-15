import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/products";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productRoutes); // Rutas para productos (Url base: /products)

const PORT = process.env.PORT || 4000; // Agregar el puerto del servidor
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`)); // Mensaje de inicio del servidor
