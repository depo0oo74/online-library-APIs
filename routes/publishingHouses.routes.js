import express from "express";
const router = express.Router();
import { getAllPublishingHouses, getSpecificPublishingHouse, createPublishingHouse, updatePublishingHouse, deletePublishingHouse } from "../controllers/publishingHouses.controller.js";

// ** get all publishing Houses
router.get("/api/v1/publishingHouses", getAllPublishingHouses);

// ** get specific publishing House
router.get("/api/v1/publishingHouses/:publishingHouseId", getSpecificPublishingHouse);

// ** update specific publishing House
router.put("/api/v1/publishingHouses/:publishingHouseId", express.json({ extended: true }), updatePublishingHouse);

// ** create a new publishing House
router.post("/api/v1/publishingHouses", express.json({ extended: true }), createPublishingHouse);

// ** delete specific publishing House
router.delete("/api/v1/publishingHouses/:publishingHouseId", deletePublishingHouse);

export default router;
