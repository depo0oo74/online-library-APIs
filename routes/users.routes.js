import express from "express";
const router = express.Router();
import { getAllUsers, getSpecificUser, createUser, updateUser, deleteUser } from "../controllers/users.controller.js";

// ** get all users
router.get("/api/users", getAllUsers);

// ** get specific user
router.get("/api/users/:userId", getSpecificUser);

// ** update specific user
router.put("/api/users/:userId", express.json({ extended: true }), updateUser);

// ** create a new user
router.post("/api/users", express.json({ extended: true }), createUser);

// ** delete specific user
router.delete("/api/users/:userId", deleteUser);

export default router;
