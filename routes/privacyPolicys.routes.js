const express = require("express");
const router = express.Router();
const privacyPolicysController = require("../controllers/privacyPolicys.controllers");

// ** get all privacy policys
router.get("/api/privacyPolices", privacyPolicysController.getAllPrivacyPolicys);

// ** get specific privacy Policy
router.get("/api/privacyPolices/:privacyPolicyId", privacyPolicysController.getSpecificPrivacyPolicy);

// ** update specific privacy Policy
router.put("/api/privacyPolices/:privacyPolicyId", express.json({ extended: true }), privacyPolicysController.updatePrivacyPolicy);

// ** create a new privacy Policy
router.post("/api/privacyPolicys", express.json({ extended: true }), privacyPolicysController.createPrivacyPolicy);

// ** delete specific privacy Policy
router.delete("/api/privacyPolices/:privacyPolicyId", privacyPolicysController.deletePrivacyPolicy);

module.exports = router;
