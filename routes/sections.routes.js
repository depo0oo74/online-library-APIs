const express = require("express")
const router = express.Router()
const sectionsController = require("../controllers/sections.controller")

// ** get all sections
router.get("/api/sections", sectionsController.getAllSections)

// ** get specific section
router.get("/api/sections/:sectionId", sectionsController.getSpecificSection)

// ** update specific section
router.put("/api/sections/:sectionId", express.json({extended: true}), sectionsController.updateSection)

// ** create a new section
router.post("/api/sections", express.json({extended: true}), sectionsController.createSection)

// ** delete specific section
router.delete("/api/sections/:sectionId", sectionsController.deleteSection)

module.exports = router