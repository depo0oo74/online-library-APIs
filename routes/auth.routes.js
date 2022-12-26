import express from "express";
const router = express.Router();
import { login } from "../controllers/Auth/auth.controller.js";
import { isNotUser } from "../controllers/Auth/auth.controller.js";

router.post("/api/v1/login", express.json({ extended: true }), isNotUser, login);

export default router;
