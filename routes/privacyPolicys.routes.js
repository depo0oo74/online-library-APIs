import express from "express";
const router = express.Router();
import { getAllPrivacyPolicys, getSpecificPrivacyPolicy, createPrivacyPolicy, updatePrivacyPolicy, deletePrivacyPolicy } from "../controllers/privacyPolicys.controllers.js";

// ** get all privacy policys
router.get("/api/privacyPolices", getAllPrivacyPolicys);

// ** get specific privacy Policy
router.get("/api/privacyPolices/:privacyPolicyId", getSpecificPrivacyPolicy);

// ** update specific privacy Policy
router.put("/api/privacyPolices/:privacyPolicyId", express.json({ extended: true }), updatePrivacyPolicy);

// ** create a new privacy Policy
router.post("/api/privacyPolices", express.json({ extended: true }), createPrivacyPolicy);

// ** delete specific privacy Policy
router.delete("/api/privacyPolices/:privacyPolicyId", deletePrivacyPolicy);

export default router;
