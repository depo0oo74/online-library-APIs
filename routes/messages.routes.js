import express from "express";
const router = express.Router();
import { getAllMessages, getSpecificMessage, createMessage, updateMessage, deleteMessage } from "../controllers/messages.controller.js";
import { isUser, isAdminUser } from "../controllers/Auth/auth.controller.js";

// ** get all messages
router.get("/api/v1/messages", isAdminUser, getAllMessages);

// ** get specific message
router.get("/api/v1/messages/:messageId", isAdminUser, getSpecificMessage);

// ** update specific message
router.put("/api/v1/messages/:messageId", isAdminUser, express.json({ extended: true }), updateMessage);

// ** create a new message
router.post("/api/v1/messages", express.json({ extended: true }), isUser, createMessage);

// ** delete specific message
router.delete("/api/v1/messages/:messageId", isAdminUser, deleteMessage);

export default router;
