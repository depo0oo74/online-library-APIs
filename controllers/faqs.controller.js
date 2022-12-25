import mongoose from "mongoose";
const objectId = mongoose.Types.ObjectId;
import faqModel from "../models/faq.model.js";

// ** get all faqs
export const getAllFaqs = async (req, res, next) => {
  const faqs = await faqModel.find();
  res.status(200).send({
    data: faqs,
  });
};

// ** get specific faq
export const getSpecificFaq = async (req, res, next) => {
  const faqId = req.params.faqId;
  if (!objectId.isValid(faqId)) {
    return res.status(400).send({
      message: "faq Id is wrong format",
    });
  }
  const specificFaq = await faqModel.findById(faqId);
  if (!specificFaq) {
    return res.status(400).send({
      message: "this faq dose not exist",
    });
  }
  res.status(200).send({
    data: specificFaq,
  });
};

// ** create a new faq
export const createFaq = async (req, res, next) => {
  await faqModel.create({
    question: req.body.question,
    answer: req.body.answer,
  });
  res.status(200).send({
    data: {
      question: req.body.question,
      answer: req.body.answer,
    },
  });
};

// ** update specific faq
export const updateFaq = async (req, res, next) => {
  const faqId = req.params.faqId;
  if (!objectId.isValid(faqId)) {
    return res.status(400).send({
      message: "faq Id is wrong format",
    });
  }
  const specificFaq = await faqModel.findById(faqId);
  if (!specificFaq) {
    return res.status(400).send({
      message: "this faq dose not exist",
    });
  }
  await faqModel.updateOne(specificFaq, {
    question: req.body.question,
    answer: req.body.answer,
  });
  res.status(200).send({
    data: {
      question: req.body.question,
      answer: req.body.answer,
    },
  });
};

// ** delete specific faq
export const deleteFaq = async (req, res, next) => {
  const faqId = req.params.faqId;
  if (!objectId.isValid(faqId)) {
    return res.status(400).send({
      message: "faq Id is wrong format",
    });
  }
  const specificFaq = await faqModel.findById(faqId);
  if (!specificFaq) {
    return res.status(400).send({
      message: "this faq dose not exist",
    });
  }
  await faqModel.deleteOne(specificFaq);
  res.status(200).send({
    message: "faq deleted successfully",
  });
};
