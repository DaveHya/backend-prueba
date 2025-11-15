import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/products";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
