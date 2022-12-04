const mongoose = require("mongoose")
const objectId = mongoose.Types.ObjectId
const messageModel = require("../models/message.model")

// ** get all messages
exports.getAllMessages = async (req, res, next) => {
    const messages = await messageModel.find()
    res.status(200).send({
        data: messages
    })
}

// ** get specific message
exports.getSpecificMessage = async (req, res, next) => {
    const messageId = req.params.messageId
    if (!objectId.isValid(messageId)) {
        return res.status(400).send("message Id is wrong format")
    }
    const specificMessage = await messageModel.findById(messageId)
    if (!specificMessage) {
        return res.status(400).send("this message dose not exist")
    }
    res.status(200).send({
        data: specificMessage
    })
}

// ** create a new message
exports.createMessage = async (req, res, next) => {
    await messageModel.create({
        title: req.body.title,
        content: req.body.content
    })
    res.status(200).send({
        data: {
            title: req.body.title,
            content: req.body.content
        } 
    })
}

// ** update specific message
exports.updateMessage = async (req, res, next) => {
    const messageId = req.params.messageId
    if (!objectId.isValid(messageId)) {
        return res.status(400).send("message Id is wrong format")
    }
    const specificMessage = await messageModel.findById(messageId)
    if (!specificMessage) {
        return res.status(400).send("this message dose not exist")
    }
    await messageModel.updateOne(specificMessage, {
        title: req.body.title,
        content: req.body.content
    })
    res.status(200).send({
        data: {
            title: req.body.title,
            content: req.body.content
        }
    })
}

// ** delete specific message
exports.deleteMessage = async (req, res, next) => {
    const messageId = req.params.messageId
    if (!objectId.isValid(messageId)) {
        return res.status(400).send("message Id is wrong format")
    }
    const specificMessage = await messageModel.findById(messageId)
    if (!specificMessage) {
        return res.status(400).send("this message dose not exist")
    }
    await messageModel.deleteOne(specificMessage)
    res.status(200).send("message deleted successfully")
}