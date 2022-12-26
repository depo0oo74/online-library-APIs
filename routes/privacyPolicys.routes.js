import express from "express";
const router = express.Router();
import { getAllPrivacyPolicys, getSpecificPrivacyPolicy, createPrivacyPolicy, updatePrivacyPolicy, deletePrivacyPolicy } from "../controllers/privacyPolicys.controllers.js";
import { isAdminUser } from "../controllers/Auth/auth.controller.js";

// ** get all privacy policys
router.get("/api/v1/privacyPolices", getAllPrivacyPolicys);

// ** get specific privacy Policy
router.get("/api/v1/privacyPolices/:privacyPolicyId", getSpecificPrivacyPolicy);

// ** update specific privacy Policy
router.put("/api/v1/privacyPolices/:privacyPolicyId", express.json({ extended: true }), isAdminUser, updatePrivacyPolicy);

// ** create a new privacy Policy
router.post("/api/v1/privacyPolices", express.json({ extended: true }), isAdminUser, createPrivacyPolicy);

// ** delete specific privacy Policy
router.delete("/api/v1/privacyPolices/:privacyPolicyId", isAdminUser, deletePrivacyPolicy);

export default router;
