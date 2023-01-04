import express from "express";
const router = express.Router();
import { getAllSliders, getSpecificSlider, updateSlider, createSlider, deleteSlider } from "../controllers/sliders.controller.js";
import { isAdminUser } from "../controllers/Auth/auth.controller.js";

// ** get all sliders
router.get("/api/v1/sliders", getAllSliders);

// ** get specific slider
router.get("/api/v1/sliders/:sliderId", getSpecificSlider);

// ** update specific slider
router.put("/api/v1/sliders/:sliderId", express.json({ extended: true }), isAdminUser, updateSlider);

// ** create a new slider
router.post("/api/v1/sliders", express.json({ extended: true }), isAdminUser, createSlider);

// ** delete specific slider
router.delete("/api/v1/sliders/:sliderId", isAdminUser, deleteSlider);

export default router;
