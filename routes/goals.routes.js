import express from "express";
const router = express.Router();
import { getAllGoals, getSpecificGoal, updateGoal, createGoal, deleteGoal } from "../controllers/goal.controller.js";
import { isAdminUser } from "../controllers/Auth/auth.controller.js";

// ** get all goals
router.get("/api/v1/goals", getAllGoals);

// ** get specific goal
router.get("/api/v1/goals/:goalId", getSpecificGoal);

// ** update specific goal
router.put("/api/v1/goals/:goalId", isAdminUser, express.json({ extended: true }), updateGoal);

// ** create a new goal
router.post("/api/v1/goals", isAdminUser, express.json({ extended: true }), createGoal);

// ** delete specific goal
router.delete("/api/v1/goals/:goalId", isAdminUser, deleteGoal);

export default router;
