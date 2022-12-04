const express = require("express")
const router = express.Router()
const messagesController = require("../controllers/messages.controller")

// ** get all messages
router.get("/api/messages", messagesController.getAllMessages)

// ** get specific message
router.get("/api/messages/:messageId", messagesController.getSpecificMessage)

// ** update specific message
router.put("/api/messages/:messageId", express.json({extended: true}), messagesController.updateMessage)

// ** create a new message
router.post("/api/messages", express.json({extended: true}), messagesController.createMessage)

// ** delete specific message
router.delete("/api/messages/:messageId", messagesController.deleteMessage)

module.exports = router