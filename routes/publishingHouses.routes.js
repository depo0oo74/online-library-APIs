import express from "express";
const router = express.Router();
import { getAllPublishingHouses, getSpecificPublishingHouse, createPublishingHouse, updatePublishingHouse, deletePublishingHouse } from "../controllers/publishingHouses.controller.js";

// ** get all publishing Houses
router.get("/api/publishingHouses", getAllPublishingHouses);

// ** get specific publishing House
router.get("/api/publishingHouses/:publishingHouseId", getSpecificPublishingHouse);

// ** update specific publishing House
router.put("/api/publishingHouses/:publishingHouseId", express.json({ extended: true }), updatePublishingHouse);

// ** create a new publishing House
router.post("/api/publishingHouses", express.json({ extended: true }), createPublishingHouse);

// ** delete specific publishing House
router.delete("/api/publishingHouses/:publishingHouseId", deletePublishingHouse);

export default router;
