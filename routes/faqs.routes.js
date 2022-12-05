import express from "express";
const router = express.Router();
import { getAllFaqs, getSpecificFaq, updateFaq, createFaq, deleteFaq } from "../controllers/faqs.controller.js";

// ** get all faqs
router.get("/api/faqs", getAllFaqs);

// ** get specific faq
router.get("/api/faqs/:faqId", getSpecificFaq);

// ** update specific faq
router.put("/api/faqs/:faqId", express.json({ extended: true }), updateFaq);

// ** create a new faq
router.post("/api/faqs", express.json({ extended: true }), createFaq);

// ** delete specific faq
router.delete("/api/faqs/:faqId", deleteFaq);

export default router;
