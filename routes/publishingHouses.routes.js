const express = require("express")
const router = express.Router()
const publishingHousesController = require("../controllers/publishingHouses.controller")

// ** get all publishing Houses
router.get("/api/publishingHouses", publishingHousesController.getAllPublishingHouses)

// ** get specific publishing House
router.get("/api/publishingHouses/:publishingHouseId", publishingHousesController.getSpecificPublishingHouse)

// ** update specific publishing House
router.put("/api/publishingHouses/:publishingHouseId", express.json({extended: true}), publishingHousesController.updatePublishingHouse)

// ** create a new publishing House
router.post("/api/publishingHouses", express.json({extended: true}), publishingHousesController.createPublishingHouse)

// ** delete specific publishing House
router.delete("/api/publishingHouses/:publishingHouseId", publishingHousesController.deletePublishingHouse)

module.exports = router