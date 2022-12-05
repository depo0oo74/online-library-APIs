import express from "express";
const router = express.Router();
import { getAllSections, getSpecificSection, updateSection, createSection, deleteSection } from "../controllers/sections.controller.js";

// ** get all sections
router.get("/api/sections", getAllSections);

// ** get specific section
router.get("/api/sections/:sectionId", getSpecificSection);

// ** update specific section
router.put("/api/sections/:sectionId", express.json({ extended: true }), updateSection);

// ** create a new section
router.post("/api/sections", express.json({ extended: true }), createSection);

// ** delete specific section
router.delete("/api/sections/:sectionId", deleteSection);

export default router;
