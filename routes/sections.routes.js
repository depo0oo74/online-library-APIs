import express from "express";
const router = express.Router();
import { getAllSections, getSpecificSection, updateSection, createSection, deleteSection } from "../controllers/sections.controller.js";
import { isAdminUser } from "../controllers/Auth/auth.controller.js";

// ** get all sections
router.get("/api/v1/sections", getAllSections);

// ** get specific section
router.get("/api/v1/sections/:sectionId", getSpecificSection);

// ** update specific section
router.put("/api/v1/sections/:sectionId", express.json({ extended: true }), isAdminUser, updateSection);

// ** create a new section
router.post("/api/v1/sections", express.json({ extended: true }), isAdminUser, createSection);

// ** delete specific section
router.delete("/api/v1/sections/:sectionId", isAdminUser, deleteSection);

export default router;
