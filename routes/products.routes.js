const express = require("express")
const router = express.Router()
const productsController = require("../controllers/products.controller")

// ** get all products
router.get("/api/products", productsController.getAllProducts)

// ** get specific product
router.get("/api/products/:productId", productsController.getSpecificProduct)

// ** update specific product
router.put("/api/products/:productId", express.json({extended: true}), productsController.updateProduct)

// ** create a new product
router.post("/api/products", express.json({extended: true}), productsController.createProduct)

// ** delete specific product
router.delete("/api/products/:productId", productsController.deleteProduct)

module.exports = router