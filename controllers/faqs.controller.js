const mongoose = require("mongoose")
const objectId = mongoose.Types.ObjectId
const faqModel = require("../models/faq.model")

// ** get all faqs
exports.getAllFaqs = async (req, res, next) => {
    const faqs = await faqModel.find()
    res.status(200).send({
        data: faqs
    })
}

// ** get specific faq
exports.getSpecificFaq = async (req, res, next) => {
    const faqId = req.params.faqId
    if (!objectId.isValid(faqId)) {
        return res.status(400).send("faq Id is wrong format")
    }
    const specificFaq = await faqModel.findById(faqId)
    if (!specificFaq) {
        return res.status(400).send("this faq dose not exist")
    }
    res.status(200).send({
        data: specificFaq
    })
}

// ** create a new faq
exports.createFaq = async (req, res, next) => {
    await faqModel.create({
        question: req.body.question,
        answer: req.body.answer
    })
    res.status(200).send({
        data: {
            question: req.body.question,
            answer: req.body.answer
        } 
    })
}

// ** update specific faq
exports.updateFaq = async (req, res, next) => {
    const faqId = req.params.faqId
    if (!objectId.isValid(faqId)) {
        return res.status(400).send("faq Id is wrong format")
    }
    const specificFaq = await faqModel.findById(faqId)
    if (!specificFaq) {
        return res.status(400).send("this faq dose not exist")
    }
    await faqModel.updateOne(specificFaq, {
        question: req.body.question,
        answer: req.body.answer
    })
    res.status(200).send({
        data: {
            question: req.body.question,
            answer: req.body.answer
        }
    })
}

// ** delete specific faq
exports.deleteFaq = async (req, res, next) => {
    const faqId = req.params.faqId
    if (!objectId.isValid(faqId)) {
        return res.status(400).send("faq Id is wrong format")
    }
    const specificFaq = await faqModel.findById(faqId)
    if (!specificFaq) {
        return res.status(400).send("this faq dose not exist")
    }
    await faqModel.deleteOne(specificFaq)
    res.status(200).send("faq deleted successfully")
}