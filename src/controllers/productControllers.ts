import { Request, Response } from "express";
import { pool } from "../db";

export const getProducts = async (req: Request, res: Response) => {
  const [rows] = await pool.query("SELECT * FROM products ORDER BY id ASC");
  res.json(rows);
};

export const addProduct = async (req: Request, res: Response) => {
  const { name, description, price } = req.body;
  await pool.query(
    "INSERT INTO products (name, description, price) VALUES (?, ?, ?)",
    [name, description, price]
  );
  res.status(201).json({ message: "Producto agregado" });
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  await pool.query("DELETE FROM products WHERE id = ?", [id]);
  res.json({ message: "Producto eliminado" });
};
