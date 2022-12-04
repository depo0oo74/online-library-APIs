const mongoose = require("mongoose")
const objectId = mongoose.Types.ObjectId
const userModel = require("../models/user.model")

// ** get all users
exports.getAllUsers = async (req, res, next) => {
    const users = await userModel.find()
    res.status(200).send({
        data: users
    })
}

// ** get specific user
exports.getSpecificUser = async (req, res, next) => {
    const userId = req.params.userId
    if (!objectId.isValid(userId)) {
        return res.status(400).send("user Id is wrong format")
    }
    const specificUser = await userModel.findById(userId)
    if (!specificUser) {
        return res.status(400).send("this user dose not exist")
    }
    res.status(200).send({
        data: specificUser
    })
}

// ** create a new user
exports.createUser = async (req, res, next) => {
    const isUser = await userModel.findOne({email: req.body.email})
    if (isUser) {
        return res.status(400).send("this user already exist")
    }
    await userModel.create({
        username: req.body.username,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.phoneNumber
    })
    res.status(200).send({
        data: {
            username: req.body.username,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            password: req.body.phoneNumber
        }
    })
}

// ** update specific user
exports.updateUser = async (req, res, next) => {
    const userId = req.params.userId
    if (!objectId.isValid(userId)) {
        return res.status(400).send("user Id is wrong format")
    }
    const specificUser = await userModel.findById(userId)
    if (!specificUser) {
        return res.status(400).send("this user dose not exist")
    }
    await userModel.updateOne(specificUser, {
        username: req.body.username,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.phoneNumber
    })
    res.status(200).send({
        data: {
            username: req.body.username,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            password: req.body.phoneNumber
        }
    })
}

// ** delete specific user
exports.deleteUser = async (req, res, next) => {
    const userId = req.params.userId
    if (!objectId.isValid(userId)) {
        return res.status(400).send("user Id is wrong format")
    }
    const specificUser = await userModel.findById(userId)
    if (!specificUser) {
        return res.status(400).send("this user dose not exist")
    }
    await userModel.deleteOne(specificUser)
    res.status(200).send("user deleted successfully")
}