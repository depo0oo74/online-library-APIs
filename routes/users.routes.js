const express = require("express")
const router = express.Router()
const usersController = require("../controllers/users.controller")

// ** get all users
router.get("/api/users", usersController.getAllUsers)

// ** get specific user
router.get("/api/users/:userId", usersController.getSpecificUser)

// ** update specific user
router.put("/api/users/:userId", express.json({extended: true}), usersController.updateUser)

// ** create a new user
router.post("/api/users", express.json({extended: true}), usersController.createUser)

// ** delete specific user
router.delete("/api/users/:userId", usersController.deleteUser)

module.exports = router