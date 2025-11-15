import express from "express";
import { getProducts, addProduct, deleteProduct } from "../controllers/productControllers";

const router = express.Router();

router.get("/", getProducts);
router.post("/", addProduct);
router.delete("/:id", deleteProduct);

export default router;
