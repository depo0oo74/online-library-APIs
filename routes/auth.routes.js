import express from "express";
const router = express.Router();
import { login } from "../controllers/Auth/auth.controller.js";

router.post("/api/v1/login", express.json({ extended: true }), login);

export default router;
