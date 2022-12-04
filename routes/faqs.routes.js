const express = require("express")
const router = express.Router()
const faqsController = require("../controllers/faqs.controller")

// ** get all faqs
router.get("/api/faqs", faqsController.getAllFaqs)

// ** get specific faq
router.get("/api/faqs/:faqId", faqsController.getSpecificFaq)

// ** update specific faq
router.put("/api/faqs/:faqId", express.json({extended: true}), faqsController.updateFaq)

// ** create a new faq
router.post("/api/faqs", express.json({extended: true}), faqsController.createFaq)

// ** delete specific faq
router.delete("/api/faqs/:faqId", faqsController.deleteFaq)

module.exports = router