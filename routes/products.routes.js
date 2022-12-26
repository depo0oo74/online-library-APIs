import express from "express";
const router = express.Router();
import { getAllProducts, getSpecificProduct, updateProduct, createProduct, deleteProduct } from "../controllers/products.controller.js";
import { isAdminUser } from "../controllers/Auth/auth.controller.js";

// ** get all products
router.get("/api/v1/products", getAllProducts);

// ** get specific product
router.get("/api/v1/products/:productId", getSpecificProduct);

// ** update specific product
router.put("/api/v1/products/:productId", express.json({ extended: true }), isAdminUser, updateProduct);

// ** create a new product
router.post("/api/v1/products", express.json({ extended: true }), isAdminUser, createProduct);

// ** delete specific product
router.delete("/api/v1/products/:productId", isAdminUser, deleteProduct);

export default router;
