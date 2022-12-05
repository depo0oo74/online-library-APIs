import express from "express";
const router = express.Router();
import { getAllMessages, getSpecificMessage, createMessage, updateMessage, deleteMessage } from "../controllers/messages.controller.js";

// ** get all messages
router.get("/api/messages", getAllMessages);

// ** get specific message
router.get("/api/messages/:messageId", getSpecificMessage);

// ** update specific message
router.put("/api/messages/:messageId", express.json({ extended: true }), updateMessage);

// ** create a new message
router.post("/api/messages", express.json({ extended: true }), createMessage);

// ** delete specific message
router.delete("/api/messages/:messageId", deleteMessage);

export default router;
