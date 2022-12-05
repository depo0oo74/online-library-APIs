import mongoose from "mongoose";
const objectId = mongoose.Types.ObjectId;
import privacyPolicyModel from "../models/privacyPolicy.model.js";

// ** get all privacy policys
export const getAllPrivacyPolicys = async (req, res, next) => {
  const privacyPolicys = await privacyPolicyModel.find();
  res.status(200).send({
    data: privacyPolicys,
  });
};

// ** get specific privacy policy
export const getSpecificPrivacyPolicy = async (req, res, next) => {
  const privacyPolicyId = req.params.privacyPolicyId;
  if (!objectId.isValid(privacyPolicyId)) {
    return res.status(400).send("privacy policy Id is wrong format");
  }
  const specificPrivacyPolicy = await privacyPolicyModel.findById(privacyPolicyId);
  if (!specificPrivacyPolicy) {
    return res.status(400).send("this privacy policy dose not exist");
  }
  res.status(200).send({
    data: specificPrivacyPolicy,
  });
};

// ** create a new privacy policy
export const createPrivacyPolicy = async (req, res, next) => {
  await privacyPolicyModel.create({
    title: req.body.title,
    content: req.body.content,
  });
  res.status(200).send({
    data: {
      title: req.body.title,
      content: req.body.content,
    },
  });
};

// ** update specific privacy policy
export const updatePrivacyPolicy = async (req, res, next) => {
  const privacyPolicyId = req.params.privacyPolicyId;
  if (!objectId.isValid(privacyPolicyId)) {
    return res.status(400).send("privacy policy Id is wrong format");
  }
  const specificPrivacyPolicy = await privacyPolicyModel.findById(privacyPolicyId);
  if (!specificPrivacyPolicy) {
    return res.status(400).send("this privacy policy dose not exist");
  }
  await privacyPolicyModel.updateOne(specificPrivacyPolicy, {
    title: req.body.title,
    content: req.body.content,
  });
  res.status(200).send({
    data: {
      title: req.body.title,
      content: req.body.content,
    },
  });
};

// ** delete specific privacy policy
export const deletePrivacyPolicy = async (req, res, next) => {
  const privacyPolicyId = req.params.privacyPolicyId;
  if (!objectId.isValid(privacyPolicyId)) {
    return res.status(400).send("privacy policy Id is wrong format");
  }
  const specificPrivacyPolicy = await privacyPolicyModel.findById(privacyPolicyId);
  if (!specificPrivacyPolicy) {
    return res.status(400).send("this privacy policy dose not exist");
  }
  await privacyPolicyModel.deleteOne(specificPrivacyPolicy);
  res.status(200).send("privacy policy deleted successfully");
};
