import express from "express";
const router = express.Router();
import { getAllUsers, getSpecificUser, createUser, updateUser, deleteUser } from "../controllers/users.controller.js";
import { isAdminUser } from "../controllers/Auth/auth.controller.js";

// ** get all users
router.get("/api/v1/users", getAllUsers);

// ** get specific user
router.get("/api/v1/users/:userId", getSpecificUser);

// ** update specific user
router.put("/api/v1/users/:userId", express.json({ extended: true }), updateUser);

// ** create a new user
router.post("/api/v1/users", express.json({ extended: true }), createUser);

// ** delete specific user
router.delete("/api/v1/users/:userId", isAdminUser, deleteUser);

export default router;
