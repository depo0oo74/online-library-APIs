import express from "express";
const router = express.Router();
import { getAllFaqs, getSpecificFaq, updateFaq, createFaq, deleteFaq } from "../controllers/faqs.controller.js";

// ** get all faqs
router.get("/api/v1/faqs", getAllFaqs);

// ** get specific faq
router.get("/api/v1/faqs/:faqId", getSpecificFaq);

// ** update specific faq
router.put("/api/v1/faqs/:faqId", express.json({ extended: true }), updateFaq);

// ** create a new faq
router.post("/api/v1/faqs", express.json({ extended: true }), createFaq);

// ** delete specific faq
router.delete("/api/v1/faqs/:faqId", deleteFaq);

export default router;
