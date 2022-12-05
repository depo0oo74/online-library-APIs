import express from "express";
const router = express.Router();
import { getAllProducts, getSpecificProduct, updateProduct, createProduct, deleteProduct } from "../controllers/products.controller.js";

// ** get all products
router.get("/api/products", getAllProducts);

// ** get specific product
router.get("/api/products/:productId", getSpecificProduct);

// ** update specific product
router.put("/api/products/:productId", express.json({ extended: true }), updateProduct);

// ** create a new product
router.post("/api/products", express.json({ extended: true }), createProduct);

// ** delete specific product
router.delete("/api/products/:productId", deleteProduct);

export default router;
